$("#cover").click(function(){$("#img").click();});

$("#coverform").bind("submit",function(e){
    var input = document.getElementById("img");
    var file =input.files;
    var filename = file[0].name;
    var fileext = filename.substr(filename.length - 4);

    fileext=fileext.toLowerCase();
    if(fileext!=".jpg" && fileext!="jpeg" && fileext!=".gif" &&  fileext!=".png"){
        alert("圖片格式錯誤 "+filename+"! 本站僅支援 JPG, JPEG, PNG, GIF 圖檔");
        e.preventDefault();
        return;
    }
                
    if (file[0].size > 5* 1024* 1024) {
        alert("檔案超過5MB限制,請重新上傳!");
        e.preventDefault();
        return;    
    }       
});

$("#coverform").ajaxForm({
    beforeSend: function() {},
    uploadProgress: function(event, position, total, percentComplete) {},
    complete: function(xhr) {
        try{
            var data = jQuery.parseJSON(xhr.responseText); 
            if(data["error"]=="0"){
                $("#cover").html("<img src='"+data["image"]["path"]+"'><input type='hidden' name='coverimg' value='"+data["image"]["file"]+"'>"); 
            }else{
                $("#cover").html("<strong>上傳失敗!</strong> "+data["message"]);
            }
        }catch(e){
            $("#cover").html("<strong>上傳失敗!</strong> 請重新上傳，如果同樣錯誤再發生請通知管理人員，謝謝。");
        }
    }
});

$(".delcover").click(function() {
    $("#cover").html("選擇圖片<input type='hidden' name='coverimg' value=''>");    
});
/***/


$("#sitelogo").click(function(){$("#sitelogoimg").click();});

$("#sitelogoform").bind("submit",function(e){
    var input = document.getElementById("sitelogoimg");
    var file =input.files;
    var filename = file[0].name;
    var fileext = filename.substr(filename.length - 4);

    fileext=fileext.toLowerCase();
    if(fileext!=".jpg" && fileext!="jpeg" && fileext!=".gif" &&  fileext!=".png"){
        alert("圖片格式錯誤 "+filename+"! 本站僅支援 JPG, JPEG, PNG, GIF 圖檔");
        e.preventDefault();
        return;
    }
                
    if (file[0].size > 5* 1024* 1024) {
        alert("檔案超過5MB限制,請重新上傳!");
        e.preventDefault();
        return;    
    }       
});

$("#sitelogoform").ajaxForm({
    beforeSend: function() {},
    uploadProgress: function(event, position, total, percentComplete) {},
    complete: function(xhr) {
        try{
            var data = jQuery.parseJSON(xhr.responseText); 
            if(data["error"]=="0"){
                $("#sitelogo").html("<img src='"+data["image"]["path"]+"'><input type='hidden' name='sitelogo' value='"+data["image"]["file"]+"'>"); 
            }else{
                $("#sitelogo").html("<strong>上傳失敗!</strong> "+data["message"]);
            }
        }catch(e){
            $("#sitelogo").html("<strong>上傳失敗!</strong> 請重新上傳，如果同樣錯誤再發生請通知管理人員，謝謝。");
        }
    }
});

$(".delsitelogo").click(function() {
    $("#sitelogo").html("選擇圖片<input type='hidden' name='sitelogo' value=''>");    
});

$("#sitelogo32").click(function(){$("#sitelogo32img").click();});

$("#sitelogo32form").bind("submit",function(e){
    var input = document.getElementById("sitelogo32img");
    var file =input.files;
    var filename = file[0].name;
    var fileext = filename.substr(filename.length - 4);

    fileext=fileext.toLowerCase();
    if(fileext!=".jpg" && fileext!="jpeg" && fileext!=".gif" &&  fileext!=".png"){
        alert("圖片格式錯誤 "+filename+"! 本站僅支援 JPG, JPEG, PNG, GIF 圖檔");
        e.preventDefault();
        return;
    }
                
    if (file[0].size > 5* 1024* 1024) {
        alert("檔案超過5MB限制,請重新上傳!");
        e.preventDefault();
        return;    
    }       
});

$("#sitelogo32form").ajaxForm({
    beforeSend: function() {},
    uploadProgress: function(event, position, total, percentComplete) {},
    complete: function(xhr) {
        try{
            var data = jQuery.parseJSON(xhr.responseText); 
            if(data["error"]=="0"){
                $("#sitelogo32").html("<img src='"+data["image"]["path"]+"'><input type='hidden' name='sitelogo32' value='"+data["image"]["file"]+"'>"); 
            }else{
                $("#sitelogo32").html("<strong>上傳失敗!</strong> "+data["message"]);
            }
        }catch(e){
            $("#sitelogo32").html("<strong>上傳失敗!</strong> 請重新上傳，如果同樣錯誤再發生請通知管理人員，謝謝。");
        }
    }
});

$(".delsitelogo32").click(function() {
    $("#sitelogo32").html("選擇圖片<input type='hidden' name='sitelogo32' value=''>");    
});