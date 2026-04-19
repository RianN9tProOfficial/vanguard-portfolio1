import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-shell">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
