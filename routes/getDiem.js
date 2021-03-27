const express = require("express");
const Router = express.Router();
const mysql = require("../configs/database");
const check = require('../ham/checkid');
const getkhoa = require('../ham/getKhoa');
const getkhoahoc = require('../ham/getkhoahoc');

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
                mysql.query(`SELECT * FROM CK${khoahoc} WHERE COLUMN2 = ?`,[post_data.idStudent],(err, rows)=>{
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
                            "Kết Quả Được Cập Nhật Lần Cuối Ngày 25/03/2021, Lưu ý chỉ mang tính chất tham khảo"
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
            if(khoahoc =="17" || khoahoc =="18" || khoahoc =="19" || khoahoc =="20"){
                mysql.query(`SELECT * FROM DD${khoahoc} WHERE COLUMN2 = ?`,[post_data.idStudent],(err, rows)=>{
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
                            "Kết Quả Được Cập Nhật Lần Cuối Ngày 25/03/2021, Lưu ý chỉ mang tính chất tham khảo"
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
            if(khoahoc =="17" || khoahoc =="18" || khoahoc =="19" || khoahoc =="20"){
                mysql.query(`SELECT * FROM CNTT${khoahoc} WHERE COLUMN2 = ?`,[post_data.idStudent],(err, rows)=>{
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
                            "Kết Quả Được Cập Nhật Lần Cuối Ngày 25/03/2021, Lưu ý chỉ mang tính chất tham khảo"
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
                  console.log(err);
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
            if(khoahoc =="17" || khoahoc =="18" || khoahoc =="19" || khoahoc =="20"){
                mysql.query(`SELECT * FROM TP${khoahoc} WHERE COLUMN2 = ?`,[post_data.idStudent],(err, rows)=>{
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
                            "Kết Quả Được Cập Nhật Lần Cuối Ngày 25/03/2021, Lưu ý chỉ mang tính chất tham khảo"
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
            if(khoahoc =="17" || khoahoc =="18" || khoahoc =="19" || khoahoc =="20"){
                mysql.query(`SELECT * FROM KD${khoahoc} WHERE COLUMN2 = ?`,[post_data.idStudent],(err, rows)=>{
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
                            "Kết Quả Được Cập Nhật Lần Cuối Ngày 25/03/2021, Lưu ý chỉ mang tính chất tham khảo"
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
            if(khoahoc =="17" || khoahoc =="18" || khoahoc =="19" || khoahoc =="20"){
                mysql.query(`SELECT * FROM XD${khoahoc} WHERE COLUMN2 = ?`,[post_data.idStudent],(err, rows)=>{
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
                            "Kết Quả Được Cập Nhật Lần Cuối Ngày 25/03/2021, Lưu ý chỉ mang tính chất tham khảo"
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
            if(khoahoc =="17" || khoahoc =="18" || khoahoc =="19" || khoahoc =="20"){
                mysql.query(`SELECT * FROM Des${khoahoc} WHERE COLUMN2 = ?`,[post_data.idStudent],(err, rows)=>{
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
                            "Kết Quả Được Cập Nhật Lần Cuối Ngày 25/03/2021, Lưu ý chỉ mang tính chất tham khảo"
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


Router.post('/top', (req, response) => {
  var post_data = req.body;
  if(post_data.top<100 || post_data.top >1){
    mysql.query(`SELECT * From ${post_data.khoa} ORDER BY Column35 DESC LIMIT ${post_data.top}`, (err, rows) => {
    if(!err){
      if(rows.length > 0){
        var text="";
        var i=1;
        rows.forEach(function(item) {
            text += `${i}./`+ item.Column3+" "+ item.Column4 + " ĐTB:"+item.Column35 + " Lớp: "+item.Column5 +"\n ";
            i++;
        });

        return response.status(200).json({
          "messages": [
            {
              "text": text
            }
          ]
        })
      }else{
        return response.status(200).json({
          "messages": [
            {
              "text": "Không có dữ liệu bạn cần"
            }
          ]
        })
      }

    }else{
      console.log(err+"");
     return response.status(200).json({
        "messages": [
          {
            "text": "Server đang cập nhật."
          }
        ]
      });
    }
    })
  }else{
    return response.status(200).json({
      "messages": [
        {
          "text": "Bớt truy vấn óc chó đi nào.."
        }
      ]
    })
  }

})

Router.get('/list', function (req, response){
  mysql.query('SELECT table_name FROM information_schema.tables WHERE table_schema = "stu_mark"', (err, rows) => {
    if(!err){
      if(rows.length > 0){
        var text="";
        var i=1;
        console.log(rows);
        rows.forEach(function(item) {
            text += item.TABLE_NAME+ " \n ";
            i++;
        });

        return response.status(200).json({
          "messages": [
            {
              "text": text
            }
          ]
        })
      }else{
        return response.status(200).json({
          "messages": [
            {
              "text": "Không có dữ liệu bạn cần"
            }
          ]
        })
      }

    }else{
      console.log(err+"");
     return response.status(200).json({
        "messages": [
          {
            "text": "Server đang cập nhật."
          }
        ]
      });
    }
  })
})

Router.get('/customs', (req, response) => {
  try{
    mysql.query(req.query, (err, rows) => {
    if(!err){
      if(rows.length > 0){
        return response.status(200).json({
          "messages": [
            {
              "text": rows
            }
          ]
        })
      }else{
        return response.status(200).json({
          "messages": [
            {
              "text": "Không có dữ liệu bạn cần"
            }
          ]
        })
      }

    }else{
      console.log(err+"");
     return response.status(200).json({
        "messages": [
          {
            "text": "Câu truy vấn ngu loz"
          }
        ]
      });
    }
  })
  }catch(err){
    return response.status(200).json({
      "messages": [
        {
          "text": "Lỗi rồi 3 ơi :)))"
        }
      ]
    });
  }
})

module.exports =Router;