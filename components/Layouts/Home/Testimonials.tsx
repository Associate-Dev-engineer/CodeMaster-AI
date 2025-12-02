import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer at Google",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: 5,
    text: "This platform transformed how I approach coding problems. The AI explanations are incredibly detailed and helped me land my dream job at Google. The step-by-step breakdowns made complex algorithms finally click for me.",
  },
  {
    name: "Michael Rodriguez",
    role: "Full Stack Developer",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    rating: 5,
    text: "I've tried many coding platforms, but this one stands out. The AI-powered hints guide you without giving away the answer. It's like having a mentor available 24/7. My problem-solving skills improved dramatically.",
  },
  {
    name: "Priya Sharma",
    role: "CS Student & Intern",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    rating: 5,
    text: "As a student, this platform has been invaluable. The native language support helped me understand problems better, and the progress tracking keeps me motivated. I went from struggling with basics to solving medium problems confidently.",
  },
  {
    name: "James Anderson",
    role: "Senior Developer at Amazon",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    rating: 5,
    text: "The interview preparation feature is outstanding. I used this platform to prepare for my Amazon interview and the problems were spot-on. The AI breakdowns helped me understand patterns I was missing before.",
  },
  {
    name: "Emily Taylor",
    role: "Frontend Engineer",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
    rating: 5,
    text: "What I love most is how the platform teaches you to think, not just memorize solutions. The interactive code editor with real-time feedback is amazing. I've recommended it to all my colleagues.",
  },
  {
    name: "David Kim",
    role: "Tech Lead at Microsoft",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    rating: 5,
    text: "This is the future of coding education. The AI assistance is smart enough to guide without spoiling, and the analytics help identify weak areas. It's become an essential tool for my team's skill development.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Loved by Developers{" "}
            <span className="text-secondary-foreground">Worldwide</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Join thousands of developers who have transformed their coding
            skills with our platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-primary/30 group-hover:text-primary/50 transition-colors duration-300" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                {testimonial.text}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover border-2 border-border"
                />
                <div>
                  <h4 className="font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              4.9/5
            </div>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              2,500+
            </div>
            <p className="text-sm text-muted-foreground">Happy Users</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              98%
            </div>
            <p className="text-sm text-muted-foreground">Would Recommend</p>
          </div>
        </div>
      </div>
    </section>
  );
}
