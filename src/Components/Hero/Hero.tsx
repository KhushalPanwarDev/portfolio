import './Hero.scss'
const Hero = () => {
  const baseClass = "hero-container";
  return (
    <div className={baseClass}>
      <h1 className={`${baseClass}_heading`}>Khushal Panwar</h1>
      <span className={`${baseClass}_designation`}>
        Frontend Developer
      </span>
    </div>
  );
};

export default Hero;
