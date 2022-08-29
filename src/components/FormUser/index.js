import { useMemo } from "react";
import {Link} from 'react-router-dom'
const FormUser = ({ formData, onChange, onSubmit }) => {
  const disabled = useMemo(() => {
    return formData.name === "" || formData.email === "";
  }, [formData]);

  return (
    <div>
      <div className="mb-3">
        <label for="form-name" className="form-label">
          Name
        </label>
        <input
          type="text"
          id="form-name"
          name="name"
          class="form-control"
          placeholder="Nguyen Van A"
          onChange={onChange}
        ></input>
      </div>
      <div className="mb-3">
        <label for="form-name" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="form-email"
          name="email"
          class="form-control"
          placeholder="name@example.com"
          onChange={onChange}
        ></input>
      </div>
      <Link to={'/users'}>
      <button className="btn btn-secondary">Cancel</button>
      </Link>
      <button
        className="btn btn-primary"
        disabled={disabled}
        onClick={onSubmit}
        data-bs-dismiss="modal"
      >
        Submit
      </button>
    </div>
  );
};
export default FormUser;
