import React, { useEffect, useState } from "react";
import "./common.css";
import Button from "react-bootstrap/Button";
import AddUserModal from "./add-user-modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faSortDown,
  faSortUp,
} from "@fortawesome/free-solid-svg-icons";

function User(props) {
  const mockDataUrl = "https://reqres.in/api/users";
  const [userData, setuserData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [currentSort, setCurrentSort] = useState("default");
  const tableHederData = [
    { prop: "avatar", label: "" },
    { prop: "id", label: "Id" },
    { prop: "first_name", label: "Name" },
    { prop: "email", label: "Email" },
  ];

  // Get mock data from url
  useEffect(() => {
    fetch(mockDataUrl)
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("Server responds with error!");
        }
        return res.json();
      })
      .then((data) => {
        setuserData(data.data);
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);

  const sortData = (col, type) => {
    setCurrentSort(type);
    switch (type) {
      case "asc":
        userData.sort((a, b) => {
          if (typeof a[col] === "string") {
            return a[col].localeCompare(b[col]);
          } else if (typeof a[col] === "number") {
            return a[col] - b[col];
          }
          return true;
        });
        break;
      case "desc":
        userData.sort((a, b) => {
          if (typeof a[col] === "string") {
            return b[col].localeCompare(a[col]);
          } else if (typeof a[col] === "number") {
            return b[col] - a[col];
          }
          return true;
        });
        break;
      case "default":
        break;
      default:
        break;
    }
    console.log(userData);
  };

  return (
    <div className="container">
      <AddUserModal show={modalShow} onHide={() => setModalShow(false)} />
      <Button
        variant="primary"
        className="mb-2 float-right"
        onClick={() => setModalShow(true)}
      >
        Add User
      </Button>
      <table className="table table-bordered">
        <thead>
          <tr>
            {tableHederData.map((column, index) => {
              return (
                <th key={index}>
                  {column.label}
                  {column.label !== "" && currentSort === "default" && (
                    <FontAwesomeIcon
                      className="ms-3 cursor-pointer"
                      icon={faSort}
                      onClick={() => sortData(column.prop, "asc")}
                    />
                  )}
                  {column.label !== "" && currentSort === "asc" && (
                    <FontAwesomeIcon
                      className="ms-3 cursor-pointer"
                      icon={faSortDown}
                      onClick={() => sortData(column.prop, "desc")}
                    />
                  )}
                  {column.label !== "" && currentSort === "desc" && (
                    <FontAwesomeIcon
                      className="ms-3 cursor-pointer"
                      icon={faSortUp}
                      onClick={() => sortData(column.prop, "asc")}
                    />
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {userData.map((data, i) => {
            return (
              <tr key={i}>
                <td className="text-center">
                  <img
                    className="user-img"
                    key={i}
                    src={data.avatar}
                    alt="user_img"
                  />
                </td>
                <td>{data.id}</td>
                <td>
                  {data.first_name} {data.last_name}
                </td>
                <td>{data.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default User;
