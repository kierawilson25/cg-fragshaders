#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 texture_coord = (texcoord * 2.0) - 1.0;
    float theta = atan(texture_coord.y, texture_coord.x);
    float radius = pow(length(texture_coord), 1.5);
    vec2 final_texture = vec2(radius * cos(theta), radius * sin(theta));

    final_texture = (final_texture+1.0) *0.5;
    


     FragColor = final_texture * texture(image, texcoord);
}
