import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Breadcrumb from '@/components/Breadcrumb';

const BlogPost = () => {
  const { slug } = useParams();
  
  // Mock blog post data - in a real app, this would come from an API
  const blogPost = {
    title: 'Top 10 AI-Powered Marketing Trends to Watch in 2025',
    category: 'AI Marketing',
    author: 'Sarah Johnson',
    date: '2025-01-15',
    readTime: '8 min read',
    image: '/api/placeholder/800/400',
    content: `
      <p>Artificial Intelligence is revolutionizing the digital marketing landscape at an unprecedented pace. As we move into 2025, businesses that leverage AI-powered marketing strategies will have a significant competitive advantage. In this comprehensive guide, we'll explore the top 10 AI marketing trends that are shaping the future of digital marketing.</p>
      
      <h2>1. Hyper-Personalization at Scale</h2>
      <p>AI enables marketers to create highly personalized experiences for millions of customers simultaneously. By analyzing vast amounts of customer data, AI algorithms can predict preferences, behaviors, and purchase intent with remarkable accuracy.</p>
      
      <h2>2. Conversational AI and Chatbots</h2>
      <p>Advanced chatbots powered by natural language processing are becoming indistinguishable from human customer service representatives. These AI assistants can handle complex queries, provide product recommendations, and guide customers through the entire purchase journey.</p>
      
      <h2>3. Predictive Analytics for Customer Behavior</h2>
      <p>Machine learning algorithms can now predict customer behavior with incredible precision, allowing marketers to anticipate needs and preferences before customers even express them.</p>
      
      <h2>4. AI-Generated Content Creation</h2>
      <p>From blog posts to social media content, AI tools are becoming sophisticated enough to create high-quality, engaging content that resonates with target audiences while maintaining brand voice and style.</p>
      
      <h2>5. Dynamic Pricing Optimization</h2>
      <p>AI algorithms continuously analyze market conditions, competitor pricing, and customer behavior to optimize pricing strategies in real-time, maximizing both revenue and customer satisfaction.</p>
      
      <h2>Conclusion</h2>
      <p>The future of digital marketing is undeniably intertwined with artificial intelligence. Businesses that embrace these AI-powered trends will be better positioned to create meaningful connections with their customers, drive engagement, and achieve sustainable growth in an increasingly competitive digital landscape.</p>
    `
  };

  const relatedPosts = [
    {
      slug: 'seo-algorithm-updates-guide',
      title: 'Google Algorithm Updates: A Complete SEO Guide for 2025',
      category: 'SEO',
      image: '/api/placeholder/300/200'
    },
    {
      slug: 'social-media-automation-tools',
      title: 'Best Social Media Automation Tools for Small Businesses',
      category: 'Social Media',
      image: '/api/placeholder/300/200'
    },
    {
      slug: 'email-marketing-personalization',
      title: 'The Power of Personalization in Email Marketing',
      category: 'Email Marketing',
      image: '/api/placeholder/300/200'
    }
  ];

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: blogPost.title }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={breadcrumbItems} />
        
        <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary-dark transition-smooth mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <article className="mb-16">
          <header className="mb-8">
            <Badge variant="outline" className="mb-4">
              {blogPost.category}
            </Badge>
            
            <h1 className="hero-text text-foreground mb-6">
              {blogPost.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(blogPost.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{blogPost.readTime}</span>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-8">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </article>

        {/* Author Bio */}
        <div className="bento-card mb-16">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">{blogPost.author}</h3>
              <p className="text-muted-foreground mb-4">
                Sarah is a digital marketing expert with over 8 years of experience in AI-powered marketing strategies. 
                She specializes in helping businesses leverage artificial intelligence to drive growth and engagement.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">Follow</Button>
                <Button variant="outline" size="sm">View Profile</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div>
          <h2 className="section-title text-foreground mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="block group">
                <article className="bento-card h-full group-hover:elegant-shadow transition-smooth">
                  <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                  </div>
                  <Badge variant="outline" className="text-xs mb-2">
                    {post.category}
                  </Badge>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-smooth line-clamp-2">
                    {post.title}
                  </h3>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16">
          <div className="bento-card text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Stay Informed
            </h2>
            <p className="text-muted-foreground mb-6">
              Get the latest digital marketing insights delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="btn-primary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;