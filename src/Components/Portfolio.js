import React from "react";
import { connect } from "react-redux";
import content from "./Content/content";
import GuardianImg from "../assets/images/Guardian-API.png";
import TicTacToe from "../assets/images/TicTacToe.png";
import WeatherAPI from "../assets/images/weather.png";
import CartImg from "../assets/images/cart.png";
import DashboardImg from "../assets/images/dashboard.png";
import WordpressImg from "../assets/images/wordpress.png";

const Portfolio = ({ lang }) => {
  const handleClick = (e) => {
    if (e.currentTarget.id == "tictac") {
      document.querySelector(".tictac").style.display = "flex";
    }
    if (e.currentTarget.id == "guardian") {
      document.querySelector(".guardian").style.display = "flex";
    }
    if (e.currentTarget.id == "weather") {
      document.querySelector(".weather").style.display = "flex";
    }
    if (e.currentTarget.id == "cart") {
      document.querySelector(".cart").style.display = "flex";
    }
    if (e.currentTarget.id == "dashboard") {
      document.querySelector(".dashboard").style.display = "flex";
    }
    if (e.currentTarget.id == "wordpress") {
      document.querySelector(".wordpress").style.display = "flex";
    }
  };

  const handleClose = (e) => {
    if (
      e.currentTarget.parentElement.parentElement.classList.contains("guardian")
    ) {
      document.querySelector(".guardian").style.display = "none";
    }
    if (
      e.currentTarget.parentElement.parentElement.classList.contains("tictac")
    ) {
      document.querySelector(".tictac").style.display = "none";
    }
    if (
      e.currentTarget.parentElement.parentElement.classList.contains("weather")
    ) {
      document.querySelector(".weather").style.display = "none";
    }
    if (
      e.currentTarget.parentElement.parentElement.classList.contains("cart")
    ) {
      document.querySelector(".cart").style.display = "none";
    }
    if (
      e.currentTarget.parentElement.parentElement.classList.contains("dashboard")
    ) {
      document.querySelector(".dashboard").style.display = "none";
    }
    if (
      e.currentTarget.parentElement.parentElement.classList.contains("wordpress")
    ) {
      document.querySelector(".wordpress").style.display = "none";
    }
  };

  return (
    <section id="portfolio">
      <div className={`container portfolio ${lang}`}>
        <div className="row portfolio__header">
          <div className="col-md-12 portfolio__header-col">
            <h2 className="portfolio__header-title">
              {content[lang].portfolio}
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 portfolio__col">
            <article
              id="dashboard"
              className="portfolio__card"
              onClick={handleClick}
            >
              <div className="portfolio__card-overlay"></div>
              <h3 className="portfolio__card-title">Dashboard</h3>
              <img src={DashboardImg} className="portfolio__card-image" />
            </article>
          </div>
          <div className="col-md-4 portfolio__col">
            <article
              id="wordpress"
              className="portfolio__card"
              onClick={handleClick}
            >
              <div className="portfolio__card-overlay"></div>
              <h3 className="portfolio__card-title">Next Wordpress</h3>
              <img src={WordpressImg} className="portfolio__card-image" />
            </article>
          </div>
          <div className="col-md-4 portfolio__col">
            <article
              id="guardian"
              className="portfolio__card"
              onClick={handleClick}
            >
              <div className="portfolio__card-overlay"></div>
              <h3 className="portfolio__card-title">Guardian API</h3>
              <img src={GuardianImg} className="portfolio__card-image" />
            </article>
          </div>
          <div className="col-md-4 portfolio__col">
            <article
              id="tictac"
              className="portfolio__card"
              onClick={handleClick}
            >
              <div className="portfolio__card-overlay"></div>
              <h3 className="portfolio__card-title">Tic Tac Toe</h3>
              <img src={TicTacToe} className="portfolio__card-image" />
            </article>
          </div>
          <div className="col-md-4 portfolio__col">
            <article
              id="weather"
              className="portfolio__card"
              onClick={handleClick}
            >
              <div className="portfolio__card-overlay"></div>
              <h3 className="portfolio__card-title">Weather API</h3>
              <img src={WeatherAPI} className="portfolio__card-image" />
            </article>
          </div>

          <div className="col-md-4 portfolio__col">
            <article
              id="cart"
              className="portfolio__card"
              onClick={handleClick}
            >
              <div className="portfolio__card-overlay"></div>
              <h3 className="portfolio__card-title">Cart</h3>
              <img src={CartImg} className="portfolio__card-image" />
            </article>
          </div>
        </div>
      </div>

      {/* Modal Dashboard */}
      <div className="modal-portfolio dashboard">
        <div className="row modal-portfolio__row">
          <button className="exit-btn" onClick={handleClose}>
            {" "}
            &times;{" "}
          </button>
          <div className="col-md-6 modal-portfolio__col">
            <div className="modal-portfolio__img">
              <img src={DashboardImg} />
            </div>
          </div>
          <div className="col-md-6">
            <article className={`modal-portfolio__info ${lang}`}>
              <h2>{content[lang].dashboard}</h2>
              <a
                href="https://aref-next-admin.vercel.app"
                target="_blank"
                noopener="true"
              >
                Link
              </a>
              <i> </i>
              <a href="https://github.com/arefweb/next-admin" target="_blank">
                Github
              </a>
              <h4>{content[lang].technologies}</h4>
              <p>Next.js - React - PWA - JWT </p>
              <h3>{content[lang].features}</h3>
              <ul>
                <li>{content[lang].dashboard_1}</li>
                <li>{content[lang].dashboard_2}</li>
                <li>{content[lang].dashboard_3}</li>
                <li>{content[lang].dashboard_4}</li>
              </ul>
            </article>
          </div>
        </div>
      </div>

      {/* Modal Wordpress */}
      <div className="modal-portfolio wordpress">
        <div className="row modal-portfolio__row">
          <button className="exit-btn" onClick={handleClose}>
            {" "}
            &times;{" "}
          </button>
          <div className="col-md-6 modal-portfolio__col">
            <div className="modal-portfolio__img">
              <img src={WordpressImg} />
            </div>
          </div>
          <div className="col-md-6">
            <article className={`modal-portfolio__info ${lang}`}>
              <h2>{content[lang].wordpress}</h2>
              <a
                href="https://next-wordpress-crypto.vercel.app"
                target="_blank"
                noopener="true"
              >
                Link
              </a>
              <i> </i>
              <a
                href="https://github.com/arefweb/next-wordpress"
                target="_blank"
              >
                Github
              </a>
              <h4>{content[lang].technologies}</h4>
              <p>Next.js - React - WordPress API </p>
              <h3>{content[lang].features}</h3>
              <ul>
                <li>{content[lang].wordpress_1}</li>
                <li>{content[lang].wordpress_2}</li>
              </ul>
            </article>
          </div>
        </div>
      </div>

      {/* Modal Guardian */}
      <div className="modal-portfolio guardian">
        <div className="row modal-portfolio__row">
          <button className="exit-btn" onClick={handleClose}>
            {" "}
            &times;{" "}
          </button>
          <div className="col-md-6 modal-portfolio__col">
            <div className="modal-portfolio__img">
              <img src={GuardianImg} />
            </div>
          </div>
          <div className="col-md-6">
            <article className={`modal-portfolio__info ${lang}`}>
              <h2>{content[lang].guardian}</h2>
              <a
                href="https://guardian-api-project.netlify.app/"
                target="_blank"
                noopener="true"
              >
                Link
              </a>
              <i> </i>
              <a href="https://github.com/arefweb/guardian-api">Github</a>
              <h4>{content[lang].technologies}</h4>
              <p>react – sass – react-router – Redux – API fetch …</p>
              <h3>{content[lang].features}</h3>
              <ul>
                <li>{content[lang].g_1}</li>
                <li>{content[lang].g_2}</li>
                <li>{content[lang].g_3}</li>
                <li>{content[lang].g_4}</li>
              </ul>
            </article>
          </div>
        </div>
      </div>

      {/* Modal TicTac */}
      <div className="modal-portfolio tictac">
        <div className="row modal-portfolio__row">
          <button className="exit-btn" onClick={handleClose}>
            {" "}
            &times;{" "}
          </button>
          <div className="col-md-6 modal-portfolio__col">
            <div className="modal-portfolio__img">
              <img src={TicTacToe} />
            </div>
          </div>
          <div className="col-md-6">
            <article className={`modal-portfolio__info ${lang}`}>
              <h2>{content[lang].tictac}</h2>
              <a
                href="https://tic-tac-toe-dooz.netlify.app/"
                target="_blank"
                noopener="true"
              >
                Link
              </a>
              <i> </i>
              <a href="https://github.com/arefweb/tic-tac-toe">Github</a>
              <h4>{content[lang].technologies}</h4>
              <p>React – sass – advanced JavaScript ...</p>
              <h3>{content[lang].features}</h3>
              <ul>
                <li>{content[lang].t_1}</li>
                <li>{content[lang].t_2}</li>
              </ul>
            </article>
          </div>
        </div>
      </div>

      {/* Modal weather */}
      <div className="modal-portfolio weather">
        <div className="row modal-portfolio__row">
          <button className="exit-btn" onClick={handleClose}>
            {" "}
            &times;{" "}
          </button>
          <div className="col-md-6 modal-portfolio__col">
            <div className="modal-portfolio__img">
              <img src={WeatherAPI} />
            </div>
          </div>
          <div className="col-md-6">
            <article className={`modal-portfolio__info ${lang}`}>
              <h2>{content[lang].weather}</h2>
              <a
                href="https://abohava.netlify.app/"
                target="_blank"
                noopener="true"
              >
                Link
              </a>
              <i> </i>
              <a href="https://github.com/arefweb/weather-app">Github</a>
              <h4>{content[lang].technologies}</h4>
              <p>React – sass – axios – API …</p>
              <h3>{content[lang].features}</h3>
              <ul>
                <li>{content[lang].w_1}</li>
                <li>{content[lang].w_2}</li>
              </ul>
            </article>
          </div>
        </div>
      </div>

      {/* Modal cart */}
      <div className="modal-portfolio cart">
        <div className="row modal-portfolio__row">
          <button className="exit-btn" onClick={handleClose}>
            {" "}
            &times;{" "}
          </button>
          <div className="col-md-6 modal-portfolio__col">
            <div className="modal-portfolio__img">
              <img src={CartImg} />
            </div>
          </div>
          <div className="col-md-6">
            <article className={`modal-portfolio__info ${lang}`}>
              <h2>{content[lang].cart}</h2>
              <a
                href="https://forooshgah.netlify.app/"
                target="_blank"
                noopener="true"
              >
                Link
              </a>
              <i> </i>
              <a href="https://github.com/arefweb/forooshgah">Github</a>
              <h4>{content[lang].technologies}</h4>
              <p>React – Redux …</p>
              <h3>{content[lang].features}</h3>
              <ul>
                <li>{content[lang].cart_1}</li>
              </ul>
            </article>
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

export default connect(mapStateToProps)(Portfolio);
