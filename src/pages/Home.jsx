import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import SceneCards from '../components/SceneCards';

export default function Home() {
  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-[#0b0b12] to-[#0b0f1a]">
      <div className="relative h-[70vh]">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-[#0b0f1a] pointer-events-none" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Video Processing & Multimodal
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-cyan-300"> Deep Learning Analyzer</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 max-w-2xl text-white/70">
            Upload videos, preview processing, and visualize results across vision, audio, and text — all in a sleek, glassmorphic dashboard.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <SceneCards />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h3 className="text-xl font-semibold">Why VDLA?</h3>
            <p className="text-white/70 mt-2">A futuristic toolchain to explore how models understand video content. From scene detection to emotional pacing, explore insights effortlessly.</p>
          </div>
          <div className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h3 className="text-xl font-semibold">3D, Smooth, Modern</h3>
            <p className="text-white/70 mt-2">Immersive visuals powered by Spline, animated UI with Framer Motion, and a responsive glass UI built with TailwindCSS.</p>
          </div>
        </div>
      </div>

      <div className="h-24" />
    </div>
  );
}
