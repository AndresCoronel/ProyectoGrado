angular
  .module("app", ['chart.js']) // Le decimos que usaremos a chart.js
  .controller("ControladorPrincipal", ["$scope", function($scope) {
    $scope.etiquetas = ['Gastos', 'Ventas', 'Compras'];

    $scope.datos = [1244, 1500, 2053];
  }]);