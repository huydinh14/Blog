const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, maxLength: 255, require: true },
        description: { type: String, maxLength: 300 },
        image: { type: String },
        videoId: { type: String },
        slug: { type: String, slug: 'name', unique: true },
        deletedAt: { type: Date, default: Date.now() },
        //createdAt: { type: Date, default: Date.now() },
        //updatedAt: { type: Date, default: Date.now() },
    },
    {
        timestamp: true,
    },
);

// Add plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Course', Course);
