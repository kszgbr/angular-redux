(function () {
/*******************************************************************************
    OVERVIEW MODULE AND ITS DEPENDENCIES
*******************************************************************************/
    angular.module("overviewModule", [
        // "productModule",
        // "userModule"
    ])
    .config(["$stateProvider", overviewRouter]);
/*******************************************************************************
    ROUTER CONFIG
*******************************************************************************/
    function overviewRouter ($stateProvider) {
        var overviewState = {
            url: "/overview",
            templateUrl: "/components/overview/overview.view.html",
            controller: "overviewCtrl",
            controllerAs: "overview"
        };

        $stateProvider.state("overview", overviewState);
    }
}());
