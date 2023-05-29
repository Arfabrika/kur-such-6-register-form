import cgi
 
form = cgi.FieldStorage()

print(u"Content-­type: text/html\n")
print(f"""

<head>
<meta charset="utf-8" />
<TITLE>V sisteme</TITLE>
</head>
<body>
<h1>Uvazhaemyj <i>{form['name'].value}</i>, server ustal, i emu nuzhno nemnogo otdohnut'</h1>
<a href="../index.html"> Vernut'sya na glavnuyu </a>
</body>
""")