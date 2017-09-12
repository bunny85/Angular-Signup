var app = angular.module("myApp",[]);
app.controller("FormController", ["$scope", function($scope) {
  $scope.newUser = {
    firstName: '',
    lastName: '',
    userEmail: '',
    acceptConds: false,
    subscribeNews: false
  };
  $scope.submitForm = function() {
    angular.forEach($scope.myForm.$error.required, function(field) {
      field.$setDirty();
    });
  };
  $scope.regularClick = function() {
    alert("OJO: Valida pero no hace Submit!");
  };
  $scope.showMessage = function(input) {
    var show = input.$invalid && (input.$dirty || input.$touched);
    return show;
  };
}]);
