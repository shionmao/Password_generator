let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contrasenia = document.getElementById("contrasena");
let message = document.getElementById("message");

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

function generar(){

    let numeroDigitado = parseInt(cantidad.value);
    
    if(isNaN(numeroDigitado) || numeroDigitado==0){
        alert("La Cantidad de Caracteres no puede estar vacía y no debe de ser 0"); 
        document.getElementById("cantidad").value = ""; 
     }else{
      let password = "";

     for(let i = 0; i < numeroDigitado; i++){
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random()*cadenaCaracteres.length)];
        password += caracterAleatorio;
       
     }
     contrasenia.value = password;
     }          
}

function limpiar(){
   document.getElementById("contrasena").value = "";
   document.getElementById("cantidad").value = "";
   document.getElementById("message").innerHTML = "";
}

function validarContrasena(){   

   const campoContrasenia = contrasenia.value;

   if(campoContrasenia == ""){
      alert("Debe de ingresar una cantidad para validar la contraseña");
   }

   let strength = 0;

   if(campoContrasenia.match(/[a-z]+/)){
      strength++;
   }

   if(campoContrasenia.match(/[A-Z]+/)){
      strength++;
   }

   if(campoContrasenia.match(/[0-9]+/)){
      strength++;
   }

   if(campoContrasenia.match(/[$@#%&/*]+/)){
      strength++;
   }

   if(campoContrasenia.length >= 8){
      strength++;
   }

   switch (strength){
      case 0: 
         message.style.color = "none";
         break;
      case 1:
         message.textContent = 'Muy Debil';
         message.style.color = '#ff0000';
         break;
      case 2:
         message.textContent = 'Debil';
         message.style.color = '#ffec00';
         break;
      case 3:
         message.textContent = 'Media';
         message.style.color = '#ffe000';
         break;
      case 4:
         message.textContent = 'Fuerte';
         message.style.color = '#20c500';
         break;
      case 5:
         message.textContent = 'Muy Fuerte';
         message.style.color = '#157e00';
         break;        
      }
}




 


  


