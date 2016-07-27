(function () {
    function overviewCtrl ($scope, $ngRedux) {
        var ctrl = {};

        ctrl.header = "overview page";

        var unsubscribe = $ngRedux.connect(mapStateToCtrl)(ctrl);
        $scope.$on("$destroy", unsubscribe);

        function mapStateToCtrl(state) {
            return {
                products: state.product,
                user: state.user
            };
        }

        return ctrl;
    }
    angular.module("overviewModule").controller("overviewCtrl", ["$scope", "$ngRedux", overviewCtrl]);
}());
