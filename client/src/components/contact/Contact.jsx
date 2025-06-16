import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

import "./contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setStatus("در حال ارسال...");

    try {
      const res = await toast.promise(
        // 1. پرامیسی که باید اجرا شود (درخواست ما به سرور)
        axios.post("http://localhost:4000/api/contact", { ...form }),

        // 2. آبجکت تنظیمات برای هر وضعیت
        {
          pending: "در حال ارسال پیام شما...", // پیامی که در حالت انتظار نمایش داده می‌شود
          success: "پیام شما با موفقیت ارسال شد.", // پیامی که در صورت موفقیت نمایش داده می‌شود
          error: {
            // پیامی که در صورت خطا نمایش داده می‌شود
            render({ data }) {
              // نمایش پیام خطای دریافتی از سرور
              return (
                data.response?.data?.message || "ارسال پیام با خطا مواجه شد."
              );
            },
          },
        }
      );

      // await axios.post("http://localhost:4000/api/contact", form);
      // setStatus("✅ پیام شما با موفقیت ارسال شد.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      // setStatus("❌ ارسال پیام با خطا مواجه شد.");
    }
  };

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

        <form action="" className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="نام و نام خانوادگی ..."
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="ایمیل ..."
                value={form.email}
                onChange={handleChange}
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
              value={form.subject}
              onChange={handleChange}
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
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn">
            ارسال پیام
          </button>
        </form>

        <ToastContainer
          position="top-center" // موقعیت: بالای صفحه، وسط
          autoClose={5000} // بسته شدن خودکار بعد از ۵ ثانیه
          rtl={true} // فعال‌سازی حالت راست‌چین برای فارسی
          theme="colored" // استفاده از تم‌های رنگی
        />
        {/* {status && <p className="status">{status}</p>} */}
      </div>
    </section>
  );
};

export default Contact;
