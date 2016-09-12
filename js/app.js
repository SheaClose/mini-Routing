angular.module("myApp", ['ui.router'])
.config(function($urlRouterProvider, $stateProvider){
  $stateProvider
  .state("home", {
    url: "/",
    templateUrl: "./js/home/homeTmpl.html",
    controller: "homeCtrl"
  })
  .state("products", {
    url: "/products/:id",
    templateUrl: "./js/products/productTmpl.html",
    controller: "productsCtrl"
  })
  .state("settings", {
    url: "/settings",
    templateUrl: "./js/settings/settingsTmpl.html"
  });

  $urlRouterProvider.otherwise("/");

})
