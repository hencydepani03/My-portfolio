
const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a passionate ICT Engineer with a strong foundation in full-stack development and emerging technologies. 
                Currently pursuing my B.Tech in Information and Communication Technology at Marwadi University, Rajkot, 
                I've developed expertise in the MERN stack and various programming languages.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My journey in technology began with a curiosity for problem-solving and has evolved into a passion for 
                creating innovative solutions. I enjoy working on projects that challenge me to learn new technologies 
                and apply them in creative ways.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new design concepts, drawing, or staying updated with 
                the latest trends in technology and development.
              </p>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Technologies Mastered</div>
              </div>
              
              <div className="bg-gradient-to-br from-pink-500/10 to-blue-600/10 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-sm text-muted-foreground">Years of Learning</div>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/10 to-blue-600/10 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-primary mb-2">8+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-blue-500/10 to-purple-600/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
              <h4 className="text-lg font-semibold mb-3 text-primary">Core Values</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-muted-foreground">Continuous Learning & Growth</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-muted-foreground">Innovation & Creativity</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-muted-foreground">Quality & Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
