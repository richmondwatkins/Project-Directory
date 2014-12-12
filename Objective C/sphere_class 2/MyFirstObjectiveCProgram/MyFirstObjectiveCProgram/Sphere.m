//
//  Sphere.m
//  MyFirstObjectiveCProgram
//
//  Created by Richmond on 8/27/14.
//  Copyright (c) 2014 treehouse. All rights reserved.
//

#import "Sphere.h"

@implementation Sphere

-(void)setRadius:(float)radius {
    _radius = radius;
}

-(float)radius {
    return _radius;
}

-(void)setCenter:(NSArray *)center {
    _center = center;
}

-(NSArray *)center {
    return _center;
}

@end
