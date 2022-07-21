import './../../css/main-title.css'
import Button from './Button'

function MainTitle (props) {

    const { title, viewmore } = props;
    let classCss = "main-title spacing";
    
    if(viewmore){
        classCss = "main-title spacing d-flex tcl-jc-between tcl-ais-center";
    }

    return(
        <div className={ classCss }>
            <h2>{ title }</h2>
            <Button href="#" text="View more" btn="btn btn-default" type={1} show={viewmore} />
        </div>
    )
}

export default MainTitle