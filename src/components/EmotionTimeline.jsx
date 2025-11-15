import { useMemo } from 'react';

export default function EmotionTimeline({ points = 60 }) {
  const data = useMemo(() => Array.from({ length: points }).map((_, i) => {
    const t = i / (points - 1);
    const valence = 0.5 + 0.4 * Math.sin(t * Math.PI * 2);
    const arousal = 0.5 + 0.4 * Math.cos(t * Math.PI * 2);
    return { t, valence, arousal };
  }), [points]);

  return (
    <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white">
      <h4 className="font-semibold mb-3">Emotion Timeline</h4>
      <div className="relative h-32 w-full">
        <svg viewBox="0 0 100 32" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f472b6" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
          <polyline fill="none" stroke="url(#grad1)" strokeWidth="1.5" points={data.map(d => `${d.t*100},${(1-d.valence)*32}`).join(' ')} />
          <polyline fill="none" stroke="url(#grad2)" strokeWidth="1.5" points={data.map(d => `${d.t*100},${(1-d.arousal)*32}`).join(' ')} />
        </svg>
      </div>
      <div className="mt-2 text-xs text-white/60 grid grid-cols-2 gap-2">
        <div>Valence</div>
        <div>Arousal</div>
      </div>
    </div>
  );
}
