// Step 1: Context and Provider Component
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  const login = (id, password) => {
    if (id === "sonu" && password == 12345) {
      setUser({ id });
      navigate("/post_job");
    } else {
      setError(`The id of ${id} and this password ${password} do not match`);
    }
  };

   const handleCategoryChange = (category) => {
     setSelectedCategory(category); // Set the selectedCategory state
   };

  return (
    <MyContext.Provider
      value={{ user, login, error, selectedCategory, handleCategoryChange }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
