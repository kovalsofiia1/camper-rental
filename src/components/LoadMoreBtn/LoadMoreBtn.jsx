import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({action}) {
  return (
    <button type='button' onClick={action} className={css.btn}>
        Load more
    </button>
  )
}
