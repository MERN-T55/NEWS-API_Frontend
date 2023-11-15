import axios from "axios";
import News from "./news";
import { useState, useEffect } from "react";

const instance = axios.create({
  withCredentials: true,
});

function ForYou() {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    instance
      .post("http://localhost:4000/userInfo")
      .then((res) => {
        setUserData(res.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (!userData) {
    return <div>Please login or register.</div>;
  }
  return (
    <div>
      <News newsName={userData.preferences.join(" OR ")} />
    </div>
  );
}
export default ForYou;
