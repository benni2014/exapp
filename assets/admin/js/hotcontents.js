$(function(){    
    $("#ajaxhotcontents").ajaxForm({
        beforeSend:function(){
            $("#hotcontentlist").append("<div class='ajax-loading'></div>");
        },
        complete:function(e){
            beeback=eval($.parseJSON(e.responseText));
            if(!beeback[0]){
                $("#errmsg"+beeback[1]).click();
            }else{
                $("#hotcontentlist").html("");
                var content = beeback[1];

                var table = "";
                for (var i = 1;i < content.length+1;i++) {
                    table += '<tr><td><img src="'+content[i-1]["coverimg"]+'" class="img-rounded thumb80"></td>';
                    table += '<td>'+content[i-1]["title"]+'</td>';
                    
                    table += '<td>';
                    for (var y = 1;y <= 10;y++) {
                        var web = "web"+y,
                            link = "link"+y,
                            name = "site"+y;
                            
                        if (content[i-1][web] == 2) {
                            table += '<a href="'+content[i-1][link]+'" class="mr-sm label label-primary" style="line-height: 2;" target="_blank">';
                            table += content[i-1][name]+'</a><br>';                    
                        }
                    }
                    table += '</td>';
                    table += '<td>'+content[i-1]["author"]+'</td>';
                    table += '<td>'+content[i-1]["view"]+'</td></tr>'; 
                }

                $("#hotcontentlist").html(table);
            }
        }
    });
});

$(function() {
    $.ajax({url: '/admin/ajaxhotcontents.php', success: function(e){
        $("#hotcontentlist").html("");
        beeback = eval($.parseJSON(e));
        var content = beeback[1];
        
        var table = "";
        for (var i = 1;i < content.length+1;i++) {
            table += '<tr><td><img src="'+content[i-1]["coverimg"]+'" class="img-rounded thumb80"></td>';
            table += '<td>'+content[i-1]["title"]+'</td>';
            
            table += '<td>';  
            for (var y = 1;y <= 10;y++) {
                var web = "web"+y,
                    link = "link"+y,
                    name = "site"+y;
                            
                if (content[i-1][web] == 2) {
                    table += '<a href="'+content[i-1][link]+'" class="mr-sm label label-primary" style="line-height: 2;" target="_blank">';
                    table += content[i-1][name]+'</a><br>';                    
                }
            }
            table += '</td>';
            table += '<td>'+content[i-1]["author"]+'</td>';
            table += '<td>'+content[i-1]["view"]+'</td></tr>'; 
        }

        $("#hotcontentlist").html(table);
    }});
});