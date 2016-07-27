/*******************************************************************************
*   The reducers are provided by constants since reducers are required in the
*   configuration phase when all of the defined reducers are combined into a
*   rootreducer and passed to the createStoreWith method provided by ng-redux.
*   This creates the central store for the application to represent the state
*   of the application.
*******************************************************************************/

(function () {
    function productReducer (state, action) {
        // var stateBefore = state || [{serial: "01", category: "camera", name: "EOS 40D"}, {serial: "02", category: "printer", name: "pixma 5000"}];
        var stateBefore = state || [];

        switch (action.type) {
            case "ADD_PRODUCT":
                return addProduct(stateBefore, {serial: action.serial, category: action.category, name: action.name});
                break;
            case "REMOVE_PRODUCT":
                return removeProduct(stateBefore, action.serial);
                break;
            case "FETCH_PRODUCTS":
                return fetchProducts(stateBefore, action.products);
                break;
            default:
                return stateBefore;
        }
    }

    function addProduct (list, product) {
        return list.concat(product);
    }

    function removeProduct (list, serial) {
        var index = -1;

        for (i in list) {
            var item = list[i];
            index = item.serial == serial ? list.indexOf(item) : index;
        }

        if (index >= 0) {
            return list
                .slice(0, index)
                .concat(list.slice(index + 1));
        }
    }

    function fetchProducts (list, products) {
        return products;
    }

    angular.module("productModule").constant("productReducer", productReducer);
}());
