const mongoose = require("mongoose");
const mongooseAlgolia = require("mongoose-algolia");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    owner: { type: Schema.Types.ObjectId, ref: "Owner" },
    title: String,
    description: String,
    photo: String,
    price: Number,
    stockQuantity: Number,
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }]
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
);

ProductSchema.virtual("averageRating").get(function() {
  if (this.reviews.length > 0) {
    let sum = this.reviews.reduce((total, review) => {
      return total + review.rating;
    }, 0);
    return sum / this.reviews.length;
  }

  return 0;
});

ProductSchema.plugin(mongooseAlgolia, {
  appId: process.env.ALGOLIA_APP_ID,
  apiKey: process.env.ALGOLIA_SECRET,
  indexName: process.env.ALGOLIA_INDEX,

  selector: "title _id photo description price rating averageRating owner",
  populate: {
    path: "owner reviews"
  },
  debug: true
});

let Model = mongoose.model("Product", ProductSchema);
Model.SyncToAlgolia();
Model.SetAlgoliaSettings({
  searchableAttributes: ["title"]
});

module.exports = Model;
