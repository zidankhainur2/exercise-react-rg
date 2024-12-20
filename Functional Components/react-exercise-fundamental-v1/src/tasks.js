import { useState } from "react";

function Task1() {
  return (
    <div className="basic_component">
      <h1>Halo dunia!</h1>
    </div>
  );
}

function Task1_1(props) {
  return <h1>{props.name}</h1>;
}

function Task2() {
  const [message, setMesaage] = useState("Klik tombol di bawah");

  const handleClick = () => {
    setMesaage("Tombol telah di-klik!");
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleClick}>Klik saya!</button>
    </div>
  );
}

const students = [
  {
    name: "John Doe",
    age: 20,
    dropout: false,
  },
  {
    name: "Jane Doe",
    age: 21,
    dropout: true,
  },
  {
    name: "John Smith",
    age: 22,
    dropout: false,
  },
  {
    name: "Jane Smith",
    age: 23,
    dropout: true,
  },
];

function Task3() {
  return (
    <div>
      {students.map((students, index) => {
        return (
          <h2 key={index}>
            {students.name} - {students.age}
          </h2>
        );
      })}
    </div>
  );
}

function Task3_1() {
  return (
    <div>
      {students
        .filter((students) => !students.dropout)
        .map((students, index) => {
          return (
            <h2 key={index}>
              {students.name} - {students.age}
            </h2>
          );
        })}
    </div>
  );
}

function Task4() {
  const [show, setShow] = useState(true);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      {show && <p>Klik tombol di-bawah untuk menghapus elemen ini</p>}
      <button onClick={handleClick}>Hapus</button>
    </div>
  );
}

export { Task1, Task1_1, Task2, Task3, Task3_1, Task4 };
