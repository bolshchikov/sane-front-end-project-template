import { Link } from 'react-router-dom';
export const Main = () => {
  return (
    <>
      <h2>Welcome to Sane Client Project</h2>
      <ul>
        <li>
          <Link to="/protected">Protected</Link>
        </li>
      </ul>
    </>
  );
};
