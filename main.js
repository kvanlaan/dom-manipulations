
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


var circle = document.querySelector("div .circle-red")
var circleStyles = window.getComputedStyle(circle)

var doublePx = function(pxValue) {
  var doubledInt = parseInt(pxValue) * 2
  return doubledInt + "px"  
}

circle.style.width = doublePx(circleStyles.width)
circle.style.height = doublePx(circleStyles.height)

})

/////


document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
})

 Array.prototype.contains = function(el) {
  return this.indexOf(el) !== -1
}

var isDone = function(choreElement) {
  console.log(choreElement.classList)
  // is "done" in the classList?   
  for (var i = 0; i < choreElement.classList.length; i ++) {
    if (choreElement.classList[i] === 'done') {
      return true
    }
  }
  return false
}

var choresContainer = document.querySelector("#box5 ul")

var completedChoresUl = document.querySelector('#box5s ul')

var chores = choresContainer.querySelectorAll('li')

for (var i = 0; i < chores.length; i ++) {
  var choreNode = chores[i]
  if (isDone(choreNode)) {
    choresContainer.removeChild(choreNode)
    completedChoresUl.appendChild(choreNode)
  }
}

document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
})