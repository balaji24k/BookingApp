const Users = require("../models/users");


exports.postData = (req, res, next) => {
  console.log("body>>>>>>>>>", req.body);
  Users.create(req.body)
    .then((result) => {
      
      res.json(result);
    });
};

exports.getData = (req, res, next) => {
  Users.findAll()
    .then(result => {
      console.log("ressult>>>>>>>>", result);
      res.json(result);
    })
};

exports.deleteData = (req, res, next) => {
  // console.log("delete id",req.params.id)
  Users.findByPk(req.params.id)
    .then(result => {
      // console.log("ressult>>>>>>>>", result);
      result.destroy();
    })
};
