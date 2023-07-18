import { TableContainer, Table, TableHead, TableBody, TableRow } from '@mui/material'
import { PropTypes } from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPen } from '@fortawesome/free-solid-svg-icons';
import { faUserXmark } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
const iconAddWorker = <FontAwesomeIcon icon={faUserPlus} size="l" style={{ color: "FFFF", }} />
import { Button } from '../gralComponents/gralComponents';

const iconEditWorker = <FontAwesomeIcon icon={faUserPen} size="2xl" style={{ color: "#1E3050", }} />
const iconDeleteWorker = <FontAwesomeIcon icon={faUserXmark} size="2xl" style={{ color: "#D11515", }} />

const Dashboard = ({ setShowEditForm, workers, handleAddWorker, handleBorrar, handleEditar, productsView }) => {

  return (
    <>
      <div className='new-container'>
        <div className="container-table">
          <div className='new-container-btn-add'>
     
            <Button className='btn-add-worker all'text={'Trabajador'} dataTestid={'Testidbtn'} icon={iconAddWorker} onClick={() => { setShowEditForm(false); handleAddWorker(); }} >
              <FontAwesomeIcon icon={iconDeleteWorker} />
            </Button>
          </div>
          <TableContainer className='container-table-workers'>
            <Table className='table-dashboard-workers'>
              <TableHead>
                <TableRow className='table-subtitles'>
                  <th>Nº</th>
                  <th>Nombre</th>
                  <th>Rol</th>
                  <th>Correo</th>
                  <th>Editar</th>
                  <th>Eliminar</th>
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
  handleEditar: PropTypes.func,
  productsView: PropTypes.func
}
export default Dashboard
