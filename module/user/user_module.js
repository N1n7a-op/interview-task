var con = require('../../config/database');
var asyncloop = require('asyncloop');

var user_module = {

    get_institute: function(callback){
        con.query(`SELECT * FROM tbl_institute`,function(err,result){
            if(!err){
                if(result.length > 0){
                    callback(result,'Institute found',1)
                }else{
                    callback(null,'No institute found',0)
                }
            }else{
                callback(null,'Something went wrong',0)
            }
        });
    },

    get_board: function(req,callback){
        con.query(`SELECT * FROM tbl_borad where institute_id = ${req.institute_id}`,function(err,result){
            if(!err){
                if(result.length > 0){
                    callback(result,'Borad found',1)
                }else{
                    callback(null,'No borad found',0)
                }
            }else{
                callback(null,'Something went wrong',0)
            }
        });
    },

    get_medium: function(callback){
        con.query(`SELECT * FROM tbl_medium`,function(err,result){
            if(!err){
                if(result.length > 0){
                    callback(result,'Medium found',1)
                }else{
                    callback(null,'No medium found',0)
                }
            }else{
                callback(null,'Something went wrong',0)
            }
        });
    },

    get_class_category: function(callback){
        con.query(`SELECT * FROM tbl_class_category`,function(err,result){
            if(!err){
                if(result.length > 0){
                    callback(result,'Class category found',1)
                }else{
                    callback(null,'No class category found',0)
                }
            }else{
                callback(null,'Something went wrong',0)
            }
        });
    },

    get_standard: function(req,callback){
        con.query(`SELECT * FROM tbl_standard where class_category_id = ${req.class_category_id}`,function(err,result){
            if(!err){
                if(result.length > 0){
                    callback(result,'Standard found',1)
                }else{
                    callback(null,'No standard found',0)
                }
            }else{
                callback(null,'Something went wrong',0)
            }
        });
    },


    get_subject: function(req,callback){
        con.query(`SELECT * FROM tbl_subject where standard_id = ${req.standard_id}`,function(err,result){
            if(!err){
                if(result.length > 0){
                    callback(result,'Subject found',1)
                }else{
                    callback(null,'No subject found',0)
                }
            }else{
                callback(null,'Something went wrong',0)
            }
        });
    },

    get_university: function(callback){
        con.query(`SELECT * FROM tbl_university`,function(err,result){
            if(!err){
                if(result.length > 0){
                    callback(result,'University found',1)
                }else{
                    callback(null,'No university found',0)
                }
            }else{
                callback(null,'Something went wrong',0)
            }
        });
    },


    get_exam: function(callback){
        con.query(`SELECT * FROM tbl_exam`,function(err,result){
            if(!err){
                if(result.length > 0){
                    callback(result,'exam found',1)
                }else{
                    callback(null,'No exam found',0)
                }
            }else{
                callback(null,'Something went wrong',0)
            }
        });
    },

    add_register: function(req,callback){
        var parms = {
            username: req.username,
            institute_id: req.institute_id,
            board_id: req.board_id != undefined ? req.board_id : '',
            medium_id: req.medium_id != undefined ? req.medium_id : '',
            class_category_id: req.class_category_id != undefined ? req.class_category_id : '',
            standard_id: req.standard_id != undefined ? req.standard_id : '',
            university_id: req.university_id != undefined ? req.university_id : '',
            degress_id: req.degress_id != undefined ? req.degress_id : '',
            exam_id: req.exam_id != undefined ? req.exam_id : '',
        }
        con.query(`INSERT INTO tbl_register SET = ?`,{parms},function(err,result){
            if(!err){
                if(result.length > 0){
                    if(req.subject != undefined && req.subject > 0){
                        asyncloop(req.subject ,function(item,next){
                            var parms_sub = {
                                register_id: result.insertId,
                                subject_id : item.subject_id
                            }
                            con.query(`INSERT INTO tbl_register_subject SET = ?`,{parms_sub},function(err,result){
                                if(!err){
                                    next();
                                }else{
                                    next();
                                }
                            })
                        },function(){
                            callback(true,'register successfully',1)
                        })
                    }
                }else{
                    callback(null,'register failed',0)
                }
            }else{
                callback(null,'Something went wrong',0)
            }
        });
    },



};

module.exports = user_module;