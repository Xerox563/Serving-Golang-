// Fetch user data from an API
// Create the context and  Store it in the context

import { createContext, useEffect, useState } from "react";

/*
What we want to do :
- API call happens once
- Data stored globally
- Any component can access it
*/

/*
# Steps to use useContext
- Create the context using createContext()
- Create Provider Component
- Wrap your app with the PRovider component
- Consume Context using useContext
- import provider in the main.jsx and context in the useContext
*/

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await res.json();
        console.log(data);
        setUser(data);
      } catch (error) {
        console.error("Failed to fetch user", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
