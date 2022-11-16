const authors = [
    'Agostino Carracci',
    'Alessandro Varotari',
    'Alexis Grimou',
    'Alfred Stevens',
    'Alonso Berruguete',
    'Andrea Mantegna',
    'Andrea Solari',
    'Andrea Vicentino',
    'Antonio Gionima',
    'Antonio da Correggio',
    'Armand Point',
    'Artemisia Gentileschi',
    'August Riedel',
    'Bartolomeo Manfredi',
    'Bartolomeo Veneto',
    'Bela Čikoš Sesija',
    'Benedito Calixto',
    'Bernardino Luini',
    'Bernardo Cavallino',
    'Bernardo Strozzi',
    'Bonifazio Veronese',
    'Caravaggio',
    'Carlo Francesco Nuvolone',
    'Carlo Maratta',
    'Carlo Saraceni',
    'Cesare da Sesto',
    'Charles-Edmond Daux',
    'Cristofano Allori',
    'David Teniers the Younger',
    'Denys Calvaert',
    'Domenico di Pace Beccafumi',
    'Edouard Frederic Wilhelm Richter',
    'Eglon van der Neer',
    'Elisabetta Sirani',
    'Émile Bernard',
    'Ercole Graziani the Younger',
    'Eugène Romain Thirion',
    'Felice Ficherelli',
    'Fra Angelico',
    'Francesc Masriera Manovens',
    'Francesco Curradi',
    'Francesco Solimena',
    'Francisco Nery',
    'Francisco de Goya',
    'Franciszek Smuglewicz',
    'François de Nomé',
    'Franz Anton Maulbertsch',
    'Franz Stuck',
    'Franz Xaver Wagenschön',
    'Frederik Storch',
    'Gaspare Traversi',
    'Gaston Bussière',
    'Georges Rochegrosse',
    'Georgiana Chatterton',
    'Gerard Hoet',
    'Gerard Seghers',
    'Gerrit Pietersz Sweelink',
    'Giorgio Vasari',
    'Giorgione',
    'Giovanni Gioseffo dal Sole',
    'Giuseppe Caletti',
    'Godfried Schalcken',
    'Guercino',
    'Guido Reni',
    'Gustav Klimt',
    'Gustave Moreau',
    'Gyula Éder',
    'Hans Horions',
    'Hans Leonhard Schäufelein',
    'Henri Leopold Levy',
    'Henri Regnault',
    'Henry Ossawa Tanner',
    'Horace Vernet',
    'Jacek Malczewski',
    'Jacob Cornelisz van Oostsanen',
    'Jacob Duck',
    'James Tissot',
    'Jan Adam Kruseman',
    'Jan Matsys',
    'Jan Sanders van Hemessen',
    'Jan de Bray',
    'Jean Benner',
    'Jean-Daniel Heimlich',
    'Jean-Joseph Benjamin-Constant',
    'Joakim Skovgaard',
    'Johann Liss',
    'Joseph Hasslwander',
    'Juan Carreño de Miranda',
    'Juan de Sevilla',
    'Juana Romani',
    'Jules-Claude Ziegler',
    'Julio Romero de Torres',
    'Lambert Sustris',
    'Leopold Pollak',
    'Lorenzo Lippi',
    'Louis Finson',
    'Luca Giordano',
    'Lucas Cranach the Elder',
    'Lucas van Leyden',
    'Ludovico Stern',
    'Manuel Orazi',
    'Massimo Stanzione',
    'Master IW',
    'Master of the Mansi Magdalen',
    'Matthias Stom',
    'Mattia Preti',
    'Maurycy Gottlieb',
    'Michael Damaskinos',
    'Michaelina Wautier',
    'Michelangelo',
    'Mohammad Zaman',
    'Moretto da Brescia',
    'Onorio Marinari',
    'Orazio Gentileschi',
    'Palma Vecchio',
    'Paolo Veronese',
    'Pedro Américo',
    'Peter Paul Rubens',
    'Philip van Dijk',
    'Pierre Puvis de Chavannes',
    'Pietro della Vecchia',
    'Rembrandt',
    'Robert Campin',
    'Robert Fowler',
    'Robert Henri',
    'Salomon de Bray',
    'Sandro Botticelli',
    'Sebastiano del Piombo',
    'Simon Vouet',
    'Tintoretto',
    'Titian',
    'Trophime Bigot',
    'Valentin de Boulogne',
    'Vardges Sureniants',
    'Victor Müller',
    'Vincenzo Catena',
    'Wilhelm Trübner',
]

