'use strict';

const logger = require('../utils/logger');
const assessmentCollection = require("../models/assessment-store.js");

const assessmentlist = {
  index(request, response) {
    const assessmentlistId = request.params.id;
    logger.info('Assessment id = ' + assessmentlistId);
    const viewData = {
      title: 'Assessment',
    };
    response.render('assessmentlist', viewData);
  },
};

module.exports = assessmentlist;