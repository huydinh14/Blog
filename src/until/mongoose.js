module.exports = {
    mutipleMongooseToObject: function (mongooses) {
        return mongooses.map((mongoose) => mongoose.toObject());
    },
    mongodbToObject: function (mongooses) {
        return mongooses ? mongooses.toObject() : mongooses;
    },
};
