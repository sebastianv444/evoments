import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

function App() {
  useSmoothScroll();
  return (
    <div>
      <Header></Header>
      <main>
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
