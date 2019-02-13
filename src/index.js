/**al hacer click btnaceptar se ejecuta f(x) */
document.getElementById("btnAceptar").addEventListener("click",() => { 
    let pantalla2=document.getElementById("box2");
    pantalla2.style.display="block";
    let pantalla1=document.getElementById("box1");
    pantalla1.style.display="none";
})

document.getElementById("btnEncode").addEventListener("click",() => {
  let string = document.getElementById("cipherCode").value;//rescato texto
  let offset = parseInt(document.getElementById("move").value);//rescato n desplazamiento .value
 document.getElementById("containerEmpty").innerHTML = cipher.encode(offset,string);
 //en containerE imprime texto decifrado o cifrado entrando archivo cipher y ejecuta la funcion encode o decodecon los parametros.
})
//mensaje descifrado
document.getElementById("btnDecode").addEventListener("click",() => {
  let string = document.getElementById("cipherCode").value;
  let offset = parseInt(document.getElementById("move").value);
  document.getElementById("containerEmpty").innerHTML = cipher.decode(offset,string);
})/* Acá va tu código */