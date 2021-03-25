const express = require("express");
const Router = express.Router();
const mysql = require("../configs/database");
const check = require('../ham/checkid');
const getkhoa = require('../ham/getKhoa');
const getkhoahoc = require('../ham/getkhoahoc');
const request = require('request');

Router.post('/', (req, res) => {
    var post_data = req.body;
    let kq = check(post_data.idStudent);
    if(kq == true){
        let kql = getkhoa(post_data.idStudent);
       // console.log(kql);
        let khoahoc = getkhoahoc(post_data.idStudent);
    // console.log(khoahoc);
        if(kql == "1"){
            /// Cơ điện tử
            if(khoahoc =="17" || khoahoc =="18" || khoahoc =="19" || khoahoc =="20"){
                mysql.query(`SELECT * FROM ck${khoahoc} WHERE COLUMN2 = "?"`,[post_data.idStudent],(err, rows)=>{
                if(!err){
                    if(rows.length>0){
                       //sendMessage(post_data.userId, rows[0])
                       res.status(200).json({
                        "messages": [
                          {
                            "text": 
                            "💳 MSSV: "+ rows[0].Column2 + "\n"+
                            "📕 Sinh Viên: " + rows[0].Column3+ " "+ rows[0].Column4 + "\n"+
                            "Lớp: " + rows[0].Column5 + "\n"+ "\n" +
                            "(Hệ 10)"+ "\n"+
                            "Điểm tích lũy: " + rows[0].Column35 +"\n"+
                            "Môn học tích lũy: " + rows[0].Column37 + " Môn học" +"\n" +
                            "Tín chỉ tích lũy: " + rows[0].Column36 + " Tín chỉ" + "\n" + "\n" +
                            "Kết Quả Được Cập Nhật Lần Cuối Ngày 14/09/2020, Lưu ý chỉ mang tính chất tham khảo"
                          }
                        ]
                      })

                    }else{
                        res.status(200).json({
                            "messages": [
                              {
                                "text": "Không tìm thấy sinh viên"
                              }
                            ]
                          })
                    }
                }else{
                    res.status(200).json({
                        "messages": [
                          {
                            "text": "Server đang cập nhật."
                          }
                        ]
                      })
                }
                })
            }else{
                res.status(200).json({
                    "messages": [
                      {
                        "text": `Chưa có dữ liệu khóa D${khoahoc}, chúng tôi sẽ cập nhật ngay sau khi có.`
                      }
                    ]
                  })
            }
            
        }else if (kql == "3" || kql == "4"){
            /// Điện
            if(khoahoc =="17" || khoahoc =="18" || khoahoc =="19"|| khoahoc =="20"){
                mysql.query(`SELECT * FROM dd${khoahoc} WHERE COLUMN2 = "?"`,[post_data.idStudent],(err, rows)=>{
                if(!err){
                    if(rows.length>0){
                       //sendMessage(post_data.userId, rows[0])
                       res.status(200).json({
                        "messages": [
                          {
                            "text": 
                            "💳 MSSV: "+ rows[0].Column2 + "\n"+
                            "📕 Sinh Viên: " + rows[0].Column3+ " "+ rows[0].Column4 + "\n"+
                            "Lớp: " + rows[0].Column5 + "\n"+ "\n" +
                            "(Hệ 10)"+ "\n"+
                            "Điểm tích lũy: " + rows[0].Column35 +"\n"+
                            "Môn học tích lũy: " + rows[0].Column37 + " Môn học" +"\n" +
                            "Tín chỉ tích lũy: " + rows[0].Column36 + " Tín chỉ" + "\n" + "\n" +
                            "Kết Quả Được Cập Nhật Lần Cuối Ngày 14/09/2020, Lưu ý chỉ mang tính chất tham khảo"
                          }
                        ]
                      })

                    }else{
                        res.status(200).json({
                            "messages": [
                              {
                                "text": "Không tìm thấy sinh viên"
                              }
                            ]
                          })
                    }
                }else{
                    res.status(200).json({
                        "messages": [
                          {
                            "text": "Server đang cập nhật."
                          }
                        ]
                      })
                }
                })
            }else{
                res.status(200).json({
                    "messages": [
                      {
                        "text": `Chưa có dữ liệu khóa D${khoahoc}, chúng tôi sẽ cập nhật ngay sau khi có.`
                      }
                    ]
                  })
            }
            

        }else if (kql == "5"){
            /// Công nghệ thông tin
            if(khoahoc =="17" || khoahoc =="18" || khoahoc =="19"|| khoahoc =="20"){
                mysql.query(`SELECT * FROM cntt${khoahoc} WHERE COLUMN2 = "?"`,[post_data.idStudent],(err, rows)=>{
                if(!err){
                    if(rows.length>0){
                       //sendMessage(post_data.userId, rows[0])
                       res.status(200).json({
                        "messages": [
                          {
                            "text": 
                            "💳 MSSV: "+ rows[0].Column2 + "\n"+
                            "📕 Sinh Viên: " + rows[0].Column3+ " "+ rows[0].Column4 + "\n"+
                            "Lớp: " + rows[0].Column5 + "\n"+ "\n" +
                            "(Hệ 10)"+ "\n"+
                            "Điểm tích lũy: " + rows[0].Column35 +"\n"+
                            "Môn học tích lũy: " + rows[0].Column37 + " Môn học" +"\n" +
                            "Tín chỉ tích lũy: " + rows[0].Column36 + " Tín chỉ" + "\n" + "\n" +
                            "Kết Quả Được Cập Nhật Lần Cuối Ngày 14/09/2020, Lưu ý chỉ mang tính chất tham khảo"
                          }
                        ]
                      })

                    }else{
                        res.status(200).json({
                            "messages": [
                              {
                                "text": "Không tìm thấy sinh viên"
                              }
                            ]
                          })
                    }
                }else{
                    res.status(200).json({
                        "messages": [
                          {
                            "text": "Server đang cập nhật."
                          }
                        ]
                      })
                }
            })
            }else{
                res.status(200).json({
                    "messages": [
                      {
                        "text": `Chưa có dữ liệu khóa D${khoahoc}, chúng tôi sẽ cập nhật ngay sau khi có.`
                      }
                    ]
                  })
            }
            

        }else if (kql == "6"){
            /// Thực phẩm
            if(khoahoc =="17" || khoahoc =="18" || khoahoc =="19"|| khoahoc =="20"){
                mysql.query(`SELECT * FROM tp${khoahoc} WHERE COLUMN2 = "?"`,[post_data.idStudent],(err, rows)=>{
                if(!err){
                    if(rows.length>0){
                       //sendMessage(post_data.userId, rows[0])
                       res.status(200).json({
                        "messages": [
                          {
                            "text": 
                            "💳 MSSV: "+ rows[0].Column2 + "\n"+
                            "📕 Sinh Viên: " + rows[0].Column3+ " "+ rows[0].Column4 + "\n"+
                            "Lớp: " + rows[0].Column5 + "\n"+ "\n" +
                            "(Hệ 10)"+ "\n"+
                            "Điểm tích lũy: " + rows[0].Column35 +"\n"+
                            "Môn học tích lũy: " + rows[0].Column37 + " Môn học" +"\n" +
                            "Tín chỉ tích lũy: " + rows[0].Column36 + " Tín chỉ" + "\n" + "\n" +
                            "Kết Quả Được Cập Nhật Lần Cuối Ngày 14/09/2020, Lưu ý chỉ mang tính chất tham khảo"
                          }
                        ]
                      })

                    }else{
                        res.status(200).json({
                            "messages": [
                              {
                                "text": "Không tìm thấy sinh viên"
                              }
                            ]
                          })
                    }
                }else{
                    res.status(200).json({
                        "messages": [
                          {
                            "text": "Server đang cập nhật."
                          }
                        ]
                      })
                }
            })
            }else{
                res.status(200).json({
                    "messages": [
                      {
                        "text": `Chưa có dữ liệu khóa D${khoahoc}, chúng tôi sẽ cập nhật ngay sau khi có.`
                      }
                    ]
                  })
            }
            

        }else if (kql == "7"){
            /// Quản trị
            if(khoahoc =="17" || khoahoc =="18" || khoahoc =="19"|| khoahoc =="20"){
                mysql.query(`SELECT * FROM kd${khoahoc} WHERE COLUMN2 = "?"`,[post_data.idStudent],(err, rows)=>{
                if(!err){
                    if(rows.length>0){
                       //sendMessage(post_data.userId, rows[0])
                       res.status(200).json({
                        "messages": [
                          {
                            "text": 
                            "💳 MSSV: "+ rows[0].Column2 + "\n"+
                            "📕 Sinh Viên: " + rows[0].Column3+ " "+ rows[0].Column4 + "\n"+
                            "Lớp: " + rows[0].Column5 + "\n"+ "\n" +
                            "(Hệ 10)"+ "\n"+
                            "Điểm tích lũy: " + rows[0].Column35 +"\n"+
                            "Môn học tích lũy: " + rows[0].Column37 + " Môn học" +"\n" +
                            "Tín chỉ tích lũy: " + rows[0].Column36 + " Tín chỉ" + "\n" + "\n" +
                            "Kết Quả Được Cập Nhật Lần Cuối Ngày 14/09/2020, Lưu ý chỉ mang tính chất tham khảo"
                          }
                        ]
                      })

                    }else{
                        res.status(200).json({
                            "messages": [
                              {
                                "text": "Không tìm thấy sinh viên"
                              }
                            ]
                          })
                    }
                }else{
                    res.status(200).json({
                        "messages": [
                          {
                            "text": "Server đang cập nhật."
                          }
                        ]
                      })
                }
            })
            }else{
                res.status(200).json({
                    "messages": [
                      {
                        "text": `Chưa có dữ liệu khóa D${khoahoc}, chúng tôi sẽ cập nhật ngay sau khi có.`
                      }
                    ]
                  })
            }
            

        }else if (kql == "8"){
            /// Kỹ thuật công trình
            if(khoahoc =="17" || khoahoc =="18" || khoahoc =="19"|| khoahoc =="20"){
                mysql.query(`SELECT * FROM xd${khoahoc} WHERE COLUMN2 = "?"`,[post_data.idStudent],(err, rows)=>{
                if(!err){
                    if(rows.length>0){
                       //sendMessage(post_data.userId, rows[0])
                       res.status(200).json({
                        "messages": [
                          {
                            "text": 
                            "💳 MSSV: "+ rows[0].Column2 + "\n"+
                            "📕 Sinh Viên: " + rows[0].Column3+ " "+ rows[0].Column4 + "\n"+
                            "Lớp: " + rows[0].Column5 + "\n"+ "\n" +
                            "(Hệ 10)"+ "\n"+
                            "Điểm tích lũy: " + rows[0].Column35 +"\n"+
                            "Môn học tích lũy: " + rows[0].Column37 + " Môn học" +"\n" +
                            "Tín chỉ tích lũy: " + rows[0].Column36 + " Tín chỉ" + "\n" + "\n" +
                            "Kết Quả Được Cập Nhật Lần Cuối Ngày 14/09/2020, Lưu ý chỉ mang tính chất tham khảo"
                          }
                        ]
                      })

                    }else{
                        res.status(200).json({
                            "messages": [
                              {
                                "text": "Không tìm thấy sinh viên"
                              }
                            ]
                          })
                    }
                }else{
                    res.status(200).json({
                        "messages": [
                          {
                            "text": "Server đang cập nhật."
                          }
                        ]
                      })
                }
            })
            }else{
                res.status(200).json({
                    "messages": [
                      {
                        "text": `Chưa có dữ liệu khóa D${khoahoc}, chúng tôi sẽ cập nhật ngay sau khi có.`
                      }
                    ]
                  })
            }
            

        }else if (kql == "9"){
            /// Des
            if(khoahoc =="17" || khoahoc =="18" || khoahoc =="19"|| khoahoc =="20"){
                mysql.query(`SELECT * FROM des${khoahoc} WHERE COLUMN2 = "?"`,[post_data.idStudent],(err, rows)=>{
                if(!err){
                    if(rows.length>0){
                       //sendMessage(post_data.userId, rows[0])
                       res.status(200).json({
                        "messages": [
                          {
                            "text": 
                            "💳 MSSV: "+ rows[0].Column2 + "\n"+
                            "📕 Sinh Viên: " + rows[0].Column3+ " "+ rows[0].Column4 + "\n"+
                            "Lớp: " + rows[0].Column5 + "\n"+ "\n" +
                            "(Hệ 10)"+ "\n"+
                            "Điểm tích lũy: " + rows[0].Column35 +"\n"+
                            "Môn học tích lũy: " + rows[0].Column37 + " Môn học" +"\n" +
                            "Tín chỉ tích lũy: " + rows[0].Column36 + " Tín chỉ" + "\n" + "\n" +
                            "Kết Quả Được Cập Nhật Lần Cuối Ngày 14/09/2020, Lưu ý chỉ mang tính chất tham khảo"
                          }
                        ]
                      })

                    }else{
                        res.status(200).json({
                            "messages": [
                              {
                                "text": "Không tìm thấy sinh viên"
                              }
                            ]
                          })
                    }
                }else{
                    res.status(200).json({
                        "messages": [
                          {
                            "text": "Server đang cập nhật."
                          }
                        ]
                      })
                }
            })
            }else{
                res.status(200).json({
                    "messages": [
                      {
                        "text": `Chưa có dữ liệu khóa D${khoahoc}, chúng tôi sẽ cập nhật ngay sau khi có.`
                      }
                    ]
                  })
            }
            

        }else{
            res.status(200).json({
                "messages": [
                  {
                    "text": "Không tìm thấy khoa. Vui Lòng Thử Lại, nếu có vấn đề hãy để lại góp ý. Cảm ơn"
                  }
                ]
              })
        }
    }else{
        res.status(200).json({
            "messages": [
              {
                "text": "Cú Pháp Sai"
              }
            ]
          })
    }
})


module.exports =Router;