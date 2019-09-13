 function shake(){
 let message = [
  "As I see it,<br>yes",
"Ask again<br>later",
"Better not<br>tell you now",
"Cannot<br>predict now",
"Concentrate <br> and ask again",
"You have a<br>therapist for this",
"It is<br>certain",
"It is<br>decidedly so",
"Most likely",
"My reply<br>is no",
"My sources<br>say no",
"Outlook<br> good",
"Outlook not<br>so good",
"Reply hazy<br>try again",
"Gee, wash<br>your hands",
"Very<br>doubtful",
"Without<br>a doubt",
"Yes",
"Yes,<br>definitely",
"You may<br>rely on it",
  ];
    let text = Math.floor(Math.random() * message.length);
     document.getElementById("answer").innerHTML = message[text];

	     document.getElementById("answer").style.opacity = "1";
	       document.getElementById("answer").style.WebkitTransition = "all 2s"; // Code for Safari 3.1 to 6.0
  document.getElementById("answer").style.transition = "all 2s";  
}


function fadeOut(){
	     document.getElementById("answer").style.opacity = "0";
}


