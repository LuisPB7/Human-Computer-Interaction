/* Preencher barra superior com horas, data e nome */
var d = new Date();
var barra = document.getElementById("barra");
var m1 = document.getElementById("menu1");
var m2 = document.getElementById("menu2");
var m3 = document.getElementById("menu3");
var m4 = document.getElementById("menu4");
var home = document.getElementById("home");
var screen = document.getElementById("screen");
var container = document.getElementById("container");
var content = document.getElementById("content");
var help = document.getElementById("ajuda");
var cancelHelp = document.getElementById("cancelHelp");
var okHelp = document.getElementById("okHelp");
var friends = document.getElementById("friends");
var diary = document.getElementById("diary");
var addFriend = document.getElementById("addFriend");
var retroceder = document.getElementById("back");
var x = document.getElementById("txt");
var connecting = document.getElementById("connecting");
var showable = document.getElementsByClassName("showable");
var showable1 = document.getElementsByClassName("showable1");
var line1 = document.getElementsByClassName("line1");
var line2 = document.getElementsByClassName("line2");
var line3 = document.getElementsByClassName("line3");
var line4 = document.getElementsByClassName("line4");
var deleteTask1 = document.getElementById("deleteTask1");
var deleteTask2 = document.getElementById("deleteTask2");
var deleteTask3 = document.getElementById("deleteTask3");
var deleteTask4 = document.getElementById("deleteTask4");
var deleteFriend = document.getElementById("deleteFriend");
var deleteFriend1 = document.getElementById("deleteFriend1");
var cancelar = document.getElementById("cancelar");
var disease = document.getElementsByClassName('sick');
var alcool = document.getElementById("alcool");
var tensao = document.getElementById("tensao");
var indis = document.getElementById("indis");
var drogas = document.getElementById("drogas");
var outro = document.getElementById("outro");
var lesao = document.getElementById("lesao");
var paulo = document.getElementById("paulo");
var antonio = document.getElementById("antonio");
var frango = document.getElementById("frango");
var slide = document.getElementById("slide");
var continuar = document.getElementById("continuar");
var continuar2 = document.getElementById("continuar2");
var encomendar = document.getElementById("encomendar");
var inscrever = document.getElementById("inscrever");
var confirmarpedido = document.getElementById("confirmar");
var okFood = document.getElementById("confirmedFood");
var okSlide = document.getElementById("confirmedSlide");
var icons = document.getElementsByClassName("icon");
var people = document.getElementsByClassName("pessoa");
var palcos = document.getElementsByClassName("palco");
var atracoes = document.getElementsByClassName("atracao");
var restaurantes = document.getElementsByClassName("restaurante");
var eu = document.getElementsByClassName("eu");
var mapearTodos = document.getElementById("mapAllFriends");
var information = document.getElementById("information");
var atracoesPaulo = document.getElementById("atracoesPaulo");
var restauracao = document.getElementById("restauracao");
var calendario = document.getElementById("calendario");
var informationPapa = document.getElementById("informationPapa");
var informationGD = document.getElementById("informationGD");
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
/*var b4 = document.getElementById("b4");*/
var b5 = document.getElementById("b5");
var b6 = document.getElementById("b6");
var slideInfo = document.getElementById("slideInfo");
var mapSlide = document.getElementById("mapSlide");
var mapAllAtractions = document.getElementById("mapAllAtractions");
var chickenInfo = document.getElementById("chickenInfo");
var mapChicken = document.getElementById("chickenInfo");
var mapAllBifanas = document.getElementById("mapAllBifanas");
var actual = "container";
var favorite = document.getElementById("favorite");
var chickenFavorite = document.getElementById("makeFavorite");
var map1 = document.getElementById("map1");
var history = [];
var index = 0;
var historySize = 2;
history[1] = "container";
/*b4.style.display="none";*/
b5.style.display="none";
b6.style.display="none";
var IMGtaxas = document.getElementById("IMGtaxas");
var IMGSOS = document.getElementById("IMGSOS");
var historyIMG = [];
var indexIMG = 0;
var IMGAlcool = document.getElementById("IMGAlcool");
var AlcoholInfo = document.getElementById("AlcoholInfo");
var IMGPuls = document.getElementById("IMGPuls");
var PulsInfo = document.getElementById("PulsInfo");
var IMGTensao = document.getElementById("IMGTensao");
var TensaoInfo = document.getElementById("TensaoInfo");

var idIMGAtual = "something";
var idIMGPrev = "something";

var rightArrow = document.getElementById("slide-right");
var leftArrow = document.getElementById("slide-left");

retroceder.onclick = atras;
home.onclick = principal;

