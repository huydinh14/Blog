const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, maxLength: 255, require: true },
        description: { type: String, maxLength: 300 },
        image: { type: String },
        slug: { type: String },
        videoId: { type: String },
        slug: { type: String, slug: 'name', unique: true },
        //createdAt: { type: Date, default: Date.now() },
        //updatedAt: { type: Date, default: Date.now() },
    },
    {
        timestamp: true,
    },
);

module.exports = mongoose.model('Course', Course);
