import './Nav.css';

function Nav({ navigation = {} }) {
  return (
    <nav className="nav">
      <ul className="nav-ul">
        {Object.keys(navigation).map(elem => (
          <li key={elem} className="nav-li">
            <a href={navigation[elem]} className="nav-link">{elem}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;