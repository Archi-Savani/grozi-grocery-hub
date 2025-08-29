import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Heart, Users, Award, Truck, Clock } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Leaf className="h-8 w-8 text-fresh-green" />,
      title: "Fresh & Organic",
      description: "We source the freshest organic produce directly from local farms to ensure quality and sustainability."
    },
    {
      icon: <Heart className="h-8 w-8 text-warm-orange" />,
      title: "Health First",
      description: "Our commitment to your health drives every decision we make in product selection and quality control."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Community Focused",
      description: "Supporting local farmers and building stronger communities through sustainable grocery practices."
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Quality Guaranteed",
      description: "Every product meets our strict quality standards with a 100% satisfaction guarantee."
    },
    {
      icon: <Truck className="h-8 w-8 text-fresh-green" />,
      title: "Fast Delivery",
      description: "Same-day delivery available to bring fresh groceries right to your doorstep."
    },
    {
      icon: <Clock className="h-8 w-8 text-warm-orange" />,
      title: "Always Fresh",
      description: "Our efficient supply chain ensures products reach you at peak freshness every time."
    }
  ];

  const stats = [
    { number: "50,000+", label: "Happy Customers" },
    { number: "500+", label: "Local Farmers" },
    { number: "10,000+", label: "Products" },
    { number: "99.9%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-accent text-accent-foreground">About Grozi</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Fresh Food, Fresh Values
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Grozi, we believe that everyone deserves access to fresh, healthy, and affordable groceries. 
            Since our founding, we've been committed to revolutionizing the way people shop for food by 
            connecting communities with the freshest local produce and highest quality products.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2020, Grozi started as a small local initiative to help families 
                  access fresh, organic produce during challenging times. What began as a simple 
                  idea to connect local farmers with consumers has grown into a thriving community 
                  of health-conscious shoppers and sustainable food advocates.
                </p>
                <p>
                  Today, we're proud to serve over 50,000 customers across the region, working 
                  with more than 500 local farmers and producers to bring you the freshest, 
                  highest-quality groceries while supporting sustainable agriculture and fair 
                  trade practices.
                </p>
                <p>
                  Our mission remains simple: to make fresh, healthy food accessible to everyone 
                  while building stronger, more sustainable communities.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-fresh-green-light rounded-lg p-6 text-center">
                <div className="text-3xl mb-2">🌱</div>
                <div className="font-semibold text-foreground">Sustainable</div>
                <div className="text-sm text-muted-foreground">Farming Practices</div>
              </div>
              <div className="bg-warm-orange-light rounded-lg p-6 text-center">
                <div className="text-3xl mb-2">🤝</div>
                <div className="font-semibold text-foreground">Community</div>
                <div className="text-sm text-muted-foreground">Partnership</div>
              </div>
              <div className="bg-accent/10 rounded-lg p-6 text-center">
                <div className="text-3xl mb-2">✨</div>
                <div className="font-semibold text-foreground">Premium</div>
                <div className="text-sm text-muted-foreground">Quality</div>
              </div>
              <div className="bg-primary/10 rounded-lg p-6 text-center">
                <div className="text-3xl mb-2">🚚</div>
                <div className="font-semibold text-foreground">Fast</div>
                <div className="text-sm text-muted-foreground">Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Makes Us Different
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're more than just a grocery store - we're your partners in healthy living
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-hover transition-all duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Growing Together
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Our impact in numbers speaks to our commitment to the community
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            To make fresh, healthy, and sustainably-sourced food accessible to everyone while 
            supporting local farmers and building stronger communities. We believe that good food 
            is a fundamental right, not a privilege, and we're committed to making that vision a reality.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;