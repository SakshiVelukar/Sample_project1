const express = require("express");
const router = express.Router();

router.get("/", (req, res,next) => {
    const user = false;

    if (user) {
        res.send("User Sayfası");
      } else {
       next({status:404,message:"Bu kullanıcı bulunamadı"});
      }
});

module.exports = router;
