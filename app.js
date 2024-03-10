//creare un form che calcoli importo del viaggio base a kilometri della tratta e età del passeggero
// 1-Attribuire all'Id KM-road di chiedere i km di tratta del biglietto
// 2-Attribuire all'Id CS-age di selezionare 1 delle 3 categorie di età 
// 3-Calcolare il costo del biglietto  tramite Km-road * 0,21
// 4-SE l'età selezionata con  CS-age è minorenne applicare 20% di sconto
// 5-ALTRIMENTI SE l'età selezionata con Cs-age è over 65 applicare il 40% di sconto
// 6-ALTRIMENTI stampare il risultato  senza sconti
// 7-Stampare il risultato in un form a cui attribuiremo il valore id Ticket

const btnGenerate = document.getElementById("btn-generate");
const btnCancel = document.getElementById("btn-cancel");

btnGenerate.addEventListener("click", function () {
    const csName = document.getElementById("CS-name").value;

    const csAgeElement = document.getElementById("CS-age");
    const csAge = csAgeElement.value;
    const selectedIndexAge = csAgeElement.selectedIndex;
    const ageLabel = csAgeElement.options[selectedIndexAge].innerHTML;

    const customersKm = document.getElementById("KM-road").value;

    let ticketCost = customersKm * 0.21

    if (csAge == "minorenne") {
        ticketCost = ticketCost - (ticketCost * 0.2)
    }

    else if (csAge == "over-65") {
        ticketCost = ticketCost - (ticketCost * 0, 4)
    }
    
    ticketCost = ticketCost.toFixed(2);

    const ticketContainer = document.getElementById("ticket-container");
    ticketContainer.innerHTML +=
        ` <table class="ticket-train">
            <tr>
                <td rowspan="2" class="bg-secondary">nome passeggero
                    <p>${csName}</p>
                </td>
                <td>offerta</td>
                <td>carrozza</td>
                <td>codice cp</td>
                <td>costo biglietto</td>

            </tr>
            <tr>
                <td>${ageLabel}</td>
                <td>5</td>
                <td>92911</td>
                <td>${ticketCost}€</td>

            </tr>
        </table> `

    console.log("ticketCost", ticketCost)
})

btnCancel.addEventListener("click", function () {
    document.getElementById("CS-name").value = "";
    document.getElementById("CS-age").selectedIndex = 0;
    document.getElementById("KM-road").value = "";
    document.getElementById("ticket-container").innerHTML = "";

})



