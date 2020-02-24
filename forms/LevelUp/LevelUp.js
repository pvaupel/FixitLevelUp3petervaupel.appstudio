
function carLoan (p, r, t) {
  return p * r / (1 - (Math.pow(1/(1 + r), t)));
}

function homeLoan (p, r, t) {
  return p * r / (1 - (Math.pow(1/(1 + r), t)));
}

