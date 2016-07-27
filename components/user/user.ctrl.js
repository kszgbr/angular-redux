(function () {
    function userCtrl ($scope, $ngRedux, userActions) {
        var ctrl = {};

        ctrl.header = "user details";

        ctrl.newName = "";
        ctrl.newEmail = "";
        ctrl.newAge = "";

        var unsubscribe = $ngRedux.connect(mapStateToCtrl, userActions())(ctrl);
        $scope.$on("$destroy", unsubscribe);

        function mapStateToCtrl(state) {
            return {
                userData: state.user
            };
        }

        ctrl.logState = function () {
            console.log($ngRedux.getState());
        }

        ctrl.editNameWrapper = function () {
            ctrl.editName(ctrl.newName);
            ctrl.newName = "";
        };

        ctrl.editEmailWrapper = function () {
            ctrl.editEmail(ctrl.newEmail);
            ctrl.newEmail = "";
        };

        ctrl.editAgeWrapper = function () {
            ctrl.editAge(ctrl.newAge);
            ctrl.newAge = "";
        };

        return ctrl;
    }
    angular.module("userModule").controller("userCtrl", ["$scope", "$ngRedux", "userActions", userCtrl]);
}());
