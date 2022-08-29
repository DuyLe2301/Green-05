import { useState } from 'react';
import FormUser from '../../components/FormUser'
import { useNavigate } from 'react-router-dom';
import {createUsers} from "../../apis/users";

const DEFAULT_FORM_DATA = { name: "", email: "" };

const UserCreate = () => { 
    const navigate = useNavigate()
    const [formdata, setFormData] = useState(DEFAULT_FORM_DATA);
   

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({
          ...formdata,
          [name]: value,
        });
      }; 
      const onSubmit = () => {
            createUsers(formdata)
              .then((response) => {
                navigate('/users')
              })
              .catch((error) => {
                console.log(error);
              });
          const element = document.querySelector("#modal-form-user");
    const modal = window.bootstrap.Modal.getOrCreateInstance(element);
    modal.hide();
        
      };

    return(
        <div>
            UserCreate
          <FormUser formData={formdata} onChange={onChange} onSubmit={onSubmit}></FormUser>  
        </div>
    )
}
export default UserCreate;