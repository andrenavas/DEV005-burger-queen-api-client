import ReactModal from 'react-modal';
import { PropTypes } from 'prop-types';
import { customStyles,ContainerButtonModal } from './modalStyles';
// import styled from 'styled-components';

ReactModal.setAppElement('#root');
// const customStyles = {
//     content: {
//       top: '50%',
//       left: '50%',
//       right: 'auto',
//       bottom: 'auto',
//       marginRight: '-50%',
//       transform: 'translate(-50%, -50%)',
//       backgroundColor: '#F5F5F5',
//       border: '1px solid #ccc',
//       padding: '20px',
//       borderRadius: '10px',
//       boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
//       width: '70%',
//       heigth: '300px',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center'
//     },
//     overlay: {
//       backgroundColor: 'rgba(0, 0, 0, 0.2)'
//     }
//   };
//   const ContainerButtonModal = styled.div`
// //   background-color: red;
//   width: 40%;
//   padding: 10px;
//   display:flex;
//   justify-content: space-around;
//     `;

const ModalApp = ({ isOpen, onRequestClose, handleClickModal, text, textBtn}) => {

return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="ModalApp"
      style={customStyles}
    >
      <h1>{text}</h1>
      <ContainerButtonModal>
        <button onClick={handleClickModal}>{textBtn}</button>
        <button onClick={onRequestClose}>Cancelar</button>
      </ContainerButtonModal>
    </ReactModal>
  );
};

// ModalApp.propTypes = {
//     isOpen: PropTypes.boolean,
//     onRequestClose: PropTypes.number,
//     children: PropTypes.func,
//     handleClickModal: PropTypes.func,
//     text: PropTypes.str,
//     textBtn: PropTypes.str
//   }
export default ModalApp;