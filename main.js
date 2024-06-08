const birdDate = document.querySelector("#birthday");
const calculate = document.querySelector("#calculate");
const result = document.querySelector("#result");

function calculateAge(e) {
  e.preventDefault();
  const birdDValue = birdDate.value;
  if (birdDValue === "") {
    alert("Veuillez saisir une date de naissance");
  } else {
    const age = getAge(birdDValue);
    result.innerHTML = `Vous avez ${age} ans`;
  }
}

function getAge(birdDValue) {
  const today = new Date();
  const inputDate = new Date(birdDValue);
  let currentAge = today.getFullYear() - inputDate.getFullYear();
  const month = today.getMonth() - inputDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birdDValue.getDate)) {
    currentAge--;
  }
  return currentAge;
}

calculate.addEventListener("click", calculateAge);
