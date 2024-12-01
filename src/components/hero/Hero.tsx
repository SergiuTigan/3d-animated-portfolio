import './hero.scss';
import Speech from './Speech';
import { motion } from 'motion/react';
import { Canvas } from '@react-three/fiber';
import Shape from './Shape';
import { Suspense } from 'react';

const awardVariants = {
  initial: {
    x: -100,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2
    }
  }
};
const followVariants = {
  initial: {
    y: -100,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 1
    }
  }
};

const Hero = () => {
  return (<motion.div className="hero">
      <motion.div className="hSection left">
        <motion.h1 initial={{ y: -100, opacity: 0 }}
                   animate={{ y: 0, opacity: 1 }}
                   transition={{ delay: 0.5, duration: 1 }}
                   className="hTitle">Hey There, <br/> <span>I'm Sergiu!</span></motion.h1>
        {/*Awards*/}
        <motion.div className="awards" variants={awardVariants} initial="initial" animate="animate">
          <motion.h2>Top Rated Frontend <span>Developer</span></motion.h2>
          <motion.p>Crafting seamless user experiences with clean, responsive, and modern design. With years of expertise in building
                    dynamic, high-performance web applications, I transform ideas into digital realities that captivate and inspire.
          </motion.p>
          <motion.div variants={awardVariants} className="awardList">
            <motion.div variants={awardVariants} className="award">
              <motion.img variants={awardVariants} src="/award1.png" alt=""/>
            </motion.div>
            <motion.div variants={awardVariants} className="award">
              <motion.img variants={awardVariants} src="/award2.png" alt=""/>
            </motion.div>
            <motion.div variants={awardVariants} className="award">
              <motion.img variants={awardVariants} src="/award3.png" alt=""/>
            </motion.div>
          </motion.div>
        </motion.div>
        {/*{SCROLL SVG}*/}
        <motion.div className="scroll">
          <motion.a animate={{ y: [0, 5], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }} href="/#services">
            {/*  scroll svg from google*/}
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
                stroke="white"
                strokeWidth="1"
              />
              <motion.path
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                d="M12 5V8"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.div className="hSection right">
        {/*FOLLOW*/}
        <motion.ul className="follow" variants={followVariants} initial="initial" animate="animate">
          <motion.li variants={followVariants}>
            <motion.a href="/" variants={followVariants}>
              <motion.img src="/instagram.png" alt=""/>
            </motion.a>
          </motion.li>
          <motion.li variants={followVariants}>
            <motion.a href="/" variants={followVariants}>
              <motion.img src="/facebook.png" alt=""/>
            </motion.a>
          </motion.li>
          <motion.li variants={followVariants}>
            <motion.a href="/" variants={followVariants}>
              <motion.img src="/youtube.png" alt=""/>
            </motion.a>
          </motion.li>
          <motion.div className="followTextContainer" variants={followVariants}>
            <motion.div className="followText">FOLLOW ME</motion.div>
          </motion.div>
        </motion.ul>
        {/*BUBBLE*/}
        <Speech/>
        {/*CERTIFICATE*/}
        <motion.div className="certificate" animate={{ opacity: [0, 1] }} transition={{ duration: 1 }}>
          <motion.img src="/certificate.png" alt=""/>
          LMA CERTIFIED <br/>
          PROFESSIONAL <br/>
          UI DESIGNER <br/>
        </motion.div>
        {/*CONTACT BUTTON*/}
        <motion.a href="/#contact" className="contactLink" animate={{ x: [200, 0], opacity: [0, 1] }} transition={{ duration: 2 }}>
          <motion.div className="contactButton" animate={{ rotate: [0, 360] }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}>
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink"/>
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Hire Now •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                  Contact Me •
                </textPath>
              </text>
            </svg>
            <motion.div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6"/>
                <polyline points="9 6 18 6 18 15"/>
              </svg>
            </motion.div>
          </motion.div>
        </motion.a>
      </motion.div>
      <motion.div className="bg">
        <Canvas>
          <Suspense fallback="loading...">
            <Shape></Shape>
          </Suspense>
        </Canvas>
        <motion.div className="hImg">
          <motion.img src="/hero.png" alt=""/>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default Hero;