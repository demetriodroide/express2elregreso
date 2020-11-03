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