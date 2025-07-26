import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { HelpCircle, Clock, Leaf, Pill, ShoppingCart } from 'lucide-react';

const FAQs = () => {
  const faqCategories = [
    {
      title: 'Getting Started',
      icon: Clock,
      color: 'bg-primary/10 text-primary',
      faqs: [
        {
          question: 'How long before I see results with natural PCOS approaches?',
          answer: 'Every woman\'s journey is unique, but many begin noticing subtle changes within 2-4 weeks, particularly in energy and mood. More significant changes in cycles and symptoms typically develop over 2-6 months of consistent practice. Remember, sustainable healing takes time, and the gentle approach honors your body\'s natural rhythm.'
        },
        {
          question: 'Where should I start if I\'m new to natural PCOS healing?',
          answer: 'Begin with one or two gentle changes that feel sustainable for you. Many women start with our herbal tea and basic stress reduction practices. Focus on consistency rather than perfection, and gradually add more elements as they become natural parts of your routine.'
        },
        {
          question: 'Do I need to change everything at once?',
          answer: 'Absolutely not! Small, consistent changes are more powerful than dramatic overhauls. Choose one area that resonates with you—whether it\'s adding herbal tea, trying gentle movement, or beginning a mindfulness practice. Build from there at your own pace.'
        }
      ]
    },
    {
      title: 'Products & Quality',
      icon: Leaf,
      color: 'bg-secondary/20 text-secondary-foreground',
      faqs: [
        {
          question: 'Are your products vegan and organic?',
          answer: 'Yes! All our herbal products are 100% plant-based and sourced from certified organic suppliers whenever possible. We believe in pure, clean ingredients that honor both your body and the earth. All products are third-party tested for purity and potency.'
        },
        {
          question: 'What makes your herbal tea different from others?',
          answer: 'Our blend is specifically formulated for PCOS support, combining traditional Ayurvedic wisdom with modern nutritional science. Each herb is carefully selected for its specific benefits and synergistic effects. Plus, we focus on taste—wellness should be enjoyable!'
        },
        {
          question: 'How do I know if your products are right for me?',
          answer: 'Our products are designed for women with PCOS who want to support their health naturally. However, everyone\'s needs are different. We recommend starting with our herbal tea or journal to see how your body responds. Remember, we offer a 30-day satisfaction guarantee.'
        }
      ]
    },
    {
      title: 'Health & Safety',
      icon: Pill,
      color: 'bg-accent/20 text-accent-foreground',
      faqs: [
        {
          question: 'Can I use these products with my current medications or birth control?',
          answer: 'While our products are natural, it\'s essential to consult with your healthcare provider before starting any new regimen, especially if you\'re taking medications or hormonal birth control. They can provide personalized guidance based on your specific situation and medical history.'
        },
        {
          question: 'Are there any side effects I should be aware of?',
          answer: 'Our products are generally well-tolerated, but everyone\'s body is different. Start with smaller amounts to see how you respond. If you experience any unusual symptoms, discontinue use and consult your healthcare provider. Pregnant or nursing women should always consult their doctor first.'
        },
        {
          question: 'Will these products interfere with fertility treatments?',
          answer: 'If you\'re undergoing fertility treatments, please discuss any supplements or herbal products with your reproductive endocrinologist. They can advise you on what\'s safe and beneficial during your specific treatment protocol.'
        }
      ]
    },
    {
      title: 'Purchasing & Returns',
      icon: ShoppingCart,
      color: 'bg-primary/10 text-primary',
      faqs: [
        {
          question: 'Do I have to buy everything to see benefits?',
          answer: 'Not at all! Each product is designed to stand alone while also complementing the others. Many women start with just the herbal tea or journal and add other elements over time. Choose what feels right for your current needs and budget.'
        },
        {
          question: 'What is your return policy?',
          answer: 'We offer a 30-day satisfaction guarantee on all products. If you\'re not completely satisfied, simply contact us for a full refund—no questions asked. We want you to feel confident in your investment in your health and wellness.'
        },
        {
          question: 'Do you offer international shipping?',
          answer: 'Currently, we ship within the United States and Canada. We\'re working on expanding our shipping options to serve our international community. Sign up for our newsletter to be notified when we begin shipping to your area.'
        },
        {
          question: 'Are there payment plan options available?',
          answer: 'Yes! We understand that investing in your health should be accessible. We offer payment plans for our Complete Wellness Bundle, allowing you to spread the cost over several months while still receiving all the benefits immediately.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="hero-title mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about natural PCOS healing and our wellness products. 
            Your journey matters to us, and we're here to support you every step of the way.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="card-soft">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 ${category.color} rounded-lg`}>
                    <category.icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-semibold">{category.title}</h2>
                </div>
              </div>
              
              <Accordion type="single" collapsible>
                {category.faqs.map((faq, faqIndex) => (
                  <AccordionItem 
                    key={faqIndex} 
                    value={`${categoryIndex}-${faqIndex}`}
                    className="border-border/50"
                  >
                    <AccordionTrigger className="text-left hover:text-primary smooth-transition">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          ))}
        </div>

        {/* Additional Support */}
        <section className="mt-16">
          <Card className="card-soft bg-gradient-to-r from-primary/5 to-secondary/5 text-center">
            <div className="mb-4 flex justify-center">
              <div className="p-3 bg-primary/10 rounded-full">
                <HelpCircle className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're here to support you on your wellness journey. If you can't find the answer you're looking for, 
              our caring team is ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-botanical">
                Contact Our Support Team
              </a>
              <a href="/natural-healing" className="btn-secondary-soft">
                Learn More About Natural Healing
              </a>
            </div>
          </Card>
        </section>

        {/* Expert Note */}
        <section className="mt-12">
          <Card className="card-soft border-l-4 border-l-primary">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-full flex-shrink-0">
                <Leaf className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Important Reminder</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  While our products and information are designed to support your wellness journey, 
                  they are not intended to diagnose, treat, cure, or prevent any disease. 
                  Always consult with your healthcare provider before making significant changes to your health routine, 
                  especially if you have existing medical conditions or are taking medications.
                </p>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default FAQs;