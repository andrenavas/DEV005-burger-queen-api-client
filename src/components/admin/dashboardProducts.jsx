import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'
import { PropTypes } from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPen } from '@fortawesome/free-solid-svg-icons';
import { faUserXmark } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
const iconAddWorker = <FontAwesomeIcon icon={faUserPlus} size="2xl" style={{ color: "#1E3050", }} />
import { useState } from 'react';
import { Button } from '../gralComponents/gralComponents';
import './dashboardProducts.css'

const iconEditWorker = <FontAwesomeIcon icon={faUserPen} size="2xl" style={{ color: "#1E3050", }} />
const iconDeleteWorker = <FontAwesomeIcon icon={faUserXmark} size="2xl" style={{ color: "#D11515", }} />

const DashboardProducts = ({ setShowEditForm, products, handleAddProduct, handleBorrar, handleEditar }) => {
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
            <Button className='btn-add-worker' dataTestid={'Testidbtn-ololo'} icon={iconAddWorker} onClick={() => { setShowEditForm(false); handleAddProduct(); }} >
              <FontAwesomeIcon icon={iconDeleteWorker} />
            </Button>
          </div>
          <TableContainer className='container-table-workers'>
            <Table className='table-dashboard-workers'>
              <TableHead>
                <TableRow className='table-subtitles'>
                  <TableCell >Id</TableCell>
                  <TableCell>Producto</TableCell>
                  <TableCell>Tipo</TableCell>
                  <TableCell>Imagen</TableCell>
                  <TableCell>Editar</TableCell>
                  <TableCell>Eliminar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Array.isArray && products.map((product, index) => (
                  <TableRow key={index}>
                    <td className='dashboard-table-row'>{product.id}</td>
                    <td className='dashboard-table-row'>{product.name}</td>
                    <td className='dashboard-table-row'>{product.type}</td>
                    <td className='dashboard-table-row'>
                      <img className ='dashboard-products-image'src={product.image} alt="products-image" />
                    </td>
                    <td className='container-edit-icon' onClick={() => { setShowEditForm(true); handleEditar(product) }}><i>{iconEditWorker}</i></td>
                    <td className='container-delete-icon' onClick={() => handleBorrar(product)}><i>{iconDeleteWorker}</i></td>
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

DashboardProducts.propTypes = {
  setShowEditForm: PropTypes.func,
  workers: PropTypes.array,
  handleAddWorker: PropTypes.func,
  handleBorrar: PropTypes.func,
  handleEditar: PropTypes.func
}
export default DashboardProducts