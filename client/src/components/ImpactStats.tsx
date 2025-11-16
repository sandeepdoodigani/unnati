import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Users, Award, Lightbulb, GraduationCap, Heart, Sprout } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay?: number;
}

function StatCard({ icon, value, label, delay = 0 }: StatCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [displayValue, setDisplayValue] = useState("0");
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
    const suffix = value.replace(/[0-9,]/g, "");
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current += increment;
      if (step >= steps) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current).toLocaleString() + suffix);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <Card ref={cardRef} className="p-6 hover-elevate transition-all duration-300" data-testid={`card-stat-${label.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex flex-col items-center text-center gap-3">
        <div className="p-3 rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <div className="text-3xl md:text-4xl font-bold text-foreground">
          {displayValue}
        </div>
        <div className="text-sm md:text-base text-muted-foreground font-medium">
          {label}
        </div>
      </div>
    </Card>
  );
}

export default function ImpactStats() {
  const stats = [
    { icon: <Users className="h-8 w-8" />, value: "10,000+", label: "Beneficiaries Supported" },
    { icon: <Award className="h-8 w-8" />, value: "150+", label: "Skill Programs" },
    { icon: <Lightbulb className="h-8 w-8" />, value: "50+", label: "Innovation Labs" },
    { icon: <Heart className="h-8 w-8" />, value: "2,500+", label: "Women Trained" },
    { icon: <GraduationCap className="h-8 w-8" />, value: "3,000+", label: "Students Engaged" },
    { icon: <Sprout className="h-8 w-8" />, value: "100+", label: "Environmental Campaigns" },
  ];

  return (
    <section className="py-16 bg-card/50" id="impact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Impact</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transforming lives and communities across Telangana through dedicated programs and initiatives
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
