export default function Section({ title, children }) {
  return (
    <section className="card-section">
      <h3>{title}</h3>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {children}
      </div>
    </section>
  );
}
