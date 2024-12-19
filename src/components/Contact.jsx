import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import gmail from "../assets/gmail.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/git.png";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-tertiary p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me</h3>
        <div className='mt-12 flex flex-col gap-8 items-center'>
          <a href="https://github.com/wasifsomji" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className='w-20 h-20' />
          </a>
          <a href="https://www.linkedin.com/in/wasifsomji/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className='w-25 h-25' />
          </a>
          <a href="mailto:wasifsomji@gmail.com">
            <img src={gmail} alt="Gmail" className='w-16 h-16' />
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");