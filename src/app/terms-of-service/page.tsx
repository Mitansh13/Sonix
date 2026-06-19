{/* eslint-disable react/no-unescaped-entities */}
export default function TermsOfService() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-slate-800">Terms of Service</h1>
        <p className="mb-4 text-slate-600">
          By accessing and using the Audio Converter web application, you agree to the following terms:
        </p>
        <ol className="list-decimal list-inside mb-4 space-y-2 text-slate-600">
          <li>
            <strong className="text-slate-800">Use at Your Own Risk:</strong> The service is provided "as is" without warranties of any kind.
          </li>
          <li>
            <strong className="text-slate-800">No Uploads:</strong> All processing occurs locally in your browser; we do not store any uploaded files.
          </li>
          <li>
            <strong className="text-slate-800">Intellectual Property:</strong> The underlying FFmpeg library is licensed under LGPLv2.1. Your use of the
            conversion functionality must comply with that license.
          </li>
          <li>
            <strong className="text-slate-800">Liability:</strong> We are not liable for any loss of data, damage, or indirect consequences arising from the use
            of the converter.
          </li>
          <li>
            <strong className="text-slate-800">Modifications:</strong> We may update or modify the service at any time without prior notice.
          </li>
        </ol>
        <p className="mb-4 text-slate-600">
          If you do not agree with these terms, do not use the application.
        </p>
      </div>
    </main>
  );
}