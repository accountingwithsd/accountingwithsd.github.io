import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import AccountingBackground from './AccountingBackground';

export default function Hero() {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    if (canvasRef.current?.onHeroMove) {
      canvasRef.current.onHeroMove(e.clientX - rect.left, e.clientY - rect.top);
    }
  };

  return (
    <section
      className="hero"
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseDown={() => canvasRef.current?.onHeroPress?.(true)}
      onMouseUp={() => canvasRef.current?.onHeroPress?.(false)}
      onClick={(e) => {
        if (!heroRef.current) return;
        const rect = heroRef.current.getBoundingClientRect();
        canvasRef.current?.onHeroClick?.(e.clientX - rect.left, e.clientY - rect.top);
      }}
      onMouseLeave={() => canvasRef.current?.onHeroLeave?.()}
    >
      <AccountingBackground ref={canvasRef} />

      <div className="hero-geo hero-geo-tl" />
      <div className="hero-geo hero-geo-tr" />

      <div className="hero-photo">
        <div className="hero-photo-glow" />
        <img src="/src/assets/Logo.png" alt="S.D. Jagoda" className="hero-logo-3d" />
      </div>

      <div className="hero-left">
        <h1 className="hero-name">
          <span className="hero-name-first">S.D.</span>
          <span className="hero-name-second">Jagoda</span>
        </h1>
        <div className="hero-red-line" />
        <div className="hero-sub-big">Advanced Level Accounting</div>
        <div className="hero-desc-text">
          BBA Special in Accounting (University of Colombo)
        </div>
        <div className="hero-cta-row">
          <a href="#timetable" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('timetable')?.scrollIntoView({ behavior: 'smooth' }); }}>
            View Schedule
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <span>SCROLL</span>
        <ArrowDown size={16} />
      </div>
    </section>
  );
}
