import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import "./App.css";
import { selectError } from "../../redux/contactsSlice";
import Loader from "../Loader/Loader";

function App() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {error && (
        <p>
          Sorry can`t load data from server. Error: {error}. Try to reload page.
        </p>
      )}
      <ContactList />
      <Loader />
    </>
  );
}

export default App;
