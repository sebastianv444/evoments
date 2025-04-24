import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
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
