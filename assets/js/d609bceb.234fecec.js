"use strict";(self.webpackChunkepi_guide=self.webpackChunkepi_guide||[]).push([[2893],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9053:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},l="Introduction to CSFML",i={unversionedId:"CSFML : Graphical Programming/Intro to CSFML",id:"CSFML : Graphical Programming/Intro to CSFML",title:"Introduction to CSFML",description:"CSFML (C Simple and Fast Multimedia Library) is a simple and easy-to-use multimedia library written in C language. It provides a set of functions for creating 2D graphics, playing audio and video, handling input events, and managing windows. In this documentation, we will discuss the basic usage of CSFML.",source:"@site/docs/CSFML : Graphical Programming/Intro to CSFML.md",sourceDirName:"CSFML : Graphical Programming",slug:"/CSFML : Graphical Programming/Intro to CSFML",permalink:"/Epi-guide/docs/CSFML : Graphical Programming/Intro to CSFML",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CSFML : Graphical Programming/Intro to CSFML.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Graphical Programming",permalink:"/Epi-guide/docs/category/graphical-programming"},next:{title:"intro",permalink:"/Epi-guide/docs/intro"}},s={},c=[{value:"Installing CSFML using a package manager",id:"installing-csfml-using-a-package-manager",level:2},{value:"Installing CSFML from source",id:"installing-csfml-from-source",level:2},{value:"Usage",id:"usage",level:2},{value:"Let&#39;s go through the code step by step:",id:"lets-go-through-the-code-step-by-step",level:2},{value:"Compiling the program",id:"compiling-the-program",level:2},{value:"Your turn",id:"your-turn",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction-to-csfml"},"Introduction to CSFML"),(0,r.kt)("p",null,"CSFML (C Simple and Fast Multimedia Library) is a simple and easy-to-use multimedia library written in C language. It provides a set of functions for creating 2D graphics, playing audio and video, handling input events, and managing windows. In this documentation, we will discuss the basic usage of CSFML."),(0,r.kt)("h2",{id:"installing-csfml-using-a-package-manager"},"Installing CSFML using a package manager"),(0,r.kt)("p",null,"You can also install CSFML using the package manager of your operating system. Here are the packages for some popular operating systems:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"- Arch Linux: csfml\n- Debian: libcsfml-dev\n- Fedora: CSFML-devel\n- Gentoo: media-libs/csfml\n- Mac OS X: csfml\n- Ubuntu: libcsfml-dev\n")),(0,r.kt)("h2",{id:"installing-csfml-from-source"},"Installing CSFML from source"),(0,r.kt)("p",null,"To use CSFML in your C programs, you need to install it first. Follow these steps to install CSFML:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the latest version of CSFML from the ",(0,r.kt)("a",{parentName:"li",href:"https://www.sfml-dev.org/download/csfml/"},"official website")),(0,r.kt)("li",{parentName:"ol"},"Extract the downloaded archive to a folder on your computer."),(0,r.kt)("li",{parentName:"ol"},"Open a terminal or command prompt and navigate to the folder where you extracted CSFML."),(0,r.kt)("li",{parentName:"ol"},"Run the following commands:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cmake .\nmake\nsudo make install\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"CSFML should now be installed on your system.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To use CSFML in your C programs, you need to include the appropriate header files and link your program with the CSFML libraries. Here's an example of a simple CSFML program that creates a window and draws a circle:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'#include <SFML/Graphics.h>\n\nint main(void)\n{\n    sfVideoMode mode = {800, 600, 32};\n    sfRenderWindow* window = sfRenderWindow_create(mode, "My window", sfResize | sfClose, NULL);\n    sfCircleShape* circle = sfCircleShape_create();\n    sfCircleShape_setRadius(circle, 50.f);\n    sfCircleShape_setFillColor(circle, sfRed);\n    while (sfRenderWindow_isOpen(window))\n    {\n        sfEvent event;\n        while (sfRenderWindow_pollEvent(window, &event))\n        {\n            if (event.type == sfEvtClosed)\n            {\n                sfRenderWindow_close(window);\n            }\n        }\n        sfRenderWindow_clear(window, sfWhite);\n        sfRenderWindow_drawCircleShape(window, circle, NULL);\n        sfRenderWindow_display(window);\n    }\n    sfCircleShape_destroy(circle);\n    sfRenderWindow_destroy(window);\n    return 0;\n}\n')),(0,r.kt)("h2",{id:"lets-go-through-the-code-step-by-step"},"Let's go through the code step by step:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We include the ",(0,r.kt)("inlineCode",{parentName:"li"},"SFML/Graphics.h")," header file. This header file contains all the functions and types needed to create a graphical application with CSFML.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"#include <SFML/Graphics.h>\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"We define the ",(0,r.kt)("inlineCode",{parentName:"li"},"main")," function. This is the entry point of our program.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int main(void)\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"We create a video mode object. This object defines the size and the color depth of the window we will create.\nThe function take three arguments: the width, the height, and the color depth.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"sfVideoMode mode = {800, 600, 32};\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We create a window object. This object represents the window we will create.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'sfRenderWindow* window = sfRenderWindow_create(mode, "My window", sfResize | sfClose, NULL);\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We create a circle shape object. This object represents the circle we will draw.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"sfCircleShape* circle = sfCircleShape_create();\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We set the radius of the circle to 50 pixels. The radius is the distance from the center of the circle to its edge. He is in pixels.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"sfCircleShape_setRadius(circle, 50.f);\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We set the fill color of the circle to red.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"sfCircleShape_setFillColor(circle, sfRed);\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We enter the main loop of our program. This loop will run until the window is closed.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"while (sfRenderWindow_isOpen(window))\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We poll for events. This function checks if any events have been triggered since the last time we called it.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"while (sfRenderWindow_pollEvent(window, &event))\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We check if the event is a close event. If it is, we close the window.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"if (event.type == sfEvtClosed)\n{\n    sfRenderWindow_close(window);\n}\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We clear the window with a white color.\nThis function fills the entire window with the given color.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"sfRenderWindow_clear(window, sfWhite);\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We draw the circle to the window.\nThe ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL")," argument is a pointer to a render states object. We will discuss this object in a later tutorial.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"sfRenderWindow_drawCircleShape(window, circle, NULL);\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We display the contents of the window on the screen. If you don't call this function, nothing will be displayed on the screen.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"sfRenderWindow_display(window);\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We destroy the circle shape object. This is important because it frees up the memory used by the circle. (If you don't do this, you will have a memory leak.)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"sfCircleShape_destroy(circle);\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We destroy the window object. This is important because it frees up the memory used by the window. (If you don't do this, you will have a memory leak.)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"sfRenderWindow_destroy(window);\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We return 0 from the main function. This is important because it tells the operating system that the program ran successfully.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"return 0;\n")),(0,r.kt)("h2",{id:"compiling-the-program"},"Compiling the program"),(0,r.kt)("p",null,"To compile this program, you need to link it with the CSFML libraries. Here's an example of a ",(0,r.kt)("inlineCode",{parentName:"p"},"Makefile")," that compiles the program above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-makefile"},"all:\n    gcc -o my_program my_program.c -lcsfml-graphics -lcsfml-window -lcsfml-system\n")),(0,r.kt)("h2",{id:"your-turn"},"Your turn"),(0,r.kt)("p",null,"Now that you know how to use CSFML, it's time to write your own programs. You can find more examples in the ","[examples]"))}u.isMDXComponent=!0}}]);