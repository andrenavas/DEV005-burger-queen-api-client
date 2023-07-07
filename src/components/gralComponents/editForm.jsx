import { useForm } from 'react-hook-form';
import Select from 'react-select';


const EditForm = ({ editWorker, editUserData, setEditUserData,closeModal }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    //fn que obtiene el valor de email proporcionado en el form
    const editUserEmailValue = (event) => {
        setEditUserData({ ...editUserData, email: event.target.value })
    };
    //fn que obtiene el valor del password del formulario
    const editUserPasswordValue = (event) => {
        setEditUserData({ ...editUserData, password: event.target.value })
    };
 
    //  fn que obtiene los valores de las opciones seleccionadas
     const editUserRoleValue = (selectedOption) => {
        setEditUserData({ ...editUserData, role: selectedOption.value })
    };
   //se crean las constantes para el select de los roles
    const options = [
        { value: 'waiter', label: 'Mesera(o)' },
        { value: 'chef', label: 'Chef' },
        { value: 'admin', label: 'Admin' },
    ];

    //función para resetear los valores del input
    // const resetForm = () => {
    //     reset();
    //     setNewUserData({ email: '', password: '', role: '' });
    // };




    return (
        <form onSubmit={handleSubmit((data) => console.log(data))}>
            <input type='email'{...register('email', { required: true })} value={editUserData.email} onChange={editUserEmailValue} placeholder='Correo electrónico'/>
            {errors.email && <p>Email requerido</p>}
            <input type='password'{...register('password', { required: true })} value={editUserData.password} onChange={editUserPasswordValue} placeholder='Contraseña'/>
            {errors.password && <p>Contraseña requerida</p>}
            <Select
                onChange={editUserRoleValue}
                options={options}
                value={editUserData.role ? { value: editUserData.role, label: editUserData.role } : null}
            />
            {/* <input type='text'{...register('rol', { required: true })} value ={newUserData.role} onChange={newUserRoleValue} />
            {errors.rol && <p>Porfavor agrega un rol</p>} */}
            <input type="submit" value='Editar'onClick={() => {
                editWorker();
                closeModal();
                // resetForm();
            }} />
        </form>
    );

}
export default EditForm