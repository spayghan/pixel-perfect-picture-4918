export default function AiBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* faint circuit grid, fading towards the edges */}
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_55%_at_50%_40%,black_20%,transparent_80%)]" />
      {/* drifting nebula orbs */}
      <div className="absolute -left-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-electric/20 blur-[140px] animate-float-slow" />
      <div className="absolute -right-44 top-1/4 h-[32rem] w-[32rem] rounded-full bg-violet/20 blur-[140px] animate-float-slow [animation-delay:-6s]" />
      <div className="absolute bottom-[-10rem] left-1/3 h-[28rem] w-[28rem] rounded-full bg-neon/8 blur-[140px] animate-float-slow [animation-delay:-11s]" />
    </div>
  );
}
