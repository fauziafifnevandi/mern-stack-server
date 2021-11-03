const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const bookingSchema = new mongoose.Schema({
  bookingStartDate: {
    type: Date,
    require: true,
  },
  bookingEndDate: {
    type: Date,
    require: true,
  },
  itemId: {
    _id: {
      type: ObjectId,
      ref: "Item",
    },
    price: {
      type: Number,
      ref: "Item",
    },
    night: {
      type: Number,
      require: true,
    },
  },
  memberId: {
    type: String,
    required: true,
  },

  bankId: [
    {
      type: ObjectId,
      ref: "Bank",
    },
  ],

  proofPayment: {
    type: String,
    require,
  },

  bankFrom: {
    type: String,
    required: true,
  },

  accountHolder: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.module("Booking", bookingSchema);
