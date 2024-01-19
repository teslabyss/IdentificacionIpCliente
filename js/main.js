//alert ("Hola Mundo!");

let ip = document.getElementById('ip');
let pais = document.getElementById('pais');
let continente = document.getElementById('continente');
let zona_horaria = document.getElementById('zona_horaria');

const solicitudAPI= () => {
  console.log("La página se ha cargado completamente");  
  axios    
    .get('https://rmm777api.000webhostapp.com/php-geoip-api/')
    
    .then(function (response) {    
    console.log(response.data.ip);
    ip.innerHTML = response.data.ip;    
    pais.innerHTML = response.data.Pais;
    continente.innerHTML = response.data.Continente;
    zona.innerHTML = response.data.Zona;
  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });
};
window.addEventListener('load', solicitudAPI);





