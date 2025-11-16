import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart, Lightbulb, Users, Globe } from "lucide-react";
import communityImage from "@assets/generated_images/Community_development_gathering_India_639d272e.png";

export default function About() {
  const values = [
    { icon: Heart, label: "Integrity" },
    { icon: Users, label: "Inclusivity" },
    { icon: Lightbulb, label: "Innovation" },
    { icon: Heart, label: "Compassion" },
    { icon: Globe, label: "Sustainability" },
    { icon: Users, label: "Service" }
  ];

  return (
    <section className="py-16 bg-background" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Us</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A non-profit trust committed to empowering individuals and strengthening communities through education, technology, livelihood, research, culture, and public awareness.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Eye className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To create an inclusive, empowered, and technologically progressive society rooted in knowledge, culture, and sustainable development.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Target className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Enable holistic education through project-based learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Build research and innovation labs for creativity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Empower youth through skills and livelihood programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Support women and children across health and safety</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Uplift SC/ST/BPL communities through education and tech</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Promote civic responsibility and sustainability</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <img 
              src={communityImage} 
              alt="Community development gathering" 
              className="w-full h-80 object-cover rounded-lg"
            />
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {values.map((value, index) => (
                    <div 
                      key={index} 
                      className="flex flex-col items-center gap-2 p-4 rounded-lg hover-elevate transition-all"
                      data-testid={`value-${value.label.toLowerCase()}`}
                    >
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <value.icon className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-medium text-center">{value.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-card/50">
          <CardHeader>
            <CardTitle className="text-2xl">Board of Trustees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-4 p-4 rounded-lg border hover-elevate transition-all" data-testid="trustee-santhoshi">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold flex-shrink-0">
                    SK
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Mrs. Santhoshi Latha Kasturi</h3>
                    <p className="text-muted-foreground text-sm">Trustee</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A visionary with a deep commitment to social development, women empowerment, and education-led transformation.
                </p>
              </div>
              <div className="flex flex-col gap-4 p-4 rounded-lg border hover-elevate transition-all" data-testid="trustee-shravanth">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold flex-shrink-0">
                    SS
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Mr. Shravanth Samudrala</h3>
                    <p className="text-muted-foreground text-sm">Trustee</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A community-focused leader passionate about youth development, environmental protection, and community welfare programs.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
