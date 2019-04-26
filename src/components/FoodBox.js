import React from "react";

// Componente responsable de mostrar una tarjeta de comida individual
// Recibe la información del alimento mediante la prop "food"
// y la función "onDelete" para eliminarlo de la lista
function FoodBox({ food, onDelete }) {
  // Función que comunica al componente padre que se quiere borrar este alimento
  const handleDelete = () => {
    onDelete(food.name);
  };

  return (
    <div className="food-box">
      {/* Nombre del alimento */}
      <h3>{food.name}</h3>

      {/* Imagen del alimento */}
      <img src={food.image} alt={food.name} width={60} />

      {/* Información nutricional básica */}
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>

      {/* Cálculo de las calorías totales */}
      <p>
        <b>Total Calories: {food.calories * food.servings} kcal</b>
      </p>

      {/* Botón para eliminar este alimento de la lista */}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default FoodBox;
