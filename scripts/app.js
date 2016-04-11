!function(){"use strict";angular.module("prakli",["ui.router","ngMaterial","ngAnimate","ngCookies","nvd3"])}(),function(){"use strict";function e(e,n){n.otherwise("/"),e.state("login",{url:"/login",templateUrl:t+"/login/login.html",controller:"LoginController",controllerAs:"_login"}).state("home",{url:"/",templateUrl:t+"/user/sidenav.html",controller:"UserController",controllerAs:"_user"}).state("home.dashboard",{url:"dashboard",views:{content:{templateUrl:t+"/dashboard/dashboard.html",controller:"DashboardController",controllerAs:"_dash"}}}).state("home.projects",{url:"projects",views:{content:{templateUrl:t+"/projects/list.html",controller:"ProjectsController",controllerAs:"_projects"}}}).state("home.singleProject",{url:"projects/:projectID",views:{content:{templateUrl:t+"/projects/singleProject.html",controller:"SingleProjectController",controllerAs:"_singleProject"}}}).state("home.tasks",{url:"tasks",views:{content:{templateUrl:t+"/tasks/list.html",controller:"tasksController",controllerAs:"_tasks"}}}).state("home.singleTask",{url:"projects/:projectID/task/:taskID",views:{content:{templateUrl:t+"/tasks/singleTask.html",controller:"SingleTaskController",controllerAs:"_singleTask"}}}).state("home.messages",{url:"messages",views:{content:{templateUrl:t+"/messages/list.html",controller:"MessagesController",controllerAs:"_messages"}}}).state("home.settings",{url:"settings",views:{content:{templateUrl:t+"/settings/settings.html",controller:"SettingsController",controllerAs:"_settings"}}})}var t="./scripts";angular.module("prakli").config(e),e.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){function e(e,t){t.firstDyOfWeek=1,t.formatDate=function(e){return moment(e).format("YYYY-MM-DD")},e.definePalette("ka-blue",{50:"96c5fd",100:"4a9bfc",200:"137dfc",300:"035bc4",400:"024da6",500:"023f88",600:"02316a",700:"01234c",800:"01152d",900:"00070f",A100:"96c5fd",A200:"4a9bfc",A400:"024da6",A700:"01234c",contrastDefaultColor:"light",contrastDarkColors:"50 100 A100 A200"}),e.definePalette("kaGrey",{50:"ffffff",100:"e0e1e1",200:"c4c5c6",300:"9fa1a3",400:"909194",500:"808285",600:"717375",700:"626366",800:"535456",900:"444547",A100:"ffffff",A200:"e0e1e1",A400:"909194",A700:"626366",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 A100 A200 A400"}),e.definePalette("kaLightGrey",{50:"ffffff",100:"ffffff",200:"ffffff",300:"ffffff",400:"f5f6f7",500:"e4e6e9",600:"d3d6db",700:"c2c7ce",800:"b1b7c0",900:"a1a8b2",A100:"ffffff",A200:"ffffff",A400:"f5f6f7",A700:"c2c7ce",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 400 500 600 700 800 900 A100 A200 A400 A700"});var n=["ka-blue","kaGrey","kaLightGrey","pink","purple","indigo","light-blue","green","light-green","yellow","amber","orange","red","brown"];angular.forEach(n,function(t,n){e.theme(t).primaryPalette(t).accentPalette("red").warnPalette("deep-orange")}),e.theme("default").primaryPalette("ka-blue").accentPalette("blue")}angular.module("prakli").config(e),e.$inject=["$mdThemingProvider","$mdDateLocaleProvider"]}(),function(){"use strickt";function e(e,t,n,r,a){var s="hu";if(r.lng=[],e.getObject("user")){var o="";if(e.get("redir"))o=e.get("redir"),e.remove("redir");else{var l=t.path();o="/"!=l&&"/login"!=l?l:"/dashboard"}s=e.getObject("user").defaultlang,a.getLanguage(s).then(function(e){r.lng=e}),t.path(o)}else a.getLanguage(s).then(function(e){r.lng=e}),"/"!=t.path()&&"/login"!=t.path()&&e.put("redir",t.path()),t.path("/login")}angular.module("prakli").run(e),e.$inject=["$cookies","$location","$state","$rootScope","lng"]}(),function(){"use strict";function e(e){function t(t){return e.get("api/"+t+".json").then(n)["catch"](r)}function n(e){return e.data}function r(e){console.log("XHR Failed for Language! ERROR:"),console.log(e.data)}this.getLanguage=t}angular.module("prakli").service("lng",e),e.$inject=["$http"]}(),function(){"use strict";function e(e){function t(){function t(e){return e.data}function n(e){console.log("XHR failed for USERS! ERROR: "),console.log(e.data)}return e.get("api/users").then(t)["catch"](n)}function n(t){function n(e){return e.data}function r(e,t){console.log("XHR failed for USER `"+t+"`! ERROR: "),console.log(e.data)}return e.get("api/user/"+t).then(n)["catch"](r)}function r(t){function n(e){return e.data}function r(e){console.log("XHR Failed POST for Users! ERROR:"),console.log(e.data)}var a={method:"POST",url:"api/user",data:t,headers:{"Content-Type":"application/json","Cache-Control":"no-cache"}};return e(a).then(n)["catch"](r)}function a(t){function n(e){return e.data}function r(e){console.log("XHR Failed PUT for Users! ERROR:"),console.log(e.data)}var a={method:"PUT",url:"api/user/"+t.username,data:t,headers:{"Content-Type":"application/json","Cache-Control":"no-cache"}};return e(a).then(n)["catch"](r)}var s={getList:t,get:n,add:r,update:a};return s}angular.module("prakli").factory("Users",e),e.$inject=["$http"]}(),function(){"use strict";function e(e){function t(t){function n(e){return e.data}function r(e){console.log("XHR Failed for PROJECTS! ERROR:"),console.log(e.data)}return e.get("api/projects/employees/"+t).then(n)["catch"](r)}function n(t){function n(e){return e.data}function r(e){console.log("XHR Failed PUT for Project! ERROR:"),console.log(e.data)}var a={method:"PUT",url:"api/project/"+t.id,data:t,headers:{"Content-Type":"application/json","Cache-Control":"no-cache"}};return e(a).then(n)["catch"](r)}function r(t){function n(e){return e.data}function r(e){console.log("XHR Failed POST for PROJECT! ERROR:"),console.log(e.data)}var a={method:"POST",url:"api/project",data:t,headers:{"Content-Type":"application/json","Cache-Control":"no-cache"}};return e(a).then(n)["catch"](r)}function a(t){function n(e){return e.data}function r(e){console.log("XHR Failed for PROJECTS! ERROR:"),console.log(e.data)}return e.get("api/projects/"+t).then(n)["catch"](r)}function s(t){function n(e){return e.data}function r(e){console.log("XHR Failed for PROJECTS! ERROR:"),console.log(e.data)}return e.get("api/project/"+t).then(n)["catch"](r)}var o={getMyProjects:a,getProject:s,getEmpl:t,insert:r,save:n};return o}angular.module("prakli").factory("Projects",e),e.$inject=["$http"]}(),function(){"use strict";function e(e){function t(t){function n(e){return e.data}function r(e){console.log("XHR Failed for MESSAGE! ERROR:"),console.log(e.data)}return e.get("api/messages/"+t).then(n)["catch"](r)}function n(t){function n(e){return e.data}function r(e){console.log("XHR Failed DELETE for MESSAGE! ERROR:"),console.log(e.data)}var a={method:"DELETE",url:"api/message/"+t,headers:{"Content-Type":"application/json","Cache-Control":"no-cache"}};return e(a).then(n)["catch"](r)}function r(t){function n(e){return e.data}function r(e){console.log("XHR Failed POST for MESSAGE! ERROR:"),console.log(e.data)}var a={method:"POST",url:"api/message",data:t,headers:{"Content-Type":"application/json","Cache-Control":"no-cache"}};return e(a).then(n)["catch"](r)}var a={insert:r,getMyMessages:t,"delete":n};return a}angular.module("prakli").factory("Messages",e),e.$inject=["$http"]}(),function(){"use strict";function e(e){function t(){function t(e){return e.data}function n(e){console.log("XHR failed for TYPES! ERROR: "),console.log(e.data)}return e.get("api/types").then(t)["catch"](n)}function n(t){function n(e){return e.data}function r(e){console.log("XHR Failed PUT for TYPES! ERROR:"),console.log(e.data)}var a={method:"POST",url:"api/types",data:t,headers:{"Content-Type":"application/json","Cache-Control":"no-cache"}};return e(a).then(n)["catch"](r)}var r={getTypes:t,updateTypes:n};return r}angular.module("prakli").factory("Types",e),e.$inject=["$http"]}(),function(){"use strict";function e(e,t,n,r){function a(){r.get(o.user.username).then(function(e){if(e[0])if(e[0].password==o.user.password){delete e[0].password,t.putObject("user",e[0]),o.error={},o.user={};var r="/dashboard";if(t.get("redir")){var r=t.get("redir");t.remove("redir")}n.path(r)}else o.error.message="Incorrect Password!",o.user.password="";else o.error.message="No such user in the List!"})}function s(){}var o=this;o.user={},o.error={},o.authenticate=a,s()}angular.module("prakli").controller("LoginController",e),e.$inject=["$scope","$cookies","$location","Users"]}(),function(){"use strict";function e(e,t,n,r,a){function s(){}e.lng=n.lng,e.today=new Date,e.minDate=e.today,e.tag=e.lng.New+" - "+e.lng.Project,e.onlyWeekdays=function(e){var t=e.getDay();return t>0&&6>t},e.users=n.users,e.types=[],r.pr&&(e.tag=e.lng.EDIT,e.project=r.pr,e.project.duedate=new Date(e.project.duedate)),e.types=n.types,e.hide=function(){t.hide()},e.cancel=function(){t.cancel()},e.answer=function(e){t.hide(e)},s()}angular.module("prakli").controller("newProjectController",e),e.$inject=["$scope","$mdDialog","$rootScope","locals","Types"]}(),function(){"use strict";function e(e,t,n,r,a,s,o){function l(e){d.projectChart={options:{chart:{type:"pieChart",height:300,width:400,margin:{left:"10",right:"10"},x:function(e){return e.x},y:function(e){return e.y},showLabels:!0,duration:500,legend:{margin:{top:5,right:5,bottom:5,left:5}}}}},d.projectChart.data=[{x:"Open",y:e.open,color:"#023f88"},{x:"Closed",y:e.closed,color:"#388E3C"}]}function c(t){d.pending=[],d.pst=[],d.dst=[],d.cst=[],d.ast=[],d.closed=[],d.allTasks=[],angular.forEach(t,function(e,t){angular.forEach(e.tasks,function(t,n){if(t.responsible==d.currentuser.username)switch(t.projectid=e.id,d.allTasks.push(t),t.status){case"Pending":d.pending.push(t);break;case"P":d.pst.push(t);break;case"D":d.dst.push(t);break;case"C":d.cst.push(t);break;case"A":d.ast.push(t);break;case"Closed":d.closed.push(t)}})});var n={};n={pending:d.pending.length,p:d.pst.length,d:d.dst.length,c:d.cst.length,a:d.ast.length,closed:d.closed.length},d.taskChart={options:{chart:{type:"discreteBarChart",height:300,margin:{top:20,right:20,bottom:50,left:55},x:function(e){return e.label},y:function(e){return e.value},showValues:!0,valueFormat:function(e){return d3.format("")(e)},duration:500,xAxis:{axisLabel:e.lng.Status},yAxis:{axisLabel:e.lng.Tasks,axisLabelDistance:0}}},data:[{key:"Tasks",values:[{label:"Pending",value:n.pending,color:"#a8d8f8"},{label:"P",value:n.p,color:"#d8d8d8"},{label:"D",value:n.d,color:"#d8d8d8"},{label:"C",value:n.c,color:"#d8d8d8"},{label:"A",value:n.a,color:"#d8d8d8"},{label:"Closed",value:n.closed,color:"#d8f8a8"}]}]}}function i(e){a.show({controller:"newProjectController",templateUrl:"scripts/projects/newProject.html",parent:angular.element(document.body),targetEvent:e,locals:{},clickOutsideToClose:!1}).then(function(e){e.duedate=new Date(e.duedate).getTime(),e.owner=n.getObject("user").username,e.status=0,o.insert(e).then(function(e){s.projects.push(e[0]),g={open:r("filter")(s.projects,{status:"!100"}).length,closed:r("filter")(s.projects,{status:100}).length},l(g),c(s.projects)})},function(){})}function u(){c(s.projects)}var d=this;d.currentuser=n.getObject("user"),d.projectChart={};var g={};d.pending=[],d.pst=[],d.dst=[],d.cst=[],d.ast=[],d.closed=[],d.allTasks=[],0==s.projects.length?o.getMyProjects(d.currentuser.username).then(function(e){g={open:r("filter")(e,{status:"!100",owner:d.currentuser.username}).length,closed:r("filter")(e,{status:100,owner:d.currentuser.username}).length},l(g),c(e)}):(g={open:r("filter")(s.projects,{status:"!100",owner:d.currentuser.username}).length,closed:r("filter")(s.projects,{status:100,owner:d.currentuser.username}).length},l(g),c(s.projects)),d.newProject=i,u()}angular.module("prakli").controller("DashboardController",e),e.$inject=["$scope","$window","$cookies","$filter","$mdDialog","$rootScope","Projects"]}(),function(){"use strict";function e(e,t,n,r,a,s,o,l,c,i){function u(){t.remove("user"),n.location.reload()}function d(e){a.show({controller:"newProjectController",templateUrl:"scripts/projects/newProject.html",parent:angular.element(document.body),targetEvent:e,locals:{},clickOutsideToClose:!1}).then(function(e){e.duedate=new Date(e.duedate).getTime()+864e5,e.owner=t.getObject("user").username,e.status=0,o.insert(e).then(function(e){s.projects.push(e[0])})},function(){})}function g(n){a.show({controller:"newMessageController",templateUrl:"scripts/messages/newMessage.html",parent:angular.element(document.body),targetEvent:n,locals:{},clickOutsideToClose:!1}).then(function(n){n.sender=t.getObject("user").username,n.senton=(new Date).getTime(),c.insert(n),e.go("home.messages",{},{reload:!0})},function(){})}function f(){return l.getList().then(function(e){return s.users=e,s.users})}function p(e){return o.getMyProjects(e).then(function(e){return s.projects=e,angular.forEach(s.projects,function(e,t){var n={P:25,D:50,C:75,A:100},r=100;angular.forEach(e.tasks,function(e,a){"Closed"!=e.status&&"Pending"!=e.status&&"Rejected"!=e.status?n[e.status]<r&&(r=n[e.status],s.projects[t].status=r):"Closed"==e.status&&100==r?(r=100,s.projects[t].status=100):("Pending"==e.status||"Rejected"==e.status)&&(r=0,s.projects[t].status=0)})}),s.projects})}function h(e){return c.getMyMessages(e).then(function(e){return s.messages=e,s.messages})}function m(){return i.getTypes().then(function(e){return s.types=e,s.types})}function k(){f(),p(j.user.username),h(j.user.username),m()}var j=this;j.user=t.getObject("user"),s.toggleSidenav=function(){r("left").toggle()},j.logout=u,j.newProject=d,j.newMessage=g,s.users=[],s.projects=[],s.messages=[],s.types=[],k()}angular.module("prakli").controller("UserController",e),e.$inject=["$state","$cookies","$window","$mdSidenav","$mdDialog","$rootScope","Projects","Users","Messages","Types"]}(),function(){"use strict";function e(e,t,n,r,a){function s(){var e=[],t=a("filter")(r.projects,{owner:"!"+c.currentuser.username});return angular.forEach(t,function(n,r){var s=a("filter")(n.tasks,{responsible:c.currentuser.username});s&&-1==e.indexOf(t)&&n.attendees&&-1==n.attendees.indexOf(c.currentuser.username)&&e.push(n)}),e}function o(){var e=[];return angular.forEach(r.projects,function(t,n){t.attendees&&t.attendees.indexOf(c.currentuser.username)>-1&&e.push(t)}),e}function l(){}var c=this;c.currentuser=t.getObject("user"),c.participant=s,c.viewer=o,l()}angular.module("prakli").controller("ProjectsController",e),e.$inject=["$scope","$cookies","Projects","$rootScope","$filter"]}(),function(){"use strict";function e(e,t,n,r,a,s,o,l,c,i){function u(e){return r.getProject(e).then(function(e){return k.pr=e[0],g(),k.pr})}function d(e){var t="";return"Pending"==e.status?t="default":new Date(e.duedate)<new Date?t="Late":new Date(e.duedate)>new Date&&new Date(e.duedate)<=new Date((new Date).getTime()+432e6)?t="Soon":(e.closedon||new Date(e.duedate)>new Date((new Date).getTime()+432e6))&&(t="Ontime"),k.st[t]}function g(){k.projectChart={options:{chart:{type:"multiBarHorizontalChart",height:400,x:function(e){return e.label},y:function(e){return e.value},showControls:!1,showValues:!0,duration:500,stacked:!0,xAxis:{axisLabel:e.lng.status,showMaxMin:!1},yAxis:{axisLabel:e.lng.count,tickFormat:function(e){return d3.format("d")(e)}},valueFormat:function(e){return d3.format("d")(e)}},title:{enable:!0,text:"Status summary for project Tasks"}},data:k.chartData()}}function f(){var t=[],n=[0,0,0,0,0,0],r=[0,0,0,0,0,0],a=[0,0,0,0,0,0];return angular.forEach(k.pr.tasks,function(e,t){if(new Date(e.duedate)<new Date)switch(e.status){case"Pending":n[0]=n[0]+1;break;case"P":n[1]=n[1]+1;break;case"D":n[2]=n[2]+1;break;case"C":n[3]=n[3]+1;break;case"A":n[4]=n[4]+1;break;case"Closed":a[5]=a[5]+1}else if(new Date(e.duedate)>new Date&&new Date(e.duedate)<=new Date((new Date).getTime()+432e6))switch(e.status){case"Pending":r[0]=r[0]+1;break;case"P":r[1]=r[1]+1;break;case"D":r[2]=r[2]+1;break;case"C":r[3]=r[3]+1;break;case"A":r[4]=r[4]+1;break;case"Closed":a[5]=a[5]+1}else if(new Date(e.duedate)>new Date((new Date).getTime()+432e6))switch(e.status){case"Pending":a[0]=a[0]+1;break;case"P":a[1]=a[1]+1;break;case"D":a[2]=a[2]+1;break;case"C":a[3]=a[3]+1;break;case"A":a[4]=a[4]+1;break;case"Closed":a[5]=a[5]+1}}),t=[{key:e.lng.Late,color:"#c9302c",values:[{label:e.lng.Pending,value:n[0]},{label:e.lng.P,value:n[1]},{label:e.lng.D,value:n[2]},{label:e.lng.C,value:n[3]},{label:e.lng.A,value:n[4]},{label:e.lng.Closed,value:n[5]}]},{key:e.lng.Comming,color:"#ec971f",values:[{label:e.lng.Pending,value:r[0]},{label:e.lng.P,value:r[1]},{label:e.lng.D,value:r[2]},{label:e.lng.C,value:r[3]},{label:e.lng.A,value:r[4]},{label:e.lng.Closed,value:r[5]}]},{key:e.lng.OnTime,color:"#449d44",values:[{label:e.lng.Pending,value:a[0]},{label:e.lng.P,value:a[1]},{label:e.lng.D,value:a[2]},{label:e.lng.C,value:a[3]},{label:e.lng.A,value:a[4]},{label:e.lng.Closed,value:a[5]}]}]}function p(e){a.show({controller:"newTaskController",templateUrl:"scripts/tasks/newTask.html",parent:angular.element(document.body),targetEvent:e,locals:{},clickOutsideToClose:!1}).then(function(e){e.duedate=new Date(e.duedate).getTime()+864e5,e.createdon=(new Date).getTime(),e.status="Pending",e.inproject_id=l("filter")(k.pr.tasks).length+1;var t={};t.title=o.lng.New+" "+o.lng.Task+" "+o.lng.Assigned,t.recipient=e.responsible,t.sender=k.pr.owner,t.senton=(new Date).getTime(),t.text=o.lng.Task+"\n\n Probléma: "+e.problem+"\n\n Akció: "+e.action,k.pr.tasks.push(e),r.save(k.pr).then(function(e){angular.forEach(o.projects,function(r,a){r.id==e[0].id&&(o.projects[a]=e[0],i.insert(t),g(),n.go(n.current,{},{reload:!0}))})},function(){})})}function h(e,t){a.show({controller:"newProjectController",templateUrl:"scripts/projects/newProject.html",locals:{pr:t},clickOutsideToClose:!1}).then(function(e){e.duedate=new Date(e.duedate).getTime()+864e5,angular.forEach(e.tasks,function(t,n){t.title=e.title}),r.save(e).then(function(e){n.go(n.current,{},{reload:!0})})})}function m(){u(t.projectID)}var k=this;k.currentuser=c.getObject("user"),k.pr={},k.setStatus=d,k.st={Late:"red",Soon:"yellow",Ontime:"green"},k.projectChart={},k.chartData=f,m(),k.newTask=p,k.taskStatuses={Pending:0,P:25,D:50,C:75,A:100,Closed:100},k.editProject=h}angular.module("prakli").controller("SingleProjectController",e),e.$inject=["$scope","$stateParams","$state","Projects","$mdDialog","$mdMedia","$rootScope","$filter","$cookies","Messages"]}(),function(){"use strict";function e(e,t,n,r,a){function s(e){angular.forEach(e,function(e,t){angular.forEach(e.tasks,function(t,n){t.responsible==l.currentuser.username&&(t.projectid=e.id,new Date(t.duedate)<new Date?t.timer="Late":new Date(t.duedate)>new Date&&new Date(t.duedate)<=new Date((new Date).getTime()+432e6)?t.timer="Soon":t.timer="Ontime",l.tasks.push(t))})})}function o(){}var l=this;l.currentuser=t.getObject("user"),l.tasks=[],0==n.projects.length?a.getMyProjects(l.currentuser.username).then(function(e){s(e)},function(){}):s(n.projects),l.taskStatuses={Pending:0,P:25,D:50,C:75,A:100,Closed:100},l.st={Late:"red",Soon:"yellow",Ontime:"green"},o()}angular.module("prakli").controller("tasksController",e),e.$inject=["$scope","$cookies","$rootScope","$filter","Projects"]}(),function(){"use strict";function e(e,t,n,r,a,s){function o(){}e.lng=n.lng,e.users=n.users,e.projects=n.projects,e.tag=e.lng.New+" - "+e.lng.Task,e.thisProject=a("filter")(e.projects,{id:r.projectID})[0],e.today=new Date,e.minDate=e.today,e.onlyWeekdays=function(e){var t=e.getDay();return t>0&&6>t},e.newtask={},e.newtask.title=e.thisProject.title,e.maxDate=new Date(e.thisProject.duedate),e.affects=["FMEA","CP","SOP"],s._singleTask&&(e.tag=e.lng.EDIT,e.newtask=s._singleTask.task,e.newtask.duedate=new Date(e.newtask.duedate)),e.hide=function(){t.hide()},e.cancel=function(){t.cancel()},e.answer=function(e){t.hide(e)},o()}angular.module("prakli").controller("newTaskController",e),e.$inject=["$scope","$mdDialog","$rootScope","$stateParams","$filter","locals"]}(),function(){"use strict";function e(e,t,n,r,a,s,o,l,c){function i(){"Pending"==m.task.status?m.timer="default":new Date(m.task.duedate)<new Date?m.timer="Late":!m.task.closedon&&new Date(m.task.duedate)>new Date&&new Date(m.task.duedate)<=new Date((new Date).getTime()+432e6)?m.timer="Soon":(m.task.closedon||new Date(m.task.duedate)>new Date((new Date).getTime()+432e6))&&(m.timer="Ontime")}function u(e){var t=e;if(m.currentuser.username==m.task.responsible)switch(t){case"Pending":t="P";break;case"P":t="D";break;case"D":t="C";break;case"C":t="A"}return m.currentuser.username==m.thisProject.owner&&"A"==t&&(t="Closed",m.task.closedon=(new Date).getTime()),i(),t}function d(e){angular.forEach(m.thisProject.tasks,function(e,t){if(e.id==m.task.id){if(m.defaultResponsible!=m.task.responsible&&"Rejected"==m.task.status&&(m.task.status="Pending"),"Pending"==m.task.status){var r={};r.title=n.lng.New+" "+n.lng.Task+" "+n.lng.Assigned,r.recipient=m.task.responsible,r.sender=m.thisProject.owner,r.senton=(new Date).getTime(),r.taskreference=m.task.id,r.text=m.task.id+". "+n.lng.Task+"\n\n Probléma:"+m.task.problem+"\n\n Akció:"+m.task.action,r.read=0,c.insert(r)}m.thisProject.tasks[t]=m.task}}),s.save(m.thisProject).then(function(e){o.go("home.singleProject",{projectID:m.thisProject.id})})}function g(e,n){m.messageTitle="Reject "+n.title,l.show({controller:"newMessageController",templateUrl:"scripts/messages/newMessage.html",parent:angular.element(document.body),targetEvent:e,locals:{_singleTask:{task:n,thisProject:m.thisProject}},clickOutsideToClose:!1}).then(function(e){e.sender=t.getObject("user").username,e.senton=(new Date).getTime(),e.read=0,m.task.status="Rejected",m.save(m.thisProject),c.insert(e)},function(){})}function f(e,t){l.show({controller:"newTaskController",templateUrl:"scripts/tasks/newTask.html",parent:angular.element(document.body),targetEvent:e,locals:{_singleTask:{task:t}},clickOutsideToClose:!1}).then(function(e){e.duedate=new Date(e.duedate).getTime()+864e5,(m.defaultResponsible!=e.responsible||m.defaultDuedate!=e.duedate)&&(m.defaultResponsible!=e.responsible&&(t.status="Pending"),t.modified?t.modified.push({on:(new Date).getTime(),duedate:m.defaultDuedate,status:m.defaultStatus,responsible:m.defaultResponsible}):(t.modified=[],t.modified.push({on:(new Date).getTime(),duedate:m.defaultDuedate,status:m.defaultStatus,responsible:m.defaultResponsible}))),s.save(m.thisProject).then(function(e){o.go("home.singleProject",{projectID:e[0].id})})})}function p(e,t){var r={};r.title=t.title,r.action=t.action,r.problem=t.problem,r.duedate=t.duedate,r.affecting=t.affecting,l.show({controller:"newTaskController",templateUrl:"scripts/tasks/newTask.html",parent:angular.element(document.body),targetEvent:e,locals:{_singleTask:{task:r}},clickOutsideToClose:!1}).then(function(e){e.duedate=new Date(e.duedate).getTime()+864e5,e.createdon=(new Date).getTime(),e.status="Pending",e.inproject_id=a("filter")(m.thisProject.tasks).length+1;var t={};t.title=n.lng.New+" "+n.lng.Task+" "+n.lng.Assigned,t.recipient=e.responsible,t.sender=m.thisProject.owner,t.senton=(new Date).getTime(),t.taskreference=e.id,t.text=e.id+". "+n.lng.Task+"\n\n Probléma: "+e.problem+"\n\n Akció: "+e.action,t.read=0,c.insert(t),m.thisProject.tasks.push(e),s.save(m.thisProject).then(function(e){angular.forEach(n.projects,function(t,r){t.id==e[0].id&&(n.projects[r]=e[0],o.go("home.singleProject",{projectID:m.thisProject.id}))})},function(){})})}function h(){}var m=this;m.currentuser=t.getObject("user"),m.defaultStatus="",0==n.projects.length?s.getMyProjects(m.currentuser.username).then(function(e){n.projects=e,m.thisProject=a("filter")(n.projects,{id:r.projectID})[0],m.task=a("filter")(m.thisProject.tasks,{id:r.taskID})[0],m.defaultStatus=m.task.status,m.defaultResponsible=m.task.responsible,m.defaultDuedate=m.task.duedate,i()},function(e){}):(m.thisProject=a("filter")(n.projects,{id:r.projectID})[0],m.task=a("filter")(m.thisProject.tasks,{id:r.taskID})[0],m.defaultStatus=m.task.status,m.defaultResponsible=m.task.responsible,m.defaultDuedate=m.task.duedate,i()),m.advanceStatus=u,m.save=d,m.cancel=function(){m.task.status=m.defaultStatus,history.back()},m.statuses={Pending:0,P:25,D:50,C:75,A:100,Closed:100},m.st={Late:"red",Soon:"yellow",Ontime:"green"},h(),m.newMessage=g,m.edit=f,m.duplicate=p}angular.module("prakli").controller("SingleTaskController",e),e.$inject=["$scope","$cookies","$rootScope","$stateParams","$filter","Projects","$state","$mdDialog","Messages"]}(),function(){"use strict";function e(e,t,n,r,a,s){function o(e){a["delete"](e).then(function(r){angular.forEach(n.messages,function(r,a){r.id==e&&(n.messages.splice(a,1),t.go(t.current,{},{reload:!0}))})})}function l(e,n){u.message=n,s.show({controller:"newMessageController",templateUrl:"scripts/messages/newMessage.html",parent:angular.element(document.body),targetEvent:e,locals:{message:n},clickOutsideToClose:!1}).then(function(e){e.sender=r.getObject("user").username,e.senton=(new Date).getTime(),a.insert(e),t.go(t.current,{},{reload:!0})},function(){})}function c(e){return a.getMyMessages(e).then(function(e){return n.messages=e,n.messages})}function i(){e.sortType="senton",e.sortReverse=!0,c(u.currentuser.username)}var u=this;u.currentuser=r.getObject("user"),i(),u.deleteMessage=o,u.replyMessage=l}angular.module("prakli").controller("MessagesController",e),e.$inject=["$scope","$state","$rootScope","$cookies","Messages","$mdDialog"]}(),function(){"use strict";function e(e,t,n,r){function a(){}e.lng=n.lng,e.users=n.users,e.message={},r._singleTask&&(e.message.title=r._singleTask.task.title+" Projekt - "+r._singleTask.task.id+". "+e.lng.Task+" "+e.lng.Reject,e.message.taskreference=r._singleTask.task.id,e.message.recipient=r._singleTask.thisProject.owner),r.message&&(e.message.title=r.message.title,e.message.recipient=r.message.sender),e.hide=function(){t.hide()},e.cancel=function(){t.cancel()},e.answer=function(e){t.hide(e)},a()}angular.module("prakli").controller("newMessageController",e),e.$inject=["$scope","$mdDialog","$rootScope","locals"]}(),function(){"use strict";function e(e,t,n,r,a,s,o,l,c,i){function u(){angular.forEach(n.types,function(e,t){""==e&&n.types.splice(t,1)}),i.updateTypes(n.types).then(function(e){console.log(e)})}function d(){j.currentuser.password=j.newpass,a.update(j.currentuser).then(function(e){j.message=e[0].success,j.newpass="",j.newpass2="",l(function(){j.message=""},2e3)})}function g(){var e=j.currentuser.defaultlang;c.getLanguage(e).then(function(e){n.lng=e}),j.currentuser.defaultlang=e,s.putObject("user",j.currentuser)}function f(){s.putObject("user",j.currentuser)}function p(){1==j.edit&&delete j["new"].password,j["new"].defaultlang="hu",j["new"].emailfreqvency="wk",j["new"].supervisor=j.currentuser.username,1==j.edit?a.update(j["new"]).then(function(e){j["new"]={},j.newUser=!1,j.edit=!1,j.neworg=!1}):a.add(j["new"]).then(function(e){j["new"]={},e[0].projects=0,e[0].tasks=0,n.users.push(e[0]),j.newUser=!1,j.neworg=!1})}function h(){var e=s.getObject("user");a.update(e).then(function(e){j.message=e[0].success,l(function(){j.message=""},2e3)})}function m(e){j.newUser=!0,j["new"]=e,j.edit=!0}function k(){j.edit=!1,""!=j.currentuser.supervisor?j.deforg=j.currentuser.organization:j.deforg="",j.projectChart={options:{chart:{type:"pieChart",height:300,width:300,margin:{left:"10",right:"10"},x:function(e){return e.type},y:function(e){return e.PC},showLabels:!0,donut:!0,donutRatio:.35,duration:500,legend:{margin:{top:5,right:5,bottom:5,left:5}},labelType:"percent"}}},t.get("api/reports/type").then(function(e){j.projectChart.data=e.data}),j.organizationChart={options:{chart:{type:"discreteBarChart",height:300,margin:{top:20,right:20,bottom:50,left:55},x:function(e){return e.organization},y:function(e){return e.PC},showValues:!0,showControls:!1,duration:500}}},t.get("api/reports/department").then(function(e){j.organizationChart.data=[{key:"Projects",values:e.data}]}),j.userChart={options:{chart:{type:"discreteBarChart",height:300,margin:{top:20,right:20,bottom:50,left:55},x:function(e){return e.name},y:function(e){return e.PC},showValues:!0,showControls:!1,duration:500}}},t.get("api/reports/userprojects").then(function(e){j.userChart.data=[{key:"Projects",values:e.data}]}),j.userTaskChart={options:{chart:{type:"discreteBarChart",height:300,margin:{top:20,right:20,bottom:50,left:55},x:function(e){return e.name},y:function(e){return e.PC},showValues:!0,showControls:!1,duration:500}}},t.get("api/reports/usertasks").then(function(e){j.userTaskChart.data=[{key:"Projects",values:e.data}]}),j.employeeChart={options:{chart:{type:"pieChart",height:400,width:600,margin:{left:"10",right:"10"},x:function(e){return e.org},y:function(e){return e.PC},showLabels:!0,donut:!0,donutRatio:.35,duration:500,legend:{margin:{top:5,right:5,bottom:5,left:5}},labelType:"percent"}}},t.get("api/reports/user").then(function(e){j.employeeChart.data=e.data})}var j=this;j.currentuser=s.getObject("user"),k(),j.saveTypes=u,j.saveNewPass=d,j.changeLanguage=g,j.changeEmailFreq=f,j.saveNewUser=p,j.saveUsersettings=h,j.editUser=m}angular.module("prakli").filter("unique",function(){return function(e,t){if(t===!1)return e;if((t||angular.isUndefined(t))&&angular.isArray(e)){var n=[],r=function(e){return angular.isObject(e)&&angular.isString(t)?e[t]:e};angular.forEach(e,function(e){for(var t=!1,a=0;a<n.length;a++)if(angular.equals(r(n[a]),r(e))){t=!0;break}t||n.push(e)}),e=n}return e}}).controller("SettingsController",e),e.$inject=["$scope","$http","$rootScope","Projects","Users","$cookies","$filter","$timeout","lng","Types"]}();