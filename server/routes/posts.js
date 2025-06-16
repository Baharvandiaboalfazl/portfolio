const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/posts.json");

router.get("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  res.json(data);
});

router.get("/:id", (req, res) => {
  const postId = parseInt(req.params.id, 10);

  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

  const post = data.find((p) => p.id === postId);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: "پست یافت نشد" });
  }
});

module.exports = router;
