function populate(s1, s2) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    s2.innerHTML = "";

    var optionArray = [];

    if (s1.value == "argentina") {
        var optionArray = [
            'buenos aires|Buenos Aires',
            'catamarca|Catamarca',
            'chaco|Chaco',
            'chubut|Chubut',
            'ciudad autónoma de buenos aires|Ciudad Autónoma de Buenos Aires',
            'cordoba|Córdoba',
            'corrientes|Corrientes',
            'entre ríos|Entre Ríos',
            'formosa|Formosa',
            'jujuy|Jujuy',
            'la pampa|La Pampa',
            'la rioja|La Rioja',
            'mendoza|Mendoza',
            'misiones|Misiones',
            'neuquén|Neuquén',
            'rio negro|Río Negro',
            'salta|Salta',
            'san juan|San Juan',
            'san luis|San Luis',
            'santa cruz|Santa Cruz',
            'santa fe|Santa Fe',
            'santiago del estero|Santiago del Estero',
            'tierra del fuego, antártida e islas del atlántico sur|Tierra del Fuego, Antártida e Islas del Atlántico Sur',
            'tucumán|Tucumán'
        ];
    }

    if (s1.value == "bolivia") {
        var optionArray = [
            'beni|Beni',
            'chuquisaca|Chuquisaca',
            'cochabamba|Cochabamba',
            'la paz|La Paz',
            'oruro|Oruro',
            'pando|Pando',
            'potosí|Potosí',
            'santa cruz|Santa Cruz',
            'tarija|Tarija'
        ];
    }


    if (s1.value == "brasil") {
        var optionArray = [
            'acre|Acre',
            'alagoas|Alagoas',
            'amapa|Amapá',
            'amazonas|Amazonas',
            'bahia|Bahía',
            'ceara|Ceará',
            'distrito federal|Distrito Federal',
            'espirito santo|Espírito Santo',
            'goias|Goiás',
            'maranhao|Maranhão',
            'mato grosso|Mato Grosso',
            'mato grosso do sul|Mato Grosso do Sul',
            'minas gerais|Minas Gerais',
            'para|Pará',
            'paraiba|Paraíba',
            'paraná|Paraná',
            'pernambuco|Pernambuco',
            'piaui|Piauí',
            'río de janeiro|Río de Janeiro',
            'río grande do norte|Río Grande do Norte',
            'río grande do sul|Río Grande do Sul',
            'rondonia|Rondônia',
            'roraima|Roraima',
            'santa catarina|Santa Catarina',
            'sao paulo|São Paulo',
            'sergipe|Sergipe',
            'tocantins|Tocantins'
        ];
    }

    if (s1.value == "chile") {
        var optionArray = [
            'antofagasta|Antofagasta',
            'araucania|Araucanía',
            'arica y parinacota|Arica y Parinacota',
            'atacama|Atacama',
            'aysen del general carlos ibañez del campo|Aysén del General Carlos Ibáñez del Campo',
            'biobio|Biobío',
            'coquimbo|Coquimbo',
            'libertador general bernardo o higgins|Libertador General Bernardo O\'Higgins',
            'los lagos|Los Lagos',
            'los rios|Los Ríos',
            'magallanes y de la antartica chilena|Magallanes y de la Antártica Chilena',
            'maule|Maule',
            'metropolitana de santiago|Metropolitana de Santiago',
            'tarapaca|Tarapacá',
            'valparaiso|Valparaíso'
        ];
    }

    if (s1.value == "colombia") {
        var optionArray = [
            'amazonas|Amazonas',
            'antioquia|Antioquia',
            'arauca|Arauca',
            'atlantico|Atlántico',
            'bolivar|Bolívar',
            'boyaca|Boyacá',
            'caldas|Caldas',
            'caqueta|Caquetá',
            'casanare|Casanare',
            'cauca|Cauca',
            'cesar|Cesar',
            'choco|Chocó',
            'cordoba|Córdoba',
            'cundinamarca|Cundinamarca',
            'guainia|Guainía',
            'guaviare|Guaviare',
            'huila|Huila',
            'la guajira|La Guajira',
            'magdalena|Magdalena',
            'meta|Meta',
            'nariño|Nariño',
            'norte de santander|Norte de Santander',
            'putumayo|Putumayo',
            'quindio|Quindío',
            'risaralda|Risaralda',
            'san andres y providencia|San Andrés y Providencia',
            'santander|Santander',
            'sucre|Sucre',
            'tolima|Tolima',
            'valle del cauca|Valle del Cauca',
            'vaupes|Vaupés',
            'vichada|Vichada'
        ];

    }

    if (s1.value == "cuba") {
        var optionArray = [
            'artemisa|Artemisa',
            'camaguey|Camagüey',
            'cienfuegos|Cienfuegos',
            'ciudad de la habana|Ciudad de la Habana',
            'granma|Granma',
            'guantanamo|Guantánamo',
            'holguin|Holguín',
            'isla de la juventud|Isla de la Juventud',
            'la habana|La Habana',
            'las tunas|Las Tunas',
            'matanzas|Matanzas',
            'mayabeque|Mayabeque',
            'pinar del rio|Pinar del Río',
            'sancti spiritus|Sancti Spíritus',
            'santiago de cuba|Santiago de Cuba',
            'villa clara|Villa Clara'
        ];
    }
    if (s1.value == "ecuador") {
        var optionArray = [
            'azuay|Azuay',
            'bolivar|Bolívar',
            'canar|Cañar',
            'carchi|Carchi',
            'chimborazo|Chimborazo',
            'cotopaxi|Cotopaxi',
            'el oro|El Oro',
            'esmeraldas|Esmeraldas',
            'galapagos|Galápagos',
            'guayas|Guayas',
            'imbabura|Imbabura',
            'loja|Loja',
            'los rios|Los Ríos',
            'manabi|Manabí',
            'morona santiago|Morona-Santiago',
            'napo|Napo',
            'orellana|Orellana',
            'pastaza|Pastaza',
            'pichincha|Pichincha',
            'santa elena|Santa Elena',
            'santo domingo de los tsachilas|Santo Domingo de los Tsáchilas',
            'sucumbios|Sucumbíos',
            'tungurahua|Tungurahua',
            'zamora chinchipe|Zamora Chinchipe'
        ];

    }
    if (s1.value == "guyana") {
        var optionArray = [
            'barima-waini|Barima-Waini',
            'cuyuni-mazaruni|Cuyuni-Mazaruni',
            'demerara-mahaica|Demerara-Mahaica',
            'east berbice-corentyne|East Berbice-Corentyne',
            'essequibo islands-west demerara|Essequibo Islands-West Demerara',
            'mahaica-berbice|Mahaica-Berbice',
            'pomeroon-supenaam|Pomeroon-Supenaam',
            'potaro-siparuni|Potaro-Siparuni',
            'upper takutu-upper essequibo|Upper Takutu-Upper Essequibo'
        ];
    }


    if (s1.value == "guatemala") {
        var optionArray = [
            'alta verapaz|Alta Verapaz',
            'baja verapaz|Baja Verapaz',
            'chimaltenango|Chimaltenango',
            'chiquimula|Chiquimula',
            'el progreso|El Progreso',
            'escuintla|Escuintla',
            'guatemala|Guatemala',
            'huehuetenango|Huehuetenango',
            'izabal|Izabal',
            'jalapa|Jalapa',
            'jutiapa|Jutiapa',
            'peten|Petén',
            'quetzaltenango|Quetzaltenango',
            'quiche|Quiché',
            'retalhuleu|Retalhuleu',
            'sacatepequez|Sacatepéquez',
            'san marcos|San Marcos',
            'santa rosa|Santa Rosa',
            'solola|Sololá',
            'suchitepequez|Suchitepéquez',
            'totonicapan|Totonicapán',
            'zacapa|Zacapa'
        ];
    }


    if (s1.value == "mexico") {
        var optionArray = [
            'aguascalientes|Aguascalientes',
            'baja california|Baja California',
            'baja california sur|Baja California Sur',
            'campeche|Campeche',
            'chiapas|Chiapas',
            'chihuahua|Chihuahua',
            'ciudad de mexico|Ciudad de México',
            'coahuila|Coahuila',
            'colima|Colima',
            'durango|Durango',
            'estado de mexico|Estado de México',
            'guanajuato|Guanajuato',
            'guerrero|Guerrero',
            'hidalgo|Hidalgo',
            'jalisco|Jalisco',
            'michoacan|Michoacán',
            'morelos|Morelos',
            'nayarit|Nayarit',
            'nuevo leon|Nuevo León',
            'oaxaca|Oaxaca',
            'puebla|Puebla',
            'queretaro|Querétaro',
            'quintana roo|Quintana Roo',
            'san luis potosi|San Luis Potos',
            'sinaloa|Sinaloa',
            'sonora|Sonora',
            'tabasco|Tabasco',
            'tamaulipas|Tamaulipas',
            'tlaxcala|Tlaxcala',
            'veracruz|Veracruz',
            'yucatan|Yucatán',
            'zacatecas|Zacatecas'
        ];
    }


    if (s1.value == "nicaragua") {
        var optionArray = [
            'atlantico norte|Atlántico Norte',
            'atlantico sur|Atlántico Sur',
            'boaco|Boaco',
            'carazo|Carazo',
            'chinandega|Chinandega',
            'chontales|Chontales',
            'esteli|Estelí',
            'granada|Granada',
            'jiinotega|Jinotega',
            'leon|León',
            'madriz|Madriz',
            'managua|Managua',
            'masaya|Masaya',
            'matagalpa|Matagalpa',
            'nueva segovia|Nueva Segovia',
            'rio san juan|Río San Juan',
            'rivas|Rivas'
        ];
    }

    if (s1.value == "panama") {
        var optionArray = [
            'bocas del toro|Bocas del Toro',
            'chiriqui|Chiriquí',
            'cocle|Coclé',
            'colón|Colón',
            'daríen|Darién',
            'herrera|Herrera',
            'los santos|Los Santos',
            'panamá|Panamá',
            'veraguas|Veraguas',
            'comarca guna yala|Comarca Guna Yala',
            'comarca emberá-wounaan|Comarca Emberá-Wounaan',
            'comarca ngäbe-buglé|Comarca Ngäbe-Buglé'
        ];
    }

    if (s1.value == "paraguay") {
        var optionArray = [
            'alto paraguay|Alto Paraguay',
            'alto paraná|Alto Paraná',
            'amambay|Amambay',
            'boquerón|Boquerón',
            'caaguazú|Caaguazú',
            'caazapá|Caazapá',
            'canindeyú|Canindeyú',
            'central|Central',
            'concepción|Concepción',
            'cordillera|Cordillera',
            'guairá|Guairá',
            'itapúa|Itapúa',
            'misiones|Misiones',
            'ñeembucú|Ñeembucú',
            'paraguarí|Paraguarí',
            'presidente hayes|Presidente Hayes',
            'san pedro|San Pedro'
        ];
    }

    if (s1.value == "peru") {
        var optionArray = [
            'amazonas|Amazonas',
            'ancash|Áncash',
            'apurimac|Apurímac',
            'arequipa|Arequipa',
            'ayacucho|Ayacucho',
            'cajamarca|Cajamarca',
            'callao|Callao',
            'cusco|Cusco',
            'huancavelica|Huancavelica',
            'huanuco|Huánuco',
            'ica|Ica',
            'junin|Junín',
            'la libertad|La Libertad',
            'lambayeque|Lambayeque',
            'lima|Lima',
            'loreto|Loreto',
            'madre de dios|Madre de Dios',
            'moquegua|Moquegua',
            'pasco|Pasco',
            'piura|Piura',
            'puno|Puno',
            'san martin|San Martín',
            'tacna|Tacna',
            'tumbes|Tumbes',
            'ucayali|Ucayali'
        ];
    }


    if (s1.value == "uruguay") {
        var optionArray = [
            'artigas|Artigas',
            'canelones|Canelones',
            'cerro largo|Cerro Largo',
            'colonia|Colonia',
            'durazno|Durazno',
            'flores|Flores',
            'florida|Florida',
            'lavalleja|Lavalleja',
            'maldonado|Maldonado',
            'montevideo|Montevideo',
            'paysandu|Paysandú',
            'rio negro|Río Negro',
            'rivera|Rivera',
            'rocha|Rocha',
            'salto|Salto',
            'san jose|San José',
            'soriano|Soriano',
            'tacuarembo|Tacuarembó',
            'treinta y tres|Treinta y Tres'
        ];
    }

    if (s1.value == "venezuela") {
        var optionArray = [
            'amazonas|Amazonas',
            'anzoategui|Anzoátegui',
            'apure|Apure',
            'aragua|Aragua',
            'barinas|Barinas',
            'bolivar|Bolívar',
            'carabobo|Carabobo',
            'cojedes|Cojedes',
            'delta amacuro|Delta Amacuro',
            'distrito capital|Distrito Capital',
            'falcon|Falcón',
            'guarico|Guárico',
            'lara|Lara',
            'merida|Mérida',
            'miranda|Miranda',
            'monagas|Monagas',
            'nueva esparta|Nueva Esparta',
            'portuguesa|Portuguesa',
            'sucre|Sucre',
            'tachira|Táchira',
            'trujillo|Trujillo',
            'vargas|Vargas',
            'yaracuy|Yaracuy',
            'zulia|Zulia'
        ];
    }

    // Limpiamos el select destino antes de añadir las nuevas opciones
    while (s2.options.length > 0) {
        s2.remove(0);
    }

    for (var i = 0; i < optionArray.length; i++) {
        var pair = optionArray[i].split("|");
        var newoption = document.createElement("option");

        newoption.value = pair[0];
        newoption.innerHTML = pair[1];
        s2.appendChild(newoption);
    }


    // Deshabilitar la opción con valor "0" en el primer select
    if (s1.value != "0") {
        var optionZero = s1.querySelector('option[value="0"]');
        if (optionZero) {
            optionZero.disabled = true;
        }
    }

}

