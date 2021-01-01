export default function Profile({ name, avatar, profileSelectHandler }) {
  return (
    <li className="profile" onClick={profileSelectHandler}>
      <a href="/">
        <div className="avatar">{avatar}</div>
      </a>
      <p>{name}</p>
    </li>
  );
}
