// AUDIO PRONUNCIATION FIX
// Add this script to your DefinitionContent.astro or as a separate .js file

document.addEventListener('DOMContentLoaded', () => {
  const audioButton = document.querySelector('.audio-button');
  
  if (!audioButton) return;

  // Create audio elements with fallback chain
  let audio = null;
  let audioMp3 = null;
  let usingSpeechSynthesis = false;

  // Try to load audio files
  const audioPath = 'arcup-astro/public/audio/arcup-pronounce.ogg';
  const mp3Path = '/arcup/audio/EN-AU_dc1_arc_up.mp3';

  // Check if audio files exist (try loading mp3 as it's more universal)
  const testAudio = new Audio(mp3Path);
  
  testAudio.addEventListener('canplaythrough', () => {
    // Audio file loaded successfully
    audio = new Audio(mp3Path);
    audioMp3 = audio;
  }, { once: true });

  testAudio.addEventListener('error', () => {
    // Audio file not found, will use speech synthesis
    console.info('Audio files not found, will use Web Speech API fallback');
    usingSpeechSynthesis = true;
  }, { once: true });

  // Attempt to load
  testAudio.load();

  // Button click handler
  audioButton.addEventListener('click', async () => {
    try {
      // Try audio file first
      if (audio && !usingSpeechSynthesis) {
        audio.currentTime = 0;
        
        // Mobile Safari requires user interaction and often needs manual play promise handling
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
          playPromise.catch(err => {
            console.warn('Audio playback failed, trying fallback:', err);
            playWithSpeechSynthesis();
          });
        }
      } else {
        // Use Web Speech API fallback
        playWithSpeechSynthesis();
      }
      
      // Visual feedback
      audioButton.style.transform = 'scale(0.95)';
      setTimeout(() => {
        audioButton.style.transform = 'scale(1)';
      }, 150);
      
    } catch (err) {
      console.error('Pronunciation playback error:', err);
      playWithSpeechSynthesis();
    }
  });

  // Fallback using Web Speech Synthesis API (works on most mobile browsers)
  function playWithSpeechSynthesis() {
    if (!('speechSynthesis' in window)) {
      console.error('Speech synthesis not supported');
      showErrorFeedback();
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    // Create utterance
    const utterance = new SpeechSynthesisUtterance('arc up');
    
    // Try to use Australian English voice
    const voices = window.speechSynthesis.getVoices();
    const australianVoice = voices.find(voice => 
      voice.lang.includes('en-AU') || voice.name.includes('Australian')
    );
    
    if (australianVoice) {
      utterance.voice = australianVoice;
    } else {
      // Fallback to any English voice
      const englishVoice = voices.find(voice => voice.lang.startsWith('en'));
      if (englishVoice) utterance.voice = englishVoice;
    }
    
    utterance.rate = 0.9; // Slightly slower
    utterance.pitch = 1.0;
    
    // Speak
    window.speechSynthesis.speak(utterance);
  }

  // Load voices (they may not be loaded immediately)
  if ('speechSynthesis' in window) {
    // Chrome loads voices asynchronously
    if (speechSynthesis.getVoices().length === 0) {
      speechSynthesis.addEventListener('voiceschanged', () => {
        console.info('Voices loaded');
      }, { once: true });
    }
  }

  // Visual error feedback
  function showErrorFeedback() {
    audioButton.style.color = '#ff6b6b';
    setTimeout(() => {
      audioButton.style.color = '';
    }, 1000);
  }

  // Add CSS transition for button feedback
  audioButton.style.transition = 'transform 0.15s ease, color 0.3s ease';
});


