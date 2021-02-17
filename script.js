let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
 let myObj = JSON.parse(this.responseText);
 document.getElementById("thename").innerHTML = myObj.name;
 document.getElementById("bday").innerHTML = myObj.birthday;
 }
};
newRequest.open("GET", "einstein.json", true);
newRequest.send();

function buttonFunction(){
 let newRequest1 = new XMLHttpRequest();
 newRequest1.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
  let myObj = JSON.parse(this.responseText);
  document.getElementById("thebio").innerHTML = myObj.bio;
  }
 };
 newRequest1.open("GET", "einstein.json", true);
 newRequest1.send();
}
