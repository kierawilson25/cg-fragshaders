#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float width;
uniform float height;
uniform sampler2D image;

out vec4 FragColor;

void main() {
	float w = 1.0/ width;
	float h = 1.0/ height;

 	vec3 bottom_left   = texture(image, texcoord + vec2(-w, -h)).rgb;
 	vec3 bottom_center = texture(image, texcoord + vec2(0.0, -h)).rgb;
 	vec3 bottom_right  = texture(image, texcoord + vec2(w, -h)).rgb;
 	vec3 middle_left   = texture(image, texcoord + vec2(-w, 0.0)).rgb;
 	vec3 middle_center = texture(image, texcoord).rgb;
 	vec3 middle_right  = texture(image, texcoord + vec2(w, 0.0)).rgb;
 	vec3 top_left      = texture(image, texcoord + vec2(-w, h)).rgb;
 	vec3 top_center    = texture(image, texcoord + vec2(0.0, h)).rgb;
 	vec3 top_right     = texture(image, texcoord + vec2(w, h)).rgb;

 	vec3 sobel_h = bottom_right + (2.0 * center_right) + top_right - bottom_left - (2.0*center_left) - top_left;
 	vec3 sobel_v = bottom_left + (2.0 * bottom_center) + bottom_right - top_left - (2.0 * top_center) - top_right;
 	sobel_edge = sqrt(sobel_h * sobel_h + sobel_v * sobel_v);

 	if(length(sobel_edge) >= 0.5){
 		FragColor = vec4(0.0,0.0,0.0,1.0);
 	}


    FragColor = texture(image, texcoord);
}
