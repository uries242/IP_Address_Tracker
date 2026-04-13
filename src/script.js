let form = document.querySelector("form");
let userInput = document.getElementById("inputTextField");
let ip_address = document.getElementById("ip_address");
let ipLocation = document.getElementById("location");
let timezone = document.getElementById("timezone");
let isp = document.getElementById("isp");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 
  var ip = userInput.value;
  getIpData(ip).then(function (data) {
    updateData(data);
  });
});

function updateData(data) {
  ip_address.textContent = data.ip;
  ipLocation.textContent = data.location.city + ", " + data.location.region;
  timezone.textContent = "UTC " + data.location.timezone;
  isp.textContent = data.isp;
  marker.setLatLng([data.location.lat, data.location.lng])
  map.setView([data.location.lat, data.location.lng])
  return;
}

