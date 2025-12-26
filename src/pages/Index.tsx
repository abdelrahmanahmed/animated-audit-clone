import { Helmet } from "react-helmet";
import AnimatedBackground from "@/components/AnimatedBackground";
import CountdownTimer from "@/components/CountdownTimer";
import EmailCapture from "@/components/EmailCapture";
import SocialIcons from "@/components/SocialIcons";
import { Toaster } from "@/components/ui/sonner";

/**
 * Coming Soon Landing Page
 * 
 * Configuration:
 * - Change launch date in LAUNCH_DATE constant
 * - Update company info in the content sections
 * - Background image is configured in AnimatedBackground component
 * - Color palette is in src/index.css (look for PALETTE section)
 */

// ============================================
// CONFIGURATION - Change these values
// ============================================
const LAUNCH_DATE = new Date("2026-03-01T00:00:00");
const COMPANY_NAME = "AUDIT";
const TAGLINE = "Auditing Today, Protecting Tomorrow";
const DESCRIPTION = "We're building something extraordinary. Be the first to experience the future of smart auditing solutions.";
const CONTACT_EMAIL = "hello@audit.com";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>{COMPANY_NAME} | Coming Soon</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <Toaster position="top-center" />

      {/* Animated Background */}
      <AnimatedBackground />

      {/* Main Content */}
      <div className="relative min-h-screen flex flex-col">
        {/* Header / Logo */}
        <header className="w-full px-6 py-6 md:px-12 md:py-8">
          <div 
            className="flex items-center gap-3 opacity-0 animate-fade-up"
            style={{ animationDelay: "0s" }}
          >
            {/* Logo placeholder - replace with your actual logo */}
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-lg font-bold text-primary-foreground">A</span>
            </div>
            <span className="text-xl font-semibold text-foreground">{COMPANY_NAME}</span>
          </div>
        </header>

        {/* Main Content - Centered */}
        <main className="flex-1 flex items-center justify-center px-6 py-12 md:px-12">
          <div className="w-full max-w-3xl mx-auto text-center space-y-10">
            {/* Headline */}
            <div className="space-y-4">
              <h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight opacity-0 animate-fade-up"
                style={{ animationDelay: "0.1s" }}
              >
                Coming Soon
              </h1>
              
              {/* Subheadline */}
              <p 
                className="text-lg sm:text-xl md:text-2xl text-primary font-medium opacity-0 animate-fade-up"
                style={{ animationDelay: "0.15s" }}
              >
                {TAGLINE}
              </p>
              
              {/* Description */}
              <p 
                className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto opacity-0 animate-fade-up"
                style={{ animationDelay: "0.2s" }}
              >
                {DESCRIPTION}
              </p>
            </div>

            {/* Email Capture */}
            <EmailCapture />

            {/* Countdown Timer */}
            <div className="pt-4">
              <p 
                className="text-sm text-muted-foreground mb-6 opacity-0 animate-fade-up"
                style={{ animationDelay: "0.35s" }}
              >
                Launching in
              </p>
              <CountdownTimer targetDate={LAUNCH_DATE} />
            </div>

            {/* Social Icons */}
            <div className="pt-6">
              <SocialIcons />
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full px-6 py-6 md:px-12 md:py-8">
          <div 
            className="text-center space-y-2 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <p className="text-sm text-muted-foreground">
              Questions? Reach out to us at{" "}
              <a 
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-primary link-underline transition-colors duration-300 hover:text-primary/80"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
            <p className="text-xs text-muted-foreground/60">
              © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
