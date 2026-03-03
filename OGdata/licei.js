const datiScuole = {
  "Tuscany": {
    "comuni": [
      { "nome": "Firenze", "scuole": ["Liceo Classico Dante", "Liceo Classico Michelangiolo", "Liceo Classico Galileo", "Liceo Scientifico Castelnuovo", "Liceo Scientifico Leonardo da Vinci", "Liceo Linguistico Pascoli", "Liceo Artistico Porta Romana", "Liceo Musicale Dante", "Liceo Scienze Umane Machiavelli"] },
      { "nome": "Pisa", "scuole": ["Liceo Scientifico Dini", "Liceo Classico Galilei", "Liceo Scientifico Buonarroti", "Liceo Artistico Russoli", "Liceo Scienze Umane Carducci"] },
      { "nome": "Arezzo", "scuole": ["Liceo Scientifico Redi", "Liceo Classico Petrarca", "Liceo Musicale Petrarca", "Liceo Vittoria Colonna (Scienze Umane)"] },
      { "nome": "Livorno", "scuole": ["Liceo Scientifico Enriques", "Liceo Cecioni", "Liceo Classico Niccolini-Palli"] },
      { "nome": "Lucca", "scuole": ["Liceo Scientifico Vallisneri", "Liceo Classico Machiavelli", "Liceo Artistico Passaglia"] },
      { "nome": "Siena", "scuole": ["Liceo Classico Piccolomini", "Liceo Scientifico Galilei", "Liceo Artistico Duccio di Buoninsegna"] },
      { "nome": "Pistoia", "scuole": ["Liceo Classico Forteguerri", "Liceo Scientifico Savoia"] },
      { "nome": "Prato", "scuole": ["Liceo Scientifico Copernico", "Liceo Classico Cicognini", "Liceo Linguistico Livi"] }
    ]
  },
  "Lombardy": {
    "comuni": [
      { "nome": "Milano", "scuole": ["Liceo Classico Parini", "Liceo Classico Berchet", "Liceo Classico Beccaria", "Liceo Scientifico Volta", "Liceo Scientifico Leonardo da Vinci", "Liceo Artistico Brera", "Liceo Artistico Boccioni", "Liceo Coreutico Tito Livio", "Liceo Musicale Verdi"] },
      { "nome": "Bergamo", "scuole": ["Liceo Classico Sarpi", "Liceo Scientifico Lussana", "Liceo Artistico Manzù"] },
      { "nome": "Brescia", "scuole": ["Liceo Classico Arnaldo", "Liceo Scientifico Calini", "Liceo Internazionale Gambara"] },
      { "nome": "Busto Arsizio", "scuole": ["Liceo Coreutico e Musicale Candiani-Bausch"] },
      { "nome": "Monza", "scuole": ["Liceo Classico Zucchi", "Liceo Scientifico Frisi", "Liceo Artistico Modigliani"] }
    ]
  },
  "Lazio": {
    "comuni": [
      { "nome": "Roma", "scuole": ["Liceo Classico Visconti", "Liceo Classico Mamiani", "Liceo Classico Tasso", "Liceo Scientifico Righi", "Liceo Scientifico Morgagni", "Liceo Artistico Ripetta", "Liceo Coreutico Accademia Danza", "Liceo Linguistico Kant"] },
      { "nome": "Latina", "scuole": ["Liceo Scientifico Grassi", "Liceo Classico Dante Alighieri", "Liceo Artistico Buonarroti"] },
      { "nome": "Viterbo", "scuole": ["Liceo Classico Buratti", "Liceo Scientifico Ruffini"] },
      { "nome": "Amatrice", "scuole": ["Liceo Scientifico Sportivo Internazionale"] }
    ]
  },
  "Piedmont": {
    "comuni": [
      { "nome": "Torino", "scuole": ["Liceo Classico D'Azeglio", "Liceo Classico Cavour", "Liceo Scientifico Ferraris", "Liceo Scientifico Volta", "Liceo Artistico Cottini", "Liceo Coreutico Germana Erba"] },
      { "nome": "Novara", "scuole": ["Liceo Classico Carlo Alberto", "Liceo Scientifico Antonelli"] },
      { "nome": "Valenza", "scuole": ["Liceo Artistico Cellini (Design del Gioiello)"] }
    ]
  },
  "Veneto": {
    "comuni": [
      { "nome": "Venezia", "scuole": ["Liceo Classico Marco Polo", "Liceo Artistico Guggenheim (Design del Vetro)", "Liceo Foscarini"] },
      { "nome": "Verona", "scuole": ["Liceo Classico Maffei", "Liceo Scientifico Messedaglia", "Liceo Coreutico Educandato Agli Angeli"] },
      { "nome": "Padova", "scuole": ["Liceo Classico Tito Livio", "Liceo Scientifico Nievo", "Liceo Artistico Selvatico"] }
    ]
  },
  "Campania": {
    "comuni": [
      { "nome": "Napoli", "scuole": ["Liceo Classico Sannazaro", "Liceo Classico Umberto I", "Liceo Scientifico Mercalli", "Liceo Artistico Boccioni", "Liceo Musicale Margherita di Savoia"] },
      { "nome": "Salerno", "scuole": ["Liceo Classico Tasso", "Liceo Scientifico Da Procida", "Liceo Artistico Sabatini-Menna"] },
      { "nome": "Caserta", "scuole": ["Liceo Classico Giannone", "Liceo Scientifico Diaz"] }
    ]
  },
  "Sicilia": {
    "comuni": [
      { "nome": "Palermo", "scuole": ["Liceo Classico Meli", "Liceo Classico Vittorio Emanuele II", "Liceo Scientifico Cannizzaro", "Liceo Artistico Catalano", "Liceo Musicale Regina Margherita"] },
      { "nome": "Catania", "scuole": ["Liceo Classico Cutelli", "Liceo Classico Spedalieri", "Liceo Scientifico Boggio Lera", "Liceo Artistico Lazzaro"] },
      { "nome": "Modica", "scuole": ["Liceo Classico Campailla"] }
    ]
  },
  "Puglia": {
    "comuni": [
      { "nome": "Bari", "scuole": ["Liceo Classico Flacco", "Liceo Scientifico Scacchi", "Liceo Scientifico Fermi", "Liceo Artistico De Nittis-Pascali"] },
      { "nome": "Lecce", "scuole": ["Liceo Classico Palmieri", "Liceo Scientifico De Giorgi", "Liceo Artistico Ciardo-Pellegrino"] },
      { "nome": "Grottaglie", "scuole": ["Liceo Artistico Calò (Ceramica)"] }
    ]
  },
  "Emilia-Romagna": {
    "comuni": [
      { "nome": "Bologna", "scuole": ["Liceo Classico Galvani", "Liceo Classico Minghetti", "Liceo Scientifico Righi", "Liceo Artistico Arcangeli", "Liceo Musicale Lucio Dalla"] },
      { "nome": "Modena", "scuole": ["Liceo Classico Muratori-San Carlo", "Liceo Scientifico Tassoni", "Liceo Musicale Sigonio"] },
      { "nome": "Parma", "scuole": ["Liceo Classico Romagnosi", "Liceo Scientifico Ulivi", "Liceo Artistico Toschi"] }
    ]
  },
  "Liguria": {
    "comuni": [
      { "nome": "Genova", "scuole": ["Liceo Classico D'Oria", "Liceo Classico Colombo", "Liceo Scientifico Cassini", "Liceo Artistico Klee-Barabino", "Liceo Musicale Pertini"] },
      { "nome": "Imperia", "scuole": ["Liceo Classico De Amicis", "Liceo Scientifico Vieusseux"] }
    ]
  },
  "Sardegna": {
    "comuni": [
      { "nome": "Cagliari", "scuole": ["Liceo Classico Dettori", "Liceo Classico Siotto Pintor", "Liceo Scientifico Pacinotti", "Liceo Artistico Foiso Fois"] },
      { "nome": "Sassari", "scuole": ["Liceo Classico Azuni", "Liceo Scientifico Spano", "Liceo Coreutico Azuni"] }
    ]
  },
  "Calabria": {
    "comuni": [
      { "nome": "Reggio Calabria", "scuole": ["Liceo Classico Campanella", "Liceo Scientifico Volta", "Liceo Artistico Preti-Frangipane"] },
      { "nome": "Cosenza", "scuole": ["Liceo Classico Telesio", "Liceo Scientifico Scorza", "Liceo Musicale Lucrezia della Valle"] }
    ]
  },
  "Abruzzo": {
    "comuni": [
      { "nome": "Pescara", "scuole": ["Liceo Classico D'Annunzio", "Liceo Scientifico Galilei", "Liceo Artistico Misticoni-Bellisario"] },
      { "nome": "Castelli", "scuole": ["Liceo Artistico per la Ceramica F.A. Grue"] },
      { "nome": "L'Aquila", "scuole": ["Liceo Classico Cotugno", "Liceo Scientifico Bafile"] }
    ]
  },
  "Friuli Venezia Giulia": {
    "comuni": [
      { "nome": "Trieste", "scuole": ["Liceo Classico Petrarca", "Liceo Classico Dante Alighieri", "Liceo Scientifico Oberdan", "Liceo Artistico Nordio"] },
      { "nome": "Udine", "scuole": ["Liceo Classico Stellini", "Liceo Scientifico Marinelli", "Liceo Artistico Sello"] }
    ]
  },
  "Marche": {
    "comuni": [
      { "nome": "Ancona", "scuole": ["Liceo Classico Rinaldini", "Liceo Scientifico Savoia-Benincasa", "Liceo Artistico Mannucci"] },
      { "nome": "Pesaro", "scuole": ["Liceo Classico Mamiani", "Liceo Scientifico Marconi", "Liceo Artistico Mengaroni"] }
    ]
  },
  "Umbria": {
    "comuni": [
      { "nome": "Perugia", "scuole": ["Liceo Classico Mariotti", "Liceo Scientifico Alessi", "Liceo Artistico Bernardino di Betto", "Liceo Musicale Mariotti"] },
      { "nome": "Terni", "scuole": ["Liceo Classico Tacito", "Liceo Scientifico Galilei"] }
    ]
  },
  "Trentino-Alto Adige": {
    "comuni": [
      { "nome": "Trento", "scuole": ["Liceo Classico Prati", "Liceo Scientifico Da Vinci", "Liceo delle Arti Vittoria"] },
      { "nome": "Bolzano", "scuole": ["Liceo Classico Carducci", "Liceo Scientifico Torricelli", "Liceo Walther von der Vogelweide"] }
    ]
  },
  "Basilicata": {
    "comuni": [
      { "nome": "Potenza", "scuole": ["Liceo Classico Flacco", "Liceo Scientifico Galilei", "Liceo Artistico Gropius"] },
      { "nome": "Matera", "scuole": ["Liceo Classico Duni", "Liceo Scientifico Alighieri"] }
    ]
  },
  "Molise": {
    "comuni": [
      { "nome": "Campobasso", "scuole": ["Liceo Classico Pagano", "Liceo Scientifico Romita", "Liceo Artistico Manzù"] },
      { "nome": "Isernia", "scuole": ["Liceo Classico Fascitelli", "Liceo Scientifico Majorana"] }
    ]
  },
  "Valle d'Aosta": {
    "comuni": [
      { "nome": "Aosta", "scuole": ["Liceo Classico XXVI Febbraio", "Liceo Scientifico Bérard"] },
      { "nome": "Courmayeur", "scuole": ["Liceo Linguistico e Scientifico Sportivo Courmayeur"] }
    ]
  }
};