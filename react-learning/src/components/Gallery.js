import UserCard from "./UserCard";

function Gallery(props) {
  const userArray = props.userArray;
  console.log(userArray);

  return (
    <div className="gallery">
      {userArray.map((user) => {
        return (
          <UserCard
            key={user.id}
            name={user.name}
            imageUrl={user.imageUrl}
            imageSize={user.imageSize}
          />
        );
      })}
    </div>
  );
}

export default Gallery;
