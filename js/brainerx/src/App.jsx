import { useState } from "react";
import {
  BrowserRouter,
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Table from "./Table";
import List from "./List";

export default function App() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: (
            <div>
              <header>
                <Link to="/">Page 1</Link>
                <Link to="/page2">Page 2</Link>
                <Link to="/page3">Page 3</Link>
              </header>
              <Outlet />
            </div>
          ),
          children: [
            {
              path: "/",
              element: <Page1 />,
            },
            {
              path: "/page2",
              element: <Page2 />,
            },
            {
              path: "/page3",
              element: <Page3 />,
            },
          ],
        },
      ])}
    />
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
