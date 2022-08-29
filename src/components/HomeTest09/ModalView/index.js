import { useMemo, useState, useEffect } from "react";
import { getUser } from '../../../apis/users'
const ModalView = ({ id }) => {
    const [data, setData] = useState({})

    useEffect(() => {
        if (id) {
            getUser(id).then((response) => {
                setData(response.data)
            }).catch((error) => { console.log(error) })
        }
    }, [id])
    return (
        <div id="modal-view-user" className="modal fade">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            View User
                        </h5>
                        <button className="btn-close" data-bs-dismiss='modal'>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            Name : {data.name}
                        </div>
                        <div className="mb-3">
                            Email : {data.email}
                        </div>
                        <div className="mb-3">
                            Phone : {data.phone}
                        </div>

                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" data-bs-dismiss='modal'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default ModalView;