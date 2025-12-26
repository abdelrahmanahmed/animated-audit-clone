import { useState } from "react";
import { toast } from "sonner";

const EmailCapture = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Thank you! We'll notify you when we launch.");
    setEmail("");
    setIsLoading(false);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto opacity-0 animate-fade-up"
      style={{ animationDelay: "0.3s" }}
    >
      <div className="relative flex-1">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full h-12 px-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/40 text-foreground placeholder:text-muted-foreground focus:outline-none input-glow transition-all duration-300"
          disabled={isLoading}
        />
      </div>
      
      <button
        type="submit"
        disabled={isLoading}
        className="h-12 px-6 rounded-lg bg-gradient-primary text-primary-foreground font-medium transition-all duration-300 btn-lift disabled:opacity-50 disabled:cursor-not-allowed opacity-0 animate-scale-in"
        style={{ animationDelay: "0.35s" }}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </span>
        ) : (
          "Notify Me"
        )}
      </button>
    </form>
  );
};

export default EmailCapture;
