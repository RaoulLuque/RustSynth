mod utils;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, rusty-web-synth!");
}

#[wasm_bindgen]
pub fn generate_sine_wave_table(length: usize) -> Vec<f32> {
    let mut wave_table = Vec::with_capacity(length);
    for i in 0..length {
        let phase = (i as f32 / length as f32) * 2.0 * std::f32::consts::PI;
        wave_table.push(phase.sin());
    }
    wave_table
}