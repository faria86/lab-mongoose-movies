const express = require('express');
const celebritiesRouter = express.Router(); // Step 1: create the route


celebritiesRouter.get('/', (req, res) => {
  const name = req.body.name;
  
  Celebrity.find({ name })
  .then(document => {
    res.render('celebrities/index')
      })
  .catch(error => {
    next(error);
  });
})

module.exports = router;