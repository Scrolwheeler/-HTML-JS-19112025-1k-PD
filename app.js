// your code goes here
// bmi = kg/m kvadrata
const FinalAnswer = document.getElementById("FinalAnswer");
const svars = document.getElementById("svars");
const garums = document.getElementById("garums");
const podzina = document.getElementById("podzina");
const Piebilde = document.getElementById("Piebilde");

podzina.addEventListener("click", kmiReikinasana);

function kmiReikinasana(){
    FinalAnswer.innerText = kmi
    kmi = 0
    if (kmi < 18,5)
    kmi = svars.value / garums.value * garums.value;
       // Piebilde.innerText = "Nepietiekama ķermeņa masa"
    if (kmi > 18,5 , kmi < 24,99)
        kmi = svars.value / garums.value * garums.value;
      //  Piebilde.innerText = "Normāla ķermeņa masa"
    if (kmi > 25 , kmi < 29,99)
        kmi = svars.value / garums.value * garums.value;
      //  Piebilde.innerText = "Lieka ķermeņa masa"
    if (kmi >= 30)
        kmi = svars.value / garums.value * garums.value;
      //  Piebilde.innerText = "Aptaukošanās"

        




}