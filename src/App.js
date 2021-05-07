import "./App.css";
import CustomerList from "./components/CustomerList";
import { CustomerProvider } from "./context/context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddCustomer from "./components/AddCustomer";
import CustomerDetails from "./components/CustomerDetails";

function App() {
  return (
    <CustomerProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={CustomerList} />
            <Route path="/add" component={AddCustomer} />
            <Route path="/customer/:customerId" component={CustomerDetails} />
          </Switch>
        </Router>
    </CustomerProvider>
  );
}

export default App;
