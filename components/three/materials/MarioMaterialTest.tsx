import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';

const WaveShaderMaterial = shaderMaterial(
  // Uniform
  // provide a way to pass data from JS to shader, can be props eg. uHovered
  { uTime: 0, uColor: new THREE.Color(0.0, 0.0, 0.0), uTexture: new THREE.Texture(), uHovered: 0.0 },

  // Vertex shader
  // runs first, receives attributes and positions each vertex in a geometry
  glsl`
    // determines how much precision the GPU uses to calculate floats - also lowp and highp
    attribute vec2 aVertexPosition; 
    void main() { 
      gl_Position = vec4(aVertexPosition, 0.0, 1.0); 
    }
  `,

  // Fragment shader
  // runs after vertex shader, sets colour of each fragment (pixel) of the geometry
  glsl`
    #ifdef GL_ES 
      precision highp float; 
    #endif 
    #define PI 3.1415926538;
    #define TWO_PI 6.28318530718;
    uniform float uTime; 
    uniform vec2 uResolution;
    mat2 rotation2d(float angle) { 
      float s = sin(angle); float c = cos(angle); return mat2( c, -s, s, c ); 
    } 
    vec2 rotate(vec2 v, float angle) { 
      return rotation2d(angle) * v; 
    } 
    vec3 cospalette(float t) { 
      vec3 brightness = vec3(1.0, 0.8, 1.0); 
      vec3 contrast = vec3(1.0, 0.9, 0.8); 
      vec3 oscillation = vec3(1.0, 1.0, 1.0); 
      vec3 phase = vec3(0.5, 0.8, 1.0); 
      return brightness + contrast * cos(6.28318 * (oscillation * t + phase)); 
    } 
    float random(vec2 st) { 
      return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123); 
    } 
    float map(float value, float inMin, float inMax, float outMin, float outMax) { 
      return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin); 
    } 
    #define NUM_OCTAVES 5;
    float mod289(float x){
      return x - floor(x * (1.0 / 289.0)) * 289.0;
    } 
    vec4 mod289(vec4 x){
      return x - floor(x * (1.0 / 289.0)) * 289.0;
    } 
    vec4 perm(vec4 x){
      return mod289(((x * 34.0) + 1.0) * x);
    }
    float noise(vec3 p){ 
      vec3 a = floor(p);
      vec3 d = p - a; d = d * d * (3.0 - 2.0 * d);
      vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
      vec4 k1 = perm(b.xyxy); 
      vec4 k2 = perm(k1.xyxy + b.zzww); 
      vec4 c = k2 + a.zzzz; 
      vec4 k3 = perm(c); 
      vec4 k4 = perm(c + 1.0); 
      vec4 o1 = fract(k3 * (1.0 / 41.0)); 
      vec4 o2 = fract(k4 * (1.0 / 41.0)); 
      vec4 o3 = o2 * d.z + o1 * (1.0 - d.z); 
      vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x); 
      return o4.y * d.y + o4.x * (1.0 - d.y); 
    } 
    float fbm(vec3 x) { 
      float v = 0.0; 
      float a = 0.5; 
      vec3 shift = vec3(100); 
      for (int i = 0; i < NUM_OCTAVES; ++i) { 
        v += a * noise(x); x = x * 2.0 + shift; a *= 0.5; 
      } 
      return v; 
    } 
    void main() { 
      float t = uTime * 0.5; 
      vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution) / uResolution.y * 1.5; 
      float angle = sin(length(uv) * 1.0); uv = rotate(uv, angle * 10.0 - t * 2.0); 
      vec2 puv = vec2(length(uv), atan(uv.x, uv.y)); 
      float fb = fbm(vec3(uv, puv.x)); 
      float x = map(sin(puv.x * 2.0 + fb + t), -1.0, 1.0, 0.0, 1.0); 
      x = sin(puv.x * 1.0 + fb * 3.5 + t + PI * 1.49) * 0.5; 
      vec3 color = cospalette(x); 
      gl_FragColor = vec4(color, 1); 
    }
  `
);

export default WaveShaderMaterial;

