App.factory('RadioButtonGroupService', function ($rootScope) {
    var service = {};


    service.group = {};
    service.group.name = "name2";
    service.group.title = "title2";
    service.group.valueSelected = "value2";
    

    service.items = [{ id: 1, value: 'value1', label: 'label1' }, { id: 2, value: 'value2', label: 'label2' }, { id: 3, value: 'value3', label: 'label3' }];
    
    service.updateGroupSelected = function (value) {
        this.group.valueSelected = value;
        alert("t1");
        $rootScope.$broadcast("updateGroupValuesUpdated");
        alert("t2");
    }
    

    return service;
});