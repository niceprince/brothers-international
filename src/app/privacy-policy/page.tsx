import React from "react";
import InnerPageHead from "@/components/common/InnerPageHead";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <InnerPageHead pageName="Privacy Policy" parentPage="Home" />

      <div className="container">
        <div className="pt-5">
          <p className="text-sm">Last updated: November 2, 2025</p>
          <p>
            This Privacy Policy explains how{" "}
            <strong>Brothers International</strong> (&quot;Company&quot;,
            &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses,
            discloses, and protects the personal information of customers,
            website visitors, and service users (&quot;you&quot;). By using our
            website, mobile applications, or courier services (collectively, the
            &quot;Services&quot;), you consent to the practices described in
            this Privacy Policy.
          </p>
        </div>

        <section className="py-3">
          <h4>1. Information We Collect</h4>
          <p>
            We collect the following categories of information to provide and
            improve our Services:
          </p>
          <ul>
            <li>
              <strong>Personal Information:</strong> Name, email address, phone
              number, billing and shipping addresses.
            </li>
            <li>
              <strong>Shipment Information:</strong> Package contents (if
              declared), tracking details, and delivery records.
            </li>
            <li>
              <strong>Payment Information:</strong> Payment method, transaction
              details, and related billing data (processed securely via
              third‑party payment providers).
            </li>
            <li>
              <strong>Technical Information:</strong> IP address, browser type,
              operating system, device identifiers, and cookies.
            </li>
            <li>
              <strong>Communication Data:</strong> Messages, feedback, and
              inquiries sent through our contact forms or customer service
              channels.
            </li>
          </ul>
        </section>

        <section className="py-3">
          <h4>2. How We Use Your Information</h4>
          <p>We use collected information for purposes such as:</p>
          <ul>
            <li>Processing and delivering shipments</li>
            <li>Providing customer support and resolving issues</li>
            <li>
              Communicating updates, service alerts, and promotions (with your
              consent)
            </li>
            <li>
              Improving our website, logistics operations, and service quality
            </li>
            <li>
              Complying with legal obligations and preventing fraud or misuse
            </li>
          </ul>
        </section>

        <section className="py-3">
          <h4>3. Sharing and Disclosure</h4>
          <p>
            We do not sell or rent your personal information. However, we may
            share data with:
          </p>
          <ul>
            <li>
              <strong>Service Providers:</strong> Third parties who perform
              functions such as delivery, payment processing, IT support, and
              data analytics.
            </li>
            <li>
              <strong>Legal Authorities:</strong> When required by law,
              regulation, or legal process.
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with mergers,
              acquisitions, or sale of company assets.
            </li>
          </ul>
        </section>

        <section className="py-3">
          <h4>4. Cookies and Tracking Technologies</h4>
          <p>
            Our website uses cookies and similar technologies to enhance user
            experience, analyze traffic, and personalize content. You can manage
            or disable cookies through your browser settings. Some features may
            not function properly if cookies are disabled.
          </p>
        </section>

        <section className="py-3">
          <h4>5. Data Retention</h4>
          <p>
            We retain personal information only for as long as necessary to
            fulfill the purposes outlined in this policy, comply with legal
            obligations, and resolve disputes. Once no longer required, data
            will be securely deleted or anonymized.
          </p>
        </section>

        <section className="py-3">
          <h4>6. Data Security</h4>
          <p>
            We implement appropriate technical and organizational measures to
            protect your information from unauthorized access, disclosure,
            alteration, or destruction. However, no system or transmission over
            the internet is completely secure, and we cannot guarantee absolute
            security.
          </p>
        </section>

        <section className="py-3">
          <h4>7. Your Rights</h4>
          <p>You have the right to:</p>
          <ul>
            <li>Access, correct, or update your personal information</li>
            <li>
              Request deletion of your data (subject to legal and operational
              requirements)
            </li>
            <li>Withdraw consent to receive marketing communications</li>
            <li>
              File a complaint with a relevant data protection authority if
              applicable
            </li>
          </ul>
          <p>
            To exercise your rights, please contact us using the details below.
          </p>
        </section>

        <section className="py-3">
          <h4>8. International Data Transfers</h4>
          <p>
            If you access our Services from outside the country of operation,
            your data may be transferred to and processed in countries where
            data protection laws may differ. We ensure adequate safeguards are
            in place to protect your information in accordance with applicable
            legal standards.
          </p>
        </section>

        <section className="py-3">
          <h4>9. Children&apos;s Privacy</h4>
          <p>
            Our Services are not intended for children under the age of 16. We
            do not knowingly collect personal information from children. If we
            become aware that a child has provided personal data, we will delete
            it immediately.
          </p>
        </section>

        <section className="py-3">
          <h4>10. Updates to This Privacy Policy</h4>
          <p>
            We may update this Privacy Policy periodically to reflect changes in
            our practices or for other operational, legal, or regulatory
            reasons. Any updates will be posted on this page with a revised
            “Last updated” date. Continued use of our Services indicates
            acceptance of the updated policy.
          </p>
        </section>

        <section className="py-3">
          <h4>11. Contact Us</h4>
          <p>
            If you have any questions, concerns, or requests related to this
            Privacy Policy or your personal data, please contact us at:
          </p>
          <address>
            <strong>Brothers International</strong>
            <br />
            Email:{" "}
            <a href="mailto:csd@brothersinternational.in">
              bcpug3sdl@fr.dtdc.com
            </a>
            <a href="bcpug3sdl@fr.dtdc.com">bcpug3sdl@fr.dtdc.com</a>
            <br />
            Phone: 011-46591190, 9311778585
          </address>
        </section>

        <section>
          <p className="text-sm opacity-80">
            <strong>Disclaimer:</strong> This Privacy Policy template is for
            general informational purposes and does not constitute legal advice.
            To ensure compliance with applicable privacy laws (such as GDPR or
            India’s DPDP Act), consult a qualified legal professional.
          </p>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;
