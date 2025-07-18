
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Information and Communication Technology",
      institution: "Marwadi University",
      location: "Rajkot, Gujarat",
      period: "2022 - 2026",
      description: "Specialized in software development, data structures, algorithms, and emerging technologies.",
      status: "current"
    },
    {
      degree: "Higher Secondary Certificate (H.S.C)",
      institution: "Utkarsh School",
      location: "Gujarat",
      period: "2020 - 2022",
      description: "Science stream with focus on Mathematics and Computer Science.",
      status: "completed"
    },
    {
      degree: "Secondary School Certificate (S.S.C)",
      institution: "Innovative School",
      location: "Gujarat",
      period: "2019 - 2020",
      description: "Strong foundation in core subjects with excellent academic performance.",
      status: "completed"
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 rounded-full hidden lg:block"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 w-full">
                  <div className={`bg-gradient-to-br from-blue-500/10 to-purple-600/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:scale-105 transition-all duration-300 animate-fade-in ${
                    index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
                  }`} style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className={`flex items-center gap-4 mb-4 ${
                      index % 2 === 0 ? 'justify-start' : 'lg:justify-end'
                    }`}>
                      <div className={`bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full ${
                        edu.status === 'current' ? 'animate-pulse' : ''
                      }`}>
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      {edu.status === 'current' && (
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                          Current
                        </span>
                      )}
                    </div>

                    <h3 className={`text-xl lg:text-2xl font-bold mb-2 text-foreground ${
                      index % 2 === 0 ? 'text-left' : 'lg:text-right'
                    }`}>
                      {edu.degree}
                    </h3>

                    <div className={`flex flex-col sm:flex-row gap-4 mb-4 text-muted-foreground ${
                      index % 2 === 0 ? 'justify-start' : 'lg:justify-end'
                    }`}>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{edu.institution}, {edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    <p className={`text-muted-foreground leading-relaxed ${
                      index % 2 === 0 ? 'text-left' : 'lg:text-right'
                    }`}>
                      {edu.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full border-4 border-background shadow-lg relative z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full animate-ping opacity-30"></div>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
