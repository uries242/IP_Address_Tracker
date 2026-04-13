# Frontend Mentor Challenge: IP Address Tracker solution
This is my solution to the IP address tracker challenge on Frontend Mentor(https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents
-[Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview
The goal of this challenge was to build a fully functional IP Address Tracker app and get it looking as close to the target image as possible. Functionality of the app would be achieved by using the IP Geolocation API by IPify to get the IP Address locations and LeafletJS to generate the map. 

### The challenge
Users should be able to
- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot
![alt text](image-1.png)


### Links
- Github Repo: https://github.com/uries242/IP_Address_Tracker.git
- Live Site URL: https://uries242.github.io/IP_Address_Tracker/
- Leaflet: https://leafletjs.com/reference.html
- Geolocation: https://geo.ipify.org/docs
- W3 Schools: www.w3schools.com
- MDN: https://developer.mozilla.org/en-US/

## My process
I started this project by downloading the provided starter files and immediately went to work on building the header. Next I worked on rendering the map along with basic functionality i.e marker icon. My next task, which was also the most time consuming, was placing the info-container over the header and map. I then proceeded to add the IP location functionality to the map using the Ipify API. Once this was achieved the remainder of the time was spent on polishing the app's UI. 


### Built with
- Semantic HTML5 markup
- CSS custom properties
- Javascript functions
- Flexbox
- Leaflet Api
- API


### What I learned
Working on this project helped reinforced my understanding of CSS positioning, specifically using position: absolute with transform: translateX & translateY to center and overlap elements across section boundaries. I also learned how to integrate third-party APIs and navigate API documentation. Finally, this project reinfored by learning of Asynchronous operations using async/await, JS Promises, DOM manipulation and responsive design. 

Key CSS & JS pattern I'm proud of:

```CSS
header {
  background-image: url(./images/pattern-bg-desktop.png);
  background-size: cover;
  align-self: stretch;
  padding-top: 20px;
  margin: 0;
  text-align: center;
  font-size: 35px;
  font-weight: 700;
  color: white;
  min-height: 220px;
  position: relative;
  z-index: 1000;
}
```

```js
function updateData(data) {
  ip_address.textContent = data.ip;
  ipLocation.textContent = data.location.city + ", " + data.location.region;
  timezone.textContent = "UTC " + data.location.timezone;
  isp.textContent = data.isp;
  marker.setLatLng([data.location.lat, data.location.lng]);
  map.setView([data.location.lat, data.location.lng], 13);
}
```

### Continued development
This project will form the basis of two future personal projects I will be starting at the completion of the PerScholas SWE MERN Bootcamp. 

### Useful resources
- [Leaflet.js Docs](https://leafletjs.com/reference.html) - Used for map initialization, marker placement, and `setView`/`setLatLng` methods.
- [IPify Geolocation API](https://geo.ipify.org/docs) - Used to fetch IP address, location, timezone, and ISP data.
- [MDN Web Docs](https://developer.mozilla.org/en-US/) - Referenced for CSS positioning, flexbox, and fetch/async patterns.
- [W3Schools](https://www.w3schools.com) - Quick reference for HTML and CSS syntax.


### AI Collaboration
AI tool ChatGPT was used as a resource to explain technical jargon and provide additional examples beyond what was given in the W3 and MDN documentation. 

## Author
- GitHub - [@uries242](https://github.com/uries242)
- Frontend Mentor - [@uries242](https://www.frontendmentor.io/profile/uries242)

## Special Thanks & Acknowledgments
Thanks to the PerScholas instructor Paul Chapman for templates and Code-Along guidance, Ta'ron Bentley for sharing additional resources of key map features.