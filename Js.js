function Verificar() {
    const num1 = parseFloat(document.getElementById("num1").value);
    
    

   if (num1 >=0 && num1 <=3499) {
    let suma = num1;
    document.getElementById("result").textContent = `No se aplicó ningún Aumento a su salario: ${suma}`;
  } else if (num1 >=3500 && num1 <=6000) {
      let proceso = num1 * 0.03;
      let suma = num1 + proceso;
      document.getElementById("result").textContent = `Se aplicó un Aumento de 3% a su salario: ${suma}`;
    }  else if (num1 >=6001 && num1 <=10000) {
      let proceso = num1 * 0.07;
      let suma = num1 + proceso;
      document.getElementById("result").textContent = `Se aplicó un Aumento de 7% a su salario: ${suma}`;
    } else if (num1 >=10001 && num1 <=15000) {
      let proceso = num1 * 0.09;
      let suma = num1 + proceso;
      document.getElementById("result").textContent = `Se aplicó un Aumento de 9% a su salario: ${suma}`;
    } else if (num1 >=15001 && num1 <=1000000000000000000000000000000000000000000000000000) {
      let suma = num1;
    document.getElementById("result").textContent = `No se aplicó ningún Aumento a su salario: ${suma}`;
    } 
  }