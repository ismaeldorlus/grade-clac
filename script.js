document.getElementById("Calc").addEventListener("click", calculate);

function calculate() {
  // input
  let client1 = Number(document.getElementById("CSS1").value);
  let struc1 = Number(document.getElementById("SP1").value);
  let struc2 = Number(document.getElementById("SP2").value);
  let client2 = Number(document.getElementById("CSS2").value);
  let proj = Number(document.getElementById("PA").value);

  // process
  let grade = Math.round((client1 + struc1 + struc2 + client2 + proj) / 5);
  Math.round(grade);
  // output
  document.getElementById("grade").innerHTML = grade;
}
