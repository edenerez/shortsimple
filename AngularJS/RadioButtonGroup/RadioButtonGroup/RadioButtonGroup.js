App.directive('radioButtonGroup', function () {
    return {
        restrict: 'AE',
        templateUrl: 'RadioButtonGroup.html',
        controller: ['$scope', 'RadioButtonGroupService', function ($scope, RadioButtonGroupService) {

            
            $scope.group = RadioButtonGroupService.group;
            $scope.items = RadioButtonGroupService.items;
            $scope.selected = RadioButtonGroupService.group.valueSelected;


            $scope.$watch('selected', function () {
                alert("t0");
                RadioButtonGroupService.updateGroupSelected($scope.selected);
            });
            

        }]
    };
});