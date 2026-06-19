export const metadata = {
  title: "Privacy Policy | Sonix",
  description: "Sonix privacy policy - Learn how we protect your data. No files are uploaded. 100% local browser-based processing.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-slate-800">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-6">Last updated: June 20, 2026</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-800">1. Information We Collect</h2>
          <p className="mb-3 text-slate-600">
            <strong>Audio Files:</strong> We do NOT collect, store, or transmit any audio files you convert. All processing
            occurs entirely within your browser using WebAssembly (FFmpeg). Your files never leave your device.
          </p>
          <p className="mb-3 text-slate-600">
            <strong>Cookies:</strong> We use minimal cookies for:
          </p>
          <ul className="list-disc list-inside mb-3 text-slate-600 space-y-1">
            <li>Cookie consent preference storage (required for legal compliance)</li>
            <li>Google AdSense personalization (if you accept personalized ads)</li>
          </ul>
          <p className="text-slate-600">
            <strong>Analytics:</strong> We may use Google Analytics or similar services to collect anonymized, aggregated
            data such as page views, browser type, and general location. This data cannot identify you and contains no
            personal information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-800">2. How We Use Your Information</h2>
          <p className="mb-3 text-slate-600">
            The information we collect (if any) is used solely for:
          </p>
          <ul className="list-disc list-inside mb-3 text-slate-600 space-y-1">
            <li>Improving user experience and service performance</li>
            <li>Displaying relevant advertisements through Google AdSense</li>
            <li>Analyzing aggregate traffic patterns</li>
            <li>Troubleshooting technical issues</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-800">3. Third-Party Services</h2>
          <p className="mb-3 text-slate-600">
            We use the following third-party services:
          </p>
          <ul className="list-disc list-inside mb-3 text-slate-600 space-y-1">
            <li><strong>Google AdSense:</strong> For displaying advertisements. Google may use cookies to personalize ads based on your preferences.</li>
            <li><strong>Google Analytics:</strong> (optional) For understanding site traffic patterns.</li>
            <li><strong>Vercel:</strong> Our hosting provider. See their privacy policy at vercel.com/legal/privacy-policy.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-800">4. Data Retention</h2>
          <p className="mb-3 text-slate-600">
            Since we do not collect audio files, no audio data is retained. Any analytics data collected is anonymized
            and retained for a maximum of 26 months before being automatically deleted.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-800">5. Your Rights Under GDPR (EU Users)</h2>
          <p className="mb-3 text-slate-600">If you are located in the European Economic Area, you have the right to:</p>
          <ul className="list-disc list-inside mb-3 text-slate-600 space-y-1">
            <li><strong>Access:</strong> Request a copy of your personal data</li>
            <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
            <li><strong>Erasure:</strong> Request deletion of your personal data ("right to be forgotten")</li>
            <li><strong>Restrict processing:</strong> Request limitation of data processing</li>
            <li><strong>Data portability:</strong> Request transfer of your data</li>
            <li><strong>Object:</strong> Object to processing of your personal data</li>
          </ul>
          <p className="mb-3 text-slate-600">
            To exercise any of these rights, please contact us at <span className="text-cyan-600">privacy@so-nix.me</span>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-800">6. Your Rights Under CCPA (California Users)</h2>
          <p className="mb-3 text-slate-600">If you are a California resident, you have the right to:</p>
          <ul className="list-disc list-inside mb-3 text-slate-600 space-y-1">
            <li>Know what personal information is collected about you</li>
            <li>Know if your personal information is sold or disclosed and to whom</li>
            <li>Say no to the sale of personal information</li>
            <li>Access your personal information</li>
            <li>Request deletion of your personal information</li>
            <li>Not be discriminated against for exercising your privacy rights</li>
          </ul>
          <p className="mb-3 text-slate-600">
            We do NOT sell personal information. To submit a request, contact us at <span className="text-cyan-600">privacy@so-nix.me</span>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-800">7. Children&apos;s Privacy</h2>
          <p className="mb-3 text-slate-600">
            Our service is not intended for children under 13 years of age. We do not knowingly collect personal
            information from children under 13. If you believe we have inadvertently collected such information,
            please contact us immediately.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-800">8. Data Security</h2>
          <p className="mb-3 text-slate-600">
            Since all audio processing happens locally on your device, your files are protected by your browser&apos;s
            security sandbox. We implement industry-standard security measures for our servers, including encryption
            in transit (HTTPS/TLS) and access controls.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-800">9. International Data Transfers</h2>
          <p className="mb-3 text-slate-600">
            If you are located outside the United States, please note that any information we collect (analytics, etc.)
            may be transferred to and processed in the United States. We ensure appropriate safeguards are in place
            for such transfers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-800">10. Changes to This Policy</h2>
          <p className="mb-3 text-slate-600">
            We may update this Privacy Policy from time to time. We will notify you of any material changes by posting
            the new policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-800">11. Contact Us</h2>
          <p className="mb-3 text-slate-600">
            If you have questions about this Privacy Policy or wish to exercise your rights, contact us:
          </p>
          <ul className="list-none mb-3 text-slate-600 space-y-1">
            <li><strong>Email:</strong> privacy@so-nix.me</li>
            <li><strong>Contact Form:</strong> <a href="/contact" className="text-cyan-600 hover:underline">so-nix.me/contact</a></li>
          </ul>
        </section>
      </div>
    </main>
  );
}