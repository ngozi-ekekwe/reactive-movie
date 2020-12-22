export default function Profile({name, avatar, profileSelectHandler}) {
  return (
    <li className="profile" onClick={profileSelectHandler}>
      <div>
        <a href="/">
          {avatar}
        </a>
      </div>
      <p>{name}</p>
    </li>
  )
}