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
        </>
    );
}

/*
    Model for all consonant models.
    props:
        - props.header: name of modal
        - props.body: description of modal (HTML)
*/
function ConsonantModal(props) {
    return(
        <>
        <a href="#modal" class="modal-overlay close-btn" aria-label="Close"></a><div class="modal-content" role="document">
            <div class="modal-header">
                <div class="modal-header">
                    <h3>{props.header}</h3>
                </div>
                <div class="modal-body">
                    {props.body}
                </div>
                <div class="modal-footer">
                    <div class="form-section u-text-right">
                        <a href="#modal">
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