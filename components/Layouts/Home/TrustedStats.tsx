import { Users, CircleCheckBig, ThumbsUp, Building2 } from "lucide-react";

export default function TrustedStats() {
  const stats = [
    {
      icon: Users,
      count: "50K+",
      label: "Active Learners",
    },
    {
      icon: CircleCheckBig,
      count: "10,000+",
      label: "Problem Resolved",
    },
    {
      icon: ThumbsUp,
      count: "95%",
      label: "Success Rate",
    },
    {
      icon: Building2,
      count: "500+",
      label: "Companies Covered",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            <span className="text-secondary-foreground">Trusted</span> by
            Thousands of Developers
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>

                  {/* Count */}
                  <h3 className="text-3xl md:text-4xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                    {stat.count}
                  </h3>

                  {/* Label */}
                  <p className="text-sm md:text-base text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
