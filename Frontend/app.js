
// backend request
function dataexit(cls){
    document.querySelector(cls).innerHTML="";
    let dataexits=document.createElement("div");
    dataexits.className="dataexits";
    dataexits.innerHTML="Zero Postss"
    document.querySelector(cls).prepend(dataexits);
}
function count_itm(Rawdata,cls){
     document.querySelector(cls).innerHTML="Total posts: 0";
    let count=0;
    Rawdata.forEach(row =>{
        count++;
    });
    document.querySelector(cls).innerHTML="Total posts: "+count;
}
function create_postcard(Rawdata,cls){
    if(Rawdata){
        document.querySelector(cls).innerHTML="";
        Rawdata.forEach(row =>{
                        let cards=document.createElement("div");
                        cards.className="cards";
                        let card_1=document.createElement("div");
                        card_1.className="card_1";
                        let itmPic=document.createElement("div");
                        itmPic.className="itmPic";
                        let itmPicu=document.createElement("img");
                        itmPicu.className="itmPicu";
                        itmPicu.alt="";
                        if(!row.image){
                            itmPicu.src="image/Untitled.png";
                        }else{
                            itmPicu.src=`http://localhost:3000/uploads/${row.image}`;
                        }
                        let item_id=document.createElement("span")
                        item_id.className="item_id";
                        item_id.innerHTML=row.id;
                        let profoile=document.createElement("div");
                        profoile.className="profoile";
                        let Cpropic=document.createElement("div");
                        Cpropic.className="Cpropic"; 
                        let Cpropicu=document.createElement("img");
                        Cpropicu.className="Cpropicu";
                        Cpropicu.alt="";
                        if(!row.profpic){
                            Cpropicu.src="image/usrpc.jpg";
                        }else{
                            Cpropicu.src=`http://localhost:3000/uploads/${row.profpic}`;
                        }
                        let cUName=document.createElement("p");
                        cUName.className="cUName";
                        cUName.innerHTML=row.name;
                        let coNo=document.createElement("div");
                        coNo.className="coNo";
                        coNo.innerHTML=`+91 ${row.phoneNo}`
                        let cProfImg=document.createElement("img");
                        cProfImg.className="cProfImg";
                        cProfImg.src="image/phone-call.png";
                        let card_2=document.createElement("div");
                        card_2.className="card_2";
                        let type=document.createElement("div");
                        type.className="type";
                        type.innerHTML=`Type : ${row.type}`;
                        let CFLloc=document.createElement("div");
                        CFLloc.className="CFLloc";
                        CFLloc.innerHTML=row.location;
                        let CFLdate=document.createElement("div");
                        CFLdate.className="CFLdate";
                        CFLdate.innerHTML=row.date;
                        let Cdiscription=document.createElement("div");
                        Cdiscription.className="Cdiscription";
                        Cdiscription.innerHTML=row.description;
                        let lable1=document.createElement("label")
                        lable1.innerHTML="Found loction:";
                        let lable2=document.createElement("label")
                        lable2.innerHTML="Found date:";
                        let lable3=document.createElement("label")
                        lable3.innerHTML="Description:";
                        document.querySelector(cls).prepend(cards);
                        cards.append(card_1);
                        card_1.append(itmPic);
                        itmPic.append(itmPicu);
                        card_1.append(profoile);
                        profoile.append(Cpropic);
                        Cpropic.append(Cpropicu)
                        profoile.append(cUName);
                        card_1.append(coNo);
                        coNo.prepend(cProfImg);
                        cards.append(card_2);
                        card_2.append(type);
                        card_2.append(lable1);
                        card_2.append(CFLloc);
                        card_2.append(lable2);
                        card_2.append(CFLdate);
                        card_2.append(lable3);
                        card_2.append(Cdiscription);
    });
    }
};

