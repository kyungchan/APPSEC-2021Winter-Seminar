var express = require("express");
var router = express.Router();

const boardModel = require("../odm/board.js");

/* 모든 게시글 받아오기 */
router.get("/", function (req, res) {
  boardModel
    .find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

/* 특정 게시글 받아오기 */
router.get("/:id", function (req, res) {
  boardModel
    .findOne({
      _id: req.params.id,
    })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

/* 특정 게시글 수정하기 */
router.patch("/:id", function (req, res) {
  boardModel
    .findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

/* 게시글 작성하기 */
router.post("/", function (req, res) {
  boardModel
    .create(req.body)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

/* 게시글 작성하기 */
router.delete("/", function (req, res) {
  boardModel
    .create(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

/* 댓글 작성하기 */
router.post("/:id", function (req, res) {
  boardModel
    .findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        $push: { comments: req.body },
      }
    )
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

/* 댓글 삭제하기 */
router.delete("/:id/:commentId", function (req, res) {
  boardModel
    .findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        $pull: { comments: { _id: req.params.commentId } },
      }
    )
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

module.exports = router;
