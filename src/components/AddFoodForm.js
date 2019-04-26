import React, { useState } from "react";

// Formulario controlado para añadir nuevos alimentos a la lista
// Recibe la prop "onAddFood" que envía el alimento creado al componente padre
function AddFoodForm({ onAddFood }) {
  // Estados individuales para cada campo del formulario
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(1);

  // Maneja el envío del formulario creando un objeto "food"
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita el refresco de la página

    // Construimos el nuevo objeto de alimento con la información del formulario
    const newFood = {
      name,
      image,
      calories: Number(calories),
      servings: Number(servings),
    };

    // Enviamos el nuevo alimento al componente padre
    onAddFood(newFood);

    // Reiniciamos los campos del formulario para el siguiente uso
    setName("");
    setImage("");
    setCalories(0);
    setServings(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Campo para el nombre del alimento */}
      <label>Name</label>
      <input value={name} type="text" onChange={(e) => setName(e.target.value)} />

      {/* Campo para la URL de la imagen */}
      <label>Image</label>
      <input value={image} type="text" onChange={(e) => setImage(e.target.value)} />

      {/* Campo para las calorías */}
      <label>Calories</label>
      <input value={calories} type="number" onChange={(e) => setCalories(e.target.value)} />

      {/* Campo para el número de raciones */}
      <label>Servings</label>
      <input value={servings} type="number" onChange={(e) => setServings(e.target.value)} />

      {/* Botón de envío del formulario */}
      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
