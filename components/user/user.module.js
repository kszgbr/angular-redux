(function () {
/*******************************************************************************
    USER MODULE AND ITS DEPENDENCIES
*******************************************************************************/
    angular.module("userModule", [

    ])
    .config(["$stateProvider", userRouter]);
/*******************************************************************************
    ROUTER CONFIG
*******************************************************************************/
    function userRouter ($stateProvider) {
        var userState = {
            url: "/user",
            templateUrl: "/components/user/user.view.html",
            controller: "userCtrl",
            controllerAs: "user"
        };

        $stateProvider.state("user", userState);
    }
}());
