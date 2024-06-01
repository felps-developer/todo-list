import "primereact/resources/themes/lara-light-cyan/theme.css"
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Paths from "./routes/Paths"
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services";


const App = () => {


  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Paths />
      </QueryClientProvider>
    </>
  )
}

export default App;
