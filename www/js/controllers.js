angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('nutricionalCtrl', function($scope) {})
.controller('infografiaCtrl', function($scope) {})
.controller('memoriaCtrl', function($scope) {
  $(document).ready(function($scope){
  
var checkArray = []; // para verificar si las dos cartas con click son el mismo personaje
var idArray = []; //array para guardar los ids de las cartas que tienen click 
var contador = 0;
var fin = 0; 
var fields = document.querySelectorAll(".atras");


var images = [
"https://sportsworld-admin.xdesign.com.mx/uploads/es/images/proteinas.png",
"https://i1.wp.com/licuadorax.com/wp-content/uploads/2018/06/ejemplos-de-los-carbohidratos.png?resize=336%2C215&ssl=1",
"https://i0.wp.com/mipediatravegetariano.com/wp-content/uploads/2017/06/Unsaturated-fats.png?ssl=1",
"https://s-media-cache-ak0.pinimg.com/originals/76/e7/a3/76e7a392abff7c8a22969f7c95f37d4c.png",
"https://s-media-cache-ak0.pinimg.com/originals/cb/ca/50/cbca50fc5156fb15b68bd3ab5dae6e06.png",
"https://s-media-cache-ak0.pinimg.com/originals/de/b9/70/deb9709e87f1d5b7f6457e8286113012.png",
"https://s-media-cache-ak0.pinimg.com/originals/29/9e/c7/299ec7c3cd62b88dd4905ffc6a71d8f9.png",
"https://s-media-cache-ak0.pinimg.com/originals/74/11/00/74110094c67aa9a519c70ecb7cec7d76.png",
"http://diysolarpanelsv.com/images/neville-clipart-4.png",
"https://sportsworld-admin.xdesign.com.mx/uploads/es/images/proteinas.png",
"https://i1.wp.com/licuadorax.com/wp-content/uploads/2018/06/ejemplos-de-los-carbohidratos.png?resize=336%2C215&ssl=1",
"https://i0.wp.com/mipediatravegetariano.com/wp-content/uploads/2017/06/Unsaturated-fats.png?ssl=1",
"https://s-media-cache-ak0.pinimg.com/originals/76/e7/a3/76e7a392abff7c8a22969f7c95f37d4c.png",
"https://s-media-cache-ak0.pinimg.com/originals/cb/ca/50/cbca50fc5156fb15b68bd3ab5dae6e06.png",
"https://s-media-cache-ak0.pinimg.com/originals/de/b9/70/deb9709e87f1d5b7f6457e8286113012.png",
"https://s-media-cache-ak0.pinimg.com/originals/29/9e/c7/299ec7c3cd62b88dd4905ffc6a71d8f9.png",
"https://s-media-cache-ak0.pinimg.com/originals/74/11/00/74110094c67aa9a519c70ecb7cec7d76.png",
"http://diysolarpanelsv.com/images/neville-clipart-4.png"
];
// verificacion de los clicks
function clicked() { 
  if ($(this).find(".inner-wrap").hasClass("flipped")) {
    return;
  }
  $(this).find(".inner-wrap").toggleClass("flipped");
  checkArray.push($(this).find("img").attr("src"));
  idArray.push($(this).attr("id"));
  check();
}

$(".carta").on("click", clicked);
  
//reiniciar el juego
function reiniciar() {
  $(".atras").find("img").remove(); //quitar todas las imagenes actuales
  $(".carta .inner-wrap").removeClass("flipped"); // quitar la classe flipped para volver a su estado inicial
  checkArray = []; 
  idArray = [];
  contador = 0; 
  fin = 0;
  iniciarJuego();
}
//para verificar el fin del juego
function verificarFin() {
  if (fin === 18) { //si todas las cartas estan volteadas
    alert("Juego finalizado, lo has logrado en " + contador + " intentos");
    reiniciar();
  }
}
//para random de las imagenes 
function shuffleArray(array) { 
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function iniciarJuego() {

  

  var arr = shuffleArray(images); //array con las imagenes de forma aleatoria
 // append de las imagenes a la clase para la parte de atras de las cartas
  for (var i = 0; i < fields.length; i++) {
    var img = document.createElement("img");
    img.src = arr[i];
    fields[i].appendChild(img);
  }


}

function check() {
  //si los fields se  han hecho dos clicks 
  if (checkArray.length === 2) {
    $(".carta").off("click", clicked); 
    setTimeout(function(){
      //si no hay match
      if (checkArray[0] !== checkArray[1]) { 
        //voltear las dos cartas seleccionadas
        $("#" + idArray[0]).find(".inner-wrap").removeClass("flipped"); 
        $("#" + idArray[1]).find(".inner-wrap").removeClass("flipped"); 
        contador++;
        //vaciar los arrays para la siguiente eleccion
        checkArray = []; 
        idArray = []; 
        //habilitar el click de nuevo
        $(".carta").on("click", clicked);
      } else {

        contador++;
        
        fin += 2; // contador para el final del juego, se agregan dos para el contador de fin
        //vaciar los dos arrays
        checkArray = []; 
        idArray = []; 
        verificarFin(); 
        $(".carta").on("click", clicked); 
      }
      document.querySelector(".counter").innerHTML = contador;
    }, 800);  
  }
}



iniciarJuego();

});
})
.controller('videosCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
