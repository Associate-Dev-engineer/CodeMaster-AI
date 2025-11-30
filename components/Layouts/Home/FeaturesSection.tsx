import React from "react";
import { CheckCircle, BookOpen, Code2, BarChart2 } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: CheckCircle,
      title: "AI Problem Breakdown",
      desc: "Get detailed step-by-step explanations that help you learn the logic behind every solution.",
    },
    {
      icon: Code2,
      title: "Interactive Code Editor",
      desc: "Practice and run code directly in the browser with real-time feedback and guidance.",
    },
    {
      icon: BarChart2,
      title: "Track Your Progress",
      desc: "Monitor performance, strengths, and weaknesses using smart learning analytics.",
    },
    {
      icon: BookOpen,
      title: "Problem Learning Experience",
      desc: "Learn through structured challenges that level up difficulty as you grow.",
    },
  ];

  return (
    <section className="w-full py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
            A Problem Breakdown, Not Just{" "}
            <span className="text-secondary-foreground">solutions</span>.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed text-balance">
            Understand the deep logic of coding with structured explanations,
            hints, examples, and real-time practice.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Icon Container */}
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-muted mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
