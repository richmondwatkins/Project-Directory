//
//  RWViewController.m
//  FunWithDates
//
//  Created by Richmond on 9/6/14.
//  Copyright (c) 2014 Richmond. All rights reserved.
//

#import "RWViewController.h"

@interface RWViewController ()

@end

@implementation RWViewController

- (void)viewDidLoad
{
    [super viewDidLoad];

    NSDate *today = [[NSDate alloc] init];
    NSLog(@"%@", today);

    NSTimeInterval secondsPerDay = 60 * 60 * 24;

    NSDate *tomorrow = [NSDate dateWithTimeIntervalSinceNow:secondsPerDay];
    NSLog(@"tomorrow %@", tomorrow);

    NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];
    [dateFormatter setDateFormat:@"EE MMM, dd"];

    NSString *todayString = [dateFormatter stringFromDate:today];
    NSLog(@"%@",todayString);

}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
