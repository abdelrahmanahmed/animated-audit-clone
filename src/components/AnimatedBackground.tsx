const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated Gradient Orbs */}
      <div 
        className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-float-slow"
        style={{ animationDelay: "0s" }}
      />
      <div 
        className="absolute top-1/4 -right-20 h-60 w-60 rounded-full bg-secondary/20 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div 
        className="absolute bottom-1/4 left-1/4 h-72 w-72 rounded-full bg-accent/15 blur-3xl animate-float-slow"
        style={{ animationDelay: "4s" }}
      />
      <div 
        className="absolute -bottom-20 right-1/3 h-64 w-64 rounded-full bg-primary/25 blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />
      
      {/* Floating Particles */}
      <div className="absolute top-1/3 left-1/5 h-2 w-2 rounded-full bg-primary/60 animate-glow-pulse" style={{ animationDelay: "0s" }} />
      <div className="absolute top-1/2 left-2/3 h-3 w-3 rounded-full bg-secondary/50 animate-glow-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-2/3 left-1/4 h-2 w-2 rounded-full bg-accent/60 animate-glow-pulse" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/4 right-1/4 h-4 w-4 rounded-full bg-primary/40 animate-glow-pulse" style={{ animationDelay: "3s" }} />
      <div className="absolute bottom-1/3 right-1/3 h-2 w-2 rounded-full bg-secondary/60 animate-glow-pulse" style={{ animationDelay: "0.5s" }} />
      <div className="absolute top-3/4 left-1/2 h-3 w-3 rounded-full bg-accent/50 animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      
      {/* Drifting Lines */}
      <div 
        className="absolute h-px w-32 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-drift"
        style={{ top: "20%", animationDelay: "0s", animationDuration: "15s" }}
      />
      <div 
        className="absolute h-px w-48 bg-gradient-to-r from-transparent via-secondary/20 to-transparent animate-drift"
        style={{ top: "50%", animationDelay: "5s", animationDuration: "20s" }}
      />
      <div 
        className="absolute h-px w-40 bg-gradient-to-r from-transparent via-accent/25 to-transparent animate-drift"
        style={{ top: "70%", animationDelay: "10s", animationDuration: "18s" }}
      />
    </div>
  );
};

export default AnimatedBackground;
