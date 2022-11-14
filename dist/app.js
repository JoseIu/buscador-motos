//Variables
const resultados = document.getElementById('resultados');

const marca      = document.getElementById('marca');
const year       = document.getElementById('year');
const tipo       = document.getElementById('tipo');
const cilindraje = document.getElementById('cilindraje');
const minimo     = document.getElementById('minimo');
const maximo     = document.getElementById('maximo');


//Eventos cuando se carge el contenido del HTML
document.addEventListener('DOMContentLoaded',()=>{
    limpiarDOM();
    mostrarMotos(motos);//Muestra los coches al cargar, ponemos "e"  por litrar motos y no tener una funcionalidad inesperada
    
    mostrar();
    
    
});

function mostrar(){
    const btn        = document.querySelectorAll('.card__buttom');
    const cardbot       = document.querySelectorAll('.card__bottom');
    const container  = document.querySelectorAll('.card');
    // console.log(btn);
    // console.log(card);

    btn.forEach( (buttom, i) =>{
        btn[i].addEventListener('click',()=>{
            console.log(btn[i]);
            cardbot.forEach((cadaBloque, i)=>{
                cardbot[i].classList.remove('card__bottom--active');
                container[i].classList.remove('card--active');
            })
            cardbot[i].classList.add('card__bottom--active');
            container[i].classList.add('card--active');
        })
    })
}
//Generar un objeto para la busqueda
const busqueda = {
   marca: '',
   year: '' ,
   tipo: '',
   cilindraje: '',
   minimo: '',
   maximo:'',
}

//eventos par alos select de buqueda
marca.addEventListener('change', e =>{
    busqueda.marca = e.target.value;
    // console.log(busqueda);
    filtrarMoto();
});

year.addEventListener('change', e =>{
    busqueda.year = parseInt(e.target.value);
    // console.log(busqueda);
    filtrarMoto();
});

tipo.addEventListener('change', e =>{
    busqueda.tipo = e.target.value;
    // console.log(busqueda);
    filtrarMoto()
});

cilindraje.addEventListener('change', e =>{
    busqueda.cilindraje = parseInt(e.target.value);
    // console.log(busqueda);
    filtrarMoto();
});

minimo.addEventListener('change', e =>{
    busqueda.minimo = parseInt(e.target.value);
    console.log(busqueda);
    filtrarMoto();
});
maximo.addEventListener('change', e =>{
    busqueda.maximo = parseInt(e.target.value);
    // console.log(busqueda);
    filtrarMoto();
});



