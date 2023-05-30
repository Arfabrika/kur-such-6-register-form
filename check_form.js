var try_cnt = 0;

function serializeForm(formNode) {

  /*document.getElementById("name_hint").hidden = true; 
  document.getElementById("phone_hint").hidden = true;
  document.getElementById("type_hint").hidden = true;
  document.getElementById("pass_hint").hidden = true;
  document.getElementById("pass2_hint").hidden = true;
  document.getElementById("err").hidden = true;*/
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
        err_flag = 1
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
    return false;
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