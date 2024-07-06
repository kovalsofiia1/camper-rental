import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './custom-datepicker.css';
import spritePath from '../../assets/icons/icons.svg';
import { registerLocale } from "react-datepicker";
import enGB from "date-fns/locale/en-GB"; // Import the locale
import css from './BookingForm.module.css';
import { format } from 'date-fns';

const customLocale = {
  ...enGB,
  localize: {
    ...enGB.localize,
    day: (n) => ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][n]
  }
};

// Register the custom locale
registerLocale("custom-en-GB", customLocale);

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  date: yup.date().required('Booking date is required').nullable(),
  comment: yup.string().optional(),
}).required();

export default function BookingForm() {
  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm({
    resolver: yupResolver(schema)
  });
  
  const [selectedDate, setSelectedDate] = useState(null);
  
   const onSubmit = data => {
    // Format the date before submitting
    const formattedData = {
      ...data,
      date: format(data.date, 'yyyy-MM-dd'),
     };
     
    console.log(formattedData);
    reset({
      name: '',
      email: '',
      date: null,
      comment: '',
    });
     setSelectedDate(null);
  };


  const handleDateChange = (date) => {
    setSelectedDate(date);
    setValue('date',date);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <div className={css.titleContainer}>
        <h2 className={css.title}>Book your campervan now</h2>
        <p className={css.prompt}>Stay connected! We are always ready to help you.</p>
      </div>
      <div className={css.inputs}>
        <div>
          <input {...register("name")} placeholder='Name' className={css.input} />
          <p className={css.error}>{errors.name?.message}</p>
        </div>
        <div>
          <input {...register("email")} placeholder='Email' className={css.input} />
          <p className={css.error}>{errors.email?.message}</p>
        </div>
        <div>
          <div className="custom-datepicker__wrapper">
            <DatePicker
              className="custom-datepicker"
              calendarClassName="custom-datepicker__calendar"
              wrapperClassName="custom-datepicker__wrapper"
              selected={selectedDate}
              onChange={handleDateChange}
              placeholderText="Booking date"
              showPopperArrow={false}
              locale="custom-en-GB"
              minDate={new Date()}
            />
            <svg
              className="custom-datepicker__icon"
              width="20"
              height="20"
              aria-label="btn icon"
            >
              <use href={`${spritePath}#icon-calendar`} />
            </svg>
          </div>
          <p className={css.error}>{errors.date?.message}</p>
        </div>
        <div>
          <textarea {...register("comment")} placeholder='Comment' className={`${css.input} ${css.textarea}`} />
          <p className={css.error}>{errors.comment?.message}</p>
        </div>
      </div>
      <button type="submit" className={css.btn}>Send</button>
    </form>
  );
}
