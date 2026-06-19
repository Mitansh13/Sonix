import AudioConverter from "@/components/AudioConverter";
import { CheckCircle, Bolt, Shield, Zap, FileAudio, Lock } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-4 py-8 min-h-screen">
      {/* Top Ad Slot */}
      <div className="w-full max-w-[728px] h-[90px] bg-slate-100 rounded-xl flex items-center justify-center text-xs text-slate-400 border border-slate-200/50 mb-8 shadow-inner">
        <span className="opacity-60 font-medium tracking-wider uppercase">Advertisement</span>
      </div>

      <div className="flex flex-col lg:flex-row w-full max-w-7xl gap-8">
        {/* Main Content */}
        <div className="lg:w-[70%] flex flex-col">
          <AudioConverter />

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200/60 shadow-sm text-slate-700 font-medium hover:border-sonix-cyan/30 transition-colors">
              <CheckCircle className="w-5 h-5 text-emerald-500" /> 100% Free
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200/60 shadow-sm text-slate-700 font-medium hover:border-sonix-cyan/30 transition-colors">
              <Bolt className="w-5 h-5 text-amber-500" /> Lightning Fast
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200/60 shadow-sm text-slate-700 font-medium hover:border-sonix-cyan/30 transition-colors">
              <Shield className="w-5 h-5 text-cyan-500" /> Ultimate Privacy
            </div>
          </div>

          {/* SEO Content */}
          <section id="how-it-works" className="mt-16 text-slate-600 leading-relaxed">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-7 h-7 text-sonix-cyan" />
              <h2 className="text-2xl font-bold text-slate-800">How This Local Converter Works</h2>
            </div>
            <p className="mb-4">
              Our audio converter runs entirely in your browser using WebAssembly (WASM). When the page loads, the FFmpeg
              engine – a powerful, open‑source multimedia framework – is downloaded as a small WASM binary. This binary
              executes inside a sandboxed environment, giving the application access to low‑level audio processing capabilities
              without ever sending your files to a server. Because the conversion happens locally, you retain full control
              over your data, and there are no server‑side costs or privacy concerns.
            </p>
            <p className="mb-4">
              The conversion pipeline works in three steps:
            </p>
            <ol className="list-decimal list-inside mb-4 space-y-2">
              <li>Upload or drag‑and‑drop an audio file. The file is read into memory as a JavaScript <code>Blob</code>.</li>
              <li>The FFmpeg WASM engine writes the file into its virtual file system and runs a conversion command
                (e.g. <code>ffmpeg -i input.mp3 output.wav</code>).</li>
              <li>After the process finishes, the converted file is read back from the virtual file system, turned into a
                downloadable URL, and the temporary files are deleted to free memory.</li>
            </ol>
            <p className="mb-4">
              By using <code>ffmpeg.FS(&#39;writeFile&#39;)</code>, <code>ffmpeg.run</code>, and <code>ffmpeg.FS(&#39;readFile&#39;)</code>
              you get a reliable, standards‑compliant conversion that mirrors what you would achieve with the native FFmpeg
              CLI on your computer.
            </p>

            <div className="flex items-center gap-3 mb-6 mt-10">
              <FileAudio className="w-7 h-7 text-sonix-green" />
              <h3 className="text-xl font-bold text-slate-800">Differences Between MP3, WAV, FLAC, and OGG</h3>
            </div>
            <p className="mb-4">
              <strong className="text-slate-800">MP3</strong> is a lossy format that achieves small file sizes by discarding audio data that is less
              audible to the human ear. It is widely supported, making it ideal for streaming and portable devices, but the
              compression can introduce artifacts, especially at lower bitrates.
            </p>
            <p className="mb-4">
              <strong className="text-slate-800">WAV</strong> is an uncompressed PCM format. It preserves the original audio fidelity exactly as
              recorded, which is perfect for professional editing, mixing, or archiving. The trade‑off is large file sizes –
              typically 10 MB per minute of audio at CD quality.
            </p>
            <p className="mb-4">
              <strong className="text-slate-800">FLAC</strong> (Free Lossless Audio Codec) compresses audio without any loss of quality. It reduces file
              size by about 40‑60 % compared to WAV while keeping the original audio data intact. FLAC is popular among
              audiophiles who want high‑resolution sound without the storage overhead of WAV.
            </p>
            <p className="mb-4">
              <strong className="text-slate-800">OGG</strong> (often used with the Vorbis codec) is a lossy format similar to MP3 but generally offers
              better sound quality at comparable bitrates. It is open‑source, free of patents, and widely supported in
              modern browsers and media players.
            </p>
            <p className="mb-4">
              Choosing the right format depends on your use case:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li><strong className="text-slate-800">MP3</strong>: Small size, universal compatibility – best for web streaming.</li>
              <li><strong className="text-slate-800">WAV</strong>: Maximum quality – best for professional editing or archival.</li>
              <li><strong className="text-slate-800">FLAC</strong>: Lossless compression – best for high‑quality listening and long‑term storage.</li>
              <li><strong className="text-slate-800">OGG</strong>: High‑quality lossy – good alternative to MP3 with better fidelity.</li>
            </ul>

            <div className="flex items-center gap-3 mb-6 mt-10">
              <Lock className="w-7 h-7 text-amber-500" />
              <h3 className="text-xl font-bold text-slate-800">Why Client‑Side Processing Guarantees 100 % Privacy</h3>
            </div>
            <p className="mb-4">
              Because the conversion engine runs inside the browser&#39;s sandbox, none of the audio data ever leaves your
              device. The WebAssembly module operates purely in memory, and the only data that leaves the sandbox is the
              optional analytics you may choose to send. This architecture eliminates the risk of data interception,
              storage breaches, or unauthorized third‑party access that can occur with cloud‑based converters.
            </p>
            <p className="mb-4">
              Moreover, the browser enforces strict same‑origin policies. By setting the appropriate HTTP response headers
              (Cross‑Origin‑Opener‑Policy and Cross‑Origin‑Embedder‑Policy) we enable shared‑array‑buffer support for the
              intensive decoding tasks while preserving a secure, isolated execution context.
            </p>
            <p className="mb-4">
              In short, client‑side conversion gives you the power of a full‑featured FFmpeg toolkit without the
              privacy compromises of uploading your personal audio files to external services. Your files stay on your
              computer, and you retain full control over the conversion process.
            </p>
          </section>
        </div>

        {/* Sidebar Ad Slot */}
        <aside className="hidden lg:block lg:w-[30%]">
          <div className="sticky top-24 mx-auto w-full max-w-[300px] h-[600px] bg-slate-100 rounded-xl flex items-center justify-center text-xs text-slate-400 border border-slate-200/50 shadow-inner">
            <span className="opacity-60 font-medium tracking-wider uppercase">Advertisement</span>
          </div>
        </aside>
      </div>
    </div>
  );
}
