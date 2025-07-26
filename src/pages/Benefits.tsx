import { Card } from '@/components/ui/card';
import { 
  Calendar, 
  Sparkles, 
  Zap, 
  Smile, 
  Baby, 
  Shield, 
  Heart,
  TrendingUp,
  Sun
} from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Calendar,
      title: 'Balanced Cycles',
      description: 'Experience more regular, predictable menstrual cycles as your hormones find their natural rhythm.',
      color: 'bg-primary/10 text-primary'
    },
    {
      icon: Sparkles,
      title: 'Clearer Skin',
      description: 'Reduce acne and excess oil production through gentle hormonal balancing and anti-inflammatory support.',
      color: 'bg-secondary/20 text-secondary-foreground'
    },
    {
      icon: Sun,
      title: 'Reduced Excess Hair',
      description: 'Natural approaches may help minimize unwanted hair growth by supporting healthy hormone levels.',
      color: 'bg-accent/20 text-accent-foreground'
    },
    {
      icon: Zap,
      title: 'Enhanced Energy',
      description: 'Feel more vibrant and energized as your metabolism and blood sugar stabilize naturally.',
      color: 'bg-primary/10 text-primary'
    },
    {
      icon: Smile,
      title: 'Improved Mood',
      description: 'Experience greater emotional balance and resilience through stress reduction and hormonal harmony.',
      color: 'bg-secondary/20 text-secondary-foreground'
    },
    {
      icon: TrendingUp,
      title: 'Less Bloating',
      description: 'Enjoy improved digestion and reduced bloating through anti-inflammatory nutrition and herbal support.',
      color: 'bg-accent/20 text-accent-foreground'
    },
    {
      icon: Baby,
      title: 'Enhanced Fertility',
      description: 'Support your reproductive health naturally, whether you\'re trying to conceive or simply want optimal function.',
      color: 'bg-primary/10 text-primary'
    },
    {
      icon: Shield,
      title: 'Stress Relief',
      description: 'Develop resilience and find calm through mindfulness practices, adaptogenic herbs, and sound therapy.',
      color: 'bg-secondary/20 text-secondary-foreground'
    },
    {
      icon: Heart,
      title: 'Body Confidence',
      description: 'Reconnect with your body\'s wisdom and feel confident in your natural healing journey.',
      color: 'bg-accent/20 text-accent-foreground'
    }
  ];

  const testimonialHighlights = [
    {
      benefit: 'Cycle Regulation',
      timeframe: '2-3 months',
      description: 'Many women notice more predictable cycles within the first few months of consistent natural support.'
    },
    {
      benefit: 'Energy & Mood',
      timeframe: '2-4 weeks',
      description: 'Stress reduction and blood sugar balance often show benefits relatively quickly.'
    },
    {
      benefit: 'Skin Clarity',
      timeframe: '1-3 months',
      description: 'Hormonal acne improvement typically follows as internal balance is restored.'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="hero-title mb-6">Benefits of Natural PCOS Healing</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Discover the transformative benefits that await you on your journey to hormonal balance and vibrant wellness.
          </p>
        </div>

        {/* Benefits Grid */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-soft text-center group hover:scale-105">
                <div className={`p-4 ${benefit.color} rounded-full w-fit mx-auto mb-4 group-hover:scale-110 smooth-transition`}>
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="section-title">When to Expect Results</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every body is unique, but here's what many women experience on their natural healing journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonialHighlights.map((item, index) => (
              <Card key={index} className="card-soft text-center">
                <div className="text-2xl font-bold text-primary mb-2">{item.timeframe}</div>
                <h3 className="font-semibold mb-3">{item.benefit}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
          
          <Card className="card-soft mt-8 max-w-3xl mx-auto">
            <div className="text-center">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Remember:</strong> Your healing journey is unique to you. 
                These timeframes are general guidelines based on many women's experiences. 
                Some may see benefits sooner, others may take longer—both are completely normal.
              </p>
            </div>
          </Card>
        </section>

        {/* Holistic Benefits */}
        <section className="mb-16">
          <Card className="card-soft max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Beyond Symptom Relief</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Natural PCOS healing isn't just about managing symptoms—it's about reclaiming your vitality, 
                reconnecting with your body's wisdom, and creating lasting wellness that radiates through every area of your life.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    Emotional Wellness
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Greater self-compassion and body acceptance</li>
                    <li>• Reduced anxiety around food and symptoms</li>
                    <li>• Increased confidence in your healing abilities</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-secondary" />
                    Lifestyle Transformation
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Sustainable, enjoyable wellness habits</li>
                    <li>• Better sleep quality and stress management</li>
                    <li>• Deeper connection to nourishing practices</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="botanical-gradient rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-card-foreground mb-6">
            Your Benefits Journey Starts Today
          </h2>
          <p className="text-lg text-card-foreground/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Every small step you take toward natural healing is an investment in your future self. 
            Begin with one gentle change and watch as the benefits unfold naturally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/natural-healing" className="btn-botanical">
              Start Your Healing Journey
            </a>
            <a href="/shop" className="bg-card text-card-foreground hover:bg-card/90 px-6 py-3 rounded-full font-medium smooth-transition hover:scale-105">
              Explore Wellness Tools
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Benefits;