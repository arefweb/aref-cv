import React from 'react'
import { connect } from "react-redux";
import content from "./Content/content";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaReact,
  FaPhp,
  FaDatabase,
} from "react-icons/fa";

const Skills = ({ lang }) => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <article className={`skills__text ${lang}`}>
              <h2>{content[lang].m_skills}</h2>
              <p>{content[lang].m_skills_text} </p>
            </article>
          </div>
          <div className="col-sm-6 d-flex justify-content-center">
            <aside className="skill">
              <h3>Languages &amp; Frameworks : </h3>
              {/* skill 1*/}
              <div className="skill__info">
                <h4>
                  <FaHtml5 className="skill__icon" /> HTML
                </h4>
                <span>95%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__bar-percentage skill-1"></div>
              </div>
              {/* skill 2*/}
              <div className="skill__info">
                <h4>
                  <FaCss3Alt className="skill__icon" /> CSS
                </h4>
                <span>95%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__bar-percentage skill-2"></div>
              </div>
              {/* skill 3*/}
              <div className="skill__info">
                <h4>
                  <FaBootstrap className="skill__icon" /> Bootstrap
                </h4>
                <span>90%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__bar-percentage skill-3"></div>
              </div>
              {/* skill 4*/}
              <div className="skill__info">
                <h4>
                  <FaJsSquare className="skill__icon" /> JavaScript (ES6+)
                </h4>
                <span>85%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__bar-percentage skill-4"></div>
              </div>
              {/* skill 5*/}
              <div className="skill__info">
                <h4>
                  <FaReact className="skill__icon" /> ReactJs
                </h4>
                <span>85%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__bar-percentage skill-5"></div>
              </div>
              {/* skill 6*/}
              <div className="skill__info">
                <h4>
                  <FaJsSquare className="skill__icon" /> jQuery
                </h4>
                <span>85%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__bar-percentage skill-6"></div>
              </div>
              {/* skill 7*/}
              <div className="skill__info">
                <h4>
                  <FaPhp className="skill__icon" /> PHP
                </h4>
                <span>80%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__bar-percentage skill-7"></div>
              </div>
              {/* skill 8*/}
              <div className="skill__info">
                <h4>
                  <FaDatabase className="skill__icon" /> MySQL
                </h4>
                <span>80%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__bar-percentage skill-8"></div>
              </div>
            </aside>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <article className={`skills__text ${lang}`}>
              <h2>{content[lang].knowledge}</h2>
              <p>{content[lang].knowledge_text}</p>
            </article>
          </div>
          <div className="col-sm-6 d-flex justify-content-center">
            <aside className="knowledge">
              <section className="knowledge__info">
                <h4 className="knowledge__info-title">Front-End</h4>
                <ul className="knowledge__info-tags">
                  <li>SASS Preprocessor </li>
                  <li>UX</li>
                  <li>Responsive Design</li>
                  <li>PhotoShop</li>
                </ul>
              </section>
              <section className="knowledge__info">
                <h4 className="knowledge__info-title">ReactJs</h4>
                <ul className="knowledge__info-tags">
                  <li>React Hooks </li>
                  <li>Redux </li>
                  <li>Context API &amp; Reducer </li>
                  <li>Restful API </li>
                  <li>axios</li>
                  <li>Performance Optimization</li>
                </ul>
              </section>
              <section className="knowledge__info">
                <h4 className="knowledge__info-title">Project management</h4>
                <ul className="knowledge__info-tags">
                  <li>Scrum</li>
                  <li>Git &amp; GitHub </li>
                </ul>
              </section>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  const { lang } = state;
  return { lang };
};

export default connect(mapStateToProps)(Skills);

