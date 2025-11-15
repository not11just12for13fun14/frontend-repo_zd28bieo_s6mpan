export default function ProgressBar({ value = 0 }) {
  return (
    <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 transition-all duration-300"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}
