#include <stdio.h>

int main()
{

    int wysokosc=0,i,x,p;
    int putchar(int x);

    printf("Podaj wysokosc choinki: ");
    scanf("%d", &wysokosc);

    for(i=1;i<=wysokosc;++i){




                for(x=0;x<wysokosc-i;++x){

                    putchar(' ');

                }
                for(x=0;x<wysokosc;x++){

                    putchar('*');

                }


        printf("\n");
    }


    return 0;
}