const markers = [
{ name: "Statens Museum for Kunst", lat: 55.68889, long: 12.57861, artworks: ["Judith with the Head of Holofernes - Denys Calvaert","Judith with the Head of Holophernes - Luca Giordano","Judith med Holofernes' hoved - Frederik Storch","The Feast of Herod. Salome Bringing the Head of St John the Baptist on a Charger - Peter Paul Rubens","Salome - Joakim Skovgaard"] },
{ name: "Museum of Fine Arts", lat: 42.339166666667, long: -71.094166666667, artworks: ["Judith with the Head of Holofernes - Massimo Stanzione","Study of Olympe Pelissier as Judith - Horace Vernet","Judith with the Head of Holofernes - Jan Matsys"] },
{ name: "Belvedere", lat: 48.19139, long: 16.38049, artworks: ["Judith - Leopold Pollak","Judith mit dem Haupt des Holofernes - Joseph Hasslwander","Judith and the Head of Holofernes - Gustav Klimt"] },
{ name: "Collection Goudstikker heirs", lat: 52.15517, long: 5.38721, artworks: ["Judith with the Head of Holofernes"] },
{ name: "Bavarian State Painting Collections", lat: 48.149722, long: 11.571111, artworks: ["Geschichte der Judith (Kopie nach) - Hans Leonhard Schäufelein","Judith und Holofernes - Franz Xaver Wagenschön","Judith mit dem Haupt des Holofernes (Nachfolger)","Judith mit dem Haupt des Holofernes (zugeschrieben) - Andrea Vicentino","Judith enthauptet Holofernes - Guido Reni","Judith with the Head of Holofernes - Bartolomeo Manfredi","Judith with the Head of Holofernes - Lambert Sustris","Judith mit dem Haupt des Holofernes - Ludovico Stern","Judith with the Head of Holophernes - Simon Vouet","Judith - August Riedel"] },
{ name: "Wittelsbacher Ausgleichsfonds", lat: 48.148333, long: 11.57, artworks: ["Judith with the head of Holopherne - Lucas Cranach the Elder"] },
{ name: "National Museum in Warsaw", lat: 52.21512, long: 21.03582, artworks: ["Judith beheading Holofernes","Judith with the Head of Holophernes - Ercole Graziani the Younger","Judith with the Head of Holophernes - Carlo Francesco Nuvolone","Judith with the head of Holofernes - Franciszek Smuglewicz","Salome with the head of St. John - Maurycy Gottlieb"] },
{ name: "Capitoline Museums", lat: 41.893055555556, long: 12.482777777778, artworks: ["Judith - Carlo Maratta"] },
{ name: "National Trust", lat: 51.2573, long: -0.472, artworks: ["Judith with the Head of Holofernes - Lambert Sustris","Salome with the Head of John the Baptist (after Reni) - Georgiana Chatterton"] },
{ name: "Musée d'art et d'histoire de Narbonne", lat: 43.1837, long: 3.00382, artworks: ["Judith with the head of Holofernes - Lorenzo Lippi"] },
{ name: "Sint-Waldetrudiskerk", lat: 51.174517, long: 4.835675, artworks: ["Judith with the Head of Holofernes and her Maid - Michaelina Wautier"] },
{ name: "Gemäldegalerie Alte Meister", lat: 51.315, long: 9.41611, artworks: ["Judith with the Head of Holofernes"] },
{ name: "Herzog Anton Ulrich Museum", lat: 52.2635, long: 10.533, artworks: ["Judith with the Head of Holofernes - Peter Paul Rubens"] },
{ name: "Musée des Beaux-Arts de Tours", lat: 47.3952, long: 0.6949, artworks: ["Judith Victorious - Eugène Romain Thirion"] },
{ name: "Brest’s Museum of Fine Arts", lat: 48.3852, long: -4.49002, artworks: ["Judith et Holopherne - Émile Bernard"] },
{ name: "Uffizi", lat: 43.768438888889, long: 11.2559, artworks: ["Portrait of Judith with the Head of Holofernes - Peter Paul Rubens","Judith - Palma Vecchio","The Return of Judith to Bethulia - Sandro Botticelli","Judith Beheading Holofernes - Artemisia Gentileschi","Salome with the head of John the Baptist - Alonso Berruguete","Salome with the head of John the Baptist - Bernardino Luini"] },
{ name: "National Gallery of Ireland", lat: 53.34091, long: -6.25255, artworks: ["Judith with the Head of Holofernes - Lucas Cranach the Elder","Judith with the Head of Holofernes - Andrea Mantegna"] },
{ name: "Pitti Palace", lat: 43.765, long: 11.25, artworks: ["Judith with the Head of Holofernes - Cristofano Allori"] },
{ name: "Nasser D. Khalili Collection of Islamic Art", lat: 51.507322, long: 0.127647, artworks: ["Judith with the Severed Head of Holofernes - Mohammad Zaman"] },
{ name: "The Wallace Collection", lat: 51.5175, long: -0.15305555555556, artworks: ["Judith with the Head of Holofernes - Domenico di Pace Beccafumi"] },
{ name: "National Museum of Art, Architecture and Design", lat: 59.916136111111, long: 10.737541666667, artworks: ["Judith and her maidservant with the head of Holofernes - Orazio Gentileschi"] },
{ name: "Strahov Monastery", lat: 50.085962903, long: 14.389281672, artworks: ["Judith with the head of Holofernes - Master IW"] },
{ name: "Museu Nacional de Belas Artes", lat: -22.9087283, long: -43.175950974638, artworks: ["Judith and Holofernes - Pedro Américo"] },
{ name: "Staatliche Kunstsammlungen Dresden", lat: 51.05338, long: 13.73466, artworks: ["Judith - Alessandro Varotari","Salome with the head of John the Baptist - Bartolomeo Veneto"] },
{ name: "Slovak National Gallery", lat: 48.14, long: 17.108611111111, artworks: ["Judith and Holofernes - Franz Anton Maulbertsch"] },
{ name: "Museum of Fine Arts, Budapest", lat: 47.51611, long: 19.07639, artworks: ["Judith in the Tent of Holofernes - Johann Liss","Salome with the Head of Saint John the Baptist - Artemisia Gentileschi","Salome with the Head of St John the Baptist - Lucas Cranach the Elder","Salome with the head of Saint John the Baptist - Lucas Cranach the Elder"] },
{ name: "Musei di Strada Nuova", lat: 44.40726, long: 8.933862, artworks: ["Judith and Holofernes - Paolo Veronese","Salome with the Head of John the Baptist - Matthias Stom"] },
{ name: "Minneapolis Institute of Art", lat: 44.95818, long: -93.27411, artworks: ["Judith with the Head of Holofernes - Pietro della Vecchia","Judith Presenting Herself to Holofernes - Antonio Gionima","Judith with the Head of Holofernes - Giovanni Gioseffo dal Sole","Salome with the Head of Saint John the Baptist - Onorio Marinari"] },
{ name: "Kunsthistorisches Museum", lat: 48.203611111111, long: 16.361666666667, artworks: ["Judith with the head of Holofernes and a servant - Lucas Cranach the Elder","Judith shows the people the head of Holofernes - Francesco Solimena","Judith and Holophernes","Judith with the head of Holofernes - Carlo Saraceni","Judith with the Head of Holofernes - Paolo Veronese","Judith with the head of Holofernes - Alessandro Varotari","Salome with the head of John the Baptist - Cesare da Sesto","Salome with the Head of John the Baptist - Bernardino Luini","Salome with the head of John the Baptist - Bonifazio Veronese","Salome with the Head of John the Baptist - David Teniers the Younger"] },
{ name: "Museo del Prado", lat: 40.413888888889, long: -3.6922222222222, artworks: ["Judith and Holofernes - Francisco de Goya","Judith and Holofernes - Tintoretto","Judith at the Banquet of Holofernes - Rembrandt","Judith and Holofernes - Tintoretto","Judith offering the Head of Holofernes - Salomon de Bray","Herod’s Feast (sketch) - Juan Carreño de Miranda","Saint John the Baptist and Saint Catherine Altar Piece - Juan de Sevilla","Salome - Titian"] },
{ name: "Rijksmuseum", lat: 52.36, long: 4.885278, artworks: ["Judith with the Head of Holofernes","Judith with the Head of Holofernes - Sandro Botticelli","Judith en Holofernes - Jan de Bray","Salome dancing for Herod - Hans Horions","Salome with the head of St John the Baptist - Lucas van Leyden","Salome with the Head of John the Baptist - Jan Adam Kruseman"] },
{ name: "Walters Art Museum", lat: 39.296666666667, long: -76.616111111111, artworks: ["Judith with the Head of Holofernes - Elisabetta Sirani","Judith Cutting Off the Head of Holofernes - Trophime Bigot","The Women of Bethulia Celebrating the Triumph of Judith over Holophernes","Head of Saint John the Baptist Presented to Salome - François de Nomé"] },
{ name: "Metropolitan Museum of Art", lat: 40.7794, long: -73.9631, artworks: ["Judith with the Head of Holofernes","Judith with the Head of Holofernes - Massimo Stanzione","Judith with the Head of Holofernes - Lucas Cranach the Elder","Judith - Jean-Joseph Benjamin-Constant","Judith with the Head of Holofernes - David Teniers the Younger","Salome with the Head of John the Baptist - Gustave Moreau","Salomé Dancing Before the Head of St. John the Baptist","Salome with the Head of Saint John the Baptist - Andrea Solari","Salome with the Head of Saint John the Baptist"] },
{ name: "Museum of Fine Arts, Houston", lat: 29.72556, long: -95.39056, artworks: ["Judith and Holofernes - Horace Vernet"] },
{ name: "Vlaamse Kunstcollectie (VKC)", lat: 51.20833, long: 4.39472, artworks: ["Judith - Jan Matsys"] },
{ name: "Groeningemuseum", lat: 51.2052, long: 3.2266, artworks: ["Judith with the head of Holofernes - Carlo Saraceni"] },
{ name: "Collection Rau for UNICEF", lat: 50.6314, long: 7.20694, artworks: ["Judith with two two female companions - Lucas Cranach the Elder"] },
{ name: "Galleria Internazionale d'Arte Moderna", lat: 45.441111111111, long: 12.331666666667, artworks: ["Judith II - Gustav Klimt"] },
{ name: "National Museum of Capodimonte", lat: 40.86699, long: 14.250346, artworks: ["Judith Slaying Holofernes - Artemisia Gentileschi"] },
{ name: "Galleria Nazionale d'Arte Antica", lat: 41.903611111111, long: 12.490277777778, artworks: ["Judith Beheading Holofernes - Caravaggio"] },
{ name: "Collection Crozat", lat: 59.940556, long: 30.313611, artworks: ["Judith - Giorgione"] },
{ name: "Montreal Museum of Fine Arts", lat: 45.4987, long: -73.5801, artworks: ["Judith - Andrea Mantegna","Salome with the Head of John the Baptist - Godfried Schalcken"] },
{ name: "Banco di Napoli", lat: 40.83973, long: 14.24861, artworks: ["Judith beheading Holofernes - Louis Finson"] },
{ name: "Detroit Institute of Arts", lat: 42.35942, long: -83.064576, artworks: ["Judith and Maidservant with Head of Holofernes - Artemisia Gentileschi"] },
{ name: "Vatican Museums", lat: 41.903055555556, long: 12.454444444444, artworks: ["Judith and Holofernes - Michelangelo"] },
{ name: "National Gallery of Art", lat: 38.89147, long: -77.02001, artworks: ["Judith and Holofernes - Andrea Mantegna"] },
{ name: "Musée des Beaux-Arts de Strasbourg", lat: 48.581, long: 7.7522, artworks: ["Judith and Her Maidservant - Antonio da Correggio","Salome with the Head of Saint John Baptist - Jean-Daniel Heimlich"] },
{ name: "Certosa di San Martino", lat: 40.84341, long: 14.241129, artworks: ["Triumph of Judith - Luca Giordano"] },
{ name: "Mauritshuis", lat: 52.080278, long: 4.314167, artworks: ["Judith with the Head of Holofernes - Philip van Dijk"] },
{ name: "Cultural Heritage Agency of the Netherlands Art Collection", lat: 52.36, long: 4.885278, artworks: ["Judith Holding the Head of Holofernes","Salome with the head of John the Baptist - Massimo Stanzione"] },
{ name: "Musée des Augustins", lat: 43.601, long: 1.446, artworks: ["Le Triomphe de Judith - Francesco Curradi","Judith - Valentin de Boulogne"] },
{ name: "Birmingham Museum of Art", lat: 33.52222, long: -86.810069, artworks: ["Judith - Guido Reni"] },
{ name: "Nationalmuseum", lat: 59.328611111111, long: 18.077777777778, artworks: ["Judith with the Head of Holofernes - Bernardo Cavallino"] },
{ name: "Museum Boijmans Van Beuningen", lat: 51.914183, long: 4.47308, artworks: ["Judith with the Head of Holofernes - Gerrit Pietersz Sweelink","The beheading of John the Baptist - Pierre Puvis de Chavannes"] },
{ name: "Museum of Fine Arts of Lyon", lat: 45.766944444444, long: 4.8336111111111, artworks: ["Judith - Jules-Claude Ziegler"] },
{ name: "Fine Arts Museums of San Francisco", lat: 37.783888888889, long: -122.50111111111, artworks: ["Portrait of a Lady of the Saxon Court as Judith with the Head of Holofernes"] },
{ name: "Art Institute of Chicago", lat: 41.879444, long: -87.623889, artworks: ["Judith with the Head of Holofernes - Jan Sanders van Hemessen","Judith with the Head of Holofernes - Felice Ficherelli","Salome with the Head of Saint John the Baptist - Guido Reni"] },
{ name: "Museum of Fine Arts Ghent (MSK)", lat: 51.0383, long: 3.7238, artworks: ["Judith - Edouard Frederic Wilhelm Richter"] },
{ name: "MUŻA", lat: 35.896389, long: 14.511389, artworks: ["Judith and Holofernes - Valentin de Boulogne"] },
{ name: "Saint Louis Art Museum", lat: 38.639444, long: -90.294444, artworks: ["Judith and Holofernes - Giorgio Vasari"] },
{ name: "Dulwich Picture Gallery", lat: 51.446111111111, long: -0.086388888888889, artworks: ["Judith with the head of Holopherne"] },
{ name: "National Gallery", lat: 51.508704, long: -0.128435, artworks: ["Judith and the Infant Hercules - Master of the Mansi Magdalen","Judith - Eglon van der Neer","Salome with the Head of John the Baptist - Caravaggio","The Daughter of Herodias - Sebastiano del Piombo"] },
{ name: "Museo Nacional de Bellas Artes", lat: -34.58405556, long: -58.39280556, artworks: ["Judith - Gerard Seghers","Salome - Francesc Masriera Manovens"] },
{ name: "Royal Collection", lat: 51.4998, long: -0.142408, artworks: ["Judith with the Head of Holofernes - Cristofano Allori"] },
{ name: "Pinacoteca Querini Stampalia", lat: 45.43642, long: 12.34107, artworks: ["Judith with the head of Holofernes - Vincenzo Catena"] },
{ name: "Palace Museum in Wilanów", lat: 52.16516667, long: 21.09030833, artworks: ["Judith with the Head of Holofernes - Alexis Grimou"] },
{ name: "Musée d'Orsay", lat: 48.859918, long: 2.326583, artworks: ["Salomé - Juana Romani"] },
{ name: "Museum Baron Martin", lat: 48.860406, long: 2.324941, artworks: ["Salomé et Hérodiade - Edouard Frederic Wilhelm Richter"] },
{ name: "National Museum of Ancient Art", lat: 38.704947, long: -9.161227, artworks: ["Salome with the head of Saint John the Baptist - Lucas Cranach the Elder"] },
{ name: "Gallery of Fine Arts", lat: 45.554872, long: 18.695372, artworks: ["Salome - Bela Čikoš Sesija"] },
{ name: "Municipal Gallery of Corfu", lat: 39.64099, long: 19.83588, artworks: ["Beheading of John the Baptist (Damaskinos) - Michael Damaskinos"] },
{ name: "Hallwyl Museum", lat: 59.333259, long: 18.074381, artworks: ["Salomé's Dance - Gerard Hoet"] },
{ name: "Joslyn Art Museum", lat: 41.260276, long: -95.945848, artworks: ["Salome Dancing Before King Herod - Georges Rochegrosse"] },
{ name: "Lenbachhaus", lat: 48.14694, long: 11.563503, artworks: ["Salome - Franz Stuck"] },
{ name: "Crocker Art Museum", lat: 38.577117, long: -121.506171, artworks: ["Salomé with the Head of John the Baptist - Simon Vouet"] },
{ name: "Biscainhos Museum", lat: 41.551191, long: 8.429739, artworks: ["Salome and the head of Saint John the Baptist"] },
{ name: "National Museum in Poznań", lat: 52.408614, long: 16.929918, artworks: ["St John with Salome, detail - Jacek Malczewski"] },
{ name: "National Gallery of Armenia", lat: 40.178764, long: 44.513898, artworks: ["Salome - Vardges Sureniants"] },
{ name: "Museumslandschaft Hessen Kassel", lat: 51.315, long: 9.41611, artworks: ["Salomé with the Head of St. John before Herod - Mattia Preti"] },
{ name: "Cleveland Museum of Art", lat: 41.509044, long: -81.611737, artworks: ["Salome with the Head of Saint John the Baptist - Jacob Duck"] },
{ name: "Department of Paintings of the Louvre", lat: 48.86102, long: 2.33587, artworks: ["Salome with the Head of St. John the Baptist - Bernardino Luini","Salome with the Head of John the Baptist - Jacob Cornelisz van Oostsanen","Beheading of St. John the Baptist and Herod's Banquet - Fra Angelico","Salome Receiving the Head of St. John the Baptist - Giuseppe Caletti"] },
{ name: "Musée des Beaux-Arts de Dijon", lat: 47.321631, long: 5.042364, artworks: ["Nativity - Robert Campin"] },
{ name: "Royal Palace of Madrid", lat: 40.417296, long: -3.713406, artworks: ["Salome with the Head of John the Baptist - Caravaggio"] },
{ name: "Museum of Fine Arts of Rennes", lat: 48.11198, long: 1.67429, artworks: ["Salome receiving the head of John the Baptist - Guercino"] },
{ name: "Doria Pamphilj Gallery", lat: 41.897824, long: 12.481561, artworks: ["Salome - Titian"] },
{ name: "Tosio Martinengo Gallery", lat: 45.53503, long: 10.225043, artworks: ["Salome - Moretto da Brescia"] },
{ name: "European Paintings", lat: 40.7794, long: -73.9631, artworks: ["Salome - Henri Regnault"] },
{ name: "Nantes Museum of Arts", lat: 47.219519, long: 1.547575, artworks: ["Salomé - Jean Benner"] },
{ name: "Gemäldegalerie", lat: 52.508513, long: 13.364749, artworks: ["Salome - Bernardo Strozzi"] },
{ name: "Musée Gustave-Moreau", lat: 48.877915, long: 2.334403, artworks: ["Beheading of John the Baptist - Gustave Moreau","Beheading of John the Baptist - Gustave Moreau","Study for Salome - Gustave Moreau","The Apparition - Gustave Moreau","Salome - Gustave Moreau","Salome - Gustave Moreau","Salome - Gustave Moreau","Salome - Gustave Moreau","Salome - Gustave Moreau","Salome Dancing - Gustave Moreau","Salome Dancing in front of Herod - Gustave Moreau","Salome - Gustave Moreau"] },
{ name: "Brooklyn Museum", lat: 40.670911, long: -73.963316, artworks: ["The Daughter of Herodias Dancing - James Tissot"] },
{ name: "Alte Nationalgalerie", lat: 52.520862, long: 13.398266, artworks: ["Salome with the Head of John - Victor Müller"] },
{ name: "Museum of Fine Arts of Nancy", lat: 48.68439, long: 6.18496, artworks: ["Herodias - Henri Leopold Levy"] },
{ name: "Royal Museums of Fine Arts of Belgium", lat: 50.84168, long: 4.358238, artworks: ["Salomé - Alfred Stevens"] },
{ name: "Museum Dom João VI", lat: -22.902385, long: -43.172879, artworks: ["Salome with the Head of Saint John the Baptist - Francisco Nery"] },
{ name: "Lentos Art Museum", lat: 48.308599, long: 14.288895, artworks: ["Salome - Wilhelm Trübner"] },
{ name: "National Museum in Kielce", lat: 50.890075, long: 20.637427, artworks: ["Salome's Dance - Maurycy Gottlieb"] },
{ name: "John and Mable Ringling Museum of Art", lat: 27.38137, long: -82.559792, artworks: ["Salome - Robert Henri"] },
{ name: "Mead Art Museum", lat: 42.370892, long: -72.51547, artworks: ["Salome - Robert Henri"] },
{ name: "Smithsonian American Art Museum", lat: 38.897867, long: -77.02359, artworks: ["Salome - Henry Ossawa Tanner"] },
{ name: "Ca' Pesaro", lat: 45.440973, long: 12.331542, artworks: ["Salomé II - Gustav Klimt"] },
{ name: "Museo Julio Romero de Torres", lat: 37.881224, long: -4.774553, artworks: ["Salomé - Julio Romero de Torres"] },
{ name: "University of Michigan", lat: 42.294214, long: -83.710039, artworks: ["Salome and the head of St. John the Baptist - Gaspare Traversi"] },
{ name: "Wadsworth Atheneum Museum of Art", lat: 43.97478, long: -75.91076, artworks: ["The Feast of Herod - Lucas Cranach the Elder"] },
{ name: "Norton Simon Museum", lat: 34.146373, long: -118.159259, artworks: ["Salome - Titian"] }
]

