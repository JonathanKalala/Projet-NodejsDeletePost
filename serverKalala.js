const express=require('express');
const bodyParser = require('body-parser')
const server=express();
const PORT=3000;


const users = [
  {
    id:1,  
    nom: 'Lisangola',
    prenom: 'Christian',
    email: '',
    poste: 'Homme de ménage',
    numeroTelephone: ['+243908888888'],
    estMarie: false,
    pays: 'RDCongo',
  },
  {
      id:2,
    nom: 'Motoba',
    prenom: 'Claude',
    email: 'claude@gmail.com',
    poste: 'Architecte infrastructures',
    numeroTelephone: ['+243818885454', '+243844457484'],
    estMarie: true,
    pays: 'Liban',
  },
  {
      id:3,
    nom: 'Nyembo',
    prenom: 'Thesy',
    email: 'thesy.nyembo@gmail.com',
    poste: 'DevOPS & Développeuse Fullstack',
    numeroTelephone: ['+2438108488888', '+243844145444'],
    estMarie: false,
    pays: 'Djibouti',
  },
  {
      id:4,
    nom: 'Gael',
    prenom: 'Mapwata',
    email: 'mapwata.gael@gmail.com',
    poste: 'Administrateur systèmes & Réseaux',
    numeroTelephone: ['+243818897188', '+243844445744'],
    estMarie: true,
    pays: 'Inde',
  },
  {
      id:5,
    nom: 'Makengo',
    prenom: 'Stanislas',
    email: 'makengo.stanislas@gmail.com',
    poste: 'Chef de projet digital',
    numeroTelephone: ['+243814428888', '+243844446734'],
    estMarie: true,
    pays: 'Algérie',
  },
  {
      id:6,
    nom: 'Ndovia',
    prenom: 'Ruth',
    email: 'ruth.ndovia@gmail.com',
    poste: 'Administrateur systèmes & Réseaux',
    numeroTelephone: ['+24381458888', '+243844434444'],
    estMarie: false,
    pays: 'RDCongo',
  },
  {
      id:7,
    nom: 'Bondjali',
    prenom: 'Chris',
    email: '',
    poste: 'Cordonier',
    numeroTelephone: ['+24390999898'],
    estMarie: true,
    pays: 'RDCongo',
  },
];

// Les middlewares 

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json()); 






//EXERCICE
//Ajouter la possibilité de 
// - supprimer un object du tableau au travers de son ID
//   Mais il faudra utiliser la methode "delete" de express
//- D'ajouter un nouvelle element dans le tableau
//  Il faut utiliser la methode POST
//Pour tester pour devez utiliser postman

//Voici les indices
// - cors
// - Ajouter un middleware qui mettre les informations envoyées avec POST dans la methode BODY
//   à voir express.bodyparser(...)
//Expliquer chaque ligne de code par un brief commentaire et expliquer son utilité et problème qu'il résoud
/**
 * Il y a des commentaires qui expliquent tous ce que vous devez faire.Mais le fichier je l'ai envoyé seul
 *  sans le fichier "package.json" ou autre chose.C'est à de faire tout ce qu'il faut pour faire tourner le
 *  projet et après vous allez m'envoyer un dossier zip avec votre projet.Mais dans votre ZIP ne mettez pas
 *  le dossier "node_modules"
 * 
 */
server.get('/',function(req,res){
    res.send("Bienvenu dans notre page")
});

server.get('/api/users',(req,res)=>{
    res.send(users);
});

server.get('/api/users/:matricule',(req,res)=>{
    const user=users.find((user)=>user.id===parseInt(req.params.matricule));
    res.send(user);
});
//ajouter un enregistrement
server.post('/api/users',(req,res)=>{
  users.push(req.body);  // ici nous metton notre obje crret dans le tableau users. req.body nous permet de recupere notre objet dans l'url. Grace au module bodyparser
  res.send(users[users.length-1] );// Ici on affiche l'obje crée. users[users.length-1 nous permet de recuperer d'afficher le dernier element du tableau
});

// supprimer un enregistrement 
server.delete('/api/users/:id',(req,res)=>{
  const id = req.params.id -1; // on fais soustraction de l'id parce que le tableau commence à la position 0, Mais dans notre tableau user l'id commence à 1. ex: si on mettait l'id 5, on va supprimer l'objet 6. Alors pour supprimer l'element que nous voulons il faut enlever 1
  users.splice(id, 1);// L'id c'est la position à partir dr la quelle nous voulons commencer la suppresion, et à 1 c'est le nombre d'élement à supprimer
  res.send(users);
});


server.listen(PORT,function(){
    console.log(`Le serveur écoute sur le PORT ${PORT}`);
})