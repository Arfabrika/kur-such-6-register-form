function init ()
{
    window.open("./form.html")
}

let colors = ['red', 'pink', 'coral', 'orange', 'yellow' ,'green', 'white', 'black',
 'blue', 'brown', 'aqua'];
let index = 0;

function changeColor() {
  hds = document.getElementsByTagName('h1')
  for (let i = 0; i < hds.length; i++)
  {
    hds[i].style.setProperty('color', colors[index++]);
  }

  ps = document.getElementsByTagName('p')
  for (let i = 0; i < ps.length; i++)
  {
    ps[i].style.setProperty('color', colors[index++]);
  }

  if (document.getElementById('Oleg_label'))
    document.getElementById('Oleg_label').style.setProperty('color', colors[index++]);
  index %= colors.length;
}

let interval = setInterval(changeColor, 100);