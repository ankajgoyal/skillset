const Comment = require("../models/commentModel");
var MD5 = require("crypto-js/md5");

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json({
      success: true,
      messages: comments.reverse(),
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to fetch Results",
    });
  }
};

exports.addComment = async (req, res) => {
  try {
    const gravatar = MD5(req.body.email).toString();
    req.body.gravatar = `https://www.gravatar.com/avatar/${gravatar}.jpg`;

    const commentData = await Comment.create(req.body);
    res.status(200).json({
      success: true,
      data: {
        comment: commentData,
      },
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
