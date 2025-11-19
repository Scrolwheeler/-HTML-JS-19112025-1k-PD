// your code goes here
// bmi = kg/m kvadrata
const FinalAnswer = document.getElementById("FinalAnswer");
const svars = document.getElementById("svars");
const garums = document.getElementById("garums");
const podzina = document.getElementById("podzina");
const Piebilde = document.getElementById("Piebilde");

podzina.addEventListener("click", kmiReikinasana);
garums.value = garums.value / 100
function kmiReikinasana(){
    
    kmi = svars.value / garums.value * garums.value
    if (kmi < 18,5)
        Piebilde.innerText = "Nepietiekama ķermeņa masa"
    if (kmi > 18,5 < 24,99)
        Piebilde.innerText = "Normāla ķermeņa masa"
    if (kmi > 25 < 29,99)
        Piebilde.innerText = "Lieka ķermeņa masa"
    if (kmi >= 30)
        Piebilde.innerText = "Aptaukošanās"

}
