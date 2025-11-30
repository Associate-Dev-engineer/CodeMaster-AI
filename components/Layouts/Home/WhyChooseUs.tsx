import { Zap, Target, Brain, TrendingUp, Globe, Shield } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "AI-Driven Learning",
    desc: "Get instant AI-powered explanations that break down complex problems into digestible steps.",
  },
  {
    icon: Target,
    title: "Real Coding Practice",
    desc: "Write and execute code directly in the browser with real-time feedback and validation.",
  },
  {
    icon: Brain,
    title: "Concept Mastery",
    desc: "Learn the 'why' behind solutions, not just the 'how', building deep understanding.",
  },
  {
    icon: TrendingUp,
    title: "Track Your Progress",
    desc: "Monitor your learning journey with detailed analytics and performance insights.",
  },
  {
    icon: Globe,
    title: "Native Language Support",
    desc: "Understand problems in your native language—clear, simple, and accessible for everyone.",
  },
  {
    icon: Shield,
    title: "Interview-Ready Skills",
    desc: "Practice problems from top companies and prepare confidently for technical interviews.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Why Developers{" "}
            <span className="text-secondary-foreground">choose</span>{" "}
            CodeMaster AI
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive platform designed to help you learn, practice, and
            master coding with intelligent AI assistance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="mb-6 w-14 h-14 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
