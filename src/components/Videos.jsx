import { Video, Play, Film, Radio } from 'lucide-react';

const videos = [
  {
    title: '2024 Southern Province Paper Discussion - Company Accounting',
    description: 'In-depth discussion of the 2024 Southern Province A/L Accounting paper - Company Accounting question walkthrough.',
    tag: 'Paper Discussion',
    youtubeId: '0gMJOCCPskU',
  },
  {
    title: '2024 Southern Province Paper Discussion - Accounting Equations',
    description: 'Step-by-step solution for Accounting Equations from the 2024 Southern Province A/L paper.',
    tag: 'Paper Discussion',
    youtubeId: '180O0qyoBYg',
  },
  {
    title: 'A/L Exam Results Evaluation Video',
    description: 'Detailed evaluation and analysis of A/L Accounting exam results with improvement strategies.',
    tag: 'Results',
    youtubeId: 'Ifpv5iop4o4',
  },
  {
    title: 'A/L Accounting Control Accounts',
    description: 'Understanding Control Accounts - General Ledger Control Account and Total Debtors/Creditors Account.',
    tag: 'Core Concept',
    youtubeId: '065oP9z9n-E',
  },
  {
    title: 'Prepayments Adjustments (පෙර ගෙවුම් ගැලපීම)',
    description: 'How to handle prepayment adjustments in final accounts - practical examples and exam techniques.',
    tag: 'Adjustments',
    youtubeId: 'Nm_JlI95txE',
  },
  {
    title: 'Accrued Income Adjustments (උපචිත ආදායම් ගැලපීම)',
    description: 'Accrued income adjustments explained with clear examples for G.C.E. A/L Accounting.',
    tag: 'Adjustments',
    youtubeId: 'RWxPJFN9cQI',
  },
];

export default function Videos() {
  return (
    <section className="section-wrapper" id="videos">
      <div className="section-inner reveal">
        <div className="section-label"><Video size={12} style={{ verticalAlign: 'middle', marginRight: 6 }} />Lectures</div>
        <h2 className="section-title">Video Lectures</h2>
        <p className="section-subtitle">
          Watch accounting tutorials and exam preparation videos by S.D. Jagoda.
        </p>

        {/* Live Section */}
        <div className="live-section">
          <div className="live-banner">
            <div className="live-indicator">
              <span className="live-dot" />
              LIVE
            </div>
            <div className="live-info">
              <h3>Watch Live Classes on YouTube</h3>
              <p>Join live A/L Accounting lectures, ask questions in real-time, and learn with other students.</p>
            </div>
            <a
              href="https://www.youtube.com/@s.d.jagoda898/live"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary live-btn"
            >
              <Radio size={16} /> Watch Live
            </a>
          </div>
        </div>

        {/* Recorded Videos */}
        <h3 className="videos-subtitle">Recorded Lectures</h3>
        <div className="videos-grid">
          {videos.map((vid, i) => (
            <div className="video-card" key={i}>
              <div className="video-player">
                <iframe
                  src={`https://www.youtube.com/embed/${vid.youtubeId}`}
                  title={vid.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="video-info">
                <div className="video-tag">{vid.tag}</div>
                <h3>{vid.title}</h3>
                <p>{vid.description}</p>
                <div className="video-duration">
                  <Film size={12} style={{ verticalAlign: 'middle', marginRight: 4 }} />
                  YouTube
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
