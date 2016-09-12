angular.module("myApp")
.controller("productsCtrl", function($scope, $stateParams, productService){
  if($stateParams.id === "shoes"){
    $scope.data = productService.shoeData;
  }
  if($stateParams.id === "socks"){
    $scope.data = productService.sockData;
  }
})
