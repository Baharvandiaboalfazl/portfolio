import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">
        با هم در تماس باشیم <span className="title__emoji"></span>
      </h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">بیا درباره همه چی با هم صحبت کنیم!</h3>
          <p className="contact__details">پیامتو برام ایمیل کن.</p>
        </div>

        <form action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="نام و نام خانوادگی ..."
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="ایمیل ..."
                required
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              name="subject"
              className="contact__form-input"
              placeholder="موضوع ..."
              required
            />
          </div>

          <div className="contact__form-div">
            <textarea
              id=""
              cols="30"
              rows="10"
              type="email"
              name="message"
              className="contact__form-input textarea"
              placeholder="پیام ..."
              required
            />
          </div>

          <button type="submit" className="btn">
            ارسال پیام
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
