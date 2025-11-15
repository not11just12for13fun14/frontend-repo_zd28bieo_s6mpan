import { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function VideoPlayer({ src }) {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  const togglePlay = () => {
    if (!ref.current) return;
    if (playing) ref.current.pause();
    else ref.current.play();
    setPlaying(!playing);
  };

  return (
    <div className="rounded-2xl overflow-hidden bg-black/60 border border-white/10">
      <video ref={ref} src={src} className="w-full h-auto" muted={muted} controls={false} />
      <div className="p-3 flex items-center justify-between bg-black/60">
        <button onClick={togglePlay} className="text-white">
          {playing ? <Pause /> : <Play />}
        </button>
        <button onClick={() => setMuted(!muted)} className="text-white">
          {muted ? <VolumeX /> : <Volume2 />}
        </button>
      </div>
    </div>
  );
}
