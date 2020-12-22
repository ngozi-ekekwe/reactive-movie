export default function Profile({ name, avatar, profileSelectHandler }) {
  return (
    <li className="profile" onClick={profileSelectHandler}>
      <a href="/">
        <div>{avatar}</div>
      </a>
      <p>{name}</p>
    </li>
  );
}
