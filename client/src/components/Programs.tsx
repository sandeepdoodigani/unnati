import ProgramCard from "./ProgramCard";
import { BookOpen, Lightbulb, Briefcase, Heart, Users, Shield, Leaf } from "lucide-react";

export default function Programs() {
  const programs = [
    {
      icon: BookOpen,
      title: "Education & Digital Literacy",
      description: "Promoting holistic education through project-based learning and comprehensive digital literacy programs for all ages."
    },
    {
      icon: Lightbulb,
      title: "Research & Innovation Labs",
      description: "Establishing innovation labs to foster creativity, scientific thinking, and emerging technologies like AI and IoT."
    },
    {
      icon: Briefcase,
      title: "Skill Development & Livelihood",
      description: "Empowering youth through skill, reskill, upskill programs and sustainable livelihood creation opportunities."
    },
    {
      icon: Heart,
      title: "Women & Child Development",
      description: "Supporting women and children across health, safety, education, and entrepreneurship initiatives."
    },
    {
      icon: Users,
      title: "Community Empowerment",
      description: "Uplifting SC/ST/BPL communities through education, skills training, and technology access programs."
    },
    {
      icon: Shield,
      title: "Public Safety & Governance",
      description: "Supporting e-governance, surveillance systems, and digital public services for enhanced community safety."
    },
    {
      icon: Leaf,
      title: "Environment & Culture",
      description: "Promoting environmental sustainability, civic responsibility, and preserving India's cultural heritage."
    }
  ];

  return (
    <section className="py-16 bg-background" id="programs">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Programs</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive initiatives designed to empower communities and create lasting positive change
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              icon={program.icon}
              title={program.title}
              description={program.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
