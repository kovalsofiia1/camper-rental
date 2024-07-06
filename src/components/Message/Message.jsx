import css from './Message.module.css';

export default function Message({children}) {
  return (
    <div className={css.text}>
      {children}
    </div>
  )
}
