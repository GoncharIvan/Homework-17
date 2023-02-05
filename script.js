let str = "You can ignore single and doble quotes like this: \\\'\\' \\\"\\\"" 
console.log(str)

let data = alert("Please enter your data");
console.log(data)


let userName = prompt("Enter your name?", 'Name');
alert(`Your name is: ${userName}`);
console.log(userName);

let userSurname = prompt("Enter your surname?", 'Surame');
alert(`Your full name is: ${userName} ${userSurname}`);
console.log(userSurname);

let userAge = prompt("How old are you?", 'Age');
alert(`Your full name is: ${userName} ${userSurname}, your age is: ${userAge}`);
console.log(userAge);

let access = confirm('Are you admin?');
alert(`Your full name is: ${userName} ${userSurname}, your age is: ${userAge}, admin status: ${access}`);
console.log(access);

