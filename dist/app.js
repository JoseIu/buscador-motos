//Variables




//Even tos
document.addEventListener('DOMContentLoaded',()=>{
    mostrarMotos();//Muestra los coches al cargar, ponemos "e"  por litrar motos y no tener una funcionalidad inesperada

});

function mostrarMotos (){
    const fragmentMotos = document.createDocumentFragment();

    motos.forEach( moto =>{
        const {image,modelo,potencia,precio,longitudTotal,ancho,altura,
            alturaSuelo,alturaAsiento,peso,motor,transmision,capacidadCombustible,arraque,consumo,frenoDelantero,
            frenoTrasero,suspensionDelantero,suspensionTrasero,} = moto;

        // Creamos la card
        const Card = document.createElement('section');
        Card.classList.add('card');

        const cardTop = document.createElement('div');
        cardTop.classList.add('card__top')
        const cardImg = document.createElement('img');
        cardImg.setAttribute('src', image);
        const cardContent = document.createElement('div');
    })

}