function create_psotprofcard(Rawdata2){
    if(Rawdata2){
        document.querySelector("#Prposts").innerHTML="";
        Rawdata2.forEach(row =>{
                        let cards=document.createElement("div");
                        cards.className="cards";
                        let card_1=document.createElement("div");
                        card_1.className="card_1";
                        let itmPic=document.createElement("div");
                        itmPic.className="itmPic";
                        let itmPicu=document.createElement("img");
                        itmPicu.className="itmPicu";
                        itmPicu.alt="";
                        if(!row.image){
                            itmPicu.src="image/Untitled.png";
                        }else{
                            itmPicu.src=`http://localhost:3000/uploads/${row.image}`;
                        }
                        let item_id=document.createElement("span")
                        item_id.className="item_id";
                        item_id.innerHTML=row.id;
                        let profoile=document.createElement("div");
                        profoile.className="profoile";
                        let Cpropic=document.createElement("div");
                        Cpropic.className="Cpropic"; 
                        let Cpropicu=document.createElement("img");
                        Cpropicu.className="Cpropicu";
                        Cpropicu.alt="";
                        if(!row.profpic){
                            Cpropicu.src="image/usrpc.jpg";
                        }else{
                            Cpropicu.src=`http://localhost:3000/uploads/${row.profpic}`;
                        }
                        let cUName=document.createElement("p");
                        cUName.className="cUName";
                        cUName.innerHTML=row.name;
                        let coNo=document.createElement("div");
                        coNo.className="coNo";
                        coNo.innerHTML=`+91 ${row.phoneNo}`
                        let cProfImg=document.createElement("img");
                        cProfImg.className="cProfImg";
                        cProfImg.src="image/phone-call.png";
                        let card_2=document.createElement("div");
                        card_2.className="card_2";
                        let Delete=document.createElement("div");
                        Delete.className="delete";
                        Delete.innerHTML="Delete post";
                        let type=document.createElement("div");
                        type.className="type";
                        type.innerHTML=`Type : ${row.type}`;
                        let CFLloc=document.createElement("div");
                        CFLloc.className="CFLloc";
                        CFLloc.innerHTML=row.location;
                        let CFLdate=document.createElement("div");
                        CFLdate.className="CFLdate";
                        CFLdate.innerHTML=row.date;
                        let Cdiscription=document.createElement("div");
                        Cdiscription.className="Cdiscription";
                        Cdiscription.innerHTML=row.description;
                        let lable1=document.createElement("label")
                        lable1.innerHTML="Found loction:";
                        let lable2=document.createElement("label")
                        lable2.innerHTML="Found date:";
                        let lable3=document.createElement("label")
                        lable3.innerHTML="Description:";
                        document.querySelector("#Prposts").prepend(cards);
                        cards.append(card_1);
                        card_1.append(itmPic);
                        itmPic.append(itmPicu);
                        card_1.append(profoile);
                        profoile.append(Cpropic);
                        Cpropic.append(Cpropicu);
                        profoile.append(cUName);
                        card_1.append(coNo);
                        coNo.prepend(cProfImg);
                        cards.append(card_2);
                        card_2.append(Delete);
                        card_2.append(item_id);
                        card_2.append(type);
                        card_2.append(lable1);
                        card_2.append(CFLloc);
                        card_2.append(lable2);
                        card_2.append(CFLdate);
                        card_2.append(lable3);
                        card_2.append(Cdiscription);
                    });
    }
};

function post_upload(){
        const formData=new FormData();
    formData.append("message","Retrive data");
    fetch("http://localhost:3000/post_upload",{
         method:"post",
         body:formData
     })
     .then(res => res.json())
     .then(data =>{
        if(data.message=="Data dont exist"){
            dataexit("#posts2");
            dataexit("#posts2");
        }else{
        const rawdata=data.upload_data.result;
        create_postcard(rawdata,"#posts1");
        create_postcard(rawdata,"#posts2");
        count_itm(rawdata,"#totpost1");
        count_itm(rawdata,"#totpost2");
        }
     })
    .catch(err => console.error(err));
}
function usrpost_upload(user){
     const formData2=new FormData();
                formData2.append("message","Retrive prof data");
                formData2.append("UserName",user)
                fetch("http://localhost:3000/user_upload",{
                    method:"post",
                    body:formData2
                })
                .then(res => res.json())
                .then(data =>{
                    if(data.message=="Data dont exist"){
                        dataexit("#Prposts");
                    }else{
                    const rawdata2=data.result;
                    create_psotprofcard(rawdata2);
                    }
                })
                .catch(err => console.error(err));
}

function refreshsign(){
    const formData=new FormData();
             formData.append("user",USerNAme);
             formData.append("password",password);
             fetch("http://localhost:3000/login",{
                method:"post",
                body:formData
              })
             .then(res => res.json())
             .then(data => {
             if(data.message=="User not found"){
                alert(data.message);
                document.getElementById("sighnIn").reset();
             }
             if(data.message=="Invalid password"){
                 alert("wrong password try again.")
             }
            if(data.message=="login successfull"){
                signin.reset();
            if(data.profpic == null){
                 document.getElementById("profilepic1").src="image/usrpc.jpg";
            }else{
            document.getElementById("profilepic1").src=`http://localhost:3000/uploads/${data.profpic}`;
            }
            document.getElementById("loginpage").classList.add("slideup");
            const formData=new FormData();
            formData.append("user",USerNAme);
            formData.append("message","Retrive prof data");
             fetch("http://localhost:3000/refreshuserdata",{
                method:"post",
                body:formData
              })
             .then(res => res.json())
             .then(data => {
             if(data.message=="User not found"){
                alert(data.message);
             }
             if(data.message=="Invalid password"){
                 alert("wrong password try again.")
             }
            if(data.message=="login successfull"){
                const user = data.upload_data.result[0];
                 document.getElementById("profName").innerHTML ="User Name: "+user.username;   
                 document.getElementById("usrName").innerHTML ="Name: "+user.name;
                 document.getElementById("phoneno").innerHTML ="+91 "+user.phoneNo;
            }
})
.catch(err => console.error(err));
            }
})
.catch(err => console.error(err));
}

