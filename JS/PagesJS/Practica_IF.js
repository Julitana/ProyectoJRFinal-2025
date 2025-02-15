console.log(`Funcionando Archivo: Practica_IF`);

// caso 1 

    function verificarEdad() {

        let edad = document.getElementById('edad').value;//gi
        let pais = document.getElementById('pais').value;
    
        console.log(edad)
        console.log(pais)
            }

//si la condicion se cumple se va mostrar 
//si no se cumple se muestra el else
if (edad >= 18) {

    alert(`Eres mayor de edad en ${pais} `)
} else {
    
    alert(`No eres mayor de edad en ${pais}`)
}

///caso 2
function verificarParImpar() {

    let numero3 = document.getElementById('numero3').value;

    let numeroconvertido = parseInt(numero3)

    if (numeroconvertido % 2 === 0) {
        
       document.getElementById('mensajeParImpar').innerText = `El numero ${numeroconvertido} es par`;
    } else {
        document.getElementById('mensajeParImpar').innerText = `El numero ${numeroconvertido} es Impar`;
    }

    console.log(numeroconvertido)
}
    
//caso 3 
    function evaluarNota() {
        
        let nota = document.getElementById('nota').value;
    
        let numeroconvertido = parseInt(nota)
        console.log(numeroconvertido)
    
        //mayor de 90 excelente nota
        //mayor a 70 aprobado 
        //menor 70 reprobado 
        if (numeroconvertido >= 90) {
           // alert("excelente nota")
            document.getElementById('mensajeNota').innerText = `El resultado es excelente nota`;
        }
        else if(numeroconvertido >= 70){
           // alert("aprobado")
            document.getElementById('mensajeNota').innerText = `El resultado es aprobado`;
        }     
        else {
            //alert("reprobado")
            document.getElementById('mensajeNota').innerText = `El resultado es reprobado`;
        }
    }
    
    //parse int
    //parseFloat decimales
    //monto * 0.9
      //caso 4
      //Cálculo de Descuento
      //Si tu compra supera los $100, recibirás un descuento del 10%.
         
      function calcularDescuento() {
        let compra = document.getElementById('monto').value;
         let descuento= 0.10
         let resultado = parseFloat (compra) - parseFloat (descuento)
      }
      
      if (compra >100) {
        document.getElementById('resultado').innerHTML= `Si la ${compra} es mayor 100 tiene un descuesto`;
        
      } else {
        document.getElementById('resultado').innerHTML= `Si la ${compra} no es mayor 100 no tiene un descuesto`;
      }

      function calcularDescuento() {
        let compra = document.getElementById('monto').value;
        let descuento = 0.10;
        let resultado= parseFloat(compra) * parseFloat( descuento);
      
        if (parseFloat(compra) > 100) { 
          document.getElementById('resultado').innerHTML = `El precio final con descuento es: $${resultado}`; // Mostrar resultado sin redondear
        } else {
          
          document.getElementById('resultado').innerHTML = `No tienes descuento. El precio final es: $${resultado}`; // Mostrar resultado sin redondear
        }
      }

     
      
       
    /// caso 5
    function verificarMayorMenor() {
        let mayor = parseFloat(document.getElementById('mayor').value);
        let menor = parseFloat(document.getElementById('menor').value);
    
        console.log("Mayor ingresado:", mayor);
        console.log("Menor ingresado:", menor);
    
        if (mayor > menor) {
            document.getElementById('mensajeEdadSimple').innerText = `El resultado es mayor`;
        } else if (mayor < menor) {
            document.getElementById('mensajeEdadSimple').innerText = `El resultado es menor`;
        } 
    } 