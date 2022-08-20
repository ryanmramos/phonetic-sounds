// import './styles.css'
import EngConsonantTable from "./components/engConsTable";
import Footer from "./components/footer";

function Main() {
    return(
        <>
        <EngConsonantTable />
        {/* <Footer /> */}
        </>
    );
}

/*
    Exits a modal if one is currently being viewed when the
    ESC key is pressed.
*/
document.addEventListener('keyup', function(e) {
    if(e.key === "Escape") {
        const modals = document.querySelectorAll('.modal-overlay');
        for (const modal of modals) {
            modal.click();
        }
    }
});

export default Main;