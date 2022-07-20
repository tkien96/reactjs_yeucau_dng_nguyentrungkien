import './../../css/footer.css';
import Categories from './Categories';
import Contact from './Contact';
import Fanpage from './Fanpage';
import Info from './Info';

function Footer () {
    return (
        <>
            <div className="spacing" />
            <footer id="footer" className="bg-white">
                <div className="tcl-container">
                    <div className="footer">
                        <div className="tcl-row">
                            <Info />
                            <Categories />
                            <Contact />
                            <Fanpage />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer