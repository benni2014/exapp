$(function() {
    $.ajax({url: '/admin/ajaxdayview.php', success: function(e){
        $("#morris-line").html("");
        $("#morris-bar1").html("");
        $("#morris-bar2").html("");
        
        result=eval($.parseJSON(e));
        var web = result[1],
            view = result[2],
            country = result[3],
            referer = result[4];
            
        ylabel = ["Totle"];
        for (var i = 1;i < web.length+1;i++) {
            ylabel = ylabel.concat([web[i-1]]);
        }
                
        var chartdata = [];
        for (var key in view) {
            daydate = [];
            daydate = {date:view[key][0]};
            for (var y = 0;y < ylabel.length;y++) {
                tmp = {};
                if (isset(view[key][y+1])) {
                    tmp[ylabel[y]] = view[key][y+1];  
                } else {
                    tmp[ylabel[y]] = "0";  
                }
                        
                daydate = $.extend(daydate,tmp);
            }
            chartdata.push(daydate);
        }

        new Morris.Line({
            element: 'morris-line',
            data: chartdata,
            xkey: "date",
            ykeys: ylabel,
            labels: ylabel,
            resize: true
        });
        
        var countrydata = [];
        for (var key in country) {
            cdate = [];
            cdate = {country:country[key][0]};
            for (var y = 0;y < ylabel.length;y++) {
                tmp = {};
                if (isset(country[key][y+1])) {
                    tmp[ylabel[y]] = country[key][y+1];  
                } else {
                    tmp[ylabel[y]] = "0";  
                }   
                cdate = $.extend(cdate,tmp);
            }
            countrydata.push(cdate);
        }
                
        new Morris.Bar({
            element: 'morris-bar1',
            data: countrydata,
            xkey: "country",
            ykeys: ylabel,
            labels: ylabel,
            xLabelMargin: 2,
            resize: true
        });
        
        var refererdata = [];
        for (var key in referer) {
            rdate = [];
            rdate = {referer:referer[key][0]};
            for (var y = 0;y < ylabel.length;y++) {
                tmp = {};
                if (isset(referer[key][y+1])) {
                    tmp[ylabel[y]] = referer[key][y+1];  
                } else {
                    tmp[ylabel[y]] = "0";  
                }
                        
                rdate = $.extend(rdate,tmp);
            }
            refererdata.push(rdate);
        }
                
        new Morris.Bar({
            element: 'morris-bar2',
            data: refererdata,
            xkey: "referer",
            ykeys: ylabel,
            labels: ylabel,
            xLabelMargin: 2,
            resize: true
        });
        
        
    }});
});


$("#day").change(function() {
    $("#ajaxdayview").submit();
});

$(function(){
    $("#ajaxdayview").ajaxForm({
        beforeSend:function(){},
        complete:function(e){
            result=eval($.parseJSON(e.responseText));
            if(!result[0]){
                $("#errmsg"+result[1]).click();
            }else{
                $("#morris-line").html("");
                $("#morris-bar1").html("");
                $("#morris-bar2").html("");
                
                var web = result[1],
                    view = result[2],
                    country = result[3],
                    referer = result[4];
                
                ylabel = ["Totle"];
                for (var i = 1;i < web.length+1;i++) {
                    ylabel = ylabel.concat([web[i-1]]);
                }
                
                var viewdata = [];
                for (var key in view) {
                    daydate = [];
                    daydate = {date:view[key][0]};
                    for (var y = 0;y < ylabel.length;y++) {
                        tmp = {};
                        if (isset(view[key][y+1])) {
                            tmp[ylabel[y]] = view[key][y+1];  
                        } else {
                            tmp[ylabel[y]] = "0";  
                        }
                        
                        daydate = $.extend(daydate,tmp);
                    }
                    viewdata.push(daydate);
                }

                new Morris.Line({
                    element: 'morris-line',
                    data: viewdata,
                    xkey: "date",
                    ykeys: ylabel,
                    labels: ylabel,
                    resize: true
                });
                
                var countrydata = [];
                for (var key in country) {
                    cdate = [];
                    cdate = {country:country[key][0]};
                    for (var y = 0;y < ylabel.length;y++) {
                        tmp = {};
                        if (isset(country[key][y+1])) {
                            tmp[ylabel[y]] = country[key][y+1];  
                        } else {
                            tmp[ylabel[y]] = "0";  
                        }
                        
                        cdate = $.extend(cdate,tmp);
                    }
                    countrydata.push(cdate);
                }
                
                new Morris.Bar({
                    element: 'morris-bar1',
                    data: countrydata,
                    xkey: "country",
                    ykeys: ylabel,
                    labels: ylabel,
                    xLabelMargin: 2,
                    resize: true
                });
                
                var refererdata = [];
                for (var key in referer) {
                    rdate = [];
                    rdate = {referer:referer[key][0]};
                    for (var y = 0;y < ylabel.length;y++) {
                        tmp = {};
                        if (isset(referer[key][y+1])) {
                            tmp[ylabel[y]] = referer[key][y+1];  
                        } else {
                            tmp[ylabel[y]] = "0";  
                        }
                        
                        rdate = $.extend(rdate,tmp);
                    }
                    refererdata.push(rdate);
                }
                
                new Morris.Bar({
                    element: 'morris-bar2',
                    data: refererdata,
                    xkey: "referer",
                    ykeys: ylabel,
                    labels: ylabel,
                    xLabelMargin: 2,
                    resize: true
                });
                
            }
        }
    });
});

/*
(function(window, document, $, undefined){

  $(function(){
    if ( typeof Morris === 'undefined' ) return;
    var chartdata = [
        { y: "2006", a: 100, b: 90 ,c:90 },
        { y: "2007", a: 75,  b: 65 },
        { y: "2008", a: 50,  b: 40 },
        { y: "2009", a: 75,  b: 65 },
        { y: "2010", a: 50,  b: 40 },
        { y: "2011", a: 75,  b: 65 },
        { y: "2012", a: 100, b: 90 }
    ];

    // Line Chart
    // ----------------------------------- 

    new Morris.Line({
      element: 'morris-line',
      data: chartdata,
      xkey: '日期',
      ykeys: ["a","b","c"],
      labels: ["總瀏覽數","web1","web2"],
      lineColors: ["#31C0BE", "#7a92a3"],
      resize: true
    });
  });
})(window, document, window.jQuery);*/

function isset() {
  var a = arguments,
    l = a.length,
    i = 0,
    undef;
  if (l === 0) {
    throw new Error('Empty isset');
  }
  while (i !== l) {
    if (a[i] === undef || a[i] === null) {
      return false;
    }
    i++;
  }
  return true;
}