import "./App.css";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1 className="my-5">React Bootstrap Form</h1>
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}

export default App;
