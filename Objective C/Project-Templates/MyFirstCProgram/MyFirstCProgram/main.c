//
//  main.c
//  MyFirstCProgram
//
//  Created by turner on 9/26/13.
//  Copyright (c) 2013 treehouse. All rights reserved.
//

#include <stdio.h>

typedef struct{
    float center[3];
    float radius;
} Sphere; //creates the sphere

Sphere makeSphere(float *c, float r);
int main()
{
    float c[] = { 23, 45, 67};
    float r = 32;
    Sphere ball = makeSphere(c, r); //creates an instance of sphere from the return value of makeSphere

    printf("center %f %f %f radius %f", ball.center[0], ball.center[1], ball.center[2], ball.radius);


    return 0;
}


Sphere makeSphere(float *c, float r){

    Sphere sphere; //creates an isntance of the Sphere
    sphere.center[0] = c[0];
    sphere.center[1] = c[1];
    sphere.center[2] = c[2];

    sphere.radius = r;

    return sphere;
}