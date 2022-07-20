"use strict"

// Prima užduotis

var pristatymas = true
do {
    var kaina = prompt("Įveskite prekės kainą")
    kaina = Number(kaina)
} while(isNaN(kaina) || kaina <= 0)

if(confirm("Ar reikalingas pristatymas į namus?")){
    pristatymas = true
} else {
    pristatymas = false
}

if(pristatymas == false) {
    alert("Prekės kaina: " + kaina.toFixed(2) + " €")
    alert("Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a")
} else {
    var miestas = prompt("Į kurį miestą reiks pristatyti?")
    var pKaina = 2
    var vKaina = kaina + pKaina
    alert("Prekės kaina: " + kaina.toFixed(2) + " €")
    alert("Pristatymas: " + pKaina.toFixed(2) + " €")
    alert("Iš viso: " + vKaina.toFixed(2) + " €")
    alert("Prekę pristatysime į " + miestas + " per 1-3 dienas.")
}

// Antra užduotis

var salys = [
    {pavadinimas: "Portugalija", plotas: 92212, gyv: 10.26},
    {pavadinimas: "Lietuva", plotas: 65300, gyv: 2.8},
    {pavadinimas: "Lenkija", plotas: 312696, gyv: 38.18},
    {pavadinimas: "Ispanija", plotas: 505990, gyv: 47.35},
    {pavadinimas: "Italija", plotas: 301230, gyv: 59.55}
] 

for(var x of salys){
    console.log(`Šalis: ${x.pavadinimas}, joje gyvena ${x.gyv} mln. gyventojų.`)
    console.log(`Valstybės plotas: ${x.plotas} km², plotas tenkantis vienam gyventojui: ${(x.plotas / x.gyv).toFixed(2)} m²`)
    console.log("==============")
}
