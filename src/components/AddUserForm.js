import React, { useState } from "react";

const AddUserForm = props => {
    console.log(props);
    const initialFormState = { id: null, name: "", username: "" };
    const [user, setUser] = useState(initialFormState);

    const handleInputChange = event => {
        const { name, value } = event.target;

        setUser({ ...user, [name]: value });
    };

    const onSubmitForm = event => {
        event.preventDefault();
        if (!user.name || !user.username) return;

        props.addUser(user);
        setUser(initialFormState);
    };

    return (
        <form onSubmit={onSubmitForm}>
            <label>Name</label>
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}
            />
            <label>Username</label>
            <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleInputChange}
            />
            <button>Add new user</button>
        </form>
    );
};

export default AddUserForm;
