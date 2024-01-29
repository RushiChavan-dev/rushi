import React from "react";
import "./index.css";
import "../../app.css";
import { images } from "../../constant";
import { motion } from "framer-motion";
// import { SocialMedia } from "../../components";
import AppWrap from "../../Higher_order_component/AppWapper";
const Abouts = [
  {
    title: "Who Am I?",
    description:
      "Specialized Android and React Native developer with five years of hands-on experience, blending technical expertise with a passion for research and architecture. Proficient in crafting seamless user experiences and optimizing backend systems, I thrive on solving complex challenges and contributing innovative ideas. Effective communication, proactive problem-solving, and a commitment to continuous improvement define my professional approach. As a team player, I bring a positive attitude and align my skills with the values of the companies I engage with. I am not just a developer; I am a dynamic professional ready to drive success in your innovative projects.",
    imgURL: images.about04,
  },
  {
    title: "What Are My Achievements?",
    description:
      "In the past year, I achieved a significant milestone by developing a Web3 E-commerce Application from scratch on Cardano Blockchain, integrating backend, frontend, and web3 wallet, all within an impressive timeframe of just 4 days. This accomplishment not only secured 1st place in academics but also demonstrated my ability to excel in rapid development. Additionally, I swiftly resolved a critical bug in a challenging Android project within 24 hours, contributing to a $3 million funding success. I played a key role in developing the UK's most secure HR Management app, authored a logistics-focused white paper on Algorand, and contributed to India's NPCI SDK for a secure payment app. Notable optimizations include a QR code scanner processing 80% faster and PDF rendering 60% faster, showcasing my versatility in diverse tech projects, from accelerated development to impactful optimizations.",
    imgURL: images.about01,
  },
  // {
  //   title: "Open Source Developer",
  //   description:
  //     "Contributing to Open Source Project is feel like actually contributing to the community. This help me to Improve Coding Skills, Gain Experience working with real software, and to develop a team work skill.",
  //   imgURL: images.about02,
  // },
  {
    title: "How Do I Solve Problems?",
    description:
      "In software development, my problem-solving approach is pragmatic and systematic. I start by breaking down the problem and conducting a codebase analysis. I plan with a focus on algorithms, data structures, and architecture, implementing clean and efficient code. Rigorous testing, debugging, and profiling ensure optimal performance. Collaboration and adaptability are key, with code reviews enhancing quality. I prioritize continuous learning to stay updated on technologies. Effective communication and documentation support transparency. From deployment to maintenance, my commitment ensures sustained excellence throughout the software's lifecycle.",
    imgURL: images.about03,
  },
  {
    title: "What's Next on My Map?",
    description:
      "Rooted in a commitment to innovation and leadership, I aim to ascend to pivotal roles, influencing teams toward cutting-edge solutions in Android and React Native development. Fostering collaboration and excellence, I'll drive projects that redefine success in the software corporate world. Committed to continuous learning, I'll stay at the forefront with relevant certifications. In five years, I envision a leadership role, driving transformative projects, mentoring, and shaping industry direction. My plans are intertwined with propelling the software corporate world forward through visionary leadership and technological excellence in the mobile development space.",
    imgURL: images.about04,
  },
];
function About() {
  return (
    <motion.div
      whileInView={{ y: [150, 0], opacity: [0, 1] }}
      transition={{ duration: 1.5 }}
      className="app__about app__container About"
      id="about"
    >
      <h2 className="head-text app__about-heading">
        I know that <span>Good Design</span>
        <br /> means <span>Good Bussiness</span>
      </h2>

      <div className="app__profiles">
        {Abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgURL} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p
              className="p-text"
              style={{
                marginTop: 10,
                textAlign: "justify",
                textJustify: "inter-word",
              }}
            >
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default AppWrap(About, "about");
