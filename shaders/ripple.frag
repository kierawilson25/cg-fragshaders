#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float time;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 texture_coord = (texcoord *2.0) - 1.0;
    float radius = length(texture_coord);
    vec2 coord_offset = texture_coord * (sin(radius * 30.0 - time * 5.0) + 0.5) / 60.0;

	vec2 final_texture = texture_coord + coord_offset;

	final_texture = (final_texture +1.0)* 0.5;


    FragColor = texture(image, final_texture);
}
