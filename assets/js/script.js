var n1 = document.getElementById("n1")
var n2 = document.getElementById("n2")
var n3 = document.getElementById("n3")
var p = document.getElementById("p")

html1 = prompt("Ingrese primera nota HTML")
html2 = prompt("Ingrese segunda nota HTML")
html3 = prompt("Ingrese tercera nota HTML")

n1.innerHTML = html1
n2.innerHTML = html2
n3.innerHTML = html3

p.innerHTML = (parseInt(html1) + parseInt(html2) + parseInt(html3))/3

var css1 = document.getElementById("css1")
var css2 = document.getElementById("css2")
var css3 = document.getElementById("css3")
var p2 = document.getElementById("p2")

css1n = prompt("Ingrese primera nota CSS")
css2n = prompt("Ingrese segunda nota CSS")
css3n = prompt("Ingrese tercera nota CSS")

css1.innerHTML = css1n
css2.innerHTML = css2n
css3.innerHTML = css3n

p2.innerHTML = (parseInt(css1n) + parseInt(css2n) + parseInt(css3n))/3

var js1 = document.getElementById("js1")
var js2 = document.getElementById("js2")
var js3 = document.getElementById("js3")
var p3 = document.getElementById("p3")

js1n = prompt("Ingrese primera nota JS")
js2n = prompt("Ingrese segunda nota JS")
js3n = prompt("Ingrese tercera nota JS")

js1.innerHTML = js1n
js2.innerHTML = js2n
js3.innerHTML = js3n

p3.innerHTML = (parseInt(js1n) + parseInt(js2n) + parseInt(js3n))/3 
