const Message = require("../models/messageModel");

exports.getMessages = async (req, res, next) => {
  try {
    const messages = await Message.find().limit(6).sort({createdAt: "desc"});
    res.status(200).json({
      status: "success",
      messages,
    });
  } catch (error) {
    console.log(error);
  }
};
