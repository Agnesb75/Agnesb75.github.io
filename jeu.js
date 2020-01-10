
var runGame = function(){ 

    alert("Appuyez sur la touche 1 pour vous déplacez en diagonal haut/gauche \nLa touche 2 pour vous déplacez en diagonal haut/droit \nLa touche 3 pour vous déplacez en diagonal bas/gauche \nLa touche 4 pour se déplacez en diagonal bas/droit \nUtilisez les touches directionnels pour vous déplacez en haut/bas/droite/gauche \n Et la touche entrée pour tirez !! \n A vous de jouer !! ")
    
    
     ////// Creation d'une fonction constructeur pour les sprites afin de pouvoir modifier leurs prorpietés (taille,left,top,display) en economisant des lignes de codes 
    ///// permet de positionner d'afficher ou de caché un élémént
    
    function Sprites (filename, left, top) {
        this.imgVaisseau = document.createElement("img");     ///// imgVaisseau correspond aux images sprites crees avec le construteur mais je l'ai noter de cette facon au départ de la creation du jeu et en essayant de le changer j'ai apercut des beug donc je le laisse comme sa (pour l'instant)
        this.imgVaisseau.src = filename;
        this.imgVaisseau.style.position = "absolute";
        document.body.appendChild(this.imgVaisseau);
    
    
        Object.defineProperty(this, "left", {
            get: function(){
                return this.gauche;
            },
            set: function(value) {
                this.gauche = value;
                this.imgVaisseau.style.left = value + "px";
            }
    
        } );
    
        Object.defineProperty (this, "top", {
            get: function() {
                return this.haut;
            },
            set: function(value) {
                this.haut = value;
                this.imgVaisseau.style.top = value +"px";
            }
    
        } );
    
        Object.defineProperty (this, "display", {
            get: function(){
                return this.imgVaisseau.style.display;
            },
            set: function(value) {
                this.imgVaisseau.style.display = value;
            }
    
        } );
    
        this.left = left;
        this.top = top;
    
    
    };
    
    
    /////////// Creation des sprites positionnement etc ...
    
    //////// Positionement aliens :
    
    var alien1 = new Sprites("Images/alien1.png",100 , 50);
    alien1.imgVaisseau.style.width = 40 + "px";
    
    var alien2 = new Sprites("Images/alien2.png", 300, 50);
    alien2.imgVaisseau.style.width = 40 + "px";
    
    var alien3 = new Sprites("Images/alien3.png",500 ,50);
    alien3.imgVaisseau.style.width = 40 + "px";
    
    var alien4 = new Sprites("Images/alien4.png",700 ,50);
    alien4.imgVaisseau.style.width = 40 + "px";
    
    var alien5 = new Sprites("Images/alien1.png",900 ,50);
    alien5.imgVaisseau.style.width = 40 + "px";
    
    var alien6 = new Sprites("Images/alien2.png",1100 ,50);
    alien6.imgVaisseau.style.width = 40 + "px";
    
    
    //////////
    
    var alien7 = new Sprites("Images/alien1.png",200 , 150);
    alien7.imgVaisseau.style.width = 40 + "px";
    
    var alien8 = new Sprites("Images/alien2.png", 400, 150);
    alien8.imgVaisseau.style.width = 40 + "px";
    
    var alien9 = new Sprites("Images/alien3.png",600 ,150);
    alien9.imgVaisseau.style.width = 40 + "px";
    
    var alien10 = new Sprites("Images/alien4.png",800 ,150);
    alien10.imgVaisseau.style.width = 40 + "px";
    
    var alien11 = new Sprites("Images/alien1.png",1000 ,150);
    alien11.imgVaisseau.style.width = 40 + "px";
    
    var alien12 = new Sprites("Images/alien2.png",1200 ,150);
    alien12.imgVaisseau.style.width = 40 + "px";
    
    
    //////////
    
    var alien13 = new Sprites("Images/alien1.png",100 , 250);
    alien13.imgVaisseau.style.width = 40 + "px";
    
    var alien14 = new Sprites("Images/alien2.png", 300, 250);
    alien14.imgVaisseau.style.width = 40 + "px";
    
    var alien15 = new Sprites("Images/alien3.png",500 ,250);
    alien15.imgVaisseau.style.width = 40 + "px";
    
    var alien16 = new Sprites("Images/alien4.png",700 ,250);
    alien16.imgVaisseau.style.width = 40 + "px";
    
    var alien17 = new Sprites("Images/alien1.png",900 ,250);
    alien17.imgVaisseau.style.width = 40 + "px";
    
    var alien18 = new Sprites("Images/alien2.png",1100 ,250);
    alien18.imgVaisseau.style.width = 40 + "px";
    
    
    //////////
    
    var alien19 = new Sprites("Images/alien1.png",200 , 350);
    alien19.imgVaisseau.style.width = 40 + "px";
    
    var alien20 = new Sprites("Images/alien2.png", 400, 350);
    alien20.imgVaisseau.style.width = 40 + "px";
    
    var alien21 = new Sprites("Images/alien3.png",600 ,350);
    alien21.imgVaisseau.style.width = 40 + "px";
    
    var alien22 = new Sprites("Images/alien4.png",800 ,350);
    alien22.imgVaisseau.style.width = 40 + "px";
    
    var alien23 = new Sprites("Images/alien1.png",1000 ,350);
    alien23.imgVaisseau.style.width = 40 + "px";
    
    var alien24 = new Sprites("Images/alien2.png",1200 ,350);
    alien24.imgVaisseau.style.width = 40 + "px";
    
    
    ////////// Positionnement laser :
    
    var laser1 = new Sprites("Images/laser.png",0 ,0);
    laser1.imgVaisseau.style.width = 10 + "px";
    laser1.display = "none";
    
    var laser2 = new Sprites("Images/laser.png",0 ,0);  // je voulais pouvoire tirer plusieurs laser a la fois mais comment je l'ai fait sa fonctionne pas donc j'y reviens plus tard et me contente d'un tire
    laser2.imgVaisseau.style.width = 10 + "px";
    laser2.display = "none";
    
    var laser3 = new Sprites("Images/laser.png",0 ,0);
    laser3.imgVaisseau.style.width = 10 + "px";
    laser3.display = "none";
    
    var laser4 = new Sprites("Images/laser.png",0 ,0);
    laser4.imgVaisseau.style.width = 10 + "px";
    laser4.display = "none";
    
    var laser5 = new Sprites("Images/laser.png",0 ,0);
    laser5.imgVaisseau.style.width = 10 + "px";
    laser5.display = "none";
    
    var laser6 = new Sprites("Images/laser.png",0 ,0);
    laser6.imgVaisseau.style.width = 10 + "px";
    laser6.display = "none";
    
    var laser7 = new Sprites("Images/laser.png",0 ,0);
    laser7.imgVaisseau.style.width = 10 + "px";
    laser7.display = "none";
    
    var laser8 = new Sprites("Images/laser.png",0 ,0);
    laser8.imgVaisseau.style.width = 10 + "px";
    laser8.display = "none";
    
    
     
    /////// Positionnement vaisseau :
    
    var vaisseau = new Sprites("Images/v.png",590 , 550);
    vaisseau.imgVaisseau.style.width = 70 + "px";
    
    //console.log(vaisseau);
    
    ///////// Positionnement Skills :
    
    var htmlL = new Sprites("Images/html5.png",5 , 150);
    htmlL.imgVaisseau.style.width = 50 + "px";
    htmlL.imgVaisseau.style.display = "none";
    
    var cssL = new Sprites("Images/css-3.png",5 , 265);
    cssL.imgVaisseau.style.width = 50 + "px";
    cssL.imgVaisseau.style.display = "none";
    
    var jsL = new Sprites("Images/js.png",5 , 370);
    jsL.imgVaisseau.style.width = 55 + "px";
    jsL.imgVaisseau.style.display = "none";
    
    var angularL = new Sprites("Images/angular.png",5 , 480);
    angularL.imgVaisseau.style.width = 50 + "px";
    angularL.imgVaisseau.style.display = "none";
    
    var nodeL = new Sprites("Images/nodejs.png",5 , 580);
    nodeL.imgVaisseau.style.width = 50 + "px";
    nodeL.imgVaisseau.style.display = "none";
    
    
    
    /////// Position gif GAME OVER et WINNER
    
    var over = new Sprites("Gif/gameover.gif",390 , 60) ;
    over.imgVaisseau.style.display = "none";
    
    var gagnant = new Sprites("Gif/winner.gif" ,355 ,150);
    gagnant.imgVaisseau.style.width = 550 + "px";
    gagnant.imgVaisseau.style.display = "none";
    
    
    
    
    
    /////////// Gestion des evénements :
    
document.onkeydown = function (event) {
    //console.log( event.keyCode );
    
        if (event.keyCode == 49){                       // Déplacement en diagonal haut/gauche
            vaisseau.left -= 10;
            vaisseau.top -= 10;
        } else if (event.keyCode == 38) {               // Déplacement haut
            vaisseau.top -= 10;
        } else if (event.keyCode == 50) {               // Déplacement en diagonal haut/droit
            vaisseau.left += 10;
            vaisseau.top -= 10;
        } else if (event.keyCode == 37){                // Déplacement gauche
            vaisseau.left -= 10;
        } else if (event.keyCode == 39){                // Déplacement droit
            vaisseau.left += 10;
        } else if (event.keyCode == 51){                // Déplacement en diagonal bas/gauche
            vaisseau.left -= 10;
            vaisseau.top += 10;
        } else if (event.keyCode == 40){                // Déplacement bas 
            vaisseau.top += 10;
        } else if (event.keyCode == 52){                // Déplacement en diagonal bas/droit
            vaisseau.left += 10;
            vaisseau.top += 10;
        }
    
    
    
    // Controles des dépassement fenêtres du vaisseau :
    
    // dépassement droit de la fenêtre
    
        if (vaisseau.left < 0) {
            vaisseau.left = 0;
        };   
    
    // dépassement gauche de la fenêtre
    
        if (vaisseau.left > document.body.clientWidth - vaisseau.imgVaisseau.width) {
            vaisseau.left = document.body.clientWidth - vaisseau.imgVaisseau.width;
        }
    
    // dépassement haut de la fenêtre
    
        if (vaisseau.top < 0) {
            vaisseau.top = 0;
        }
    
    // dépassement bas de la fenêtre 
    
        // if (vaisseau.top > document.body.clientHeight - vaisseau.imgVaisseau.height) {
        //     vaisseau.top = document.body.clientHeight - vaisseau.imgVaisseau.height;
        // }
    // Ne fonctione pas pour le dépassement bas de la fenêtre je ne comprend pas l'erreur et d'err dans le debugger 
    
    ////// Faire une méthode évenement OnResize pour que la position du vaisseau reste dans le cadre de la fenêtre même si celle-ci rétrécie
    
    //// ----> 
    
    
    //// Positionnement laser :  


    var lasers = [ laser1, laser2, laser3, laser4, laser5, laser6, laser7, laser8 ];


    for(i=0; i < lasers.length; i++) {  
        var laser = lasers[i];

        if (event.keyCode == 13 || event.keyCode == 53){
            if (laser.display == "none") {   // relancer une nouvelle animation si le laser est en none car cela signifie que l'animation précédente est stopper 
                laser.display = "block";
                laser.left = vaisseau.left + (vaisseau.imgVaisseau.width - laser.imgVaisseau.width) / 2 ;
                laser.top = vaisseau.top;
                laser.startAnimation(laserTire, 20);  // ajout de l'animation tire du laser
    
            }
        }
    }   
    
    
};
    
    ////////// Création d'une méthode pour faire une animation sur les aliens et le laser afin que ceux ci puissent bouger lors d'un évenement 
    
    
        Sprites.prototype.startAnimation = function (imgfunct, interval) {    // méthode du prototype de Sprite
            if(this.animation) {
                window.clearInterval(this.animation);                      // si l'animation est en cours alors faire un clear interval de l'animation 
            };
    
            var sprite = this;              // = image tag de la fonction constructeur Sprite déclarée plus haut
    
            this.animation = window.setInterval(function() {               // Cette animation c'est l'affichage de ce sprite de cet élement tous les intervales definits 
                imgfunct(sprite);
            }, interval);
    
        };
    
        Sprites.prototype.stopAnimation = function () {   
           // méthode qui stop l'animation
            window.clearInterval(this.animation);   
    
        };
    
////////////// Déclaration d'une fonction pour le déplacement du laser

    
    
function laserTire (laser) {


        laser.top -= 15;         // On déplace de -15px l'img laser lors de l'animation
        if (laser.top < -40) {   // Si le top du laser est sorti de l'écran et fenêtre stopper l'horloge qui tourne de l'animation
            laser.stopAnimation();
            laser.display = "none"; // et remmetre l'image en none 
        }
        for (var i=0; i < aliens.length; i++) {
            let alien = aliens[i];
            if (alien.display == "none") continue;
            if (laser.checkCollision(alien).collision) {
                laser.checkCollision(alien).ctx.stopAnimation()
                // console.log ("colision");
                // console.log(laser.top + " et " + laser.left + " et " + laser.imgVaisseau.width + " et " + laser.imgVaisseau.height);
                // console.log(alien.top + " et " + alien.left + " et " + alien.imgVaisseau.width + " et " + alien.imgVaisseau.height);
                laser.stopAnimation();
                laser.display = "none";
                alien.stopAnimation();
                alien.display = "none";
                nbrS += 20 ;
                score.innerHTML = "SCORE : " + nbrS;
    
            }
            if(nbrS == 120) {
                htmlL.display = "block";
            }
            if(nbrS == 240) {
                cssL.display = "block"
            }
            if(nbrS == 360) {
                jsL.display = "block";
            }
            if(nbrS == 380) {
                angularL.display = "block";
            }
            if(nbrS == 480) {
                nodeL.display = "block";
                //winner.innerHTML = "WINNER !"
                gagnant.display = "block";
            }
            
            
        }
    
        
}
    
    /// les autres lasers
    
    // laser1.starAnimation(laserTire, 20); // pour la même raison que en haut j'y reviens plus tard
    // laser2.starAnimation(laserTire, 20);
    // laser3.starAnimation(laserTire, 20);
    // laser4.starAnimation(laserTire, 20);
    
    
    // Déclaration d'une fonction pour le déplacement des aliens vers la droite
    
    function aliensDroite (alien) {
        alien.left += 4;
    
        if (alien.left > document.body.clientWidth - alien.imgVaisseau.width) {
            alien.top += 50;
            alien.startAnimation (aliensGauche, 20);
        }
        for(let i = 0; i < aliens.length; i++) { 
    
            if (vaisseau.checkCollision(alien).gameOver) {
                //console.log("col");
                aliens[i].display = "none";
                //gameover.innerHTML = "GAME OVER";
                over.display = "block";
            
            } 
        }    
    
    }
    
    // Déclaration d'une fonction pour le déplacement des aliens vers la gauche quand ils sont sortis de la fenêtre lors de leur premier déplacement droit
    
    function aliensGauche (alien) {
        alien.left -= 4;
    
        if (alien.left <= 0) {
            alien.top += 50;
            alien.startAnimation(aliensDroite, 20);
    
        }
        for(let i = 0; i < aliens.length; i++) { 
            if (vaisseau.checkCollision(alien).gameOver) {
                //console.log("col");
                aliens[i].display = "none";
                //gameover.innerHTML = "GAME OVER";
                over.display = "block";
            
            } 
        }        
    }
    
    
    ///// adapter cette fonction de déplacement de tous mes aliens
    
    //   alien1.startAnimation(aliensDroite, 20);
    //   alien2.startAnimation(aliensDroite, 20);
    //   alien3.startAnimation(aliensDroite, 20);
    //   alien4.startAnimation(aliensDroite, 20);
    //   alien5.startAnimation(aliensDroite, 20);
    //   alien6.startAnimation(aliensDroite, 20);
    
    //   alien7.startAnimation(aliensDroite, 20);
    //   alien8.startAnimation(aliensDroite, 20);
    //   alien9.startAnimation(aliensDroite, 20);
    //   alien10.startAnimation(aliensDroite, 20);
    //   alien11.startAnimation(aliensDroite, 20);
    //   alien12.startAnimation(aliensDroite, 20);
    
      
    
    ////////// OU faire une boucle 
    
    // for (var i=i; i<=12; i++) {
        
    //     window['alien'+ i].starAnimation(aliensDroite, 20);
    
    // } /// elle est censé fonctionner mais je sais pas elle ne marche pas et pas d'erreur dans le debugger
    
    // On met les aliens dans un tableau pour faire la boucle
    
    let aliens = [
        alien1, alien2, alien3, alien4, alien5, alien6 ,alien7, alien8, alien9, alien10, alien11, alien12, alien13, alien14, alien15, alien16, alien17, alien18, alien19, alien20, alien21, alien22, alien23, alien24
    ];
    
    
    for(let i = 0; i < aliens.length; i++) {
        aliens[i].startAnimation(aliensDroite, 20);
    }
    
    
    //////////////// Création d'une méthode pour verifier les colisions de nos sprites
    /////////////// On pourra verifier tous nos sprites
    
    //////////// Regardez le code du tire de laser pour appliquer ces méthodes
    
    const laserW = 10;
    const laserH = 30;
    const alienW = 40;
    const alienH = 40;
    const vaisseauH = 78.6;
    
    Sprites.prototype.checkCollision = function (autre) {
    
        // return !((this.top + this.imgVaisseau.height < autre.top) ||     //////// On retourne ici le contraire de la situation ou il n'y a pas collisions 
        //         this.top > (autre.top + autre.imgVaisseau.height) ||  
        //         (this.left + this.imgVaisseau.width < autre.left) ||
        //         this.left > (autre.left + autre.imgVaisseau.width) );
    
        return {
            collision : this.left < autre.left + alienW &&
                this.left + laserW > autre.left &&
                this.top < autre.top + alienH &&
                laserH + this.top > autre.top ,
            gameOver :  this.left < autre.left + alienW &&
                        this.left + laserW > autre.left &&
                        this.top < autre.top + alienH &&
                        vaisseauH + this.top > autre.top ,  
            ctx: this
        };
    
        
    
    };
    
    
    /////////////////  Mise en place du score :
    
    
    let score = document.getElementById('score');
    let nbrS = 0;
    
    score.innerHTML = "SCORE : " + nbrS;
    
    let winner = document.getElementById("winner");
    let gameover = document.getElementById("gameover");
    
    
    
    document.getElementById('btn').addEventListener("click",function(){
        location.reload()

    })
     
    }
 
    window.addEventListener('load', runGame);