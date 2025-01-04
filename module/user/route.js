const express = require('express');
const app = express();
let user_model = require('./user_module');
const router = express.Router();
let Validator = require('Validator');

/*
* get institute
*/
router.get("/get_institute",function(req,res){
        user_model.get_institute(function(response,msg,code){
            if(response == null){
                response_data = {
                    code: code,
                    message: msg
                };
                res.status(200);
                res.json(response_data);
            }
            else {
                response_data = {
                    code: code,
                    message: msg,
                    data: response
                };
                res.status(200);
                res.json(response_data);
            }
        });
});

/*
* get board
*/
router.get("/get_board",function(req,res){

    let rules = {
        institute_id:'required'
    }
    const messages = {
        'required': 'The :attr field is required',
    }
    // var request = {};
    // if(req.body.institute_id != undefined ){
        var request = JSON.parse(req.body);
    // }
    let v = Validator.make(request, rules, messages)
    if (v.fails()) {
        let Validator_errors = v.getErrors();
        for (let key in Validator_errors) {
            error = Validator_errors[key][0];
            break;
        }
        response_data = {
            code: '0',
            message: error
        };
        res.status(200);
        res.json(response_data);
        
    }
    else
    {   
        user_model.get_board(request,function(response,msg,code){
            if(response == null){
                response_data = {
                    code: code,
                    message: msg
                };
                res.status(200);
                res.json(response_data);
            }
            else {
                response_data = {
                    code: code,
                    message: msg,
                    data: response
                };
                res.status(200);
                res.json(response_data);
            }
        });
    }
});



/*
* get medium
*/
router.get("/get_medium",function(req,res){
    user_model.get_medium(function(response,msg,code){
        if(response == null){
            response_data = {
                code: code,
                message: msg
            };
            res.status(200);
            res.json(response_data);
        }
        else {
            response_data = {
                code: code,
                message: msg,
                data: response
            };
            res.status(200);
            res.json(response_data);
        }
    });
});


/*
* get class_category
*/
router.get("/get_class_category",function(req,res){
    user_model.get_class_category(function(response,msg,code){
        if(response == null){
            response_data = {
                code: code,
                message: msg
            };
            res.status(200);
            res.json(response_data);
        }
        else {
            response_data = {
                code: code,
                message: msg,
                data: response
            };
            res.status(200);
            res.json(response_data);
        }
    });
});


/*
* get standard
*/
router.get("/get_standard",function(req,res){

    let rules = {
        class_category_id:'required'
    }
    const messages = {
        'required': 'The :attr field is required',
    }
    // var request = {};
    // if(req.body.institute_id != undefined ){
        var request = JSON.parse(req.body);
    // }
    let v = Validator.make(request, rules, messages)
    if (v.fails()) {
        let Validator_errors = v.getErrors();
        for (let key in Validator_errors) {
            error = Validator_errors[key][0];
            break;
        }
        response_data = {
            code: '0',
            message: error
        };
        res.status(200);
        res.json(response_data);
        
    }
    else
    {   
        user_model.get_standard(request,function(response,msg,code){
            if(response == null){
                response_data = {
                    code: code,
                    message: msg
                };
                res.status(200);
                res.json(response_data);
            }
            else {
                response_data = {
                    code: code,
                    message: msg,
                    data: response
                };
                res.status(200);
                res.json(response_data);
            }
        });
    }
});


/*
* get subject
*/
router.get("/get_subject",function(req,res){

    let rules = {
        standard_id:'required'
    }
    const messages = {
        'required': 'The :attr field is required',
    }
    // var request = {};
    // if(req.body.institute_id != undefined ){
        var request = JSON.parse(req.body);
    // }
    let v = Validator.make(request, rules, messages)
    if (v.fails()) {
        let Validator_errors = v.getErrors();
        for (let key in Validator_errors) {
            error = Validator_errors[key][0];
            break;
        }
        response_data = {
            code: '0',
            message: error
        };
        res.status(200);
        res.json(response_data);
        
    }
    else
    {   
        user_model.get_subject(request,function(response,msg,code){
            if(response == null){
                response_data = {
                    code: code,
                    message: msg
                };
                res.status(200);
                res.json(response_data);
            }
            else {
                response_data = {
                    code: code,
                    message: msg,
                    data: response
                };
                res.status(200);
                res.json(response_data);
            }
        });
    }
});



/*
* get university
*/
router.get("/get_university",function(req,res){
    user_model.get_university(function(response,msg,code){
        if(response == null){
            response_data = {
                code: code,
                message: msg
            };
            res.status(200);
            res.json(response_data);
        }
        else {
            response_data = {
                code: code,
                message: msg,
                data: response
            };
            res.status(200);
            res.json(response_data);
        }
    });
});


/*
* get degress
*/
router.get("/get_degress",function(req,res){
    user_model.get_degress(function(response,msg,code){
        if(response == null){
            response_data = {
                code: code,
                message: msg
            };
            res.status(200);
            res.json(response_data);
        }
        else {
            response_data = {
                code: code,
                message: msg,
                data: response
            };
            res.status(200);
            res.json(response_data);
        }
    });
});



/*
* get exam
*/
router.get("/get_exam",function(req,res){
    user_model.get_exam(function(response,msg,code){
        if(response == null){
            response_data = {
                code: code,
                message: msg
            };
            res.status(200);
            res.json(response_data);
        }
        else {
            response_data = {
                code: code,
                message: msg,
                data: response
            };
            res.status(200);
            res.json(response_data);
        }
    });
});



/*
*  add register
*/
router.get("/add_register",function(req,res){

    let rules = {
        username:'required',
        institute_id:'required',
        board_id:'',
        medium_id:'',
        class_category_id:'',
        standard_id:'',
        university_id:'',
        degress_id:'',
        exam_id:'',
        subject:'',
    }
    const messages = {
        'required': 'The :attr field is required',
    }
    // var request = {};
    // if(req.body.institute_id != undefined ){
        var request = JSON.parse(req.body);
    // }
    let v = Validator.make(request, rules, messages)
    if (v.fails()) {
        let Validator_errors = v.getErrors();
        for (let key in Validator_errors) {
            error = Validator_errors[key][0];
            break;
        }
        response_data = {
            code: '0',
            message: error
        };
        res.status(200);
        res.json(response_data);
        
    }
    else
    {   
        user_model.add_register(request,function(response,msg,code){
            if(response == null){
                response_data = {
                    code: code,
                    message: msg
                };
                res.status(200);
                res.json(response_data);
            }
            else {
                response_data = {
                    code: code,
                    message: msg,
                    data: response
                };
                res.status(200);
                res.json(response_data);
            }
        });
    }
});


module.exports = router;