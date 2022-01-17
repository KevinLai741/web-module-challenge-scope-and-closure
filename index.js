// ⭐️ Example Challenge START ⭐️

/**Example Task : processFirstItem()
 * This example shows how you might go about solving the rest of the tasks
 * 
 * Use the higher order function processFirstItem below to do the following:
 *  1. Receive an array of strings in a parameter
 *  2. Receive a callback function that takes a string as its argument in a parameter
 *  3. Return the result of invoking the callback function and passing in the FIRST 
 *     element in the array as the argument
 * 
 * The following code is demonstrating a way of completing this task
 * It returns the string `foofoo`
*/

function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}
console.log(processFirstItem(['foo','bar'],function(str){return str+str}));

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/*Task 1: counterMaker()
  
  Study the code for counter1 and counter2, then answer the questions below.
  
  1. What is the difference between counter1 and counter2?
    The difference between counter1 and counter2 is the usage of 'let count = 0'. In counter1, 'let count = 0' is a variable being used in the local block; while counter2, it is being used globally.
  
  2. Which of the two uses a closure? How can you tell?
    Between the two, counter2 uses closure. You can tell because the function body has access to the outside scope and can access that variable.
  
  3. In what scenario would the counter1 code be preferable? In what scenario would 
     counter2 be better?  
     Counter1 code would be preferable in a nested function. Counter2 code would be better in a web page
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* ⚾️⚾️⚾️ Task 2: inning() ⚾️⚾️⚾️
Use the inning function below to do the following:
  1. Return a random whole number of points between 0 and 2 scored by one team in an inning
  
  For example: invoking inning() should return a numerical score value of 0, 1, or 2
  
NOTE: This will be a callback function for the tasks below
*/

function inning(){
    return Math.floor(Math.random() * Math.floor(3));
}

console.log('Task 2:', inning());

/* Task 2B - Written Questions
1. In your own words, define closure (1 - 2 sentences)
  Closure is where if the variable isn't defined in a function's scope, the function will look outside the scope and search for a variable being referenced in the outer scope.
2. Study the following code, then answer the questions below.

function personalDice(name){
  return function(){
      // generate random number between 1 and 6
    const newRoll = Math.floor(Math.random() * 6);
    console.log(`${name} rolled a ${newRoll}`)
  }
}

const dansRoll = personalDice("Dan");

const zoesRoll = personalDice("Zoe");


dansRoll();
dansRoll();

a. Where is closure used in this code? How can you tell?
  Closure is used in this code in 80. You can tell because the function isn't defined, but we can invoke personalDice(name) and the function in the code block will run.
b. Compare and contrast calling dansRoll the first and second time. What is always the same? What could change?
  What remains the same is "Dan rolled a" but the dice roll number will be different because of Math.random.
c. What is the lexical scope of newRoll?
The lexical scope of newRoll is 1 - 6.

/* ⚾️⚾️⚾️ Task 3: finalScore() ⚾️⚾️⚾️
Use the finalScore function below to do the following:
  1. Receive the callback function `inning` that was created in Task 2 
  2. Receive a number of innings to be played
  3. After each inning, update the score of the home and away teams
  4. After the last inning, return an object containing the final (total) score of the innings played
  
  For example: invoking finalScore(inning, 9) might return this object:
{
  "Home": 11,
  "Away": 5
}
*/ 

function finalScore(inning, number){
  let homeScore = 0;
  let awayScore = 0;
  for(let i = 0; i < number; i++){
    homeScore = homeScore + inning();
    awayScore = awayScore + inning();
  }
  return {
    Home: homeScore,
    Away: awayScore
  }
}

console.log('Task 3:', finalScore(inning,9));

/* ⚾️⚾️⚾️ Task 4: getInningScore() ⚾️⚾️⚾️
Use the getInningScore() function below to do the following:
  1. Receive a callback function - you will pass in the inning function from task 2 as your argument 
  2. Return an object with a score for home and a score for away that populates from invoking the inning callback function */

function getInningScore(inning) {
  return {
    Home: inning(),
    Away: inning()
  }
}

console.log('Task 4:', getInningScore(inning));


/* ⚾️⚾️⚾️ Task 5: scoreboard() ⚾️⚾️⚾️
Use the scoreboard function below to do the following:
  1. Receive the callback function `getInningScore` from Task 4
  2. Receive the callback function `inning` from Task 2
  3. Receive a number of innings to be played
  4. Return an array where each of it's index values equals a string stating the
  Home and Away team's scores for each inning.  Not the cumulative score.
  5. If there's a tie at the end of the innings, add this message containing the score to the end of the array:  "This game will require extra innings: Away 12 - Home 12"  (see tie example below)
     If there isn't a tie, add this message to the end of the array: "Final Score: Away 13 - Home 11"  (see no tie example below)
  
  NO TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 2", 
  "Inning 2: Away 2 - Home 1",
  "Inning 3: Away 0 - Home 2", 
  "Inning 4: Away 2 - Home 2", 
  "Inning 5: Away 2 - Home 0", 
  "Inning 6: Away 1 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 2",
  "Inning 9: Away 1 - Home 0", 
  "Final Score: Away 11 - Home 12"  
]

  TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 1", 
  "Inning 2: Away 2 - Home 2",
  "Inning 3: Away 1 - Home 0", 
  "Inning 4: Away 1 - Home 2", 
  "Inning 5: Away 0 - Home 0", 
  "Inning 6: Away 2 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 1",
  "Inning 9: Away 1 - Home 1", 
  "This game will require extra innings: Away 10 - Home 10"
]  
  */

function scoreboard(getInningScore,inning,number) {
  const Score = [];
  let homeScore = 0;
  let awayScore = 0;

  for(let i = 0; i < number; i++){
    const current = getInningScore(inning);
    homeScore = homeScore + current.Home
    awayScore = awayScore + current.Away
    Score.push(`Inning ${i + 1}: Away${current.Away} - Home ${current.Home}`)
  }
  if(homeScore === awayScore){
    Score.push(`This game will require extra innings: Away ${current.Away} - Home ${current.Home}`);
  }else{
    Score.push(`Final Score: Away: ${awayScore} - Home ${homeScore}`);
  }
  return Score;
}

console.log('Task 5:', scoreboard(getInningScore, inning, 9));



/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working');
  return 'bar';
}
foo();
module.exports = {
  foo,
  processFirstItem,
  counter1,
  counter2,
  inning,
  finalScore,
  getInningScore,
  scoreboard,
}
