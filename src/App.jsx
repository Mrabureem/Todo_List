import { createTheme, ThemeProvider } from "@mui/material";
import "../src/assets/CSS/App.css";
import TodoList from "./components/TodoList";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Alexandria"],
    },
    direction: "rtl",
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        
          <TodoList />
        
      </ThemeProvider>
    </>
  );
}

export default App;
