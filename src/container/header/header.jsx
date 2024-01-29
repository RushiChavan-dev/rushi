import React from "react";
import "./index.css";
import "../../app.css";
import { motion } from "framer-motion";
import { images } from "../../constant/index";
import AppWrap from "../../Higher_order_component/AppWapper";
// import { NavigationDot, SocialMedia } from '../../components'

function Header() {
  return (
    <div id="home" className="app__header app__flex app__container">
      <motion.div
        className="app__header-info app__flex"
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <div className="app__badge app__flex">
          <div className="app__flex">
            {/* <span className="app__emoji">👋</span> */}

            <div className="p-text" style={{ marginLeft: "0px" }}>
              {/* <p className="p-text">Hello, I am</p> */}
              <h1 className="head-text">Hi / Salut / नमस्ते</h1>
            </div>
          </div>
        </div>
        <div className="tag-cmp" style={{ textAlign: "left" }}>
          <p className="tag-txt" style={{ textAlign: "left" }}>
            this is Rushi,
          </p>
          <p className="tag-txt">a technology lover.</p>
        </div>
      </motion.div>

      <motion.div
        className="app__header-img app__flex"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <motion.img
          whileInView={{ opacity: [0, 1] }}
          src={images.profile_pic}
          className="app__profile"
        ></motion.img>
        <motion.img
          whileInView={{ scale: [0, 1] }}
          className="app__circle"
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
        ></motion.img>
      </motion.div>

      <motion.div
        className="image-cmp app__flex"
        whileInView={{ opacity: [0, 1], scale: [0, 1] }}
        transition={{ duration: 1 }}
      >
        {[images.javascript, images.redux, images.sass].map((image, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={image} alt="profile_bg" className="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default AppWrap(Header, "home");
// export default Header;
