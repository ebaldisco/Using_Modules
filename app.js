var line_Space = ("\n");
const readline = require('readline');
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(line_Space);
 
rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log('Thank you for your valuable feedback:', answer);
  
console.log(line_Space);  
 
  rl.close();
});

