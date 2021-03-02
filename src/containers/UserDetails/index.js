import React, { useEffect, useState } from "react";
import UserDetailsForm from "../../components/UserDetailsForm";
import UserDetailsListing from "../../components/UserDetailsListing";
import { API_PATH } from "../../constants";
import styles from "./userDetails.module.css";
import axios from "axios";

const UserDetailsContainer = () => {
  const [listData, setListData] = useState([]);
  const [error, setError] = useState(false);

  const addItemToList = (formData) => {
    debugger;
    addComment(formData);
  };

  const fetchComments = async () => {
    try {
      let commentsData = await axios.get(API_PATH);
      setListData(commentsData.data.messages);
    } catch (e) {
      setError(true);
    }
  };

  const addComment = async (formData) => {
    try {
      let response = await axios.post(API_PATH, formData);
      debugger;
      if (response.data.success) {
        formData['gravatar'] =response.data.data.comment.gravatar
        debugger
        setListData([formData, ...listData]);
      }
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className={styles.container}>
      {error && <div>Something went wrong</div>}
      <UserDetailsForm addItemToList={addItemToList} />
      <UserDetailsListing listData={listData} />
    </div>
  );
};

export default UserDetailsContainer;
