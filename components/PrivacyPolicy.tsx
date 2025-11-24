import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 container mx-auto px-4 md:px-8 max-w-4xl">
      <h1 className="font-display font-bold text-4xl md:text-5xl uppercase mb-8 text-center">Privacy Policy</h1>
      
      <div className="space-y-8 text-gray-600 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-brand-black uppercase tracking-wide mb-4">1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create an account, place an order, sign up for our newsletter, or contact us for support. This information may include your name, email address, phone number, shipping address, and payment information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-black uppercase tracking-wide mb-4">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Process your orders and send order confirmations.</li>
            <li>Communicate with you about products, services, offers, and events.</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
            <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-black uppercase tracking-wide mb-4">3. Data Security</h2>
          <p>
            We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction. However, no internet transmission is ever fully secure or error-free.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-black uppercase tracking-wide mb-4">4. Changes to this Policy</h2>
          <p>
            We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-black uppercase tracking-wide mb-4">5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at hello@stiggyindia.com.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;