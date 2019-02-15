window.cipher = {
  //string,offset parametros de f(x)
  encode: (offset,string) => {
  
      let finalText = "";
      
    
      for (let i=0; i < string.length; i++){
       let asciicode = string[i].toUpperCase().charCodeAt();//convierte mensaje a valor ascii
       if (asciicode >= 65 && asciicode <= 90){
       let ascii = ((asciicode - 65 + offset) % 26 + 65);
       finalText+= String.fromCharCode(ascii);
       }else {
        finalText += string[i];
          }
  
      }
      return finalText;
  },
  
  decode: (offset,string) => {
  //guardo texto decifrado
      let finalText1 = "";
      //recorro texto ingresado con for
      for (let i = 0; i < string.length; i++) {
        //texto ingrsado cambia a codigo acssi ademas de transformar a mayuscula 
        let asciicode1 = string[i].toUpperCase().charCodeAt();
        //  SI +65 O -90 codigo ascii mayuscula  de A- Z
        if (asciicode1 >= 65 && asciicode1 <= 90) {
          //segun el resultado de asciiCode se + 65 y resta desplazamiento
          let ascii1 = ((asciicode1 + 65 - offset) % 26 + 65);
          //resultado funcion convierte a letra 
          finalText1 += String.fromCharCode(ascii1);
        }
        else {
          //
          finalText1 += string[i];
        }
      }
      return finalText1;
    }
  }