import { useMemo } from "react";
const Form = ({ formData, search, onSearch, onCreate, onChange, onSubmit }) => {
  const disabled = useMemo(() => {
    return formData.name === "" || formData.email === "";
  }, [formData]);

  return (
    <div id="modal-form-user" className="modal fade">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {formData.id ? "Edit" : "Create"} User
            </h5>
            <button className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">
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
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" data-bs-dismiss="modal">
              Cancel
            </button>
            <button
              className="btn btn-primary"
              disabled={disabled}
              onClick={onSubmit}
              data-bs-dismiss="modal"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //     <input value={search} onChange={onSearch}></input>
    //     <p>Name  <input name='name' value={formData.name} onChange={onChange}></input></p>
    //     <p>Phone  <input name='phone' value={formData.phone} onChange={onChange}></input></p>
    //     <button onClick={onCreate}>onCreate</button>
    // </div>
  );
};
export default Form;
