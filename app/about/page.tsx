import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';

export default function AboutPage() {
  return (
    <div className="about-page min-h-screen bg-[#0f0f0f] text-white">
      <Navbar />
      <main>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
