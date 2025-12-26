import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

interface SocialLink {
  icon: React.ElementType;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const SocialIcons = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      {socialLinks.map((social, index) => (
        <a
          key={social.label}
          href={social.href}
          aria-label={social.label}
          className="group relative p-3 rounded-full border border-border/40 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/60 hover:bg-card/60 btn-lift opacity-0 animate-fade-up"
          style={{ animationDelay: `${0.6 + index * 0.1}s` }}
        >
          <social.icon className="w-5 h-5 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
          
          {/* Hover glow effect */}
          <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
