<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">
<html lang="en" dir="ltr">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="Content-Script-Type" content="text/javascript">
<meta name="robots" content="noindex">
<title>Export: prakli - Adminer</title>
<link rel="stylesheet" type="text/css" href="?file=default.css&amp;version=3.5.1">
<script type="text/javascript" src="?file=functions.js&amp;version=3.5.1"></script>
<link rel="shortcut icon" type="image/x-icon" href="?file=favicon.ico&amp;version=3.5.1" id="favicon">
<link rel="stylesheet" type="text/css" href="adminer.css">

<body class="ltr nojs" onkeydown="bodyKeydown(event);" onload="bodyLoad('5.6');">
<script type="text/javascript">
document.body.className = document.body.className.replace(/ nojs/, ' js');
</script>

<div id="content">
<p id="breadcrumb"><a href=".">MySQL</a> &raquo; <a href='?username=root' accesskey='1' title='Alt+Shift+1'>Server</a> &raquo; <a href="?username=root&amp;db=prakli">prakli</a> &raquo; Export
<h2>Export: prakli</h2>

<form action="" method="post">
<table cellspacing="0">
<tr><th>Output<td><label><input type='radio' name='output' value='text' checked>open</label><label><input type='radio' name='output' value='file'>save</label><label><input type='radio' name='output' value='gz'>gzip</label>
<tr><th>Format<td><label><input type='radio' name='format' value='sql' checked>SQL</label><label><input type='radio' name='format' value='csv'>CSV,</label><label><input type='radio' name='format' value='csv;'>CSV;</label><label><input type='radio' name='format' value='tsv'>TSV</label>
<tr><th>Database<td><select name='db_style'><option><option>USE<option>DROP+CREATE<option selected>CREATE<option>CREATE+ALTER</select><label for='checkbox-1'><input type='checkbox' name='routines' value='1' id='checkbox-1'>Routines</label><label for='checkbox-2'><input type='checkbox' name='events' value='1' id='checkbox-2'>Events</label><tr><th>Tables<td><select name='table_style'><option><option selected>DROP+CREATE<option>CREATE<option>CREATE+ALTER</select><label for='checkbox-3'><input type='checkbox' name='auto_increment' value='1' id='checkbox-3'>Auto Increment</label><label for='checkbox-4'><input type='checkbox' name='triggers' value='1' checked id='checkbox-4'>Triggers</label><tr><th>Data<td><select name='data_style'><option selected><option>TRUNCATE+INSERT<option>INSERT<option>INSERT+UPDATE</select></table>
<p><input type="submit" value="Export">

<table cellspacing="0">
<thead><tr><th style='text-align: left;'><label><input type='checkbox' id='check-tables' checked onclick='formCheck(this, /^tables\[/);'>Tables</label><th style='text-align: right;'><label>Data<input type='checkbox' id='check-data' checked onclick='formCheck(this, /^data\[/);'></label></thead>
<tr><td><label for='checkbox-5'><input type='checkbox' name='tables[]' value='messages' checked onclick="checkboxClick(event, this); formUncheck(&#039;check-tables&#039;);" id='checkbox-5'>messages</label><td align='right'><label>~ 1<input type='checkbox' name='data[]' value='messages' checked onclick="checkboxClick(event, this); formUncheck(&#039;check-data&#039;);" id='checkbox-6'></label>
<tr><td><label for='checkbox-7'><input type='checkbox' name='tables[]' value='modified' checked onclick="checkboxClick(event, this); formUncheck(&#039;check-tables&#039;);" id='checkbox-7'>modified</label><td align='right'><label>~ 3<input type='checkbox' name='data[]' value='modified' checked onclick="checkboxClick(event, this); formUncheck(&#039;check-data&#039;);" id='checkbox-8'></label>
<tr><td><label for='checkbox-11'><input type='checkbox' name='tables[]' value='projects' checked onclick="checkboxClick(event, this); formUncheck(&#039;check-tables&#039;);" id='checkbox-11'>projects</label><td align='right'><label>~ 5<input type='checkbox' name='data[]' value='projects' checked onclick="checkboxClick(event, this); formUncheck(&#039;check-data&#039;);" id='checkbox-12'></label>
<tr><td><label for='checkbox-13'><input type='checkbox' name='tables[]' value='tasks' checked onclick="checkboxClick(event, this); formUncheck(&#039;check-tables&#039;);" id='checkbox-13'>tasks</label><td align='right'><label>~ 1<input type='checkbox' name='data[]' value='tasks' checked onclick="checkboxClick(event, this); formUncheck(&#039;check-data&#039;);" id='checkbox-14'></label>
<tr><td><label for='checkbox-15'><input type='checkbox' name='tables[]' value='users' checked onclick="checkboxClick(event, this); formUncheck(&#039;check-tables&#039;);" id='checkbox-15'>users</label><td align='right'><label>~ 10<input type='checkbox' name='data[]' value='users' checked onclick="checkboxClick(event, this); formUncheck(&#039;check-data&#039;);" id='checkbox-16'></label>
<tr><td><label for='checkbox-9'><input type='checkbox' name='tables[]' value='myempl' checked onclick="checkboxClick(event, this); formUncheck(&#039;check-tables&#039;);" id='checkbox-9'>myempl</label>
<tr><td><label for='checkbox-10'><input type='checkbox' name='tables[]' value='mytasks' checked onclick="checkboxClick(event, this); formUncheck(&#039;check-tables&#039;);" id='checkbox-10'>mytasks</label>
</table>
</form>
</div>

