$(function(){
	//nav
	$(".nav>li").each(function(index,obj){
		$(this).on("click",function(){
		   $(this).addClass("active").siblings().removeClass("active");
	})
	})
	
	//banner
	//轮播点
   $(".lunboo>li").each(function(index,obj){
		$(this).on("click",function(){
			$(this).addClass("moren").siblings().removeClass("moren");
			$(".bannerpic li").eq(index).css({display:"block"}).siblings().css({display:"none"})
		
	})	
	})
   	// 自动轮播
	let t;
	let nume=0;
    t=setInterval(fn,4000);
    function fn(){
 	  nume++;
 	  if(nume==$(".bannerpic li").length){
 		nume=0;
 	  }
		$(".lunboo li").eq(nume).addClass("moren").siblings().removeClass("moren");
		$(".bannerpic li").eq(nume).css({display:"block"}).siblings().css({display:"none"})
		
	
		
}
 //鼠标悬停
  console.log($(".bannertotal"));
 $(".banner").hover(function(){
 	clearInterval(t);
 },function(){
 	t=setInterval(fn,4000);
 })
  //右箭头
  $(".camera_next").click(fn);
 //左箭头
  let num=0;
 $(".camera_prev").click(function(){
 	num--;
 	if(num==-1){
 		
 		num=$(".bannerpic li").length-1;
 	}
 	$(".lunboo li").eq(num).addClass("moren").siblings().removeClass("moren");
 	$(".bannerpic li").eq(num).css({display:"block"}).siblings().css({display:"none"});
 })
	
})
