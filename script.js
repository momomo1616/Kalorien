function berechneKalorien() {
    let geschlecht = document.getElementById("geschlecht").value;
    let gewicht = parseFloat(document.getElementById("gewicht").value);
    let groesse = parseFloat(document.getElementById("groesse").value);
    let alter = parseInt(document.getElementById("alter").value);
    let aktivitaet = parseFloat(document.getElementById("aktivitaet").value);

    if (isNaN(gewicht) || isNaN(groesse) || isNaN(alter)) {
        alert("Bitte alle Felder ausfüllen!");
        return;
    }

    let grundumsatz;
    
    if (geschlecht === "m") {
        grundumsatz = 10 * gewicht + 6.25 * groesse - 5 * alter + 5;
    } else {
        grundumsatz = 10 * gewicht + 6.25 * groesse - 5 * alter - 161;
    }

    let leistungsumsatz = grundumsatz * (aktivitaet - 1);
    let gesamtumsatz = grundumsatz * aktivitaet;

    document.getElementById("grundumsatz").innerHTML = `Grundumsatz: <strong>${grundumsatz.toFixed(2)}</strong> kcal`;
    document.getElementById("leistungsumsatz").innerHTML = `Leistungsumsatz: <strong>${leistungsumsatz.toFixed(2)}</strong> kcal`;
    document.getElementById("gesamtumsatz").innerHTML = `Gesamtumsatz: <strong>${gesamtumsatz.toFixed(2)}</strong> kcal`;
}
