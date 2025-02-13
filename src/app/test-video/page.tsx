"use client"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GRAVITY = 0.2; // Gravity force
const ELASTICITY = 1.09; // Perfect bounce
const INITIAL_VELOCITY = { x: 0, y: 0 }; // Ball's start velocity

const CircleAnimation = () => {
  const [circles, setCircles] = useState([{ id: 0, size: 600, speed: 4 }]);
  const [ball, setBall] = useState({ x: 0, y: 0, dx: INITIAL_VELOCITY.x, dy: INITIAL_VELOCITY.y });

  // Add circles every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setCircles((prev) => {
        if (prev.length > 100) return prev; // Limit circles
        const last = prev[prev.length - 1];
        return [...prev, { id: prev.length, size: last.size - 10, speed: last.speed - 0.3 }];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Ball Physics: Gravity + Bounce
  useEffect(() => {
    const moveBall = () => {
      setBall((prev) => {
        let newX = prev.x + prev.dx;
        let newY = prev.y + prev.dy + GRAVITY;

        let newDx = prev.dx;
        let newDy = prev.dy + GRAVITY; // Apply gravity

        // **Collision Detection (Inner Walls)**
        for (let circle of circles) {
          let distance = Math.sqrt(newX ** 2 + newY ** 2);
          let innerBoundary = circle.size / 2 - 5; // Circle's inner edge

          // If the ball reaches the inner boundary, bounce it
          if (distance >= innerBoundary && prev.dy > 0) {
            newDy = -Math.abs(newDy) * ELASTICITY; // Reverse direction with elasticity
            break; // Prevent multiple bounces at once
          }
        }

        return { x: newX, y: newY, dx: newDx, dy: newDy };
      });

      requestAnimationFrame(moveBall);
    };

    moveBall();
  }, [circles]);

  return (
    <div className="flex items-center justify-center h-screen bg-fill relative">
      <div className="relative flex items-center justify-center">
        {circles.map(({ id, size, speed }) => (
          <motion.div
            key={id}
            className="absolute border-2 rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              borderColor: "#ff6600", // Neon green
              borderWidth: "4px",
              clipPath: "polygon(0% 25%, 100% 25%, 100% 100%, 0% 100%)", // 40% open gap
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
          />
        ))}

        {/* Bouncing Ball */}
        <motion.div
          className="absolute bg-[#39ff14] rounded-full"
          style={{ width: 30, height: 30 }}
          animate={{ x: ball.x, y: ball.y }}
          transition={{ duration: 0.01, ease: "linear" }}
        />
      </div>
    </div>
  );
};

export default CircleAnimation;