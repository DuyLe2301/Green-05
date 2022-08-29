import { Link } from 'react-router-dom'
import './style.css'
const List = ({ list,onView, onDelete,}) => {
    return (
        <div className='row'>
            {list.map((item) => {
                return (
                    <div key={item.id} className='user col-3'>
                        <div>Name : {item.name}</div>
                        <div>Email: {item.email}</div>
                        <Link to={`/users/${item.id}`}>
                        <button   className='btn btn-primary vien' >
                        View
                        </button>
                        </Link>

                        <Link to={`/users/${item.id}/edit`}>
                        <button className='btn btn-primary vien'>Edit</button>
                        </Link>
                        <button onClick={()=>{
                            onDelete(item.id)
                        }} className='btn btn-primary vien'>Detele</button>
                    </div>
                )
            })}
        </div>
    )
}
export default List;