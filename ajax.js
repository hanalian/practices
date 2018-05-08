var xhr=new XMLHttpRequest();
xhr.onreadystatechange=function(){
    console.log(xhr.status+":"+xhr.statusText);
};
xhr.open("post","http://www.hostname.com");
xhr.send("?hana");

//get
window.onload = function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (event) {
        if(xhr.readyState==4){
            if ((xhr.status >= 200 && xhr.status < 300) ||
                xhr.status == 304) {
                alert(xhr.responseText);
            } else {
                alert("Request was unsuccessful: " + xhr.status);
            }
        }
    };
    var url = "example.php";
    function addURLParam(url, name, value) {
        url += (url.indexOf("?") == -1 ? "?" : "&");
        url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
        return url;
    }
    url = addURLParam(url, "name", "Mary");
    xhr.open("get", url, false);

    //设置超时
    xhr.timeout(1000);//1秒钟
    xhr.ontimeout=function(){
        alert("request did not return in a second.");
    };
};


//post
window.onload = function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (event) {
        if(xhr.readyState==4){
            if ((xhr.status >= 200 && xhr.status < 300) ||
                xhr.status == 304) {
                alert(xhr.responseText);
            } else {
                alert("Request was unsuccessful: " + xhr.status);
            }
        }
    };
    xhr.open("post", "example.php", true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    var form=document.getElementById("form");
    xhr.send(new FormData(form));
};


//进度事件
window.onload = function(){
    var xhr = new XMLHttpRequest();
    xhr.onload = function(event){
        if ((xhr.status >= 200 && xhr.status < 300) ||
            xhr.status == 304){
            alert(xhr.responseText);
        } else {
            alert("Request was unsuccessful: " + xhr.status);
        }
    };
    xhr.onprogress = function(event){
        var divStatus = document.getElementById("status");
        if (event.lengthComputable){
            divStatus.innerHTML = "Received " + event.position + " of " + event.totalSize + " bytes";
        }
    };
    xhr.open("get", "altevents.php", true);
    xhr.send(null);
};