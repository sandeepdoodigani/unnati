import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/Students_digital_learning_classroom_3a69748f.png";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden" id="home">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Students engaged in digital learning" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Empowering People.<br />
            Enabling Progress.<br />
            Enriching Communities.
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl leading-relaxed">
            Unnati Foundation India is dedicated to transforming lives through education, research, innovation, skill development, livelihood creation, and cultural preservation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" data-testid="button-get-involved">
              Get Involved
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-background/80 backdrop-blur" data-testid="button-learn-more">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
