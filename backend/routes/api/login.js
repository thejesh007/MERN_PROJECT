const express = require ('express');
const router = express.Router();
const User=require('../../models/user');
const bcrypt = require('bcryptjs');

router.get('/all', (req, res, next) => {
        //
        /*User.find({},'username')
        .then(data => res.json(data))
        .catch(err => res.send(err));*/
        User.find({}, function(err, result) {
            if (err) {
              res.send(err);
            } else {
              res.send(result);
            }
          });
        });
         
router.post('/login', (req, res, next) => {
   res.setHeader('Content-Type','application/json');

   var body = req.body;
   
        User.find({credentials:{username:body.username,password:body.password}}, function (err, result) {
             if (err) {
                res.status(401).send(err);
                } else {
                    if (result && result.length > 0) {
                         res.status(200).send({ "status": true });
                    } else  {
                         res.status(401).send({ "status": false });
                            }
                        }               
  
            });
    });

router.post('/register', (req, res, next) => {
  res.setHeader('Content-Type','application/json'); 
  var body = req.body;
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(body.password, salt, function(err, hash) {
      var user = new User({
        credentials: {
            username: body.userId,
            password: hash
        },
        details: {
            firstName:body.firstName,
            middleName:body.middleName,
            lastName:body.lastName,
            email:body.email,
            address:body.address,
            mobileNo:body.mobileNo,
        
        }
    });
    bcrypt.compare(body.password, hash, function(err, result) {
      console.log("true")
  });
    
    user.save(function (err, user) {
        if (err) {
            console.error(err);        
            res.status(500).send({status:false, error:err});
        } 
        else {
            console.log("User created successfully!!");
            res.status(201).send({status:true,msg:"User created successfully!"});
        }
    });
        // Store hash in your password DB.
    });
});
  
})

module.exports = router;
