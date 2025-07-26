import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Mail, 
  MessageCircle, 
  Heart, 
  Send, 
  Instagram, 
  Twitter, 
  Facebook,
  Bell
} from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="hero-title mb-6">We're Here to Support You</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your healing journey matters to us. Whether you have questions, need guidance, 
            or want to share your story, we're here to listen and support you with care and compassion.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="card-soft">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                <MessageCircle className="h-6 w-6 text-primary" />
                Send Us a Message
              </h2>
              <p className="text-muted-foreground">
                We typically respond within 24 hours and treat every message with care and confidentiality.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input 
                    id="firstName" 
                    placeholder="Your first name"
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Your last name"
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your.email@example.com"
                  className="rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="How can we help you today?"
                  className="rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea 
                  id="message"
                  placeholder="Share your questions, concerns, or thoughts with us. We're here to listen and support you on your wellness journey."
                  className="min-h-[120px] rounded-lg resize-none"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="newsletter" />
                <Label htmlFor="newsletter" className="text-sm text-muted-foreground">
                  I'd like to receive gentle wellness tips and updates (you can unsubscribe anytime)
                </Label>
              </div>

              <Button className="btn-botanical w-full group">
                <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 smooth-transition" />
                Send Message
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                We respect your privacy and will never share your information. 
                Read our <a href="#" className="text-primary hover:underline">privacy policy</a>.
              </p>
            </form>
          </Card>

          {/* Contact Info & Newsletter */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="card-soft">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Get in Touch
                </h3>
                <p className="text-muted-foreground">
                  We're here to support your wellness journey every step of the way.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email Support</p>
                    <p className="text-sm text-muted-foreground">hello@herbalance.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-secondary/20 rounded-lg">
                    <MessageCircle className="h-4 w-4 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Response Time</p>
                    <p className="text-sm text-muted-foreground">Within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="font-medium mb-4">Connect With Our Community</h4>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="rounded-full">
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Newsletter Signup */}
            <Card className="card-soft bg-gradient-to-r from-primary/5 to-secondary/5">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Bell className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Join Our Wellness Community</h3>
                <p className="text-muted-foreground mb-6 text-sm">
                  Receive gentle wellness tips, new product updates, and inspiring stories 
                  from women on their PCOS healing journey. No spam, just support.
                </p>

                <div className="space-y-4">
                  <Input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="rounded-lg text-center"
                  />
                  <Button className="btn-botanical w-full">
                    Join Our Community
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Unsubscribe anytime. We respect your inbox and your journey.
                  </p>
                </div>
              </div>
            </Card>

            {/* Support Hours */}
            <Card className="card-soft">
              <h4 className="font-medium mb-3">Support Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span>9 AM - 6 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span>10 AM - 4 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Outside these hours? Send us a message and we'll get back to you soon!
              </p>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <section className="mt-16">
          <Card className="card-soft botanical-gradient text-center">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              Your Voice Matters
            </h3>
            <p className="text-card-foreground/80 max-w-2xl mx-auto mb-6 leading-relaxed">
              Whether you're just starting your PCOS journey or you've been on this path for years, 
              your experiences and questions help us create better resources for our entire community.
            </p>
            <p className="text-card-foreground/80 text-sm">
              Thank you for being part of the Her Balance family. Together, we're creating a world where 
              every woman feels empowered in her health and healing journey. 💕
            </p>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Contact;