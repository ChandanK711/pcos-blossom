import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Music, 
  Headphones, 
  Heart, 
  Brain, 
  Zap, 
  Sparkles, 
  Shield, 
  Calendar,
  Play,
  BookOpen,
  Volume2
} from 'lucide-react';

const SoundTherapy = () => {
  const frequencies = [
    {
      frequency: '80 Hz',
      title: 'Hormonal Balance',
      description: 'Deep grounding frequency that supports endocrine system harmony',
      icon: Heart,
      color: 'bg-primary/10 text-primary'
    },
    {
      frequency: '40 Hz',
      title: 'Gamma Brain Tone',
      description: 'Enhances mental clarity and cognitive function',
      icon: Brain,
      color: 'bg-secondary/20 text-secondary-foreground'
    },
    {
      frequency: '6 Hz',
      title: 'Metabolic Support',
      description: 'Theta waves that may support healthy metabolism',
      icon: Zap,
      color: 'bg-accent/20 text-accent-foreground'
    },
    {
      frequency: '4-7 Hz + 528 Hz',
      title: 'Stress Relief',
      description: 'Theta brainwaves combined with the "Love Frequency" for deep relaxation',
      icon: Sparkles,
      color: 'bg-primary/10 text-primary'
    },
    {
      frequency: '432 Hz',
      title: 'Skin & Acne Support',
      description: 'Natural healing frequency for skin clarity and cellular repair',
      icon: Shield,
      color: 'bg-secondary/20 text-secondary-foreground'
    },
    {
      frequency: '528 Hz + Theta',
      title: 'Hair Health',
      description: 'DNA repair frequency combined with theta waves for hair follicle health',
      icon: Sparkles,
      color: 'bg-accent/20 text-accent-foreground'
    },
    {
      frequency: '40-80 Hz',
      title: 'Menstrual Comfort',
      description: 'Pain relief frequencies for menstrual discomfort and cramping',
      icon: Calendar,
      color: 'bg-primary/10 text-primary'
    }
  ];

  const faqs = [
    {
      question: 'How do I listen to these frequencies?',
      answer: 'Simply use comfortable headphones or quality speakers in a quiet space. Start with 10-15 minutes daily and gradually increase as feels comfortable. The key is consistency rather than duration.'
    },
    {
      question: 'Can I use headphones or speakers?',
      answer: 'Both work wonderfully! Headphones provide a more immersive experience, while speakers allow the frequencies to resonate through your entire body. Choose what feels most comfortable for you.'
    },
    {
      question: 'How often should I use sound therapy?',
      answer: 'Start with once daily for 10-20 minutes. Many people enjoy morning sessions for energy or evening sessions for relaxation. Listen to your body and adjust the frequency based on how you feel.'
    },
    {
      question: 'When will I notice benefits?',
      answer: 'Some people feel immediate relaxation, while others notice subtle changes over weeks of consistent practice. Remember, sound therapy works best as part of a holistic approach to wellness.'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="hero-title mb-6">Sound Therapy for PCOS</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Harness the power of healing frequencies to support your body's natural balance and promote deep relaxation.
          </p>
        </div>

        {/* Floating Listen Button */}
        <div className="fixed bottom-6 right-6 z-40">
          <Button className="btn-botanical rounded-full shadow-lg hover:shadow-xl group">
            <Headphones className="h-4 w-4 mr-2" />
            Listen Now
            <Volume2 className="h-4 w-4 ml-2 group-hover:scale-110 smooth-transition" />
          </Button>
        </div>

        {/* Frequencies Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="section-title flex items-center justify-center gap-3">
              <Music className="h-8 w-8 text-primary" />
              Healing Frequencies
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Each frequency is carefully selected to support different aspects of PCOS healing and overall wellness.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frequencies.map((freq, index) => (
              <Card key={index} className="card-soft group hover:scale-105">
                <div className="text-center">
                  <div className={`p-3 ${freq.color} rounded-full w-fit mx-auto mb-4 group-hover:scale-110 smooth-transition`}>
                    <freq.icon className="h-6 w-6" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">{freq.frequency}</div>
                  <h3 className="font-semibold mb-2">{freq.title}</h3>
                  <p className="text-sm text-muted-foreground">{freq.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Action Buttons */}
        <section className="mb-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="btn-botanical group">
              <Play className="h-4 w-4 mr-2 group-hover:scale-110 smooth-transition" />
              Try Our Frequency Playlist
            </Button>
            <Button className="btn-secondary-soft">
              <BookOpen className="h-4 w-4 mr-2" />
              Learn More About PCOS Healing
            </Button>
          </div>
        </section>

        {/* Important Notes */}
        <section className="mb-16">
          <Card className="card-soft max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-center">Important Notes for Your Practice</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-3">
                  <Headphones className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium mb-2">Use Quality Audio</h4>
                <p className="text-sm text-muted-foreground">
                  Headphones or good speakers ensure you receive the full frequency range
                </p>
              </div>
              <div>
                <div className="p-3 bg-secondary/20 rounded-full w-fit mx-auto mb-3">
                  <Heart className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h4 className="font-medium mb-2">Complementary Tool</h4>
                <p className="text-sm text-muted-foreground">
                  Sound therapy works best alongside healthy lifestyle practices
                </p>
              </div>
              <div>
                <div className="p-3 bg-accent/20 rounded-full w-fit mx-auto mb-3">
                  <Sparkles className="h-6 w-6 text-accent-foreground" />
                </div>
                <h4 className="font-medium mb-2">Holistic Approach</h4>
                <p className="text-sm text-muted-foreground">
                  Combine with diet, movement, and rest for optimal results
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know about incorporating sound therapy into your wellness routine.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Call to Action */}
        <section className="botanical-gradient rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-card-foreground mb-6">
            Begin Your Sound Healing Journey
          </h2>
          <p className="text-lg text-card-foreground/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Allow these gentle frequencies to support your body's natural healing processes. 
            Start with just a few minutes each day and notice how your body responds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-card text-card-foreground hover:bg-card/90 px-6 py-3 rounded-full font-medium smooth-transition hover:scale-105">
              <Play className="h-4 w-4 mr-2" />
              Start Listening Today
            </Button>
            <a href="/shop" className="bg-card/20 text-card-foreground hover:bg-card/30 px-6 py-3 rounded-full font-medium smooth-transition hover:scale-105 inline-flex items-center">
              Explore Wellness Products
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SoundTherapy;