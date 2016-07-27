(function () {
    var middlewares = [
        function logger (store) {
            return function loggerWrapper (next) {
                return function loggerWrappedDispatch (action) {
                    if (typeof action !== "function") {
                        console.log("************************************************************************************************");
                        console.log("current state: ", store.getState());
                        console.log("dispatching: ", action);
                        var result = next(action);
                        console.log("next state: ", store.getState());
                        console.log("************************************************************************************************");
                        return result;
                    }
                    return next(action);
                }
            }
        },
        function thunk (store) {
            return function thunkWrapper (next) {
                return function thunkWrappedDispatch (action) {
                    return typeof action === "function" ?
                        action(store.dispatch, store.getState) : next(action);
                }
            }
        }
    ];

    angular.module("demo-app").constant("middlewares", middlewares);
}());
