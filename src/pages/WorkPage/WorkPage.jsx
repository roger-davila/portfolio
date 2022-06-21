import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projectsData from '../../projects.json';
import './WorkPage.css';

export default function WorkPage() {
  let projects = projectsData.map((project, idx) => <ProjectCard key={idx} project={project} />);
  return (
    <main className='WorkPage main-container'>
      <h1 className='main-header'>My Projects</h1>
      <section className='projects-section'>
        {projects}
      </section>
    </main>
  );
}