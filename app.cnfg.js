(function () {
/*******************************************************************************
    This function is responsible to combine all the given reducers and create
    the store for the application which represents the state of the application.

    It has to be called in the applications config phase to make sure that the
    rootstore is created while the application bootstraps.
*******************************************************************************/
    function combineReducers ($ngReduxProvider,
        productReducer,
        userReducer,
        middlewares) {

        console.log(productReducer);
        console.log(userReducer);

        var reducers = {
            product: productReducer,
            user: userReducer
        };

        var rootReducer = Redux.combineReducers(reducers);

        // var actions = userActions();
        // actions.action1();
        // actions.action2();

        // $ngReduxProvider.createStoreWith(rootReducer);

        $ngReduxProvider.createStoreWith(rootReducer, middlewares);
    }
/*******************************************************************************
    This function is responsible to fetch all the necessary data from a given
    endpoint to populate our store. This is responsible to define the starting
    state of the application.

    It has to be called in the applications run phase to make sure that the
    store is already created with the rootReducer.
*******************************************************************************/
    function fetchInitData ($ngRedux, productActions, configService) {
        console.log("run block started");

        console.log(configService.config);

        $ngRedux.dispatch(productActions.fetchProducts("/data/products.json"));

        console.log("run block finished");
    }

    angular.module("demo-app")
        .config([
            "$ngReduxProvider",
            "productReducer",
            "userReducer",
            "middlewares",
            combineReducers])
        .run([
            "$ngRedux",
            "productActions",
            "configService",
            fetchInitData]);
}());
