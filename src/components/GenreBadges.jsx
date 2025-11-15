const genres = ['Drama', 'Sci-Fi', 'Documentary', 'Thriller', 'Action', 'Comedy'];

export default function GenreBadges() {
  return (
    <div className="flex flex-wrap gap-2">
      {genres.map((g) => (
        <span key={g} className="text-xs px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/80">
          {g}
        </span>
      ))}
    </div>
  );
}
