import { useEffect, useRef, useState } from 'react';
import portfolio from '../data/portfolio';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-heading text-center">Skills & Tools</h2>
        <p className="section-subheading text-center">
          Technologies and tools I work with
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="card">
            <h3 className="text-xl font-semibold text-white mb-6">Technical Skills</h3>
            <div className="space-y-5">
              {portfolio.skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-dark-200 font-medium">{skill.name}</span>
                    <span className="text-primary-400 text-sm">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-bar-fill"
                      style={{
                        width: isVisible ? `${skill.percentage}%` : '0%',
                        transitionDelay: `${index * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="card">
            <h3 className="text-xl font-semibold text-white mb-6">Tools & Platforms</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {portfolio.tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center gap-3 p-3 bg-dark-800/50 rounded-xl border border-dark-700 hover:border-primary-500/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/20 to-purple-500/20 flex items-center justify-center">
                    <span className="text-lg">⚡</span>
                  </div>
                  <span className="text-dark-200 text-sm font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
