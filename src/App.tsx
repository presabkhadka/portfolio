import { ThemeProvider } from "./components/theme-provider";
import Landing from "./pages/landing";

function App() {
  return (
    <ThemeProvider>
      <Landing />
    </ThemeProvider>
  );
}

export default App;
