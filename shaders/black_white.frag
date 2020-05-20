#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
	
	vec4 temp_FC = texture(image, texcoord);
	float luminance = 0.299 * temp_FC.x + 0.587 * temp_FC.y + 0.114 * temp_FC.z;

    FragColor = vec4(luminance, luminance, luminance, 1.0);
}
