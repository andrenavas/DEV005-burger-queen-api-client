import { useForm } from 'react-hook-form';

const Form = ({ addWorker, newUserData, setNewUserData }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
        const newUserEmailValue = (event) => {
            setNewUserData({...newUserData, email:event.target.value})
        };
        const newUserPasswordValue = (event) => {
            setNewUserData({...newUserData, password:event.target.value})
        };
        const newUserRoleValue = (event) => {
            setNewUserData({...newUserData, role:event.target.value})
        };
        
  

    return (
        <form onSubmit={handleSubmit((data) => console.log(data))}>
            <input type='email'{...register('email', { required: true })} value ={newUserData.email} onChange={newUserEmailValue} />
            {errors.email && <p>Email requerido</p>}
            <input type='password'{...register('password', { required: true })} value ={newUserData.password} onChange={newUserPasswordValue} />
            {errors.password && <p>Contraseña requerida</p>}
            <input type='text'{...register('rol', { required: true })} value ={newUserData.role} onChange={newUserRoleValue} />
            {errors.rol && <p>Porfavor agrega un rol</p>}
            <input type="submit" onClick={() => addWorker()} />
        </form>
    );

}
export default Form