function refreshusrdata(userdata){
    console.log(userdata);
    const formData=new FormData();
            formData.append("user",userdata);
            formData.append("message","Retrive prof data");
             fetch("http://localhost:3000/refreshuserdata",{
                method:"post",
                body:formData
              })
             .then(res => res.json())
             .then(data => {
             if(data.message=="User not found"){
                alert(data.message);
             }
             if(data.message=="Invalid password"){
                 alert("wrong password try again.")
             }
            if(data.message=="login successfull"){
                const user = data.upload_data.result[0];
                if(user.profpic == null){
                 document.getElementById("profilepic1").src="image/usrpc.jpg";
                 }else{
                     document.getElementById("profilepic1").src=`http://localhost:3000/uploads/${user.profpic}`;
                 }
                 document.getElementById("profName").innerHTML ="User Name: "+user.username;   
                 document.getElementById("usrName").innerHTML ="Name: "+user.name;
                 document.getElementById("phoneno").innerHTML ="+91 "+user.phoneNo;
            }
})
.catch(err => console.error(err));
}


function herorfe(){
    document.getElementById("start_page").classList.add("refresh");
    document.getElementById("start-posts").classList.add("refresh");
    document.getElementById("loginpage").classList.add("refresh");
}
document.getElementById("heronav").addEventListener("click",()=>{
    herorfe();
});
//reload section
window.addEventListener("load",async () => {
    const savedusr=localStorage.getItem("username");
    post_upload();
    // const reflogdata=localStorage.getItem("reflogdata");
    // // if(reflogdata==="true"){
    // //     console.log(reflogdata);
    // //     localStorage.setItem("reflogdata","false");
    // // }
    //     console.log(reflogdata);
        usrpost_upload(savedusr);
        refreshusrdata(savedusr);
    const refdata=sessionStorage.getItem("refdata");
    console.log(refdata);
     if(refdata==="true"){
        sessionStorage.setItem("refdata","false");
        document.getElementById("start_page").classList.add("refresh");
        document.getElementById("start-posts").classList.add("refresh");
        document.getElementById("sighnUp").reset();
        alert("Registered successfully");
    }
});

const signup = document.getElementById("sighnUp");
const sgnup_submit=document.getElementById("sgnup_submit");
    sgnup_submit.addEventListener("click", async function(e){
    e.preventDefault();
    sessionStorage.setItem("refdata","true");
    let name=document.getElementById("regName").value;
    let usrname=document.getElementById("regUsrname").value;
    let phoNo=document.getElementById("regCono").value;
    let image=document.getElementById("regProfpic").files[0];
    let password=document.getElementById("regPassword").value;
    let cnfpassword=document.getElementById("regcnfmPassword").value;
    if(password!==cnfpassword){
        alert("Password don't match!");
        return;
    }
    const formData=new FormData();
    formData.append("Name",name);
    formData.append("userName",usrname);
    formData.append("PhonNo",phoNo);
    formData.append("profilepic",image);
    formData.append("password",password);
    const res=fetch("http://localhost:3000/register",{
        method:"post",
        body:formData
    });
    const data=await res.json();
    signup.reset();
    if(data.message=="already exists"){
        alert("This username is aleready exists/taken")
    }
    if(data.message=="User registered successfully"){
        document.getElementById("reglog_link").click();
    }
});

let usrnamestored;
let USerNAme;
const signin=document.getElementById("sighnIn");
             signin.addEventListener("submit",function(e){
             e.preventDefault();
             USerNAme=document.getElementById("usrname").value;
             password=document.getElementById("Password").value;
             localStorage.setItem("username",USerNAme);
            //  localStorage.setItem("reflogdata","true");
             refreshsign();
             usrpost_upload(USerNAme);
        });



