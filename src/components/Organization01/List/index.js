import "./style.css";
const List = ({ list, onView, onDelete, onEdit }) => {
  return (
    <div className="row">
      {list.map((item) => {
        return (
          <div key={item.id} className="user col-3">
            <div>Name : {item.name}</div>
            <div>Email: {item.Job}</div>
            <button
              onClick={() => {
                onView(item.id);
              }}
              type="button"
              className="btn btn-primary vien"
              data-bs-toggle="modal"
              data-bs-target="#modal-view-user"
            >
              View
            </button>

            <button
              onClick={() => {
                onEdit(item);
              }}
              type="button"
              className="btn btn-primary vien"
              data-bs-toggle="modal"
              data-bs-target="#modal-form-user"
            >
              Edit
            </button>
            <button
              onClick={() => {
                onDelete(item.id);
              }}
              className="btn btn-primary vien"
            >
              Detele
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default List;
