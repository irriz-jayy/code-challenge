//Created a prompt to ask the user to input monthly gross salry which will then be calculated.
let grossSalary = prompt("What is your monthly gross salary? ");
console.log(`The gross salary input is: ${grossSalary}.`);

//Kenyan tax relief is fixed at 2400 meaning ill have to pre-state it first.
let personalRelief = 2400;

//Created a function for the NHIF deductions according to the amount of gross salary input in the prompt dialog box.
function NHIFDeductions(grossSalary) {
  if (grossSalary <= 5999) {
    return 150;
  } else if (grossSalary <= 7999) {
    return 300;
  } else if (grossSalary <= 11999) {
    return 400;
  } else if (grossSalary <= 14999) {
    return 500;
  } else if (grossSalary <= 19999) {
    return 600;
  } else if (grossSalary <= 24999) {
    return 750;
  } else if (grossSalary <= 29999) {
    return 850;
  } else if (grossSalary <= 34999) {
    return 900;
  } else if (grossSalary <= 39999) {
    return 950;
  } else if (grossSalary <= 44999) {
    return 1000;
  } else if (grossSalary <= 49999) {
    return 1100;
  } else if (grossSalary <= 59999) {
    return 1200;
  } else if (grossSalary <= 69999) {
    return 1300;
  } else if (grossSalary <= 79999) {
    return 1400;
  } else if (grossSalary <= 89999) {
    return 1500;
  } else if (grossSalary <= 99999) {
    return 1600;
  } else if (grossSalary >= 100000) {
    return 1700;
  }
}
//Takes gross salary and calculates amount of deductions to be done and prints it in the console.
let NHIF = NHIFDeductions(grossSalary);
console.log(`NHIF: ${NHIF}.`);

//Next we do the  calculations forNSSF deductions using the new rates as given in the website provided.
function NSSFDeductions(grossSalary) {
  if (grossSalary <= 18000) {
    return grossSalary * 0.06;
  } else if (grossSalary > 18000) {
    return 18000 * 0.06;
  }
}

//Prints the amount of NSSF to be deducted from gross salary to console.
let NSSF = NSSFDeductions(grossSalary);
console.log(`NSSF deducted from salary: ${NSSF}.`);

//Next we do total taxable income from input given in the prompt
let taxableIncome = grossSalary - (NHIF + NSSF);
console.log(`PAYE: ${taxableIncome}.`);

//PAYE calculations
function paye(taxableIncome) {
  if (taxableIncome <= 24000) {
    return 0;
  } else if (taxableIncome >= 24001 && taxableIncome <= 32333) {
    return taxableIncome * 0.25 - personalRelief;
  } else {
    return taxableIncome * 0.3 - personalRelief;
  }
}
//Prints PAYE to console
let PAYE = paye(taxableIncome);
console.log(`PAYE: ${PAYE}.`);

//After calculation all deductions (NSSF,NHIF and PAYE) we calculate net salary according to value passed in propmt box.
// Net salary calculation.
//We take gross salary and subtract all deductions to find net salary
function netSalary(grossSalary) {
  return grossSalary - (NHIF + NSSF + PAYE);
}
//We print the net salary to the console
let netIncome = netSalary(grossSalary);
console.log(`Your net salary: ${netIncome}.`);
