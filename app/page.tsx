import ContactFooterSection from '@/components/ContactFooterSection';
import Hero from '@/components/Hero';
import TimelineSection from '@/components/TimelineSection';
import WhatIBuildSection from '@/components/WhatIBuildSection';

export default function HomePage() {
  return (
    <>
      <main>
        <div className="page-shell">
          <Hero />
        </div>
        <TimelineSection />
        <WhatIBuildSection />
        <ContactFooterSection />
      </main>
    </>
  );
}
