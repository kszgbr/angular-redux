(function () {
    function productCtrl ($scope, $ngRedux, productActions) {
        var ctrl = {};

        ctrl.header = "products";

        ctrl.serial = "";
        ctrl.name = "";
        ctrl.category = "";

        // console.log($ngRedux.getState());
        // $ngRedux.dispatch({type: "ADD_PRODUCT", serial: "DSLR-01", category: "DSLR", name: "EOS-40D"});
        // $ngRedux.dispatch({type: "ADD_PRODUCT", serial: "DSLR-02", category: "DSLR", name: "EOS-50D"});
        // $ngRedux.dispatch({type: "ADD_PRODUCT", serial: "DSLR-03", category: "DSLR", name: "EOS-70D"});
        // console.log($ngRedux.getState());
        // $ngRedux.dispatch({type: "REMOVE_PRODUCT", serial: "DSLR-02"});
        // console.log($ngRedux.getState());

        // console.log(productActions);

        var unsubscribe = $ngRedux.connect(mapStateToCtrl, productActions)(ctrl);
        $scope.$on("$destroy", unsubscribe);

        function mapStateToCtrl(state) {
            return {
                products: state.product
            };
        }

        ctrl.logState = function () {
            console.log($ngRedux.getState());
        }


        // ctrl.fetchProducts('/data/products.json');
        return ctrl;
    }
    angular.module("productModule").controller("productCtrl", ["$scope", "$ngRedux", "productActions", productCtrl]);
}());
