import portfolio from '../data/portfolio';
import { LocationIcon, AcademicCapIcon, BriefcaseIcon } from './Icons';

const About = () => {
  return (
    <section id="about" className="bg-dark-900/30">
      <div className="section-container">
        <h2 className="section-heading text-center">{portfolio.about.headline}</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Left - Image/Visual */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square rounded-2xl bg-gradient-to-br from-primary-500/20 to-purple-500/20 p-1">
              <div className="absolute inset-0 bg-dark-800 rounded-2xl m-1" />
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center">
                    <span className="text-5xl font-bold text-white">{portfolio.name.charAt(0)}</span>
                  </div>
                  
                  <div className="space-y-3">
                    {portfolio.location && (
                      <div className="flex items-center justify-center gap-2 text-dark-300">
                        <LocationIcon className="w-4 h-4 text-primary-400" />
                        <span className="text-sm">{portfolio.location}</span>
                      </div>
                    )}
                    
                    {portfolio.education[0] && (
                      <div className="flex items-center justify-center gap-2 text-dark-300">
                        <AcademicCapIcon className="w-4 h-4 text-primary-400" />
                        <span className="text-sm">B.Tech AI ({portfolio.education[0].period})</span>
                      </div>
                    )}
                    
                    {portfolio.experience[0] && (
                      <div className="flex items-center justify-center gap-2 text-dark-300">
                        <BriefcaseIcon className="w-4 h-4 text-primary-400" />
                        <span className="text-sm">{portfolio.experience[0].role}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            {/* Professional Profile */}
            <div className="card">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center">
                  <span className="text-primary-400">👨‍💻</span>
                </span>
                Professional Profile
              </h3>
              <p className="text-dark-300 leading-relaxed">
                {portfolio.about.professionalProfile}
              </p>
            </div>

            {/* My Journey */}
            <div className="card">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <span className="text-purple-400">🚀</span>
                </span>
                My Journey
              </h3>
              <p className="text-dark-300 leading-relaxed">
                {portfolio.about.journey}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
