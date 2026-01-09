import React from 'react';
import { GeneratedImage } from '../ui/GeneratedImage';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative z-[1] pt-[200px] pb-[150px] md:pt-[140px] md:pb-[80px] overflow-hidden bg-cover bg-center" style={{backgroundImage: "url(assets/img/shape/3.jpg)"}}>
      {/* Light banner overlay */}
      <div className="absolute top-0 left-0 w-full h-full -z-[2] bg-cover bg-center opacity-0 dark:opacity-100" style={{backgroundImage: "url(assets/img/shape/4.jpg)"}}></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* First Row: Banner Heading + Thumb */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 mb-[60px] md:mb-[30px]">
          <div className="xl:col-span-8">
            <div className="mb-[60px] -mr-[50px] md:mr-0 md:mb-[30px] overflow-hidden">
              <div>
                <div className="relative overflow-hidden">
                  <h2 className="text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[7.5rem] leading-[0.85] font-black uppercase text-white float-left text-left">
                    Designing
                  </h2>
                </div>
                <div className="relative overflow-hidden">
                  <h2
                    className="text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[7.5rem] leading-[0.85] font-black uppercase float-right text-right"
                    style={{
                      color: 'transparent',
                      WebkitTextStroke: '2px rgba(255, 255, 255, 0.25)'
                    }}
                  >
                    Creative
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-4 hidden xl:block">
            <div>
              <GeneratedImage
                prompt="Modern abstract 3D sculpture, professional photography, clean background"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Second Row: Content Grid + Card */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 clear-both">
          <div className="xl:col-span-7">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[30px]">
              <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Vyaris Agency</h4>
              <div className="space-y-6">
                <p className="text-zinc-400 text-base leading-relaxed">
                  Providing innovative solutions in branding, marketing, design, and advertising. These agencies often collaborate with clients to develop unique campaigns, visual identities, and digital strategies that resonate with target audiences. Services may include graphic design, content creation, social media management.
                </p>
                <a
                  className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors group cursor-pointer text-lg relative z-[1] mt-[10px]"
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span className="font-semibold uppercase tracking-wide text-sm">Know More</span>
                </a>
              </div>
            </div>
          </div>
          <div className="xl:col-span-4 xl:col-start-9">
            <div className="relative flex flex-col justify-center h-full bg-transparent border border-white/20 rounded-[20px] p-[50px] md:p-[30px] mt-[50px] xl:mt-0 hover:border-white/30 transition-all">
              <div>
                <div className="flex items-center justify-between text-left min-w-[180px] text-white">
                  <div>
                    <div className="flex items-center text-primary text-[80px] font-semibold leading-none mb-1">
                      <span className="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">2.5</span>
                      <div className="font-semibold text-[60px]">K</div>
                    </div>
                    <span className="block mt-[5px] text-sm font-medium text-white/70">Completed Projects</span>
                  </div>
                  <a
                    href="#portfolio"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-black hover:bg-white transition-colors"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
