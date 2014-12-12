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
    char *letter; //the star symbol initializes the pointer

    char c = 'k';

    letter = &c; //the & symbol allows the point to equal that variables address in memory

    printf("%c is always the same as %c\n", c, *letter);

    c= 'q';

    printf("%c is always the same as %c\n", c, *letter); //when the variable changes the pointer changes with it

    char eldridge[] = "eldridge";
    letter = &eldridge[3];

    ++letter; //this increments the letter pointer to the next position in memory..in this case it moves to the next letter in eldridge
    printf("%c is in this array %s\n", *letter, eldridge);

    ++letter;   //and here it moves again
    printf("%c is in this array %s\n", *letter, eldridge);
    
    return 0;
}

