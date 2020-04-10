
// create the controller and inject Angular's $scope
App.controller('cnrl', function ($scope, RadioButtonGroupService) {

    $scope.arrayName = [{ id: 1, value: 'value1', label: 'label1' }, { id: 2, value: 'value2', label: 'label2' }, { id: 3, value: 'value3', label: 'label3' }];
    $scope.NameOfGroup = 'groupName';
    $scope.$on('update' + $scope.NameOfGroup + 'GroupValuesUpdated', function () {
        $scope.selected = RadioButtonGroupService.groups[$scope.NameOfGroup].valueSelected;
    });
    
});


