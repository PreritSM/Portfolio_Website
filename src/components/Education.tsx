import portfolio from '../data/portfolio';
import { AcademicCapIcon } from './Icons';

const Education = () => {
  return (
    <section id="education">
      <div className="section-container">
        <h2 className="section-heading text-center">Education</h2>
        <p className="section-subheading text-center">
          My academic background and qualifications
        </p>

        <div className="max-w-3xl mx-auto space-y-6">
          {portfolio.education.map((edu, index) => (
            <div
              key={index}
              className="card group hover:scale-[1.01] transition-transform duration-300"
            >
              <div className="flex gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-primary-500/30 group-hover:to-purple-500/30 transition-colors">
                    <AcademicCapIcon className="w-7 h-7 text-primary-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                    <span className="text-sm text-primary-400 font-medium">{edu.period}</span>
                  </div>
                  <p className="text-dark-400 font-medium">{edu.institution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
