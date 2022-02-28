/* CARROUSEL LOCAL 7 */

/* créer une collection qui contient les images */
var slide = new Array("../imglocaux/local7.jpg","../imglocaux/local1-salle1.jpg","../imglocaux/local1-salle2.jpg","../imglocaux/local1-reserve.jpg");
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