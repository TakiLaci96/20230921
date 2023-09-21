const lista = [];

document.addEventListener("DOMContentLoaded", () => {
    const urlap = document.forms["regisztracios_urlap"];
    urlap.addEventListener("submit", (event) => {
        event.preventDefault();
        //Adatok ellenőrzése
        const nev = urlap["nev"].value;
        const email = urlap["email"].value;
        const nem = urlap["nem"].value;
        const vegzettseg = urlap["vegzettseg"].value;
        const honnan = [];
        const honnan_checkboxok = urlap["honnan"];

        honnan_checkboxok.forEach(checkbox  => {
           if (checkbox.checked) {
                honnan.push(checkbox.value);
           }
        });
    
        //Adatok felvétele
        let mindent_kitoltott = true;
        if (nev.lenght == 0) {
            window.alert("A név megadása kötelező");
            mindent_kitoltott = false;
        }

        if (email.lenght == 0) {
            window.alert("A email megadása kötelező");
            mindent_kitoltott = false;
        }

        if (nem.lenght == 0) {
            window.alert("A nem kiválasztása kötelező");
            mindent_kitoltott = false;
        }

        if (vegzettseg.lenght == 0) {
            window.alert("A iskolai végzettség kiválasztása kötelező");
            mindent_kitoltott = false;
        }

        if (mindent_kitoltott) {
            const adatok = {
                nev: nev,
                email: email,
                nem: nem,
                vegzettseg: vegzettseg,
                honnan: honnan
            };
            lista.push(adatok);
            console.log(adatok);
        }
    });

});



//Arrow function / lambda
//lista.forEach(elem => console.log(elem));