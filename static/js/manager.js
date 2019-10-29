
//↗返回前台首页动画》》绿条条
$(".logo-ul-a").mouseover(function(){
//				$(".logo-ul-line").show(500);
    $(".logo-ul-line").animate({right:'33px'},'fast');

})
$(".logo-ul-a").mouseout(function(){
//				$(".logo-ul-line").hide();
    $(".logo-ul-line").animate({right:'105px'},'fast');
})


var num = 1
//左侧菜单变色 open
$(".treeview-menu li").click(function(){

    //去掉背景色
//				$("li").siblings().removeClass("on");
    $(".on").removeClass("on");
//				对点击的菜单添加背景色
    $(this).addClass("on");
    var ls = $(this).attr("data-name")
    var ifraUrl = $(this).attr("data-url")
 
    let flag = 1 
    $("li.tab-title").each(function(){ 
        if($(this).attr("data-name")==ls)
        {
           flag = 0
           return false;
        }
    });
    if (flag == 0){
        return false;
    } 

    var li = "<li class=\"tab-title\" lay-id=\"\" data-id=\""+ num +"\" data-name= \""+ ls +"\" >"+
        "<i class=\"layui-icon\">&#xe68e;</i> "+
        "<cite>"+ ls +"</cite>"+
        "<i class=\"layui-icon layui-unselect layui-tab-close\" >ဆ</i>"+
        "</li>";
    //alert(li)
    $(".layui-show").removeClass("layui-show");
    var ifra = "<div class=\"layui-tab-item layui-show\">"+
        "<iframe src=\"" + ifraUrl + "\" style=\"border: none;\" data-id=\""+ num +"\"></iframe>"+
        "</div>"	;

    $("#top_tabs").append(li);

    $("#clildFrame").append(ifra);

    $("li.tab-title").each(function(){
        //alert($(this).attr("data-id"));
        if($(this).attr("data-id")==num)
        {
            $(".active").removeClass("active");
            $(this).addClass("active");
            return false;
        }
    });


    num+=1;
})

//上部菜单变色
$("#top_tabs").on("click",".tab-title",function(){

    //去掉背景色
    //	$("li").siblings().removeClass("on");
    $(".active").removeClass("active");

    //	对点击的菜单添加背景色
    $(this).addClass("active");

    //切换页面
    var ifraId = $(this).attr("data-id");


    $(".layui-show").removeClass("layui-show");

    //显示iframe不好用
//				alert($("iframe[data-id='ifraId']").attr(src));
//				$("iframe[data-id='ifraId']").parent(".layui-tab-item").addClass("layui-show");

    $("iframe").each(function(){
        //alert($(this).attr("data-id"));
        if($(this).attr("data-id")==ifraId)
        {
            $(this).parent(".layui-tab-item").addClass("layui-show");
            return false;
        }
    });


});

//关闭上部标签
$("#top_tabs").on("click",".layui-tab-close",function(){
    //$(".layui-tab-close").on("click",".layui-tab-close",function(){

    $(".active").removeClass("active");
    $(".layui-show").removeClass("layui-show");


    var obj = $(this).parent(".tab-title");

    //获取前一个data-id
    var ifraid = obj.prev().attr("data-id");
    //获取当前的data-id
    var ifraId = obj.attr("data-id");


    //跳转标签

    obj.prev(".tab-title").addClass("active");

    //删除标签
    obj.remove();


    //删除iframe

    $("iframe").each(function(){
        //alert($(this).attr("data-id"));
        if($(this).attr("data-id")==ifraId)
        {
            $(this).parent(".layui-tab-item").remove();
            return false;
        }
    });

    //显示对应的 iframe
    $("iframe").each(function(){
        //alert($(this).attr("data-id"));
        if($(this).attr("data-id")==ifraid)
        {
            $(this).parent(".layui-tab-item").addClass("layui-show");
            return false;
        }
    });

    return false;


});

//底部时间
$(function () {

    var myDate = new Date();
    //获取当前年
    var year = myDate.getFullYear();
    //获取当前月
    var month = myDate.getMonth() + 1;
    //获取当前日
    var date = myDate.getDate();

    var today = new Array('星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六');
    var week = today[myDate.getDay()];

    var dataStr = year + "年" + month + "月" + date + "日，" + week;

    $("#time").text(dataStr);

    //alert(dataStr);
})

//向左缩
function menuBtn(obj){

    var cname = $('#menuBtn-i').attr('class');
    if(cname=="fa fa-outdent")
    {
        $(".left-nav").animate({ width:"50px" },500);
        $("#menuBtn-a").animate({ width:"50px" },500);
        $(".zw").animate({ marginLeft:"50px" },500);
        $(".treeview-flag").animate({ left:"16px",fontSize:"20px" },500);

        $(".treeview-menu").slideUp();
// 					$(".left-nav").css("width","50px");
// 					$("#menuBtn-a").css("width","50px");
        $('#menuBtn-i').attr('class','fa fa-indent');
    }
    else
    {
        $(".left-nav").animate({ width:"230px" },500);
        $("#menuBtn-a").animate({ width:"230px" },500);

        $(".zw").animate({ marginLeft:"230px" },500);
        $(".treeview-flag").animate({ left:"65px",fontSize:"16px" },500);
// 					$(".left-nav").css("width","230px");
// 					$("#menuBtn-a").css("width","230px");
        $('#menuBtn-i').attr('class','fa fa-outdent');
    }

//				$("#menuBtn-i").css("float","left");
//				$("#menuBtn-a").css("width","50px");
//				$("#menuBtn-i").css("float","left");
}

//左侧菜单下拉
function menu(obj){

    var e=$(obj).next();

    if(e.is(":hidden")){
        $(".treeview-menu").slideUp();
        e.slideDown();
        $(obj).children(".at-right").attr('class','fa fa-angle-down at-right');
    }
    else{
        $(".treeview-menu").slideUp();
        e.slideUp();
        $(obj).children(".at-right").attr('class','fa fa-angle-left at-right');
    }
}

//页面操作下拉
//---
$("#caozuo").mouseover(function(){
    $(".closeBox-child").stop(true).slideDown(200);
})
$("#caozuo").mouseout(function(){
    $(".closeBox-child").stop(true).delay(300).slideUp(200);
})
$(".closeBox-child").mouseover(function(){
    $(".closeBox-child").stop(true).slideDown(200);
})
$(".closeBox-child").mouseout(function(){
    $(".closeBox-child").stop(true).delay(300).slideUp(200);
})
//---

function checkToken(){
    let token = getCookie("token");
    if (token == ""){
        window.location.href="/view/login" 
        return
    }
    let url = 'http://127.0.0.1:8090/api/token'; 
    ajax('GET', url, token,null, function(data){
        console.log(1,data);
        
        // console.log(data.data.token);
        if (data.code =="1"){
            let token = data.data.token;
            document.cookie = "token="+token+";"; 
           
            
        }else{
            layer.msg('您已离线请重新登录！！！');
                
            setTimeout(function(){
                window.location.href="/view/manage" 
            },800);
        }
        
    })

} 
// 定时更新token
window.setInterval(checkToken, 1000 * 600); 
