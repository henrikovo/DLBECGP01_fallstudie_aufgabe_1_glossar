// Funktion zum Ausgeben von Datum und Uhrzeit der letzten Speicherung
document.addEventListener('DOMContentLoaded', function () {
    const dateElement = document.createElement('div');
    const currentDate = new Date();
    dateElement.textContent = 'Letzte Änderung: ' + currentDate.toLocaleString();
    document.body.appendChild(dateElement);

    // Klasse hinzufügen
    dateElement.className = 'last-modified';

    // Das Element vor dem Footer einfügen
    const footer = document.querySelector('footer');
    document.body.insertBefore(dateElement, footer);
});

// Scroll to Top Button
// Den Button "holen"
let mybutton = document.getElementById("scrollToTopBtn");

// Beim Scrollen von 300px vom oberen Rand des Dokuments nach unten wird die Schaltfläche angezeigt
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Beim Klicken auf die Schaltfläche scrollen man zum Anfang des Dokuments
mybutton.addEventListener('click', function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// Akkordeon-Funktion
function toggleAccordion(letter) {
    var content = document.getElementById('content-' + letter);
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

// Zurück zur Startseite
function goToHome() {
    window.location.href = 'index.html';
}

// Such-Funktion
function searchFunction() {
    // Variablen bestimmen
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('search-input');
    filter = input.value.toUpperCase();
    ul = document.getElementById("glossaryList");
    li = ul.getElementsByTagName('li');

    // Durchsuchen aller Listenelemente ausblenden derjenigen, die nicht mit der Suchanfrage übereinstimmen
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// Erweiterung der Such-Funktion mit Vorschlagslisten
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const suggestions = document.getElementById('suggestions');

    const terms = ['ABC-Analyse', 'ALPEN-Methode', 'SMART-Methode', 'WOOP-Methode', 'XYZ-Analyse'];

    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();
        suggestions.innerHTML = '';
        if (query.length > 0) {
            const filteredTerms = terms.filter(term => term.toLowerCase().includes(query));
            filteredTerms.forEach(term => {
                const suggestionDiv = document.createElement('div');
                suggestionDiv.textContent = term;
                suggestionDiv.addEventListener('click', function () {
                    searchInput.value = term;
                    suggestions.innerHTML = '';
                    suggestions.style.display = 'none';
                    // Hier kann optional eine Suche oder ein Redirect erfolgen
                });
                suggestions.appendChild(suggestionDiv);
            });
            suggestions.style.display = 'block';
        } else {
            suggestions.style.display = 'none';
        }
    });

    document.getElementById('search-button').addEventListener('click', function () {
        const query = searchInput.value.toLowerCase();
        if (terms.includes(query)) {
            window.location.href = query + '.html'; // Weiterleitung auf die entsprechende Seite
        } else {
            alert('Begriff nicht gefunden.');
        }
    });
});




