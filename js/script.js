let tot = 0;

function aggiungiProdotto() {
    let prodotto;
    prodotto = prompt("Inserisci costo prodotto");
    console.log("Costo prodotto: " + prodotto);

    console.log(typeof (prodotto))
    prodotto = parseFloat(prodotto);
    console.log(typeof (prodotto))

    tot = tot + prodotto;
    console.log("Il totale è: " + tot);

    let divTotale;
    divTotale = document.getElementById("totale");
    divTotale.innerHTML = tot;
}