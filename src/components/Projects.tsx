
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Real-Time Animal Species Detection",
      description: "Advanced computer vision project using YOLOv5 for real-time detection and classification of animal species with high accuracy.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      technologies: ["Python", "YOLOv5", "OpenCV", "Computer Vision", "Machine Learning"],
      features: [
        "Real-time detection with 95% accuracy",
        "Multi-species classification",
        "Live camera feed processing",
        "Custom trained models"
      ],
      links: {
        github: "https://github.com/hencydepani03",
        demo: "#"
      }
    },
    {
      title: "Cozy Corner Cafe Web Application",
      description: "Full-stack web application for a cafe management system with modern UI/UX and comprehensive admin features.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      technologies: ["ASP.NET Core", "C#", "SQL Server", "Bootstrap", "JavaScript"],
      features: [
        "Order management system",
        "Admin dashboard",
        "User authentication",
        "Responsive design"
      ],
      links: {
        github: "https://github.com/hencydepani03",
        demo: "#"
      }
    },
    {
      title: "Ignite Perfume E-Commerce Platform",
      description: "Modern e-commerce platform for perfume retail with advanced search, cart functionality, and secure payment integration.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Stripe API"],
      features: [
        "Advanced product filtering",
        "Secure payment gateway",
        "User reviews and ratings",
        "Admin inventory management"
      ],
      links: {
        github: "https://github.com/hencydepani03",
        demo: "#"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            machine learning, and modern web technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="flex-1 group">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-sm border border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors duration-300"
                      >
                        <Github className="w-6 h-6 text-white" />
                      </a>
                      <a
                        href={project.links.demo}
                        className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors duration-300"
                      >
                        <Eye className="w-6 h-6 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="flex-1">
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:scale-105 transition-transform duration-300">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-primary">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-muted-foreground">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-primary">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-foreground rounded-full text-sm border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300 font-medium"
                    >
                      <Github size={18} />
                      View Code
                    </a>
                    <a
                      href={project.links.demo}
                      className="flex items-center gap-2 bg-secondary/50 text-foreground px-6 py-3 rounded-lg hover:bg-secondary transition-all duration-300 font-medium hover:scale-105"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
