//create an array of objects = formulary
//create an array of ocjects = stock

const formulary = [];
const stock = [];

//create a function, which will add a medication to the formulary
function addMedication(medication){

//check duplicates, before adding another using arrow f(check) property name.
  if(formulary.some(check => check.name == medication)){
    console.log("You are existing! " + medication);
  }
  else{

    formulary.push({name: medication});
  }
  return addMedication;
};

//checks for the function addMedication
addMedication("Paracetamol");
addMedication("Ibuprofen");
addMedication("Amoxicillin");
addMedication("Codeine");
addMedication("Diclofenac");
addMedication("Simvastatin");
addMedication("Tramadol");
addMedication("Warfarin");

//print medications list to the console
    for (var i = 0; i< formulary.length; i++){
      var medicationsList = formulary[i];
                  console.log(medicationsList.name);
    }

function addStrengthPack(medication, strength, packSize, totalPack){
  if(formulary.some(check => check.name == medication)){
  stock.push({name: medication, strength: strength, packSize: packSize, totalPack: totalPack});
  }
}

//checks for the f(addStrengthPack)
addStrengthPack("Paracetamol", "500mg", 50, 100);
addStrengthPack("Ibuprofen", "500mg", 50, 100);
addStrengthPack("Amoxicillin", "250mg", 20, 20);
addStrengthPack("Tramadol", "50mg", 100, 5);
addStrengthPack("Codeine", "30mg", 10, 20);
addStrengthPack("Simvastatin", "10mg", 10, 10);
addStrengthPack("Warfarin", "3mg", 50, 5);
console.log(stock);
