import '../styles.css'
import Symbol from './symbol';
import ConsonantModal from './consonantModals/consonantModalEx';
import MainModal from './consonantModals/mainModal';

const mp3PlaceHolder = "https://d1vjc5dkcd3yh2.cloudfront.net/audio/e9bc0e3a05fc6f2da28e8eedc7421869.mp3";

function EngConsonantTable() {
    return (
        <>
        <MainModal />
        <div id="sound-table" class="table-container">
            <div class="u-unselectable" id="table-title">
                English Consonants
            </div>
            <table class="table bordered" style={{ marginBottom: 0 }}>
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
                        <th>Oral stops</th>
                        <td><Symbol symbol="p" sound={mp3PlaceHolder} /></td>
                        <td><Symbol symbol="b" sound={mp3PlaceHolder} /></td>
                        <td colSpan={2} />
                        <td colSpan={2} />
                        <td><Symbol symbol="t" sound={mp3PlaceHolder} /></td>
                        <td><Symbol symbol="d" sound={mp3PlaceHolder} /></td>
                        <td colSpan={2} />
                        <td colSpan={2} />
                        <td><Symbol symbol="k" sound={mp3PlaceHolder} /></td>
                        <td><Symbol symbol="g" sound={mp3PlaceHolder} /></td>
                        <td><Symbol symbol="ʔ" sound={mp3PlaceHolder} /></td>
                        <td />
                    </tr>
                    <tr>
                        <th>Affricates</th>
                        <td colSpan={2} />
                        <td colSpan={2} />
                        <td colSpan={2} />
                        <td colSpan={2} />
                        <td><Symbol symbol="tʃ" sound={mp3PlaceHolder} /></td>
                        <td><Symbol symbol="dʒ" sound={mp3PlaceHolder} /></td>
                        <td colSpan={2} />
                        <td colSpan={2} />
                        <td colSpan={2} />
                    </tr>
                    <tr>
                        <th>Nasal stops</th>
                        <td />
                        <td><Symbol symbol="m" sound={mp3PlaceHolder} /></td>
                        <td colSpan={2} />
                        <td colSpan={2} />
                        <td />
                        <td><Symbol symbol="n" sound={mp3PlaceHolder} /></td>
                        <td colSpan={2} />
                        <td colSpan={2} />
                        <td />
                        <td><Symbol symbol="ŋ" sound={mp3PlaceHolder} /></td>
                        <td colSpan={2} />
                    </tr>
                    <tr>
                        <th>Flap (tap)</th>
                        <td colSpan={2} />
                        <td colSpan={2} />
                        <td colSpan={2} />
                        <td />
                        <td><Symbol symbol="ɾ" sound={mp3PlaceHolder} /></td>
                        <td colSpan={2} />
                        <td colSpan={2} />
                        <td colSpan={2} />
                        <td colSpan={2} />
                    </tr>
                    <tr>
                        <th>Fricatives</th>
                        <td colSpan={2} />
                        <td><Symbol symbol="f" sound={mp3PlaceHolder} /></td>
                        <td><Symbol symbol="v" sound={mp3PlaceHolder} /></td>
                        <td><Symbol symbol="θ" sound={mp3PlaceHolder} /></td>
                        <td><Symbol symbol="ð" sound={mp3PlaceHolder} /></td>
                        <td><Symbol symbol="s" sound={mp3PlaceHolder} /></td>
                        <td><Symbol symbol="z" sound={mp3PlaceHolder} /></td>
                        <td><Symbol symbol="ʃ" sound={mp3PlaceHolder} /></td>
                        <td><Symbol symbol="ʒ" sound={mp3PlaceHolder} /></td>
                        <td colSpan={2} />
                        <td colSpan={2} />
                        <td><Symbol symbol="h" sound={mp3PlaceHolder} /></td>
                        <td />
                    </tr>
                    <tr>
                        <th>Central approximants</th>
                        <td />
                        <td><Symbol symbol="w" sound={mp3PlaceHolder} /></td>
                        <td colSpan={2} />
                        <td colSpan={2} />
                        <td />
                        <td><Symbol symbol="ɹ" sound={mp3PlaceHolder} /></td>
                        <td colSpan={2} />
                        <td />
                        <td><Symbol symbol="j" sound={mp3PlaceHolder} /></td>
                        <td />
                        <td><Symbol symbol="w" sound={mp3PlaceHolder} /></td>
                        <td colSpan={2} />
                    </tr>
                    <tr>
                        <th>Lateral approximants</th>
                        <td colSpan={2} />
                        <td colSpan={2} />
                        <td colSpan={2} />
                        <td />
                        <td><Symbol symbol="l" sound={mp3PlaceHolder} /></td>
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