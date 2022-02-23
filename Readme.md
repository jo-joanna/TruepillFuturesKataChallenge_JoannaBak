**Good morning,**\
Readme is a short guide what has been created. Please note that each function, loop or if statement have a comment added to facilitate reading code.\
Below I will put information what it is and why.\
The code is written in JavaScript \*.js, therefore you will need to use a programme to read it like Atom, CodePen or any JS compiler.\
**Happy coding, Joanna Bak**

# Pharmacy Stock Kata
is a new store, which requires to add medicines and create a stock with medicines, its strength, its size and its total quantity.

## Pharmacy requirements

### 1. Requirements
We write our requirements in user stories so we’ve followed the same approach in this kata. There are
three requirements defined below, each requirement has a scenario to recreate.
### 1.1 Medication available in the pharmacy
As a Pharmacist
- I want to maintain a list of medications we have in our formulary so that we know the
medications we can dispense to our patients
#### Assumptions
1\. The name of a medication acts as its unique identifier\
2\. Medication cannot be added to the formulary more than once
#### Acceptance Criteria
1\. Ability to add the name of a medication to the formulary\
2\. Ability to return a list of medication names in the formulary
#### Scenarios
Truepill is opening a new pharmacy and starting to define the list of medications that it will stock. The
Pharmacist starts making a list of medications they stock and then requires a report. Your application
should run the following steps:\
1\. Add Paracetamol and Ibuprofen to formulary\
2\. Add Amoxicillin to formulary\
3\. Add Codeine, Diclofenac, Simvastatin, Tramadol to formulary\
4\. List the names of the Medications in the formulary
### 1.2 Medication Inventory
As a Pharmacist
- I want to add medication to the inventory so that we maintain stock levels for our medications in our
formulary and we can understand when we need to order more medication from our supplier
#### Assumptions
1\. Only medication in the formulary can be added to stock\
2\. All medications are tablets and stocked in packs of the same strength\
3\. Only those packs provided in the sample data list should be used.
#### Acceptance Criteria
1\. Ability to add packs for medications already in the formulary list\
2\. Ability to list the medication in stock and the quantities
#### Scenario
The new Truepill pharmacy is now ready to take stock of the items in the formulary. The medications are
delivered on separate days and the stock is tracked as it arrives and put into storage. Your application
should run the following steps\
1\. Add 100 packs of 50x500mg Paracetamol\
2\. Add 100 packs of 50x500mg Ibuprofen\
3\. Add 20 packs of 20x250mg Amoxicillin\
4\. Add 5 packs of 100x50mg Tramadol\
5\. Add 20 packs of 10x30mg Codeine\
6\. Add 10 packs of 10x10mg Simvastatin\
7\. Add 5 packs of 50x3mg Warfarin\
8\. List the name, strength, pack size and the total number of packs for all the medication in stock.


## Description of the code

1. Created a **const formulary** & **const stock** array to keep medications and stock
2. Created a **function addMedication** to be able to add medications multiple times and now
	- added *if statement* to create a medication name once
	- added medications through the *function* into the *formulary array*
3. Created a **loop medicationsList** to print to the console all medications' names
4. Created a **function addStrengthPack** to be able to add strength, size & total of a single existing medication:
	- the function adds medications' properties into the *stock array* through looping an object in an array formulary, *if statement* is TRUE and breaks when it finishes

5. Call the **function addStrengthPack** to add strength, size & total of a single medication.
6. Print to the console the **stock** array.

The instruction did not cover a couple of things:
- what if we want increase a stock?
- what if we want to remove a medication?
- what if a medication does not exists?
