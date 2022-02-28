/* CARROUSEL APPARTEMENT 8 */

/* créer une collection qui contient les images */
var slide = new Array("../imgappartement/appart8.jpg","../imgappartement/appart1-chambre.jpg","../imgappartement/appart1-cuisine.jpg","../imgappartement/appart1-sdb.jpg");
var numero = 0; //indice de la collection (sûrement)

/* Fonction qui permet de changer de sens, changer les images par clic */
function ChangeSlide(sens) {
	numero = numero + sens;
	if (numero < 0) {
		numero = slide.length - 1
	};
	if (numero > slide.length -1) {
		numero = 0
	};
	document.getElementById("slide").src = slide[numero];
}

/* Pour faire défiler automatiquement le slide après 4 sec */
setInterval("ChangeSlide(1)",4000);