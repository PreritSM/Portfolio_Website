import portfolio from '../data/portfolio';
import { BriefcaseIcon } from './Icons';

const Experience = () => {
  return (
    <section id="experience" className="bg-dark-900/30">
      <div className="section-container">
        <h2 className="section-heading text-center">Experience</h2>
        <p className="section-subheading text-center">
          My professional journey and work experience
        </p>

        <div className="max-w-3xl mx-auto space-y-6">
          {portfolio.experience.map((exp, index) => (
            <div
              key={index}
              className="card group hover:scale-[1.01] transition-transform duration-300"
            >
              <div className="flex gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-primary-500/30 group-hover:to-purple-500/30 transition-colors">
                    <BriefcaseIcon className="w-7 h-7 text-primary-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                    <span className="text-sm text-primary-400 font-medium">{exp.period}</span>
                  </div>
                  
                  <p className="text-dark-400 font-medium mb-3">{exp.company}</p>
                  <p className="text-dark-300 leading-relaxed mb-4">{exp.summary}</p>

                  {/* Bullets */}
                  {exp.bullets && exp.bullets.length > 0 && (
                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2 text-dark-400 text-sm">
                          <span className="text-primary-400 mt-1">•</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* More Coming Soon */}
          <div className="text-center py-8">
            <p className="text-dark-500 italic">More experiences coming soon...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
