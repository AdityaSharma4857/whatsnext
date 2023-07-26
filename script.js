function show() 
{
  event.preventDefault();

  let name = document.getElementById("name");
  let job = document.getElementById("job");
  let ms = document.getElementById("ms");
  let mba = document.getElementById("mba");

  if (name.value == "") 
  {
    alert("Name cannot be empty");
    ans.innerHTML = "";
    name.focus();
    return;
  }
  else if(name.value.trim()=="")
  {
    alert("Name cannot be spaces");
    ans.innerHTML = "";
    name.value = "";
    name.focus();
    return;
  }
  else if(! name.value.match(/^[A-Za-z ]+$/))
  {
    alert("Name should contain only alphabets");
    ans.innerHTML = "";
    name.value = "";
    name.focus();
    return;
  }


  let choice = "";
  if(job.checked)    choice = "Job";
  else if(ms.checked)    choice = "MS";
  else    choice = "MBA";

  let msg = "name=" + name.value + " choice = " + choice;
  ans.innerHTML = msg;

}