// const canvas = document.createElement('canvas');
// document.body.appendChild(canvas);
// const gl = canvas.getContext('webgl');
// const vertexShaderSource = /* glsl */ `attribute vec2 aVertexPosition; void main() { gl_Position = vec4(aVertexPosition, 0.0, 1.0); }`;
// var fragmentShaderSource = /* glsl */ `#ifdef GL_ES precision highp float; #endif #define PI 3.1415926538 #define TWO_PI 6.28318530718 uniform float uTime; uniform vec2 uResolution; mat2 rotation2d(float angle) { float s = sin(angle); float c = cos(angle); return mat2( c, -s, s, c ); } vec2 rotate(vec2 v, float angle) { return rotation2d(angle) * v; } vec3 cospalette(float t) { vec3 brightness = vec3(1.0, 0.8, 1.0); vec3 contrast = vec3(1.0, 0.9, 0.8); vec3 oscillation = vec3(1.0, 1.0, 1.0); vec3 phase = vec3(0.5, 0.8, 1.0); return brightness + contrast * cos(6.28318 * (oscillation * t + phase)); } float random(vec2 st) { return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123); } float map(float value, float inMin, float inMax, float outMin, float outMax) { return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin); } #define NUM_OCTAVES 5 float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;} vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;} vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);} float noise(vec3 p){ vec3 a = floor(p); vec3 d = p - a; d = d * d * (3.0 - 2.0 * d); vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0); vec4 k1 = perm(b.xyxy); vec4 k2 = perm(k1.xyxy + b.zzww); vec4 c = k2 + a.zzzz; vec4 k3 = perm(c); vec4 k4 = perm(c + 1.0); vec4 o1 = fract(k3 * (1.0 / 41.0)); vec4 o2 = fract(k4 * (1.0 / 41.0)); vec4 o3 = o2 * d.z + o1 * (1.0 - d.z); vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x); return o4.y * d.y + o4.x * (1.0 - d.y); } float fbm(vec3 x) { float v = 0.0; float a = 0.5; vec3 shift = vec3(100); for (int i = 0; i < NUM_OCTAVES; ++i) { v += a * noise(x); x = x * 2.0 + shift; a *= 0.5; } return v; } void main() { float t = uTime * 0.5; vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution) / uResolution.y * 1.5; float angle = sin(length(uv) * 1.0); uv = rotate(uv, angle * 10.0 - t * 2.0); vec2 puv = vec2(length(uv), atan(uv.x, uv.y)); float fb = fbm(vec3(uv, puv.x)); float x = map(sin(puv.x * 2.0 + fb + t), -1.0, 1.0, 0.0, 1.0); x = sin(puv.x * 1.0 + fb * 3.5 + t + PI * 1.49) * 0.5; vec3 color = cospalette(x); gl_FragColor = vec4(color, 1); }`;
// const vertexShader = gl.createShader(gl.VERTEX_SHADER);
// gl.shaderSource(vertexShader, vertexShaderSource);
// gl.compileShader(vertexShader);
// const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
// gl.shaderSource(fragmentShader, fragmentShaderSource);
// gl.compileShader(fragmentShader);
// const program = gl.createProgram();
// gl.attachShader(program, vertexShader);
// gl.attachShader(program, fragmentShader);
// gl.linkProgram(program);
// const vertices = new Float32Array([-1, 1, 1, 1, 1, -1, -1, 1, 1, -1, -1, -1]);
// const vertexBuffer = gl.createBuffer();
// gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
// gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
// const itemSize = 2;
// const numItems = vertices.length / itemSize;
// program.aVertexPosition = gl.getAttribLocation(program, 'aVertexPosition');
// gl.enableVertexAttribArray(program.aVertexPosition);
// gl.vertexAttribPointer(program.aVertexPosition, itemSize, gl.FLOAT, false, 0, 0);
// gl.useProgram(program);
// gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
// function render() {
//   gl.viewport(0, 0, canvas.width, canvas.height);
//   gl.clearColor(1, 1, 1, 1);
//   gl.clear(gl.COLOR_BUFFER_BIT);
//   program.uTime = gl.getUniformLocation(program, 'uTime');
//   gl.uniform1f(program.uTime, 0.001 * performance.now());
//   gl.drawArrays(gl.TRIANGLES, 0, numItems);
//   requestAnimationFrame(render);
// }
// function resize() {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   program.uResolution = gl.getUniformLocation(program, 'uResolution');
//   gl.uniform2fv(program.uResolution, [window.innerWidth, window.innerHeight]);
// }
// resize();
// render();
// window.addEventListener('resize', resize);
