import React from 'react'
import bgImg from '../asserts/img1.jpg'
import { useForm } from 'react-hook-form'

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    //Callback function to collect data from the form
    const onSubmit = data => console.log(data);

    // console.log(watch('username'));
    return (
        <section>
            <div className='register'>
                <div className='col-1'>
                    <h2>Sign In</h2>
                    <span>Register and enjoy the service</span>

                    <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                        <input type='text' {...register('username')} placeholder='username' />
                        <input type='password' {...register('password')} placeholder='password' />
                        <input type='password' {...register('confirmpwd')} placeholder='confirm password' />
                        <input type='text' {...register('mobile', { required : true, maxLength: 10 })} placeholder='mobile number' />
                        {errors.mobile?.type === 'required' && 'Mobile Number is required'}
                        {errors.mobile?.type === 'maxLength' && 'MaxLength exceeded'}
                        {errors.password?.type === 'maxLength' && 'MaxLength exceeded'}
                        <button className='btn'>Sign In</button>
                    </form>
                </div>
                <div className='col-2'>
                    <img src={bgImg} alt=''/>
                </div>
            </div>
        </section>
    )
}
