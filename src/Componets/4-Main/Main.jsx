import React, { useState } from "react";
import "./Main.css";

// eslint-disable-next-line no-unused-vars
import { AnimatePresence , motion } from "motion/react";
// @ts-ignore
import { myProjects } from "./myProjects";


export default function Main() {
  const [currentActive, setcurrentActive] = useState("all");
  const [Array, setArray] = useState(myProjects);

const handleClick = (buttonCategory) => {
  setcurrentActive(buttonCategory);

  const newArr = myProjects.filter((item) => {
    return item.category.includes(buttonCategory);
  });
  setArray(newArr);
};

  return (
    <section className="main">
      <div className="left-main">
        <div className="btns">
          <button
            onClick={() => {
              setcurrentActive("all");
              setArray(myProjects);
            }}
            className={currentActive === "all" ? "active" : null}
          >
            All Projects
          </button>
          <button
            onClick={() => {
              handleClick("css")
            }}
            className={currentActive === "css" ? "active" : null}
          >
            HTML && CSS
          </button>
          <button
            onClick={() => {
              handleClick("js")
            }}
            className={currentActive === "js" ? "active" : null}
          >
            JavaScribt
          </button>
          <button
            onClick={() => {
              handleClick("react")
            }}
            className={currentActive === "react" ? "active" : null}
          >
            React & MUI
          </button>
          <button
            onClick={() => {
             handleClick("node")
            }}
            className={currentActive === "node" ? "active" : null}
          >
            Node & Express
          </button>
        </div>
      </div>
      <div className="right-main cards">
        <AnimatePresence>
        {Array.map((item) => {
          return (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              key={item.imgPath}
              className="card"
            >
              {/* card img */}
              <div className="img">
                <img src={item.imgPath} alt="" />
              </div>

              <div className="info">
                <h3 className="title">{item.projectTitle} </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                  tempore dolor in, accusantium laudantium accusamus.
                </p>

                <div className="card-footer">
                  <div className="left">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>

                  <a className="link" href="">
                    more <span className="icon-arrow-right"></span>
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
        </AnimatePresence>
      </div>
    </section>
  );
}
