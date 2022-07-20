import './../../css/button.css'

function Button(props){
    const { href, btn, text, type, show } = props

    if(show){
        if(type === 1){
            return (
                <a href={ href } className={ btn } >{ text }</a>
            )
        }
        return (
            <div className="text-center">
                <button className={ btn }>
                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <circle cx={50} cy={50} fill="none" stroke="currentColor" strokeWidth={10} r={35} strokeDasharray="164.93361431346415 56.97787143782138" transform="rotate(120.057 50 50)"><animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1" /> </circle>
                    </svg>
                    { text }
                </button>
            </div>

        )
    }
}

export default Button