export default function List({ data }) {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          {item.name} - {item.age}
        </li>
      ))}
    </ul>
  );
}
