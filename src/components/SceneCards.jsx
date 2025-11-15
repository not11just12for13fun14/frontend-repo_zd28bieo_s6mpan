import { Sparkles, Waves, Captions, Brain, HeartPulse } from 'lucide-react';

const scenes = [
  { icon: Sparkles, title: 'Scene Detection', desc: 'Auto-detected cuts and transitions' },
  { icon: Brain, title: 'Multimodal Embeddings', desc: 'Vision + Audio + Text fused features' },
  { icon: Captions, title: 'Speech & Subtitles', desc: 'ASR transcripts and timings' },
  { icon: Waves, title: 'Audio Fingerprint', desc: 'Genre, tempo, and key estimation' },
  { icon: HeartPulse, title: 'Emotion Scores', desc: 'Valence/arousal curves per segment' },
];

export default function SceneCards() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {scenes.map(({ icon: Icon, title, desc }) => (
        <div key={title} className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-gradient-to-tr from-fuchsia-500 to-indigo-500">
              <Icon size={18} />
            </div>
            <h4 className="font-semibold">{title}</h4>
          </div>
          <p className="text-white/70 text-sm">{desc}</p>
        </div>
      ))}
    </div>
  );
}
