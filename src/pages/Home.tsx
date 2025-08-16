import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Clock, TrendingUp } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Users,
      title: 'Live Interactive Classes',
      description: 'Engage with instructors and peers in real-time learning sessions'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Choose from weekend or weekday batches that fit your lifestyle'
    },
    {
      icon: Award,
      title: 'Industry Certifications',
      description: 'Get certified by leading industry experts and organizations'
    },
    {
      icon: TrendingUp,
      title: 'AI-Powered Training',
      description: 'Learn the latest AI tools and automation techniques'
    }
  ];

  return (
    <>
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-foreground mb-4">
              Why Choose Skills.do?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're committed to providing the best digital marketing education with hands-on experience and industry insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bento-card text-center group">
                  <div className="bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-foreground mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of students who have already advanced their careers with our comprehensive digital marketing programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses">
              <Button size="lg" className="btn-primary text-lg px-8 py-4">
                View Our Courses
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="btn-secondary text-lg px-8 py-4">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;