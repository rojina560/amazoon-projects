const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 150,
    borderRedius:  70
  
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
              alt={"Photo of " + user.name}
              style={{
                  width: user.imageSize,
                  height: user.imageSize,
                  borderRadius:user.borderRedius
              }}
        
      />
    </>
  );
}
