import './HeroName.css';
export default function HeroName() {
  return (
    <header className="HeroName main-container">
      <section className='main-content'>
        <h1 className='main-text'>Hello, I'm</h1>
        <h1 className='main-text accent'>Roger Davila</h1>
        <h1 className='main-text'>Software</h1>
        <h1 className='main-text'>Engineer</h1>
      </section>
      <section className='sub-content'>
        <h2 className='slogan'>I love to build simple and fun applications on the web.</h2>
      </section>
    </header>
  );
}