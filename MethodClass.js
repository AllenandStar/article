//par1代表请求接口地址，par2代表向服务器的请求参数，method是请求方法（get、post），callback返回请求的值
function requestMethod(Ma1,Ma2,method,callback){

    //第一步：创建一个网络请求对象（http），去服务端要数据，接收服务端数据
    var xhr = new XMLHttpRequest();
    //第二步：建立与服务端的连接(get/post)
    // xhr.open(method, 'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/ + par1');
    xhr.open(method, 'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/' + Ma1);
    //设置请求头，告诉服务器咱们传递过去的数据是以表单形式传递过去的
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    //第三步：向服务器发送请求（传参）
    xhr.send(Ma2);

    //第四步：接受服务器返回的数据
    xhr.onreadystatechange = function () {
        //xhr.readyState == 4 代表数据请求完成
        //xhr.status == 200 代表数据成功返回
        if (xhr.readyState == 4 && xhr.status == 200){
            //responseText里面包含了服务器端返回的数据
            var responseData = JSON.parse(xhr.responseText);
            var str = responseData.data;

            callback(str);

        }

    }

}

