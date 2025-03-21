"use client"
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

// 🎛 CONFIGURATION (Adjustable Properties)
const CONFIG = {
  MAX_CIRCLES: 10, // Max number of circles
  CIRCLE_THICKNESS: 6, // Border thickness
  CIRCLE_SPACING: 20, // Space between each circle
  CIRCLE_COLOR: "#39ff14", // Neon Green
  CIRCLE_OPENING: 30, // % of the circle that is open
  ROTATION_SPEED: 10, // Rotation speed in seconds
  CIRCLE_MAX_HITS: 2, // Hits before a circle is destroyed

  BALL_COLOR: "#ed1c31", // Ball color (Red)
  BALL_SIZE: 30, // Ball radius (px)
  BALL_GRAVITY: 0.1, // Gravity pulling the ball down
  BALL_ELASTICITY: 1, // Perfect bounce (1 = no energy loss)
  INITIAL_VELOCITY: { x: 0, y: -3 }, // Initial velocity
};

const CircleAnimation = () => {
  const [circles, setCircles] = useState([{ id: 0, size: 800, hits: 0 }]);
  const [ball, setBall] = useState({ x: 0, y: -80 });

  // 🔄 Ball physics state (useRef to prevent excessive re-renders)
  const ballRef = useRef({
    x: 0,
    y: -80,
    dx: CONFIG.INITIAL_VELOCITY.x,
    dy: CONFIG.INITIAL_VELOCITY.y,
  });

  const lastHitCircleId = useRef(null); // Prevent multiple bounces per frame

  // 🔄 Add new circles every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCircles((prev) => {
        if (prev.length >= CONFIG.MAX_CIRCLES) return prev;
        const last = prev[prev.length - 1];
        return [
          ...prev,
          { id: prev.length, size: last.size - CONFIG.CIRCLE_SPACING, hits: 0 },
        ];
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // 🎾 Ball Physics with requestAnimationFrame
  useEffect(() => {
    const moveBall = () => {
      let { x, y, dx, dy } = ballRef.current;
      x += dx;
      y += dy;
      dy += CONFIG.BALL_GRAVITY; // Apply gravity

      let hitCircleId = null;

      // 🌍 Ball collision with circles (bounces on inner boundary)
      setCircles((currentCircles: any[]) => {
        return currentCircles
          .map((circle) => {
            let distance = Math.sqrt(x ** 2 + y ** 2);
            let innerBoundary = circle.size / 2 - CONFIG.CIRCLE_THICKNESS;

            // 🔍 Check for collision with inner boundary
            if (Math.abs(distance - innerBoundary) <= CONFIG.BALL_SIZE / 2 && dy > 0) {
              if (lastHitCircleId.current !== circle.id) {
                dy = -Math.abs(dy) * CONFIG.BALL_ELASTICITY; // Perfect bounce
                hitCircleId = circle.id;
                ballRef.current = { x, y, dx, dy };
                setBall({ x, y });

                // ✅ Increment hit count
                const newHits = circle.hits + 1;

                // 🛑 If circle reached max hits, destroy it & respawn after 4 sec
                if (newHits >= CONFIG.CIRCLE_MAX_HITS) {
                  setTimeout(() => {
                    setCircles((prev) => [
                      ...prev,
                      { id: circle.id, size: circle.size, hits: 0 }, // Respawn same circle
                    ]);
                  }, 4000);
                  return null; // Remove circle immediately
                }

                return { ...circle, hits: newHits };
              }
            }

            return circle;
          })
          .filter(Boolean); // Remove `null` circles
      });
      console.log(circles)
      // setCircles(
      //   (currentCircles) =>
      //     currentCircles
      //       .map((circle) => {
      //         let distance = Math.sqrt(x ** 2 + y ** 2);
      //         let innerBoundary = circle.size / 2 - CONFIG.CIRCLE_THICKNESS;

      //         // 🔍 Check for collision with inner boundary
      //         if (Math.abs(distance - innerBoundary) <= CONFIG.BALL_SIZE / 2 && dy > 0) {
      //           if (lastHitCircleId.current !== circle.id) {
      //             dy = -Math.abs(dy) * CONFIG.BALL_ELASTICITY; // Perfect bounce
      //             hitCircleId = circle.id;
      //             ballRef.current = { x, y, dx, dy };
      //             setBall({ x, y });
      //             return { ...circle, hits: circle.hits + 1 };
      //           }

      //         }

      //         return circle;
      //       })
      //       .filter((circle) => circle.hits < CONFIG.CIRCLE_MAX_HITS) // Destroy circles after 5 hits
      // );

      if (hitCircleId !== null) {
        lastHitCircleId.current = hitCircleId; // Store last hit circle to prevent multiple bounces
      } else {
        lastHitCircleId.current = null;
      }

      ballRef.current = { x, y, dx, dy };
      setBall({ x, y });

      requestAnimationFrame(moveBall);
    };

    requestAnimationFrame(moveBall);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative flex items-center justify-center">
        {/* 🔵 Rotating Circles */}
        {circles.map(({ id, size }) => (
          <motion.div
            key={id}
            className="absolute border-2 rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              borderColor: CONFIG.CIRCLE_COLOR,
              borderWidth: `${CONFIG.CIRCLE_THICKNESS}px`,
              clipPath: `polygon(0% ${CONFIG.CIRCLE_OPENING}%, 100% ${CONFIG.CIRCLE_OPENING}%, 100% 100%, 0% 100%)`,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: CONFIG.ROTATION_SPEED, repeat: Infinity, ease: "linear" }}
          />
        ))}

        {/* 🎾 Bouncing Ball */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: CONFIG.BALL_SIZE,
            height: CONFIG.BALL_SIZE,
            backgroundColor: CONFIG.BALL_COLOR,
          }}
          animate={{ x: ball.x, y: ball.y }}
          transition={{ duration: 0.02, ease: "linear" }}
        />
      </div>
    </div>
  );
};

export default CircleAnimation;