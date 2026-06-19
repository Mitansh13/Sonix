export default function Contact() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-slate-800">Contact Us</h1>
        <p className="mb-4 text-slate-600">
          If you have questions, feedback, or need support, feel free to reach out:
        </p>
        <ul className="list-disc list-inside space-y-2 text-slate-600">
          <li>Email: <a href="mailto:support@so-nix.me" className="text-cyan-600 hover:underline">support@so-nix.me</a></li>
          <li>Twitter: <a href="https://twitter.com/sonixaudio" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">@sonixaudio</a></li>
          <li>GitHub: <a href="https://github.com/sonix/audio-converter" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">github.com/sonix/audio-converter</a></li>
        </ul>
      </div>
    </main>
  );
}
