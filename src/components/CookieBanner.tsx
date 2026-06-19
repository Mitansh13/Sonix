/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("sonix-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(
      "sonix-cookie-consent",
      JSON.stringify({
        accepted: true,
        acceptedAt: new Date().toISOString(),
      })
    );
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(
      "sonix-cookie-consent",
      JSON.stringify({
        accepted: false,
        acceptedAt: new Date().toISOString(),
      })
    );
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:max-w-md z-[100]"
        >
          <div className="bg-white/80 backdrop-blur-md border border-slate-200 shadow-xl rounded-2xl p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-50 to-emerald-50 border border-cyan-100/50 items-center justify-center">
                <Cookie className="w-5 h-5 text-sonix-cyan" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-bold text-slate-800 mb-1">
                    We value your privacy
                  </h3>
                  <button
                    onClick={handleDecline}
                    className="shrink-0 p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                    aria-label="Dismiss cookie banner"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Sonix uses cookies for site analytics and personalized ads
                  (via Google AdSense). Your audio files are processed locally
                  in your browser and never uploaded to any server. By clicking
                  "Accept All", you agree to our{" "}
                  <Link
                    href="/privacy-policy"
                    className="font-medium text-cyan-600 hover:underline"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/terms-of-service"
                    className="font-medium text-cyan-600 hover:underline"
                  >
                    Terms of Service
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="flex gap-3 mt-4 justify-end">
              <button
                onClick={handleDecline}
                className="px-4 py-2 text-sm font-medium text-slate-600 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="px-5 py-2 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-400 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}