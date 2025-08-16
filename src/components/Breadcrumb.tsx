import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground py-4">
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          {index > 0 && <ChevronRight className="h-4 w-4" />}
          {item.href ? (
            <Link
              to={item.href}
              className="hover:text-primary transition-smooth"
            >
              {item.name}
            </Link>
          ) : (
            <span className="font-semibold text-foreground">{item.name}</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;