document.getElementById("movenext").addEventListener("click",()=>{
    document.getElementById("start_page").classList="active";
    const formData=new FormData();
    formData.append("message","Retrive data");
    fetch("http://localhost:3000/post_upload",{
         method:"post",
         body:formData
     })
     .then(res => res.json())
     .then(data =>{
        if(data.message=="Data dont exist"){
            dataexit("#posts2");
            dataexit("#posts2");
        }else{
        const rawdata=data.upload_data.result;
        create_postcard(rawdata,"#posts1");
        create_postcard(rawdata,"#posts2");
        count_itm(rawdata,"#totpost1");
        count_itm(rawdata,"#totpost2");
        }
     })
    .catch(err => console.error(err));
});

const post=document.getElementById("FLform");
if(post){
    document.getElementById("sbmtBtn").addEventListener("click",async function(e){
        e.preventDefault(); 
        try{
        let type=document.querySelector('input[name="type1"]:checked').value;
        let itemName=document.getElementById("itName").value;
        let catgory=document.getElementById("selector").value;
        let lfLocation=document.getElementById("location").value;
        let lfDate=document.getElementById("FLDate").value;
        let itempic=document.getElementById("PicImg").files[0];
        let discription=document.getElementById("discription").value;

        const usrnamestored=localStorage.getItem("username");
        console.log(usrnamestored);
        const formData=new FormData();
        formData.append("username",usrnamestored);
        formData.append("type",type);
        formData.append("itemName",itemName);
        formData.append("catgory",catgory);
        formData.append("lfLocation",lfLocation);
        formData.append("lfDate",lfDate);
        formData.append("itempic",itempic);
        formData.append("discription",discription);
        const res =await fetch("http://localhost:3000/post",{
            method:"post",
            body:formData
        });
        const data=await res.json();
           post.reset();
           alert(data.message);
    }
    catch(err){
        alert(err);
    }
    });
}

