/*
BONUS

2- popolare le options della select della milestone 3 dinamicamente.
Consigli del giorno
Come sempre, iniziamo prima di tutto dall’analisi e comprensione della consegna. Scomponiamo il problema in micro-passaggi logici che solamente in un secondo momento trasformeremo in codice.
Le icone presenti nella struttura dati fanno riferimento alla nota libreria Font Awesome, perciò come prima cosa assicuriamoci di aver inserito il link alla cdn nell’head della pagina.
Dopodiché, basandoci sul codice di riferimento nel sito di Font Awesome, analizziamo come è formato il tag <i> di un’icona qualsiasi, in particolare focalizziamoci sulle classi.
Come possiamo usare i dati presenti nella nostra struttura dati per creare l’elemento html nel modo corretto e visualizzare l’icona in pagina?
Inizialmente può essere sufficiente stampare dei semplici div, senza alcuno stile, con all’interno l’icona e uno span con il nome. Solamente quando la parte logica è completa, ci dedichiamo al css. */

const provaDom = document.getElementById("cards-container");
const tipoSeleione = document.getElementById('casellaSelezione');

creaSelection();

stampoLemieCard("all");

function creaSelection() {
    let newSelect = [];

    oggetti.forEach(element => {

        let select = `<option value="${element.type}">${element.type}</option>`;

        if (!newSelect.includes(select)) {              //oppure element.type
            newSelect.push(select);                     
            tipoSeleione.innerHTML += select;           //riciclo newSelect e all'innerHTML do <option></option>
        }
    });
    return newSelect;
};


function stampoLemieCard(tipo) {

    oggetti.forEach(element => {

        let numeriCasuali = generaNumeriCasualiUnici(3, 255, 0);
        element.color = numeriCasuali.join(","); // unisce i numeri in una stringa separata da virgola

        let imageCard = `<div class="card">
                            <i class="fa-solid ${element.prefix}${element.name}"style="color:rgb(${element.color})"></i>
                            <div>${element.name}</div>
                            </div>`;
        if (element.type == tipo || tipo == "all")

        provaDom.innerHTML += imageCard;            // volendo potevo creare tutto qui dentro senza usare la variabile imageCard
    });
}

tipoSeleione.addEventListener("change",
    function () {

        let sceltaTipo = tipoSeleione.value;
        provaDom.innerHTML = "";
        stampoLemieCard(sceltaTipo)
    }
)

function generaNumeriCasualiUnici(quantitàDesiderata, max, min) {
    let numeriUnici = [];

    while (numeriUnici.length < quantitàDesiderata) {
        const nuovoNumero = Math.floor(Math.random() * (max - min + 1)) + min;

        if (!numeriUnici.includes(nuovoNumero)) {
            numeriUnici.push(nuovoNumero);
        }
    }
    return numeriUnici;
}