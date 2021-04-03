import React from "react";
import Form from "./Form";
import { FaGithubSquare, FaWhatsappSquare, FaSkype } from "react-icons/fa";
import { connect } from "react-redux";
import content from "./Content/content";

const Contact = ({lang}) => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 contact__info">
            <article className={`${lang}`}>
              <h2>{content[lang].contact}</h2>
              <p>{content[lang].contact_text}</p>
              <aside>
                <a
                  href="skype:live:.cid.82a3c860ac1442a9?add"
                  className="contact__info-icon"
                  title="skype"
                >
                  <FaSkype className="contact__info-skype" />
                </a>
                <a
                  href="https://github.com/arefweb"
                  className="contact__info-icon"
                  target="_blank"
                  title="github"
                  rel="noreferrer"
                >
                  <FaGithubSquare className="contact__info-github" />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=+989017475462"
                  className="contact__info-icon"
                  target="_blank"
                  title="whatsapp"
                  rel="noreferrer"
                >
                  <FaWhatsappSquare className="contact__info-whatsapp" />
                </a>
              </aside>
            </article>
          </div>
          <div className="col-sm-6">
            <Form />
          </div>
        </div>
      </div>

      <footer className="container-fluid">
        <div className="row">
          <div className="col-12">
            <p>Copyright &copy; {new Date().getFullYear()} </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

const mapStateToProps = (state) => {
  const { lang } = state;
  return { lang };
};

export default connect(mapStateToProps)(Contact);
