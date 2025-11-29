export default function LightsHeader() {
  return (
    <header className="header">
      <nav className="nav">
        <span className="brand">BIG CHRISTMAS TREE</span>
      </nav>
      <div className="lights-wrap" aria-hidden="true">
        <ul className="lights">
          {Array.from({ length: 18 }).map((_, i) => (
            <li className="bulb" key={i} style={{ ['--i' as any]: i }} />
          ))}
        </ul>
      </div>
    </header>
  );
}

