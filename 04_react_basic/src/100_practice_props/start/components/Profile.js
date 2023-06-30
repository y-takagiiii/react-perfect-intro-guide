import "./Profile.css";

const Profile = ({ name, age, country }) => {
  return (
    <div className="profile">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>From: {country}</p>
    </div>
  );
};


export default Profile;
