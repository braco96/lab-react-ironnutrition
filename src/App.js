import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

// Importamos los datos iniciales de alimentos
import foodsData from "./foods.json";

// Importamos los componentes que hemos creado
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";

function App() {
  // Estado que almacena la lista completa de alimentos
  const [foods, setFoods] = useState(foodsData);

  // Estado para controlar el texto de búsqueda
  const [search, setSearch] = useState("");

  // Estado para mostrar u ocultar el formulario de creación
  const [showForm, setShowForm] = useState(true);

  // Añade un nuevo alimento al principio de la lista
  const handleAddFood = (newFood) => {
    // Actualizamos la lista de alimentos conservando los existentes
    setFoods([newFood, ...foods]);
  };

  // Elimina un alimento por su nombre
  const handleDeleteFood = (name) => {
    // Filtramos el alimento seleccionado fuera de la lista
    setFoods(foods.filter((food) => food.name !== name));
  };

  // Filtramos los alimentos según el texto de búsqueda
  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* Botón para mostrar u ocultar el formulario */}
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide Form" : "Add New Food"}
      </button>

      {/* Renderizado condicional del formulario de alta */}
      {showForm && <AddFoodForm onAddFood={handleAddFood} />}

      {/* Componente de búsqueda */}
      <Search query={search} onSearch={setSearch} />

      {/* Título de la lista de alimentos */}
      <h2>Food List</h2>

      {/* Mensaje de feedback cuando no hay alimentos que mostrar */}
      {filteredFoods.length === 0 && <p>No more content to show</p>}

      {/* Renderizamos cada alimento usando el componente FoodBox */}
      {filteredFoods.map((food) => (
        <FoodBox key={food.name} food={food} onDelete={handleDeleteFood} />
      ))}
    </div>
  );
}

export default App;
