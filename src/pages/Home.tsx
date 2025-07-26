import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { NavLink } from 'react-router-dom';
import { Leaf, Heart, Sparkles, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="p-4 bg-primary/10 rounded-full">
              <Leaf className="h-12 w-12 text-primary" />
            </div>
          </div>
          
          <h1 className="hero-title mb-6">
            Her Balance
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Polycystic Ovary Syndrome (PCOS): Understanding, Managing & Healing Naturally
          </p>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
            Embrace your journey to hormonal harmony with gentle, natural approaches that honor your body's wisdom and support your path to wellness.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <NavLink to="/natural-healing">
              <Button className="btn-botanical group">
                Start Your Healing Journey
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 smooth-transition" />
              </Button>
            </NavLink>
            
            <NavLink to="/shop">
              <Button className="btn-secondary-soft">
                Explore Our Products
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Your Gentle Path to Wellness</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover holistic approaches that support your body's natural healing processes with compassion and care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-soft text-center group hover:scale-105">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 smooth-transition">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Natural Remedies</h3>
              <p className="text-muted-foreground">
                Gentle herbal solutions and botanical wisdom to support your hormonal balance naturally.
              </p>
            </Card>
            
            <Card className="card-soft text-center group hover:scale-105">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-secondary/20 rounded-full group-hover:bg-secondary/30 smooth-transition">
                  <Heart className="h-8 w-8 text-secondary-foreground" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Mindful Healing</h3>
              <p className="text-muted-foreground">
                Stress reduction, mindfulness practices, and self-care rituals for emotional wellness.
              </p>
            </Card>
            
            <Card className="card-soft text-center group hover:scale-105">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-accent/20 rounded-full group-hover:bg-accent/30 smooth-transition">
                  <Sparkles className="h-8 w-8 text-accent-foreground" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sound Therapy</h3>
              <p className="text-muted-foreground">
                Healing frequencies and therapeutic sounds to restore harmony and balance within.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="botanical-gradient py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-6">
            Begin Your Transformation Today
          </h2>
          <p className="text-lg text-card-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of women who have found their balance through gentle, natural healing approaches.
          </p>
          <NavLink to="/about-pcos">
            <Button className="bg-card text-card-foreground hover:bg-card/90 px-8 py-3 rounded-full font-medium smooth-transition hover:scale-105 gentle-shadow">
              Learn About PCOS
            </Button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Home;