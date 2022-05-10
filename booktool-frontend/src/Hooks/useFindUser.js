import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "../Services/auth.service";
export default function useFindUser() {
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    async function findUser() {
      await authService
        .getUser()
        .then((res) => {
          dispatch({ type: "SET_USER", payload: res.data.currentUser });
          setUser(res.data.currentUser);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    }
    findUser();
  }, []);
  return {
    user,
    isLoading,
  };
}
