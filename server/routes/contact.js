const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/", express.json(), async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: "فیلد ایمیل و پیام اجباری هستند." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "baharvandiaboalfazl@gmail.com",
      pass: "fyvf kkqf ftot lkvg",
    },
  });

  const mailOptions = {
    from: email,
    to: "baharvandiaboalfazl@gmail.com",
    subject: subject,
    text: `
    از طرف: ${name}
    ایمیل: ${email}

    پیام:
    ${message}
  `,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "ایمیل با موفقیت ارسال شد ✅" });
  } catch (err) {
    console.error("❌ خطا در ارسال ایمیل:", err);
    res.status(500).json({ error: "ارسال ایمیل با مشکل مواجه شد." });
  }
});

module.exports = router;
