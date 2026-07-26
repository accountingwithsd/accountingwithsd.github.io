import { CheckCircle, GraduationCap, CirclePlay } from 'lucide-react';

export default function About() {
  return (
    <section className="section-wrapper" id="about">
      <div className="section-inner reveal">
        <div className="section-label">About Me</div>
        <h2 className="section-title">S.D. Jagoda</h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          Advanced Level Accounting Teacher
        </p>

        <div className="about-grid">
          <div className="about-text">
            <p>
              BBA Special in Accounting (University of Colombo). Advanced Level Accounting විෂය වසර 10කට
              වැඩි කාලයක් ඉගැන්වීමේ පළපුරුද්දක් සහිතයි.
            </p>
            <p>
              සිසුන්ගේ 100% සමත් ප්‍රතිශතයක් සහ 50% කට වැඩි ප්‍රමාණයක්
              විශ්වවිද්‍යාල වරම් ලබා ගැනීමේ සාර්ථක ඉතිහාසයක් මා සතුව ඇත.
              මගේ ඉගැන්වීමේ ක්‍රමවේදය සංකල්පනාත්මක පැහැදිලි කිරීම සහ
              විභාග සූදානම් කරයි.
            </p>
            <p>
              මගේ පන්ති වලදී මූලික ගිණුම්කරණ සමීකරණ සිට LKAS
              ප්‍රමිති දක්වා සෑම දෙයක්ම ආවරණය කරන අතර, සෑම සිසුවෙකුටම
              G.C.E. Advanced Level විභාගය සඳහා සම්පූර්ණයෙන් සූදානම් කරයි.
            </p>

            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-value">100%</div>
                <div className="stat-label">සමත් ප්‍රතිශතය</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">50%+</div>
                <div className="stat-label">විශ්වවිද්‍යාල තේරීම</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">10+</div>
                <div className="stat-label">අවුරුදු ඉගැන්වීම</div>
              </div>
            </div>

            <div className="achievement-highlight" style={{
              marginTop: 24,
              background: 'rgba(255, 214, 10, 0.06)',
              border: '1px solid rgba(255, 214, 10, 0.2)',
              borderRadius: 'var(--radius-lg)',
              padding: 24,
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}>
              <div style={{ fontSize: 36 }}>🏆</div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: 'var(--accent-3)', marginBottom: 4 }}>
                  G.C.E. A/L Results 2020
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)' }}>
                  Shehara Anjana Wadikawa
                </div>
                <div style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
                  Island First — Accounting
                </div>
              </div>
            </div>
          </div>

          <div className="about-philosophy">
            <h3><GraduationCap size={18} style={{ verticalAlign: 'middle', marginRight: 8 }} />ඇයි සිසුන් සාර්ථක වන්නේ</h3>
            <div className="philosophy-quote">
              "පැහැදිලි කිරීම, පුහුණුව සහ කැපවීම මගින් ශක්තිමත් Accounting පදනමක් ගොඩනැගීම."
            </div>
            <div className="philosophy-list">
              {[
                'මූලික සිට උසස් LKAS ප්‍රමිති දක්වා පැහැදිලි සංකල්පනාත්මක අවබෝධය',
                'පසුගිය G.C.E. A/L ප්‍රශ්න පත්‍ර සාකච්ඡා සහ විශ්ලේෂණය',
                'සෑම සිසුවෙකුටම පුද්ගලික ප්‍රගති ඇගයීම සහ ව්‍යුහගත ආදර් ශ විභාග',
                'Physical Class + Online Videos - Teaching Method',
              ].map((text, i) => (
                <div className="list-item" key={i}>
                  <CheckCircle size={18} color="var(--accent-1)" style={{ flexShrink: 0 }} />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <a
              href="https://www.youtube.com/channel/UCyGvY2sGEhI0UJeMPWMv01Q"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginTop: 20,
                padding: '14px 18px',
                background: 'rgba(255, 0, 0, 0.06)',
                border: '1px solid rgba(255, 0, 0, 0.2)',
                borderRadius: 10,
                color: 'var(--text-secondary)',
                fontSize: 14,
                fontWeight: 500,
                transition: 'all 0.25s',
              }}
            >
              <CirclePlay size={20} color="#ff0000" />
              Watch Videos on YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