const timeline = {
	labels: [1400,1410,1420,1430,1440,1450,1460,1470,1480,1490,1500,1510,1520,1530,1540,1550,1560,1570,1580,1590,1600,1610,1620,1630,1640,1650,1660,1670,1680,1690,1700,1710,1720,1730,1740,1750,1760,1770,1780,1790,1800,1810,1820,1830,1840,1850,1860,1870,1880,1890,1900,1910,1920,1930],
    datasets: [
        {
            label: 'Judith',
            data: [0,0,0,0,0,0,0,1,0,4,2,2,5,3,3,4,0,3,2,1,9,6,9,6,2,6,1,2,1,1,9,1,3,0,0,2,0,0,1,0,2,0,1,1,2,1,0,2,2,1,3,0,0,0],
            borderColor: 'rgba(3, 79, 17, 1)',
            backgroundColor: 'rgba(3, 79, 17, 1)',
            // borderColor: '#034f11',
            // backgroundColor: '#034f11',
        },
        {
            label: 'Salome',
            data: [0,1,1,1,0,0,0,0,0,0,3,6,5,3,1,2,0,1,0,2,5,1,3,2,0,4,0,0,1,0,4,0,0,1,0,0,1,2,0,0,0,0,0,0,1,3,1,18,5,4,10,2,4,1],
            borderColor: 'rgba(113, 15, 15, 1)',
            backgroundColor: 'rgba(113, 15, 15, 1)',
            // borderColor: '#710f0f',
            // backgroundColor: '#710f0f',
        }
    ]
};