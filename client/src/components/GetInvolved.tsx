import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HandHeart, DollarSign, Handshake } from "lucide-react";

export default function GetInvolved() {
  const opportunities = [
    {
      icon: HandHeart,
      title: "Volunteer",
      description: "Join our mission and make a direct impact in your community through hands-on volunteering opportunities.",
      buttonText: "Become a Volunteer",
      buttonVariant: "default" as const
    },
    {
      icon: DollarSign,
      title: "Donate",
      description: "Support our education, empowerment, and innovation programs to help transform lives across communities.",
      buttonText: "Make a Donation",
      buttonVariant: "default" as const
    },
    {
      icon: Handshake,
      title: "Partner with Us",
      description: "Collaborate through CSR initiatives and strategic partnerships to create impactful, sustainable change.",
      buttonText: "Explore Partnerships",
      buttonVariant: "outline" as const
    }
  ];

  return (
    <section className="py-16 bg-card/30" id="get-involved">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get Involved</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Be part of the change. Your contribution can transform lives and strengthen communities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {opportunities.map((opportunity, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300 flex flex-col" data-testid={`card-${opportunity.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <CardHeader>
                <div className="p-3 rounded-lg bg-accent/20 text-accent-foreground w-fit mb-3">
                  <opportunity.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">{opportunity.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="text-base leading-relaxed mb-6 flex-1">
                  {opportunity.description}
                </CardDescription>
                <Button 
                  variant={opportunity.buttonVariant} 
                  className="w-full" 
                  data-testid={`button-${opportunity.title.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => console.log(`${opportunity.title} clicked`)}
                >
                  {opportunity.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
