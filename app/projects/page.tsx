import ProjectsArchive from '@/components/ProjectsArchive';
import Footer from '@/components/Footer';

export default function ProjectsPage() {
  return (
    <div className="page-shell">
      <main>
        <ProjectsArchive />
      </main>
      <Footer />
    </div>
  );
}
