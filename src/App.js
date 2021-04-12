import { Provider } from "react-redux";
import {reducer} from "./reducer";
import { createStore } from "redux";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio"

const initialStore = {
  lang: 'english',
};

const store = createStore(
  reducer,
  initialStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <main>
      <Provider store={store}>
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </Provider>
    </main>
  );
}

export default App;
