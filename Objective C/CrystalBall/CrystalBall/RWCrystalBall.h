//
//  RWCrystalBall.h
//  CrystalBall
//
//  Created by Richmond on 9/1/14.
//  Copyright (c) 2014 Richmond. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface RWCrystalBall : NSObject {
    NSArray *_predictions;
}

@property (strong, nonatomic) NSArray *predictions;

- (NSString*) randomPrediction;

@end
