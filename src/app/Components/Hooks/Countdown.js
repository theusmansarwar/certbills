"use client"; // ✅ Required for useEffect in Next.js App Router

import { useEffect, useState } from "react";

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let time = {};

    if (difference > 0) {
      time = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      time = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return time;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup
  }, [targetDate]);

  return (
    <div className="counter">
      <p>
        <span>{timeLeft.days}</span>D <span>{timeLeft.hours}</span>H <span>{timeLeft.minutes}</span>M <span>{timeLeft.seconds}</span>S
      </p>
    </div>
  );
}
