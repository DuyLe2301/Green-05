import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import List from "./List";
import Form from "./Form";
import ModalView from "./ModalView";
import "./style.css";
import {
  getUsers,
  getUser,
  createUsers,
  editUsers,
  deleteUsers,
} from "../../apis/users";

const DEFAULT_FORM_DATA = { name: "", email: "", job: "" };
const HomeTest05 = () => {
  const [search, setSearch] = useState("");
  const [formdata, setFormData] = useState(DEFAULT_FORM_DATA);
  const [list, setList] = useState([]);
  const [relist, setRelist] = useState([]);
  const [selectedID, setSelectedId] = useState();
  const [isloading, setIsloading] = useState();

  const validate = (list, formdata) => {
    if (formdata.name === "" || formdata.email === "") {
      return false;
    }

    if (!formdata.id) {
      const item = list.find((item) => {
        return item.name === formdata.name || item.email === formdata.email;
      });

      return item ? false : true;
    }

    if (formdata.id) {
      const item = list.find((item) => {
        return (
          item.id !== formdata.id &&
          (item.name === formdata.name || item.email === formdata.email)
        );
      });
      return item ? false : true;
    }
  };

  useEffect(() => {
    fetData();
  }, []);
  const fetData = () => {
    setIsloading(true);
    getUsers()
      .then((response) => {
        setList(response.data);
        setIsloading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsloading(false);
      });
  };

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formdata,
      [name]: value,
    });
  };
  const onCreate = () => {
    setList([
      ...list,
      {
        ...formdata,
        id: Math.random(),
      },
    ]);
    setFormData({ name: "", phone: "" });
  };
  const onDelete = (id) => {
    deleteUsers(id)
      .then((response) => {
        fetData();
        setFormData(DEFAULT_FORM_DATA);
      })
      .catch((error) => {
        console.log(error);
      });
    const newdelete = list.filter((item) => {
      return item.id !== id;
    });
    setList(newdelete);
  };
  const onSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
  };
  useEffect(() => {
    if (search) {
      const newrelist = list.filter((item) => {
        return item.name === search || item.email === search;
      });

      setRelist(newrelist);
    } else {
      setRelist(list);
    }
  }, [search, list]);
  const onSubmit = () => {
    const isValidate = validate(list, formdata);
    if (isValidate) {
      if (!formdata.id) {
        createUsers(formdata)
          .then((response) => {
            fetData();
            setFormData(DEFAULT_FORM_DATA);
          })
          .catch((error) => {
            console.log(error);
          });
        setList([
          ...list,
          {
            ...formdata,
            id: Math.random(),
          },
        ]);

        setFormData(DEFAULT_FORM_DATA);
      }

      if (formdata.id) {
        editUsers(formdata.id, formdata)
          .then((response) => {
            fetData();
            setFormData(DEFAULT_FORM_DATA);
          })
          .catch((error) => {
            console.log(error);
          });
        // const newlist = list.map(item => {
        //     return item.id === formdata.id ? formdata : item
        // })

        // setList(newlist)
        // setFormData(DEFAULT_FORM_DATA)
      }
    }
  };
  const onEdit = (data) => {
    setFormData(data);
  };
  const onView = (id) => {
    setSelectedId(id);
    const element = document.querySelector("#modal-view-user");
    const modal = window.bootstrap.Modal.getOrCreateInstance(element);
    modal.show();
  };

  return (
    <div>
      <header className="header row">
        <h2 className="col-6">Users</h2>

        <div className="col-4">
          <input
            className="form-control"
            placeholder="Type to search"
            value={search}
            onChange={onSearch}
          ></input>
        </div>
        <div className="col-2">
          <Link to={"/users/create"}>
            <button className="btn btn-primary border1">Create</button>
          </Link>
        </div>
      </header>
      {isloading && (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
      {!isloading && (
        <List
          list={relist}
          onDelete={onDelete}
          onEdit={onEdit}
          onView={onView}
        />
      )}
      <Form
        formData={formdata}
        onCreate={onCreate}
        onSearch={onSearch}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      {list.length === 0 && <div>No data found</div>}

      <ModalView id={selectedID} />
    </div>
  );
};
export default HomeTest05;
