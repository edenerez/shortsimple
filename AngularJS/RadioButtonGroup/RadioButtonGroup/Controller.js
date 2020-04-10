
// create the controller and inject Angular's $scope
App.controller('cnrl', function ($scope, RadioButtonGroupService) {
    $scope.selected = RadioButtonGroupService.group.valueSelected;


    /*
    $scope.$on('updateGroupValuesUpdated', function () {
        $scope.selected = RadioButtonGroupService.group.valueSelected;
    });
    */
});


