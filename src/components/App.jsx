import { FaPhoneVolume } from "react-icons/fa";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import SearchBox from "./SearchBox";

import "./App.css";

function App() {
  return (
    <div className="upper-container">
      <div className="container">
        <h1>
          <FaPhoneVolume className={"phonebook-logo"} />
          Phonebook
        </h1>
        <ContactForm />
        <SearchBox />
      </div>
      <ContactList />
    </div>
  );
}

export default App;