// CIudades o pueblos

function populateCiudades(selectedState, s3) {
    var s3 = document.getElementById(s3);
    s3.innerHTML = "";

    var ciudades = {

        //argentina

        'buenos aires': ['La Plata', 'Mar del Plata', 'Bahía Blanca'],
        'ciudad autónoma de buenos aires': ['Buenos Aires'],
        'catamarca': ['San Fernando del Valle de Catamarca', 'La Rioja'],
        'chaco': ['Resistencia', 'Barranqueras'],
        'chubut': ['Rawson', 'Comodoro Rivadavia'],
        'cordoba': ['Córdoba', 'Villa Carlos Paz'],
        'corrientes': ['Corrientes', 'Goya'],
        'entre rios': ['Paraná', 'Concordia'],
        'formosa': ['Formosa', 'Clorinda'],
        'jujuy': ['San Salvador de Jujuy', 'Palpalá'],
        'la pampa': ['Santa Rosa', 'General Pico'],
        'la rioja': ['La Rioja', 'Chilecito'],
        'mendoza': ['Mendoza', 'San Rafael'],
        'misiones': ['Posadas', 'Eldorado'],
        'neuquen': ['Neuquén', 'Cutral Có'],
        'rio negro': ['Viedma', 'San Carlos de Bariloche'],
        'salta': ['Salta', 'San Ramón de la Nueva Orán'],
        'san juan': ['San Juan', 'Rawson'],
        'san luis': ['San Luis', 'Villa Mercedes'],
        'santa cruz': ['Río Gallegos', 'Puerto Deseado'],
        'santa fe': ['Santa Fe', 'Rosario'],
        'santiago del estero': ['Santiago del Estero', 'La Banda'],
        'tierra del fuego, antártida e islas del atlántico sur': ['Ushuaia', 'Río Grande'],
        'tucumán': ['San Miguel de Tucumán', 'Tafí Viejo'],

        //bolivia

        'beni': ['Trinidad', 'Riberalta'],
        'chuquisaca': ['Sucre', 'Monteagudo'],
        'cochabamba': ['Cochabamba', 'Quillacollo'],
        'la paz': ['La Paz', 'El Alto'],
        'oruro': ['Oruro', 'Huanuni'],
        'pando': ['Cobija', 'Porvenir'],
        'potosi': ['Potosí', 'Uyuni'],
        'santa cruz': ['Santa Cruz de la Sierra', 'Montero'],
        'tarija': ['Tarija', 'Yacuiba'],

        //brasil

        'acre': ['Rio Branco', 'Cruzeiro do Sul'],
        'alagoas': ['Maceió', 'Arapiraca'],
        'amapa': ['Macapá', 'Santana'],
        'amazonas': ['Manaus', 'Parintins'],
        'bahia': ['Salvador', 'Feira de Santana'],
        'ceara': ['Fortaleza', 'Caucaia'],
        'distrito federal': ['Brasília'],
        'espirito santo': ['Vitória', 'Vila Velha'],
        'goias': ['Goiânia', 'Aparecida de Goiânia'],
        'maranhao': ['São Luís', 'Imperatriz'],
        'mato grosso': ['Cuiabá', 'Várzea Grande'],
        'mato grosso do sul': ['Campo Grande', 'Dourados'],
        'minas gerais': ['Belo Horizonte', 'Uberlândia'],
        'para': ['Belém', 'Ananindeua'],
        'paraiba': ['João Pessoa', 'Campina Grande'],
        'parana': ['Curitiba', 'Londrina'],
        'pernambuco': ['Recife', 'Jaboatão dos Guararapes'],
        'piaui': ['Teresina', 'Parnaíba'],
        'río de janeiro': ['Rio de Janeiro', 'São Gonçalo'],
        'río grande do norte': ['Natal', 'Mossoró'],
        'río grande do sul': ['Porto Alegre', 'Caxias do Sul'],
        'rondonia': ['Porto Velho', 'Ji-Paraná'],
        'roraima': ['Boa Vista', 'Caracaraí'],
        'santa catarina': ['Florianópolis', 'Joinville'],
        'sao paulo': ['São Paulo', 'Guarulhos'],
        'sergipe': ['Aracaju', 'Nossa Senhora do Socorro'],
        'tocantins': ['Palmas', 'Araguaína'],

        //chile

        'antofagasta': ['Antofagasta', 'Calama'],
        'araucania': ['Temuco', 'Angol'],
        'arica y parinacota': ['Arica', 'Putre'],
        'atacama': ['Copiapó', 'Vallenar'],
        'aysen del general carlos ibañez del campo': ['Coyhaique', 'Puerto Aysén'],
        'biobio': ['Concepción', 'Talcahuano'],
        'coquimbo': ['La Serena', 'Coquimbo'],
        'libertador general bernardo o higgins': ['Rancagua', 'San Fernando'],
        'los lagos': ['Puerto Montt', 'Osorno'],
        'los rios': ['Valdivia', 'La Unión'],
        'magallanes y de la antartica chilena': ['Punta Arenas', 'Puerto Natales'],
        'maule': ['Talca', 'Curicó'],
        'metropolitana de santiago': ['Santiago', 'Puente Alto'],
        'tarapaca': ['Iquique', 'Alto Hospicio'],
        'valparaiso': ['Valparaíso', 'Viña del Mar'],

        //colombia

        'amazonas': ['Leticia', 'Puerto Nariño'],
        'antioquia': ['Medellín', 'Bello'],
        'arauca': ['Arauca', 'Saravena'],
        'atlantico': ['Barranquilla', 'Soledad'],
        'bolivar': ['Cartagena', 'Magangué'],
        'boyaca': ['Tunja', 'Duitama'],
        'caldas': ['Manizales', 'Pereira'],
        'caqueta': ['Florencia', 'San Vicente del Caguán'],
        'casanare': ['Yopal', 'Tauramena'],
        'cauca': ['Popayán', 'Santander de Quilichao'],
        'cesar': ['Valledupar', 'Aguachica'],
        'choco': ['Quibdó', 'Nuquí'],
        'cordoba': ['Montería', 'Sahagún'],
        'cundinamarca': ['Bogotá', 'Soacha'],
        'guainia': ['Inírida', 'Puerto Colombia'],
        'guaviare': ['San José del Guaviare', 'Calamar'],
        'huila': ['Neiva', 'Pitalito'],
        'la guajira': ['Riohacha', 'Maicao'],
        'magdalena': ['Santa Marta', 'Ciénaga'],
        'meta': ['Villavicencio', 'Granada'],
        'nariño': ['Pasto', 'Tumaco'],
        'norte de santander': ['Cúcuta', 'Ocaña'],
        'putumayo': ['Mocoa', 'Puerto Asís'],
        'quindio': ['Armenia', 'Calarcá'],
        'risaralda': ['Pereira', 'Dosquebradas'],
        'san andres y providencia': ['San Andrés', 'Providencia'],
        'santander': ['Bucaramanga', 'Floridablanca'],
        'sucre': ['Sincelejo', 'Corozal'],
        'tolima': ['Ibagué', 'Espinal'],
        'valle del cauca': ['Cali', 'Buenaventura'],
        'vaupes': ['Mitú', 'Caruru'],
        'vichada': ['Puerto Carreño', 'Cumaribo'],

        //cuba

        'artemisa': ['Artemisa', 'San Antonio de los Baños'],
        'camaguey': ['Camagüey', 'Nuevitas'],
        'cienfuegos': ['Cienfuegos', 'Palmira'],
        'ciudad de la habana': ['La Habana'],
        'granma': ['Bayamo', 'Manzanillo'],
        'guantanamo': ['Guantánamo', 'Baracoa'],
        'holguin': ['Holguín', 'Moá'],
        'isla de la juventud': ['Nueva Gerona'],
        'la habana': ['La Habana Vieja', 'Centro Habana'],
        'las tunas': ['Las Tunas', 'Puerto Padre'],
        'matanzas': ['Matanzas', 'Cárdenas'],
        'mayabeque': ['San José de las Lajas', 'Güines'],
        'pinar del rio': ['Pinar del Río', 'San Cristóbal'],
        'sancti spiritus': ['Sancti Spíritus', 'Trinidad'],
        'santiago de cuba': ['Santiago de Cuba', 'Palma Soriano'],
        'villa clara': ['Santa Clara', 'Sagua la Grande'],

        //ecuador
        'azuay': ['Cuenca', 'Gualaceo'],
        'bolivar': ['Guaranda', 'Chillanes'],
        'canar': ['Azogues', 'La Troncal'],
        'carchi': ['Tulcán', 'Montúfar'],
        'chimborazo': ['Riobamba', 'Alausí'],
        'cotopaxi': ['Latacunga', 'Saquisilí'],
        'el oro': ['Machala', 'Santa Rosa'],
        'esmeraldas': ['Esmeraldas', 'Atacames'],
        'galapagos': ['Puerto Baquerizo Moreno', 'Puerto Ayora'],
        'guayas': ['Guayaquil', 'Durán'],
        'imbabura': ['Ibarra', 'Otavalo'],
        'loja': ['Loja', 'Catamayo'],
        'los rios': ['Babahoyo', 'Quevedo'],
        'manabi': ['Portoviejo', 'Manta'],
        'morona santiago': ['Macas', 'Sucúa'],
        'napo': ['Tena', 'Archidona'],
        'orellana': ['Orellana', 'La Joya de los Sachas'],
        'pastaza': ['Puyo', 'Mera'],
        'pichincha': ['Quito', 'Cayambe'],
        'santa elena': ['La Libertad', 'Salinas'],
        'santo domingo de los tsachilas': ['Santo Domingo', 'La Concordia'],
        'sucumbios': ['Lago Agrio', 'Shushufindi'],
        'tungurahua': ['Ambato', 'Banos'],
        'zamora chinchipe': ['Zamora', 'Yantzaza'],

        //guyana

        'barima-waini': ['Mabaruma', 'Port Kaituma'],
        'cuyuni-mazaruni': ['Bartica', 'Issano'],
        'demerara-mahaica': ['Georgetown', 'Paradise'],
        'east berbice-corentyne': ['New Amsterdam', 'Rose Hall'],
        'essequibo islands-west demerara': ['Vreed en Hoop', 'Parika'],
        'mahaica-berbice': ['Fort Wellington', 'Rosignol'],
        'pomeroon-supenaam': ['Anna Regina', 'Charity'],
        'potaro-siparuni': ['Mahdia', 'Tumatumari'],
        'upper takutu-upper essequibo': ['Lethem', 'Good Hope'],

        //guatemala
        'alta verapaz': ['Cobán', 'San Pedro Carchá'],
        'baja verapaz': ['Salamá', 'Cubulco'],
        'chimaltenango': ['Chimaltenango', 'San José Poaquil'],
        'chiquimula': ['Chiquimula', 'San Jacinto'],
        'el progreso': ['Guastatoya', 'Sanarate'],
        'escuintla': ['Escuintla', 'Santa Lucía Cotzumalguapa'],
        'guatemala': ['Guatemala City', 'Mixco'],
        'huehuetenango': ['Huehuetenango', 'Chiantla'],
        'izabal': ['Puerto Barrios', 'Morales'],
        'jalapa': ['Jalapa', 'San Pedro Pinula'],
        'jutiapa': ['Jutiapa', 'Asunción Mita'],
        'peten': ['Flores', 'Sayaxché'],
        'quetzaltenango': ['Quetzaltenango', 'Olintepeque'],
        'quiche': ['Santa Cruz del Quiché', 'Chichicastenango'],
        'retalhuleu': ['Retalhuleu', 'San Sebastián'],
        'sacatepequez': ['Antigua Guatemala', 'San Lucas Sacatepéquez'],
        'san marcos': ['San Marcos', 'San Pedro Sacatepéquez'],
        'santa rosa': ['Cuilapa', 'Barberena'],
        'solola': ['Sololá', 'Panajachel'],
        'suchitepequez': ['Mazatenango', 'San Francisco Zapotitlán'],
        'totonicapan': ['Totonicapán', 'Momostenango'],
        'zacapa': ['Zacapa', 'Río Hondo'],

        //mexico

        'aguascalientes': ['Aguascalientes', 'Rincón de Romos'],
        'baja california': ['Mexicali', 'Tijuana'],
        'baja california sur': ['La Paz', 'Los Cabos'],
        'campeche': ['Campeche', 'Ciudad del Carmen'],
        'chiapas': ['Tuxtla Gutiérrez', 'Tapachula'],
        'chihuahua': ['Chihuahua', 'Ciudad Juárez'],
        'ciudad de mexico': ['Mexico City'],
        'coahuila': ['Saltillo', 'Torreón'],
        'colima': ['Colima', 'Manzanillo'],
        'durango': ['Durango', 'Gómez Palacio'],
        'estado de mexico': ['Toluca', 'Naucalpan'],
        'guanajuato': ['Guanajuato', 'León'],
        'guerrero': ['Chilpancingo', 'Acapulco'],
        'hidalgo': ['Pachuca', 'Tulancingo'],
        'jalisco': ['Guadalajara', 'Zapopan'],
        'michoacan': ['Morelia', 'Uruapan'],
        'morelos': ['Cuernavaca', 'Jiutepec'],
        'nayarit': ['Tepic', 'Bahía de Banderas'],
        'nuevo leon': ['Monterrey', 'Guadalupe'],
        'oaxaca': ['Oaxaca', 'Juchitán'],
        'puebla': ['Puebla', 'Tehuacán'],
        'queretaro': ['Santiago de Querétaro', 'San Juan del Río'],
        'quintana roo': ['Chetumal', 'Cancún'],
        'san luis potosi': ['San Luis Potosí', 'Soledad de Graciano Sánchez'],
        'sinaloa': ['Culiacán', 'Mazatlán'],
        'sonora': ['Hermosillo', 'Ciudad Obregón'],
        'tabasco': ['Villahermosa', 'Cárdenas'],
        'tamaulipas': ['Ciudad Victoria', 'Reynosa'],
        'tlaxcala': ['Tlaxcala', 'Apizaco'],
        'veracruz': ['Xalapa', 'Veracruz'],
        'yucatan': ['Mérida', 'Tizimín'],
        'zacatecas': ['Zacatecas', 'Fresnillo'],

        //nicaragua

        'atlantico norte': ['Puerto Cabezas', 'Waspán'],
        'atlantico sur': ['Bluefields', 'El Rama'],
        'boaco': ['Boaco', 'Teustepe'],
        'carazo': ['Jinotepe', 'Dolores'],
        'chinandega': ['Chinandega', 'El Viejo'],
        'chontales': ['Juigalpa', 'Santo Tomás'],
        'esteli': ['Estelí', 'Pueblo Nuevo'],
        'granada': ['Granada', 'Nandaime'],
        'jinotega': ['Jinotega', 'La Concordia'],
        'leon': ['León', 'La Paz Centro'],
        'madriz': ['Somoto', 'San José de Cusmapa'],
        'managua': ['Managua', 'Ciudad Sandino'],
        'masaya': ['Masaya', 'Nindirí'],
        'matagalpa': ['Matagalpa', 'Jinotega'],
        'nueva segovia': ['Ocotal', 'Ciudad Antigua'],
        'rio san juan': ['San Carlos', 'El Castillo'],
        'rivas': ['Rivas', 'San Juan del Sur'],

        //panama

        'bocas del toro': ['Bocas del Toro', 'Changuinola'],
        'chiriqui': ['David', 'Boquete'],
        'cocle': ['Penonomé', 'Aguadulce'],
        'colón': ['Colón', 'Sabanitas'],
        'daríen': ['La Palma', 'Yaviza'],
        'emberá': ['Emberá', 'Alto Bayano'],
        'herrera': ['Chitré', 'Los Pozos'],
        'los santos': ['Las Tablas', 'Pedasí'],
        'panamá': ['Panamá City', 'San Miguelito'],
        'veraguas': ['Santiago de Veraguas', 'Atalaya'],


        //paraguay

        'alto paraguay': ['Fuerte Olimpo', 'Bahía Negra'],
        'alto paraná': ['Ciudad del Este', 'Minga Guazú'],
        'amambay': ['Pedro Juan Caballero', 'Bella Vista'],
        'boquerón': ['Filadelfia', 'Loma Plata'],
        'caaguazú': ['Coronel Oviedo', 'Caaguazú'],
        'caazapá': ['Caazapá', 'Yuty'],
        'canindeyú': ['Salto del Guairá', 'Curuguaty'],
        'central': ['Asunción', 'Luque'],
        'concepción': ['Concepción', 'Valle Mi'],
        'cordillera': ['Caacupé', 'Eusebio Ayala'],
        'guairá': ['Villarrica', 'Ñumí'],
        'itapúa': ['Encarnación', 'Hohenau'],
        'misiones': ['San Juan Bautista', 'Santa Rosa Misiones'],
        'ñeembucú': ['Pilar', 'Desmochados'],
        'paraguarí': ['Paraguarí', 'Carapeguá'],
        'presidente hayes': ['Villa Hayes', 'Benjamín Aceval'],
        'san pedro': ['San Pedro', 'San Estanislao'],

        //peru

        'amazonas': ['Chachapoyas', 'Bagua Grande'],
        'ancash': ['Huaraz', 'Chimbote'],
        'apurímac': ['Abancay', 'Andahuaylas'],
        'arequipa': ['Arequipa', 'Mollendo'],
        'ayacucho': ['Ayacucho', 'Huamanga'],
        'cajamarca': ['Cajamarca', 'Cutervo'],
        'callao': ['Callao'],
        'cusco': ['Cusco', 'Sicuani'],
        'huancavelica': ['Huancavelica', 'Pampas'],
        'huanuco': ['Huánuco', 'Tingo María'],
        'ica': ['Ica', 'Chincha Alta'],
        'junín': ['Huancayo', 'Tarma'],
        'la libertad': ['Trujillo', 'Chepén'],
        'lambayeque': ['Chiclayo', 'Lambayeque'],
        'lima': ['Lima', 'Huacho'],
        'loreto': ['Iquitos', 'Requena'],
        'madre de dios': ['Puerto Maldonado', 'Tambopata'],
        'moquegua': ['Moquegua', 'Ilo'],
        'pasco': ['Cerro de Pasco', 'Oxapampa'],
        'piura': ['Piura', 'Sullana'],
        'puno': ['Puno', 'Juliaca'],
        'san martín': ['Moyobamba', 'Tarapoto'],
        'tacna': ['Tacna', 'Tarata'],
        'tumbes': ['Tumbes', 'Zarumilla'],
        'ucayali': ['Pucallpa', 'Contamana'],

        //uruguay

        'artigas': ['Artigas', 'Bella Unión'],
        'canelones': ['Canelones', 'Santa Lucía'],
        'cerro largo': ['Melo', 'Río Branco'],
        'colonia': ['Colonia del Sacramento', 'Carmelo'],
        'durazno': ['Durazno', 'Sarandí del Yi'],
        'flores': ['Trinidad', 'Florida'],
        'florida': ['Florida', 'Sarandí Grande'],
        'lavalleja': ['Minas', 'José Pedro Varela'],
        'maldonado': ['Maldonado', 'Punta del Este'],
        'montevideo': ['Montevideo'],
        'paysandú': ['Paysandú', 'Guichón'],
        'río negro': ['Fray Bentos', 'Young'],
        'rivera': ['Rivera', 'Tranqueras'],
        'rocha': ['Rocha', 'Chuy'],
        'salto': ['Salto', 'Daymán'],
        'san josé': ['San José de Mayo', 'Libertad'],
        'soriano': ['Mercedes', 'Cardona'],
        'tacuarembó': ['Tacuarembó', 'Paso de los Toros'],
        'treinta y tres': ['Treinta y Tres', 'Santa Clara de Olimar'],

        //venezuela

        'amazonas': ['Puerto Ayacucho', 'La Esmeralda'],
        'anzoategui': ['Barcelona', 'Puerto La Cruz', 'Lechería'],
        'apure': ['San Fernando de Apure', 'Guasdualito'],
        'aragua': ['Maracay', 'Cagua', 'Turmero'],
        'barinas': ['Barinas', 'Ciudad Bolivia'],
        'bolivar': ['Ciudad Bolívar', 'Puerto Ordaz', 'Upata'],
        'carabobo': ['Valencia', 'Puerto Cabello', 'Guacara'],
        'cojedes': ['San Carlos', 'Tinaquillo'],
        'delta amacuro': ['Tucupita', 'San José de Guanipa'],
        'distrito capital': ['Caracas', 'Petare', 'El Hatillo'],
        'falcon': ['Coro', 'Punto Fijo'],
        'guarico': ['San Juan de los Morros', 'Calabozo'],
        'lara': ['Barquisimeto', 'Carora', 'Cabudare'],
        'merida': ['Mérida', 'El Vigía', 'Tovar'],
        'miranda': ['Los Teques', 'Guarenas', 'Baruta'],
        'monagas': ['Maturín', 'Punta de Mata'],
        'nueva esparta': ['Porlamar', 'La Asunción'],
        'portuguesa': ['Guanare', 'Acarigua'],
        'sucre': ['Cumaná', 'Carúpano'],
        'tachira': ['San Cristóbal', 'San Antonio del Táchira'],
        'trujillo': ['Valera', 'Trujillo'],
        'vargas': ['La Guaira', 'Catia La Mar'],
        'yaracuy': ['San Felipe', 'Chivacoa'],
        'zulia': ['Maracaibo', 'Cabimas', 'Ciudad Ojeda'],
    };


    var selectedCiudades = ciudades[selectedState];

    for (var i = 0; i < selectedCiudades.length; i++) {
        var newoption = document.createElement("option");
        newoption.value = selectedCiudades[i];
        newoption.innerHTML = selectedCiudades[i];
        s3.options.add(newoption);
    }
}