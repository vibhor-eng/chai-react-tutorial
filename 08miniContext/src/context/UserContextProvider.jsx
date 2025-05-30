import React, { useState } from "react";
import UserContext from "./UserContext";

//children menas jo aaya aage pass kar do
const UserContextProvider = ({children}) => {
    // or 
    // const [user, setUser] = useState(null)//in this case we have to import use state

    const [user, setUser] = React.useState(null)


    //here we create UserContext Provider
    return (
        <UserContext.Provider value = {{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider