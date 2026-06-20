"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile } from "@ffmpeg/util";
import { motion } from "framer-motion";
import {
  FileAudio,
  Loader2,
  CheckCircle2,
  Headphones,
  Music,
} from "lucide-react";
import clsx from "clsx";

export default function AudioConverter() {
  const [ready, setReady] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [format, setFormat] = useState<string>("wav");
  const [progress, setProgress] = useState<number>(0);
  const [outputUrl, setOutputUrl] = useState<string | null>(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [isHoveringCard, setIsHoveringCard] = useState(false);

  const ffmpegRef = useRef<FFmpeg | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const outputUrlRef = useRef<string | null>(null);

  // Keep outputUrlRef in sync
  useEffect(() => {
    outputUrlRef.current = outputUrl;
  }, [outputUrl]);

  // Load FFmpeg on mount
  useEffect(() => {
    const load = async () => {
      const ffmpeg = new FFmpeg();
      ffmpegRef.current = ffmpeg;

      ffmpeg.on("log", ({ message }) => {
        console.log("[FFmpeg]", message);
      });

      try {
        await ffmpeg.load({
          coreURL: "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd/ffmpeg-core.js",
          wasmURL: "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd/ffmpeg-core.wasm",
        });
        setReady(true);
      } catch (err) {
        console.error("FFmpeg failed to load:", err);
      }
    };
    load();
    return () => {
      if (outputUrlRef.current) URL.revokeObjectURL(outputUrlRef.current);
    };
  }, []);

  // 3D Tilt Effect logic
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current || !isHoveringCard) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      cardRef.current.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
    },
    [isHoveringCard]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHoveringCard(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHoveringCard(false);
    if (cardRef.current) {
      cardRef.current.style.transform =
        "perspective(1000px) rotateY(0deg) rotateX(0deg)";
    }
  }, []);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(false);
    if (e.dataTransfer.files?.[0]) setFile(e.dataTransfer.files[0]);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setFile(e.target.files[0]);
  };

  const openFileDialog = () => {
    const input = document.getElementById("fileInput");
    if (input) input.click();
  };

  const startConversion = async () => {
    if (!file) return;
    const ffmpeg = ffmpegRef.current;
    if (!ffmpeg) return;
    const inputName = file.name;
    const baseName =
      inputName.substring(0, inputName.lastIndexOf(".")) || "input";
    const outputName = `${baseName}.${format}`;

    setIsConverting(true);
    setProgress(0);

    try {
      await ffmpeg.writeFile(inputName, await fetchFile(file));

      ffmpeg.on("progress", ({ progress: p }) => {
        setProgress(Math.round(p * 100));
      });

      await ffmpeg.exec(["-i", inputName, outputName]);

      const data = (await ffmpeg.readFile(outputName)) as Uint8Array;
      const blob = new Blob([new Uint8Array(data)], { type: `audio/${format}` });
      const url = URL.createObjectURL(blob);
      setOutputUrl(url);

      // Ensure memory cleanup: Keep ffmpeg.deleteFile calls intact per user request
      await ffmpeg.deleteFile(inputName);
      await ffmpeg.deleteFile(outputName);
    } catch (err) {
      console.error("Conversion error:", err);
    } finally {
      setIsConverting(false);
      setProgress(0);
    }
  };

  const handleReset = () => {
    if (outputUrl) URL.revokeObjectURL(outputUrl);
    setFile(null);
    setOutputUrl(null);
    setProgress(0);
    setIsConverting(false);
  };

  const downloadFile = () => {
    if (!outputUrl) return;
    const a = document.createElement("a");
    a.href = outputUrl;
    a.download = `converted.${format}`;
    a.click();
  };

  const formats = [
    { value: "wav", label: "WAV", desc: "Uncompressed, high quality" },
    { value: "mp3", label: "MP3", desc: "Small, universal" },
    { value: "ogg", label: "OGG", desc: "Open source, good" },
    { value: "flac", label: "FLAC", desc: "Lossless, compact" },
    { value: "aac", label: "AAC", desc: "Efficient, crisp" },
    { value: "m4a", label: "M4A", desc: "Apple ecosystem" },
  ];

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="max-w-2xl mx-auto p-8 bg-white rounded-3xl border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-transform duration-200 ease-out will-change-transform"
      style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-2xl bg-gradient-to-br from-cyan-50 to-emerald-50 border border-cyan-100/50">
          <Headphones className="w-6 h-6 text-sonix-cyan" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Audio Converter
          </h2>
          <p className="text-sm text-slate-500">Fast, secure, and free.</p>
        </div>
      </div>

      {!ready ? (
        <div className="flex flex-col items-center justify-center py-12 text-slate-400">
          <Loader2 className="w-8 h-8 animate-spin mb-3 text-sonix-cyan" />
          <p className="text-sm">Loading conversion engine…</p>
        </div>
      ) : (
        <>
          {outputUrl ? (
            /* Success State */
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-8"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyan-50 to-emerald-50 border border-cyan-100 mb-4 shadow-inner">
                <CheckCircle2 className="w-10 h-10 text-sonix-cyan" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Conversion Complete!
              </h3>
              <p className="text-slate-500 mb-6">
                Your file has been converted to {format.toUpperCase()}.
              </p>
              <div className="flex gap-3 justify-center">
                <motion.button
                  whileHover={{ scale: 1.03, filter: "brightness(1.05)" }}
                  whileTap={{ scale: 0.96 }}
                  onClick={downloadFile}
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-emerald-400 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all"
                >
                  Download File
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleReset}
                  className="px-6 py-3 bg-slate-100 text-slate-600 font-medium rounded-xl border border-slate-200/60 hover:bg-slate-200 transition-colors"
                >
                  Convert Another
                </motion.button>
              </div>
            </motion.div>
          ) : isConverting ? (
            /* Processing State */
            <motion.div
              key="processing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-8"
            >
              <div className="flex justify-center gap-1 mb-6 h-12 items-end">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    className="w-3 bg-gradient-to-t from-cyan-500 to-emerald-400 rounded-full"
                    animate={{ height: [12, 48, 12] }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.8,
                      delay: i * 0.12,
                      ease: "easeInOut",
                    }}
                    style={{ borderRadius: "4px" }}
                  />
                ))}
              </div>
              <p className="text-center text-slate-600 font-medium mb-3">
                Converting your audio…
              </p>
              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
              <p className="text-center text-sm text-slate-400 mt-2">
                {progress}%
              </p>
            </motion.div>
          ) : (
            /* Main Form */
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Dropzone */}
              <motion.div
                className={clsx(
                  "border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer mb-6 transition-all duration-300",
                  isDragActive
                    ? "border-cyan-400 bg-cyan-50/30 shadow-[0_0_20px_rgba(0,212,255,0.15)]"
                    : file
                    ? "border-emerald-300 bg-emerald-50/30"
                    : "border-slate-300 hover:border-slate-400"
                )}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={openFileDialog}
              >
                {file ? (
                  <div className="flex items-center justify-center gap-3">
                    <Music className="w-8 h-8 text-emerald-500" />
                    <div className="text-left">
                      <p className="text-slate-800 font-semibold">
                        {file.name}
                      </p>
                      <p className="text-xs text-slate-400">
                        {(file.size / (1024 * 1024)).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-50 to-emerald-50 border border-cyan-100/50 mb-3">
                      <FileAudio className="w-7 h-7 text-sonix-cyan" />
                    </div>
                    <p className="text-slate-600 font-medium">
                      Drag & drop an audio file here
                    </p>
                    <p className="text-slate-400 text-sm mt-1">
                      or click to browse
                    </p>
                  </>
                )}
                <input
                  id="fileInput"
                  type="file"
                  accept="audio/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </motion.div>

              {/* Format selector */}
              <label
                className="block mb-2 text-sm font-medium text-slate-700"
                htmlFor="formatSelect"
              >
                Output Format
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
                {formats.map((f) => (
                  <button
                    key={f.value}
                    onClick={() => setFormat(f.value)}
                    type="button"
                    className={clsx(
                      "p-3 rounded-xl border text-left transition-all duration-200",
                      format === f.value
                        ? "border-cyan-400 bg-cyan-50/50 shadow-sm"
                        : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                    )}
                  >
                    <span
                      className={clsx(
                        "block font-bold text-sm",
                        format === f.value
                          ? "text-cyan-600"
                          : "text-slate-700"
                      )}
                    >
                      {f.label}
                    </span>
                    <span className="text-xs text-slate-400">
                      {f.desc}
                    </span>
                  </button>
                ))}
              </div>

              {/* Convert button */}
              <motion.button
                whileHover={{ scale: 1.03, filter: "brightness(1.05)" }}
                whileTap={{ scale: 0.96 }}
                disabled={!file}
                onClick={startConversion}
                className={clsx(
                  "w-full py-4 text-base font-bold text-white rounded-2xl shadow-lg shadow-cyan-500/20 transition-all duration-300",
                  file
                    ? "bg-gradient-to-r from-cyan-500 to-emerald-400 hover:shadow-cyan-500/40"
                    : "bg-slate-300 cursor-not-allowed shadow-none"
                )}
              >
                Convert Audio
              </motion.button>
            </motion.div>
          )}
        </>
      )}
    </div>
  );
}
