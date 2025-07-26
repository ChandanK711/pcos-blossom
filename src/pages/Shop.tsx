import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Coffee, 
  Book, 
  Heart, 
  Utensils, 
  Star, 
  ShoppingCart,
  Leaf,
  Sparkles
} from 'lucide-react';

const Shop = () => {
  const products = [
    {
      id: 1,
      name: 'Her Balance Herbal Tea for PCOS',
      icon: () => (
     <img 
      src="tea.jpg" 
    alt="Her Balance Logo" 
    className="w-10 h-10 rounded-full object-cover"
    />
  ),
      price: '300/-',
      badge: 'Bestseller',
      badgeColor: 'bg-primary text-primary-foreground',
      description: 'Sip your way to balance with our thoughtfully crafted herbal tea, designed to support hormone harmony and overall well-being.',
      features: [
        'Spearmint – may lower testosterone and reduce excess hair growth',
        'Cinnamon – supports insulin sensitivity and blood sugar balance',
        'Green Tea – promotes metabolism and healthy weight',
        'Ashwagandha – eases stress and supports emotional balance',
        'Shatavari – nourishes reproductive health and hormonal cycles',
        'Ginger & Fennel – help soothe bloating and aid digestion'
      ],
      note: '✨ Enjoy this gentle, caffeine-free tea twice daily as part of your self-care ritual.',
      color: 'bg-primary/10'
    },
    {
      id: 2,
      name: 'Mental Wellness Journal for PCOS',
      icon: () => (
     <img 
      src="journal.jpg" 
      alt="Her Balance Logo" 
      className="w-10 h-10 rounded-full object-cover"
      />
  ),
      price: '200/-',
      badge: 'New',
      badgeColor: 'bg-secondary text-secondary-foreground',
      description: 'Track mood, symptoms, cycle changes, energy, and emotional patterns with this beautifully designed wellness journal.',
      features: [
        'Daily reflection prompts for emotional clarity',
        'Symptom and mood tracking pages',
        'Cycle awareness and hormone tracking',
        'Habit tracker for wellness goals',
        'Gratitude and mindfulness exercises',
        'Goal-setting and progress monitoring'
      ],
      note: '✨ Designed for hormone-awareness and emotional clarity on your healing journey.',
      color: 'bg-secondary/20'
    },
    {
      id: 3,
      name: 'Yoga & Mudras for PCOS',
      icon: () => (
     <img 
      src="yoga-cover-page.jpg" 
      alt="Her Balance Logo" 
      className="w-10 h-10 rounded-full object-cover"
    />
  ),
      price: '100/-',
      badge: 'Popular',
      badgeColor: 'bg-accent text-accent-foreground',
      description: 'Guided yoga flows specifically designed for hormone support and stress relief, featuring gentle movements tailored for PCOS.',
      features: [
        'Hormone-balancing yoga sequences',
        'Daily mudras for energy flow',
        'Breathing exercises for stress relief',
        'Mindfulness and meditation practices',
        'Gentle movement for all fitness levels',
        'Video guides and written instructions'
      ],
      note: '✨ Gentle movement designed to support your unique needs and energy levels.',
      color: 'bg-accent/20'
    },
    {
      id: 4,
      name: 'PCOS-Friendly Recipe Book',
      icon: () => (
     <img 
      src="receipe.jpg" 
     alt="Her Balance Logo" 
     className="w-10 h-10 rounded-full object-cover"
     />
  ),
      price: '200/-',
      badge: 'Essential',
      badgeColor: 'bg-primary text-primary-foreground',
      description: 'Nourish your body with delicious, low-glycemic, anti-inflammatory meals that support hormone health and satisfy your taste buds.',
      features: [
        'Low-glycemic breakfast recipes',
        'Blood sugar balancing meals',
        'Anti-inflammatory ingredient focus',
        'Quick and easy preparation',
        'Nutritional information included',
        'Beautiful food photography'
      ],
      note: '✨ Vibrant, nourishing recipes that make healthy eating joyful and sustainable.',
      color: 'bg-primary/10'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="hero-title mb-6">Wellness Tools for Natural PCOS Healing</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Thoughtfully curated products to support your journey toward hormonal balance, 
            emotional wellness, and vibrant health.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {products.map((product) => (
            <Card key={product.id} className="card-soft group hover:scale-105 overflow-hidden">
              <div className="relative">
                <div className="sm:absolute sm:top-4 sm:right-4 z-10 mt-2 sm:mt-0 self-end sm:self-auto">
  <Badge className={`${product.badgeColor} rounded-full`}>
    {product.badge}
  </Badge>
</div>

                {/* Product Header */}
                <div className={`${product.color} p-6 -m-6 mb-6 rounded-t-2xl`}>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/50 rounded-full">
                      <product.icon />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-1">{product.name}</h2>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary">{product.price}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Content */}
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">This includes:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                          <Sparkles className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-sm text-muted-foreground italic">{product.note}</p>
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <Button className="btn-botanical flex-1 group">
                      <ShoppingCart className="h-4 w-4 mr-2 group-hover:scale-110 smooth-transition" />
                      Buy Now
                    </Button>
                    <Button variant="outline" className="px-6 hover:bg-muted">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bundle Offer */}
        <section className="mb-16">
          <Card className="card-soft bg-gradient-to-r from-primary/10 to-secondary/10">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-primary/20 rounded-full">
                  <Star className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Complete Wellness Bundle</h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Get all four wellness tools together
              </p>
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-3xl font-bold text-primary">750/-</span>
                <span className="text-xl text-muted-foreground line-through">800/-</span>
                <Badge className="bg-primary text-primary-foreground">Save 50/-</Badge>
              </div>
              <Button className="btn-botanical text-lg px-8 py-3">
                Get Complete Bundle
              </Button>
            </div>
          </Card>
        </section>

        {/* Trust Indicators */}
        <section className="botanical-gradient rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-card-foreground mb-6">
            Your Satisfaction, Our Promise
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="p-3 bg-card/20 rounded-full w-fit mx-auto mb-4">
                <Leaf className="h-6 w-6 text-card-foreground" />
              </div>
              <h4 className="font-semibold text-card-foreground mb-2">Natural & Pure</h4>
              <p className="text-sm text-card-foreground/80">
                All ingredients sourced with care and intention
              </p>
            </div>
            <div>
              <div className="p-3 bg-card/20 rounded-full w-fit mx-auto mb-4">
                <Heart className="h-6 w-6 text-card-foreground" />
              </div>
              <h4 className="font-semibold text-card-foreground mb-2">30-Day Guarantee</h4>
              <p className="text-sm text-card-foreground/80">
                Love it or return it, no questions asked
              </p>
            </div>
            <div>
              <div className="p-3 bg-card/20 rounded-full w-fit mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-card-foreground" />
              </div>
              <h4 className="font-semibold text-card-foreground mb-2">Expert Crafted</h4>
              <p className="text-sm text-card-foreground/80">
                Designed by wellness professionals
              </p>
            </div>
          </div>
          <p className="text-card-foreground/80 max-w-2xl mx-auto">
            Join thousands of women who have found their balance through our gentle, natural approach to PCOS wellness.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Shop;