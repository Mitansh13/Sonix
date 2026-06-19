"use client";

import React from "react";

type Props = {
  className?: string;
};

export default function Logo({ className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sonix-grad" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00D4FF" offset="0%" />
          <stop stopColor="#00FF87" offset="100%" />
        </linearGradient>
        <linearGradient id="sonix-grad-glow" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00D4FF" offset="0%" stopOpacity="0.4" />
          <stop stopColor="#00FF87" offset="100%" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      {/* Ambient Glow */}
      <circle cx="60" cy="60" r="50" fill="url(#sonix-grad-glow)" className="blur-lg opacity-40" />
      {/* Main S shape intertwined with soundwave */}
      <g strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
        {/* Upper S curve */}
        <path
          d="M36 40 C48 31, 72 31, 84 40 C96 49, 96 67, 84 76"
          stroke="url(#sonix-grad)"
          fill="none"
        />
        {/* Lower S curve */}
        <path
          d="M36 80 C24 71, 24 53, 36 44"
          stroke="url(#sonix-grad)"
          fill="none"
        />
        {/* Soundwave arrows emanating right */}
        <path
          d="M60 50 L70 40 M60 50 L70 60"
          stroke="url(#sonix-grad)"
          strokeWidth="6"
        />
        <path
          d="M72 38 L80 30 M72 62 L80 70"
          stroke="url(#sonix-grad)"
          strokeWidth="5"
        />
      </g>
      {/* Outer ring accent */}
      <circle
        cx="60"
        cy="60"
        r="55"
        stroke="url(#sonix-grad)"
        strokeWidth="2"
        strokeDasharray="8 6"
        opacity="0.6"
        fill="none"
      />
    </svg>
  );
}
