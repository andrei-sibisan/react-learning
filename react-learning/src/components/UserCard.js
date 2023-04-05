function UserCard(props) {
  return (
    <>
      <div className="card-container">
        <h2>{props.name}</h2>
        <img
          className="avatar"
          alt={props.name}
          src={props.imageUrl}
          style={{
            width: props.imageSize,
            height: props.imageSize,
          }}
        />
      </div>
    </>
  );
}

export default UserCard;
