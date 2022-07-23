import Content from "components/Content";
import Header from "components/Header";
import Home from "components/Home"
import { BrowserRouter as Router, } from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <Content />
    </Router>
  );
}

export default App;
