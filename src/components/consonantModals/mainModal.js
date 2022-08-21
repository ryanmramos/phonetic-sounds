const modalStyle = "modal modal-animated--zoom-in";

function MainModal() {
    return(
        <>
        <div class={modalStyle} id="bilabial-modal">
            <ConsonantModal 
                header="Bilabial"
                body={<>Sounds that invole a narrowing or a complete close of <u>the upper and lower lip</u> are
                        called <b>bilabials</b>.</>
                }
            />
        </div>
        <div class={modalStyle} id="labiodental-modal">
            <ConsonantModal
                header="Labiodental"
                body={<>Sounds involving <u>the upper teeth and the lower lip</u> are referred to
                as <b>labiodentals</b>.</>
                }
            />
        </div>
        <div class={modalStyle} id="dental-modal">
            <ConsonantModal
                header="Dental"
                body={<>Sounds produced by sticking <u>the tip of the tongue between the upper
                    and lower teeth</u> are said to be <b>interdental</b> while sounds produced
                    by placing <u>the tip of the tongue against the back of the upper teeth</u> are
                    simply called <b>dentals</b>.</>}
            />
        </div>
        <div class={modalStyle} id="alveolar-modal">
            <ConsonantModal
                header="Alveolar"
                body={<>Sounds involving <u>the tongue coming close to or coming into contact with
                    the alveolar ridge</u> (the hard ridge just behind the teeth before the upper
                    surface of the mouth becomes more domed in shape) are <b>alveolar sounds</b>.</>}
            />
        </div>
        <div class={modalStyle} id="postalveolar-modal">
            <ConsonantModal
                header="Postalveolar"
                body={<>Sounds that are produced with <u>the tongue contacting the area just behind
                    the alveolar ridge</u> are <b>postalveolar</b> (or <b>palato-alveolar</b>) sounds.</>}
            />
        </div>
        <div class={modalStyle} id="palatal-modal">
            <ConsonantModal
                header="Palatal"
                body={<>Sounds involving contact with <u>the roof of the mouth in the center
                    of the hard palate</u> are termed <b>palatals</b>.</>}
            />
        </div>
        <div class={modalStyle} id="velar-modal">
            <ConsonantModal
                header="Velar"
                body={<>Sounds procuced by contacting <u>the tongue and the soft
                    palate (or velum)</u> are termed <b>velars</b>.</>}
            />
        </div>
        <div class={modalStyle} id="glottal-modal">
            <ConsonantModal
                header="Glottal"
                body={<>Sounds produced with the stoppage of airflow by <u>closing the
                    glottis (the space between the vocal folds)</u> are called <b>glottal
                    stops</b>.</>}
            />
        </div>
        <div class={modalStyle} id="oralstop-modal">
            <ConsonantModal
                header="Oral stops"
                body={<>Sounds involving a <u>complete closure of the vocal tract</u> with
                    no nasal airflow are called <b>oral stops</b>.</>}
            />
        </div>
        <div class={modalStyle} id="affricate-modal">
            <ConsonantModal
                header="Affricates"
                body={<>Sounds that are produced by combining <u>a stop with a following
                    fricative</u> in rapid succession are <b>affricates</b>.</>}
            />
        </div>
        <div class={modalStyle} id="nasalstop-modal">
            <ConsonantModal
                header="Nasal stops"
                body={<>Sounds involving a <u>complete closure of the vocal tract</u> with
                    nasal airflow are called <b>nasal stops</b>.</>}
            />
        </div>
        <div class={modalStyle} id="flap-modal">
            <ConsonantModal
                header="Flap (tap)"
                body={<>Sounds that are produced with <u>a complete closure at the alveolar
                    ridge</u> are called <b>flaps</b>. (The key difference between a stop and
                    a flap is the extreme shortness of the closure for the flap).</>}
            />
        </div>
        <div class={modalStyle} id="fricative-modal">
            <ConsonantModal
                header="Fricatives"
                body={<>Sounds produced by <u>a tight narrowing of articulators</u> are
                    termed <b>fricatives</b>.</>}
            />
        </div>
        <div class={modalStyle} id="centralapprox-modal">
            <ConsonantModal
                header="Central approximants"
                body={<>Sounds produced through <u>a slight narrowing of the vocal tract</u>, but
                    not enough to cause noise or a complete obstruction are
                    called <b>approximants</b>. (Difference between central and lateral noted in
                    lateral approximant description).</>}
            />
        </div>
        <div class={modalStyle} id="lateralapprox-modal">
            <ConsonantModal
                header="Lateral approximants"
                body={<>The <b>l</b> sound is the only lateral approximant in English
                    and is an approximant produced with <u>a closure only in the center
                    of the mouth</u>, making it a <b>lateral approximant</b>.</>}
            />
        </div>
        </>
    );
}

/*
    Model for all consonant manner and place.
    props:
        - props.header: name of modal
        - props.body: description of modal (HTML)
*/
function ConsonantModal(props) {
    return(
        <>
        <a href="#" class="modal-overlay close-btn" aria-label="Close"></a><div class="modal-content" role="document">
            <div class="modal-header">
                <div class="modal-header">
                    <h3>{props.header}</h3>
                </div>
                <div class="modal-body">
                    {props.body}
                </div>
                <div class="modal-footer">
                    <div class="form-section u-text-right">
                        <a href="#">
                            <buttonn class="btn btn--sm u-inline-block">CLOSE</buttonn>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

function SymbolModal(props) {
    return(
        <>
        <a href="#" class="modal-overlay close-btn" aria-label="Close"></a><div class="modal-content" role="document">
            <div class="modal-header">
                <div class="modal-header">
                    <h3>{props.header}</h3>
                </div>
                <div class="modal-body">
                    {props.body}
                </div>
                <div class="modal-footer">
                    <div class="form-section u-text-right">
                        <a href="#">
                            <buttonn class="btn btn--sm u-inline-block">CLOSE</buttonn>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default MainModal;