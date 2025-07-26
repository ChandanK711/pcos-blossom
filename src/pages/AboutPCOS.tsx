import { Card } from '@/components/ui/card';
import { 
  Calendar, 
  Droplets, 
  User, 
  Weight, 
  Zap, 
  Baby, 
  Sun,
  Palette
} from 'lucide-react';

const AboutPCOS = () => {
  const symptoms = [
    {
      icon: Calendar,
      title: 'Irregular Periods',
      description: 'Unpredictable or absent menstrual cycles'
    },
    {
      icon: Droplets,
      title: 'Acne & Oily Skin',
      description: 'Persistent breakouts and excess oil production'
    },
    {
      icon: User,
      title: 'Excess Hair Growth',
      description: 'Unwanted hair on face, chest, or back'
    },
    {
      icon: Sun,
      title: 'Hair Thinning',
      description: 'Thinning hair or male-pattern baldness'
    },
    {
      icon: Weight,
      title: 'Weight Gain',
      description: 'Difficulty maintaining or losing weight'
    },
    {
      icon: Baby,
      title: 'Fertility Challenges',
      description: 'Difficulty conceiving due to irregular ovulation'
    },
    {
      icon: Zap,
      title: 'Fatigue',
      description: 'Persistent tiredness and low energy levels'
    },
    {
      icon: Palette,
      title: 'Skin Changes',
      description: 'Dark patches or skin tags, especially around neck'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="hero-title mb-6">Understanding PCOS</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Polycystic Ovary Syndrome (PCOS) is a hormonal condition affecting people assigned female at birth. 
            Knowledge is power—understanding your body is the first step toward healing.
          </p>
        </div>

        {/* Definition Section */}
        <section className="mb-16">
          <Card className="card-soft max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6 text-primary">What is PCOS?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                PCOS is a common hormonal disorder that affects how your ovaries work. It's characterized by three main features:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <Droplets className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Hormonal Imbalance</h3>
                  <p className="text-sm text-muted-foreground">
                    Higher levels of male hormones (androgens) than typical
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="p-3 bg-secondary/20 rounded-full w-fit mx-auto mb-4">
                    <Calendar className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">Ovulatory Dysfunction</h3>
                  <p className="text-sm text-muted-foreground">
                    Irregular or absent ovulation and menstrual cycles
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="p-3 bg-accent/20 rounded-full w-fit mx-auto mb-4">
                    <Zap className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">Insulin Resistance</h3>
                  <p className="text-sm text-muted-foreground">
                    Difficulty processing insulin effectively
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Symptoms Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="section-title">Common Signs & Symptoms</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              PCOS presents differently for everyone. You may experience some or many of these symptoms. 
              Remember, you're not alone in this journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {symptoms.map((symptom, index) => (
              <Card key={index} className="card-soft text-center group hover:scale-105">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 smooth-transition">
                    <symptom.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{symptom.title}</h3>
                <p className="text-sm text-muted-foreground">{symptom.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Empowerment Section */}
        <section className="botanical-gradient rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-card-foreground mb-6">
            You Are Not Defined by PCOS
          </h2>
          <p className="text-lg text-card-foreground/80 max-w-3xl mx-auto leading-relaxed mb-8">
            While PCOS can feel overwhelming, remember that with understanding, support, and gentle natural approaches, 
            you can create meaningful change in your symptoms and overall wellbeing. Your journey to balance starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/natural-healing" className="btn-botanical">
              Explore Natural Solutions
            </a>
            <a href="/contact" className="bg-card text-card-foreground hover:bg-card/90 px-6 py-3 rounded-full font-medium smooth-transition hover:scale-105">
              Get Support
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPCOS;