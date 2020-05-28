const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
require('./routes/sprint9/routing.js')(router);
require('./routes/sprint28/routing.js')(router);

module.exports = router
