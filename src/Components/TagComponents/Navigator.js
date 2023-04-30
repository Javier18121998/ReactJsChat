import { Link } from "react-router-dom";
const titles = [
  'Principal',
  'Secondary'
];
const listItems = titles.map((title, index) => (
  <li key={index}>
    <Link to={`/${title}`}>{title}</Link>
  </li>
));
export default function Navigator() {
  return(
    <main className="navigator">
      <ul>
        {listItems}
      </ul>
    </main>
  )
}