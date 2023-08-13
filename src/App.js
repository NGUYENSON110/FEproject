import { Outlet } from "react-router-dom";
import Header from "./component/header/header";

function App() {
  return (
    <div>
        <Header />
        <main className="pt-16">
          <Outlet/>
        </main>
    </div>
  );
}

export default App;
