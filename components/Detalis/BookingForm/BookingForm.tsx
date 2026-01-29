'use client';
import toast from 'react-hot-toast';
import css from './BookingForm.module.css';

const BookingForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast.success('Booking successful! We will contact you soon.');

    e.currentTarget.reset();
  };

  return (
    <div className={css.formContainer}>
      <div className={css.header}>
        <h3 className={css.title}>Book your campervan now</h3>
        <p className={css.subtitle}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.inputsWrapper}>
          <input
            className={css.input}
            name="name"
            placeholder="Name*"
            type="text"
            required
          />
          <input
            className={css.input}
            name="email"
            placeholder="Email*"
            type="email"
            required
          />
          <input
            className={css.input}
            name="date"
            placeholder="Booking date*"
            type="date"
            required
          />
          <textarea
            className={css.textarea}
            name="comment"
            placeholder="Comment"
          />
        </div>
        <button className={css.submitBtn} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
