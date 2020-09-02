'use strict';

const logger = require('../utils/logger');
const assessmentCollection = require("../models/assessment-store.js");

const assessmentlist = {
  index(request, response) {
    const viewData = {
      title: 'Assessment',
    };
    response.render('assessmentlist', viewData);
  },
};

module.exports = assessmentlist;