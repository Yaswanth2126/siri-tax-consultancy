export default function BackgroundEffects() {

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Main Blue Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>

      {/* Right Glow */}
      <div className="absolute top-40 right-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full"></div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full"></div>

    </div>
  );
}