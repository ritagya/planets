function Planet(name, color, diameter, orbit, image){
	this.name = name;
	this.color = color;
	this.diameter = diameter;
	this.orbit = orbit;
	this.image = image;
}

var planetArray = [];

var mercury = new Planet('Mercury', 'brownish gray', 3031, '88 Earth days', 'img/mercury.jpg')
var venus = new Planet('Venus', 'pale yellow', 7521, '225 Earth days', 'img/venus.jpg')
var earth = new Planet('Earth', 'blue', 7926, '365 days', 'img/earth.jpg')
var mars = new Planet('Mars', 'reddish brown', 4217, '687 Earth days', 'img/mars.jpg')
var jupiter = new Planet('Jupiter', 'orange', 86881, '11.9 Earth years', 'img/jupiter.jpg')
var saturn = new Planet('Saturn', 'pale gold', 74900, '29.5 Earth years', 'img/saturn.jpg')
var uranus = new Planet('Uranus', 'greenish blue', 31763, '84 Earth years', 'img/uranus.jpg')
var neptune = new Planet('Neptune', 'pale blue', 30775, '165 Earth years', 'img/neptune.jpg')
var pluto = new Planet('Pluto', 'light brown', 1430, '248 Earth years', 'img/pluto.jpg')

planetArray.push(mercury);
planetArray.push(venus);
planetArray.push(earth);
planetArray.push(mars);
planetArray.push(jupiter);
planetArray.push(saturn);
planetArray.push(uranus);
planetArray.push(neptune);
planetArray.push(pluto);

var fragment = document.createDocumentFragment();


for(var i = 0; i < planetArray.length; i++){
var newCol = document.createElement('div');
var newDiv = document.createElement('div');
var nameH2 = document.createElement('h2');
var colorH4 = document.createElement('h4');
var diameterH4 = document.createElement('h4');
var orbitH4 = document.createElement('h4');
var newImage = document.createElement('img');
var newButton = document.createElement('button');


var pName = document.createTextNode(planetArray[i].name);
var pColor = document.createTextNode("Color : " + planetArray[i].color);
var pDiameter = document.createTextNode("Diameter (in miles) : " + planetArray[i].diameter);
var pOrbit = document.createTextNode("Orbit : " + planetArray[i].orbit);
var pImage = document.createTextNode(planetArray[i].image);
var pButton = document.createTextNode("Explore!");

nameH2.appendChild(pName);
colorH4.appendChild(pColor);
diameterH4.appendChild(pDiameter);
orbitH4.appendChild(pOrbit);
newImage.appendChild(pImage);
newButton.appendChild(pButton);

newCol.appendChild(newDiv)
newDiv.appendChild(nameH2)
newDiv.appendChild(newImage)
newDiv.appendChild(colorH4)
newDiv.appendChild(diameterH4)
newDiv.appendChild(orbitH4)
newDiv.appendChild(newButton)

newCol.className = "col-md-4"
newImage.className = "img-responsive"
newButton.className = "btn btn-primary btn-lg"
newDiv.className = "zoom"

newImage.setAttribute('src', planetArray[i].image)

//document.getElementById('planet').appendChild(newCol)
fragment.appendChild(newCol)
}
 document.getElementById('planet').appendChild(fragment)










