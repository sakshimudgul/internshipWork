import ThemeContext, { ThemeProvider } from "./context/ThemeContext";
import HomePage from "./pages/HomePage";

function App() {
  return (
    // Wrap the entire app with Provider
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
