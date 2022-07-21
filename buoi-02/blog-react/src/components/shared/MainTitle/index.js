import cls from 'classnames';
import './main-title.css';

function MainTitle({ children, isButton = false, button }) {

  let classes = cls('main-title spacing', {
    'd-flex tcl-jc-between tcl-ais-center': isButton === true
  });

  return (
    <div className={ classes }>
      <h2>{ children }</h2>
      { isButton && button }
    </div>
  );
}

export default MainTitle;