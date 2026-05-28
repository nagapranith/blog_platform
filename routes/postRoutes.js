const router = require("express").Router();
const Post = require("../models/Post");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, async (req, res) => {
  try {
    const post = new Post(req.body);

    await post.save();

    res.json(post);

  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  const posts = await Post.find().sort({
    createdAt: -1,
  });

  res.json(posts);
});

router.put("/:id", authMiddleware, async (req, res) => {
  const updatedPost =
    await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

  res.json(updatedPost);
});

router.delete("/:id", authMiddleware, async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);

  res.json({
    message: "Post Deleted",
  });
});

module.exports = router;