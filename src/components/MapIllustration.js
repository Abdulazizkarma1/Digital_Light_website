const MapIllustration = () => (
  <svg viewBox="0 0 600 400" className="w-full h-auto">
    <defs>
      <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#e0f2fe" />
        <stop offset="100%" stopColor="#f0f9ff" />
      </linearGradient>
    </defs>
    <rect width="600" height="400" fill="url(#grad)" rx="24" />
    <g opacity="0.8">
      <path d="M40 120 C140 60, 260 180, 360 120 S 520 160, 560 120" fill="none" stroke="#94a3b8" strokeWidth="3" strokeDasharray="6 8" />
      <path d="M60 240 C160 180, 300 280, 420 220 S 520 300, 540 260" fill="none" stroke="#94a3b8" strokeWidth="3" strokeDasharray="6 8" />
    </g>
    <g>
      {[100, 220, 320, 440, 500].map((x, i) => (
        <g key={i} transform={`translate(${x} ${i % 2 === 0 ? 180 : 90})`}>
          <circle r="16" fill="#2563eb" opacity="0.15" />
          <circle r="10" fill="#2563eb" />
          <path d="M0 -22 L8 -2 A10 10 0 1 1 -8 -2 Z" fill="#1d4ed8" />
        </g>
      ))}
    </g>
  </svg>
);
export default MapIllustration;
