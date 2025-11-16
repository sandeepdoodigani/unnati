import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ProgramCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ProgramCard({ icon: Icon, title, description }: ProgramCardProps) {
  return (
    <Card className="hover-elevate transition-all duration-300 group" data-testid={`card-program-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader>
        <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed mb-4">
          {description}
        </CardDescription>
        <a href="#programs" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors" data-testid={`link-learn-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          Learn More
          <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </CardContent>
    </Card>
  );
}
