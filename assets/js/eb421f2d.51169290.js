"use strict";(self.webpackChunkepi_guide=self.webpackChunkepi_guide||[]).push([[2329],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},447:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:2},a="Hello World in C",l={unversionedId:"C - Basics/hello_world",id:"C - Basics/hello_world",title:"Hello World in C",description:"introduction",source:"@site/docs/C - Basics/hello_world.md",sourceDirName:"C - Basics",slug:"/C - Basics/hello_world",permalink:"/docs/C - Basics/hello_world",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/C - Basics/hello_world.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction to C",permalink:"/docs/C - Basics/Introduction"}},s={},c=[{value:"introduction",id:"introduction",level:2},{value:"the program",id:"the-program",level:2},{value:"let&#39;s go through the code step by step:",id:"lets-go-through-the-code-step-by-step",level:3},{value:"compiling and running the program",id:"compiling-and-running-the-program",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hello-world-in-c"},"Hello World in C"),(0,o.kt)("h2",{id:"introduction"},"introduction"),(0,o.kt)("p",null,'In this tutorial, we will learn how to write a simple C program that prints "Hello, World!" to the screen. We will also discuss the basic structure of a C program and how to compile and run it.'),(0,o.kt)("h2",{id:"the-program"},"the program"),(0,o.kt)("p",null,"Let's start by writing a simple C program that prints \"Hello, World!\" to the screen. Here's the complete program:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n\nint main(void)\n{\n    write(1, "Hello, World!", 13);\n    return 0;\n}\n')),(0,o.kt)("h3",{id:"lets-go-through-the-code-step-by-step"},"let's go through the code step by step:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"We include the ",(0,o.kt)("inlineCode",{parentName:"li"},"stdio.h")," header file. This header file contains the ",(0,o.kt)("inlineCode",{parentName:"li"},"printf")," function, which is used to print text to the screen.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"#include <stdio.h>\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"We define the ",(0,o.kt)("inlineCode",{parentName:"li"},"main")," function. This is the entry point of our program.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int main(void)\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"We call the ",(0,o.kt)("inlineCode",{parentName:"li"},"write"),' function to print "Hello, World!" to the screen.')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'write(1, "Hello, World!", 13);\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"write")," function takes three arguments:"),(0,o.kt)("p",null,"\u2022 the file descriptor of the output stream, the string to print, and the length of the string. The file descriptor ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," refers to the standard output stream, which is the screen. You can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"2")," to refer to the standard error stream like segfaults."),(0,o.kt)("p",null,"\u2022 The string ",(0,o.kt)("inlineCode",{parentName:"p"},'"Hello, World!"')," is the text we want to print."),(0,o.kt)("p",null,"\u2022 The length ",(0,o.kt)("inlineCode",{parentName:"p"},"13")," is the number of characters in the string. This is very important, because the ",(0,o.kt)("inlineCode",{parentName:"p"},"write")," function doesn't know how long the string is, so we have to tell it."),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"We return ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," to indicate that the program ran successfully.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"return 0;\n")),(0,o.kt)("h2",{id:"compiling-and-running-the-program"},"compiling and running the program"),(0,o.kt)("p",null,"Now that we have written our program, we need to compile it. To compile a C program, we need to use a compiler. The compiler takes the source code of the program and converts it into machine code, which is a series of instructions that the computer can understand. The compiler also performs some checks to make sure that the program is valid."),(0,o.kt)("p",null,"To compile our program, we will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"gcc")," compiler. The ",(0,o.kt)("inlineCode",{parentName:"p"},"gcc")," compiler is the default compiler on most Linux distributions. To compile our program, we will use the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gcc hello.c -o hello\n")),(0,o.kt)("p",null,"To run the program, we will use the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./hello\n")))}d.isMDXComponent=!0}}]);