<div id="menu">
<h1>
<a href='http://www.adminer.org/' id='h1'>Adminer</a> <span class="version">3.5.1</span>
<a href="http://www.adminer.org/#download" id="version">4.2.4</a>
</h1>
<form action="" method="post">
<p class="logout">
<a href='?username=root&amp;db=prakli&amp;sql='>SQL command</a>
<a href='?username=root&amp;db=prakli&amp;dump=' id='dump' class='active'>Dump</a>
<input type="submit" name="logout" value="Logout">
<input type="hidden" name="token" value="875001">
</p>
</form>
<form action="">
<p id="dbs">
<input type="hidden" name="username" value="root"><select name='db' onchange="this.form.submit();"><option value="">(database)<option>information_schema<option>andre<option>customer_manager<option>mysql<option>performance_schema<option selected>prakli</select><input type="submit" value="Use" class='hidden'>
<input type="hidden" name="dump" value=""></p></form>
<p><a href="?username=root&amp;db=prakli&amp;create=">Create new table</a>
<p id='tables' onmouseover='menuOver(this);' onmouseout='menuOut(this);'>
<a href="?username=root&amp;db=prakli&amp;select=messages">select</a> <a href="?username=root&amp;db=prakli&amp;table=messages" title='Show structure'>messages</a><br>
<a href="?username=root&amp;db=prakli&amp;select=modified">select</a> <a href="?username=root&amp;db=prakli&amp;table=modified" title='Show structure'>modified</a><br>
<a href="?username=root&amp;db=prakli&amp;select=myempl">select</a> <a href="?username=root&amp;db=prakli&amp;table=myempl" title='Show structure'>myempl</a><br>
<a href="?username=root&amp;db=prakli&amp;select=mytasks">select</a> <a href="?username=root&amp;db=prakli&amp;table=mytasks" title='Show structure'>mytasks</a><br>
<a href="?username=root&amp;db=prakli&amp;select=projects">select</a> <a href="?username=root&amp;db=prakli&amp;table=projects" title='Show structure'>projects</a><br>
<a href="?username=root&amp;db=prakli&amp;select=tasks">select</a> <a href="?username=root&amp;db=prakli&amp;table=tasks" title='Show structure'>tasks</a><br>
<a href="?username=root&amp;db=prakli&amp;select=users">select</a> <a href="?username=root&amp;db=prakli&amp;table=users" title='Show structure'>users</a><br>
<script type='text/javascript'>
var jushLinks = { sql: [ '?username=root&db=prakli&table=$&', /\b(messages|modified|myempl|mytasks|projects|tasks|users)\b/g ] };
jushLinks.bac = jushLinks.sql;
jushLinks.bra = jushLinks.sql;
jushLinks.sqlite_quo = jushLinks.sql;
jushLinks.mssql_bra = jushLinks.sql;
</script>
</div>
