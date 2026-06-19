{/* eslint-disable react/no-unescaped-entities */}
export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-slate-800">Privacy Policy</h1>
        <p className="mb-4 text-slate-600">
          Your privacy is important to us. This Audio Converter runs entirely in your browser. All audio files you upload
          are processed locally on your device. No file data is ever transmitted to our servers or any third‑party service.
          The conversion engine (FFmpeg compiled to WebAssembly) operates within the browser's sandbox, ensuring that your
          information stays on your computer.
        </p>
        <p className="mb-4 text-slate-600">
          We may collect minimal analytics data such as page views or error logs, but these logs contain no personal or
          audio content. Any data collected is anonymized and used solely to improve the service.
        </p>
        <p className="mb-4 text-slate-600">
          By using this site you agree to this privacy practice. If you have any questions, please contact us via the
          Contact page.
        </p>
      </div>
    </main>
  );
}