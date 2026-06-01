"use client";

import { cn } from "@/lib/utils";

interface OrangeStarProps {
  className?: string;
  size?: number;
}

export function OrangeStar({ className, size = 120 }: OrangeStarProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 5-pointed star */}
        <path
          d="M60 5 L73.5 42.5 L113 42.5 L81 66 L92.5 105 L60 82 L27.5 105 L39 66 L7 42.5 L46.5 42.5 Z"
          fill="#ff4400"
        />
        {/* Inner smaller star for depth */}
        <path
          d="M60 22 L68 46 L93 46 L73 60 L80 85 L60 72 L40 85 L47 60 L27 46 L52 46 Z"
          fill="#ff6633"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
