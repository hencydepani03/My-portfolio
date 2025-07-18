
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Python for Beginners",
      issuer: "Udemy",
      date: "2023",
      description: "Comprehensive course covering Python fundamentals, data structures, and basic programming concepts.",
      skills: ["Python", "Programming Fundamentals", "Data Structures"]
    },
    {
      title: "HTML & CSS Fundamentals",
      issuer: "freeCodeCamp",
      date: "2023",
      description: "Complete web development foundation course covering HTML5, CSS3, and responsive design principles.",
      skills: ["HTML5", "CSS3", "Responsive Design"]
    },
    {
      title: "R for Data Science",
      issuer: "DataCamp",
      date: "2023",
      description: "Statistical computing and data analysis using R programming language.",
      skills: ["R Programming", "Data Analysis", "Statistics"]
    },
    {
      title: "Advanced Excel",
      issuer: "Microsoft",
      date: "2022",
      description: "Advanced spreadsheet techniques, data analysis, and business intelligence with Excel.",
      skills: ["Excel", "Data Analysis", "Business Intelligence"]
    },
    {
      title: "Data Visualization with Plotly",
      issuer: "Plotly",
      date: "2023",
      description: "Interactive data visualization and dashboard creation using Plotly library.",
      skills: ["Plotly", "Data Visualization", "Python"]
    },
    {
      title: "JavaScript ES6+",
      issuer: "Udemy",
      date: "2023",
      description: "Modern JavaScript programming including ES6+ features and advanced concepts.",
      skills: ["JavaScript", "ES6+", "Modern Web Development"]
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Continuous learning through various online platforms and certification programs 
            to stay updated with the latest technologies and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:scale-105 transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar size={16} />
                  <span>{cert.date}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                {cert.title}
              </h3>

              <p className="text-primary font-semibold mb-4">{cert.issuer}</p>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {cert.description}
              </p>

              {/* Skills Tags */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-foreground rounded-full text-xs border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Certificate Button */}
            </div>
          ))}
        </div>

        {/* Languages & Hobbies Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-12">
          {/* Languages */}
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
              <div className="bg-gradient-to-r from-green-500 to-blue-600 p-2 rounded-lg">
                <span className="text-white text-xl">🌐</span>
              </div>
              Languages
            </h3>
            <div className="space-y-4">
              {[
                { lang: "English", level: "Proficient" },
                { lang: "Hindi", level: "Native" },
                { lang: "Gujarati", level: "Native" }
              ].map((language, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-foreground font-medium">{language.lang}</span>
                  <span className="text-primary font-semibold">{language.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies */}
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-2 rounded-lg">
                <span className="text-white text-xl">🎨</span>
              </div>
              Hobbies & Interests
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { hobby: "UI/UX Design", icon: "🎨" },
                { hobby: "Drawing", icon: "✏️" },
                { hobby: "Technology", icon: "💻" },
                { hobby: "Learning", icon: "📚" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors duration-300">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-foreground font-medium">{item.hobby}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
