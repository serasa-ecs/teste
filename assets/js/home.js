"use strict";var $home=new Vue({el:".page-home,#taskEditModal",data:{title:"Tasks",selectedTask:{},tasks:[]},methods:{loadTasks:function(){var a=this,t=$("#taskSearch").val();a.title="Loading Tasks...",$.get("./api/Task",{term:t},function(t){a.title="Tasks",a.tasks=t.results})},addTask:function(a){$.post("./api/Task/",a,function(a){$home.loadTasks()})},openTask:function(a){var t=this;t.selectedTask=t.tasks.filter(function(t){return t.id==a})[0],$("#taskEditModal").modal("show")},deleteTask:function(a){$.ajax({method:"DELETE",url:"./api/Task/",data:{id:a},success:function(a){1==a?($("#taskEditModal").modal("hide"),$home.loadTasks()):alert("Whoops, looks like something went wrong;")}})}},mounted:function(){this.loadTasks()}});$(document).on("click",'[data-action="edit-task"]',function(a){a.preventDefault();var t=$(this).attr("data-key");$home.openTask(t)}),$(document).on("click",'[data-action="delete-task"]',function(a){a.preventDefault();$(this);var t=$(this).attr("data-key");confirm("Remove task?")&&$home.deleteTask(t)}),$(document).on("submit","#taskEditModal form",function(a){a.preventDefault();var t=$(this),e=t.find('[name="id"]').val();$.ajax({method:"PUT",data:t.serialize(),url:"./api/Task/"+e,success:function(a){1==a?($("#taskEditModal").modal("hide"),$home.loadTasks()):alert("Invalid data or no changes detected")}})}),$(document).on("submit","#formAddTask",function(a){a.preventDefault();var t=$(this);$home.addTask(t.serialize())}),$(document).on("keyup","#taskSearch",function(a){$home.loadTasks()});
//# sourceMappingURL=home.js.map
