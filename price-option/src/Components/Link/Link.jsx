
const Link = ({ route }) => {
  return (
    <div>
      <li className="mr-14">
        <a href={route.path}> {route.name}</a>
      </li>
    </div>
  );
};

export default Link;