import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, Users, Award, Download, CheckCircle, Play } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

const CourseDetail = () => {
  const { courseId } = useParams();
  
  const courseData = {
    'digital-marketing-fundamentals': {
      title: 'Digital Marketing Fundamentals',
      duration: '6 Weeks',
      price: '₹18,000',
      description: 'Master the essential skills of digital marketing with our comprehensive foundational course. Perfect for beginners and professionals looking to build a strong foundation in digital marketing.',
      modules: [
        {
          title: 'Intro to Digital Marketing & Strategy',
          description: 'Understanding the digital landscape, customer journey, and marketing funnel basics',
          duration: '3 hours'
        },
        {
          title: 'SEO & Keyword Research',
          description: 'On-page and off-page SEO, keyword research tools, and content optimization',
          duration: '4 hours'
        },
        {
          title: 'Google Ads (Search, Display, Video)',
          description: 'Complete Google Ads setup, campaign creation, and optimization strategies',
          duration: '5 hours'
        },
        {
          title: 'Social Media Marketing',
          description: 'Facebook, Instagram, LinkedIn marketing strategies and content planning',
          duration: '4 hours'
        },
        {
          title: 'Email Marketing & Automation Basics',
          description: 'Email campaign creation, automation workflows, and list building',
          duration: '3 hours'
        },
        {
          title: 'Analytics & Reporting',
          description: 'Google Analytics setup, data interpretation, and performance reporting',
          duration: '3 hours'
        }
      ],
      features: [
        'Live interactive sessions',
        'Hands-on projects',
        'Industry certification',
        'Job placement assistance',
        'Lifetime access to recordings',
        '24/7 doubt resolution'
      ]
    },
    'advanced-digital-marketing-ai': {
      title: 'Advanced Digital Marketing + AI',
      duration: '8 Weeks',
      price: '₹24,000',
      description: 'Take your digital marketing skills to the next level with AI-powered tools and advanced strategies. Perfect for professionals looking to stay ahead in the rapidly evolving digital landscape.',
      modules: [
        {
          title: 'Advanced SEO & Backlinking',
          description: 'Technical SEO, link building strategies, and advanced optimization techniques',
          duration: '4 hours'
        },
        {
          title: 'Performance Marketing & Scaling Ads',
          description: 'Advanced paid advertising strategies, budget optimization, and scaling techniques',
          duration: '5 hours'
        },
        {
          title: 'Funnels & Retargeting',
          description: 'Sales funnel creation, conversion optimization, and retargeting campaigns',
          duration: '4 hours'
        },
        {
          title: 'Content Marketing + AI Tools (ChatGPT, Jasper)',
          description: 'AI-powered content creation, automation tools, and content strategy',
          duration: '5 hours'
        },
        {
          title: 'Automation with Zapier & Email Sequences',
          description: 'Marketing automation, workflow creation, and advanced email marketing',
          duration: '4 hours'
        },
        {
          title: 'AI-Powered Analytics & CRO',
          description: 'Advanced analytics, conversion rate optimization, and AI-driven insights',
          duration: '4 hours'
        },
        {
          title: 'Capstone Project: Live Campaign',
          description: 'Real-world project implementation and campaign execution',
          duration: '6 hours'
        }
      ],
      features: [
        'AI tool mastery',
        'Advanced automation techniques',
        'Live campaign management',
        'Industry mentor guidance',
        'Advanced certifications',
        'Premium job placement support'
      ]
    }
  };

  const course = courseData[courseId as keyof typeof courseData];

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Course Not Found</h1>
          <Link to="/courses">
            <Button className="btn-primary">Back to Courses</Button>
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: course.title }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={breadcrumbItems} />
        
        <Link to="/courses" className="inline-flex items-center text-primary hover:text-primary-dark transition-smooth mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Courses
        </Link>

        {/* Course Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h1 className="hero-text text-foreground mb-4">{course.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{course.description}</p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-semibold">{course.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-semibold">Small Batch Size</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="font-semibold">Certified Program</span>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {course.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bento-card sticky top-24">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary mb-2">{course.price}</div>
                <div className="text-muted-foreground">+ GST</div>
              </div>
              
              <div className="space-y-4 mb-6">
                <Button className="btn-primary w-full text-lg py-3">
                  Enroll Now
                </Button>
                <Button variant="outline" className="btn-secondary w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download Syllabus PDF
                </Button>
                <Button variant="outline" className="w-full">
                  <Play className="h-4 w-4 mr-2" />
                  Free Demo Class
                </Button>
              </div>
              
              <div className="text-sm text-muted-foreground space-y-2">
                <p>✓ Lifetime access to recordings</p>
                <p>✓ Certificate upon completion</p>
                <p>✓ Job placement assistance</p>
                <p>✓ 24/7 doubt resolution</p>
              </div>
            </div>
          </div>
        </div>

        {/* Course Modules */}
        <div className="mb-12">
          <h2 className="section-title text-foreground mb-8">Course Curriculum</h2>
          <div className="space-y-4">
            {course.modules.map((module, index) => (
              <div key={index} className="course-module">
                <div className="bg-primary/10 p-3 rounded-lg min-w-12 h-12 flex items-center justify-center">
                  <span className="font-bold text-primary">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{module.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{module.description}</p>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm text-primary font-medium">{module.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bento-card max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-muted-foreground mb-6">
              Join thousands of students who have transformed their careers with our comprehensive training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary text-lg px-8 py-4">
                Enroll Now
              </Button>
              <Button size="lg" variant="outline" className="btn-secondary text-lg px-8 py-4">
                <Download className="h-5 w-5 mr-2" />
                Download Syllabus PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border p-4 md:hidden z-50">
        <div className="flex space-x-4">
          <Button className="btn-primary flex-1">
            Enroll Now - {course.price}
          </Button>
          <Button variant="outline" size="sm" className="px-4">
            <Play className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;