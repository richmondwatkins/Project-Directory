//
//  Sphere.h
//  MyFirstObjectiveCProgram
//
//  Created by dugla on 9/27/13.
//  Copyright (c) 2013 treehouse. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface Sphere : NSObject {
    
    NSArray *_center;
    float _radius;
}

-(void)setRadius:(float)radius;
-(float)radius;

-(void)setCenter:(NSArray *)center;
-(NSArray *)center;
-(void)setCenter:(NSArray *)center radius:(float)radius;
@end
