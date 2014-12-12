//
//  RWCrystalBall.m
//  CrystalBall
//
//  Created by Richmond on 9/1/14.
//  Copyright (c) 2014 Richmond. All rights reserved.
//

#import "RWCrystalBall.h"

@implementation RWCrystalBall

- (NSArray *) predictions {
    if (_predictions == nil) {
        _predictions = [[NSArray alloc] initWithObjects:@"It is certain", @"It is decidedly so", @"The stars are not aligned", @"My reply is no", @"It is doubtful", @"Better not tell you now", @"Concentrate and ask again", @"Unable to answer now", nil];
    }
    return _predictions;
}

- (NSString*) randomPrediction {
    int random = arc4random_uniform(self.predictions.count);
    return [self.predictions objectAtIndex:random];
}

@end
