/* CARROUSEL TERRAIN 4 */

/* créer une collection qui contient les images */
var slide = new Array("../imgterrain/terrain4.jpg","../imgterrain/terrain4-photo1.jpg","../imgterrain/terrain4-photo2.jpg","../imgterrain/terrain4-photo3.jpg");
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