export const metadata = {
  title: "Contact Us | Sonix",
  description: "Contact the Sonix team for support, feedback, or business inquiries.",
};

export default function Contact() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-slate-800">Contact Us</h1>
        <p className="mb-6 text-slate-600">
          Have questions, feedback, or need support? We&apos;d love to hear from you.
        </p>

        <div className="space-y-6">
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
            <h2 className="text-lg font-semibold mb-3 text-slate-800">General Inquiries</h2>
            <p className="text-slate-600 mb-2">For general questions and feedback:</p>
            <a href="mailto:support@so-nix.me" className="text-cyan-600 hover:underline text-lg font-medium">support@so-nix.me</a>
          </div>

          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
            <h2 className="text-lg font-semibold mb-3 text-slate-800">DMCA / Copyright</h2>
            <p className="text-slate-600 mb-2">For copyright infringement claims:</p>
            <a href="mailto:dmca@so-nix.me" className="text-cyan-600 hover:underline text-lg font-medium">dmca@so-nix.me</a>
          </div>

          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
            <h2 className="text-lg font-semibold mb-3 text-slate-800">Privacy</h2>
            <p className="text-slate-600 mb-2">For privacy-related requests (GDPR/CCPA):</p>
            <a href="mailto:privacy@so-nix.me" className="text-cyan-600 hover:underline text-lg font-medium">privacy@so-nix.me</a>
          </div>

          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
            <h2 className="text-lg font-semibold mb-3 text-slate-800">Follow Us</h2>
            <div className="flex gap-4">
              <a href="https://twitter.com/sonixaudio" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">Twitter @sonixaudio</a>
              <span className="text-slate-300">|</span>
              <a href="https://github.com/Mitansh13/Sonix" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
