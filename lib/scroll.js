$("#left_button").click(function(){
    var scrollCont=$(".banner_container_scroll");
    if(parseInt(scrollCont.css('margin-left'))<= '-2040'){
        scrollCont.animate({
        'margin-left':'0'});
    }else{
    $(".banner_container_scroll").animate({
    'margin-left':'-=1020'});
}});

$("#right_button").click(function(){
    var scrollCont=$(".banner_container_scroll");
    if(parseInt(scrollCont.css('margin-left')) >= 0){
        scrollCont.animate({
        'margin-left':'-2040'});
    }else{
    $(".banner_container_scroll").animate({
    'margin-left':'+=1020'});
}});