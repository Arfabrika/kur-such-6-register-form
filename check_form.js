function mash() {
  var elems = document.getElementsByClassName('part');
  for (let i = 0; i < elems.length; i++)
  {
    elems[i].style.position = 'absolute';
    elems[i].style.top = '' + Math.random() * 99 + "%"
    elems[i].style.left = '' + Math.random() * 99 + "%"
    console.log(elems[i].style.top, elems[i].style.left);
  } 
}

function fake_button() {
  alert("Ne ta knopka\nAXXAXAXAXAXX")
  mash()
}

function serializeForm(formNode) {

  document.getElementById("name_hint").hidden = true; 
  document.getElementById("phone_hint").hidden = true;
  document.getElementById("type_hint").hidden = true;
  document.getElementById("pass_hint").hidden = true;
  document.getElementById("pass2_hint").hidden = true;
  document.getElementById("err").hidden = true;

  var err_flag = 0
  var pass1 = "";
  Array.from(formNode).map((element) => {
    const { name, type } = element;
    const value = element.value;

    if (name == "Oleg_check" && !element.checked)
    {
      if (confirm("Вы действительно являетесь Олегом?"))
      {
        window.location.replace("./Oleg.html")        
      }
      else
      {
        err_flag = 1
        console.log("qqq");
      }
    }
    
    if (name =='name' && value == '')
      document.getElementById('name_hint').hidden = false, err_flag = 1;

    if (name =='phone' && value == '')
      document.getElementById('phone_hint').hidden = false, err_flag = 1;

    if (name =='type' && (value == '' || value.length > 1))
      document.getElementById('type_hint').hidden = false, err_flag = 1;

    if (name =='pass')
    {
      if (value == '')
        document.getElementById('pass_hint').hidden = false, err_flag = 1; 
      else
        pass1 = value;
    } 

    if (name =='pass2' && value != pass1)
      document.getElementById('pass2_hint').hidden = false, err_flag = 1;
  })
  if (err_flag)
  {
    let button = document.createElement('input');
    button.type = "button";
    button.value = "Otpravit'";
    button.className = "part";
    button.name = "but";
    button.onclick = fake_button;
    document.getElementById('form').appendChild(button);
    mash()
    return false;
  }
  return true;
}
  
function check_input(event)
{
    if (serializeForm(applicantForm))
    {
      sendData(new FormData(form));
    }
    else
    {
      event.preventDefault()
      document.getElementById("err").hidden = false;
    }
}

async function sendData(data) {
  
    return await fetch('./cgi-bin/back.py', {
      method: 'POST',
      body: data,
    })
  }

const applicantForm = document.getElementById('form');
applicantForm.addEventListener('submit', check_input)