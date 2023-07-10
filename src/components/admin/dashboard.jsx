import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'
import { PropTypes } from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPen } from '@fortawesome/free-solid-svg-icons';
import { faUserXmark } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus} from '@fortawesome/free-solid-svg-icons';
const iconAddWorker = <FontAwesomeIcon icon={faUserPlus} size="2xl" style={{ color: "#1E3050", }} />
import ModalApp from '../gralComponents/modal';
import { useState } from 'react';
import { Button } from '../gralComponents/gralComponents';

const iconEditWorker = <FontAwesomeIcon icon={faUserPen} size="2xl" style={{ color: "#1E3050", }} />
const iconDeleteWorker = <FontAwesomeIcon icon={faUserXmark} size="2xl" style={{ color: "#D11515", }} />




const Dashboard = ({ setShowEditForm,workers, openModal, closeModal, modalIsOpen, handleAddWorker, handleBorrar, handleEditar}) => {
    // const [modalText, setModalText] = useState('');
    // const [modalBtnText, setModalBtnText] = useState('');
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
                        {/* <Button className='btn-add-worker' text='Agregar Trabajador' dataTestid={'Testidbtn'} onClick={() => {setShowEditForm(false); handleAddWorker();} } ></Button> */}
                        <Button className='btn-add-worker' dataTestid={'Testidbtn'}  icon={iconAddWorker} onClick={() => {setShowEditForm(false); handleAddWorker();} } >
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
                                    {/* <TableCell>Contraseña</TableCell> */}
                                    <TableCell>Editar</TableCell>
                                    <TableCell>Eliminar</TableCell>
                                </TableRow>
                            </TableHead>
                            {/* <td className='container-delete-icon' onClick={() => reduceProduct(item)}>  <i>{iconDeleteTrash}</i></td> */}

                            <TableBody>
                                {Array.isArray && workers.map((worker, index) => (
                                    <TableRow key={index}>
                                        <td className='dashboard-table-row'>{worker.id}</td>
                                        <td className='dashboard-table-row'>{worker.email}</td>
                                        <td className='dashboard-table-row'>{worker.role}</td>
                                        <td className='dashboard-table-row'>{worker.email}</td>
                                        <td className='container-edit-icon' onClick={() => {setShowEditForm(true); handleEditar(worker)}}><i>{iconEditWorker}</i></td>
                                        {/* <ModalApp isOpen={modalIsOpen} onRequestClose={closeModal} handleClickModal={editWorker} 
                                    text='¿Estás seguro que deseas editar al  trabajador?' textBtn='Editar'>
                                    </ModalApp> */}
                                        <td className='container-delete-icon' onClick={() => handleBorrar(worker)}><i>{iconDeleteWorker}</i></td>
                                        {/* <ModalApp isOpen={modalIsOpen} onRequestClose={closeModal} handleClickModal={deleteWorker}
                                    text='¿Estás seguro que deseas ELIMINAR al  trabajador?' textBtn='Eliminar'>
                                    </ModalApp> */}

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {/* <ModalApp isOpen={modalIsOpen} onRequestClose={closeModal} handleClickModal={modalData.aceptarFn}
                        text={modalData.modalText} textBtn={modalData.modalBtnText}>
                    </ModalApp> */}
                </div>
            </div>
            {/* <div>
                Edit/create form
                <input type='text'></input>
                <input type='text'></input>
                <input type='text'></input>
            </div> */}
        </>
    )
};

// Dashboard.propTypes = {
//     workers: PropTypes.obj,
//     openModal: PropTypes.func,
//     closeModal: PropTypes.func,
//     modalIsOpen: PropTypes.func,
//     text: PropTypes.str,
//     textBtn: PropTypes.str,
//     editWorker: PropTypes.func,
//     deleteWorker: PropTypes.func
// }
export default Dashboard
