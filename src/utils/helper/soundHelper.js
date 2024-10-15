import Sound from "react-native-sound";


export const playSound = () => {
    const sound = new Sound('ringtone.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('Failed to load the sound', error);
            return;
        }
        sound.setVolume(1);
        sound.play(() => {
            // Release the sound after playing
            sound.release();
        });
    });
};
