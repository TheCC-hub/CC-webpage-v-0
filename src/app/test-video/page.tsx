"use client"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// 🔧 Configurable Attributes
const CONFIG = {
  MAX_CIRCLES: 20, // Max number of circles
  CIRCLE_THICKNESS: 6, // Circle border thickness
  CIRCLE_SPACING: 16, // Space between each circle
  CIRCLE_COLOR: "#39ff14", // Neon Green
  CIRCLE_OPENING: 30, // Percentage of the circle that is open
  ROTATION_SPEED: 6, // Rotation speed in seconds

  BALL_COLOR: "#ed1c31", // Ball color (Red)
  BALL_SIZE: 30, // Ball radius (px)
  BALL_GRAVITY: 0.3, // Gravity pulling the ball down
  BALL_ELASTICITY: 0.98, // Bounce factor (1 = perfect, <1 loses energy)
  INITIAL_VELOCITY: { x: 0, y: -10 }, // Initial velocity
};

const CircleAnimation = () => {
  const [circles, setCircles] = useState([{ id: 0, size: 800, speed: CONFIG.ROTATION_SPEED }]);
  const [ball, setBall] = useState({
    x: 0,
    y: -80,
    dx: CONFIG.INITIAL_VELOCITY.x,
    dy: CONFIG.INITIAL_VELOCITY.y,
  });

  // 🔄 Add new circles every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setCircles((prev) => {
        if (prev.length >= CONFIG.MAX_CIRCLES) return prev;
        const last = prev[prev.length - 1];
        return [
          ...prev,
          { id: prev.length, size: last.size - CONFIG.CIRCLE_SPACING, speed: Math.max(3, last.speed - 0.3) },
        ];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // 🎾 Ball Physics: Gravity & Bouncing
  useEffect(() => {
    const moveBall = () => {
      setBall((prev) => {
        let newX = prev.x + prev.dx;
        let newY = prev.y + prev.dy;
        let newDx = prev.dx;
        let newDy = prev.dy + CONFIG.BALL_GRAVITY; // Gravity pulls the ball down

        // 🌍 Handle Ball Bouncing off Inner Boundaries
        for (let circle of circles) {
          let distance = Math.sqrt(newX ** 2 + newY ** 2);
          let innerBoundary = circle.size / 2 - CONFIG.CIRCLE_THICKNESS;

          // If the ball collides with the inner wall
          if (distance >= innerBoundary && prev.dy > 0) {
            newDy = -Math.abs(newDy) * CONFIG.BALL_ELASTICITY; // Bounce up with elasticity
            newDx = (prev.x / distance) * Math.abs(newDy); // Redirect inward
            newX = (prev.x / distance) * (innerBoundary - CONFIG.BALL_SIZE / 2); // Keep ball inside
            newY = (prev.y / distance) * (innerBoundary - CONFIG.BALL_SIZE / 2);
            break;
          }
        }

        return { x: newX, y: newY, dx: newDx, dy: newDy };
      });

      requestAnimationFrame(moveBall);
    };

    moveBall();
  }, [circles]);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="relative flex items-center justify-center">
        {/* 🔵 Rotating Circles */}
        {circles.map(({ id, size, speed }) => (
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
            transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
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