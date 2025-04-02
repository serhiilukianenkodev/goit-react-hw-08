import { useSelector } from "react-redux";
import { RingLoader } from "react-spinners";
import { selectLoading } from "../../redux/contactsSlice";
import css from "./Loader.module.css";

const override = {
  display: "block",
  position: "fixed",
};

const Loader = () => {
  const loading = useSelector(selectLoading);

  return (
    <>
      <RingLoader
        className={css.loader}
        color="lightgray"
        loading={loading}
        cssOverride={override}
        size={240}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
};

export default Loader;
