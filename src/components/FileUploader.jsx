import { useState } from 'react';
import { Upload, CheckCircle2 } from 'lucide-react';
import ProgressBar from './ProgressBar';

export default function FileUploader({ onComplete }) {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const f = e.target.files?.[0];
    if (f) setFile(f);
  };

  const simulateUpload = async () => {
    if (!file) return;
    setStatus('uploading');
    setProgress(0);
    for (let i = 0; i <= 100; i += 2) {
      await new Promise((r) => setTimeout(r, 30));
      setProgress(i);
    }
    setStatus('done');
    onComplete?.({ id: 'placeholder-job-id', name: file.name });
  };

  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl text-white">
      <div className="flex items-center gap-4">
        <label className="px-4 py-2 rounded-lg border border-white/20 bg-white/10 hover:bg-white/20 transition cursor-pointer inline-flex items-center gap-2">
          <Upload size={18} />
          <span>Select Video</span>
          <input type="file" accept="video/*" onChange={handleChange} className="hidden" />
        </label>
        {file && <span className="text-white/80 text-sm">{file.name}</span>}
      </div>

      <div className="mt-4">
        <ProgressBar value={progress} />
        <div className="mt-3 flex items-center justify-between text-sm text-white/60">
          <span>{status === 'idle' ? 'Waiting to upload' : status === 'uploading' ? 'Uploading...' : 'Completed'}</span>
          {status === 'done' && <CheckCircle2 className="text-emerald-400" size={18} />}
        </div>
      </div>

      <div className="mt-4">
        <button onClick={simulateUpload} disabled={!file || status==='uploading'} className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-fuchsia-500 disabled:opacity-50">
          {status==='uploading' ? 'Uploading...' : 'Start Upload'}
        </button>
      </div>
    </div>
  );
}
