import { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';

const vocab = [
  'Debit', 'Credit', 'Assets', 'Liabilities', 'Equity',
  'Profit', 'Loss', 'Revenue', 'Capital', 'Ledger',
  'Dr', 'Cr', 'Rs', 'Dr.', 'Cr.',
  'A/L', 'BBA', '+', '-', '=', '%',
  '100', '500', '1000', '5000',
  'Balance', 'Trial', 'Bank', 'Cash',
  'Adj', 'Acc', 'Prepay', 'Accrual',
  'Inventory', 'Depreciation', 'Amortization',
  'Journal', 'Posting', 'Closing', 'Opening',
  'Net', 'Gross', 'Ratio', 'Current', 'Fixed',
];

const colors = ['#00b4d8', '#0077b6', '#ffd60a', '#90e0ef', '#48cae4'];

function spawn(W, H, x, y, fromClick) {
  return {
    x: x ?? Math.random() * W(),
    y: y ?? Math.random() * H(),
    vx: fromClick ? (Math.random() - 0.5) * 6 : (Math.random() - 0.5) * 0.3,
    vy: fromClick ? (Math.random() - 0.5) * 6 : (Math.random() - 0.5) * 0.25,
    symbol: vocab[Math.floor(Math.random() * vocab.length)],
    size: fromClick ? 10 + Math.random() * 5 : 10 + Math.random() * 7,
    baseOpacity: fromClick ? 0.25 + Math.random() * 0.2 : 0.06 + Math.random() * 0.1,
    opacity: 0,
    rotation: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.008,
    color: colors[Math.floor(Math.random() * colors.length)],
    life: fromClick ? 1 : Infinity,
    decay: fromClick ? 0.004 + Math.random() * 0.004 : 0,
    scale: fromClick ? 0.3 : 1,
    targetScale: 1,
  };
}

const AccountingBackground = forwardRef(function AccountingBackground(_, ref) {
  const canvasRef = useRef(null);
  const stateRef = useRef({ particles: [], trails: [], mouse: { x: -999, y: -999, pressed: false } });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    const s = stateRef.current;

    function W() { return canvas.width / (window.devicePixelRatio || 1); }
    function H() { return canvas.height / (window.devicePixelRatio || 1); }

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const parent = canvas.parentElement;
      if (!parent) return;
      const w = parent.offsetWidth;
      const h = parent.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    // Expose handlers for Hero to call
    canvas._heroHandlers = {
      onHeroMove(x, y) { s.mouse.x = x; s.mouse.y = y; },
      onHeroPress(v) { s.mouse.pressed = v; },
      onHeroClick(x, y) {
        for (let i = 0; i < 5; i++) s.particles.push(spawn(W, H, x, y, true));
        s.trails.push({ x, y, radius: 0, opacity: 0.35 });
      },
      onHeroLeave() { s.mouse.x = -999; s.mouse.y = -999; s.mouse.pressed = false; },
    };

    resize();

    // Init particles after first resize
    if (s.particles.length === 0) {
      const count = Math.min(55, Math.floor(W() / 30));
      s.particles = Array.from({ length: count }, () => spawn(W, H));
    }

    window.addEventListener('resize', resize);

    function draw() {
      ctx.clearRect(0, 0, W(), H());
      const mx = s.mouse.x;
      const my = s.mouse.y;
      const pressed = s.mouse.pressed;

      // Trails
      for (let i = s.trails.length - 1; i >= 0; i--) {
        const t = s.trails[i];
        t.radius += 3;
        t.opacity -= 0.012;
        if (t.opacity <= 0) { s.trails.splice(i, 1); continue; }
        ctx.beginPath();
        ctx.arc(t.x, t.y, t.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 180, 216, ${t.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      const alive = [];
      for (const p of s.particles) {
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 90) {
          const f = (90 - dist) / 90;
          p.vx += (dx / dist) * f * 0.6;
          p.vy += (dy / dist) * f * 0.6;
          p.opacity = p.baseOpacity + f * 0.4;
          p.targetScale = 1 + f * 0.5;
        } else if (dist < 200 && pressed) {
          const f = (200 - dist) / 200;
          p.vx -= (dx / dist) * f * 0.2;
          p.vy -= (dy / dist) * f * 0.2;
          p.opacity = p.baseOpacity + f * 0.25;
          p.targetScale = 1 + f * 0.3;
        } else {
          p.opacity += (p.baseOpacity - p.opacity) * 0.04;
          p.targetScale = 1;
        }

        p.vx *= 0.97;
        p.vy *= 0.97;
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (spd > 10) { p.vx = (p.vx / spd) * 10; p.vy = (p.vy / spd) * 10; }

        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotSpeed + spd * 0.008;
        p.scale += (p.targetScale - p.scale) * 0.12;

        if (p.decay > 0) {
          p.life -= p.decay;
          if (p.life <= 0) continue;
        }

        if (p.x < -60) p.x = W() + 60;
        if (p.x > W() + 60) p.x = -60;
        if (p.y < -60) p.y = H() + 60;
        if (p.y > H() + 60) p.y = -60;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.scale(p.scale, p.scale);
        ctx.globalAlpha = Math.max(0, Math.min(1, p.decay > 0 ? p.opacity * p.life : p.opacity));
        ctx.font = `500 ${p.size}px 'JetBrains Mono', 'SF Mono', monospace`;
        ctx.fillStyle = p.color;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(p.symbol, 0, 0);
        ctx.restore();

        alive.push(p);
      }
      s.particles = alive;

      // Lines
      for (let i = 0; i < s.particles.length; i++) {
        for (let j = i + 1; j < s.particles.length; j++) {
          const a = s.particles[i], b = s.particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 100) {
            ctx.globalAlpha = 0.04 * (1 - d / 100);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = '#00b4d8';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      // Glow
      if (mx > 0) {
        const g = ctx.createRadialGradient(mx, my, 0, mx, my, pressed ? 200 : 130);
        g.addColorStop(0, `rgba(0, 180, 216, ${pressed ? 0.1 : 0.05})`);
        g.addColorStop(1, 'rgba(0, 180, 216, 0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(mx, my, pressed ? 200 : 130, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  useImperativeHandle(ref, () => ({
    onHeroMove(x, y) { canvasRef.current?._heroHandlers?.onHeroMove(x, y); },
    onHeroPress(v) { canvasRef.current?._heroHandlers?.onHeroPress(v); },
    onHeroClick(x, y) { canvasRef.current?._heroHandlers?.onHeroClick(x, y); },
    onHeroLeave() { canvasRef.current?._heroHandlers?.onHeroLeave(); },
  }));

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
});

export default AccountingBackground;