function mostrarMotos (motos){
    console.log(motos);
    const fragmentMotos = document.createDocumentFragment();

    motos.forEach( moto =>{
        const {image,modelo,potencia,precio,longitudTotal,ancho,altura,
            alturaSuelo,alturaAsiento,peso,motor,transmision,capacidadCombustible,arraque,consumo,frenoDelantero,
            frenoTrasero,suspensionDelantero,suspensionTrasero,} = moto;

        // Creamos la card
        const card = document.createElement('section');
        card.classList.add('card');
        // CARD TOP
        const cardTop = document.createElement('div');
        cardTop.classList.add('card__top');
        const cardImg = document.createElement('img');
        cardImg.classList.add('card__img')
        cardImg.setAttribute('src', image);

        const cardContent = document.createElement('div');
        const cardTitle = document.createElement('h2');
        cardTitle.classList.add('card__title')
        cardTitle.textContent = modelo;
    
        const cardUl = document.createElement('ul');
        cardUl.classList.add('card__ul');
        const cardLi1 = document.createElement('li');
        const cardLi2 = document.createElement('li');
        const cardLi3 = document.createElement('li');
        cardLi1.textContent = modelo;
        cardLi2.textContent = potencia;
        cardLi3.textContent = `${precio} €`;
        cardLi1.classList.add('card__li');
        cardLi2.classList.add('card__li');
        cardLi3.classList.add('card__li');
        cardUl.append(cardLi1,cardLi2,cardLi3);
        // cardContent.append(cardUl)
        
        const cardButtom = document.createElement('buttom');
        cardButtom.textContent = '+';
        cardButtom.classList.add('card__buttom');

        cardContent.append(cardTitle,cardUl,cardButtom);
        cardTop.append(cardImg,cardContent);

        // CARD BOTTOM
        const cardBottom = document.createElement('div');
        cardBottom.classList.add('card__bottom');
        // DIMENSIONES
        const cardDescription = document.createElement('div');
        cardDescription.classList.add('card__description');
        const cardSubtitle = document.createElement('h2');
        cardSubtitle.textContent = 'DIMENSIONES';
        cardSubtitle.classList.add('card__subtitle');
        const cardList = document.createElement('ul');
        cardList.classList.add('card__list');

        const cardItem = document.createElement('li');
        const cardItem2 = document.createElement('li');
        const cardItem3 = document.createElement('li');
        const cardItem4 = document.createElement('li');
        const cardItem5 = document.createElement('li');
        const cardItem6 = document.createElement('li');
        cardItem.textContent=`Longitud Total: ${longitudTotal}`;
        cardItem2.textContent=`Ancho Total: ${ancho}`;
        cardItem3.textContent=`Altura Total: ${altura}`;
        cardItem4.textContent=`Altura desde el suelo: ${alturaSuelo}`;
        cardItem5.textContent=`Altura del asiento: ${alturaAsiento}`;
        cardItem6.textContent=`Peso: ${peso}`;
        cardItem.classList.add('card__item');
        cardItem2.classList.add('card__item');
        cardItem3.classList.add('card__item');
        cardItem4.classList.add('card__item');
        cardItem5.classList.add('card__item');
        cardItem6.classList.add('card__item');
        cardList.append(cardItem,cardItem2,cardItem3,cardItem4,cardItem5,cardItem6);

        cardDescription.append(cardSubtitle,cardList);
        // cardBottom.append(cardDescription); /** MIRAR AL FINAL*/

         // MOTOR
         const cardDescription2 = document.createElement('div');
         cardDescription.classList.add('card__description');
         const cardSubtitle2 = document.createElement('h2');
         cardSubtitle2.textContent = 'MOTOR';
         cardSubtitle2.classList.add('card__subtitle');
         const cardList2 = document.createElement('ul');
         cardList.classList.add('card__list');
 
         const cardItem7 = document.createElement('li');
         const cardItem8 = document.createElement('li');
         const cardItem9 = document.createElement('li');
         const cardItem10 = document.createElement('li');
         const cardItem11= document.createElement('li');

         cardItem7.textContent =`Tipo de motor: ${motor}`;
         cardItem8.textContent =`Transmisión: ${transmision}`;
         cardItem9.textContent =`Depósito: ${capacidadCombustible}`;
         cardItem10.textContent =`Sistema de arranque: ${arraque}`;
         cardItem11.textContent =`Consumo: ${consumo}`;
         cardList2.append(cardItem7,cardItem8,cardItem9,cardItem10,cardItem11);
         cardItem7.classList.add('card__item');
         cardItem8.classList.add('card__item');
         cardItem9.classList.add('card__item');
         cardItem10.classList.add('card__item');
         cardItem11.classList.add('card__item');
 
         cardDescription2.append(cardSubtitle2,cardList2);
        //  cardBottom.append(cardDescription2);/** MIRAR AL FINAL*/

        //FRENOS
        const cardDescription3 = document.createElement('div');
        cardDescription3.classList.add('card__description');
        const cardSubtitle3 = document.createElement('h2');
        cardSubtitle3.textContent = 'FRENOS';
        cardSubtitle3.classList.add('card__subtitle');
        const cardList3 = document.createElement('ul');
        cardList3.classList.add('card__list');

        const cardItem12 = document.createElement('li');
        const cardItem13 = document.createElement('li');
        cardItem12.classList.add('card__item');
        cardItem13.classList.add('card__item');

        cardItem12.textContent = `Freno Delantero: ${frenoDelantero}`;
        cardItem13.textContent = `Freno Trasero: ${frenoTrasero}`;
        cardList3.append(cardItem12,cardItem13);

        cardDescription3.append(cardSubtitle3,cardList3);
        // cardBottom.append(cardDescription);/** MIRAR AL FINAL*/

         //SUSPENSIÓN
         const cardDescription4 = document.createElement('div');
         cardDescription.classList.add('card__description');
         const cardSubtitle4 = document.createElement('h2');
         cardSubtitle4.textContent = 'SUSPENSIÓN';
         cardSubtitle4.classList.add('card__subtitle');
         const cardList4 = document.createElement('ul');
         cardList.classList.add('card__list');
 
         const cardItem14 = document.createElement('li');
         const cardItem15 = document.createElement('li');
         cardItem14.classList.add('card__item');
         cardItem15.classList.add('card__item');
 
         cardItem14.textContent = `Suspensión Delantera: ${suspensionDelantero}`;
         cardItem15.textContent = `Suspensión Trasera: ${suspensionTrasero}`;
         cardList4.append(cardItem14,cardItem15);
 
         cardDescription4.append(cardSubtitle4,cardList4);

         
         cardBottom.append(cardDescription,cardDescription2,cardDescription3,cardDescription4);/** MIRAR AL FINAL*/


        card.append(cardTop, cardBottom);
        fragmentMotos.append(card);
    })

    resultados.append(fragmentMotos);
}

const limpiarDOM = ()=>{
    while(resultados.firstChild){
        resultados.removeChild(resultados.firstChild);
    }
}


const filtrarMoto = ()=>{
    mostrar()
    const motosFiltrados = motos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarTipo).filter(filtrarCc).filter(filtrarMinimo).filter(filtrarMaximo);

    //COMPROBAMOS SI HAY RESULTADO O NO
    if(motosFiltrados.length){
        mostrarMotos(motosFiltrados);
    }else{
        // noResultados(); //CREAR ESTA FUNCIÓN!!!
    }
    // console.log(motosFiltrados);
}


const filtrarMarca = (moto)=>{
    const {marca} = busqueda;

    if(marca){
        return moto.marca === marca;
    }

    return moto;
}
const filtrarYear = (moto)=>{
    const {year} = busqueda;

    if(year){
        return moto.año === year;//moto.año viene de la bd
    }

    return moto;
}
const filtrarTipo = (moto)=>{
    const {tipo} = busqueda;

    if(tipo){
        return moto.tipo === tipo;
    }

    return moto;
}
const filtrarCc = (moto)=>{
    const {cilindraje} = busqueda;

    if(cilindraje){
        return moto.clindraje === cilindraje;
    }

    return moto;
}
const filtrarMinimo = (moto)=>{
    const {minimo} = busqueda;

    if(minimo){
        return moto.precio >= minimo;
    }

    return moto;
}
const filtrarMaximo = (moto)=>{
    const {maximo} = busqueda;

    if(maximo){
        return moto.precio <= maximo;
    }

    return moto;
}