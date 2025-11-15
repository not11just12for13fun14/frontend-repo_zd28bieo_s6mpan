import { useState } from 'react';
import FileUploader from '../components/FileUploader';
import VideoPlayer from '../components/VideoPlayer';

export default function Upload() {
  const [video, setVideo] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0b12] to-[#0b0f1a] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <h1 className="text-3xl font-bold">Upload Video</h1>
        <p className="text-white/70 mt-2">Simulated upload and processing preview.</p>

        <div className="mt-6 grid lg:grid-cols-2 gap-8">
          <FileUploader onComplete={(info)=>setVideo(info)} />
          <div className="space-y-4">
            <VideoPlayer src={video ? URL.createObjectURL(new Blob()) : ''} />
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <h4 className="font-semibold">Processing Summary</h4>
              <ul className="list-disc list-inside text-sm text-white/70 mt-2">
                <li>Scene detection</li>
                <li>Audio analysis</li>
                <li>OCR & subtitles</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
