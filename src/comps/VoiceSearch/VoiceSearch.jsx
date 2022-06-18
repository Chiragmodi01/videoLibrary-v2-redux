import React, {useState, useEffect} from 'react'
import "./VoiceSearch.css";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import {IoMdMic} from '../../utils/getIcons'
import {loading} from '../../assets/svgs';
import { useMain } from '../../helpers/context/main-context';

function VoiceSearch( ) {
  const {listening, transcript, resetTranscript} = useSpeechRecognition();
  const {utilsDispatch} = useMain();

  const [voiceMode, setVoiceMode] = useState(false);

  const voiceSearchHandler = () => {
    if(listening) {
        SpeechRecognition.stopListening();
        setVoiceMode(false);
    } else {
        SpeechRecognition.startListening();
        setVoiceMode(true);
    }
  }

  useEffect(() => {
    transcript && utilsDispatch({type: "SEARCH_QUERY", payload: transcript});
  }, [transcript])

  return (
    <div className='VoiceSearch' title="Search with your voice" onClick={() => voiceSearchHandler()}>
        {listening ? <img className='loading-svg' src={loading} alt="loading"/> : <IoMdMic size="1.2em" className='icon-mic'/>}
    </div>
  )
}

export {VoiceSearch}
