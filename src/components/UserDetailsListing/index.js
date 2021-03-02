import React, { useState, useEffect } from "react";
import styles from "./listing.module.css";
import Modal from 'react-modal'

const UserDetailsListing = ({ listData }) => {
  const [dataToShow, setDataToShow] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeEmail, setActiveEmail] = useState("");

  const searchItems = (event) => {
    const { value } = event.target;
    debugger;
    const filteredItems = listData.filter((item) => item.email.includes(value));
    setDataToShow(filteredItems);
  };

  const returnSearch = () => {
    return (
      <div className={styles.searchContainer}>
        <input
          className={styles.searchInput}
          placeholder="Filter"
          onChange={searchItems}
        />
      </div>
    );
  };

  useEffect(() => {
    setDataToShow(listData);
  }, [listData]);

  return (
    <div className={styles.listContainer}>
      {returnSearch()}
      <div className={styles.itemList}>
      {dataToShow.map((item, index) => {
        return (
          <div className={styles.card}>
            <div
              onClick={() => {
                setIsModalOpen(true);
                setActiveEmail(item.email);
              }}
            >
            <img style={{height:50, width:50, cursor:'pointer'}} src={item.gravatar} alt='gravatar'/>
            </div>
            <div className={styles.text}>
              <div className={styles.text1}>{item.email}</div>
              <div className={styles.text2}>{item.comment}</div>
            </div>
          </div>
        );
      })}
      </div>
     
      <Modal className={styles.modalContainer} isOpen={isModalOpen} centered shouldCloseOnOverlayClick={true}>
      <div className={styles.closeButton}><button onClick={()=>setIsModalOpen(false)}>close</button></div>
        <div className={styles.active}>{activeEmail}</div>
      </Modal>
    </div>
  );
};

export default UserDetailsListing;
