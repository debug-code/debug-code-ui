function getCookie(key){
    let cookieArr = document.cookie.split("; ");
    // console.log("cookieArr",cookieArr)
    for (k in cookieArr){
       
        let kv = cookieArr[k].split("=");
        // console.log("kv",kv)
        if (kv[0] == key){
            // console.log("kv[1]",kv[1])
            return kv[1];
        }
    }
    return ""
}

function ajax(method, url,token,json, callback){
    let xhr = new XMLHttpRequest(); 
    xhr.open(method, url, true);
    xhr.setRequestHeader('Authorization',token);
    xhr.responseType = "json";
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            callback(xhr.response);
        }
    }
    // xhr.onload = function() {}
    xhr.send(json);
}
