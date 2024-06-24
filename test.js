let result = 0;
function fun1() {
  d = document.getElementById("result");
  if (d.value == "6hour" || "10hour") {
    result += 0.7;
  }
  console.log(result);
}

function fun2() {
  d = document.getElementById("result");
  if (d.value == "yes" || "no") {
    result += 0.7;
  }
  console.log(result);
}

function fun3() {
  d = document.getElementById("result");
  if (d.value == "yes" || "no") {
    result += 0.8;
  }
  console.log(result);
}

function fun4() {
  d = document.getElementById("result");
  if (d.value == "yes" || "no") {
    result += 0.8;
  }
  console.log(result);
}

function fun5() {
  d = document.getElementById("result");
  if (d.value == "yes" || "no") {
    result += 0.8;
  }
  console.log(result);
}

function fun6() {
  d = document.getElementById("result");
  if (d.value == "yes" || "no") {
    result += 0.8;
  }
  console.log(result);
}

function fun7() {
  d = document.getElementById("result");
  if (d.value == "yes" || "no") {
    result += 0.9;
  }
  console.log(result);
}

function fun8() {
  d = document.getElementById("result");
  if (d.value == "yes" || "no") {
    result += 0.7;
  }
  console.log(result);
}

function fun9() {
  d = document.getElementById("result");
  if (d.value == "yes" || "no") {
    result += 0.75;
  }
  console.log(result);
}

function fun10() {
  d = document.getElementById("result");
  if (d.value == "Regularly" || "no") {
    result += 0.8;
  }
  console.log(result);
}

function fun11() {
  d = document.getElementById("result");
  if (d.value == "Sometimes" || "no") {
    result += 0.65;
  }
  console.log(result);
}

function fun12() {
  d = document.getElementById("result");
  if (d.value == "Dropped" || "no") {
    result += 0.5;
  }
  console.log(result);
}

function fun13() {
  d = document.getElementById("result");
  if (d.value == "Facebooking" || "no") {
    result += 0.3;
  }
  console.log(result);
}

function fun14() {
  d = document.getElementById("result");
  if (d.value == "Youtube" || "no") {
    result += 0.3;
  }
  console.log(result);
}

function fun15() {
  d = document.getElementById("result");
  if (d.value == "Gaming" || "no") {
    result += 0.3;
  }
  console.log(result);
}

function fun16() {
  d = document.getElementById("result");
  if (d.value == "yes" || "no") {
    result += 0.6;
  }
  console.log(result);
}

function fun17() {
  d = document.getElementById("result");
  if (d.value == "yes" || "no") {
    result += 0.7;
  }
  console.log(result);
}

function fun18() {
  d = document.getElementById("result");
  if (d.value == "yes" || "no") {
    result += 0.8;
  }
  console.log(result);
}

function fun19() {
  d = document.getElementById("result");
  if (d.value == "yes" || "no") {
    result += 0.65;
  }
  console.log(result);
}

function fun20() {
  d = document.getElementById("result");
  if (d.value == "yes" || "no") {
    result += 0.9;
  }
  console.log(result);
}

function fun21() {
  d = document.getElementById("result");
  if (d.value == "yes" || "no") {
    result += 0.85;
  }
  console.log(result);
}

function fun22() {
  d = document.getElementById("result");
  if (d.value == "yes" || "no") {
    result += 0.8;
  }
  console.log(result);
}

function fun23() {
  d = document.getElementById("result");
  if (d.value == "yes" || "no") {
    result += 0.6;
  }
  console.log(result);
}

function fun24() {
  d = document.getElementById("result");
  if (d.value == "yes" || "no") {
    result += 0.7;
  }
  console.log(result);
}

function fun25() {
  d = document.getElementById("result");
  if (d.value == "yes" || "no") {
    result += 0.7;
  }
  console.log(result);
}

function fun26() {
  d = document.getElementById("result");
  if (d.value == "yes" || "no") {
    result += 0.6;
  }
  console.log(result);
}

function fun27() {
  d = document.getElementById("result");
  if (d.value == "yes" || "no") {
    result += 0.65;
  }
  console.log(result);
}

function fun28() {
  d = document.getElementById("result");
  if (d.value == "yes" || "no") {
    result += 0.8;
  }
}

function fun29() {
  let final_result = ((result / 21) * 100).toFixed(2);
  const box = document.getElementById("Final_Result");
  box.innerHTML = `

<style>
h2{
text-align: center;
}
table, th, td {
  border: 1px solid black;
  padding: 8px;
  text-align: center;
  
}
tr:hover {background-color: #D6EEEE;}

h3{
text-align: center;
}

button {
    width: 25%;
    padding: 10px;
    background-color: #28a745;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
}

button:hover {
    background-color: #218838;

}
</style>

<h2>Identifying Suicidal Tendency</h2>
<br>

<table style="width:100%">
  <tr>
    <th>Result</th>
    <th>Comment</th>
  </tr>
  <tr>
    <td> < 40 </td>
    <td>No Risk</td>
  </tr>
  <tr>
    <td> > 40 </td>
    <td>Risk</td>
  </tr>
</table>
<br>
<br>

       <h3> Your Result =  ${final_result}% </h3> <br>
       <a href = "test.html" > <button type="button">Test Again!</button> </a>
        <a href = "index.html" > <button type="button" style="float: right;">Home</button> </a>


  `;
}