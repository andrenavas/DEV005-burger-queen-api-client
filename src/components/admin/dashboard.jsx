import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'
import { PropTypes } from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPen } from '@fortawesome/free-solid-svg-icons';
import { faUserXmark } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
const iconAddWorker = <FontAwesomeIcon icon={faUserPlus} size="2xl" style={{ color: "#1E3050", }} />
import { useState } from 'react';
import { Button } from '../gralComponents/gralComponents';

const iconEditWorker = <FontAwesomeIcon icon={faUserPen} size="2xl" style={{ color: "#1E3050", }} />
const iconDeleteWorker = <FontAwesomeIcon icon={faUserXmark} size="2xl" style={{ color: "#D11515", }} />

const Dashboard = ({ setShowEditForm, workers, handleAddWorker, handleBorrar, handleEditar, productsView }) => {
  const [modalData, setModalData] = useState({
    modalText: '',
    modalBtnText: '',
    aceptarFn: () => { }
  });
  return (
    <>
      <div className='new-container'>
        <div className="container-table">
          <div className='new-container-btn-add'>
          <div className='container-btn-admin-workers-products'>
            <Button className="btn btn-primary btn-admin-products" text="Productos" onClick={productsView} />
           </div>
            <Button className='btn-add-worker' dataTestid={'Testidbtn'} icon={iconAddWorker} onClick={() => { setShowEditForm(false); handleAddWorker(); }} >
              <FontAwesomeIcon icon={iconDeleteWorker} />
            </Button>
          </div>
          <TableContainer className='container-table-workers'>
            <Table className='table-dashboard-workers'>
              <TableHead>
                <TableRow className='table-subtitles'>
                  <TableCell >Nº</TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Rol</TableCell>
                  <TableCell>Correo</TableCell>
                  <TableCell>Editar</TableCell>
                  <TableCell>Eliminar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Array.isArray && workers.map((worker, index) => (
                  <TableRow key={index}>
                    <td className='dashboard-table-row'>{index + 1 }</td>
                    <td className='dashboard-table-row'>{worker.email}</td>
                    <td className='dashboard-table-row'>{worker.role}</td>
                    <td className='dashboard-table-row'>{worker.email}</td>
                    <td className='container-edit-icon' onClick={() => { setShowEditForm(true); handleEditar(worker) }}><i>{iconEditWorker}</i></td>
                    <td className='container-delete-icon' onClick={() => handleBorrar(worker)}><i>{iconDeleteWorker}</i></td>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  )
};

Dashboard.propTypes = {
  setShowEditForm: PropTypes.func,
  workers: PropTypes.array,
  handleAddWorker: PropTypes.func,
  handleBorrar: PropTypes.func,
  handleEditar: PropTypes.func
}
export default Dashboard
