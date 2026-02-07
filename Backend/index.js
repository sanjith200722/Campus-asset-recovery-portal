const express=require("express");
const mysql=require("mysql2");
const bcrypt=require("bcrypt");
const multer=require("multer");
const cors=require("cors");
const path=require("path");
const app=express();
app.use(cors());
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, "uploads/");
    },
    filename: (req,file,cb) =>{
        cb(null,Date.now()+"-"+file.originalname);
    }
});
const upload=multer({storage});
app.use(express.json());
app.use("/uploads",express.static(path.join(__dirname,"uploads")));

const db=mysql.createConnection({
    host:"localhost",
    user:"recoveruser",
    password:"password123",
    database:"recoverdb"
});

app.post("/register",upload.single("profilepic"),async(req,res)=>{
    console.log("FILE:",req.file);
    const profpic=req.file?req.file.filename:null;
    const{Name,userName,PhonNo,password}=req.body;
    const hashedPassword=await bcrypt.hash(password,10);
    db.query(
        "insert into userlogin (username,name,phoneNo,profpic,password) values(?,?,?,?,?)",
        [userName,Name,PhonNo,profpic,hashedPassword],
        (err,result)=>{
                if(err==`Error: Duplicate entry '${userName}' for key 'PRIMARY'`){
                    console.log("duplicate data");
                    return res.status(409).json({
                    message:"already exists"
                });
                }else
                 if(err){
                console.log("Data insert failed");
                console.log("my sql error",err);
                return res.status(500).json({
                    message:"Data insert failed",
                    error:err.sqlMessage || err.message
                });
        }else{
            console.log("User registered successfully");
        return res.status(200).json({
            message:"User registered successfully",
        });
    }  
        }
    );
});  

app.post("/login",upload.none(),(req,res)=>{
    console.log("BODY:",req.body);
    console.log("TYPE OF BODY:",typeof req.body);
    const{user,password}=req.body;
    if (!user || !password) {
        return res.status(400).json({ message: "Missing credentials" });
    }
    const username=String(user);
    db.query(
        "select * from userlogin where username= ? ",
        [username],
        async(err,result)=>{
            console.log(err);
            if(!result || result.length===0){
                return res.status(404).json({
                    message:"User not found"
                });
            }
            const user=result[0];
            const isMatch=await bcrypt.compare(password,user.password);
            if(!isMatch){
                return res.status(401).json({
                    message:"Invalid password"
                });
            }
              return res.status(200).json({
                message:"login successfull",
                username:user.username,
                name:user.name,
                phoneNo:user.phoneNo,
                profpic:user.profpic,
                profpic_type:user.profpic_type
              });
        }
    );
});

app.post("/post",upload.single("itempic"),async(req,res)=>{
    const itempic=req.file?req.file.filename:null;
    const{username,type,itemName,catgory,lfLocation,lfDate,discription}=req.body;
    console.log(username);
    db.query(
        "insert into recover_main (username,item_name,catogary,type,description,image,date,location) values(?,?,?,?,?,?,?,?)",
        [username,itemName,catgory,type,discription,itempic,lfDate,lfLocation],
        (err,result)=>{ 
            if(err){
                console.log("Data insert failed");
                console.log("my sql error",err);
                return res.status(500).json({
                    message:"Data insert failed"             
                });
        }
        console.log("Item posted scussfully");
        return res.status(200).json({
            message:"Item posted scussfully"
        });       
        }
    );
});  

app.post("/post_upload",upload.none(),async(req,res)=>{
    if(req.body.message=="Retrive data"){
        db.query(
            "select userlogin.name,userlogin.phoneNo,userlogin.profpic,recover_main. * from recover_main join userlogin on recover_main.username=userlogin.username;",
            (err,result)=>{ 
                if(!result || result.length===0){
                return res.status(404).json({
                    message:"Data dont exist"
                });
            }
            if(err){
                    console.log(err);
                    return res.status(500).json({
                        message:"Data base error"
                    })
                }
                return res.status(200).json({
                    upload_data:{
                        result
                    }, 
                    message:"Data retrived successfully"
                })
            }
        );
    }
});  

app.post("/user_upload",upload.none(),async(req,res)=>{
    if(req.body.message=="Retrive prof data"){
        const{UserName}=req.body;
        db.query(
            "select userlogin.name,userlogin.phoneNo,userlogin.profpic,recover_main. * from recover_main join userlogin on recover_main.username=userlogin.username where userlogin.username=?;",
            [UserName],
            (err,result)=>{ 
                if(!result || result.length===0){
                return res.status(404).json({
                    message:"Data dont exist"
                });
            }
            if(err){
                    console.log(err);
                    return res.status(500).json({
                        message:`Data base error: ${err}`
                    })
                }
                return res.status(200).json({
                        result
                })
        }
        );
}
});  
app.post("/refreshuserdata",upload.none(),async(req,res)=>{
    if(req.body.message=="Retrive prof data"){
        const{user}=req.body;
        db.query(
            "select username,name,phoneNo,profpic from userlogin where username=?;",
            [user],
            (err,result)=>{ 
                if(!result || result.length===0){
                return res.status(404).json({
                    message:"Data dont exist"
                });
            }
            if(err){
                    console.log(err);
                    return res.status(500).json({
                        message:`Data base error: ${err}`
                    })
                }
                return res.status(200).json({
                    upload_data:{
                        result
                    }, 
                    message:"login successfull"
                })
        }
        );
}
});

app.post("/delete_post",upload.none(),async(req,res)=>{
        const{username,item_id}=req.body;
        db.query(
            "delete from recover_main where username=? and id=?;",
            [username,item_id],
            (err,result)=>{ 
                console.log("username:",username);
                console.log("id:",item_id);
                console.log("final result:",result);
                if(err){
                    console.log(err);
                    return res.status(500).json({
                        message:`Data base error: ${err}`
                    })
                }
                return res.status(200).json({
                    message:"Post deleted successfully"
                })
            }
        );
});  

app.post("/delete_account",upload.none(),async(req,res)=>{
        const{username}=req.body;
        db.query(
            "delete from userlogin where username=?;",
            [username],
            (err,result)=>{ 
                console.log("username:",username);
                console.log("final result:",result);
                if(err){
                    console.log(err);
                    return res.status(500).json({
                        message:`Data base error: ${err}`
                    })
                }
                return res.status(200).json({ 
                    message:"Account deleted successfully"
                })
            }
        );
});  

app.post("/filter_upload",upload.none(),async(req,res)=>{
    if(req.body.message=="Retrive fill data"){
    const{sletcatogary,filttype}=req.body;
    db.query(
        "select userlogin.name,userlogin.phoneNo,userlogin.profpic,recover_main. * from recover_main join userlogin on recover_main.username=userlogin.username where recover_main.type=? and recover_main.catogary=?;",
        [filttype,sletcatogary],
        (err,result)=>{
        if(err){
                    console.log(err);
                    return res.status(500).json({
                        message:`Data base error: ${err}`
                    })
                }
        if(!result || result.length===0){
                return res.status(404).json({
                    message:"Data dont exist"
        });
    }else
        return res.status(200).json({
                        result
        });
   }
    );
    }
});
app.get("/",(req,res)=>{
    res.send("Backend is running")
})
app.listen(3000,()=>{
    console.log("Server running on port 3000");
});                                                                                                                