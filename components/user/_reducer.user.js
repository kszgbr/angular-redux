(function () {
    function userReducer (state, action) {
        var stateBefore = state || {name: "bob smith", email: "bob@smith.io", age: 30};

        switch (action.type) {
            case "CREATE_USER":
                return createUser(stateBefore, {name: action.name, email: action.email, age: action.age});
                break;
            case "EDIT_NAME":
                return editName(stateBefore, action.name);
                break;
            case "EDIT_EMAIL":
                return editEmail(stateBefore, action.email);
                break;
            case "EDIT_AGE":
                return editAge(stateBefore, action.age);
                break;
            default:
                return stateBefore;
        }
    }

    function createUser (state, data) {
        return {
            name: data.name,
            email: data.email,
            age: data.age
        }
    }

    function editName (state, newName) {
        return {
            name: newName,
            email: state.email,
            age: state.age
        }
    }

    function editEmail (state, newEmail) {
        return {
            name: state.name,
            email: newEmail,
            age: state.age
        }
    }

    function editAge (state, newAge) {
        return {
            name: state.name,
            email: state.email,
            age: newAge
        }
    }

    angular.module("userModule").constant("userReducer", userReducer);
}());
