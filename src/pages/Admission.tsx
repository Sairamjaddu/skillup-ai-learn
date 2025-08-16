import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, ArrowRight, HelpCircle } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Admission = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    experience: '',
    message: ''
  });

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Admission' }
  ];

  const steps = [
    {
      number: 1,
      title: 'Choose Your Course',
      description: 'Select from our Digital Marketing Fundamentals (6 weeks) or Advanced Digital Marketing + AI (8 weeks) programs',
      icon: '📚'
    },
    {
      number: 2,
      title: 'Apply Online',
      description: 'Fill out our simple application form with your basic details and preferred course',
      icon: '📝'
    },
    {
      number: 3,
      title: 'Pay Admission Fee',
      description: 'Secure your spot with our safe and convenient online payment system',
      icon: '💳'
    },
    {
      number: 4,
      title: 'Start Learning',
      description: 'Get batch confirmation and access to learning materials to begin your journey',
      icon: '🚀'
    }
  ];

  const faqs = [
    {
      question: 'What are the prerequisites for admission?',
      answer: 'No prior experience is required for our Digital Marketing Fundamentals course. For the Advanced course, basic marketing knowledge is helpful but not mandatory. We welcome students from all backgrounds.'
    },
    {
      question: 'What is the admission fee structure?',
      answer: 'Digital Marketing Fundamentals: ₹18,000 + GST. Advanced Digital Marketing + AI: ₹24,000 + GST. We offer flexible payment options and early bird discounts.'
    },
    {
      question: 'Can I change my batch after admission?',
      answer: 'Yes, you can switch between weekday and weekend batches subject to availability. Please contact our support team at least 48 hours before your current batch starts.'
    },
    {
      question: 'What if I miss a class?',
      answer: 'All classes are recorded and available for lifetime access. You can also attend the same topic in a different batch within the same month at no extra cost.'
    },
    {
      question: 'Do you provide placement assistance?',
      answer: 'Yes, we provide comprehensive placement assistance including resume building, interview preparation, and direct connections with our hiring partners. Our placement rate is 85%.'
    },
    {
      question: 'Is there a refund policy?',
      answer: 'We offer a 7-day money-back guarantee if you\'re not satisfied with the course. Refund requests must be made within the first week of the course start date.'
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={breadcrumbItems} />
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="hero-text text-foreground mb-6">
            Admission Process
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our community of learners and start your journey towards becoming a digital marketing expert
          </p>
        </div>

        {/* Admission Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={step.number} className="bento-card text-center relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 z-0">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
              )}
              
              <div className="text-4xl mb-4">{step.icon}</div>
              <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Application Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="section-title text-foreground mb-6">Apply Now</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="course">Preferred Course *</Label>
                <Select onValueChange={(value) => handleInputChange('course', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fundamentals">Digital Marketing Fundamentals (6 weeks)</SelectItem>
                    <SelectItem value="advanced">Advanced Digital Marketing + AI (8 weeks)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="experience">Experience Level</Label>
                <Select onValueChange={(value) => handleInputChange('experience', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Complete Beginner</SelectItem>
                    <SelectItem value="some">Some Experience</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Additional Message (Optional)</Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="mt-1"
                  placeholder="Tell us about your goals and expectations..."
                />
              </div>

              <Button type="submit" className="btn-primary w-full text-lg py-3">
                Submit Application
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            {/* Benefits */}
            <div className="bento-card">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                What You Get After Admission
              </h3>
              <div className="space-y-3">
                {[
                  'Access to live interactive classes',
                  'Lifetime recording access',
                  'Industry-standard certifications',
                  'Job placement assistance',
                  'Dedicated mentor support',
                  'Hands-on project experience',
                  'Community access',
                  '24/7 doubt resolution'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bento-card">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Need Help with Admission?
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <p>📧 admissions@skills.do</p>
                <p>📞 +91 98765 43210</p>
                <p>💬 WhatsApp: +91 98765 43210</p>
                <p>🕒 Monday - Friday: 9 AM - 7 PM</p>
              </div>
              <Button variant="outline" className="btn-secondary w-full mt-4">
                Chat with Counselor
              </Button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-foreground text-center mb-8">
            <HelpCircle className="h-8 w-8 inline-block mr-3" />
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bento-card">
                <AccordionTrigger className="text-left font-semibold text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Admission;