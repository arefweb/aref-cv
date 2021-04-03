import React from 'react'
import image from '../assets/images/Aref.jpg' ;
import { connect } from "react-redux";
import content from "./Content/content";

const About = ({ lang }) => {
  return (
    <section id="about" className={`about ${lang}`}>
      <div className="container">
        <div className="row">
          <section className="col-sm-6 about__text">
            <article className="about__text-wrapper">
              <h2>{content[lang].about}</h2>
              <p>{content[lang].about_text}</p>
            </article>
          </section>
          <section className="col-sm-6 about__img">
            <img src={image} alt="Aref Movahedzadeh" className="" />
          </section>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  const { lang } = state;
  return { lang };
};

export default connect(mapStateToProps)(About)
