#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
	vec4 temp_FC = texture(image, texcoord);

	temp_FC = round(temp_FC * 4.0) / 4.0;

    FragColor = temp_FC;
}
