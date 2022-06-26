/** @format */
import axios from "axios";
import "./ForgotPassword.css";
import { useState } from "react";
export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const emailSubmitHandler = () => {
    axios
      .get("http://localhost:5000/user/confirm-email", {email})
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const onEmailInputChangeHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  return (
    <div>
      <br />
      <table>
        <tr>
          <td>Enter registered email: &nbsp;</td>
          <td>
            <input value={email} onChange={onEmailInputChangeHandler} />
          </td>
          <td>
            <button onClick={emailSubmitHandler}>Submit</button>
          </td>
        </tr>
      </table>
    </div>
  );
};
