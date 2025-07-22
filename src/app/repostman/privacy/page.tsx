import Link from 'next/link'

export default function RePostmanPrivacy() {
  return (
    <div className="min-h-screen p-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span>/</span>
            <Link href="/repostman" className="hover:text-gray-700">RePostman</Link>
            <span>/</span>
            <span className="text-gray-900">Privacy Policy</span>
          </nav>
          
          <h1 className="text-4xl font-bold mb-4">RePostman Privacy Policy</h1>
          <p className="text-gray-600">Last updated: July 22, 2025</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="mb-4">
              RePostman is a Chrome extension designed for API testing and debugging. This privacy policy explains how we handle your data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
            <p className="mb-4 font-semibold text-green-600">
              We do not collect any personal information or user data.
            </p>
            <h3 className="text-xl font-semibold mb-3">What we don't collect:</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Personal information (name, email, address)</li>
              <li>Browsing history</li>
              <li>API request content</li>
              <li>User behavior data</li>
              <li>Analytics or tracking data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Storage</h2>
            <h3 className="text-xl font-semibold mb-3">Local Storage Only</h3>
            <p className="mb-4">
              All data is stored locally on your device using Chrome's storage API:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Request history</li>
              <li>Collections</li>
              <li>Environment variables</li>
              <li>Extension settings</li>
            </ul>
            <h3 className="text-xl font-semibold mb-3">No External Servers</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>No data is sent to our servers</li>
              <li>No data is shared with third parties</li>
              <li>No cloud synchronization</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Usage</h2>
            <h3 className="text-xl font-semibold mb-3">API Requests</h3>
            <p className="mb-4">
              When you send API requests through RePostman:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Requests are sent directly from your browser to the target API</li>
              <li>We do not intercept, store, or analyze request content</li>
              <li>Request data remains on your device only</li>
            </ul>
            <h3 className="text-xl font-semibold mb-3">Extension Functionality</h3>
            <p className="mb-4">
              The extension only accesses:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Chrome storage API (for local data)</li>
              <li>User-provided URLs and API endpoints</li>
              <li>Extension's own resources</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p className="mb-4">
              RePostman does not integrate with any third-party services that would collect user data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="mb-4">
              Since all data is stored locally:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Your data never leaves your device</li>
              <li>No network transmission of personal information</li>
              <li>No risk of data breaches on our servers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
            <p className="mb-4">
              RePostman does not knowingly collect information from children under 13.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="mb-4">
              We may update this privacy policy from time to time. Any changes will be reflected in the extension's update notes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="mb-4">
              If you have questions about this privacy policy, please contact us through the GitHub repository: 
              <a href="https://github.com/hiawui/re-postman" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                https://github.com/hiawui/re-postman
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Compliance</h2>
            <p className="mb-4">
              This extension complies with:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Chrome Web Store policies</li>
              <li>General Data Protection Regulation (GDPR)</li>
              <li>California Consumer Privacy Act (CCPA)</li>
            </ul>
          </section>

          <div className="border-t pt-8 mt-12">
            <p className="text-center text-gray-600 mb-2">
              <strong>RePostman - API Testing Tool</strong>
            </p>
            <p className="text-center text-gray-500 text-sm">
              A secure, privacy-focused Chrome extension for API testing and debugging.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/repostman"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to RePostman
          </Link>
        </div>
      </div>
    </div>
  )
} 