import { useState } from 'react';
import { FileText, Download, Eye, ExternalLink, Search } from 'lucide-react';
import confetti from 'canvas-confetti';

const allDocuments = [
  { icon: '📄', title: '2023 A/L Accounting Past Paper & Marking Scheme', description: 'G.C.E. Advanced Level Accounting Past Paper (Paper I & II) with detailed marking scheme and examiner tips.', category: 'Past Papers', file: null, downloads: 1420 },
  { icon: '📄', title: '2022 A/L Accounting Past Paper Solution Guide', description: 'Comprehensive step-by-step working notes and ledger adjustments for the 2022 A/L Exam.', category: 'Past Papers', file: null, downloads: 980 },
  { icon: '📘', title: 'Financial Accounting Master Formula Sheet', description: 'Quick revision summary covering Accounting Ratios, Cash Flow Statements, Partnership Adjustments.', category: 'Study Guides', file: null, downloads: 3200 },
  { icon: '📘', title: 'Bank Reconciliation Statements - Complete Guide', description: 'Mastering adjusted cash books, bank statements, timing differences, and error rectifications.', category: 'Study Guides', file: null, downloads: 2150 },
  { icon: '📘', title: 'Manufacturing & Cost Accounting Short Notes', description: 'Essential rules for Direct Material, Direct Labor, Factory Overhead allocation, and CVP analysis.', category: 'Study Guides', file: null, downloads: 1890 },
  { icon: '📄', title: '2024 Model Paper - Target Questions', description: 'Curated model paper with predicted question patterns prepared for top rank aspirants.', category: 'Past Papers', file: null, downloads: 2750 },
  { icon: '📄', title: '2021 A/L Accounting Past Paper', description: 'Official G.C.E. A/L Accounting past paper with full marking scheme.', category: 'Past Papers', file: null, downloads: 1100 },
  { icon: '📘', title: 'Partnership Accounts Complete Notes', description: 'Admission, retirement, dissolution, and goodwill valuation comprehensive guide.', category: 'Study Guides', file: null, downloads: 2400 },
  { icon: '📘', title: 'Cash Flow Statement Workbook', description: 'Practice workbook with 20+ cash flow statement questions and detailed solutions.', category: 'Study Guides', file: null, downloads: 1750 },
  { icon: '📄', title: '2020 A/L Accounting Past Paper', description: 'Complete past paper with examiner commentary and marking guidelines.', category: 'Past Papers', file: null, downloads: 1350 },
  { icon: '📘', title: 'Ratio Analysis Quick Reference', description: 'All key financial ratios with formulas, interpretations, and exam tips.', category: 'Study Guides', file: null, downloads: 2900 },
  { icon: '📄', title: '2019 A/L Accounting Past Paper', description: 'Past paper with step-by-step solutions for all sections.', category: 'Past Papers', file: null, downloads: 980 },
];

const featured = allDocuments.slice(0, 6);

export default function Documents() {
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const categories = ['All', ...new Set(allDocuments.map(d => d.category))];

  const filtered = allDocuments.filter(d => {
    const matchCat = filter === 'All' || d.category === filter;
    const matchSearch = d.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleView = (doc) => {
    if (!doc.file) { alert('This resource is coming soon!'); return; }
    window.open(doc.file, '_blank');
  };

  const handleDownload = (doc) => {
    if (!doc.file) { alert('This resource is coming soon!'); return; }
    confetti({ particleCount: 60, spread: 60, origin: { y: 0.7 } });
    const a = document.createElement('a');
    a.href = doc.file;
    a.download = doc.file.split('/').pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section className="section-wrapper" id="documents">
      <div className="section-inner reveal">
        <div className="section-label"><FileText size={12} style={{ verticalAlign: 'middle', marginRight: 6 }} />Resources</div>
        <h2 className="section-title">Documents & Study Guides</h2>
        <p className="section-subtitle">
          Download past papers with marking schemes, model papers, and quick formula sheets.
        </p>

        <div className="docs-grid">
          {featured.map((doc, i) => (
            <div className="doc-card" key={i}>
              <div className="doc-icon">{doc.icon}</div>
              <h3>{doc.title}</h3>
              <p>{doc.description}</p>
              <div className="doc-meta">
                <span>{doc.category} &middot; {doc.downloads} downloads</span>
                <div className="doc-actions">
                  <button className="doc-btn doc-view" onClick={() => handleView(doc)}><Eye size={13} /> View</button>
                  <button className="doc-btn doc-download" onClick={() => handleDownload(doc)}><Download size={13} /> Download</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="docs-more">
          <button className="btn btn-secondary" onClick={() => setShowAll(true)}>
            <ExternalLink size={16} /> View All Documents
          </button>
          <p>Browse the full collection of past papers, marking schemes, and study materials.</p>
        </div>
      </div>

      {showAll && (
        <div className="all-docs-overlay" onClick={() => setShowAll(false)}>
          <div className="all-docs-modal" onClick={(e) => e.stopPropagation()}>
            <div className="all-docs-header">
              <h2>All Documents</h2>
              <button className="all-docs-close" onClick={() => setShowAll(false)}>&times;</button>
            </div>

            <div className="all-docs-filters">
              <div className="all-docs-search">
                <Search size={14} />
                <input
                  type="text"
                  placeholder="Search documents..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="all-docs-tabs">
                {categories.map(cat => (
                  <button
                    key={cat}
                    className={`all-docs-tab ${filter === cat ? 'active' : ''}`}
                    onClick={() => setFilter(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="all-docs-list">
              {filtered.length === 0 && (
                <p className="all-docs-empty">No documents found.</p>
              )}
              {filtered.map((doc, i) => (
                <div className="all-docs-row" key={i}>
                  <div className="all-docs-row-icon">{doc.icon}</div>
                  <div className="all-docs-row-info">
                    <h4>{doc.title}</h4>
                    <p>{doc.description}</p>
                    <span>{doc.category} &middot; {doc.downloads} downloads</span>
                  </div>
                  <div className="all-docs-row-actions">
                    <button className="doc-btn doc-view" onClick={() => handleView(doc)}><Eye size={13} /> View</button>
                    <button className="doc-btn doc-download" onClick={() => handleDownload(doc)}><Download size={13} /> Download</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
