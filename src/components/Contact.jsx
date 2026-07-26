import { MessageSquare, Phone, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', school: '', address: '', batch: '2028 A/L' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `New Inquiry from Website\n\nName: ${form.name}\nPhone: ${form.phone}\nSchool: ${form.school}\nAddress: ${form.address}\nBatch: ${form.batch}`
    );
    window.open(`https://wa.me/94718115523?text=${msg}`, '_blank');
    confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
    setSubmitted(true);
  };

  return (
    <section className="section-wrapper" id="contact">
      <div className="section-inner reveal" style={{ textAlign: 'center' }}>
        <div className="section-label">Contact</div>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          Connect via WhatsApp or Phone to register for 2027 and 2028 A/L Theory batches.
        </p>

        <div className="contact-links">
          <a
            href="https://wa.me/94718115523?text=Hello%20Sir,%20I%20would%20like%20to%20inquire%20about%20A/L%20Accounting%20classes."
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link whatsapp"
          >
            <MessageSquare size={20} color="#25D366" /> WhatsApp Chat
          </a>
          <a href="tel:0718115523" className="contact-link">
            <Phone size={20} color="var(--accent-1)" /> Call 071 811 5523
          </a>
        </div>

        <div style={{ maxWidth: 500, margin: '48px auto 0', textAlign: 'left' }}>
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            padding: 32,
          }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: 'var(--accent-3)', marginBottom: 20 }}>
              Quick Registration
            </h3>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '30px 0' }}>
                <CheckCircle size={48} color="var(--accent-1)" style={{ marginBottom: 12 }} />
                <h4 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)' }}>Inquiry Received!</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: 8 }}>
                  S.D. Jagoda will contact you at <strong>{form.phone}</strong> shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 13, color: 'var(--text-muted)', marginBottom: 6, fontWeight: 500 }}>Student Name</label>
                  <input
                    type="text" required placeholder="Your Full Name"
                    value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: 10, background: 'var(--bg-primary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none', fontSize: 14 }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 13, color: 'var(--text-muted)', marginBottom: 6, fontWeight: 500 }}>Phone Number</label>
                  <input
                    type="tel" required placeholder="07X XXXXXXX"
                    value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: 10, background: 'var(--bg-primary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none', fontSize: 14 }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 13, color: 'var(--text-muted)', marginBottom: 6, fontWeight: 500 }}>School</label>
                  <input
                    type="text" required placeholder="Your School Name"
                    value={form.school} onChange={(e) => setForm({ ...form, school: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: 10, background: 'var(--bg-primary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none', fontSize: 14 }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 13, color: 'var(--text-muted)', marginBottom: 6, fontWeight: 500 }}>Address</label>
                  <input
                    type="text" required placeholder="Your Address"
                    value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: 10, background: 'var(--bg-primary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none', fontSize: 14 }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 13, color: 'var(--text-muted)', marginBottom: 6, fontWeight: 500 }}>A/L Exam Year</label>
                  <select
                    value={form.batch} onChange={(e) => setForm({ ...form, batch: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: 10, background: 'var(--bg-primary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none', fontSize: 14 }}
                  >
                    <option>2028 A/L Theory Class</option>
                    <option>2027 A/L Theory Class</option>
                    <option>A/L Revision & Model Paper Batch</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
                  <Send size={16} /> Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>

        
      </div>
    </section>
  );
}
