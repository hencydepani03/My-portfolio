
import { Github, Linkedin, Download, ArrowDown } from 'lucide-react';

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/HENCY%20DEPANI%20RESUME.pdf';
    link.download = 'HENCY_DEPANI_RESUME.pdf';
    link.click();
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 animate-gradient"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-background/50 to-background"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-500/30 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-purple-500/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-20 w-8 h-8 bg-pink-500/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-in-left">
            <div className="mb-6">
              <p className="text-primary font-medium text-lg mb-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Hi, I'm
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Hency Depani
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                ICT Engineer | MERN Stack Developer
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl animate-fade-in" style={{ animationDelay: '0.8s' }}>
                Passionate about creating innovative solutions with modern technologies. 
                Specialized in full-stack development with expertise in React, Node.js, and machine learning.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '1s' }}>
              <button
                onClick={handleDownloadResume}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 font-medium"
              >
                <Download size={20} />
                Download Resume
              </button>
              <div className="flex gap-4">
                <a
                  href="https://github.com/hencydepani03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary/50 text-foreground px-6 py-3 rounded-lg hover:bg-secondary transition-all duration-300 flex items-center gap-2 font-medium hover:scale-105"
                >
                  <Github size={20} />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/hencydepani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary/50 text-foreground px-6 py-3 rounded-lg hover:bg-secondary transition-all duration-300 flex items-center gap-2 font-medium hover:scale-105"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 max-w-lg animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse-slow"></div>
              <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-8 rounded-full backdrop-blur-sm border border-white/10">
                <img
                  src="/hency.jpg"
                  alt="Hency Depani"
                  className="w-full h-full rounded-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
