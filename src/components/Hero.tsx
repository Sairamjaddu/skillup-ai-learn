import { Check, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const valueProps = [
    'Live Interactive Classes',
    'Weekend & Weekday Batches',
    'Industry Certifications',
    'AI & Automation Training'
  ];

  const trustIndicators = [
    { number: '500+', label: 'Students Trained' },
    { number: '85%', label: 'Placement Rate' },
    { number: '100%', label: 'Industry Certified' }
  ];

  return (
    <section 
      className="min-h-screen flex items-center relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/lovable-uploads/de80b452-1230-4946-b11a-07e0205cd6bc.png')",
      }}
    >
      {/* Hero Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <h1 className="hero-text text-white mb-6">
            Transform Your Career with 
            <span className="block text-primary-light">Live Digital Marketing Training</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Master AI-Powered Marketing in 6–8 Weeks with Industry Experts
          </p>
          
          {/* Value Props */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {valueProps.map((prop, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="bg-success/20 p-2 rounded-full">
                  <Check className="h-5 w-5 text-success" />
                </div>
                <span className="text-white font-medium">{prop}</span>
              </div>
            ))}
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-8 mb-10">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="text-center">
                <div className="stats-counter text-white">{indicator.number}</div>
                <div className="text-white/80 text-sm font-medium">{indicator.label}</div>
              </div>
            ))}
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="btn-primary text-lg px-8 py-4">
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline" className="btn-secondary text-lg px-8 py-4 bg-white/10 backdrop-blur-sm">
              <Play className="h-5 w-5 mr-2" />
              Book Free Demo Class
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;