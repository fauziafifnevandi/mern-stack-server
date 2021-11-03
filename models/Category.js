const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  itemId: [
    {
      type: Object,
      ref: "Item",
    },
  ],
});

module.exports = mongoose.model("Category", categorySchema);
