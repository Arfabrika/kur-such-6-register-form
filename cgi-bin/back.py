import cgi
 
form = cgi.FieldStorage()
f = open("a.txt", "a")

data = [''] * 2; i=0
for field in ('name', 'pass'):
      if field in form:
            if not isinstance(form[field], list):
                  data[i] = form[field].value
            else:
                  values = [x.value for x in form[field]]
                  data[i] = ', '.join(values)
            f.write(data[i] + "\n")
      i+=1
f.close()

outputFile = open("tmp.txt", "w")

inputFile = open("a.txt", "r")

lines_seen_so_far = set()

for line in inputFile:

	if line not in lines_seen_so_far:

		outputFile.write(line)

		lines_seen_so_far.add(line)	

inputFile.close()
outputFile.close()

with open("tmp.txt", "r") as input:
    with open("a.txt", "w") as output:
        for line in input:
            output.write(line)

print(u"Content-­type: text/html\n")
print("""
<head>
<meta charset="utf-8" />
<TITLE>OK</TITLE>
</head>
<script type= "text/javascript" src = "../common.js"></script>
<link rel="stylesheet" href="../main.css">
<body>
<h1>Vy uspeshno zaregistrirovalis'</h1>
<a href="../index.html"> Vernut'sya na glavnuyu </a>
</body>
""")
