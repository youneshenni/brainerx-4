import { useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import Table from "./Table";
import List from "./List";

export default function App() {
  return (
    <div>
      <Page1 name="BrainerX" />
      <Page2 />
      <Page3 />
    </div>
  );
}

function Page1({ name }) {
  const [first, setFirst] = useState(0);
  return (
    <div>
      <button onClick={() => setFirst((first) => first + 1)}>Click me!</button>
      <h1>
        You have clicked on the {name} button {first} times
      </h1>
    </div>
  );
}

function Page2() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "John Doe",
      age: 30,
    },
    {
      id: 2,
      name: "Jane Doe",
      age: 25,
    },
    {
      id: 3,
      name: "John Smith",
      age: 35,
    },
    {
      id: 4,
      name: "Jane Smith",
      age: 40,
    },
  ]);
  return (
    <div>
      <Table data={data} setData={setData} />
      <List data={data} />
    </div>
  );
}

function Page3() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "BrainerX",
      age: 30,
    },
    {
      id: 2,
      name: "Jane Doe",
      age: 25,
    },
    {
      id: 3,
      name: "John Smith",
      age: 35,
    },
    {
      id: 4,
      name: "Jane Smith",
      age: 40,
    },
  ]);
  return <Table data={data} setData={setData} />;
}
