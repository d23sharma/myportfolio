import React from 'react';
import AboutImg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="align-element grid md:grid-cols-2 items-center justify-center gap-16">
        <img src={AboutImg} className="h-60 w-full mt-5 md:h-96" />
        <article className="mt-8">
          <SectionTitle text="About me" />

          <p className="text-slate-700 leading-loose">
            Self-motivated and enthusiastic individual with 12+ years of experience in
            BPO (Business process outsourcing) industry, seeking an opportunity to
            extend my Front-End development skills and knowledge to serve the
            organization with full dedication and utilize my abilities in the IT industry
            that offers professional growth while being resourceful and innovative
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
