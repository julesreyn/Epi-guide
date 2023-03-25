---
sidebar_position: 1
---

# Introduction to CSFML

CSFML (C Simple and Fast Multimedia Library) is a simple and easy-to-use multimedia library written in C language. It provides a set of functions for creating 2D graphics, playing audio and video, handling input events, and managing windows. In this documentation, we will discuss the basic usage of CSFML.
## Installing CSFML using a package manager

You can also install CSFML using the package manager of your operating system. Here are the packages for some popular operating systems:

```bash
- Arch Linux: csfml
- Debian: libcsfml-dev
- Fedora: CSFML-devel
- Gentoo: media-libs/csfml
- Mac OS X: csfml
- Ubuntu: libcsfml-dev
```

## Installing CSFML from source
To use CSFML in your C programs, you need to install it first. Follow these steps to install CSFML:

1. Download the latest version of CSFML from the [official website](https://www.sfml-dev.org/download/csfml/)
2. Extract the downloaded archive to a folder on your computer.
3. Open a terminal or command prompt and navigate to the folder where you extracted CSFML.
4. Run the following commands:

```bash
cmake .
make
sudo make install
```


5. CSFML should now be installed on your system.


## Usage
To use CSFML in your C programs, you need to include the appropriate header files and link your program with the CSFML libraries. Here's an example of a simple CSFML program that creates a window and draws a circle:

```c
#include <SFML/Graphics.h>

int main(void)
{
    sfVideoMode mode = {800, 600, 32};
    sfRenderWindow* window = sfRenderWindow_create(mode, "My window", sfResize | sfClose, NULL);
    sfCircleShape* circle = sfCircleShape_create();
    sfCircleShape_setRadius(circle, 50.f);
    sfCircleShape_setFillColor(circle, sfRed);
    while (sfRenderWindow_isOpen(window))
    {
        sfEvent event;
        while (sfRenderWindow_pollEvent(window, &event))
        {
            if (event.type == sfEvtClosed)
            {
                sfRenderWindow_close(window);
            }
        }
        sfRenderWindow_clear(window, sfWhite);
        sfRenderWindow_drawCircleShape(window, circle, NULL);
        sfRenderWindow_display(window);
    }
    sfCircleShape_destroy(circle);
    sfRenderWindow_destroy(window);
    return 0;
}
```

## Let's go through the code step by step:

1. We include the `SFML/Graphics.h` header file. This header file contains all the functions and types needed to create a graphical application with CSFML.
```c
#include <SFML/Graphics.h>
```

2. We define the `main` function. This is the entry point of our program.
```c
int main(void)
```

3. We create a video mode object. This object defines the size and the color depth of the window we will create.
   The function take three arguments: the width, the height, and the color depth.
```c
sfVideoMode mode = {800, 600, 32};
```

1. We create a window object. This object represents the window we will create.
```c
sfRenderWindow* window = sfRenderWindow_create(mode, "My window", sfResize | sfClose, NULL);
```

1. We create a circle shape object. This object represents the circle we will draw.
```c
sfCircleShape* circle = sfCircleShape_create();
```

1. We set the radius of the circle to 50 pixels. The radius is the distance from the center of the circle to its edge. He is in pixels.
```c
sfCircleShape_setRadius(circle, 50.f);
```

1. We set the fill color of the circle to red.
```c
sfCircleShape_setFillColor(circle, sfRed);
```

1. We enter the main loop of our program. This loop will run until the window is closed.
```c
while (sfRenderWindow_isOpen(window))
```

1.  We poll for events. This function checks if any events have been triggered since the last time we called it.
```c
while (sfRenderWindow_pollEvent(window, &event))
```

1.  We check if the event is a close event. If it is, we close the window.
```c
if (event.type == sfEvtClosed)
{
    sfRenderWindow_close(window);
}
```

1.  We clear the window with a white color.
    This function fills the entire window with the given color.
```c
sfRenderWindow_clear(window, sfWhite);
```

1.  We draw the circle to the window.
    The `NULL` argument is a pointer to a render states object. We will discuss this object in a later tutorial.
```c
sfRenderWindow_drawCircleShape(window, circle, NULL);
```

1.   We display the contents of the window on the screen. If you don't call this function, nothing will be displayed on the screen.
```c
sfRenderWindow_display(window);
```

1.   We destroy the circle shape object. This is important because it frees up the memory used by the circle. (If you don't do this, you will have a memory leak.)
```c
sfCircleShape_destroy(circle);
```

1.   We destroy the window object. This is important because it frees up the memory used by the window. (If you don't do this, you will have a memory leak.)
```c
sfRenderWindow_destroy(window);
```

1.   We return 0 from the main function. This is important because it tells the operating system that the program ran successfully.
```c
return 0;
```

## Compiling the program

To compile this program, you need to link it with the CSFML libraries. Here's an example of a `Makefile` that compiles the program above:

```makefile
all:
    gcc -o my_program my_program.c -lcsfml-graphics -lcsfml-window -lcsfml-system
```

## Your turn

Now that you know how to use CSFML, it's time to write your own programs. You can find more examples in the [examples]