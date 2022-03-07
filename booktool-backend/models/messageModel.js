const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  reservationId: {
    type: mongoose.SchemaTypes.ObjectId,
    require: true,
  },
  type: {
    type: String,
    require: true,
    enum: ["added", "cancelled", "date"],
  },
  createdAt: {
    type: Date,
    require: true,
    default: Date.now(),
  },
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
