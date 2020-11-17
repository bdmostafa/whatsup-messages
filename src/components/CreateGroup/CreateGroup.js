import React from "react";
import "./CreateGroup.css";
import Modal from "react-modal";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const CreateGroup = ({ modalIsOpen, closeModal }) => {
  const customStyles = {
    content: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        background: 'white',
        overflow: 'auto',
        borderRadius: '20px',
        outline: 'none',
        padding: '20px',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '30%',
        display: 'grid',
        outlineWidth: '0',
        textAlign: 'center'  
      },
      overlay: {zIndex: 50000},
      background: '#7a7b7d'

  };

  return (
    <div className="groupModal">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Create Group"
        className=""
      >
        <h2>Create a group</h2>
        <div className="groupModal__searchContainer">
          <input type="search" placeholder="Search people or messages" />
          <SearchIcon />
        </div>
        <div className="groupModal__area">
          <div className="groupModal__areaUsers">
            <Avatar />
            <h4>Surbhi Nanka</h4>
            <button>Add</button>
          </div>
          <div className="groupModal__areaUsers">
            <Avatar />
            <h4>Surbhi Nanka</h4>
            <button>Add</button>
          </div>
          <div className="groupModal__areaUsers">
            <Avatar />
            <h4>Surbhi Nanka</h4>
            <button>Add</button>
          </div>
          <div className="groupModal__areaUsers">
            <Avatar />
            <h4>Surbhi Nanka</h4>
            <button>Add</button>
          </div>
        </div>
        <button className="groupModal__createBtn" onClick={closeModal}>Create Group</button>
      </Modal>
    </div>
  );
};

export default CreateGroup;
