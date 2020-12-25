export default function Section({ title, children }) {
  return (
    <section className="card-section">
      <h3>{title}</h3>
      <div className="row">
        <div className="row__inner">
        {children}
        </div>
      </div>
    </section>
  );
}
