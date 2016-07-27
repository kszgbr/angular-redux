(function () {
    function userActions () {
        function editName (name) {
            return {
                type: "EDIT_NAME",
                name: name
            };
        }

        function editEmail (email) {
            return {
                type: "EDIT_EMAIL",
                email: email
            };
        }

        function editAge (age) {
            return {
                type: "EDIT_AGE",
                age: age
            };
        }

        function addUser (data) {
            return {
                type: "CREATE_USER",
                name: data.name,
                email: data.email,
                age: data.age
            }
        }

        return {
            addUser: addUser,
            editName: editName,
            editEmail: editEmail,
            editAge: editAge
        };
    }
    angular.module("userModule").constant("userActions", userActions);
}());
