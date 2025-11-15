export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0b12] to-[#0b0f1a] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="mt-4 text-white/70">Have feedback or want to collaborate? Reach out via email: hello@example.com</p>
        <form className="mt-8 grid gap-4 max-w-xl">
          <input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none text-white" placeholder="Your email" />
          <textarea className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none text-white" rows="5" placeholder="Your message" />
          <button className="px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500">Send</button>
        </form>
      </div>
    </div>
  );
}
