`use Strict`;

console.log('Coding Challenge #1');

/* 
Mark and John are trying to compare their BMI(Body Mass Index), 
which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height)(mass in kg
and height in meter).


Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula(you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall.John weights 85 kg and is 1.76
m tall.
  */
//---------------------Data1
//Mark
const Mark_weights = 78;
const Mark_Tall = 1.69;

//John
const John_weights = 92;
const John_Tall = 1.95;

var BMI_Mark = Mark_weights / (Mark_Tall * Mark_Tall);

var BMI_John = John_weights / (John_Tall * John_Tall);
const markHigherBMI = BMI_Mark > BMI_John;
if (BMI_Mark > BMI_John)
    console.log(`Mark has a higher BMI than John.
where Mark BMI = ${BMI_Mark} and John =${BMI_John}`);
else
    console.log(`John has a higher BMI than Mark.
where Mark BMI = ${BMI_Mark} and John =${BMI_John}`);

//---------------------Data2
//Mark
const Mark_weights2 = 95;
const Mark_Tall2 = 1.88;

//John
const John_weights2 = 85;
const John_Tall2 = 1.76;

var BMI_Mark = Mark_weights2 / Mark_Tall2 ** 2

var BMI_John = John_weights2 / John_Tall2 ** 2
const markHigherBMI2 = BMI_Mark > BMI_John;
if (BMI_Mark > BMI_John)
    console.log(`Mark has a higher BMI than John.
    where Mark BMI = ${BMI_Mark} and John =${BMI_John}`);
else
    console.log(`John has a higher BMI than Mark.
where Mark BMI = ${BMI_Mark} and John =${BMI_John}`);






