import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 container mx-auto px-4 md:px-8 max-w-4xl">
      <h1 className="font-display font-bold text-4xl md:text-5xl uppercase mb-8 text-center">Terms of Service</h1>
      
      <div className="space-y-8 text-gray-600 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-brand-black uppercase tracking-wide mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Stiggy India website, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, then you may not access the website or use any services.
          </p>
        </section>

        <section className="bg-red-50 border border-red-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-red-600 uppercase tracking-wide mb-4">2. Return & Refund Policy</h2>
          <p className="font-bold text-gray-900 mb-2">STRICT NO RETURN POLICY</p>
          <p>
            At Stiggy India, we maintain a strict <strong>No Return / No Refund policy</strong> on all products. We do not accept returns or exchanges for change of mind.
          </p>
          <p className="mt-4 font-bold text-gray-900 mb-2">EXCEPTIONS</p>
          <p>
            Returns or exchanges are ONLY accepted under the following specific circumstances:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li><strong>Size Mismatch:</strong> If the product delivered does not match the size ordered or the measurements provided in our Size Guide.</li>
            <li><strong>Quality Issue:</strong> If the product arrives damaged or has a manufacturing defect.</li>
          </ul>
          <p className="mt-4 text-sm">
            To claim an exchange under these exceptions, you must provide an unboxing video and contact our support team within 24 hours of delivery.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-black uppercase tracking-wide mb-4">3. Shipping & Delivery</h2>
          <p>
            We aim to ship all orders within 2-3 business days. Delivery times vary based on location. Stiggy India is not responsible for delays caused by courier partners or unforeseen circumstances.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-black uppercase tracking-wide mb-4">4. Product Accuracy</h2>
          <p>
            We have made every effort to display as accurately as possible the colors and images of our products. We cannot guarantee that your computer monitor's display of any color will be accurate.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-black uppercase tracking-wide mb-4">5. Governing Law</h2>
          <p>
            These Terms of Service shall be governed by and construed in accordance with the laws of India.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;