import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Breadcrumb from '@/components/Breadcrumb';

const Blog = () => {
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Blog' }
  ];

  const blogPosts = [
    {
      slug: 'ai-powered-marketing-trends-2025',
      title: 'Top 10 AI-Powered Marketing Trends to Watch in 2025',
      excerpt: 'Discover the latest AI technologies that are revolutionizing digital marketing and how you can leverage them for your business growth.',
      category: 'AI Marketing',
      author: 'Sarah Johnson',
      date: '2025-01-15',
      readTime: '8 min read',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      slug: 'seo-algorithm-updates-guide',
      title: 'Google Algorithm Updates: A Complete SEO Guide for 2025',
      excerpt: 'Stay ahead of the curve with our comprehensive guide to the latest Google algorithm changes and their impact on your SEO strategy.',
      category: 'SEO',
      author: 'Mike Chen',
      date: '2025-01-12',
      readTime: '12 min read',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      slug: 'social-media-automation-tools',
      title: 'Best Social Media Automation Tools for Small Businesses',
      excerpt: 'Streamline your social media presence with these powerful automation tools that save time and boost engagement.',
      category: 'Social Media',
      author: 'Emily Rodriguez',
      date: '2025-01-10',
      readTime: '6 min read',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      slug: 'email-marketing-personalization',
      title: 'The Power of Personalization in Email Marketing',
      excerpt: 'Learn how to create highly personalized email campaigns that drive better engagement and conversions.',
      category: 'Email Marketing',
      author: 'David Kim',
      date: '2025-01-08',
      readTime: '10 min read',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      slug: 'content-marketing-strategy-2025',
      title: 'Building a Winning Content Marketing Strategy in 2025',
      excerpt: 'Master the art of content marketing with proven strategies that attract, engage, and convert your target audience.',
      category: 'Content Marketing',
      author: 'Lisa Wang',
      date: '2025-01-05',
      readTime: '9 min read',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      slug: 'ppc-campaign-optimization',
      title: 'Advanced PPC Campaign Optimization Techniques',
      excerpt: 'Take your paid advertising to the next level with these advanced optimization strategies and best practices.',
      category: 'PPC',
      author: 'Alex Thompson',
      date: '2025-01-03',
      readTime: '11 min read',
      image: '/api/placeholder/400/250',
      featured: false
    }
  ];

  const categories = ['All', 'AI Marketing', 'SEO', 'Social Media', 'Email Marketing', 'Content Marketing', 'PPC'];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={breadcrumbItems} />
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="hero-text text-foreground mb-6">
            Digital Marketing Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and insights in digital marketing
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === 'All' ? 'default' : 'outline'}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <div className="bento-card overflow-hidden lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="aspect-video lg:aspect-square bg-muted rounded-lg mb-6 lg:mb-0">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="lg:flex lg:flex-col lg:justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge className="bg-primary text-primary-foreground">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Featured
                  </Badge>
                  <Badge variant="outline">{featuredPost.category}</Badge>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <Link to={`/blog/${featuredPost.slug}`}>
                  <Button className="btn-primary">
                    Read Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="block group">
              <article className="bento-card h-full group-hover:elegant-shadow transition-smooth">
                <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                
                <div className="space-y-3">
                  <Badge variant="outline" className="text-xs">
                    {post.category}
                  </Badge>
                  
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                    <div className="flex items-center space-x-2">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16">
          <div className="bento-card text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest digital marketing insights and tips delivered to your inbox.
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

export default Blog;