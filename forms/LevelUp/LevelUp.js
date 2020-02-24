
function carLoan (p, r, t) {
  return p * r / (1 - (Math.pow(1/(1 + r), t)));
}

function homeLoan (p, r, t) {
  return p * r / (1 - (Math.pow(1/(1 + r), t)));
}

let newLoan = "Yes"
let carOrHome = " "
let carPrinciple = " "
let carInterest = " "
let carTime = " "
let carFinalInterest = " "
let loanAmountCar = " "
let homePrinciple = " "
let homeInterest = " "
let homeTime = " "
let homeFinalInterest = " "
let homeTimeFinal = " "
let loanAmountHome = " "


while (newLoan == "Yes" || newLoan == "yes") {
  
    carOrHome = prompt(`Would you like to calculate for a car or home loan?`);
    carOrHome.toUpperCase();

   if (carOrHome == 'Car' || carOrHome == 'car') {

      carPrinciple = parseInt(prompt(`What is the principle amount?`))
      carInterest = parseFloat(prompt(`What is the interest rate?`))
      carTime = parseInt(prompt(`What is time of your loan in months?`))
      carFinalInterest = carInterest / 1200

      loanAmountCar = carLoan(carPrinciple, carFinalInterest, carTime)
      alert(`A car loan for $${carPrinciple}  over ${carTime} months at ${carInterest}% interest would have a monthly payment of $${loanAmountCar}`) 


    } else if (carOrHome == 'Home' || carOrHome == 'home') {
  
          homePrinciple = parseInt(prompt(`What is the principle amount?`))
          homeInterest = parseFloat(prompt(`What is the interest rate?`))
          homeTime = parseInt(prompt(`What is time of your loan in years?`))
          homeFinalInterest = homeInterest / 1200
          homeTimeFinal = homeTime * 12

          loanAmountHome = homeLoan(homePrinciple, homeFinalInterest, homeTimeFinal)
          alert(`A home loan for $${homePrinciple}  over ${homeTime} years at ${homeInterest}% interest would have a monthly payment of $${loanAmountHome}`) 

     } else 
                  alert("Unknown error, please specify either car or home")
 
        newLoan = prompt('Do you want to calculate a loan?')
} 


