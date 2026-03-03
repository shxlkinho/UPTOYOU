const datiScuole = {
  "Tuscany": {
    "comuni": [
      { "nome": "Firenze", "scuole": ["ITIS Leonardo da Vinci (Meccanica/Informatica)", "ITT Marco Polo (Turismo)", "ITG Salvemini (Costruzioni)", "ITET Capitini (Economico)", "IIS Cellini-Chini (Grafica/Moda)", "ITI Meucci"] },
      { "nome": "Prato", "scuole": ["Istituto Tecnico Buzzi (Tessile/Chimica/Meccanica)", "IIS Dagomari (Economico/Sistemi Informativi)"] },
      { "nome": "Pisa", "scuole": ["ITI Leonardo da Vinci", "ITCG Niccolini", "IIS Santoni (Agrario)"] },
      { "nome": "Arezzo", "scuole": ["ITIS Galileo Galilei", "ITE Buonarroti-Fossombroni", "ITT Fossombroni"] },
      { "nome": "Livorno", "scuole": ["ITI G. Galilei", "ITTL Cappellini (Nautico)", "ITCG Vespucci"] },
      { "nome": "Lucca", "scuole": ["ITI Fermi", "ITET Carrara", "ITG Nottolini"] },
      { "nome": "Siena", "scuole": ["ITAS Ricasoli (Agrario)", "ITIS Sarrocchi"] }
    ]
  },
  "Lombardy": {
    "comuni": [
      { "nome": "Milano", "scuole": ["ITI Feltrinelli (Meccanica/Energia)", "ITI Molinari (Chimica/Grafica)", "ITS Gentileschi (Turismo)", "ITE Schiaparelli-Gramsci", "IIS Maxwell (Aeronautico)", "ITI Hensemberger", "ITE Pasolini"] },
      { "nome": "Bergamo", "scuole": ["ITI Paleocapa", "IIS Natta (Chimica)", "ITE Belotti", "Istituto Agrario Cantoni"] },
      { "nome": "Brescia", "scuole": ["ITI Castelli", "IIS Tartaglia-Olivieri", "ITE Abba-Ballini"] },
      { "nome": "Varese", "scuole": ["ITE Tosi (Busto Arsizio)", "ISIS Ponti (Aeronautico)", "ITIS Riva"] },
      { "nome": "Mantova", "scuole": ["Istituto Fermi", "ITET Mantegna"] }
    ]
  },
  "Lazio": {
    "comuni": [
      { "nome": "Roma", "scuole": ["ITI Galileo Galilei", "ITI Armellini (Informatica)", "ITTL Marcantonio Colonna (Nautico)", "ITA Giuseppe Garibaldi (Agrario)", "ITT Cristoforo Colombo (Turismo)", "ITE Bottardi", "IIS Pacinotti-Archimede"] },
      { "nome": "Latina", "scuole": ["ITI Majorana", "ITET Vittorio Veneto", "Istituto Nautico Caboto (Gaeta)"] },
      { "nome": "Viterbo", "scuole": ["ITT Leonardo da Vinci", "ITE Paolo Savi"] }
    ]
  },
  "Veneto": {
    "comuni": [
      { "nome": "Venezia", "scuole": ["ITTL Venier (Nautico)", "ITI Zuccante (Informatica)", "ITE Algarotti (Turismo)", "IIS Levi-Ponti (Mirano)"] },
      { "nome": "Verona", "scuole": ["ITI Ferraris", "ITE Lorgna-Pindemonte", "Istituto Cangrande (Costruzioni)"] },
      { "nome": "Vicenza", "scuole": ["ITIS Rossi", "ITE Fusinieri", "Istituto Trentin (Agrario)"] },
      { "nome": "Treviso", "scuole": ["ITIS Planck", "ITE Riccati-Luzzatti"] }
    ]
  },
  "Campania": {
    "comuni": [
      { "nome": "Napoli", "scuole": ["ITI Alessandro Volta", "ITI Augusto Righi", "ITTL Duca degli Abruzzi (Nautico)", "ITE Enrico Tosi", "IIS Giordani-Striano"] },
      { "nome": "Salerno", "scuole": ["ITI Focaccia", "ITE Santa Caterina-Amendola", "Nautico Giovanni XXIII"] },
      { "nome": "Benevento", "scuole": ["ITI Bosco Lucarelli", "ITE Rampone"] }
    ]
  },
  "Emilia-Romagna": {
    "comuni": [
      { "nome": "Bologna", "scuole": ["ITIS Aldini Valeriani", "ITIS Belluzzi-Fioravanti", "ITE Crescenzi-Pacinotti", "Istituto Serpieri (Agrario)"] },
      { "nome": "Modena", "scuole": ["ITIS Fermi", "ITE Barozzi", "Istituto Corni"] },
      { "nome": "Forlì-Cesena", "scuole": ["ITA Garibaldi (Cesena)", "ITT Pascal"] }
    ]
  },
  "Piedmont": {
    "comuni": [
      { "nome": "Torino", "scuole": ["ITI Avogadro", "ITI Pininfarina", "IIS Grassi (Aeronautico)", "ITE Sommeiller", "Sella-Aalto (Geometri)"] },
      { "nome": "Novara", "scuole": ["ITI Omar", "ITE Mossotti"] }
    ]
  },
  "Sicilia": {
    "comuni": [
      { "nome": "Palermo", "scuole": ["ITI Vittorio Emanuele III", "ITTL Gioeni-Trabia (Nautico)", "ITE Pio La Torre", "ITA Majorana (Agrario)"] },
      { "nome": "Catania", "scuole": ["ITI Archimede", "ITTL Duca degli Abruzzi (Nautico)", "ITE De Felice Giuffrida"] }
    ]
  },
  "Puglia": {
    "comuni": [
      { "nome": "Bari", "scuole": ["ITI Panetti-Pitagora", "ITT Euclide (Nautico/Aeronautico)", "ITE Romanazzi"] },
      { "nome": "Taranto", "scuole": ["ITI Pacinotti", "Nautico Archimede"] },
      { "nome": "Lecce", "scuole": ["ITI Deledda", "ITE Olivetti"] }
    ]
  },
  "Liguria": {
    "comuni": [
      { "nome": "Genova", "scuole": ["ITTL San Giorgio (Nautico)", "ITI Italo Calvino", "ITE Gastaldi-Abba"] },
      { "nome": "La Spezia", "scuole": ["ITI Capellini-Sauro", "ITE Fossati-Da Passano"] }
    ]
  },
  "Sardegna": {
    "comuni": [
      { "nome": "Cagliari", "scuole": ["ITI Scano", "ITTL Buccari (Nautico)", "ITE Martini"] },
      { "nome": "Sassari", "scuole": ["ITI Angioy", "ITE Dessì"] }
    ]
  },
  "Calabria": {
    "comuni": [
      { "nome": "Reggio Calabria", "scuole": ["ITI Vallauri", "ITTL Panzera (Nautico)", "ITE Piria"] },
      { "nome": "Catanzaro", "scuole": ["ITI Scalfaro", "ITE Grimaldi-Pacioli"] }
    ]
  },
  "Abruzzo": {
    "comuni": [
      { "nome": "Pescara", "scuole": ["ITI Volta", "ITCG Acerbo"] },
      { "nome": "L'Aquila", "scuole": ["ITI Colecchi", "ITE Rendina"] }
    ]
  },
  "Friuli Venezia Giulia": {
    "comuni": [
      { "nome": "Trieste", "scuole": ["ITI Alessandro Volta", "ITTL Galvani (Nautico)", "ITE Da Vinci-Carli"] },
      { "nome": "Udine", "scuole": ["ITI Malignani", "ITE Zanon"] }
    ]
  },
  "Marche": {
    "comuni": [
      { "nome": "Ancona", "scuole": ["ITI Volterra", "ITTL Elia (Nautico)", "ISTVAS (Geometri)"] },
      { "nome": "Pesaro", "scuole": ["ITI Morselli", "ITE Bramante"] }
    ]
  },
  "Umbria": {
    "comuni": [
      { "nome": "Perugia", "scuole": ["ITI Volta", "ITET Capitini", "IIS Cavour-Marconi"] },
      { "nome": "Terni", "scuole": ["ITI Tacito", "ITE Casagrande"] }
    ]
  },
  "Trentino-Alto Adige": {
    "comuni": [
      { "nome": "Trento", "scuole": ["ITT Buonarroti", "ITE Tambosi"] },
      { "nome": "Bolzano", "scuole": ["ITI Galilei", "ITE Battisti"] }
    ]
  },
  "Basilicata": {
    "comuni": [
      { "nome": "Potenza", "scuole": ["ITI Da Vinci", "ITET Capitini"] },
      { "nome": "Matera", "scuole": ["ITI Pentasuglia", "ITE Loperfido-Olivetti"] }
    ]
  },
  "Molise": {
    "comuni": [
      { "nome": "Campobasso", "scuole": ["ITI Marconi", "ITE Pilla"] },
      { "nome": "Isernia", "scuole": ["ITI Mattei"] }
    ]
  },
  "Valle d'Aosta": {
    "comuni": [
      { "nome": "Aosta", "scuole": ["ISIT Manzetti (Tecnico Commerciale)", "Institut Agricole Régional (Agrario)"] }
    ]
  }
};