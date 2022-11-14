const motos = [
    {
        // Simple description
        marca:'suzuki', //GSX-R125
        modelo:'GSX-R125',
        image:'../src/assets/images/deportivas/suzuki/Suzuki-GSXl.png',
        año:2023,
        tipo:'deportiva',
        clindraje:125,
        precio:4565,
        // More info
        // DIMENSIONES
        longitudTotal: '1,975 mm',
        ancho: '670 mm',
        altura: '1,070 mm',
        alturaSuelo: '150 mm',
        alturaAsiento: '785 mm',
        peso: '134 KG',
        // Motor
        motor:'4 tiempos, monocilíndrica, refrigeración líquida, DOHC',
        potencia:'15 CV',
        transmision:'Inyección electrónica',
        capacidadCombustible:'11 litros',
        arraque:'Electrico sin llave',
        consumo:'2,4 litros a los 100km',
        // Frenos
        frenoDelantero:'Disco lobulado',
        frenoTrasero:' Disco lobulado',
        // Suspensión
        suspensionDelantero:'Amortiguación telescópica por muelle helicoidal y cartucho hidrálico',
        suspensionTrasero:'Amortiguación hidráulica por bieletas',
    },
    {
        // Simple description
        marca:'suzuki', //HAYABUSA 1300
        modelo:'HAYABUSA 1300',
        image:'../src/assets/images/deportivas/suzuki/Suzuki-Hayu.png',
        año:1999 ,
        tipo:'deportiva',
        clindraje:1340,
        precio:19995,
        // More info
        // DIMENSIONES
        longitudTotal: '2.180 mm',
        ancho: '735 mm',
        altura: '1.165 mm',
        alturaSuelo: '125 mm',
        alturaAsiento: '800 mm',
        peso: '264 KG',
        // Motor
        motor:'4T, refrigeración líquida, DOHC, 4 en línea',
        potencia:'190 cv',
        transmision:'Inyección electrónica',
        capacidadCombustible:'20.0 Litros',
        arraque:'Electrónico (transistorizado)',
        consumo:'6,7 litros a los 100km',
        // Frenos
        frenoDelantero:'Brembo Stylema® 4 pistones, discos 320 mm, ABS',
        frenoTrasero:'Nissin, 1 pistón, disco, ABS',
        // Suspensión
        suspensionDelantero:'Horquilla invertida',
        suspensionTrasero:'Monoamortiguador con sistema progresivo',
    },
    {
        // Simple description
        marca:'suzuki', //SV 650 2023
        modelo:'SV 650',
        image:'../src/assets/images/nakeds/suzuki/suzuki-SV 650 2023.jpg',
        año:2023 ,
        tipo:'naked',
        clindraje:645,
        precio:7115,
        // More info
        // DIMENSIONES
        longitudTotal: '2.180 mm',
        ancho: '760 mm',
        altura: '1.090mm',
        alturaSuelo: '135 mm',
        alturaAsiento: '785 mm',
        peso: '198 Kg',
        // Motor
        motor:'4 Tiempos, DOHC, 2 cilindros, 90º V-Twin',
        potencia:'76.5 CV',
        transmision:'Toma constante de 6 velocidades',
        capacidadCombustible:'14,5 Litros',
        arraque:'Electrónico',
        consumo:'4,1 litros a los 100km',
        // Frenos
        frenoDelantero:'Doble disco, Pinzas doble pistón',
        frenoTrasero:'Disco',
        // Suspensión
        suspensionDelantero:'Telescópica, muelle helicoidal, hidráulica',
        suspensionTrasero:'Por bieletas, muelle helicoidal, hidráulica',
    },
    {
        // Simple description
        marca:'suzuki', //SV650X 2023
        modelo:'SV650X',
        image:'../src/assets/images/nakeds/suzuki/SV650X 2023.jpg',
        año:2023 ,
        tipo:'naked',
        clindraje:645,
        precio:7915,
        // More info
        // DIMENSIONES
        longitudTotal: '2.140 mm',
        ancho: '730 mm',
        altura: '1.090mm',
        alturaSuelo: '135 mm',
        alturaAsiento: '790 mm',
        peso: '198 Kg',
        // Motor
        motor:'4 Tiempos, DOHC, 2 cilindros, 90º V-Twin',
        potencia:'76 CV',
        transmision:'Toma constante de 6 velocidades',
        capacidadCombustible:'14,5 Litros',
        arraque:'Electrónico (Transistorizado)',
        consumo:'4,1 litros a los 100km',
        // Frenos
        frenoDelantero:'Doble disco 290mm, pinzas 2 pistones',
        frenoTrasero:'Pinzas un piston, disco 240 mm',
        // Suspensión
        suspensionDelantero:'Amortiguación telescópica por muelle helicoidal y cartucho hidráulico. Ajustable en precarga del muelle.',
        suspensionTrasero:'Amortiguación hidráulica por bieletas, ajustable en precarga de muelle',
    },
    {
        // Simple description
        marca:'suzuki', //GSX-S1000 2023
        modelo:'GSX-S1000',
        image:'../src/assets/images/nakeds/suzuki/GSX-S1000 2023.jpg',
        año:2023 ,
        tipo:'naked',
        clindraje:999,
        precio:14315,
        // More info
        // DIMENSIONES
        longitudTotal: '2.115 mm',
        ancho: '810 mm',
        altura: '1080 mm',
        alturaSuelo: '140 mm',
        alturaAsiento: '810 mm',
        peso: ' ',
        // Motor
        motor:'4-tiempos, 4 cilindros, DOHC',
        potencia:'152 CV',
        transmision:'6 velocidades',
        capacidadCombustible:'19 Litros',
        arraque:'Eléctrico',
        consumo:'6,1 litros a los 100km',
        // Frenos
        frenoDelantero:'2 discos 310 mm',
        frenoTrasero:'Disco 250 mm',
        // Suspensión
        suspensionDelantero:'Horquilla telescópica invertida',
        suspensionTrasero:'Monoamortiguador progresivo Link type coil',
    },
    {
        // Simple description
        marca:'suzuki', //GSX-S125
        modelo:'GSX-S125',
        image:'../src/assets/images/nakeds/suzuki/GSX-S125.jpg',
        año:2023 ,
        tipo:'naked',
        clindraje:125,
        precio:4115,
        // More info
        // DIMENSIONES
        longitudTotal: '2.000 mm',
        ancho: '745 mm',
        altura: '1.035 mm',
        alturaSuelo: '140 mm',
        alturaAsiento: '810 mm',
        peso: '133 kg',
        // Motor
        motor:'1 cilindro, 4 tiempos, refrigerado por líquido, DOHC',
        potencia:'15CV',
        transmision:'4 velocidades (?)',
        capacidadCombustible:'11 Litros',
        arraque:'Eléctrico',
        consumo:'2,4 litros a los 100km',
        // Frenos
        frenoDelantero:'Disco',
        frenoTrasero:'Disco',
        // Suspensión
        suspensionDelantero:'Horquilla telescópica, muelle helicoidal, amortiguación hidráulica',
        suspensionTrasero:'Muelle helicoidal, amortiguación gas',
    },
    {
        // Simple description
        marca:'suzuki', //KATANA
        modelo:'KATANA',
        image:'../src/assets/images/nakeds/suzuki/katana.jpg',
        año:2023 ,
        tipo:'naked',
        clindraje:999,
        precio:16315,
        // More info
        // DIMENSIONES
        longitudTotal: '2.125 mm',
        ancho: '830 mm',
        altura: '1.110 mm',
        alturaSuelo: '140 mm',
        alturaAsiento: '810 mm',
        peso: '215 kg',
        // Motor
        motor:'4 Tiempos, 4 cilindros en línea, DOHC',
        potencia:'150,19447 CV (112Kw)',
        transmision:'Inyección',
        capacidadCombustible:'12 Litros',
        arraque:'Eléctrico',
        consumo:'6,1 litros a los 100km',
        // Frenos
        frenoDelantero:'Doble disco',
        frenoTrasero:'Disco',
        // Suspensión
        suspensionDelantero:'Horquilla hidráulica telescópica invertida, muelle helicoidal',
        suspensionTrasero:'Monoamortiguador hidraúlico con bieletas, muelle helicoidal',
    },
    {
        // Simple description
        marca:'suzuki', //GSX-S950
        modelo:'GSX-S950',
        image:'../src/assets/images/nakeds/suzuki/GSX-S950.jpg',
        año:2023 ,
        tipo:'naked',
        clindraje:999,
        precio:10995,
        // More info
        // DIMENSIONES
        longitudTotal: '2115 mm',
        ancho: '810 mm',
        altura: '1080 mm',
        alturaSuelo: '810 mm',
        alturaAsiento: '810 mm',
        peso: '214 kg',
        // Motor
        motor:'4-tiempos, 4 cilindros, DOHC',
        potencia:'152 CV',
        transmision:' 6 velocidades',
        capacidadCombustible:'19 Litros',
        arraque:'Electronico transistorizado',
        consumo:'6,1 litros a los 100km',
        // Frenos
        frenoDelantero:'2 discos ',
        frenoTrasero:'Disco',
        // Suspensión
        suspensionDelantero:'Horquilla telescópica invertida',
        suspensionTrasero:'Monoamortiguador progresivo Link type coil',
    },
    {
        // Simple description
        marca:'suzuki', //GSX-S1000 GT
        modelo:'GSX-S1000 GT',
        image:'../src/assets/images/deportivas/suzuki/Suzuki-GSX-S1000 GT.png',
        año:2015 ,
        tipo:'deportiva',
        clindraje:999,
        precio:16015,
        // More info
        // DIMENSIONES
        longitudTotal: '2140 mm',
        ancho: '825 mm',
        altura: '1215 mm',
        alturaSuelo: '140 mm',
        alturaAsiento: '810 mm',
        peso: '226 kg',
        // Motor
        motor:'4-tiempos, 4 cilindros, DOHC',
        potencia:'152 CV (112Kw)',
        transmision:' 6 velocidades',
        capacidadCombustible:'19 Litros',
        arraque:'Inyección electrónica',
        consumo:'6,1 litros a los 100km',
        // Frenos
        frenoDelantero:'2 discos ',
        frenoTrasero:'Disco',
        // Suspensión
        suspensionDelantero:'Horquilla telescópica invertida',
        suspensionTrasero:'Monoamortiguador progresivo ',
    },
    // KAWASAKI SECTION -KAWASAKI SECTION
    {
        // Simple description
        marca:'kawasaki', //Ninja ZX-10RR
        modelo:'Ninja ZX-10RR',
        image:'../src/assets/images/deportivas/kawaski/NINJA ZX-10RR 2023.png',
        año:2010,
        tipo:'deportiva',
        clindraje:998,
        precio:32399,
        // More info
        // DIMENSIONES
        longitudTotal: '2.085 mm',
        ancho: '750 mm',
        altura: '1215 mm',
        alturaSuelo: '135 mm',
        alturaAsiento: '835 mm',
        peso: '206 kg',
        // Motor
        motor:'Refrigeración líquida, 4 tiempos, cuatro cilindro en línea',
        potencia:'204 CV (150Kw)',
        transmision:' 6 velocidades',
        capacidadCombustible:'17 Litros',
        arraque:'Eléctrico',
        consumo:'6,1 litros a los 100km',
        // Frenos
        frenoDelantero:'Discos lobulados dobles semiflotantes Brembo de 330 mm. Pinza: montaje radial Brembo M50 monobloc, 4 pistones opuestos.',
        frenoTrasero:'Disco lobulado de 220 mm. Pinza: pistón simple',
        // Suspensión
        suspensionDelantero:'Horquilla invertida de 43 mm con cámara de compresión externa y ajuste en compresión y extensión, capacidad de ajuste de precarga.',
        suspensionTrasero:'Horizontal Back-link con suspensión BFRC de gas con depósito externo. Ajuste en compresión. Ajuste en extensión. Precarga de muelle totalmente ajustable',
    },
    {
        // Simple description 
        marca:'kawasaki', //NINJA ZX-10R
        modelo:'NINJA ZX-10R',
        image:'../src/assets/images/deportivas/kawaski/NINJA ZX-10R 2023.png',
        año:2017,
        tipo:'deportiva',
        clindraje:998,
        precio:21350,
        // More info
        // DIMENSIONES
        longitudTotal: '2.085 mm',
        ancho: '750 mm',
        altura: '1.185 mm mm',
        alturaSuelo: '135 mm',
        alturaAsiento: '835 mm',
        peso: '206 kg',
        // Motor
        motor:'Refrigeración líquida, 4 tiempos, cuatro cilindro en línea',
        potencia:'213 CV (156,8 Kw)',
        transmision:'6 velocidades, tipo cassette',
        capacidadCombustible:'17 Litros',
        arraque:'Eléctrico',
        consumo:'6 litros a los 100km',
        // Frenos
        frenoDelantero:'Discos lobulados dobles semiflotantes de 330 mm. Pinza: montaje radial monobloc, Brembo M50, 4 pistones opuestos',
        frenoTrasero:'Disco lobulado de 220 mm. Pinza: pistón simple',
        // Suspensión
        suspensionDelantero:'Horquilla invertida de 43 mm con cámara de compresión externa y ajuste en compresión y extensión, capacidad de ajuste de precarga',
        suspensionTrasero:'Horizontal Back-link con suspensión BFRC de gas con depósito externo. Ajuste en compresión. Ajuste en extensión. Precarga de muelle totalmente ajustable',
    },
    {
        // Simple description
        marca:'kawasaki', //NINJA 650
        modelo:'NINJA 650',
        image:'../src/assets/images/deportivas/kawaski/NINJA 650 2023.png',
        año:2012,
        tipo:'deportiva',
        clindraje:649,
        precio:8199,
        // More info
        // DIMENSIONES
        longitudTotal: '2.055 mm',
        ancho: '740 mm',
        altura: '1.145 mm',
        alturaSuelo: '135 mm',
        alturaAsiento: '790 mm',
        peso: '193 kg',
        // Motor
        motor:'Refrigeración líquida, 4 tiempos, bicilíndrico en paralelo',
        potencia:'68 CV (50,2 kW)',
        transmision:' 6 velocidades',
        capacidadCombustible:'15 Litros',
        arraque:'Eléctrico',
        consumo:'4,5 litros a los 100km',
        // Frenos
        frenoDelantero:'Discos lobulados dobles semiflotantes de 300 mm. Pinza: pistón doble',
        frenoTrasero:'Disco lobulado de 220 mm. Pinza: pistón único',
        // Suspensión
        suspensionDelantero:'Horquilla telescópica de 41 mm',
        suspensionTrasero:'Suspensión tipo Back-link con ajuste en precarga',
    },
    {
        // Simple description 
        marca:'kawasaki', //Ninja Z400
        modelo:'Ninja Z400',
        image:'../src/assets/images/deportivas/kawaski/NINJA 400 2023.png',
        año:2017,
        tipo:'deportiva',
        clindraje:399,
        precio:6999,
        // More info
        // DIMENSIONES
        longitudTotal: '1.990 mm',
        ancho: '710 mm',
        altura: '1.120 mm',
        alturaSuelo: '140 mm',
        alturaAsiento: '785 mm',
        peso: '168 kg',
        // Motor
        motor:'Refrigeración líquida, 4 tiempos, bicilíndrico en paralelo',
        potencia:'45 CV (33,4Kw)',
        transmision:' 6 velocidades',
        capacidadCombustible:'14 Litros',
        arraque:'Eléctrico',
        consumo:'?',
        // Frenos
        frenoDelantero:'Disco lobulado de 310 mm. Pinza: Doble pistón',
        frenoTrasero:'Disco lobulado de 220 mm. Pinza: pistón doble',
        // Suspensión
        suspensionDelantero:'Horquilla telescópica de 41 mm',
        suspensionTrasero:'Sistema Uni-Trak con suspensión de gas y precarga ajustable',
    },
    {
        // Simple description 
        marca:'kawasaki', //Ninja H2R
        modelo:'Ninja H2R',
        image:'../src/assets/images/deportivas/kawaski/NINJA H2R 2022.png',
        año:2022,
        tipo:'deportiva',
        clindraje:998,
        precio:55500,
        // More info
        // DIMENSIONES
        longitudTotal: '2.070 mm',
        ancho: '850 mm',
        altura: '1.160 mm',
        alturaSuelo: '130 mm',
        alturaAsiento: '830 mm',
        peso: '216 kg',
        // Motor
        motor:'Refrigeración líquida, 4 tiempos, cuatro cilindros en línea con sobrealimentador',
        potencia:'326 CV (228 Kw)',
        transmision:'6 velocidades, mecanismo de cambio con anillos desplazables',
        capacidadCombustible:'17 Litros',
        arraque:'Eléctrico',
        consumo:'?',
        // Frenos
        frenoDelantero:'Discos dobles semiflotantes Brembo de 330 mm. Pinza: montaje radial, Brembo M50 monobloque, 4 pistones opuestos',
        frenoTrasero:'Disco 250 mm. Pinza: 2 pistones opuestos',
        // Suspensión
        suspensionDelantero:'Horquilla invertida de 43 mm con ajuste en extesión y compresión, ajuste de precarga',
        suspensionTrasero:'Nuevo amortiguador Uni-Trak Öhlins TTX36 de gas y depósito de expansión, ajuste en compresión, ajuste en extensión, ajuste de precarga',
    },
    // BMW SIUUUUUUUUUUUUUUUU
    {
        // Simple description 4
        marca:'bmw', //Ninja Z400
        modelo:'BMW S1000rr',
        image:'../src/assets/images/deportivas/bmw/s100rr.jpg',
        año:2017,
        tipo:'deportiva',
        clindraje:399,
        precio:6999,
        // More info
        // DIMENSIONES
        longitudTotal: '1.990 mm',
        ancho: '710 mm',
        altura: '1.120 mm',
        alturaSuelo: '140 mm',
        alturaAsiento: '785 mm',
        peso: '168 kg',
        // Motor
        motor:'Refrigeración líquida, 4 tiempos, bicilíndrico en paralelo',
        potencia:'45 CV (33,4Kw)',
        transmision:' 6 velocidades',
        capacidadCombustible:'14 Litros',
        arraque:'Eléctrico',
        consumo:'?',
        // Frenos
        frenoDelantero:'Disco lobulado de 310 mm. Pinza: Doble pistón',
        frenoTrasero:'Disco lobulado de 220 mm. Pinza: pistón doble',
        // Suspensión
        suspensionDelantero:'Horquilla telescópica de 41 mm',
        suspensionTrasero:'Sistema Uni-Trak con suspensión de gas y precarga ajustable',
    },
    {
        // Simple description 4
        marca:'bmw', //Ninja Z400
        modelo:'BMW S1000rr',
        image:'../src/assets/images/deportivas/bmw/s1000r.jpg',
        año:2017,
        tipo:'deportiva',
        clindraje:399,
        precio:6999,
        // More info
        // DIMENSIONES
        longitudTotal: '1.990 mm',
        ancho: '710 mm',
        altura: '1.120 mm',
        alturaSuelo: '140 mm',
        alturaAsiento: '785 mm',
        peso: '168 kg',
        // Motor
        motor:'Refrigeración líquida, 4 tiempos, bicilíndrico en paralelo',
        potencia:'45 CV (33,4Kw)',
        transmision:' 6 velocidades',
        capacidadCombustible:'14 Litros',
        arraque:'Eléctrico',
        consumo:'?',
        // Frenos
        frenoDelantero:'Disco lobulado de 310 mm. Pinza: Doble pistón',
        frenoTrasero:'Disco lobulado de 220 mm. Pinza: pistón doble',
        // Suspensión
        suspensionDelantero:'Horquilla telescópica de 41 mm',
        suspensionTrasero:'Sistema Uni-Trak con suspensión de gas y precarga ajustable',
    },
    
    
    
    
]