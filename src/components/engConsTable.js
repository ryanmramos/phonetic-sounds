import '../styles.css'
import Symbol from './symbol';
import ConsonantModal from './consonantModals/consonantModalEx';
import MainModal from './consonantModals/mainModal';

// const mpd3PlaceHolder = "https://d1vjc5dkcd3yh2.cloudfront.net/audio/e9bc0e3a05fc6f2da28e8eedc7421869.mp3";
const cloudfrontAudio = "https://d1uppp311f1f34.cloudfront.net/symbolsounds/"

function EngConsonantTable() {
    return (
        <>
        <MainModal />
        <div id="sound-table" class="table-container u-round-sm">
            {/* <div id="table-title">
                English Consonants
            </div> */}
            <table class="table bordered" style={{ marginBottom: 0 }}>
                <caption class="u-text-center" id="table-title">English Consonants</caption>
                <caption class="u-text-left" id="table-footer">
                    For symbols that are in pairs, the one to right represents a voiced counterpart.
                </caption>
                <thead>
                    <tr>
                        <th></th>
                        <th colSpan={2}>
                            <a href="#bilabial-modal">
                                Bilabial
                            </a>
                        </th>
                        <th colSpan={2}>
                            <a href="#labiodental-modal">
                                Labiodental
                            </a>
                        </th>
                        <th colSpan={2}>
                            <a href="#dental-modal">
                                Dental
                            </a>
                        </th>
                        <th colSpan={2}>
                            <a href="#alveolar-modal">
                                Alveolar
                            </a>
                        </th>
                        <th colSpan={2}>
                            <a href="#postalveolar-modal">
                                Postalveolar
                            </a>
                        </th>
                        <th colSpan={2}>
                            <a href="#palatal-modal">
                                Palatal
                            </a>
                        </th>
                        <th colSpan={2}>
                            <a href="#velar-modal">
                                Velar
                            </a>
                        </th>
                        <th colSpan={2}>
                            <a href="#glottal-modal">
                                Glottal
                            </a>
                        </th>
                    </tr>
                </thead>
                <tbody id="tbody">
                    <tr>
                        <th>
                            <a href="#oralstop-modal">
                                Oral stops
                            </a>
                        </th>
                        <td><Symbol symbol="p" sound={cloudfrontAudio + "p.mp3"} /></td>
                        <td><Symbol symbol="b" sound={cloudfrontAudio + "b.mp3"} /></td>
                        <td colSpan={2} />
                        <td colSpan={2} />
                        <td><Symbol symbol="t" sound={cloudfrontAudio + "t.mp3"} /></td>
                        <td><Symbol symbol="d" sound={cloudfrontAudio + "d.mp3"} /></td>
                        <td colSpan={2} />
                        <td colSpan={2} />
                        <td><Symbol symbol="k" sound={cloudfrontAudio + "k.mp3"} /></td>
                        <td><Symbol symbol="g" sound={cloudfrontAudio + "g.mp3"} /></td>
                        <td><Symbol symbol="ʔ" sound={cloudfrontAudio + "ʔ.mp3"} /></td>
                        <td />
                    </tr>
                    <tr>
                        <th>
                            <a href="#affricate-modal">
                                Affricates
                            </a>
                        </th>
                        <td colSpan={2} />
                        <td colSpan={2} />
                        <td colSpan={2} />
                        <td colSpan={2} />
                        <td><Symbol symbol="t͡ʃ" sound={cloudfrontAudio + "t͡ʃ.mp3"} /></td>
                        <td><Symbol symbol="d͡ʒ" sound={cloudfrontAudio + "d͡ʒ.mp3"} /></td>
                        <td colSpan={2} />
                        <td colSpan={2} />
                        <td colSpan={2} />
                    </tr>
                    <tr>
                        <th>
                            <a href="#nasalstop-modal">
                                Nasal stops
                            </a>
                        </th>
                        <td />
                        <td><Symbol symbol="m" sound={cloudfrontAudio + "m.mp3"} /></td>
                        <td colSpan={2} />
                        <td colSpan={2} />
                        <td />
                        <td><Symbol symbol="n" sound={cloudfrontAudio + "n.mp3"} /></td>
                        <td colSpan={2} />
                        <td colSpan={2} />
                        <td />
                        <td><Symbol symbol="ŋ" sound={cloudfrontAudio + "ŋ.mp3"} /></td>
                        <td colSpan={2} />
                    </tr>
                    <tr>
                        <th>
                            <a href="#flap-modal">
                                Flap (tap)
                            </a>
                        </th>
                        <td colSpan={2} />
                        <td colSpan={2} />
                        <td colSpan={2} />
                        <td />
                        <td><Symbol symbol="ɾ" sound={cloudfrontAudio + "ɾ.mp3"} /></td>
                        <td colSpan={2} />
                        <td colSpan={2} />
                        <td colSpan={2} />
                        <td colSpan={2} />
                    </tr>
                    <tr>
                        <th>
                            <a href="#fricative-modal">
                                Fricatives
                            </a>
                        </th>
                        <td colSpan={2} />
                        <td><Symbol symbol="f" sound={cloudfrontAudio + "f.mp3"} /></td>
                        <td><Symbol symbol="v" sound={cloudfrontAudio + "v.mp3"} /></td>
                        <td><Symbol symbol="θ" sound={cloudfrontAudio + "θ.mp3"} /></td>
                        <td><Symbol symbol="ð" sound={cloudfrontAudio + "ð.mp3"} /></td>
                        <td><Symbol symbol="s" sound={cloudfrontAudio + "s.mp3"} /></td>
                        <td><Symbol symbol="z" sound={cloudfrontAudio + "z.mp3"} /></td>
                        <td><Symbol symbol="ʃ" sound={cloudfrontAudio + "ʃ.mp3"} /></td>
                        <td><Symbol symbol="ʒ" sound={cloudfrontAudio + "ʒ.mp3"} /></td>
                        <td colSpan={2} />
                        <td colSpan={2} />
                        <td><Symbol symbol="h" sound={cloudfrontAudio + "h.mp3"} /></td>
                        <td />
                    </tr>
                    <tr>
                        <th>
                            <a href="#centralapprox-modal">
                                Central approximants
                            </a>
                        </th>
                        <td />
                        <td><Symbol symbol="w" sound={cloudfrontAudio + "w.mp3"} /></td>
                        <td colSpan={2} />
                        <td colSpan={2} />
                        <td />
                        <td><Symbol symbol="ɹ" sound={cloudfrontAudio + "ɹ.mp3"} /></td>
                        <td colSpan={2} />
                        <td />
                        <td><Symbol symbol="j" sound={cloudfrontAudio + "j.mp3"} /></td>
                        <td />
                        <td><Symbol symbol="w" sound={cloudfrontAudio + "w.mp3"} /></td>
                        <td colSpan={2} />
                    </tr>
                    <tr>
                        <th>
                            <a href="#lateralapprox-modal">
                                Lateral approximants
                            </a>
                        </th>
                        <td colSpan={2} />
                        <td colSpan={2} />
                        <td colSpan={2} />
                        <td />
                        <td><Symbol symbol="l" sound={cloudfrontAudio + "l.mp3"} /></td>
                        <td colSpan={2} />
                        <td colSpan={2} />
                        <td colSpan={2} />
                        <td colSpan={2} />
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    );
}

export default EngConsonantTable;