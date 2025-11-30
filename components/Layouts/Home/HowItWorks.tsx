import { Search, Lightbulb, Code2 } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Choose Your Problem",
    desc: "Browse curated coding challenges across categories and difficulty levels.",
    icon: Search,
  },
  {
    id: 2,
    title: "Get AI-Powered Breakdown",
    desc: "Receive clear step-by-step reasoning, hints, and structured explanations.",
    icon: Lightbulb,
  },
  {
    id: 3,
    title: "Practice & Master Solutions",
    desc: "Code interactively, validate your logic, and strengthen long-term understanding.",
    icon: Code2,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            How <span className="text-secondary-foreground">It works</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started in three simple steps and start solving problems with AI
            guidance.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connector Line - Desktop Only */}
          <div
            className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 mx-auto"
            style={{ width: "70%" }}
          >
            <div className="w-full h-full bg-linear-to-r from-transparent via-border to-transparent"></div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Icon Circle */}
                  <div className="relative mb-8">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-card border-4 border-background shadow-lg flex items-center justify-center group-hover:border-primary/30 transition-all duration-300 relative z-10">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                        <Icon className="w-10 h-10 md:w-12 md:h-12 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                      </div>
                    </div>

                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg z-20">
                      {step.id}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xs mx-auto">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
