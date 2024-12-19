const express = require("express");
const {createArticle, getAllArticles, getArticleById, updateArticle, deleteArticle,} = require("../controllers/articlesController");

const router = express.Router();

router.post("/create", createArticle);
router.get("/list", getAllArticles);
router.get("/view/:id", getArticleById);
router.put("/update/:id", updateArticle);
router.delete("/delete/:id", deleteArticle);

module.exports = router;
