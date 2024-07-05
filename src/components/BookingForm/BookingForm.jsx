import css from './BookingForm.module.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState } from 'react';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  date: yup.date().required('Booking date is required'),
  comment: yup.string().optional(),
}).required();

export default function BookingForm() {
  const { register, handleSubmit, formState:{ errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });
    const onSubmit = data => {
        console.log(data) 
         reset({
            name: '',
            email: '',
            date: '',
            comment: '',
        });
  };
  
  const [inputType, setInputType] = useState('text');
  const [inputValue, setInputValue] = useState('');

  const handleFocus = () => {
    setInputType('date');
  };

  const handleBlur = () => {
    if (inputValue === '') {
      setInputType('text');
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };


  return (
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
            <div className={css.titleContainer}>
                <h2 className={css.title}>Book your campervan now</h2>
                <p className={css.prompt}>Stay connected! We are always ready to help you.</p>
            </div>
          <div className={css.inputs}>
                <div>
                    <input {...register("name")} placeholder='Name' className={ css.input} />
                    <p className={css.error}>{errors.name?.message}</p>
                </div>
               <div> 
                    <input {...register("email")} placeholder='Email' className={ css.input}/>
                    <p className={css.error}>{errors.email?.message}</p>
                </div>    
        <div> 
            <input type={inputType}
              className={css.input}
              value={inputValue}
              placeholder="Booking date"
              onFocus={handleFocus}
              onBlur={handleBlur}
            onChange={handleChange} />
          
                    <input {...register("date")} type='date' placeholder='Booking date' className={ css.input}/>
                    <p className={css.error}>{errors.date?.message && 'Select date'}</p>
                </div>
               <div>    
                    <textarea {...register("comment")} placeholder='Comment' className={`${css.input} ${css.textarea}`}/>
                    <p className={css.error}>{errors.comment?.message}</p>
                </div> 
            </div>
      <button type="submit" className={css.btn}>Send</button>
    </form>
  );
}

// export default function BookingForm() {
//   const { register, handleSubmit } = useForm();
//     const onSubmit = data => { console.log(data) };
   
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("firstName", { required: true, maxLength: 20 })} />
//       <input {...register("lastName")} />
//       <input type="number" {...register("age", { min: 18, max: 99 })} />
//       <input type="submit" />
//     </form>
//   );
// }
