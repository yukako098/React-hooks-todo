import React, { useState } from "react";
import UserTable from "./UserTable";
import AddUserForm from "./AddUserForm";
import EditUserForm from "./forms/EditUserForm";

import "./App.css";

const App = () => {
    const userData = [
        { id: 1, name: "aaa", userName: "aiueo" },
        { id: 2, name: "bbb", userName: "kakikukeko" },
        { id: 3, name: "ccc", userName: "sasisuseso" }
    ];
    const [users, setUsers] = useState(userData);

    const [editing, setEditing] = useState(false);
    const initialFormState = { id: null, name: "", username: "" };
    const [currentUser, setCurrentUser] = useState(initialFormState);

    const addUser = user => {
        user.id = users.length + 1;
        setUsers([...users, user]);
    };

    const deleteUser = id => {
        setUsers(users.filter(user => user.id !== id));
    };

    const editRow = user => {
        setEditing(true);

        setCurrentUser({
            id: user.id,
            name: user.name,
            userName: user.userName
        });
    };

    const updateUser = (id, updatedUser) => {
        setEditing(false);

        setUsers(users.map(user => (user.id === id ? updatedUser : user)));
    };

    return (
        <div className="container">
            <h1>CRUD App with Hooks</h1>
            <div className="flex-row">
                <div className="flex-large">
                    {editing ? (
                        <div>
                            <h2>Edit user</h2>
                            <EditUserForm
                                editing={editing}
                                setEditing={setEditing}
                                currentUser={currentUser}
                                updateUser={updateUser}
                            />
                        </div>
                    ) : (
                        <div>
                            <h2>Add user</h2>
                            <AddUserForm addUser={addUser} />
                        </div>
                    )}
                </div>
                <div className="flex-large">
                    <h2>View users</h2>
                    <UserTable
                        users={users}
                        editRow={editRow}
                        deleteUser={deleteUser}
                    />
                </div>
            </div>
        </div>
    );
};
export default App;
