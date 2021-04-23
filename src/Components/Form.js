import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import content from "./Content/content";

const successMessage = "Your Email is sent.Thank you for contacting me";
const errorMessage = "Please fill the form compeletly. Couldn't send Email";

const Form = ({lang}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [mailSent, setmailSent] = useState(false);
  const [error, setError] = useState(null);
  const [formSending, setFormSending] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, message } = formData;
    if ((fullName, email, message)) {
      setFormSending(true)
      axios({
        method: "post",
        url: `${process.env.REACT_APP_API}`,
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify(formData),
      })
        .then((result) => {
          if (result.data.sent) {
            setmailSent(result.data.sent);
            setError(false);
            setFormSending(false);
          } else {
            setError(true);
            setFormSending(false);
          }
        })
        .catch((error) => {
          setError(error.message);
          setFormSending(false);
        });
    } else {
      alert("Please fill in all the fields");
      return;
    }
  };

  useEffect(() => {
    const removeMsg = setTimeout(() => {
      if (mailSent) {
        document.querySelector(".sucsess").style.display = "none";
      }
      if (error) {
        document.querySelector(".error").style.display = "none";
      }
    }, 5000);
    return () => {
      clearTimeout(removeMsg);
    };
  }, [mailSent, error]);

  return (
    <>
      <div className={`contact-form ${lang}`}>
        <h2 className="contact-form__heading">{content[lang].c_form}</h2>
        {mailSent && <span className="sucsess">{successMessage}</span>}
        {error && <span className="error">{errorMessage}</span>}
        {formSending && <span className="sending">Sending...</span>}
        <form className="form">
          <input
            className="form__field"
            type="text"
            placeholder={content[lang].fullname}
            required
            value={formData.fullName}
            onChange={(e) => {
              setFormData({ ...formData, fullName: e.target.value });
            }}
          />
          <input
            className="form__field"
            type="email"
            placeholder={content[lang].email}
            required
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
          <textarea
            className="form__field"
            placeholder={content[lang].msg}
            rows="4"
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
            }}
          ></textarea>
          <button
            type="submit"
            className="form__submit"
            onClick={(e) => handleFormSubmit(e)}
          >
            {content[lang].c_form_submit}
          </button>
        </form>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const { lang } = state;
  return { lang };
};

export default connect(mapStateToProps)(Form);
