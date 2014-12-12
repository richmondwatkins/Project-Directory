//
//  WebViewController.h
//  BlogReaderScratch
//
//  Created by Richmond on 9/6/14.
//  Copyright (c) 2014 Richmond. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface WebViewController : UIViewController

@property (nonatomic, strong) NSURL *blogPostURL;
@property (strong, nonatomic) IBOutlet UIWebView *webView;
@end
