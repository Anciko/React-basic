function User({ user, remove }) {
    const handleRemove = () => {
        remove(user.uuid)
    }
    return(
        <div className="card mt-2 p-2">
            <div className="d-flex justify-content-between">
                <div className="">
                    <img src={user.image} width="50" alt="User" />
                </div>
                <div className="text-center align-self-center">
                    <strong className="">Ph:{user.phone}</strong> <br></br>
                    <strong className="">Cell:{user.cell}</strong>
                </div>
                <div className="align-self-center">
                    <p className="mb-0"> {user.name} </p>
                </div>
                <div className="align-self-center">
                    <button className="btn btn-danger btn-sm" 
                    onClick={handleRemove}>
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default User;