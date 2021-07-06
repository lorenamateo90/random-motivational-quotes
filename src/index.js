const messages = [
"Cáete siete veces y levántate ocho",
"Si no pierdes, no puedes disfrutar de las victorias",
"Un sueño no se hace realidad por arte de magia, necesita sudor, determinación y trabajo duro",
"A veces la adversidad es lo que necesitas encarar para ser exitoso",
"Cuanto más duramente trabajo, más suerte tengo",
"Si te caíste ayer, levántate hoy",
"Siempre parece imposible... hasta que se hace"
];

const randomMsg = () =>{
    const message = messages [Math.floor(Math.random()*
        messages.length)];
        console.log (message);
};

module.exports = { randomMsg };