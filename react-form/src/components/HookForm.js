import { useForm } from 'react-hook-form';


let renderCount = 0

export default function HookForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            firstName: '',
            lastName: ''
        }
    })
    const firstName = watch("firstName");
    renderCount++;
    return (
        <div>
            <div>
                <h1>{ renderCount }</h1>
                <span>Performant, flexbile and extensible forms with easy- </span>
            </div>
            <form onSubmit={handleSubmit((data) => {
                console.log(data);
            })}>
                <input { ...register("firstName", { required: 'this is required' }) } placeholder="First Name" />
                <p>{ firstName }</p>
                <p>{errors.firstName?.message}</p>
                <input { ...register("lastName", { required: 'this is required', minLength: {
                    value: 4,
                    message: 'MinLength is 4'
                } }) } placeholder="Last Name" />
                <p>{errors.lastName?.message}</p>
                <input type="submit" />
            </form>
        </div>
    );
}
