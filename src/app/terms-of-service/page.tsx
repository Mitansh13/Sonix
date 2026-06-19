export const metadata = {
  title: "Terms of Service | Sonix",
  description: "Terms of service for Sonix audio converter - Your use of the service is governed by these terms.",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-slate-800">Terms of Service</h1>
        <p className="text-sm text-slate-500 mb-6">Last updated: June 20, 2026</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-800">1. Acceptance of Terms</h2>
          <p className="mb-3 text-slate-600">
            By accessing and using Sonix ("the Service"), you agree to be bound by these Terms of Service ("Terms").
            If you do not agree to these Terms, do not use the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-800">2. Description of Service</h2>
          <p className="mb-3 text-slate-600">
            Sonix is a browser-based audio file conversion tool that uses WebAssembly technology (FFmpeg compiled to
            WebAssembly) to convert audio files entirely within your browser. <strong>No audio files are uploaded to
            or stored on our servers.</strong>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-800">3. User Eligibility</h2>
          <p className="mb-3 text-slate-600">
            You must be at least 13 years old to use this Service. By using the Service, you represent and warrant
            that you meet this requirement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-800">4. Acceptable Use</h2>
          <p className="mb-3 text-slate-600">You agree NOT to use the Service to:</p>
          <ul className="list-disc list-inside mb-3 text-slate-600 space-y-1">
            <li>Convert or process files you do not have the legal right to convert or modify</li>
            <li>Violate any applicable laws, regulations, or third-party rights</li>
            <li>Attempt to gain unauthorized access to our systems or other users&apos; data</li>
            <li>Use the Service in any manner that could damage, disable, or impair the service</li>
            <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
            <li>Remove or alter any proprietary notices or labels</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-800">5. Intellectual Property</h2>
          <p className="mb-3 text-slate-600">
            <strong>Your Content:</strong> You retain all rights to the audio files you convert. We do not claim any
            ownership over your files.
          </p>
          <p className="mb-3 text-slate-600">
            <strong>Our Content:</strong> The Sonix name, logo, design, and all related intellectual property are owned
            by Sonix or its licensors.
          </p>
          <p className="mb-3 text-slate-600">
            <strong>FFmpeg:</strong> The audio conversion functionality uses FFmpeg, which is licensed under LGPL 2.1.
            The source code of FFmpeg can be found at ffmpeg.org. If you modify FFmpeg, you must release your
            modifications under LGPL 2.1.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-800">6. Disclaimer of Warranties</h2>
          <p className="mb-3 text-slate-600">
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED,
            INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
            AND NON-INFRINGEMENT.
          </p>
          <p className="mb-3 text-slate-600">
            We do not warrant that: (a) the Service will be uninterrupted, secure, or error-free; (b) the results
            obtained from using the Service will be accurate or reliable; (c) the quality of the Service will meet
            your expectations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-800">7. Limitation of Liability</h2>
          <p className="mb-3 text-slate-600">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL SONIX, ITS DIRECTORS, EMPLOYEES, PARTNERS,
            AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
            PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE
            LOSSES, RESULTING FROM:
          </p>
          <ul className="list-disc list-inside mb-3 text-slate-600 space-y-1">
            <li>Your access to or use of (or inability to access or use) the Service</li>
            <li>Any conduct or content of any third party on the Service</li>
            <li>Any content obtained from the Service</li>
            <li>Unauthorized access, use, or alteration of your transmissions or content</li>
          </ul>
          <p className="mb-3 text-slate-600">
            IN ANY CASE, THE AGGREGATE LIABILITY OF SONIX SHALL NOT EXCEED $100 USD.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-800">8. Indemnification</h2>
          <p className="mb-3 text-slate-600">
            You agree to defend, indemnify, and hold harmless Sonix and its affiliates, licensors, and service
            providers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses,
            or fees arising out of or relating to your violation of these Terms or your use of the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-800">9. DMCA and Copyright</h2>
          <p className="mb-3 text-slate-600">
            We respect the intellectual property rights of others. If you believe that your copyright-protected work
            has been used on this Service in a way that constitutes copyright infringement, please contact our
            designated DMCA agent:
          </p>
          <p className="mb-3 text-slate-600">
            <strong>Email:</strong> dmca@so-nix.me<br />
            <strong>Contact Form:</strong> <a href="/contact" className="text-cyan-600 hover:underline">so-nix.me/contact</a>
          </p>
          <p className="mb-3 text-slate-600">
            To process a DMCA takedown request, please provide: (1) A description of the copyrighted work; (2) A
            description of where the material is located; (3) Your contact information; (4) A statement of good faith
            belief; (5) A statement under penalty of perjury that the information is accurate.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-800">10. Modifications to Service</h2>
          <p className="mb-3 text-slate-600">
            We reserve the right to modify, suspend, or discontinue the Service at any time, with or without notice.
            We shall not be liable to you or any third party for any such modification, suspension, or discontinuation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-800">11. Governing Law</h2>
          <p className="mb-3 text-slate-600">
            These Terms shall be governed by and construed in accordance with the laws of the United States,
            without regard to its conflict of law provisions. You agree to submit to the exclusive jurisdiction of
            the courts located within the United States for the resolution of any disputes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-800">12. Dispute Resolution</h2>
          <p className="mb-3 text-slate-600">
            <strong>Informal Resolution:</strong> Before filing any claim, you agree to first contact us at
            support@so-nix.me to attempt to resolve the dispute informally.
          </p>
          <p className="mb-3 text-slate-600">
            <strong>Arbitration:</strong> If informal resolution fails, any dispute shall be resolved through binding
            arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall
            take place in the United States.
          </p>
          <p className="mb-3 text-slate-600">
            <strong>Class Action Waiver:</strong> YOU AGREE THAT ANY DISPUTE RESOLUTION PROCEEDINGS WILL BE CONDUCTED
            ONLY ON AN INDIVIDUAL BASIS AND NOT IN A CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-800">13. Severability</h2>
          <p className="mb-3 text-slate-600">
            If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck
            and the remaining provisions shall be enforced to the fullest extent under law.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-800">14. Entire Agreement</h2>
          <p className="mb-3 text-slate-600">
            These Terms, together with our Privacy Policy, constitute the entire agreement between you and Sonix
            regarding your use of the Service and supersede all prior agreements and understandings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-800">15. Contact Information</h2>
          <p className="mb-3 text-slate-600">For questions about these Terms, contact us:</p>
          <ul className="list-none mb-3 text-slate-600 space-y-1">
            <li><strong>General Inquiries:</strong> support@so-nix.me</li>
            <li><strong>DMCA:</strong> dmca@so-nix.me</li>
            <li><strong>Privacy:</strong> privacy@so-nix.me</li>
            <li><strong>Contact Form:</strong> <a href="/contact" className="text-cyan-600 hover:underline">so-nix.me/contact</a></li>
          </ul>
        </section>
      </div>
    </main>
  );
}