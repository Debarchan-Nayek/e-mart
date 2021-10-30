const express = require('express')
const path = require('path')
const multer = require('multer')
const router = express.Router()

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const storage = multer.diskStorage({
    destination(req, file, cb){
        cb(null, 'uploads/')
    },
    filename(req, file, cb){
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }
})

function checkFileType(file, cb){
    const filetypes = /jpg|jpeg|png/
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = filetypes.test(file.mimetype)

    if(extname && mimetype){
        return cb(null, true)
    } else{
        cb('Images only!')
    }
}

const upload = multer({
    storage,
    fileFilter: function(req, file, cb){
        checkFileType(file,cb)
    }
})

router.post('/', upload.single('image'), (req,res) => {
    res.send(`/${req.file.path}`)
})


module.exports = router