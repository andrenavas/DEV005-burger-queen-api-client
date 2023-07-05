import Modal from 'react-modal';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

Modal.setAppElement('#root');
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#F5F5F5',
      border: '1px solid #ccc',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
      width: '70%',
      heigth: '300px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.2)'
    }
  };
  const ContainerButtonModal = styled.div`
//   background-color: red;
  width: 40%;
  padding: 10px;
  display:flex;
  justify-content: space-around;
    `;

const ModalApp = ({ isOpen, onRequestClose,handleClickModal, children, text, textBtn}) => {

return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="ModalApp"
      style={customStyles}
    >
      {children}
      <h1>{text}</h1>
      <ContainerButtonModal>
        <button onClick={handleClickModal}>{textBtn}</button>
        <button onClick={onRequestClose}>Cancelar</button>
      </ContainerButtonModal>
    </Modal>
  );
};

ModalApp.propTypes = {
    isOpen: PropTypes.boolean,
    onRequestClose: PropTypes.number,
    children: PropTypes.func,
    handleClickModal: PropTypes.func,
    text: PropTypes.str,
    textBtn: PropTypes.str
  }
export default ModalApp;