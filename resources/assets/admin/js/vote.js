$("#addvote").click(function() {
    var votecount = $("#votecount").val();
    count = parseInt(votecount)+1;
    for (i=count;i<parseInt(votecount)+4;i++) {
        $("#vote-system").append('<div class="form-group"><label for="vote'+count+'" class="col-lg-1 control-label">'+count+'.</label><div class="col-lg-11"><input type="text" id="vote'+count+'" name="vote'+count+'" class="form-control" value=""></div></div>');
         count++;
    }
    $("#votecount").val(count-1);
});

$("#multivote").change(function() {
    var multi = $("#multivote").attr("checked");
    
    if (multi) {
        $("#multivote").removeAttr("checked");
        $("#maxvote").attr("disabled","true");
    } else {
        $("#multivote").attr("checked","checked");
        $("#maxvote").removeAttr("disabled");
    }
});


$("#addexam").click(function() {
    var votecount = $("#examcount").val();
    count = parseInt(votecount)+1;
    for (i=count;i<parseInt(votecount)+3;i++) {       
        $("#exam-system").append('<div class="form-group"><label for="exam-title'+count+'" class="col-lg-1 control-label">選擇'+count+'.</label><div class="col-lg-11"><input type="text" id="exam-title'+count+'" name="exam-title'+count+'" class="form-control" value=""></div></div><div class="form-group"><label for="exam-answer'+count+'" class="col-lg-1 control-label">結果'+count+'.</label><div class="col-lg-11"><textarea rows="3" class="form-control" name="exam-answer'+count+'" id="exam-answer'+count+'"></textarea></div></div>');
         count++;
    }
    $("#examcount").val(count-1);
});

$("#type").change(function() {
    $(".content-type").addClass("hide");
    $("#content-type"+$("#type").val()).removeClass("hide");
});

$("#addstep").click(function() {
    var examcount = $("#stepcount").val();
    count = parseInt(examcount)+1;
    for (i=count;i<parseInt(examcount)+3;i++) {       
        $("#step-div-"+count).removeClass("hide");
        count++;
    }
    $("#stepcount").val(count-1);
});