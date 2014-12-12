//
//  main.m
//  MyFirstObjectiveCProgram
//
//  Created by turner on 9/26/13.
//  Copyright (c) 2013 treehouse. All rights reserved.
//

#import <Cocoa/Cocoa.h>
#import "Sphere.h"

int main()
{
    Sphere *ball = [[Sphere alloc] init];
    [ball setRadius:25]; //setRadius sets the radius of ball
    NSLog(@"ball radius %f", [ball radius]); //this returns the radius of the ball
    
    return 0;
}
