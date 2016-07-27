(function () {
    console.log("loading application");

    angular.module("demo-app").provider("configService", function () {
        var appConfig = null;

        this.setConfig = function (config) {
            // angular.extend(appConfig, config);
            appConfig = config;
        }

        this.$get = [function () {
            if (!appConfig) {
                throw new Error("The config must be loaded before bootstrap!");
            }

            var srvc = {
                config: appConfig
            };

            return srvc;
        }]
    });

    angular.element(document).ready(function () {

        var $injector = angular.injector(["ng"]);
        var $http = $injector.get("$http");

        $http.get("data/config.json")
            .success(function(res){
                console.log("------------------- config loaded");
                console.log(res);

                angular.module("demo-app").config(["configServiceProvider", function (configServiceProvider) {
                    configServiceProvider.setConfig(res);
                }]);

                angular.bootstrap(document, ["demo-app"]);
                console.log("application loaded");
            })
            .error(function (err) {
                console.log(err);
                console.log("application could not be loaded due to some errors");
            });
    });


})();
