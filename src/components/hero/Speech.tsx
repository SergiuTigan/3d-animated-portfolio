import './hero.scss';
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'motion/react';

const Speech = () => {
  return (
    <motion.div className="bubbleContainer" animate={{opacity:[0,1]}} transition={{duration: 1}}>
      <div className="bubble">
        <TypeAnimation sequence={["Hi, I\'m Sergiu.", 1000,
          'I\'m a Frontend Developer.', 1000,
          'I\'m a UI/UX Designer.', 1000,
          'I\'m a Freelancer.', 1000,
        'Contact me for your next project.', 1000]}
                       wrapper="span"
                       speed={40}
                       deletionSpeed={60}
                       style={{fontSize:'1rem', display: 'inline-block'}}
                       repeat={Infinity}/></div>
      <img src="/man.png" alt=""/>
    </motion.div>
  );
};

export default Speech;