export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center text-white/60 text-sm">
        <p>© {new Date().getFullYear()} Video Processing & Multimodal Deep Learning Analyzer</p>
      </div>
    </footer>
  );
}
