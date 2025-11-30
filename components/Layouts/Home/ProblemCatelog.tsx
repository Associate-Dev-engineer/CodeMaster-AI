import {
  Database,
  Binary,
  GitBranch,
  Boxes,
  Network,
  Workflow,
} from "lucide-react";

const categories = [
  {
    icon: Database,
    title: "Arrays & Strings",
    problems: "250+ Problems",
    difficulty: "Easy to Hard",
    color: "bg-blue-500/10",
    iconColor: "text-blue-500",
    borderColor: "border-blue-500/20",
  },
  {
    icon: GitBranch,
    title: "Trees & Graphs",
    problems: "180+ Problems",
    difficulty: "Medium to Hard",
    color: "bg-green-500/10",
    iconColor: "text-green-500",
    borderColor: "border-green-500/20",
  },
  {
    icon: Binary,
    title: "Dynamic Programming",
    problems: "120+ Problems",
    difficulty: "Medium to Hard",
    color: "bg-purple-500/10",
    iconColor: "text-purple-500",
    borderColor: "border-purple-500/20",
  },
  {
    icon: Boxes,
    title: "Sorting & Searching",
    problems: "150+ Problems",
    difficulty: "Easy to Medium",
    color: "bg-orange-500/10",
    iconColor: "text-orange-500",
    borderColor: "border-orange-500/20",
  },
  {
    icon: Network,
    title: "System Design",
    problems: "80+ Problems",
    difficulty: "Hard",
    color: "bg-red-500/10",
    iconColor: "text-red-500",
    borderColor: "border-red-500/20",
  },
  {
    icon: Workflow,
    title: "Algorithms",
    problems: "200+ Problems",
    difficulty: "All Levels",
    color: "bg-cyan-500/10",
    iconColor: "text-cyan-500",
    borderColor: "border-cyan-500/20",
  },
];

export default function ProblemCatalogSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            <span className="text-secondary-foreground">Explore</span> Our Problem Catalog
          </h2>
          <p className="text-balance md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Dive into our extensive collection of coding challenges organized by
            topics and difficulty levels.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`bg-card border ${category.borderColor} rounded-2xl p-8 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group cursor-pointer`}
              >
                {/* Icon */}
                <div
                  className={`mb-6 w-16 h-16 rounded-xl ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-8 h-8 ${category.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>

                {/* Stats */}
                <div className="space-y-2 mb-4">
                  <p className="text-sm md:text-base text-muted-foreground font-medium">
                    {category.problems}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
                      {category.difficulty}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 flex items-center text-primary font-medium group-hover:gap-2 transition-all duration-300">
                  <span>Explore</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-4 bg-card border-2 border-border rounded-xl text-card-foreground font-semibold hover:border-primary hover:text-primary transition-all duration-300">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
}
