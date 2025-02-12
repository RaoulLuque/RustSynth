import { generate_sine_wave_table } from '../pkg/RustSynth';

async function run() {
    const waveTable = generate_sine_wave_table(512);

    document.addEventListener('click', () => {
        const audioContext = new AudioContext();

        const periodicWave = audioContext.createPeriodicWave(
            waveTable,
            new Float32Array(waveTable.length)
        );

        const oscillator = audioContext.createOscillator();
        oscillator.setPeriodicWave(periodicWave);
        oscillator.connect(audioContext.destination);
        oscillator.start();

        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }

        console.log('Audio context started and oscillator playing!');
    }, { once: true });
}

run();
