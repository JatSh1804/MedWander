const express = require('express');
const router = express.Router();
const { getForms, createForm, syncDataWithExcel } = require('../controller/formController');
const auth = require("../middleware/auth")

router.get('/', auth, getForms);
router.post('/', auth, createForm);
router.post('/sync', auth, syncDataWithExcel);

module.exports = router;
