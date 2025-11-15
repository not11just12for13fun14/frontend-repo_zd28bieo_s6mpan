import EmotionTimeline from '../components/EmotionTimeline';
import GenreBadges from '../components/GenreBadges';

export default function Results() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0b12] to-[#0b0f1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <EmotionTimeline />
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <h3 className="font-semibold mb-2">Detected Genres</h3>
              <GenreBadges />
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <h3 className="font-semibold mb-2">Key Scenes</h3>
              <div className="text-white/70 text-sm">Placeholder scene thumbnails and summaries.</div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <h3 className="font-semibold">Job Status</h3>
              <p className="text-white/70 text-sm mt-2">This is a frontend-only mock. Replace with API polling to show progress and fetch results.</p>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <h3 className="font-semibold">Insights</h3>
              <ul className="list-disc list-inside text-sm text-white/70 mt-2">
                <li>Emotional arc peaks at scene 7</li>
                <li>Dialogue-heavy segments at 01:30–02:10</li>
                <li>Audio genre: Ambient Electronica</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
