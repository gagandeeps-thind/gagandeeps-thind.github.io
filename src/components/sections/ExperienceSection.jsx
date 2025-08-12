// src/components/sections/ExperienceSection.jsx
import React from 'react';
import Section from './Section.jsx';
import { experience } from '../../data/siteContent.js';

export default function ExperienceSection() {
  return (
    // no title -> no heading and no extra top gap (Section handles it)
    <Section id="experience" width="default">
      <ul className="space-y-6">
        {experience.map((job, idx) => {
          const company = job.company || '';
          const location = job.location || '';
          const duration =
            job.duration || (job.start && job.end ? `${job.start} — ${job.end}` : '');
          const points = job.points || job.highlights || [];
          const logo = job.logo;

          return (
            <li
              key={idx}
              className="rounded-2xl bg-white/5 backdrop-blur p-5 border border-white/10"
            >
              <div className="flex items-start gap-4">
                {logo && (
                  <img
                    src={logo}
                    alt={`${company} logo`}
                    className="w-12 h-12 rounded-md object-contain bg-white/10 p-1"
                    loading="lazy"
                  />
                )}
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    {/* company only — no job title */}
                    <h3 className="text-xl font-semibold">{company}</h3>
                    {(location || duration) && (
                      <span className="text-sm text-gray-400">
                        {[location, duration].filter(Boolean).join(' • ')}
                      </span>
                    )}
                  </div>

                  {points.length > 0 && (
                    <ul className="list-disc list-inside space-y-1 text-gray-200 mt-2">
                      {points.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
