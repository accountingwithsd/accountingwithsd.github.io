import { Clock } from 'lucide-react';

const timetableData = [
  {
    id: '2028-theory',
    year: '2028 Advanced Level Accounting',
    badge: 'Registration Open',
    badgeClass: '',
    description: 'Comprehensive theory foundation for 2028 G.C.E. A/L candidates.',
    groups: [
      { name: 'Group 1', day: 'Saturday', time: '8.00 AM - 10.00 AM', status: 'Filling Fast', statusClass: 'filling' },
      { name: 'Group 2', day: 'Tuesday', time: '3.00 PM - 5.00 PM', status: 'Available', statusClass: 'available' },
      { name: 'Group 3', day: 'Friday', time: '3.00 PM - 5.00 PM', status: 'Available', statusClass: 'available' },
    ],
  },
  {
    id: '2027-theory',
    year: '2027 Advanced Level Accounting',
    badge: 'Active Batch',
    badgeClass: 'gold',
    description: 'Advanced theory, past paper analysis and speed revision for G.C.E. A/L.',
    groups: [
      { name: 'Group 1', day: 'Saturday', time: '11.00 AM - 1.00 PM', status: 'Limited Seats', statusClass: 'limited' },
      { name: 'Group 2', day: 'Wednesday', time: '3.00 PM - 5.30 PM', status: 'Available', statusClass: 'available' },
    ],
  },
];

export default function Timetable() {
  return (
    <section className="section-wrapper" id="timetable">
      <div className="section-inner reveal">
        <div className="section-label"><Clock size={12} style={{ verticalAlign: 'middle', marginRight: 6 }} />Schedule</div>
        <h2 className="section-title">Class Schedule</h2>
        <p className="section-subtitle">
          Choose your preferred time slot for S.D. Jagoda's Advanced Level Accounting theory classes.
        </p>

        <div className="timetable-grid">
          {timetableData.map((batch) => (
            <div className="timetable-card" key={batch.id}>
              <div className="card-header">
                <span className="card-year">{batch.year}</span>
                <span className={`card-badge ${batch.badgeClass}`}>{batch.badge}</span>
              </div>
              <p className="card-desc">{batch.description}</p>

              {batch.groups.map((grp, i) => (
                <div className="group-slot" key={i}>
                  <span className="slot-day">{grp.day}</span>
                  <span className="slot-time">{grp.time}</span>
                  <span className={`slot-status ${grp.statusClass}`}>{grp.status}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
