declare class AudioWorkletProcessor {
  readonly port: MessagePort;
  process(
    inputs: Float32Array[][],
    outputs: Float32Array[][],
    parameters: Record<string, Float32Array>
  ): boolean;
}

declare function registerProcessor(
  name: string,
  processorCtor: new (options?: AudioWorkletNodeOptions) => AudioWorkletProcessor
): void;

interface AudioProcessorInputs extends Array<Float32Array[]> {}
interface AudioProcessorOutputs extends Array<Float32Array[]> {}
interface AudioProcessorParameters {
  [name: string]: Float32Array;
}

class RandomNoiseProcessor extends AudioWorkletProcessor {
    process(inputs: AudioProcessorInputs, outputs: AudioProcessorOutputs, parameters: AudioProcessorParameters): boolean {
      const output = outputs[0];
      output.forEach((channel: Float32Array) => {
        for (let i = 0; i < channel.length; i++) {
          channel[i] = Math.random() * 2 - 1;
        }
      });
      return true;
    }
  }
  
// class RandomNoiseProcessor extends AudioWorkletProcessor {
//   process(inputs, outputs, parameters) {
//     const output = outputs[0];
//     output.forEach((channel) => {
//       for (let i = 0; i < channel.length; i++) {
//         channel[i] = Math.random() * 2 - 1;
//       }
//     });
//     return true;
//   }
// }

registerProcessor("white_noise_processor", RandomNoiseProcessor);