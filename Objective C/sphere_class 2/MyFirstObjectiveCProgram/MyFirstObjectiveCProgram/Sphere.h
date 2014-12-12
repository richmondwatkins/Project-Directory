//
//  Sphere.h
//  MyFirstObjectiveCProgram
//
//  Created by Richmond on 8/27/14.
//  Copyright (c) 2014 treehouse. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface Sphere : NSObject {
    NSArray *_center;
    float _radius;
}

-(void)setRadius:(float)radius; //setter for radius
-(float)radius; //getter for radius   //how we interact with the class 

-(void)setCenter:(NSArray * )center;
-(NSArray *)center;
@end
