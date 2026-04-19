import ContactFooterSection from '@/components/ContactFooterSection';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import TimelineSection from '@/components/TimelineSection';

export default function HomePage() {
  return (
    <div className="page-shell">
      <Navbar />
      <main>
        <Hero />
        <TimelineSection />
      </main>
      <ContactFooterSection />
    </div>
  );
}
