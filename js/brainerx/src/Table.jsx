import { useRef, useState } from "react";
import "./App.css";

function Table({ data, setData }) {
  const [editingRow, setEditingRow] = useState(null);
  const [editingRowData, setEditingRowData] = useState({});
  const nameRef = useRef(null);
  const ageRef = useRef(null);

  return (
    <div>
      <input ref={nameRef} /> <input ref={ageRef} />{" "}
      <button
        onClick={() => {
          setData([
            ...data,
            {
              id: data.length + 1,
              name: nameRef.current.value,
              age: ageRef.current.value,
            },
          ]);
        }}
      >
        Add
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>
                {index === editingRow ? (
                  <input
                    value={editingRowData.id}
                    onChange={(e) =>
                      setEditingRowData({
                        ...editingRowData,
                        id: e.target.value,
                      })
                    }
                  />
                ) : (
                  item.id
                )}
              </td>
              <td>
                {index === editingRow ? (
                  <input
                    value={editingRowData.name}
                    onChange={(e) =>
                      setEditingRowData({
                        ...editingRowData,
                        name: e.target.value,
                      })
                    }
                  />
                ) : (
                  item.name
                )}
              </td>
              <td>
                {index === editingRow ? (
                  <input
                    value={editingRowData.age}
                    onChange={(e) =>
                      setEditingRowData({
                        ...editingRowData,
                        age: e.target.value,
                      })
                    }
                  />
                ) : (
                  item.age
                )}
              </td>
              <td>
                <button
                  onClick={() =>
                    setData(data.filter((data) => data.id !== item.id))
                  }
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    if (editingRow === index) {
                      setData(
                        data.map((data) =>
                          data.id === item.id ? editingRowData : data
                        )
                      );
                      setEditingRow(null);
                      setEditingRowData({});
                    } else {
                      setEditingRow(index);
                      setEditingRowData(item);
                    }
                  }}
                >
                  {editingRow === index ? "Save" : "Edit"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
