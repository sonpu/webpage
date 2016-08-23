	//焦点图-----
    $(function(){
    	jQuery("#slider-3 .slider").slide({mainCell:".bd ul",titCell:".hd li",trigger:"click",effect:"fold",autoPlay:true,delayTime:700,interTime:7000,pnLoop:false,titOnClassName:"active"});
    });
    //菜单置顶------
	$(document).ready(function(e) {
	 $('#mynav').navfix(0,9999);    
	});
	//第一个值： 你期望导航在距离顶部多少的位置浮动
	//第二个值： 导航zindex
	
	//TAB页签------
	$(function(){
    $.Huitab("#tab_demo .tabBar span","#tab_demo .tabCon","current","click","0");
    });
    // #tab_demo 父级id
    // #tab_demo .tabBar span 控制条
    // #tab_demo .tabCon 内容区
    // click 事件 点击切换，可以换成mousemove 移动鼠标切换
    // 1	默认第2个tab为当前状态（从0开始）
    
    //回到顶部-----
    $(function(){$(window).on("scroll",$backToTopFun);$backToTopFun();});