import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'
import { PropTypes } from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import { faRectangleXmark} from '@fortawesome/free-solid-svg-icons';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Button } from '../gralComponents/gralComponents';
import './dashboardProducts.css'

const iconAddProduct = <FontAwesomeIcon icon={faSquarePlus} size="2xl" style={{ color: "#1E3050", }} />
const iconEditProduct = <FontAwesomeIcon icon={faPenToSquare} size="2xl" style={{ color: "#1E3050", }} />
const iconDeleteProduct = <FontAwesomeIcon icon={faRectangleXmark} size="2xl" style={{ color: "#D11515", }} />

const DashboardProducts = ({ setShowEditForm, products, handleAddProduct, handleDeleteProduct, handleEditProduct }) => {
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
            <Button className='btn-add-worker' dataTestid={'Testidbtn-ololo'} icon={iconAddProduct} onClick={() => { setShowEditForm(false); handleAddProduct(); }} >
              <FontAwesomeIcon icon={iconDeleteProduct} />
            </Button>
          </div>
          <TableContainer className='container-table-workers'>
            <Table className='table-dashboard-workers'>
              <TableHead>
                <TableRow className='table-subtitles'>
                  <TableCell >Nº</TableCell>
                  <TableCell>Producto</TableCell>
                  <TableCell>Precio</TableCell>
                  <TableCell>Tipo</TableCell>
                  <TableCell>Imagen</TableCell>
                  <TableCell>Editar</TableCell>
                  <TableCell>Eliminar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Array.isArray && products.map((product, index) => (
                  <TableRow key={index}>
                    <td className='dashboard-table-row'>{index + 1}</td>
                    <td className='dashboard-table-row'>{product.name}</td>
                    <td className='dashboard-table-row'>${product.price}</td>
                    <td className='dashboard-table-row'>{product.type}</td>
                    <td className='dashboard-table-row'>
                      <img className ='dashboard-products-image'src={product.image} alt="products-image" />
                    </td>
                    <td className='container-edit-icon' onClick={() => { setShowEditForm(true); handleEditProduct(product) }}><i>{iconEditProduct}</i></td>
                    <td className='container-delete-icon' onClick={() => handleDeleteProduct(product)}><i>{iconDeleteProduct}</i></td>
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