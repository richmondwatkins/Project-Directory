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

    int a = 9;
    printf("a %d\n", a);

    int c = a++;
    printf("c %d a %d\n", c, a);

    int d = a--;
    printf("c %d, a %d, d %d\n", c,a,d);

    int b = a % 4;
    printf("a %d, b %d", a,b);

    return 0;
}