document.addEventListener("click",function(e){
    const savedusr=localStorage.getItem("username");
    console.log(savedusr)
    if(e.target.classList.contains("delete")){
        const card=e.target.closest(".card_2");
        let lfitmid=card.querySelector(".item_id").innerText;
        console.log(lfitmid)
        const formData=new FormData();
        formData.append("username",savedusr);
        formData.append("item_id",lfitmid);
        fetch("http://localhost:3000/delete_post",{
            method:"post",
            body:formData
        })
        .then(res => res.json())
        .then(data =>{
    const formData=new FormData();
    formData.append("message","Retrive data");
    fetch("http://localhost:3000/post_upload",{
         method:"post",
         body:formData
     })
     .then(res => res.json())
     .then(data =>{
        if(data.message=="Data dont exist"){
            dataexit("#posts2");
            dataexit("#posts2");
        }else{
        const rawdata=data.upload_data.result;
        create_postcard(rawdata,"#posts1");
        create_postcard(rawdata,"#posts2");
        count_itm(rawdata,"#totpost1");
        count_itm(rawdata,"#totpost2");
        }
     })
    .catch(err => console.error(err));
                const formData2=new FormData();
                formData2.append("message","Retrive prof data");
                formData2.append("UserName",savedusr)
                fetch("http://localhost:3000/user_upload",{
                    method:"post",
                    body:formData2
                })
                .then(res => res.json())
                .then(data =>{
                    if(data.message=="Data dont exist"){
                        dataexit("#Prposts");
                    }else{
                    console.log(data.message);
                    const rawdata2=data.result;
                    create_psotprofcard(rawdata2);
                    }
                })
                .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
    }
});

document.getElementById("acdelete").addEventListener("click",()=>{
    const formData=new FormData();
    formData.append("username",USerNAme);
    fetch("http://localhost:3000/delete_account",{
        method:"post",
        body:formData
    })
    .then(res => res.json())
    .then(data =>{
        alert(data.message);
        window.location.href="index.html";
    })
    .catch(err => console.error(err));
});


const filterform1=document.getElementById("filterform1");
filterform1.addEventListener("submit",function(e){
    e.preventDefault();
            filter1.classList.remove("factive");
            let sletcatogary=document.getElementById("fCatogary1").value;
            let filttype=document.querySelector('input[name="ftype1"]:checked').value;
            const formData=new FormData();
            formData.append("sletcatogary",sletcatogary);
            formData.append("filttype",filttype);
            formData.append("message","Retrive fill data");
            fetch("http://localhost:3000/filter_upload",{
            method:"post",
            body:formData
            })
            .then(res => res.json())
            .then(data =>{
                const rawdata=data.result;
        if(data.message=="Data dont exist"){
            dataexit("#posts1");
            count_itm(rawdata,"#totpost1");
        }else{
            console.log(rawdata);
            create_postcard(rawdata,"#posts1");
            count_itm(rawdata,"#totpost1");
        }
     })
    .catch(err => console.error(err));
});
document.getElementById("clearFilter1").addEventListener("click",function(e){
    e.preventDefault();
    const formData=new FormData();
    formData.append("message","Retrive data");
            fetch("http://localhost:3000/post_upload",{
            method:"post",
            body:formData
            })
            .then(res => res.json())
            .then(data =>{
            console.log(data.message);
            const rawdata=data.upload_data.result;
            console.log(rawdata);
            create_postcard(rawdata,"#posts1");
            count_itm(rawdata,"#totpost1");
     })
    .catch(err => console.error(err));
});

const filterform2=document.getElementById("filterform2");
console.log(filterform2);
filterform2.addEventListener("submit",function(e){
    e.preventDefault();
            filter2.classList.remove("factive");
            let sletcatogary=document.getElementById("fCatogary2").value;
            let filttype=document.querySelector('input[name="ftype2"]:checked').value;
            const formData=new FormData();
            formData.append("sletcatogary",sletcatogary);
            formData.append("filttype",filttype);
            formData.append("message","Retrive fill data");
            fetch("http://localhost:3000/filter_upload",{
            method:"post",
            body:formData
            })
            .then(res => res.json())
            .then(data =>{
                const rawdata=data.result;
        if(data.message=="Data dont exist"){
            dataexit("#posts2");
            count_itm(rawdata,"#totpost2");
        }else{
            console.log(rawdata);
            create_postcard(rawdata,"#posts2");
            count_itm(rawdata,"#totpost2");
        }
     })
    .catch(err => console.error(err));
});
document.getElementById("clearFilter2").addEventListener("click",function(e){
    e.preventDefault();
    const formData=new FormData();
    formData.append("message","Retrive data");
            fetch("http://localhost:3000/post_upload",{
            method:"post",
            body:formData
            })
            .then(res => res.json())
            .then(data =>{
            console.log(data.message);
            const rawdata=data.upload_data.result;
            console.log(rawdata);
            create_postcard(rawdata,"#posts2");
            count_itm(rawdata,"#totpost2");
     })
    .catch(err => console.error(err));
});


// start post section
document.getElementById("mlorepageu").addEventListener("click",()=>{
    document.getElementById("start-posts").classList="active";
})


// login page section

let state=1;
const click_here=document.querySelector("#reglog_link");
const para=document.querySelector("#reglog_para");
const cover=document.querySelector("#cover")
if(click_here){
    click_here.addEventListener("click",()=>{
    if(state==1){
        state=0;
        para.innerHTML="Aleready registred. To sign in";
        cover.classList.add("lactive")
    }else if(state==0){
        state=1;
        para.innerHTML="Not registered yet. To sign up";
        cover.classList.remove("lactive")
    }
});
}
let shHistate=0;
document.getElementById("Viewcheck1").addEventListener("click",()=>{
    if(shHistate==0){
        document.getElementById("Password").type="text";
        document.getElementById("Viewcheck1").innerHTML="Hide password";
        shHistate=1;
    }else if(shHistate==1){
        document.getElementById("Password").type="password";
        document.getElementById("Viewcheck1").innerHTML="Show password";
        shHistate=0;
    }
});
let shHistate2=0;
document.getElementById("Viewcheck2").addEventListener("click",()=>{
    if(shHistate2==0){
        document.getElementById("regPassword").type="text";
        document.getElementById("regcnfmPassword").type="text";
        document.getElementById("Viewcheck2").innerHTML="Hide password";
        shHistate2=1;
    }else if(shHistate2==1){
        document.getElementById("regPassword").type="password";
        document.getElementById("regcnfmPassword").type="password";
        document.getElementById("Viewcheck2").innerHTML="Show password";
        shHistate2=0;
    }
});


// main page section

const filter1=document.querySelector("#filter1");
filter1.addEventListener("click",()=>{   
    filter1.classList.add("factive");
});

const filter2=document.querySelector("#filter2");
filter2.addEventListener("click",()=>{   
    filter2.classList.add("factive");
});

const sections=document.querySelectorAll("section");
const navlinks=document.querySelectorAll(".navlink");
window.addEventListener("scroll",()=>{
    let current="";
    sections.forEach(section =>{
        const sectionTop=section.offsetTop;
        const sectionHieght=section.clientHeight;
        if(window.scrollY >= sectionTop-sectionHieght/3){
          current = section.getAttribute("id")
        }
    });
    navlinks.forEach(link=>{
        link.classList.remove("active");
        if(link.getAttribute("href") === '#'+current){
            link.classList.add("active");
            console.log(link.getAttribute("href"))
        }
    });
});