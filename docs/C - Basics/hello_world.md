---
sidebar_position: 2
---

# Hello World

## introduction

In this tutorial, we will learn how to write a simple C program that prints "Hello, World!" to the screen. We will also discuss the basic structure of a C program and how to compile and run it.

## the program

Let's start by writing a simple C program that prints "Hello, World!" to the screen. Here's the complete program:

```c
#include <stdio.h>

int main(void)
{
    write(1, "Hello, World!", 13);
    return 0;
}
```

### let's go through the code step by step:

1. We include the `stdio.h` header file. This header file contains the `printf` function, which is used to print text to the screen.
```c
#include <stdio.h>
```

2. We define the `main` function. This is the entry point of our program.
```c
int main(void)
```

3. We call the `write` function to print "Hello, World!" to the screen.
```c
write(1, "Hello, World!", 13);
```

The `write` function takes three arguments:

• the file descriptor of the output stream, the string to print, and the length of the string. The file descriptor `1` refers to the standard output stream, which is the screen. You can also use `2` to refer to the standard error stream like segfaults.

• The string `"Hello, World!"` is the text we want to print.

• The length `13` is the number of characters in the string. This is very important, because the `write` function doesn't know how long the string is, so we have to tell it.

4. We return `0` to indicate that the program ran successfully.
```c
return 0;
```

## compiling and running the program

Now that we have written our program, we need to compile it. To compile a C program, we need to use a compiler. The compiler takes the source code of the program and converts it into machine code, which is a series of instructions that the computer can understand. The compiler also performs some checks to make sure that the program is valid.

To compile our program, we will use the `gcc` compiler. The `gcc` compiler is the default compiler on most Linux distributions. To compile our program, we will use the following command:

```bash
gcc hello.c -o hello
```
To run the program, we will use the following command:

```bash
./hello
```
