const express = require('express');
const router = express.Router();
const Complaint = require('../modals/complaint');
// const multer = require('multer');
// const path = require('path');
// const uploadPath = path.join('public', Complaint.ImageBasePath);
// const imgMimeTypes=['images/jpeg','images/png','images/gif'];
// const upload=multer({
//   dest:uploadPath,
//   fileFilter=(req,file,callback)=>{
//     calllback(null,true)
//   }
// })

router.get('/', (req, res) => {
  res.render('index');
});
router.get('/complaint', (req, res) => {
  res.render('form', { complaint: new Complaint() });
});
router.post('/', async (req, res) => {
  const complaint = new Complaint({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
  });
  try {
    const newComplaint = await complaint.save();
    res.redirect('/complaint');
  } catch {
    res.render('/');
  }
});
module.exports = router;
