import { useState,useEffect } from 'react';
import FormUser from '../../components/FormUser'
import { useNavigate,useParams } from 'react-router-dom';
import {getUser,editUsers} from "../../apis/users";
import { Link } from 'react-router-dom';

const DEFAULT_FORM_DATA = { name: "", email: "" };

const UserEdit = () => { 

    const navigate = useNavigate()
    const {id} = useParams()
    const [formdata, setFormData] = useState(DEFAULT_FORM_DATA);

    useEffect(() => {
        getUser(id)
          .then((res) => {
            setFormData(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, [id]);
   

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({
          ...formdata,
          [name]: value,
        });
      }; 

      const onSubmit = () => {
        editUsers(formdata.id, formdata)
        .then((response) => {
          navigate('/users')
        })
        .catch((error) => {
          console.log(error);
        });
        
      };

    return(
        <div>
            UserCreate
          <FormUser formData={formdata} onChange={onChange} onSubmit={onSubmit}></FormUser>  
          
        </div>
    )
}
export default UserEdit;