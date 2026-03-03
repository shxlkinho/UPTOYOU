const datiScuole = {
  "Tuscany": {
    "comuni": [
      { "nome": "Firenze", "scuole": ["IPSEOA Bernardo Buontalenti (Alberghiero)", "IPSEOA Aurelio Saffi (Alberghiero)", "IPSIA Leonardo da Vinci (Meccanica/Ottica)", "IIS Elsa Morante (Servizi Sociali)", "Istituto de' Medici (Agrario Professionale)"] },
      { "nome": "Montecatini Terme", "scuole": ["IPSSAR F. Martini (Storico Alberghiero)"] },
      { "nome": "Pisa", "scuole": ["IPSAR Matteotti (Alberghiero)", "IPSIA Fascetti (Elettronica/Meccanica)"] },
      { "nome": "Arezzo", "scuole": ["IP Margaritone (Orafo/Moda)", "IP Francesco Severi"] },
      { "nome": "Grosseto", "scuole": ["IPAS Leopoldo II di Lorena (Agrario/Enogastronomia)"] },
      { "nome": "Castelfiorentino", "scuole": ["IPSSAR F. Enriques"] }
    ]
  },
  "Lombardy": {
    "comuni": [
      { "nome": "Milano", "scuole": ["IPSEOA Carlo Porta (Alberghiero d'Elite)", "IPSEOA Amerigo Vespucci", "IPSIA Lagrange", "IPSIA Kandinsky (Grafica/Moda)", "IIS Cavalieri (Servizi Commerciali)", "IIS Galdus (Ristorazione/Oreficeria)"] },
      { "nome": "Cremona", "scuole": ["IPIALL Antonio Stradivari (Scuola Internazionale di Liuteria)"] },
      { "nome": "Bergamo", "scuole": ["IPSSAR San Pellegrino Terme", "IPSIA Pesenti"] },
      { "nome": "Brescia", "scuole": ["IPSEOA Andrea Mantegna", "IPSIA Fortuny (Moda)"] }
    ]
  },
  "Lazio": {
    "comuni": [
      { "nome": "Roma", "scuole": ["IPSEOA Tor Carbone", "IPSEOA Vincenzo Gioberti", "IPSEOA Pellegrino Artusi", "IPSIA Cattaneo", "IPSIA De Amicis (Odontotecnico)", "IIS Piaget-Diaz"] },
      { "nome": "Anzio", "scuole": ["IPSEOA Marco Gavio Apicio"] },
      { "nome": "Viterbo", "scuole": ["IPSEOA Farnese (Caprarola)"] }
    ]
  },
  "Campania": {
    "comuni": [
      { "nome": "Napoli", "scuole": ["IPSEOA Duca di Buonvicino", "IPSEOA Gioacchino Rossini", "IPSIA Casanova (Restauro/Oreficeria)", "IPSAR Cavalcanti", "IIS Sannino-De Cillis"] },
      { "nome": "Vico Equense", "scuole": ["IPSSAR Francesco De Gennaro"] },
      { "nome": "Salerno", "scuole": ["IPSEOA Roberto Virtuoso", "IPSIA Trani (Moda)"] }
    ]
  },
  "Veneto": {
    "comuni": [
      { "nome": "Venezia", "scuole": ["IPSEOA Barbarigo", "IPSIA Cini-Venier (Meccanica Navale)"] },
      { "nome": "Abano Terme", "scuole": ["IPSEOA Pietro d'Abano"] },
      { "nome": "Verona", "scuole": ["IPSEOA Angelo Berti", "IPSIA Giorgi"] },
      { "nome": "Castelfranco Veneto", "scuole": ["IPSSAR Giuseppe Maffioli"] }
    ]
  },
  "Piedmont": {
    "comuni": [
      { "nome": "Torino", "scuole": ["IPSEOA Colombatto", "IPSEOA Giolitti", "IPSIA Birago (Automobilistico)", "IPSIA Zerboni", "IIS Bodoni-Paravia (Grafica/Fotografia)"] },
      { "nome": "Stresa", "scuole": ["IPSSAR Maggia (Primo alberghiero d'Italia)"] }
    ]
  },
  "Emilia-Romagna": {
    "comuni": [
      { "nome": "Bologna", "scuole": ["IPSEOA Marcantonio Scappi", "IPSAS Aldrovandi-Rubbiani (Grafica/Moda)", "IPSIA Fioravanti"] },
      { "nome": "Parma", "scuole": ["IPSEOA Magnaghi (Salsomaggiore Terme)", "IPSIA Primo Levi"] },
      { "nome": "Ferrara", "scuole": ["IPSSAR Orio Vergani"] }
    ]
  },
  "Sicilia": {
    "comuni": [
      { "nome": "Palermo", "scuole": ["IPSSAR Paolo Borsellino", "IPSSAR Pietro Piazza (Il più grande d'Europa)", "IPSIA Ascione"] },
      { "nome": "Catania", "scuole": ["IPSSAR Karol Wojtyla", "IPSIA Efesto"] },
      { "nome": "Erice", "scuole": ["IPSSAR Ignazio e Vincenzo Florio"] }
    ]
  },
  "Puglia": {
    "comuni": [
      { "nome": "Bari", "scuole": ["IPSSAR Perotti", "IPSSAR Majorana (Molfetta)", "IPSIA Santarella"] },
      { "nome": "Lecce", "scuole": ["IPSEOA Presta-Columella"] },
      { "nome": "Margherita di Savoia", "scuole": ["IPSEOA Aldo Moro"] }
    ]
  },
  "Liguria": {
    "comuni": [
      { "nome": "Genova", "scuole": ["IPSEOA Marco Polo", "IPSEOA Nino Bergese", "IPSIA Attilio Odero"] },
      { "nome": "Alassio", "scuole": ["IPSSAR Giancardi-Galilei"] }
    ]
  },
  "Sardegna": {
    "comuni": [
      { "nome": "Cagliari", "scuole": ["IPSEOA Antonio Gramsci", "IPSIA Meucci"] },
      { "nome": "Arzachena", "scuole": ["IPSSAR Costa Smeralda"] }
    ]
  },
  "Calabria": {
    "comuni": [
      { "nome": "Reggio Calabria", "scuole": ["IPSSAR Giovanni Trecroci", "IPSIA Fermi"] },
      { "nome": "Tropea", "scuole": ["IPSEOA Tropea"] }
    ]
  },
  "Abruzzo": {
    "comuni": [
      { "nome": "Pescara", "scuole": ["IPSEOA Filippo De Cecco"] },
      { "nome": "Villa Santa Maria", "scuole": ["IPSSAR Marchitelli (La patria dei cuochi)"] }
    ]
  },
  "Friuli Venezia Giulia": {
    "comuni": [
      { "nome": "Trieste", "scuole": ["IPSEOA B. Stringher (Udine)", "IPSIA Galvani"] }
    ]
  },
  "Marche": {
    "comuni": [
      { "nome": "Loreto", "scuole": ["IPSEOA Einstein-Nebbia"] },
      { "nome": "Senigallia", "scuole": ["IP Panzini"] }
    ]
  },
  "Umbria": {
    "comuni": [
      { "nome": "Assisi", "scuole": ["IPSEOA de Witt"] },
      { "nome": "Spoleto", "scuole": ["IPSSART Spoleto"] }
    ]
  },
  "Trentino-Alto Adige": {
    "comuni": [
      { "nome": "Rovereto", "scuole": ["Scuola Alberghiera Trentino"] },
      { "nome": "Merano", "scuole": ["Scuola Alberghiera Cesare Ritz"] }
    ]
  },
  "Basilicata": {
    "comuni": [
      { "nome": "Potenza", "scuole": ["IPSEOA Di Pasca"] },
      { "nome": "Melfi", "scuole": ["IPSSAR Gasparrini"] }
    ]
  },
  "Molise": {
    "comuni": [
      { "nome": "Termoli", "scuole": ["IPSEOA Federico di Svevia"] }
    ]
  },
  "Valle d'Aosta": {
    "comuni": [
      { "nome": "Chatillon", "scuole": ["Ecole Hôtelière de la Vallée d'Aoste"] }
    ]
  }
};