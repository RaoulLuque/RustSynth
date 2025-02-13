import { generate_sine_wave_table, init } from '../../pkg/rust_synth';

async function run() {
    init();

    const waveTable: Float32Array = generate_sine_wave_table(512);

    document.addEventListener('click', async () => {
        const audioContext = new AudioContext();

        await audioContext.audioWorklet.addModule('white_noise_processor.js');
  
        const soundNode = new AudioWorkletNode(audioContext, 'white_noise_processor');
        soundNode.connect(audioContext.destination);

        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }

        console.log('Audio context started and oscillator playing!');
    }, { once: true });
}

run();
