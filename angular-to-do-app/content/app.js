var myNinjaApp = angular.module('myNinjaApp',[])

myNinjaApp.controller('NinjaController',['$scope',function($scope){
  $scope.ninjas = [
    {
      name: 'harry',
      belt: 'black',
      rate: 123.45,
      thumb: "images-1.jpg",
      available: true
    },
    {
      name: 'khoi',
      belt: 'red',
      rate: 189.45,
      thumb:"images.jpg",
      available: true
    },
    {
      name: 'phuong',
      belt: 'pink',
      rate: 233.45,
      thumb:"imgres-1.jpg",
      available: true
    },
    {
      name: 'peter',
      belt: 'blue',
      rate: 243.45,
      thumb:"imgres.jpg",
      available: true
    }
  ];

  $scope.remove= function(ninja) {
    var removeNinja = $scope.ninjas.indexOf(ninja);
    $scope.ninjas.splice(removeNinja,1)
  };

  // $scope.addNinja= function() {
  //   var newNinja ={
  //     name: $scope.newNinja.name,
  //     belt: $scope.newNinja.belt,
  //     rate: $scope.newNinja.rate,
  //   }
  //   $scope.ninjas.push(newNinja);
  // };

  $scope.addNinja = function(){
    $scope.ninjas.push({
      name: $scope.newNinja.name,
      belt: $scope.newNinja.belt,
      rate: $scope.newNinja.rate,
      available: true
    });
    $scope.newNinja.name= '';
    $scope.newNinja.belt= '';
    $scope.newNinja.rate= ''
  }

}]);