function startTime(){
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m = checkTime(m);
    document.getElementById('barra').innerHTML = h+":"+m+ "\t" + "Paulo R."+ "\t" + d.getDate() + "/" + (d.getMonth()+1);;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function display(scr){
	var screen = document.getElementById(scr);
	screen.style.display = "inline";
	actual = screen;
}

display("container");

m1.onclick = function(){
	actual.style.display = "none";
	display("myScreen");
	history[historySize] = "myScreen";
	historySize++;
	index++;
	if(idIMGAtual == "something"){
		idIMGAtual = "myFriends";
		hideAll("myFriends");
	}
	idIMGAtual = "myFriends";
	imagem = document.getElementById(idIMGAtual);
	imagem.style.display = "initial";
	actual.getElementsByTagName("h3")[0].innerHTML = document.getElementById(imagem.getAttribute("nextIMG")).getAttribute("prevTXT");
};

function hideAll(IMG){
	while(document.getElementById(IMG).getAttribute("nextIMG") != "none"){
		document.getElementById(IMG).style.display = "none";
		IMG = document.getElementById(IMG).getAttribute("nextIMG");
	}
	document.getElementById(IMG).style.display = "none";
}

m4.onclick = function(){
	actual.style.display = "none";
	display("screenHealth");
	history[historySize] = "screenHealth";
	historySize++;
	index++;
	if(idIMGAtual == "something"){
		idIMGAtual = "IMGtaxas";
		hideAll("IMGtaxas");
	}
	idIMGAtual = "IMGtaxas";
	imagem = document.getElementById(idIMGAtual);
	imagem.style.display = "initial";
	actual.getElementsByTagName("h3")[0].innerHTML = document.getElementById(imagem.getAttribute("nextIMG")).getAttribute("prevTXT");
};

function principal(){
	actual.style.display = "none";
	display("container");
	history = ["container"];
	historySize = 2;
	index = 0;
	historyIMG = [];
	indexIMG = 0;
	if(idIMGAtual!="something"){
		hideAll(idIMGAtual);
		document.getElementById(idIMGAtual).style.display = "none";
	}
	idIMGAtual = "something";
};

cancelHelp.onclick = function(){
	actual.style.display = "none";
	display("container");
	history = ["container"];
	historySize = 2;
	index = 0;
	historyIMG = [];
	indexIMG = 0;
	if(idIMGAtual!="something"){
		document.getElementById(idIMGAtual).style.display = "none";
	}
	idIMGAtual = "something";
};

okHelp.onclick = function(){
	/*setTimeout(function(){
		actual.style.display = "none";
		display("container");
		history = ["container"];
		historySize = 2;
		index = 0;
		historyIMG = [];
		indexIMG = 0;
		if(idIMGAtual!="something"){
			document.getElementById(idIMGAtual).style.display = "none";
		}
		idIMGAtual = "something";
	},5000);*/
	actual.style.display = "none";
	display("screenSOS3");
	history[historySize] = "screenSOS3";
	historySize++;
	index++;
	//thinking(x);
};

friends.onclick = function(){
	actual.style.display = "none";
	display("screenME2");
	history[historySize] = "screenME2";
	historySize++;
	index++;
};

addFriend.onclick = function(){
	setTimeout(function(){
		actual.style.display = "none";
		display("screenME2");
		retroceder.onclick = atras;
		home.onclick = principal;
	},5000);
	actual.style.display = "none";
	display("screenME4");
	//thinking(connecting);
};

deleteFriend.onclick = function(){
	for(var i = 0; i < showable.length; i++){
		showable[i].style.display="none";
	}
}

deleteFriend1.onclick = function(){
	for(var i = 0; i < showable1.length; i++){
		showable1[i].style.display="none";
	}
}

cancelar.onclick = function(){
	actual.style.display = "none";
	display("screenME2");
}

diary.onclick = function(){
	actual.style.display = "none";
	display("screenME3");
	history[historySize] = "screenME3";
	historySize++;
	index++;
};

deleteTask1.onclick = function(){
	for(var i = 0; i < line1.length; i++){
		line1[i].style.display="none";
	}
}

deleteTask2.onclick = function(){
	for(var i = 0; i < line1.length; i++){
		line2[i].style.display="none";
	}
}

deleteTask3.onclick = function(){
	for(var i = 0; i < line1.length; i++){
		line3[i].style.display="none";
	}
}

deleteTask4.onclick = function(){
	for(var i = 0; i < line1.length; i++){
		line4[i].style.display="none";
	}
}

function atras(){
	if(actual.classList.contains("slideable") && history[index] != "screenMAP"){
		document.getElementById(idIMGAtual).style.display = "none";
		if(history[index]=="firstScreenMap"){
			idIMGAtual = "verMapa";
		}
		else{
			idIMGAtual = historyIMG[indexIMG];
		}
		indexIMG--;
	}
	if(!(actual.id=="container")){
		actual.style.display = "none";
		display(history[index]);
		index--;
		historySize--;
	}
	for(var i = 0; i<icons.length; i++){
		icons[i].style.display = "initial";
	}
};

/*function thinking(textvar) {
	home.onclick = "return false";
	retroceder.onclick = "return false";
	textvar.value=" ";
    setTimeout(function(){ textvar.value="." }, 1000);
    setTimeout(function(){ textvar.value=".." }, 1750);
    setTimeout(function(){ textvar.value="..." }, 2500);
	setTimeout(function(){ textvar.value=" " }, 3250);
	setTimeout(function(){ textvar.value="." }, 4000);
	setTimeout(function(){ textvar.value=".." }, 4750);
	setTimeout(function(){ textvar.value="..." }, 5000);
}*/


for(var i = 0; i < disease.length; i++){
    var sick = disease[i];
    sick.onclick = function() {
		actual.style.display = "none";
		display("screenSOS2");
		history[historySize] = "screenSOS2";
		historySize++;
		index++;
    }
}

m2.onclick = function(){
	actual.style.display = "none";
	display("screenFEST1");
	history[historySize] = "screenFEST1";
	historySize++;
	index++;
	if(idIMGAtual == "something"){
		idIMGAtual = "metalica";
		hideAll("metalica");
	}
	hideAll("metalica");
	idIMGAtual = "metalica";
	imagem = document.getElementById(idIMGAtual);
	imagem.style.display = "initial";
	actual.getElementsByTagName("h3")[0].innerHTML = document.getElementById(imagem.getAttribute("nextIMG")).getAttribute("prevTXT");
};

map1.onclick = function(){
	actual.style.display = "none";
	display("screenMAP");
	history[historySize] = "screenMAP";
	historySize++;
	index++;
	for(var i = 0; i<icons.length; i++){
		icons[i].style.display = "inline";
	}
}

m3.onclick = function(){
	actual.style.display = "none";
	display("firstScreenMap");
	history[historySize] = "firstScreenMap";
	historySize++;
	index++;
	if(idIMGAtual == "something"){
		idIMGAtual = "verMapa";
		hideAll("verMapa");
	}
	hideAll("verMapa");
	idIMGAtual = "verMapa";
	imagem = document.getElementById(idIMGAtual);
	imagem.style.display = "initial";
	actual.getElementsByTagName("h3")[0].innerHTML = document.getElementById(imagem.getAttribute("nextIMG")).getAttribute("prevTXT");
}


antonio.onclick = function(){
	actual.style.display = "none";
	display("antonioScreen");
	history[historySize] = "antonioScreen";
	historySize++;
	index++;
}

paulo.onclick = function(){
	actual.style.display = "none";
	display("screenME1");
	history[historySize] = "screenME1";
	historySize++;
	index++;
}

frango.onclick = function(){
	idIMGAtual = "encomendarFrango";
	actual.style.display = "none";
	display("chickenScreen");
	history[historySize] = "chickenScreen";
	historySize++;
	index++;
}

slide.onclick = function(){
	idIMGAtual = "signin";
	actual.style.display = "none";
	display("slideScreen");
	history[historySize] = "slideScreen";
	historySize++;
	index++;
}

encomendar.onclick = function(){
	actual.style.display = "none";
	display("foodScreen");
	history[historySize] = "foodScreen";
	historySize++;
	index++;
}

continuar.onclick = function(){
	actual.style.display = "none";
	display("drinkScreen");
	history[historySize] = "drinkScreen";
	historySize++;
	index++;
}

confirmarpedido.onclick = function(){
	actual.style.display = "none";
	display("confirmScreen");
	history[historySize] = "confirmScreen";
	historySize++;
	index++;
}

okFood.onclick = function(){
	actual.style.display = "none";
	display("pedidoConfirmado");
	history[historySize] = "pedidoConfirmado";
	historySize++;
	index++;
}

/*inscrever.onclick = function(){
	actual.style.display = "none";
	display("confirmScreenSlide");
	history[historySize] = "confirmScreenSlide";
	historySize++;
	index++;
}

okSlide.onclick = function(){
	actual.style.display = "none";
	display("pedidoConfirmadoSlide");
	history[historySize] = "pedidoConfirmadoSlide";
	historySize++;
	index++;
}*/


AlcoholInfo.onclick = function(){
	actual.style.display = "none";
	display("screenTax1aa");
	history[historySize] = "screenTax1aa";
	historySize++;
	index++;
}

IMGAlcool.onclick = function(){
	actual.style.display = "none";
	display("screenTax1a");
	history[historySize] = "screenTax1a";
	historySize++;
	index++;
}


mapearTodos.onclick = function(){ 
	actual.style.display = "none";
	display("screenMAP");
	history[historySize] = "screenMAP";
	historySize++;
	index++;
	for(var i = 0; i<icons.length; i++){
		icons[i].style.display = "none";
	}
	for(var j = 0; j< people.length; j++){
		people[j].style.display = "initial";
	}
}

/*information.onclick = function(){
	actual.style.display = "none";
	display("screenFEST5");
	history[historySize] = "screenFEST5";
	historySize++;
	index++;
}*/

/*atracoesPaulo.onclick = function(){
	actual.style.display = "none";
	display("screenFEST2");
	history[historySize] = "screenFEST2";
	historySize++;
	index++;
}*/

/*calendario.onclick = function(){
	actual.style.display = "none";
	display("screenFEST3");
	history[historySize] = "screenFEST3";
	historySize++;
	index++;
}

restauracao.onclick = function(){
	actual.style.display = "none";
	display("screenFEST4");
	history[historySize] = "screenFEST4";
	historySize++;
	index++;
}*/

informationPapa.onclick = function(){
	actual.style.display = "none";
	display("screenFEST6");
	history[historySize] = "screenFEST6";
	historySize++;
	index++;
}

informationGD.onclick = function(){
	actual.style.display = "none";
	display("screenFEST7");
	history[historySize] = "screenFEST7";
	historySize++;
	index++;
}

/*b1.onclick = function(){
	this.style.display = "none";
	b4.style.display = "inline";
}

b2.onclick = function(){
	this.style.display = "none";
	b5.style.display = "inline";
}

b3.onclick = function(){
	this.style.display = "none";
	b6.style.display = "inline";
}*/


document.getElementById("todosMapa").onclick = function(){
	actual.style.display = "none";
	display("screenMAP");
	history[historySize] = "screenMAP";
	historySize++;
	index++;
	for(var i = 0; i<icons.length; i++){
		if(icons[i].id!="paulo"){
			icons[i].style.display = "none";
		}
	}
	for(var j = 0; j< atracoes.length; j++){
		atracoes[j].style.display = "inline";
	}
}

mapAllBifanas.onclick = function(){
	actual.style.display = "none";
	display("screenMAP");
	history[historySize] = "screenMAP";
	historySize++;
	index++;
	for(var i = 0; i<icons.length; i++){
		if(icons[i].id!="paulo"){
			icons[i].style.display = "none";
		}
	}
	for(var j = 0; j< restaurantes.length; j++){
		restaurantes[j].style.display = "inline";
	}
}

chickenFavorite.onclick = function(){
	if(chickenFavorite.getAttribute("data-on")=="no"){
		chickenFavorite.src = "isFavorite.png";
		chickenFavorite.setAttribute("data-on", "yes");
	}
	else{
		chickenFavorite.src = "favoriteChicken.png";
		chickenFavorite.setAttribute("data-on", "no");
	}
}

continuar2.onclick = function(){
	actual.style.display = "none";
	display("supplyScreen");
	history[historySize] = "supplyScreen";
	historySize++;
	index++;
}

rightArrow.onclick = function(){
	if(actual.classList.contains("slideable")){
		var imagemAtual = document.getElementById(idIMGAtual);
		var nextIMG = imagemAtual.getAttribute("nextIMG");
		var nextTXT = imagemAtual.getAttribute("nextTXT");
		var proxImagem = document.getElementById(nextIMG);
		if(nextIMG != "none"){
			imagemAtual.style.display = "none";
			proxImagem.style.display = "inline";
			idIMGAtual = nextIMG;
			actual.getElementsByTagName("h3")[0].innerHTML = nextTXT;
		}
	}
}

leftArrow.onclick = function(){
		if(actual.classList.contains("slideable")){
			var imagemAtual = document.getElementById(idIMGAtual);
			var prevIMG = imagemAtual.getAttribute("prevIMG");
			var prevTXT = imagemAtual.getAttribute("prevTXT");
			var prevImagem = document.getElementById(prevIMG);
			if(prevIMG != "none"){
				imagemAtual.style.display = "none";
				prevImagem.style.display = "inline";
				actual.getElementsByTagName("h3")[0].innerHTML = prevTXT;
				idIMGAtual = prevIMG;
			}
		}
}

IMGtaxas.onclick = function(){
	actual.style.display = "none";
	display("screenTax");
	history[historySize] = "screenTax";
	historySize++;
	index++;
	historyIMG[indexIMG+1] = "IMGtaxas";
	indexIMG++;
	idIMGAtual = "IMGAlcool";
	imagem = document.getElementById(idIMGAtual);
	imagem.style.display = "initial";
	actual.getElementsByTagName("h3")[0].innerHTML = document.getElementById(imagem.getAttribute("nextIMG")).getAttribute("prevTXT");
}

IMGSOS.onclick = function(){
	actual.style.display = "none";
	display("screenSOS1");
	history[historySize] = "screenSOS1";
	historySize++;
	index++;
	historyIMG[indexIMG+1] = "IMGSOS";
	indexIMG++;
	idIMGAtual = "alcool";
	imagem = document.getElementById(idIMGAtual);
	imagem.style.display = "initial";
	actual.getElementsByTagName("h3")[0].innerHTML = document.getElementById(imagem.getAttribute("nextIMG")).getAttribute("prevTXT");
}

IMGPuls.onclick = function(){
	actual.style.display = "none";
	display("screenTax1b");
	history[historySize] = "screenTax1b";
	historySize++;
	index++;
}

PulsInfo.onclick = function(){
	actual.style.display = "none";
	display("screenTax1ba");
	history[historySize] = "screenTax1ba";
	historySize++;
	index++;
}

IMGTensao.onclick = function(){
	actual.style.display = "none";
	display("screenTax1c");
	history[historySize] = "screenTax1c";
	historySize++;
	index++;
}

TensaoInfo.onclick = function(){
	actual.style.display = "none";
	display("screenTax1bb");
	history[historySize] = "screenTax1bb";
	historySize++;
	index++;
}

document.getElementById("metalica").onclick = function(){
	actual.style.display = "none";
	display("screenFEST5");
	history[historySize] = "screenFEST5";
	historySize++;
	index++;
	historyIMG[indexIMG+1] = "metalica";
	indexIMG++;
	idIMGAtual = "infoMetal";
	imagem = document.getElementById(idIMGAtual);
	imagem.style.display = "initial";
	actual.getElementsByTagName("h3")[0].innerHTML = document.getElementById(imagem.getAttribute("nextIMG")).getAttribute("prevTXT");
}

document.getElementById("atract").onclick = function(){
	actual.style.display = "none";
	display("screenFEST2");
	history[historySize] = "screenFEST2";
	historySize++;
	index++;
	historyIMG[indexIMG+1] = "atract";
	indexIMG++;
	idIMGAtual = "todosMapa";
	imagem = document.getElementById(idIMGAtual);
	imagem.style.display = "initial";
	actual.getElementsByTagName("h3")[0].innerHTML = document.getElementById(imagem.getAttribute("nextIMG")).getAttribute("prevTXT");
}

document.getElementById("rest").onclick = function(){
	actual.style.display = "none";
	display("screenREST");
	history[historySize] = "screenREST";
	historySize++;
	index++;
	historyIMG[indexIMG+1] = "rest";
	indexIMG++;
	idIMGAtual = "todosMapaRest";
	imagem = document.getElementById(idIMGAtual);
	imagem.style.display = "initial";
	actual.getElementsByTagName("h3")[0].innerHTML = document.getElementById(imagem.getAttribute("nextIMG")).getAttribute("prevTXT");
}

document.getElementById("calendar").onclick = function(){
	actual.style.display = "none";
	display("screenFEST3");
	history[historySize] = "screenFEST3";
	historySize++;
	index++;
}

document.getElementById("metalica").onclick = function(){
	actual.style.display = "none";
	display("screenFEST5");
	history[historySize] = "screenFEST5";
	historySize++;
	index++;
	historyIMG[indexIMG+1] = "metalica";
	indexIMG++;
	idIMGAtual = "infoMetal";
	imagem = document.getElementById(idIMGAtual);
	imagem.style.display = "initial";
	actual.getElementsByTagName("h3")[0].innerHTML = document.getElementById(imagem.getAttribute("nextIMG")).getAttribute("prevTXT");
}

document.getElementById("agenda").onclick = function(){
	actual.style.display = "none";
	display("metallicaAdded");
	history[historySize] = "metallicaAdded";
	historySize++;
	index++;
}

document.getElementById("mapStage").onclick = function(){
	actual.style.display = "none";
	display("screenMAP");
	history[historySize] = "screenMAP";
	historySize++;
	index++;
	for(var i = 0; i<icons.length; i++){
		if((icons[i].id!="palco2") && icons[i].id!="paulo"){
			icons[i].style.display = "none";
		}
	}
}

document.getElementById("slide1").onclick = function(){
	actual.style.display = "none";
	display("slideScreen");
	history[historySize] = "slideScreen";
	historySize++;
	index++;
	historyIMG[indexIMG+1] = "slide1";
	indexIMG++;
	idIMGAtual = "signin";
	imagem = document.getElementById(idIMGAtual);
	imagem.style.display = "initial";
	actual.getElementsByTagName("h3")[0].innerHTML = document.getElementById(imagem.getAttribute("nextIMG")).getAttribute("prevTXT");
}

document.getElementById("signin").onclick = function(){
	actual.style.display = "none";
	display("confirmScreenSlide");
	history[historySize] = "confirmScreenSlide";
	historySize++;
	index++;
}

document.getElementById("confirmedSlide").onclick = function(){
	actual.style.display = "none";
	display("pedidoConfirmadoSlide");
	history[historySize] = "pedidoConfirmadoSlide";
	historySize++;
	index++;
}

document.getElementById("interesse").onclick = function(){
	actual.style.display = "none";
	display("screenMAP");
	history[historySize] = "screenMAP";
	historySize++;
	index++;
	for(var i = 0; i<icons.length; i++){
		if(icons[i].id!="slide" && icons[i].id!="paulo"){
			icons[i].style.display = "none";
		}
	}
}

document.getElementById("choque").onclick = function(){
	actual.style.display = "none";
	display("choqueScreen");
	history[historySize] = "choqueScreen";
	historySize++;
	index++;
	historyIMG[indexIMG+1] = "choque";
	indexIMG++;
	idIMGAtual = "signinChoque";
	imagem = document.getElementById(idIMGAtual);
	imagem.style.display = "initial";
	actual.getElementsByTagName("h3")[0].innerHTML = document.getElementById(imagem.getAttribute("nextIMG")).getAttribute("prevTXT");
}

document.getElementById("signinChoque").onclick = function(){
	actual.style.display = "none";
	display("confirmScreenChoque");
	history[historySize] = "confirmScreenChoque";
	historySize++;
	index++;
}

document.getElementById("confirmedChoque").onclick = function(){
	actual.style.display = "none";
	display("pedidoConfirmadoChoque");
	history[historySize] = "pedidoConfirmadoChoque";
	historySize++;
	index++;
}

document.getElementById("interesseChoque").onclick = function(){
	actual.style.display = "none";
	display("screenMAP");
	history[historySize] = "screenMAP";
	historySize++;
	index++;
	for(var i = 0; i<icons.length; i++){
		if(icons[i].id!="choque1" && icons[i].id!="paulo"){
			icons[i].style.display = "none";
		}
	}
}

document.getElementById("rest").onclick = function(){
	actual.style.display = "none";
	display("screenREST");
	history[historySize] = "screenREST";
	historySize++;
	index++;
	historyIMG[indexIMG+1] = "rest";
	indexIMG++;
	idIMGAtual = "todosMapaRest";
	imagem = document.getElementById(idIMGAtual);
	imagem.style.display = "initial";
	actual.getElementsByTagName("h3")[0].innerHTML = document.getElementById(imagem.getAttribute("nextIMG")).getAttribute("prevTXT");
}

document.getElementById("todosMapaRest").onclick = function(){
	actual.style.display = "none";
	display("screenMAP");
	history[historySize] = "screenMAP";
	historySize++;
	index++;
	for(var i = 0; i<icons.length; i++){
		if(icons[i].id!="paulo"){
			icons[i].style.display = "none";
		}
	}
	for(var j = 0; j< restaurantes.length; j++){
		restaurantes[j].style.display = "inline";
	}
}

document.getElementById("getChicken").onclick = function(){
	actual.style.display = "none";
	display("chickenScreen");
	history[historySize] = "chickenScreen";
	historySize++;
	index++;
	historyIMG[indexIMG+1] = "getChicken";
	indexIMG++;
	idIMGAtual = "encomendarFrango";
	imagem = document.getElementById(idIMGAtual);
	imagem.style.display = "initial";
	actual.getElementsByTagName("h3")[0].innerHTML = document.getElementById(imagem.getAttribute("nextIMG")).getAttribute("prevTXT");
}

document.getElementById("interesseFrango").onclick = function(){
	actual.style.display = "none";
	display("screenMAP");
	history[historySize] = "screenMAP";
	historySize++;
	index++;
	for(var i = 0; i<icons.length; i++){
		if(icons[i].id!="frango" && icons[i].id!="paulo"){
			icons[i].style.display = "none";
		}
	}
}

document.getElementById("encomendarFrango").onclick = function(){
	actual.style.display = "none";
	display("orderFood");
	history[historySize] = "orderFood";
	historySize++;
	index++;
	historyIMG[indexIMG+1] = "encomendarFrango";
	indexIMG++;
	idIMGAtual = "escolherFrango";
	imagem = document.getElementById(idIMGAtual);
	imagem.style.display = "initial";
	actual.getElementsByTagName("h3")[0].innerHTML = document.getElementById(imagem.getAttribute("nextIMG")).getAttribute("prevTXT");
}

document.getElementById("choque1").onclick = function(){
	idIMGAtual = "signinChoque";
	actual.style.display = "none";
	display("choqueScreen");
	history[historySize] = "choqueScreen";
	historySize++;
	index++;
}

document.getElementById("escolherFrango").onclick = function(){
	actual.style.display = "none";
	display("orderDrink");
	history[historySize] = "orderDrink";
	historySize++;
	index++;
	historyIMG[indexIMG+1] = "escolherFrango";
	indexIMG++;
	idIMGAtual = "icetea";
	imagem = document.getElementById(idIMGAtual);
	imagem.style.display = "initial";
	actual.getElementsByTagName("h3")[0].innerHTML = document.getElementById(imagem.getAttribute("nextIMG")).getAttribute("prevTXT");
}

document.getElementById("escolherSalada").onclick = function(){
	actual.style.display = "none";
	display("orderDrink");
	history[historySize] = "orderDrink";
	historySize++;
	index++;
	historyIMG[indexIMG+1] = "escolherSalada";
	indexIMG++;
	idIMGAtual = "icetea";
	imagem = document.getElementById(idIMGAtual);
	imagem.style.display = "initial";
	actual.getElementsByTagName("h3")[0].innerHTML = document.getElementById(imagem.getAttribute("nextIMG")).getAttribute("prevTXT");
}

document.getElementById("icetea").onclick = function(){
	actual.style.display = "none";
	display("orderSupplies");
	history[historySize] = "orderSupplies";
	historySize++;
	index++;
	historyIMG[indexIMG+1] = "icetea";
	indexIMG++;
	idIMGAtual = "chips";
	imagem = document.getElementById(idIMGAtual);
	imagem.style.display = "initial";
	actual.getElementsByTagName("h3")[0].innerHTML = document.getElementById(imagem.getAttribute("nextIMG")).getAttribute("prevTXT");
}

document.getElementById("cola").onclick = function(){
	actual.style.display = "none";
	display("orderSupplies");
	history[historySize] = "orderSupplies";
	historySize++;
	index++;
	historyIMG[indexIMG+1] = "cola";
	indexIMG++;
	idIMGAtual = "chips";
	imagem = document.getElementById(idIMGAtual);
	imagem.style.display = "initial";
	actual.getElementsByTagName("h3")[0].innerHTML = document.getElementById(imagem.getAttribute("nextIMG")).getAttribute("prevTXT");
}

document.getElementById("chips").onclick = function(){
	actual.style.display = "none";
	display("confirmScreen");
	history[historySize] = "confirmScreen";
	historySize++;
	index++;
}

document.getElementById("nuggets").onclick = function(){
	actual.style.display = "none";
	display("confirmScreen");
	history[historySize] = "confirmScreen";
	historySize++;
	index++;
}

document.getElementById("Mac").onclick = function(){
	actual.style.display = "none";
	display("macScreen");
	history[historySize] = "macScreen";
	historySize++;
	index++;
	historyIMG[indexIMG+1] = "Mac";
	indexIMG++;
	idIMGAtual = "encomendarMac";
	imagem = document.getElementById(idIMGAtual);
	imagem.style.display = "initial";
	actual.getElementsByTagName("h3")[0].innerHTML = document.getElementById(imagem.getAttribute("nextIMG")).getAttribute("prevTXT");
}

document.getElementById("encomendarMac").onclick = function(){
	actual.style.display = "none";
	display("orderMac");
	history[historySize] = "orderMac";
	historySize++;
	index++;
	historyIMG[indexIMG+1] = "encomendarMac";
	indexIMG++;
	idIMGAtual = "bigmac";
	imagem = document.getElementById(idIMGAtual);
	imagem.style.display = "initial";
	actual.getElementsByTagName("h3")[0].innerHTML = document.getElementById(imagem.getAttribute("nextIMG")).getAttribute("prevTXT");
}

document.getElementById("interesseMac").onclick = function(){
	actual.style.display = "none";
	display("screenMAP");
	history[historySize] = "screenMAP";
	historySize++;
	index++;
	for(var i = 0; i<icons.length; i++){
		if(icons[i].id!="mcDonalds" && icons[i].id!="paulo"){
			icons[i].style.display = "none";
		}
	}
}

document.getElementById("bigmac").onclick = function(){
	actual.style.display = "none";
	display("orderDrink");
	history[historySize] = "orderDrink";
	historySize++;
	index++;
	historyIMG[indexIMG+1] = "bigmac";
	indexIMG++;
	idIMGAtual = "icetea";
	imagem = document.getElementById(idIMGAtual);
	imagem.style.display = "initial";
	actual.getElementsByTagName("h3")[0].innerHTML = document.getElementById(imagem.getAttribute("nextIMG")).getAttribute("prevTXT");
}

document.getElementById("mcchicken").onclick = function(){
	actual.style.display = "none";
	display("orderDrink");
	history[historySize] = "orderDrink";
	historySize++;
	index++;
	historyIMG[indexIMG+1] = "mcchicken";
	indexIMG++;
	idIMGAtual = "icetea";
	imagem = document.getElementById(idIMGAtual);
	imagem.style.display = "initial";
	actual.getElementsByTagName("h3")[0].innerHTML = document.getElementById(imagem.getAttribute("nextIMG")).getAttribute("prevTXT");
}

document.getElementById("mcDonalds").onclick = function(){
	idIMGAtual = "encomendarMac";
	actual.style.display = "none";
	display("macScreen");
	history[historySize] = "macScreen";
	historySize++;
	index++;
}

document.getElementById("calendar").onclick = function(){
	actual.style.display = "none";
	display("screenCalendario");
	history[historySize] = "screenCalendario";
	historySize++;
	index++;
	historyIMG[indexIMG+1] = "calendar";
	indexIMG++;
	idIMGAtual = "dia2";
	imagem = document.getElementById(idIMGAtual);
	imagem.style.display = "initial";
	actual.getElementsByTagName("h3")[0].innerHTML = "Dia 2";
}

document.getElementById("dia2").onclick = function(){
	actual.style.display = "none";
	display("screenDia");
	history[historySize] = "screenDia";
	historySize++;
	index++;
	historyIMG[indexIMG+1] = "dia2";
	indexIMG++;
	idIMGAtual = "paparroz";
	imagem = document.getElementById(idIMGAtual);
	imagem.style.display = "initial";
	actual.getElementsByTagName("h3")[0].innerHTML = document.getElementById(imagem.getAttribute("nextIMG")).getAttribute("prevTXT");
}

document.getElementById("paparroz").onclick = function(){
	actual.style.display = "none";
	display("screenPapa");
	history[historySize] = "screenPapa";
	historySize++;
	index++;
	historyIMG[indexIMG+1] = "paparroz";
	indexIMG++;
	idIMGAtual = "infoPapa";
	imagem = document.getElementById(idIMGAtual);
	imagem.style.display = "initial";
	actual.getElementsByTagName("h3")[0].innerHTML = document.getElementById(imagem.getAttribute("nextIMG")).getAttribute("prevTXT");
}

document.getElementById("diaverde").onclick = function(){
	actual.style.display = "none";
	display("screenGreen");
	history[historySize] = "screenGreen";
	historySize++;
	index++;
	historyIMG[indexIMG+1] = "diaverde";
	indexIMG++;
	idIMGAtual = "infoGreen";
	imagem = document.getElementById(idIMGAtual);
	imagem.style.display = "initial";
	actual.getElementsByTagName("h3")[0].innerHTML = document.getElementById(imagem.getAttribute("nextIMG")).getAttribute("prevTXT");
}

document.getElementById("agendaPapa").onclick = function(){
	actual.style.display = "none";
	display("PapaAdded");
	history[historySize] = "PapaAdded";
	historySize++;
	index++;
}

document.getElementById("agendaGreen").onclick = function(){
	actual.style.display = "none";
	display("GreenAdded");
	history[historySize] = "GreenAdded";
	historySize++;
	index++;
}

document.getElementById("mapStagePapa").onclick = function(){
	actual.style.display = "none";
	display("screenMAP");
	history[historySize] = "screenMAP";
	historySize++;
	index++;
	for(var i = 0; i<icons.length; i++){
		if((icons[i].id!="palco") && icons[i].id!="paulo"){
			icons[i].style.display = "none";
		}
	}
}

document.getElementById("mapStageGreen").onclick = function(){
	actual.style.display = "none";
	display("screenMAP");
	history[historySize] = "screenMAP";
	historySize++;
	index++;
	for(var i = 0; i<icons.length; i++){
		if((icons[i].id!="palco2") && icons[i].id!="paulo"){
			icons[i].style.display = "none";
		}
	}
}

document.getElementById("verMapa").onclick = function(){
	actual.style.display = "none";
	display("screenMAP");
	history[historySize] = "screenMAP";
	historySize++;
	index++;
}

document.getElementById("verFav").onclick = function(){
	actual.style.display = "none";
	display("notImplemented");
	history[historySize] = "notImplemented";
	historySize++;
	index++;
}

document.getElementById("myAgenda").onclick = function(){
	actual.style.display = "none";
	display("notImplemented");
	history[historySize] = "notImplemented";
	historySize++;
	index++;
}

document.getElementById("myFriends").onclick = function(){
	actual.style.display = "none";
	display("friendList");
	history[historySize] = "friendList";
	historySize++;
	index++;
	historyIMG[indexIMG+1] = "myFriends";
	indexIMG++;
	idIMGAtual = "addFriend1";
	imagem = document.getElementById(idIMGAtual);
	imagem.style.display = "initial";
	actual.getElementsByTagName("h3")[0].innerHTML = document.getElementById(imagem.getAttribute("nextIMG")).getAttribute("prevTXT");
}

document.getElementById("menu5").onclick = function(){
	actual.style.display = "none";
	display("Tutorial1");
	history[historySize] = "Tutorial1";
	historySize++;
	index++;
}

document.getElementById("arrow1").onclick = function(){
	actual.style.display = "none";
	display("Tutorial2");
	history[historySize] = "Tutorial2";
	historySize++;
	index++;
}

document.getElementById("arrow2").onclick = function(){
	actual.style.display = "none";
	display("Tutorial3");
	history[historySize] = "Tutorial3";
	historySize++;
	index++;
}

document.getElementById("arrow3").onclick = function(){
	actual.style.display = "none";
	display("Tutorial4");
	history[historySize] = "Tutorial4";
	historySize++;
	index++;
}

document.getElementById("arrow4").onclick = function(){
	actual.style.display = "none";
	display("Tutorial5");
	history[historySize] = "Tutorial5";
	historySize++;
	index++;
}

document.getElementById("arrow5").onclick = function(){
	actual.style.display = "none";
	display("Tutorial6");
	history[historySize] = "Tutorial6";
	historySize++;
	index++;
}

document.getElementById("arrow6").onclick = function(){
	actual.style.display = "none";
	display("Tutorial7");
	history[historySize] = "Tutorial7";
	historySize++;
	index++;
}

document.getElementById("addFriend1").onclick = function(){
	actual.style.display = "none";
	display("notImplemented");
	history[historySize] = "notImplemented";
	historySize++;
	index++;
}

document.getElementById("mapAllF").onclick = function(){
	actual.style.display = "none";
	display("screenMAP");
	history[historySize] = "screenMAP";
	historySize++;
	index++;
	for(var i = 0; i<icons.length; i++){
		icons[i].style.display = "none";
	}
	for(var j = 0; j< people.length; j++){
		people[j].style.display = "initial";
	}
}

document.getElementById("paulo").onclick = function(){
	idIMGAtual = "myFriends";
	actual.style.display = "none";
	display("myScreen");
	history[historySize] = "myScreen";
	historySize++;
	index++;
}

document.getElementById("lu").onclick = function(){
	actual.style.display = "none";
	display("luisScreen");
	history[historySize] = "luisScreen";
	historySize++;
	index++;
	historyIMG[indexIMG+1] = "lu";
	indexIMG++;
	idIMGAtual = "showLuis";
	imagem = document.getElementById(idIMGAtual);
	imagem.style.display = "initial";
	actual.getElementsByTagName("h3")[0].innerHTML = document.getElementById(imagem.getAttribute("nextIMG")).getAttribute("prevTXT");
}

document.getElementById("removeLuis").onclick = function(){
	actual.style.display = "none";
	display("notImplemented");
	history[historySize] = "notImplemented";
	historySize++;
	index++;
}

document.getElementById("showLuis").onclick = function(){
	actual.style.display = "none";
	display("screenMAP");
	history[historySize] = "screenMAP";
	historySize++;
	index++;
	for(var i = 0; i<icons.length; i++){
		if((icons[i].id!="luis") && icons[i].id!="paulo"){
			icons[i].style.display = "none";
		}
	}
}

document.getElementById("showAnt").onclick = function(){
	actual.style.display = "none";
	display("screenMAP");
	history[historySize] = "screenMAP";
	historySize++;
	index++;
	for(var i = 0; i<icons.length; i++){
		if((icons[i].id!="antonio") && icons[i].id!="paulo"){
			icons[i].style.display = "none";
		}
	}
}

document.getElementById("luis").onclick = function(){
	idIMGAtual = "showLuis";
	actual.style.display = "none";
	display("luisScreen");
	history[historySize] = "luisScreen";
	historySize++;
	index++;
}

document.getElementById("antonio").onclick = function(){
	idIMGAtual = "showAnt";
	actual.style.display = "none";
	display("antScreen");
	history[historySize] = "antScreen";
	historySize++;
	index++;
}

document.getElementById("ant").onclick = function(){
	actual.style.display = "none";
	display("antScreen");
	history[historySize] = "antScreen";
	historySize++;
	index++;
	historyIMG[indexIMG+1] = "ant";
	indexIMG++;
	idIMGAtual = "showAnt";
	imagem = document.getElementById(idIMGAtual);
	imagem.style.display = "initial";
	actual.getElementsByTagName("h3")[0].innerHTML = document.getElementById(imagem.getAttribute("nextIMG")).getAttribute("prevTXT");
}

document.getElementById("removeAnt").onclick = function(){
	actual.style.display = "none";
	display("notImplemented");
	history[historySize] = "notImplemented";
	historySize++;
	index++;
}

document.getElementById("infoMetal").onclick = function(){
	actual.style.display = "none";
	display("infoMetallica");
	history[historySize] = "infoMetallica";
	historySize++;
	index++;
}

document.getElementById("infoPapa").onclick = function(){
	actual.style.display = "none";
	display("infoRoach");
	history[historySize] = "infoRoach";
	historySize++;
	index++;
}

document.getElementById("infoGreen").onclick = function(){
	actual.style.display = "none";
	display("infoDay");
	history[historySize] = "infoDay";
	historySize++;
	index++;
}

document.getElementById("mapChicken").onclick = mapAllBifanas.onclick;
document.getElementById("chickenInfo").onclick = frango.onclick;