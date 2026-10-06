const multer = require('multer');
const path = require('path');

const fileFilter = (req, file , cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  const allowedFiles = [".png", ".jpg", ".jpeg", ".webp"];
  if(!allowedFiles.includes(ext)) {
    return cb(new Error(`Invalid file type, only files with type: ${allowedFiles.toString()} are allowed.`), false)
  }
  cb(null, true);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads")
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '_' + file.originalname)
  }
})

const upload = multer({
    storage,
    fileFilter,
    limits: {fileSize: 1024 * 1024 * 3}
})

module.exports = upload