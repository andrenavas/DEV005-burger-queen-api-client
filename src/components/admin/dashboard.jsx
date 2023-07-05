import {TableContainer, Table, TableHead, TableBody, TableRow,TableCell} from '@mui/material'
import { PropTypes } from 'prop-types'

const Dashboard = ({workers}) => {
    return(
        <>
        <div className="container-table-btn">
            <TableContainer className='container-table-workers'>
                <Table className='table-dashboard-workers'>
                    <TableHead>
                        <TableRow className='table-subtitles'>
                            <TableCell >Nº</TableCell>
                            <TableCell>ID</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Rol</TableCell>
                            <TableCell>Correo</TableCell>
                            {/* <TableCell>Contraseña</TableCell> */}
                            <TableCell>Editar</TableCell>
                            <TableCell>Eliminar</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {workers.map((worker, index) => (
                            <TableRow key ={index}>
                                <TableCell>{worker.id}</TableCell>
                                <TableCell>{worker.id}</TableCell>
                                <TableCell>{worker.email}</TableCell>
                                <TableCell>{worker.role}</TableCell>
                                <TableCell>{worker.email}</TableCell>
                                {/* <TableCell>{worker.password}</TableCell> */}
                                <TableCell>Edit</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
       </div>
       </>
    )
};
Dashboard.propTypes = {
    workers: PropTypes.obj
}
export default Dashboard
