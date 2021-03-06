const express = require('express');
const route = express.Router();

const meController = require('../app/controllers/meController');

route.get('/stored/courses', meController.storedCourses);
route.get('/trash/courses', meController.trash);

module.exports = route;
