// Nestable demo
// ----------------------------------- 


(function(window, document, $, undefined){

  $(function(){

    var updateOutput = function(e)
    {
        var list   = e.length ? e : $(e.target),
            output = list.data('output');
        if (window.JSON) {
            output.val(window.JSON.stringify(list.nestable('serialize')));//, null, 2));
        } else {
            output.val('JSON browser support required for this demo.');
        }
    };

    // activate Nestable for list 1
    $('#nestable').nestable({
        group: 1
    })
    .on('change', updateOutput);
    

    // output initial serialised data
    updateOutput($('#nestable').data('output', $('#nestable-output')));

    $('.js-nestable-action').on('click', function(e)
    {
        var target = $(e.target),
            action = target.data('action');
        if (action === 'expand-all') {
            $('.dd').nestable('expandAll');
        }
        if (action === 'collapse-all') {
            $('.dd').nestable('collapseAll');
        }
    });

  });

})(window, document, window.jQuery);

$(function(){

    $("#selectweb").change(function(){
        location.href = "/admin/catsetting.html?select="+$(this).val();
    });
    
    $("#showcat").change(function(){
        var webid = $(this).attr("attr-web"),
            showcat = $(this).prop("checked") ? "1" : "0";
        $.ajax({url: "/admin/ajaxcatsetting.php?action=show&web="+webid+"&value="+showcat}).done(function(){$("#msg1").click();});;
    });
    
    $("#selectcat").click(function(){
        $("#choosecat input[type=checkbox]").each(function () {
            if (this.checked) {
                $(this).parent().parent().remove();
                //$(".dd-list").append('<li data-id="'+$(this).attr("attr-cat")+'" class="dd-item"><div class="dd-handle">'+$(this).attr("attr-name")+'</div><a class="btn btn-default btn-sm remove-nestable" attr-cat="'+$(this).attr("attr-cat")+'" attr-name="'+$(this).attr("attr-name")+'"><i class="fa fa-close"></i></a></li>');
                $(".dd-list").append('<li data-id="'+$(this).attr("attr-cat")+'" class="dd-item"><div class="dd-handle">'+$(this).attr("attr-name")+'</div></li>');
                $('#nestable').change();
            }
        });    
    });
    
    $("#sortsubmit").click(function(){
        var webid = $("#nestable-output").attr("attr-web"),
            val   = $("#nestable-output").val();

        $.ajax({url: "/admin/ajaxcatsetting.php?action=sort&web="+webid+"&value="+val}).done(function(){$("#msg1").click();});   
    });
    
    $(".remove-nestable").click(function(){
        $(this).parent().remove();
        
        $("#choosecat").append('<div class="checkbox c-checkbox"><label><input type="checkbox" attr-cat="'+$(this).attr("attr-cat")+'" attr-name="'+$(this).attr("attr-name")+'"><span class="fa fa-check"></span>'+$(this).attr("attr-name")+'</label></div>');
        $('#nestable').change();
    });
});