import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";

export const App = () => {
  const [selectedItem, setSelectedItem] = useState();
  return <RecipeListPage />;
};
