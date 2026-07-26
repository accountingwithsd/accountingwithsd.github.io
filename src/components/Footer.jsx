import { useState } from 'react';

const policies = {
  privacy: {
    title: 'Privacy Policy',
    content: `Last updated: July 2026

S.D. Jagoda ("we", "us", or "our") operates the website sdjagoda.com. This Privacy Policy explains how we collect, use, and protect your personal information.

Information We Collect
We collect information you voluntarily provide when filling out the inquiry form, including your name, phone number, school, address, and preferred A/L batch.

How We Use Your Information
- To respond to your inquiry via WhatsApp or phone
- To provide information about our A/L Accounting classes
- To register you for the selected batch

Data Protection
Your personal information is only used to communicate with you regarding our classes. We do not sell, trade, or share your data with third parties.

WhatsApp Communication
By submitting the form, you consent to being contacted via WhatsApp at the phone number you provide.

Changes to This Policy
We may update this Privacy Policy from time to time. Any changes will be posted on this page.`,
  },
  terms: {
    title: 'Terms & Conditions',
    content: `Last updated: July 2026

By using this website and enrolling in S.D. Jagoda's classes, you agree to the following terms:

Class Enrollment
- Registration is confirmed only after attending the first class
- Class fees must be paid before the commencement of each month
- Seat availability is on a first-come, first-served basis

Class Schedule
- Class schedules are subject to change with prior notice
- Recorded lectures may be provided for missed classes at the tutor's discretion

Exam Results
- A 100% pass rate is based on students who attend regular classes and complete assigned work
- University selection depends on individual student performance

Content & Materials
- Study materials provided are for personal educational use only
- Redistributing or reproducing materials without written permission is prohibited

Limitation of Liability
- S.D. Jagoda is not responsible for individual exam results
- Academic outcomes depend on student effort and attendance

Governing Law
These terms are governed by the laws of Sri Lanka.`,
  },
};

export default function Footer() {
  const [openPolicy, setOpenPolicy] = useState(null);

  return (
    <>
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-links">
            <button onClick={() => setOpenPolicy('privacy')}>Privacy Policy</button>
            <span className="footer-dot">&middot;</span>
            <button onClick={() => setOpenPolicy('terms')}>Terms &amp; Conditions</button>
          </div>
          
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} S.D. Jagoda &mdash; Advanced Level Accounting
          </div>
          <div className="footer-credit">
            Created by <a href="https://dilshanjagoda.github.io/" target="_blank" rel="noopener noreferrer">Dilshan Jagoda</a>
          </div>
        </div>
      </footer>

      {openPolicy && (
        <div className="policy-overlay" onClick={() => setOpenPolicy(null)}>
          <div className="policy-modal" onClick={(e) => e.stopPropagation()}>
            <button className="policy-close" onClick={() => setOpenPolicy(null)}>&times;</button>
            <h2>{policies[openPolicy].title}</h2>
            <div className="policy-body">
              {policies[openPolicy].content.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
