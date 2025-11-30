import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* CTA Card */}
        <div className="relative bg-card border-2 border-primary/30 rounded-3xl p-8 md:p-16 overflow-hidden group hover:border-primary/50 transition-all duration-300 shadow-xl">
          {/* Background Gradient Effect */}
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/5 opacity-50"></div>

          {/* Content */}
          <div className="relative z-10 text-center space-y-8">
            {/* Icon Badge */}
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-3xl text-balance sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Start Your Coding Journey with{" "}
                <span className="text-primary">Guided AI</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Join thousands of developers mastering coding with interactive
                problem-solving. Get AI-powered explanations, real-time
                feedback, and track your progress—all in one place.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button className="group/btn w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg shadow-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2">
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-card border-2 border-border text-card-foreground rounded-xl font-semibold text-lg hover:border-primary hover:text-primary transition-all duration-300">
                View Pricing
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary/10 blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl"></div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              50K+
            </div>
            <p className="text-sm text-muted-foreground">Active Users</p>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              1000+
            </div>
            <p className="text-sm text-muted-foreground">Problems</p>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              95%
            </div>
            <p className="text-sm text-muted-foreground">Success Rate</p>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              24/7
            </div>
            <p className="text-sm text-muted-foreground">AI Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
