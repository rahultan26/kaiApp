import ValidationIcon from "./ValidationIcon";
import ValidFields from "./validFields";
import { useLocation } from "react-router-dom";

function PennyDropPage(props) {
  let location = useLocation();
  return (
    <div className="App">
      <ValidationIcon />
      <h2>Bank Account is Valid</h2>
      <ValidFields
        name={location.state.name}
        accountNumber={location.state.accountNumber}
        ifscCode={location.state.ifscCode}
        city={location.state.city}
        bank={location.state.bank}
        branch={location.state.branch}
      />
    </div>
  );
}

export default PennyDropPage;
