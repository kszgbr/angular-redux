/*******************************************************************************
*   The actions are provided by services since actions are not required in
*   the configuration phase. Actions are only required when the smart-components
*   like controllers and directives are initialized and they have to call the
*   connect method provided by ng-redux.
*******************************************************************************/

(function () {
    function productActions ($http) {

        function addProduct (data) {
            return function (dispatch) {
                dispatch(addProductActionCreator(data));
            }
        }

        function addProductActionCreator (data) {
            return {
                type: "ADD_PRODUCT",
                category: data.category,
                name: data.name,
                serial: data.serial
            };
        }

        function removeProduct (serial) {
            return function (dispatch) {
                dispatch(removeProductActionCreator(serial));
            }
        }

        function removeProductActionCreator (serial) {
            return {
                type: "REMOVE_PRODUCT",
                serial: serial
            };
        }

        function fetchProducts (endpoint) {
            return function (dispatch) {
                $http.get(endpoint).then(function (res) {
                    console.log(res);
                    dispatch(fetchActionCreator(res.data));
                })
            }
        }

        function fetchActionCreator (data) {
            return {
                type: "FETCH_PRODUCTS",
                products: data
            }
        }

        return {
            addProduct: addProduct,
            removeProduct: removeProduct,
            fetchProducts: fetchProducts
        };
    }

    angular.module("productModule").service("productActions", ["$http", productActions]);
}());
