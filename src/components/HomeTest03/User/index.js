
const User = ({Duy,onDelete}) =>{
    return (
        <div>
            <div key={Duy.id}>
                <div>{Duy.name}</div>
                <div>{Duy.phone}</div>
                <button onClick={()=>{
                    onDelete(Duy.id)
                }
                }>Delete</button>
            </div>
        </div>
    )
}
export default User;