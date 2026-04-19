import AboutBridgeSection from '@/components/AboutBridgeSection';
import BlogShowcaseSection from '@/components/BlogShowcaseSection';
import ContactFooterSection from '@/components/ContactFooterSection';
import Hero from '@/components/Hero';
import ProjectsShowcaseSection from '@/components/ProjectsShowcaseSection';
import TimelineSection from '@/components/TimelineSection';

export default function HomePage() {
  return (
    <main>
      <div className="page-shell">
        <Hero />
        <AboutBridgeSection />
      </div>
      <TimelineSection />
      <ProjectsShowcaseSection />
      <BlogShowcaseSection />
      <ContactFooterSection />
    </main>
  );
}
