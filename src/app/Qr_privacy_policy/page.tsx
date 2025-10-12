// pages/privacy.js
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg text-gray-800 space-y-6">
        <h1 className="text-3xl font-bold text-center">Privacy Policy</h1>
        <p className="text-gray-600">Effective Date: October 12, 2025</p>

        <p>
          Welcome to <strong>QR Scan Pro</strong>! Your privacy is very important to us.
          This Privacy Policy explains how we handle your data when you use our app.
        </p>

        <section>
          <h2 className="text-xl font-semibold mt-4">1. Data Collection</h2>
          <p>
            QR Scan Pro does not store any of your scanned or generated QR code data on our servers. 
            All data is saved locally on your device only. We do not share your data with any third parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-4">2. Permissions</h2>
          <p>Our app requires the following permissions:</p>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Camera:</strong> To scan QR codes.</li>
            <li><strong>Internet:</strong> Required for certain online features.</li>
            <li><strong>Access Network State:</strong> To check your network connectivity.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-4">3. Local Storage</h2>
          <p>
            All QR codes you scan or generate are stored only on your device. We do not upload or back up your QR code history on any server.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-4">4. Ads and Analytics</h2>
          <p>
            QR Scan Pro may display ads using Google Mobile Ads. No personal information is shared with advertisers beyond what Google collects through their SDK.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-4">5. Security</h2>
          <p>
            We take reasonable measures to keep your local data safe. However, please note that we cannot guarantee absolute security of your device storage.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-4">6. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted in the app and the updated effective date will be shown above.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-4">7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at: <strong>contactabhirahtech@gmail.com</strong>
          </p>
        </section>
      </div>
    </div>
  );
}
