import { motion } from "framer-motion";
import { styles } from "../styles";
import Laptop from "./Laptop";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex justify-center items-center">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] w-full max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
        </div>
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-center">
            <h1 className={`${styles.heroHeadText} text-white mt-24`}>
              Hi, I'm <span className='text-secondary'>Wasif</span>
            </h1>
            <div>
              {/* <div className="loader"></div> */}
            </div>
          </div>
          <div className="flex flex-col w-full items-center justify-center">
            <p className={`${styles.heroSubText} text-white-100`}>
              Computer Engineering '26 @ McGill<br className='sm:block hidden' />
            </p>
          </div>
          <div>
            <Laptop />
          </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;