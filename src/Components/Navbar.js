import React, { useEffect } from "react";
import Toggle from "./Toggle";
import { FaBars } from "react-icons/fa";
import { connect } from "react-redux";
import content from "./Content/content";

const Navbar = ({ lang }) => {
  // Changing nav background-color on scroll
  useEffect(() => {
    const scrolled = window.addEventListener("scroll", () => {
      if (window.scrollY >= 120) {
        document.querySelector(".navbar").classList.add("scrolled");
      } else {
        document.querySelector(".navbar").classList.remove("scrolled");
      }
    });
    return () => {
      scrolled.removeEventListener("scroll");
    };
  }, []);

  // Changing active menu item color on scroll
  useEffect(() => {
    const scrolling = window.addEventListener("scroll", () => {
      const sections = document.querySelectorAll("main > [id]");
      sections.forEach((section, index) => {
        let top = section.offsetTop;
        let bottom = section.offsetTop + section.scrollHeight;
        const scrollBarHeight =
          window.innerHeight *
          (window.innerHeight / document.body.offsetHeight);
        let scrollPoint = window.scrollY + scrollBarHeight;
        const link = document.querySelector(`.nav-link[href='#${section.id}']`);
        if (scrollPoint > top && scrollPoint < bottom) {
          if (link) {
            link.classList.add("active");
          }
        } else {
          link.classList.remove("active");
        }
      });
    });

    return () => {
      scrolling.removeEventListener("scroll");
    };
  }, []);

  // smooth open & close for mobile menu
  const handleMenu = () => {
    let menu = document.querySelector(".navbar__collapse");
    if (menu.clientHeight === 0) {
      menu.style.height = `${menu.scrollHeight}px`;
      menu.style.visibility = "visible";
    } else {
      if ((menu.style.height = 0)) {
        menu.style.visibility = "hidden";
      }
      menu.removeAttribute("style");
    }
  };

  // smooth scroll to clicked section
  const clickHandler = (e) => {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop - 50;
    window.scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <section className="navbar">
      <div className="container">
        <div className="row navbar__row">
          <div className="col-lg-3 col-8 navbar__toggle">
            <Toggle />
          </div>
          <div className="col-lg-3 col-4 navbar__bars">
            <FaBars className="menu-btn" onClick={handleMenu} />
          </div>
          <nav className="col-lg-6 col-12 navbar__collapse">
            <ul className={`navbar__navlist ${lang}`}>
              <li className="nav-item">
                <a className="nav-link active" href="#home" onClick={clickHandler}>
                  {content[lang].nav_home}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about" onClick={clickHandler}>
                  {content[lang].nav_about}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills" onClick={clickHandler}>
                  {content[lang].nav_skills}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" onClick={clickHandler}>
                  {content[lang].nav_contact}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  const { lang } = state;
  return { lang };
};

export default connect(mapStateToProps)(Navbar);
