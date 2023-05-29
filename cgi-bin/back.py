import cgi
 
form = cgi.FieldStorage()
f = open("a.txt", "a")

data = [''] * 2; i=0
print(data)
for field in ('name', 'pass'):
      if not field in form:
            data[i] = '(unknown)'
      else:

            if not isinstance(form[field], list):
                  data[i] = form[field].value
            else:
                  values = [x.value for x in form[field]]
                  data[i] = ', '.join(values)
      f.write(data[i] + "\n")
      i+=1
f.write("\n")
print(u"Content-­type: text/html\n")
print("""

<head>
<meta charset="utf-8" />
<TITLE>OK</TITLE>
</head>
<body>
<h1>Vy uspeshno zaregistrirovalis'</h1>
<a href="../index.html"> Vernut'sya na glavnuyu </a>
</body>
""")