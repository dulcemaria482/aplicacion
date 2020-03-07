// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBWHEUHrMyP8CHkSE006sBeRx05HZ0HFw8",
    authDomain: "maxapp-818a5.firebaseapp.com",
    databaseURL: "https://maxapp-818a5.firebaseio.com",
    projectId: "maxapp-818a5",
    storageBucket: "maxapp-818a5.appspot.com",
    messagingSenderId: "986863633874",
    appId: "1:986863633874:web:d7d72fb00dcdfb581ff40b",
    measurementId: "G-K6BZ4HFWH7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

  angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope) {
  $scope.Login = {}

  $scope.Obtener = function(x){
    console.log(x)
  }
})

  
.controller('RegisterCtrl', function($scope) {
  $scope.Obtener = function(userR){
    firebase.auth().createUserWithEmailAndPassword(userR.Email, userR.Password).then(function a (y){
      swall("se creo correctamente")
      firebase.database().ref("/usuario").set({
        correo:Register.Email,
        contrasena:Register.Password
      });
    }).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
  }
})

.controller('DashCtrl', function($scope) {
  $rootScope.categorias=[
  {
    nombrecategoria: "Linea Blanca",
    imagen:"img/LB.jpg"
  },
   {
    nombrecategoria: "Video Juegos",
    imagen:"img/LB.jpg"
  },
   {
    nombrecategoria: "Linea Blanca",
    imagen:"img/LB.jpg"
  },
   {
    nombrecategoria: "Linea Blanca",
    imagen:"img/LB.jpg"
  },
   {
    nombrecategoria: "Linea Blanca",
    imagen:"img/LB.jpg"
  },
   {
    nombrecategoria: "Linea Blanca",
    imagen:"img/LB.jpg"
  }

  ]
})

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
