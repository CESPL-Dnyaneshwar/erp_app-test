// const mongoose = require("mongoose");

// const notificationSchema = new mongoose.Schema({
//   userId: String,
//   message: String,
//   isView: String,
//   createdBy: String,
//   createdTime: String,
//   updatedBy: String,
//   updatedTime: String
// });

// module.exports = mongoose.model("Notification", notificationSchema);


// models/Notification.js
const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  recipientId: {
    type: String,
    required: true,
    index: true,
  },
  senderId: {
    type: String,
    required: true,
  },
  senderName: {
    type: String,
    required: true,
  },
  ticketId: {
    type: String,
    required: true,
  },
  ticketNo: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["ticket_assigned", "ticket_updated", "ticket_reassigned"],
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    default: "normal",
  },
  isRead: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Index for efficient querying
notificationSchema.index({ recipientId: 1, isRead: 1, createdAt: -1 });

module.exports = mongoose.model("Notification", notificationSchema);