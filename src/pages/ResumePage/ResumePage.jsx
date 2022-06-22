import jobs from '../../jobs.json';
import schools from '../../education.json';
import JobDescription from '../../components/JobDescription/JobDescription';
import './ResumePage.css';

export default function ResumePage() {
  let jobsList = jobs.map((job, idx) => <JobDescription key={idx} job={job} />)
  return (
    <main className='main-container'>
      <h1 className='main-header'>Resume</h1>
      <section className='job-list'>
        {jobsList}
      </section>
    </main>
  );
}