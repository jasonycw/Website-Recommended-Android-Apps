window.onload = function(){
	var cardHTML = "<div name='card' id='applicationCard' class='Cards'><div id='applicationCardBackgroud' class='Cards'><div id='applicationCardContent' class='Cards'><a href='' target='_blank'><div id='applicationCardImg'><img src='' /></div><div id='applicationCardName'><h4></h4></div></a></div></div></div>";
	for (i=0 ; i<appsList.length ; i++) {
		document.getElementById('applicationCardContainer').innerHTML += cardHTML;
	}
	var allCards = document.getElementsByName('card');
	for(i=0;i<appsList.length;i++){
		allCards.item(i).getElementsByTagName('h4').item(0).textContent = appsList[i].name;
		allCards.item(i).getElementsByTagName('img').item(0).src = appsList[i].img;
		allCards.item(i).getElementsByTagName('a').item(0).href = "https://play.google.com/store/apps/details?id="+appsList[i].id;
	}
}