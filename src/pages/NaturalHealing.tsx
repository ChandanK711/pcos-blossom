import { Card } from '@/components/ui/card';
import { Leaf, Heart, Moon, Utensils, Activity, Brain, Bed, Timer } from 'lucide-react';

const NaturalHealing = () => {
  const herbalRemedies = [
    {
      name: 'Spearmint',
      icon: Leaf,
      description: 'May help reduce excess male hormones and support clearer skin'
    },
    {
      name: 'Cinnamon',
      icon: Timer,
      description: 'Supports insulin sensitivity and healthy blood sugar levels'
    },
    {
      name: 'Green Tea',
      icon: Leaf,
      description: 'Rich in antioxidants, supports metabolism and hormonal balance'
    },
    {
      name: 'Ashwagandha',
      icon: Brain,
      description: 'Adaptogenic herb that helps manage stress and cortisol levels'
    },
    {
      name: 'Shatavari',
      icon: Heart,
      description: 'Ayurvedic herb that nourishes reproductive health and cycles'
    },
    {
      name: 'Ginger',
      icon: Leaf,
      description: 'Anti-inflammatory properties that support digestive health'
    },
    {
      name: 'Fennel',
      icon: Moon,
      description: 'Traditionally used to support menstrual regulation and comfort'
    }
  ];

  const lifestylePractices = [
    {
      title: 'Anti-Inflammatory Nutrition',
      icon: Utensils,
      description: 'Focus on whole foods, healthy fats, and low-glycemic options that support stable blood sugar'
    },
    {
      title: 'Gentle Movement & Yoga',
      icon: Activity,
      description: 'Regular, enjoyable movement that reduces stress and supports hormonal balance'
    },
    {
      title: 'Mindfulness & Stress Care',
      icon: Brain,
      description: 'Meditation, breathing exercises, and stress-reduction techniques for emotional wellness'
    },
    {
      title: 'Restorative Sleep',
      icon: Bed,
      description: 'Quality sleep hygiene and rest practices to support hormone regulation'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="hero-title mb-6">Natural Healing Approaches</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Gentle, time-tested remedies and lifestyle practices that work in harmony with your body's natural healing wisdom.
          </p>
        </div>

        {/* Herbal Remedies Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="section-title flex items-center justify-center gap-3">
              <Leaf className="h-8 w-8 text-primary" />
              Herbal Remedies
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nature's gentle pharmacy offers these time-honored botanicals to support your hormonal journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {herbalRemedies.map((remedy, index) => (
              <Card key={index} className="card-soft group hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 smooth-transition flex-shrink-0">
                    <remedy.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{remedy.name}</h3>
                    <p className="text-sm text-muted-foreground">{remedy.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Card className="card-soft inline-block">
              <p className="text-sm text-muted-foreground">
                💡 <strong>Gentle Reminder:</strong> Always consult with a healthcare provider before starting any herbal regimen, 
                especially if you're taking medications or have other health conditions.
              </p>
            </Card>
          </div>
        </section>

        {/* Lifestyle Practices Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="section-title flex items-center justify-center gap-3">
              <Heart className="h-8 w-8 text-secondary" />
              Lifestyle Practices
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Holistic approaches that nurture your whole being—body, mind, and spirit.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {lifestylePractices.map((practice, index) => (
              <Card key={index} className="card-soft group hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/20 rounded-full group-hover:bg-secondary/30 smooth-transition flex-shrink-0">
                    <practice.icon className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">{practice.title}</h3>
                    <p className="text-muted-foreground">{practice.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="botanical-gradient rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-card-foreground mb-6">
            Start Your Natural Healing Journey
          </h2>
          <p className="text-lg text-card-foreground/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Small, consistent steps create lasting transformation. Begin with one or two approaches that resonate with you, 
            and gradually build your personalized wellness routine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/shop" className="btn-botanical">
              Explore Our Herbal Tea
            </a>
            <a href="/sound-therapy" className="bg-card text-card-foreground hover:bg-card/90 px-6 py-3 rounded-full font-medium smooth-transition hover:scale-105">
              Try Sound Therapy
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NaturalHealing;