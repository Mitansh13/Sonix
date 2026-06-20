"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface AdBannerProps {
  slot: string;
  format?: "horizontal" | "vertical" | "rectangular" | "auto";
  style?: React.CSSProperties;
}

export default function AdBanner({
  slot,
  format = "rectangular",
  style = { display: "block", textAlign: "center" },
}: AdBannerProps) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={style}
      data-ad-client="ca-pub-7636187486912431"
      data-ad-slot={slot}
      data-ad-format={format}
    />
  );
}