/* eslint-disable react/prop-types */
export default function Friend({ friend }) {
  const {userId,title}=friend
    return (
        <div className="box">
            <h4>userid:{userId}</h4>
            <h3>title:{title}</h3>
        </div>
    )
}