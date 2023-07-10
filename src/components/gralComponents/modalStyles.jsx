import styled from 'styled-components';

export const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#FFFFF',
      border: '1px solid #ccc',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
      width: '70%',
      heigth: '800px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.2)'
    }
  };
export const ContainerButtonModal = styled.div`
//   background-color: red;
  width: 40%;
  padding: 10px;
  display:flex;
  justify-content: space-around;
    `;
