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
    char letters[] = {'a', 'b', 'c'};
    int w =0;
    do {
        printf("letter %d is %c\n", w, letters[w]);
        ++w;
    } while (w < 3);
    return 0;
}



