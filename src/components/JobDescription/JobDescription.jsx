import './JobDescription.css';

export default function JobDescription({ job }) {
  return (
    <article className='JobDescription'>
      <section className='job-info'>
        <p className='job-company'>{job.company}</p>
        <p className='job-title'>{job.jobTitle}</p>
      </section>
      <p className='job-duration'>{job.dateStarted} - {job.dateEnded}</p>
      <ul className='job-description'>
        {job.jobDescription.map((description) => <li>{description}</li>)}
      </ul>
    </article>
  );
}