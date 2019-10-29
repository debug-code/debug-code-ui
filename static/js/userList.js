layui.use(['table', 'form', 'layer', 'jquery'], function () {
	var $ = layui.jquery, 
	table = layui.table,
	form = layui.form, 
	/* $tool = layui.$tool,
	$api = layui.$api, */
	layer = layui.layer;
	
	var tableIns;//表格实例
    
	// 初始化表格&表单
	tableIns = table.render({
       elem: '#user-list-table'
       , height: 500
       , url: 'http://localhost:8070/data/userList' //数据接口
       , page: true
       , limits: [10, 25, 50],
       cols: [[
        //    {field: 'id', width: 100, title: '序号', width: 80, sort: true}
           {field: 'userName', title: '用户名称', width: 100}
            , {field: 'realName', title: '用户姓名', width: 100}
        //    , {field: 'groupIds', title: '组号', width: 100}
        //    , {field: 'groupNames', title: '组名', width: 100}
        //    , {field: 'email', title: '邮箱', width: 100}
        //    , {field: 'singal', title: '管理员', width: 80}
        //    , {field: 'createTime', title: '创建时间', templet : "<div>{{layui.util.toDateString(d.createTime, 'yyyy-MM-dd HH:mm:ss')}}</div>"}
        //    , {field: 'updateTime', title: '更新时间', templet : "<div>{{layui.util.toDateString(d.updateTime, 'yyyy-MM-dd HH:mm:ss')}}</div>"}
           , {title: '操作', width: 70, align: 'center', fixed: 'right', toolbar: '#table-useradmin-webuser'}
       ]],
       done: function (res, curr, count) { //响应完成回调
       	//如果是异步请求数据方式，res即为你接口返回的信息.curr：当前页码
       }
	});
           
    //为toolbar添加事件响应
	table.on('tool(user-list)', function(obj){ //注：tool是工具条事件名，test是table原始容器的属性 lay-filter="对应的值"
	   console.log(obj)
	   var data = obj.data //获得当前行数据
       ,layEvent = obj.event; //获得 lay-event 对应的值
       if(layEvent === 'edit'){
    	   layer.open({
    		   title: '用户编辑'
    		   ,type: 1
    		   ,offset: 'auto' //具体配置参考：http://www.layui.com/doc/modules/layer.html#offset
    		   ,btn: '确认修改'
    			   ,btnAlign: 'c' //按钮居中
    				   ,shade: 0 //不显示遮罩
    				   ,yes: function(){
    					   layer.closeAll();
    				   }
    	   });
       }
    });
           
});