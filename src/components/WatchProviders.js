export default function WatchProvidersComponent({ providers }) {
  const getLogo = (path) => {
    return `https://image.tmdb.org/t/p/original/${path}`;
  };
  return (
    <div className="watch-providers">
      <p>Flatrate</p>
      <div className="provider-type">
        {providers.flatrate &&
          providers.flatrate.map((t, i) => {
            return (
              <div key={i} className="logo-box">
                <img src={getLogo(t.logo_path)} alt="" />
              </div>
            );
          })}
      </div>
      <p>Buy</p>
      <div className="provider-type">
        {providers.buy &&
          providers.buy.map((t, i) => {
            return (
              <div key={i} className="logo-box">
                <img src={getLogo(t.logo_path)} alt="" />
              </div>
            );
          })}
      </div>

      <p>Rent</p>
      <div className="provider-type">
        {providers.rent &&
          providers.rent.map((t, i) => {
            return (
              <div key={i} className="logo-box">
                <img src={getLogo(t.logo_path)} alt="" />
              </div>
            );
          })}
      </div>
    </div>
  );
}
