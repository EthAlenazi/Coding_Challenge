`use Strict`;
//LECTURE: Values and Variables
/* 1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country(population in millions)
2. Log their values to the console */
const population = 34813867;
const country = 'Saudi Arabia';
const continent = 'Asia';

//LECTURE: Data Types
/* 1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console */

let isIsland = country === 'Island';
let language;

console.log(typeof (isIsland));
console.log(typeof (population));
console.log(typeof (language));

//LECTURE: let, const and var
/* 1. Set the value of 'language' to the language spoken where you live (some
    countries have multiple languages, but just choose one)
    2. Think about which variables should be const variables (which values will never
    change, and which might change?). Then, change these variables to const.
    3. Try to change one of the changed variables now, and observe what happens */
language = 'Arabic';

//LECTURE: Basic Operators
/* 1. If your country split in half, and each half would contain half the population,
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than
Finland?
4. The average population of a country is 33 million people. Does your country
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese' */

let half_population = population / 2;
console.log(`if our country split in half the population it will be ${half_population + 1}`);

if (6000000 >= population)
    console.log(`My ${country} have ${population}  people more than Finland,where Finland have 6 million`);
else
    console.log(`people in Finland more than people in ${country},
    Where Finland have 6 million but My country have ${population}`);

let description = `${country} is in ${continent}, and its ${population} million
people speak ${language}`;

console.log(description);

//LECTURE: Equality Operators: == vs. ===
/* 1. Declare a variable 'numNeighbours' based on a prompt input like this:
prompt('How many neighbour countries does your country
have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when
'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of
'numNeighbours'. Notice what happens when there is exactly 1 border! Why
is this happening?
7. Finally, convert 'numNeighbours' to a number, and watch what happens now
when you input 1
8. Reflect on why we should use the === operator and type conversion in this
situation
 */

let numNeighbours = prompt('How many neighbour countries does your country have?');
//Number, String and Boolean just this type we can converted 
if (Number(numNeighbours) === 1)
    console.log('Only 1 border!');
else if (numNeighbours > 1 && numNeighbours < 2)
    console.log('More than 1 border');
else
    console.log('No borders');






