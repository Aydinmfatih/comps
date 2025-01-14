import Route from "./components/Route";
import SideBar from "./components/SideBar";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import DropDownPage from "./pages/DropDownPage";

function App() {
  return (
    <div>
      <SideBar />
      <div>
        <Route path="/accordion">
          <AccordionPage />
        </Route>

        <Route path="/dropdown">
          <DropDownPage />
        </Route>
        <Route path="/">
          <DropDownPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
