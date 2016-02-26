
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



document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3

  var circle = document.querySelector("#circle-bw")
  if (circle.style.background === "black") {
  	circle.style.background = "white"
  }
  else {
  	circle.style.background = "black"
  }

})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4


var redCircle = document.querySelector(".circle-red")  

var redCircleStyles = window.getComputedStyle(redCircle)

var oldCircleWidth = parseInt(redCircleStyles.width)
redCircle.style.width = (oldCircleWidth * 2) + "px"

var oldCircleHeight = parseInt(redCircleStyles.height)
redCircle.style.height = (oldCircleHeight * 2) + "px"

if (oldCircleHeight >= 320) {
  redCircle.style.width = 40 + "px"
  redCircle.style.height = 40 + "px"
}

})


/////


document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5


  var userList = document.querySelector("#userList")
  var inactive = document.querySelectorAll(".inactive")


var inactivePresent = true
for (i = 0; i <inactive.length; i++) {
if (inactivePresent) {
  userList.removeChild(inactive[i])
  }

}
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6


var reverseBox = document.querySelector("#reverse-squares .answer-box")
var squares = reverseBox.querySelectorAll(".square")


for (var i = squares.length; i--;) {
 
  reverseBox.appendChild(squares[i])

}
  
})
    


document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7

var textBox = document.querySelector("#pig-latin .answer-box")
var text = textBox.querySelectorAll("li")


var reverseString = function(input) {
  var newString = ""
  for ( var i = input.length - 1; i>=0; i--) {
    var letter = input[i]
    newString = newString + letter
  }
  return newString
}


for (var i = 0; i < text.length; i ++) {
                         
    text[i].textContent = reverseString(text[i].textContent)
}


})
    

document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8

var cityImage = document.querySelector("#city-img")


var length  = cityImage.src.length

var lastNum = cityImage.src.substring(length-1)

cityImage.src = cityImage.src.substring(0, [length-1])

lastNum = parseInt(lastNum) + 1

cityImage.src += lastNum


})

