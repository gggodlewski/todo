import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(url);
        setData(data);
        setIsLoading(false);
        setIsSuccess(true);
      } catch (error) {
        if (error) {
          setErrorMessage("Error");
          setIsError(true);
          setIsLoading(false);
        }
      }
    };
    getData();
  }, []);

  const postData = async (body) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post(url, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setData((prevState) => [...prevState, data]);
      setIsLoading(false);
      setIsSuccess(true);
      toast.success("Task added");
    } catch (error) {
      if (error) {
        setErrorMessage("Error");
        setIsError(true);
        setIsLoading(false);
        toast.error("Task Error");
      }
    }
  };

  const deleteData = async (id) => {
    setIsLoading(true);
    try {
      await axios.delete(`${url}/${id}`);
      setData((prevState) => prevState.filter((todo) => todo.id !== id));
      setIsLoading(false);
      setIsSuccess(true);
    } catch (error) {
      if (error) {
        setErrorMessage("Error");
        setIsError(true);
        setIsLoading(false);
      }
    }
  };

  return { data, isLoading, isError, errorMessage, isSuccess, postData, deleteData };
};
