//
//  main.c
//  MyFirstCProgram
//
//  Created by turner on 9/26/13.
//  Copyright (c) 2013 treehouse. All rights reserved.
//

#include <stdio.h>

int main()
{
    char a = 'a';
    char b = 'b';
    char g = 'g';

    char letter = 'z';
    switch (letter) {
        case ('a'):
            printf("letter %c is %c\n", letter, a);
            break;
        case ('b'):
            printf("letter %c is %c\n", letter, b);
            break;
        case ('g'):
            printf("letter %c is %c\n", letter, g);
            break;
        default:
            printf("letter %c not found\n", letter);
            break;
    }
    return 0;
}


