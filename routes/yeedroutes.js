const express = require('express');
const router = express.Router();
const yeedController = require("../controller/yeedcontroller")

router.get('/', yeedController.yeed_index );

router.get('/addyeed', yeedController.yeed_add);

router.get('/:id', yeedController.yeed_details);

router.delete('/:id' , yeedController.yeed_delete);

router.post("/" , yeedController.yeed_save);

router.delete("/" , yeedController.yeed_delete);

module.exports = router;