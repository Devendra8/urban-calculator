const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
form.addEventListener("reset", handleReset);

function handleSubmit(event) {
    event.preventDefault();
    const pps = getinputnumbervalue("pps");
    const eps = getinputnumbervalue("eps");
    const pe = getinputnumbervalue("pe");

    getResult(pps,eps);

}

function getinputnumbervalue(id){

    return document.getElementById(id).value;
}

function validateForm() {
    // TODO
    return true;
}


function getResult(pps, eps){
    const peratio = pps*eps;
    document.getElementById("pe").value = peratio.toFixed(2);
 
    
    
    const layout = `
      
      <div class="result-content2">
               Given Price of a Single Share = <strong> ${pps}</strong> <br>
              Number of outstanding shares = <strong> ${eps}</strong><br>
               Market Capitalization = <strong> ${peratio.toFixed(2)}</strong><br>
      </div>
      `;
  
  
    document.getElementById("BMI").innerHTML =  layout;
  }


function handleReset() {
    const result1 = document.getElementById("BMI");
    result1.innerHTML = "";
}  
