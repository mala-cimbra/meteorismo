// funzione per lo stampaggio della data

function data_di_oggi()
{
    var data = new Date(); // data odierna
    var anno = data.getFullYear(); // anno in 4 cifre
    var giorno = data.getDate(); // numero del giorno 1-31

    // ------
    var raw_mese = new Array(); 
    raw_mese[0] = "Gennaio";
    raw_mese[1] = "Febbraio";
    raw_mese[2] = "Marzo";
    raw_mese[3] = "Aprile";
    raw_mese[4] = "Maggio";
    raw_mese[5] = "Giugno";
    raw_mese[6] = "Luglio";
    raw_mese[7] = "Agosto";
    raw_mese[8] = "Settembre";
    raw_mese[9] = "Ottobre";
    raw_mese[10] = "Novembre";
    raw_mese[11] = "Dicembre";
    
    var nome_mese = raw_mese[data.getMonth()]; // numero del mese 0-11
    
    // ------
    var raw_giorno = new Array(7);
    raw_giorno[0]=  "Domenica";
    raw_giorno[1] = "Lunedì";
    raw_giorno[2] = "Martedì";
    raw_giorno[3] = "Mercoledì";
    raw_giorno[4] = "Giovedì";
    raw_giorno[5] = "Venerdì";
    raw_giorno[6] = "Sabato";
    
    var nome_giorno = raw_giorno[data.getDay()]; // nome del giorno 0-6
    
    //var il_ritorno = [anno, nome_mese, giorno, nome_giorno];
    
    var il_ritorno = nome_giorno + " " + giorno + " " + nome_mese + " " + anno;
    
    document.getElementById("data").innerHTML = il_ritorno;
    
}