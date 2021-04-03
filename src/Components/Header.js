import React, { useEffect } from "react";
import Particles from "react-particles-js";
import Typed from "react-typed";
import { FaRegEnvelope } from "react-icons/fa";

function Header() {
  
  useEffect(() => {
    const toCantact = document
      .getElementById("tomail")
      .addEventListener("click", (e) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop - 50;
        window.scroll({
          top: offsetTop,
          behavior: "smooth",
        });
      });
    return () => {
      toCantact.removeEventLitener("click");
    };
  }, []);

  return (
    <header id="home" className="header">
      <div className="header__overlay"></div>
      <Particles
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 600,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 6,
            },
            color: {
              value: "#8a1182",
            },
            move: {
              speed: 2.1,
            },
            links: {
              color: "#fff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            opacity: {
              value: 0.3,
            },
          },
        }}
        className="particles"
      />
      <div className="header__info">
        <Typed
          strings={["I am Aref Movahedzadeh"]}
          typeSpeed={60}
          className="header__info-name"
        />
        <br />

        <Typed
          strings={[
            "And I'm a Web Developer",
            "And I'm a Web Designer",
            "And I'm a Web Master",
          ]}
          typeSpeed={60}
          backSpeed={50}
          startDelay={1500}
          loop
          className="header__info-job"
        />
        <a href="#contact" id="tomail">
          <FaRegEnvelope className="header__info-contact" />
        </a>
      </div>
    </header>
  );
}

export default Header;
