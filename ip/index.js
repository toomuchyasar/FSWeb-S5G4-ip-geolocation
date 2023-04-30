//axios import buraya gelecek

var benimIP;


// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl(){
	await axios({
		method: 'get',
		url: 'https://apis.ergineer.com/ipadresim',
	})
	.then(function (response) {
		return response.data
	})
	.then(function (a) {
		benimIP=a
	});
}				
// ------------ değiştirmeyin --------------


/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/


let nesne = {
	as: "AS34984 Superonline Iletisim Hizmetleri A.S.",
	boylam: 32.8564,
	bölge: "06",
	bölgeAdı: "Ankara",
	durum: "OK",
	enlem: 39.9282,
	isp: "Superonline Iletisim Hizmetleri",
	kıta: "Asia",
	organizasyon: "Tellcom Main Network Statement",
	parabirimi: "TRY",
	saatdilimi: "Europe/Istanbul",
	sorgu: "176.88.30.191",
	zip: "06420",
	ülke: "Turkey",
	ülkeKodu: "TR",
	ülkebayrağı: "https://apis.ergineer.com/ulkebayraklari/TR",
	şehir: "Ankara"
};
const card = document.querySelector(".cards");
function BenimIP(nesne) {

	const container = document.createElement("div");
	container.className = "card";

	const imgDiv =  document.createElement("img")
	container.appendChild(imgDiv)
	imgDiv.src = nesne.ülkebayrağı

	const container2 = document.createElement("div");
	container2.className = "card-info";
	container.appendChild(container2);

	const h3Div = document.createElement("h3");
	h3Div.className = "ip";
	h3Div.textContent =nesne.sorgu;
	container2.appendChild(h3Div);

	const pDiv = document.createElement("p");
	pDiv.className = "ulke";
	pDiv.textContent = nesne.ülke;
	container2.appendChild(pDiv);

	const pEnlemDiv = document.createElement("p");
	pEnlemDiv.textContent =  "Enlem : " + nesne.enlem;
	container2.appendChild(pEnlemDiv);

	const p1Div = document.createElement("p");
	p1Div.textContent = "Boylam : " + nesne.boylam;
	container2.appendChild(p1Div);

	const p2Div = document.createElement("p");
	p2Div.textContent = "Şehir : " + nesne.şehir;
	container2.appendChild(p2Div);

	const p3Div = document.createElement("p");
	p3Div.textContent = "Saat Dilimi : " + nesne.saatdilimi;
	container2.appendChild(p3Div);

	const p4Div = document.createElement("p");
	p4Div.textContent = "Para Birimi : " + nesne.parabirimi;
	container2.appendChild(p4Div);

	const p5Div = document.createElement("p");
	p5Div.textContent = "ISP : " + nesne.isp;
	container2.appendChild(p5Div);

	return container;
}


/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/



const connection = async function () {
	await ipAdresimiAl();
	await axios({
		method: "get",
		url: "https://apis.ergineer.com/ipgeoapi/" + benimIP,
	})
		.then(function (response) {
			console.log(response);
			return response.data;
		})
		.then(function (a) {
			console.log(a)
			card.appendChild(BenimIP(a));
		});
};
connection();