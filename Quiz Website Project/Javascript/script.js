//Variables for Shuffle & Carousel
var units = document.querySelectorAll(".unit");
var indexUnit = 0;
var unitCounter = 0;
var indexes = [];
var score = 0; // counting the points user got.

//Buttons
var nButton = document.querySelector("#nextButton");
var pButton = document.querySelector("#previousButton");
var sButton = document.querySelector("#submitButton");

//Adding EventListener to buttons
pButton.addEventListener("click", function(){
  if(unitCounter > 0){
    unitCounter--;
  }
  unitUpdate();
});

nButton.addEventListener("click", function(){
  if(unitCounter < 4){
    unitCounter++;
  }
  unitUpdate();
});

for(var i = 0;i<units.length;i++){
  indexes[i] = i;
}

indexes = shuffle(indexes)
indexUnit= indexes[unitCounter];

unitUpdate();

//Function for Shuffle questions
function shuffle(array){
var counter = array.length;
var index;
var temp;
	
  while(counter > 0){
    index = Math.floor(Math.random() * counter);
	counter--;
	temp = array[counter];
	array[counter] = array[index];
	array[index] = temp;
  }
  return array;
}

//Function for Updating/Changing unit
function unitUpdate(){
  indexUnit = indexes[unitCounter];
  
  units.forEach(function(a,i){
	if(i != indexUnit){
	  a.classList.add("hide");
	}
	else{
	  a.classList.remove("hide");
	}
  });
}

//Function for Image Question 1
var imageOne = document.querySelectorAll(".one li");

imageOne.forEach(function(imageOne){
	imageOne.addEventListener("click", function(){
		var ans = this.dataset.key;
		if(ans == "3"){
			score++;
		}
	}, {once : true}); //User allows the click once time then function will be stop.
});

//Function for Image Question 6
var imageSix = document.querySelectorAll(".six li");

imageSix.forEach(function(imageSix){
	imageSix.addEventListener("click", function(){
		var answ = this.dataset.key;
		if(answ == "5"){
			score++;
		}
	}, {once : true}); //User allows the click once time then function will be stop. When the user clicks more than one time it does not countable anymore for score++.
});

//Function for showing result to user and give a feedback by using .innerHTML
function result(){
  var question2 = document.quiz.q2.value;
  var question3 = document.quiz.q3.value;
  var question4 = document.quiz.q4.value;
  var question5 = document.quiz.q5.value;
  var question7 = document.quiz.q7.value;
  var question8 = document.quiz.q8.value;
  var question9 = document.quiz.q9.value;
  var question10 = document.quiz.q10.value;
  var name = document.querySelector("#userForm").username.value; //Takes user name and show it at the end with how much did user got.
  

	if(question2 == "a2"){
	  score++;
	}
	
	if(question3 == "Calcium" && question3 == "calcium"){
	  score++;
	}
	
	if(question4 == "b2"){
	  score++;
	}
	
	if(question5 == "c3"){
	  score++;	
	}
	
	if(question7 == "d2"){
	  score++;
	}
	
	if(question8 == "e4"){
	  score++;
	}
	
	if(question9 == "op3"){
	  score++;
	}
	
	if(question10 == "Jupiter"){ //It is a plant name. So it has to start with uppcase J.
	  score++;
	}
	
  submitButton.style.visibility = "hidden"; // When the user finish and click the "Submit" button, It gets hidden.
  
  if(score >= 4){
    document.getElementById("message").innerHTML ="Well done " + name + ", you got " + score + " correct.";
  }
  
  if(score >= 2 && score <4){
	document.getElementById("message").innerHTML ="Not bad " + name + ", you got " + score + " correct.";
  }
  
  if(score > 0 && score <2){
	document.getElementById("message").innerHTML ="Maybe next time " + name + ". You got only " + score + " correct.";
  }
  
  if(score == 0){
	document.getElementById("message").innerHTML ="You are loser " + name + ". But somehow you are still awesome. You got " + score + " correct.";
  }
  
}