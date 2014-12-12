//
//  RWMasterViewController.m
//  BlogReader
//
//  Created by Richmond on 9/4/14.
//  Copyright (c) 2014 Richmond. All rights reserved.
//

#import "RWMasterViewController.h"

#import "RWDetailViewController.h"



@implementation RWMasterViewController

- (void)awakeFromNib
{
    [super awakeFromNib];
}

- (void)viewDidLoad
{
    self.titlesArray = [NSArray arrayWithObjects:@"Getting started with WordPress",	@"Whitespace in Web Design: What It Is and Why You Should Use It",
                        @"Adaptive Images and Responsive SVGs - Treehouse Show Episode 15",
                        @"Productivity is About Constraints and Concentration",
                        @"A Guide to Becoming the Smartest Developer on the Planet",
                        @"Teacher Spotlight: Zac Gordon",
                        @"Do You Love What You Do?",
                        @"Applying Normalize.css Reset - Quick Tip",
                        @"How I Wrote a Book in 3 Days",
                        @"Responsive Techniques, JavaScript MVC Frameworks, Firefox 16 | Treehouse Show Episode 14", nil];
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}



#pragma mark - Table View

- (NSInteger)numberOfSectionsInTableView:(UITableView *)tableView
{
    return 1;
}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section
{
    return self.titlesArray.count;
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath
{
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:@"Cell" forIndexPath:indexPath];

    NSDate *object = self.titlesArray[indexPath.row];
    cell.textLabel.text = [object description];
    return cell;
}

- (BOOL)tableView:(UITableView *)tableView canEditRowAtIndexPath:(NSIndexPath *)indexPath
{
    // Return NO if you do not want the specified item to be editable.
    return YES;
}



/*
// Override to support rearranging the table view.
- (void)tableView:(UITableView *)tableView moveRowAtIndexPath:(NSIndexPath *)fromIndexPath toIndexPath:(NSIndexPath *)toIndexPath
{
}
*/

/*
// Override to support conditional rearranging of the table view.
- (BOOL)tableView:(UITableView *)tableView canMoveRowAtIndexPath:(NSIndexPath *)indexPath
{
    // Return NO if you do not want the item to be re-orderable.
    return YES;
}
*/

- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender
{
    if ([[segue identifier] isEqualToString:@"showDetail"]) {
        NSIndexPath *indexPath = [self.tableView indexPathForSelectedRow];
        NSString *title = self.titlesArray [indexPath.row];
        [[segue destinationViewController] setDetailItem:title];
    }
}

@end
