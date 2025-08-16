import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Clock, Users, Award, TrendingUp, Calendar, Target } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

const Courses = () => {
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Courses' }
  ];

  const courses = [
    {
      id: 'digital-marketing-fundamentals',
      title: 'Digital Marketing Fundamentals',
      duration: '6 Weeks',
      price: '₹18,000',
      highlights: [
        'SEO & Content Marketing Basics',
        'Google Ads Fundamentals',
        'Social Media Marketing',
        'Email Marketing Automation'
      ],
      description: 'Perfect for beginners looking to start their digital marketing journey',
      icon: Target
    },
    {
      id: 'advanced-digital-marketing-ai',
      title: 'Advanced Digital Marketing + AI',
      duration: '8 Weeks',
      price: '₹24,000',
      highlights: [
        'AI-Powered Marketing Tools',
        'Advanced SEO & Backlinking',
        'Performance Marketing & Scaling',
        'Marketing Automation & Funnels'
      ],
      description: 'For professionals ready to master AI-powered marketing strategies',
      icon: TrendingUp
    }
  ];

  const stats = [
    { number: '500+', label: 'Students Trained', icon: Users },
    { number: '85%', label: 'Placement Rate', icon: Award },
    { number: '100%', label: 'Industry Certified', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  const scheduleInfo = [
    { type: 'Weekday Batches', time: 'Monday to Friday, 7:00 PM - 9:00 PM' },
    { type: 'Weekend Batches', time: 'Saturday & Sunday, 10:00 AM - 1:00 PM' },
    { type: 'Duration', time: '6-8 weeks intensive training' },
    { type: 'Format', time: 'Live online classes with recordings' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={breadcrumbItems} />
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="hero-text text-foreground mb-6">
            Our Digital Marketing Courses
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our comprehensive programs designed to take your digital marketing skills to the next level
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Main Courses - Takes up most space */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course) => {
              const Icon = course.icon;
              return (
                <div key={course.id} className="bento-card h-fit">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {course.title}
                      </h3>
                      <p className="text-muted-foreground">{course.duration}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{course.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {course.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-2xl font-bold text-primary">{course.price}</span>
                      <span className="text-muted-foreground"> + GST</span>
                    </div>
                  </div>
                  
                  <Link to={`/courses/${course.id}`}>
                    <Button className="btn-primary w-full">
                      View Details
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Sidebar Blocks */}
          <div className="lg:col-span-4 space-y-8">
            {/* Stats Block */}
            <div className="bento-card">
              <h3 className="text-xl font-semibold text-foreground mb-6">Our Impact</h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="bg-primary/10 p-2 rounded-lg w-12 h-12 flex items-center justify-center mx-auto mb-2">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-primary">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Schedule Block */}
            <div className="bento-card">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                <Calendar className="h-5 w-5 inline-block mr-2" />
                Flexible Schedule
              </h3>
              <div className="space-y-4">
                {scheduleInfo.map((info, index) => (
                  <div key={index} className="border-l-2 border-primary/20 pl-4">
                    <div className="font-semibold text-foreground text-sm">{info.type}</div>
                    <div className="text-muted-foreground text-sm">{info.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bento-card max-w-4xl mx-auto">
            <h2 className="section-title text-foreground mb-4">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Join our next batch and transform your career with industry-leading digital marketing skills
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admission">
                <Button size="lg" className="btn-primary text-lg px-8 py-4">
                  Apply Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="btn-secondary text-lg px-8 py-4">
                  Talk to Counselor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;