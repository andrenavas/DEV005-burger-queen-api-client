import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';


const Form = ({ addWorker, newUserData, setNewUserData }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    //fn que obtiene el valor de email proporcionado en el form
    const newUserEmailValue = (event) => {
        setNewUserData({ ...newUserData, email: event.target.value })
    };
    //fn que obtiene el valor del password del formulario
    const newUserPasswordValue = (event) => {
        setNewUserData({ ...newUserData, password: event.target.value })
    };
 
    //  fn que obtiene los valores de las opciones seleccionadas
     const newUserRoleValue = (selectedOption) => {
        setNewUserData({ ...newUserData, role: selectedOption.value })
    };
   //se crean las constantes para el select de los roles
    const options = [
        { value: 'waiter', label: 'Mesera(o)' },
        { value: 'chef', label: 'Chef' },
        { value: 'admin', label: 'Admin' },
      ];




    return (
        <form onSubmit={handleSubmit((data) => console.log(data))}>
            <input type='email'{...register('email', { required: true })} value={newUserData.email} onChange={newUserEmailValue} />
            {errors.email && <p>Email requerido</p>}
            <input type='password'{...register('password', { required: true })} value={newUserData.password} onChange={newUserPasswordValue} />
            {errors.password && <p>Contraseña requerida</p>}
            <Select
                onChange={newUserRoleValue}
                options={options}
            />
            {/* <input type='text'{...register('rol', { required: true })} value ={newUserData.role} onChange={newUserRoleValue} />
            {errors.rol && <p>Porfavor agrega un rol</p>} */}
            <input type="submit" onClick={() => addWorker()} />
        </form>
    );

}
export default Form