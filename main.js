
document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1

  alert('yowch!dont click me so hard')
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
 
var p  = document.getElementById('compoundInvestment');
var num = p.innerText  
var finNum = (num * 2)
p.innerText = finNum
})


var p = document.getElementById('myspan');
span.innerText = span.textContent = 'newtext';

document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  
  alert('clicked')
  var circle = document.querySelector("#circle-bw")
  if (circle.style.background === "black") {
  	circle.style.backround = "white"
  }
  else {
  	circle.style.background = "black"
  }
})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}

outputString = ""
var circle = document.querySelector(".circle-red")

var oldWidth = parseInt(circle.style.width)
if (oldWidth < 320px ) {
  circle.style.width = (oldWidth * 2) 
  var newWidth = circle.style.width
  var finalWidth = outputString + "px"
  return finalWidth
}
else {
  circle.style.width = "40px" 
  return circle.style.width
}
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
})