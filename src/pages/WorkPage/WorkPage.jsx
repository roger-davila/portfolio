import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projectsData from '../../projects.json';

export default function WorkPage() {
  let projects = projectsData.map((project, idx) => <ProjectCard key={idx} project={project} />);
  return (
    <main className='WorkPage main-container'>
      <h1>Work</h1>
      <section>
        {projects}
      </section>
    </main>
  );
}