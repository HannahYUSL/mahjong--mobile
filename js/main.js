/*版权所有   周玉琦*/
$(window).resize(function () {          //当浏览器大小变化时
	function placeholderPic() {
        w = document.documentElement.clientWidth / 80;
        document.documentElement.style.fontSize = w + 'px';
    }
    placeholderPic()
});
$(function () {
    // 定义字体大小
    function placeholderPic() {
        w = document.documentElement.clientWidth / 80;
        document.documentElement.style.fontSize = w + 'px';
    }
    placeholderPic()
})


$(".logoa").click(function(){
	$(".logoB").fadeOut(400);
	$(".logoa").addClass("logoaO");
});

$(window).resize(function () {          //当浏览器大小变化时
	
});

//导航下拉
$(".YiwDa").mouseover(function(){
	$(this).next(".YiwDP").slideDown(0);
	$(this).addClass("on");
	$('.YiwDP').css('width', parseFloat($('body').width()*0.5));	
  });
$(".YiwDN").mouseleave(function(){
	$(this).children(".YiwDP").slideUp(0);
	$(this).children(".YiwDa").removeClass("on");
});


