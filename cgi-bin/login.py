import cgi
 
form = cgi.FieldStorage()

name = form['name'].value
passw = form['pass'].value

find_flag = 1

f = open("a.txt", "r")
strs = f.readlines()
for i in range(0, len(strs)):
    strs[i] = strs[i].strip()
try:
    ind = strs.index(name)
    if strs[ind + 1] != passw:
        find_flag = 0
except Exception as e:
    find_flag = 0

if (find_flag):
    print(f"""
    <head>
    <meta charset="utf-8" />
    <TITLE>V sisteme</TITLE>
    </head>
    <script type= "text/javascript" src = "../common.js"></script>
    <link rel="stylesheet" href="../main.css">
    <body>
    <h1>Uvazhaemyj <i>{name}</i>, server ustal, i emu nuzhno nemnogo otdohnut'</h1>
    <a href="../index.html"> Vernut'sya na glavnuyu </a>
    <audio autoplay=true src="../media/yes.mp3">
    </body>
    """)
else:
    print(f"""
    <head>
    <meta charset="utf-8" />
    <TITLE>Net dostupa</TITLE>
    </head>
    <script type= "text/javascript" src = "../common.js"></script>
    <link rel="stylesheet" href="../main.css">
    <body>
    <h1>Vvedeny nepravil'nye dannye</h1>
    <a href="../index.html"> Vernut'sya na glavnuyu </a>
    <audio autoplay=true src="../media/no.mp3">
    </body>
    """)