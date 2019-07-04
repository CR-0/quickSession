(function($){
    if(window.location.href == "http://localhost"){
        $("#username").val("username");
        $("#password").val("pass");
        $("button").trigger("click");
    }
})(jQuery);