import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const avatars = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    alt: "User 1",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    alt: "User 2",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    alt: "User 3",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    alt: "User 4",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    alt: "User 5",
  },
];
export default function HeroSection() {
  return (
    <section className="w-full py-16 md:py-32 lg:py-40 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Avatar Group */}
          <div className="flex -space-x-4 rtl:space-x-reverse">
            {avatars.map((avatar) => (
              <img
                key={avatar.id}
                className="w-10 h-10 border-2 border-border rounded-full object-cover"
                src={avatar.src}
                alt={avatar.alt}
              />
            ))}
            <div className="flex items-center justify-center w-10 h-10 text-xs font-medium text-primary-foreground bg-secondary-foreground border-2 border-border rounded-full">
              +99
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight max-w-5xl">
            Code Smarter, In Your Native
            <span className="text-secondary-foreground px-2.5">Language</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            A modern coding practice platform powered by AI, helping developers
            learn and solve problems more effectively. Understand every problem
            statement in your own native language—clear, simple, and accessible
            for everyone.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center pt-4">
            <Link href={"/Get-started"}>
              <Button
                className="w-full sm:w-auto cursor-pointer bg-secondary-foreground text-primary-foreground px-8 py-6 text-base sm:text-lg shadow-lg rounded-xl hover:bg-accent-foreground transition-all"
                size="lg"
              >
                Get Started
              </Button>
            </Link>
            <Button
              className="w-full sm:w-auto bg-background border-2 border-border px-8 py-6 text-base sm:text-lg rounded-xl hover:bg-muted transition-all"
              size="lg"
              variant="outline"
            >
              Explore Problems
            </Button>
          </div>

          {/* Navbar Preview */}
          <div className="w-full pt-12 md:pt-20 space-y-8">
            <nav className="flex justify-center">
              <ul className="inline-flex items-center gap-4 sm:gap-5 md:gap-8 text-base md:text-lg">
                {["Explore", "Language", "Code", "Practice"].map((item, i) => (
                  <li
                    key={i}
                    className="text-foreground hover:text-primary transition-colors cursor-pointer font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Preview Image */}
            <div className="w-full max-w-6xl mx-auto px-4">
              <Image
                src="https://framerusercontent.com/images/WQ7ocJThxH3qhnSivm9smtIkP0Q.png?scale-down-to=1024"
                alt="Platform Preview"
                width={2000}
                height={2000}
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>

          {/* Sponsors Infinite Scroll */}
          <div className="relative w-full overflow-hidden py-8 sm:pt-16 pb-8">
            <div className="absolute inset-0 bg-linear-to-r from-background via-transparent to-background z-10 pointer-events-none"></div>
            <div className="flex animate-marquee whitespace-nowrap">
              <ul className="flex items-center gap-16 text-2xl md:text-4xl lg:text-5xl min-w-max font-semibold">
                {[
                  "GitHub",
                  "Vercel",
                  "DigitalOcean",
                  "JetBrains",
                  "StackBlitz",
                  "Cloudflare",
                  "AWS",
                  "Google Cloud",
                ].map((name, i) => (
                  <li
                    key={i}
                    className="text-muted-foreground hover:text-foreground transition-colors cursor-default"
                  >
                    {name}
                  </li>
                ))}
              </ul>

              <ul className="flex items-center gap-16 text-2xl md:text-4xl lg:text-5xl min-w-max font-semibold">
                {[
                  "GitHub",
                  "Vercel",
                  "DigitalOcean",
                  "JetBrains",
                  "StackBlitz",
                  "Cloudflare",
                  "AWS",
                  "Google Cloud",
                ].map((name, i) => (
                  <li
                    key={`dup-${i}`}
                    className="text-muted-foreground hover:text-foreground transition-colors cursor-default"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
