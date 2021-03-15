var database = [
	{
		username : "charouzic",
		password : "passssss"
	},
	{
		username : "bbb",
		password : "passing"
	},
	{
		username : "ccc",
		password : "helooo"
	}
];

var newsFeed = [
	{
		username : "Dobby",
		timeline : "I really like Harry Potter and I have no master.",
	},
	{
		username : "Harry Potter",
		timeline : "I really miss my parents and am saving the world.",
	},
	{
		username : "Hermiona Granger",
		timeline : "I am really brave and smart witch.",
	}
];

var userNamePrompt = prompt("Username: ");
var passwordPrompt = prompt("Password: ");

function isUserValid(user, pass) {
	for (var i = 0; i < database.length; i++) {
		if (user === database[i].username && 
			pass === database[i].password) {
					return true;
			}
	}
	return false;
}

function signIn(userName, password) {
	if (isUserValid(userName, password)  ) {
		console.log(newsFeed);
	}
	else {
		alert("Sorry, wrong username and password!");
	}
}	


signIn(userNamePrompt, passwordPrompt);
