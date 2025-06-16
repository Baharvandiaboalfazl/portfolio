const express = require("express");
const cors = require("cors");
const path = require("path");

const postRoutes = require("./routes/posts");
const contactRoutes = require("./routes/contact");

const app = express();

app.use(
  cors({
    origin: "https://baharvandiaboalfazl.github.io",
  })
);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/posts", postRoutes);
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(` API در حال اجرا روی http://localhost:${PORT}`);
});
