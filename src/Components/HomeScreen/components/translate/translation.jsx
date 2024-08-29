import React, { useState } from 'react';
import './translate.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh,  faCopy, faArrowsRotate} from '@fortawesome/free-solid-svg-icons';

const Translator = () => {
    const [inputText, setInputText] = useState('');
    const [translatedText, setTranslatedText] = useState('');

    const handleTranslate = () => {
        // Simulating a translation process
        const fakeTranslation = `${inputText} (translated)`;
        setTranslatedText(fakeTranslation);
    };

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(translatedText);
        alert('Text copied to clipboard!');
    };

    const handleSpeak = (text, language) => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            // Default to English if language is not provided
            utterance.lang = language || 'en'; 
            window.speechSynthesis.speak(utterance);
        } else {
            alert('Sorry, your browser does not support text-to-speech.');
        }
    };

    return(
        <div className='translate'>
            <div className="header">
                <h2>Ma'a Translation</h2>
            </div>

            <div className="options">
                <div className="option">
                    <span>Text</span>
                </div>
                <div className="option">
                    <span>Documents</span>
                </div>
                <div className="option">
                    <span>Images</span>
                </div>
            </div>

            <div className="select-language">
                <div className="select">
                  <select>
                    <option value="bu">Bulu</option>
                    <option value="en">English</option>
                    <option value="fr">French</option>
                  </select>
                </div>

                <div className="transIcon">
                    <i><FontAwesomeIcon icon={faArrowsRotate} onClick={handleTranslate}/></i>
                </div>

                <div className="select">
                  <select>
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="bu">Bulu</option>
                  </select>
                </div>
            </div>

            <div className="box">
                <div className="box1">
                    <div className="text">
                        <textarea placeholder='Let start...'
                         rows={8} cols={25}
                         value={inputText}
                         onChange={handleInputChange}
                         ></textarea>
                    </div>

                    <div className="details">
                        {translatedText && (
                            <div className="speaker">
                                <i><FontAwesomeIcon icon={faVolumeHigh}  
                                  onClick={() => handleSpeak(inputText, 'en')} />
                                </i>
                            </div>
                        )}
                        <div className="info">
                            <span>{inputText.length}/500</span>
                        </div>
                    </div>
                </div>
                <div className="box2">
                    <div className="text-trans">
                       <textarea readOnly disabled
                         placeholder='Traduction...'
                         rows={8} cols={25}
                         value={translatedText}
                        ></textarea>
                    </div>

                    <div className="details">
                        {translatedText && (
                            <>
                                <div className="speaker">
                                    <i><FontAwesomeIcon icon={faVolumeHigh} 
                                     onClick={() => handleSpeak(inputText, 'fr')}/>
                                    </i>
                                </div>
                                <div className="info">
                                    <i><FontAwesomeIcon icon={faCopy} onClick={handleCopy} /></i>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Translator;
