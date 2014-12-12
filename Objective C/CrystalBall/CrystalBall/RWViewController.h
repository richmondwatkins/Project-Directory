//
//  RWViewController.h
//  CrystalBall
//
//  Created by Richmond on 8/29/14.
//  Copyright (c) 2014 Richmond. All rights reserved.
//

#import <UIKit/UIKit.h>

@class RWCrystalBall;

@interface RWViewController : UIViewController
@property (strong, nonatomic) IBOutlet UILabel *predictionLabel;
@property (strong, nonatomic) RWCrystalBall *crystalBall;
@property (strong, nonatomic) IBOutlet UIImageView *backgroundImageView;


- (void) makePrediction;

@end
