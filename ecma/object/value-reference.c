#include <stdio.h>

int main()
{
    int number = 10;
    int number_temp = number;
    printf("%d\n",number); //=> 10
    printf("%d\n",number_temp); //=> 10
    number = 100;
    printf("%d\n",number); //=> 100
    printf("%d\n",number_temp); //=> 10

    int character = 'a';
    int *character_temp;
    character_temp = &character;
    printf("%c\n",character); //=> 'a'
    printf("%c\n",*character_temp); //=> 'a'
    character = 'b';
    printf("%c\n",character); //=> 'b'
    printf("%c\n",*character_temp); //=> 'b'

    return 0;
}
