var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Article = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    default: 'Summary unavailable.'
  },
  img: {
    type: String,
    default: ''
  },
  saved: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    default: 'Save Article'
  },
  created: {
    type: Date,
    default: Date.now
  },
  note: {
    type: Schema.Types.ObjectId,
    ref: 'Note'
  }
});

Article.index({ title: 'text' });

var Article = mongoose.model('Article', Article);
module.exports = Article;
