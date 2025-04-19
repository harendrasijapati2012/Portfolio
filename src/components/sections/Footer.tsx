import { Github, Linkedin, Mail, Facebook } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/harendrasijapati2012',
      icon: Github
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/harendra-sijapati-66279b336/',
      icon: Linkedin
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=100079919984902',
      icon: Facebook
    },
    {
      name: 'Email',
    //   href: 'mailto:your.email@example.com',
      href: 'https://mail.google.com/',
      icon: Mail
    }
  ];

  const footerSections = [
    {
      title: 'Navigation',
      links: [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Resume', href: './Harendra-Sijapati-cv.pdf' },
        { name: 'Blog', href: './blog' },
      ]
    }
  ];

  return (
    <footer className="w-full border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Harendra Sijapati</h2>
            <p className="text-sm text-muted-foreground">
              Full Stack Developer building modern web applications with cutting-edge technologies.
            </p>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-sm font-medium">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  asChild
                >
                  <Link href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-4 w-4" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Harendra Sijapati All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;