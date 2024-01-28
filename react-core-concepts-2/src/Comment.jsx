
// eslint-disable-next-line react/prop-types
export default function Comment({ comment }) {
    // eslint-disable-next-line react/prop-types
    const {id,name,email}=comment
    return (
        <div className="comment">
            <h1>ID:{id}</h1>
            <h2>name:{name}</h2>
            <h3>Email:{email}</h3>

        </div>
    )
}