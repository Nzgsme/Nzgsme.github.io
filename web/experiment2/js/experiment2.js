    var d=new Date();
    var p9=document.createElement("li");
    let p1 = document.getElementById("p1");
    let h1 = document.getElementsByTagName("h1")[0];
    let listOfUl = document.querySelectorAll("li")
    let ul = document.querySelector("ul");
    let box=document.getElementsByClassName("m-box");
    // console.log(listOfUl);
    let p2=listOfUl[1];
    let p3=listOfUl[2];
    let p4=listOfUl[3];
    let p5=listOfUl[4];
    let p6=listOfUl[5];
    let p7=listOfUl[6];
    let p8=listOfUl[7];
    console.log(d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate())
    p1.onclick=function () {
        p1.style.color="red";
        alert("p1");
    }
    p2.onclick=function () {
        h1.innerText=d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
        alert("p2");
    }
    p3.onclick=function () {
        p3.classList.add("fn-active");
        alert("p3");
    }
    p4.onclick=function () {
        p8.remove();
        alert("p4");
    }
    p5.onclick=function () {
        window.open("https://www.taobao.com/","taobao");
        alert("p5");
    }
    p6.onclick=function () {
        p9.innerText="p9";
        ul.appendChild(p9);
        alert("p6");
    }
    p7.onclick=function () {
        // console.log(box.width);
        box.width=window.innerWidth;
        // console.log(box.width);
        alert("p7");
    }

