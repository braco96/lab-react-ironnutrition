import { render, screen } from "@testing-library/react";
import App from "./App";

// Test sencillo para comprobar que el título de la lista se renderiza
// Esto verifica que el componente principal cargó correctamente
it("renders food list title", () => {
  render(<App />);
  const title = screen.getByText(/Food List/i);
  expect(title).toBeInTheDocument();
});
