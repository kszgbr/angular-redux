(function () {
/*******************************************************************************
    PRODUCT MODULE AND ITS DEPENDENCIES
*******************************************************************************/
    angular.module("productModule", [

    ])
    .config(["$stateProvider", productRouter]);
/*******************************************************************************
    ROUTER CONFIG
*******************************************************************************/
    function productRouter ($stateProvider) {
        var productState = {
            url: "/products",
            templateUrl: "/components/product/product.view.html",
            controller: "productCtrl",
            controllerAs: "product"
        };

        $stateProvider.state("product", productState);
    }
}());
