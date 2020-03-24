function ibaidu() {
    document.getElementById("baidu").setAttribute("class", "active");
    document.getElementById("google").removeAttribute("class");
    document.getElementById("biying").removeAttribute("class");
    document.getElementById("stype").value = "baidu";
    document.getElementById("seartext").setAttribute("placeholder", "百度搜索");
    document.getElementById("gosearch").innerHTML="百度一下";
};
function igoogle() {
    document.getElementById("baidu").removeAttribute("class");
    document.getElementById("google").setAttribute("class", "active");
    document.getElementById("biying").removeAttribute("class");
    document.getElementById("stype").value = "google";
    document.getElementById("seartext").setAttribute("placeholder", "谷歌搜索");
    document.getElementById("gosearch").innerHTML="Google";
};
function ibiying() {
    document.getElementById("baidu").removeAttribute("class");
    document.getElementById("google").removeAttribute("class");
    document.getElementById("biying").setAttribute("class", "active");
    document.getElementById("stype").value = "biying";
    document.getElementById("seartext").setAttribute("placeholder", "必应搜索");
    document.getElementById("gosearch").innerHTML="Bing";
};
function search() {
    var stext = document.getElementById("seartext").value;
    var stype = document.getElementById("stype").value;
    if (stype == "baidu") {//百度搜索
        window.location.href = "https://www.baidu.com/s?wd=" + stext;
        // window.location.replace("https://www.baidu.com/s?wd="+stext);//重定向,浏览器无法返回上一次的网页
        window.event.returnValue = false;
        // window.open("https://www.baidu.com/s?wd="+stext);//在新的标签页搜索
    } else if (stype == "google") {//谷歌搜索
        window.location.href = "https://www.google.com/search?q=" + stext;
        // window.open("https://www.google.com/search?q="+stext);
        // window.location.replace("https://www.google.com/search?q="+stext);
        window.event.returnValue = false;
    } else if (stype == "biying") {//必应搜索
        window.location.href = "https://cn.bing.com/search?q=" + stext;
        // window.open("https://cn.bing.com/search?q="+stext);
        // window.location.replace("https://cn.bing.com/search?q="+stext);
        window.event.returnValue = false;
    }

};

function getTime() {
    var date = new Date();
    var y = date.getFullYear();     //获取年份  
    var m = date.getMonth() + 1;   //获取月份  返回0-11  
    var d = date.getDate(); // 获取日
    // alert(date);
    document.getElementById("time").innerHTML = date;
}

