import axios from "axios";
import { useState, useEffect } from "react";
const instance = axios.create({
  withCredentials: true,
});

function UserInfo() {
  const [userData, setUserData] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (option, id) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];

    setSelectedOptions(updatedOptions);
    handleUpdatePreferences(id, updatedOptions);
  };

  const handleCustomOptionSubmit = (event, id) => {
    event.preventDefault();
    const newOption = event.target.elements.option.value.trim();
    if (newOption && !selectedOptions.includes(newOption)) {
      const updatedOptions = [...selectedOptions, newOption];
      setSelectedOptions(updatedOptions);
      event.target.elements.option.value = "";
      handleUpdatePreferences(id, updatedOptions);
    }
  };

  const handleUpdatePreferences = (userId, updatedOptions) => {
    axios
      .put("http://localhost:4000/userInfo/" + userId, {
        preferences: updatedOptions,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log("Preferences updated successfully");
        } else {
          return Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  const handleLogout = () => {
    document.cookie.split(";").forEach(function (c) {
      document.cookie =
        c.trim().split("=")[0] +
        "=;" +
        "expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    });
    window.location.href = "/";
    alert("Logged out successfully");
  };

  const handleDelete = (userId) => {
    axios
      .delete("http://localhost:4000/userInfo/" + userId)
      .then((res) => {
        if (res.status === 200) {
          document.cookie.split(";").forEach(function (c) {
            document.cookie =
              c.trim().split("=")[0] +
              "=;" +
              "expires=Thu, 01 Jan 1970 00:00:00 UTC;";
          });
          window.location.href = "/";
          alert("Account deleted successfully");
        } else Promise.reject();
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    instance
      .post("http://localhost:4000/userInfo")
      .then((res) => {
        setUserData(res.data.user);
        setSelectedOptions(res.data.user.preferences);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="user-container">
      <p>Username: {userData?.username}</p>
      <p>Email: {userData?.email}</p>
      <p>Preferences:</p>
      {selectedOptions.map((option) => (
        <label htmlFor="option" id="prefoptions" key={option}>
          <input
            id="pref"
            type="checkbox"
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={() => handleOptionChange(option, userData?._id)}
          />
          {option}
        </label>
      ))}

      <form
        onSubmit={(event) => handleCustomOptionSubmit(event, userData?._id)}
      >
        <input className="form-control" type="text" name="option" />
        <button className="btn btn-secondary" type="submit">
          Add Preference
        </button>
      </form>

      <button
        className="btn btn-danger"
        onClick={() => handleDelete(userData?._id)}
      >
        Delete Account
      </button>
      <button className="btn btn-danger" onClick={() => handleLogout()}>
        Logout
      </button>
    </div>
  );
}

export default UserInfo;
