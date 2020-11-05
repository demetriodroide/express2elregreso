async function getNoticias(){
    let response = await fetch('http://localhost:8080/loadNoticias')
    let noticias = await response.json();
  
    /*
    fetch('http://localhost:8080/loadNoticias')
          .then(resp => resp.json())
          .then(noticias => {
    */
  
    for ( let i = 0; i < noticias.length; i++){
    
      let caja = document.createElement("div");
      caja.className = "titudescri";
      document.querySelector("body").appendChild(caja);
      
      let titulo = document.createElement("h1");
      caja.appendChild(titulo);
      titulo.innerText = noticias[i].titulo;
      
      
      let descripcion = document.createElement("h2");
      caja.appendChild(descripcion);
      //document.querySelector(".titudescri").appendChild(descripcion);
      descripcion.innerText = noticias[i].descripcion;
      
      };
  
  }
  getNoticias();


  ////////////////////////////////
// envio datos desde JS a firebase con input HTML


let boton = document.querySelector("#pulsar").addEventListener("click",enviardatos);

function enviardatos() {

  let titulo = document.querySelector("#titulolabel").value;
  let descripcion = document.querySelector("#titulotexto").value;
  
  let nuevaNoticia = {
    "titulo"      : `${ titulo }`,
    "descripcion" : `${ descripcion }`,
  }

async function enviarNoticias(){
    
  let response = await fetch('http://localhost:8080/cargarNoticias', {method: 'POST'})
  nuevaNoticia = await response.json();
  
  //console.log(titulo);
  //console.log(descripcion);
  
    
}
    enviarNoticias();
    //

  };

  enviardatos();







