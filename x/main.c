#include <stdio.h>
#define N 10

int main()
{
    int i,y;

    for(i=1; i<=N;i++){


        for(y=1;y<=N;y++){

            printf(" %3d",y*i);

        }
        printf("\n");


    }





    return 0;

}
