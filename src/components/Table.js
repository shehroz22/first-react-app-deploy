import React, { useState } from "react";

export default function Table(props) {
  const [text, setText] = useState("Enter Something  here ");
  const dothis = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <table className="table my-5 ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Houses</th>
            <th scope="col">Bathroom</th>
            <th scope="col">Rooms</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{props.one}</td>
            <td>1</td>
            <td>2</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>{props.two}</td>
            <td>2</td>
            <td>1</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>{props.three}</td>
            <td>3</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <textarea
          onChange={dothis}
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          value={text}
        >
          {" "}
        </textarea>
      </div>
    </>
  );
}
