import "./FriendProfile.css";
const FriendProfile = ({ friend }) => {
  const { picture, name, dob, location, phone, email } = friend;

  return (
    <div className="container">
      {Object.keys(friend).length !== 0 && (
        <div>
          <img src={picture.medium} alt={`${name.first}`} />
          <h3>
            {name.first} {name.last}
          </h3>
          <span>{dob.age}</span>
          <span>
            {location.street.number} {location.street.name}
          </span>
          <p> {location.city}</p>
          <p>{location.country}</p>
          <p>{phone}</p>
          <p>{email}</p>
        </div>
      )}
    </div>
  );
};

export default FriendProfile;
