const express = require('express');
const bodyParser = require('body-parser');

const server = express();
const listenPort = 8080;


const staticFilesPath = express.static('public');
server.use(staticFilesPath);

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

//////////////////////////////////
// inicializar firebase

function init(){
  let firebaseConfig = {
    apiKey: "AIzaSyCfoLHOoi8t_gjhFcDDBIjadtxqF3NuHQQ",
    authDomain: "el-formu.firebaseapp.com",
    databaseURL: "https://el-formu.firebaseio.com",
    projectId: "el-formu",
    storageBucket: "el-formu.appspot.com",
    messagingSenderId: "40809937070",
    appId: "1:40809937070:web:63d6636fd38bd5df9cd53f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }
  init();  

// base de datos por defecto
let Firebase = require('firebase');
let defaultDatabase = Firebase.database();
// ruta a la base de datos
let noticiasRef = defaultDatabase.ref("noticias");

////////////////////////////////

/////////////////////////////////
// recoge el objeto de firebase y lo mete en la variable noticias

noticiasRef.on('value', function(snapshot) {
    let noticias = Object.values( snapshot.val() );
  });
/*
const noticias = [
    {
        "titulo" :        "la mega fiesta",
        "descripcion":    "de 150 personas mas popular del verano"
    },
    
    {
        "titulo" :        "el español",
        "descripcion":    "asesino a un soldado aleman"
    },
    
    {
        "titulo" :        "la fabrika",
        "descripcion":    "textil donde trabajan muchas personas"
    },
    
    {
        "titulo" :        "la fabrika",
        "descripcion":    "textil donde trabajan muchas personas"
    }
    ];
*/

    //apiresty

    server.get('/loadNoticias', (req, res) => {

        //codigo de firebase necesario 

        res.send(noticias);
    });

    server.listen(listenPort, () => console.log(`Server listening on ${listenPort}`));