var map = L.map('mapid').setView([40.91, -96.63], 4);
var noMarkers= null;
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var marker = new L.marker([40.91, -96.63]);


var dd = L.motion.polyline([[50,0], [60,10]], {
	color: "transparent"
}, {
	auto: true,
	duration: 3000,
	easing: L.Motion.Ease.easeInOutQuart
}, {
	removeOnEnd: true,
	showMarker: true,
	icon: L.divIcon({html: "<i class='fa fa-car fa-2x' aria-hidden='true'></i>", iconSize: L.point(27.5, 24)})
}).addTo(map);
alert()
dd.motionStart()