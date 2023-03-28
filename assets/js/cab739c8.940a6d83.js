"use strict";(self.webpackChunkepi_guide=self.webpackChunkepi_guide||[]).push([[3875],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=r.createContext({}),d=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=d(t.components);return r.createElement(l.Provider,{value:e},t.children)},s="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,l=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=d(a),k=n,g=s["".concat(l,".").concat(k)]||s[k]||c[k]||i;return a?r.createElement(g,o(o({ref:e},m),{},{components:a})):r.createElement(g,o({ref:e},m))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=k;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p[s]="string"==typeof t?t:n,o[1]=p;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1551:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:5},o="Operators",p={unversionedId:"c/Operators",id:"c/Operators",title:"Operators",description:"Introduction",source:"@site/docs/c/Operators.mdx",sourceDirName:"c",slug:"/c/Operators",permalink:"/Epi-guide/docs/c/Operators",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/c/Operators.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Data Types",permalink:"/Epi-guide/docs/c/data-types"},next:{title:"Control Statements in C",permalink:"/Epi-guide/docs/c/control-statements"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Operators in C",id:"operators-in-c",level:2},{value:"Arithmetic Operators",id:"arithmetic-operators",level:2},{value:"Relational Operators",id:"relational-operators",level:2},{value:"Logical Operators",id:"logical-operators",level:2},{value:"Bitwise Operators",id:"bitwise-operators",level:2},{value:"Assignment Operators",id:"assignment-operators",level:2},{value:"Conclusion",id:"conclusion",level:2}],m={toc:d},s="wrapper";function c(t){let{components:e,...a}=t;return(0,n.kt)(s,(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"operators"},"Operators"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Operators are special symbols that perform specific operations on one, two, or three operands, and then return a result."),(0,n.kt)("h2",{id:"operators-in-c"},"Operators in C"),(0,n.kt)("p",null,"C language is rich in built-in operators and provides the following types of operators:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Arithmetic operators"),(0,n.kt)("li",{parentName:"ul"},"Relational operators"),(0,n.kt)("li",{parentName:"ul"},"Logical operators"),(0,n.kt)("li",{parentName:"ul"},"Bitwise operators"),(0,n.kt)("li",{parentName:"ul"},"Assignment operators"),(0,n.kt)("li",{parentName:"ul"},"Misc operators")),(0,n.kt)("h2",{id:"arithmetic-operators"},"Arithmetic Operators"),(0,n.kt)("p",null,"Arithmetic operators are used in mathematical expressions in the same way that they are used in algebra. C language supports the following arithmetic operators:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Operator"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"+"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Addition"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"a + b"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Subtraction"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"a - b"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"*"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Multiplication"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"a * b"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"/"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Division"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"a / b"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"%"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Modulus"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"a % b"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"++"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Increment"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"a++"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"--"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Decrement"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"a--"))))),(0,n.kt)("h2",{id:"relational-operators"},"Relational Operators"),(0,n.kt)("p",null,"Relational operators are used in logical statements to determine the relationship between two entities. C language supports the following relational operators:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Operator"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"=="),(0,n.kt)("td",{parentName:"tr",align:"center"},"Checks if the values of two operands are equal or not, if yes then condition becomes true."),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"(a == b)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"!="),(0,n.kt)("td",{parentName:"tr",align:"center"},"Checks if the values of two operands are equal or not, if values are not equal then condition becomes true."),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"(a != b)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},">"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Checks if the value of left operand is greater than the value of right operand, if yes then condition becomes true."),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"(a > b)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"<"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Checks if the value of left operand is less than the value of right operand, if yes then condition becomes true."),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"(a < b)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},">="),(0,n.kt)("td",{parentName:"tr",align:"center"},"Checks if the value of left operand is greater than or equal to the value of right operand, if yes then condition becomes true."),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"(a >= b)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"<="),(0,n.kt)("td",{parentName:"tr",align:"center"},"Checks if the value of left operand is less than or equal to the value of right operand, if yes then condition becomes true."),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"(a <= b)"))))),(0,n.kt)("h2",{id:"logical-operators"},"Logical Operators"),(0,n.kt)("p",null,"Logical operators are used to determine the logic between variables or values. C language supports the following logical operators:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Operator"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"&&"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Called Logical AND operator. If both the operands are non-zero, then the condition becomes true."),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"(a && b)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"|","|"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Called Logical OR Operator. If any of the two operands is non-zero, then the condition becomes true."),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"(a \\|\\| b)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"!"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Called Logical NOT Operator. Use to reverses the logical state of its operand. If a condition is true, then Logical NOT operator will make false."),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"!(a && b)"))))),(0,n.kt)("h2",{id:"bitwise-operators"},"Bitwise Operators"),(0,n.kt)("p",null,"Bitwise operators act on operands as if they were string of binary digits. It operates bit by bit, hence the name. C language supports the following bitwise operators:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Operator"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"&"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Binary AND Operator copies a bit to the result if it exists in both operands."),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"(a & b)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"|"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Binary OR Operator copies a bit if it exists in either operand."),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"(a \\| b)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"^"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Binary XOR Operator copies the bit if it is set in one operand but not both."),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"(a ^ b)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"~"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Binary Ones Complement Operator is unary and has the effect of 'flipping' bits."),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"(~a)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"<<"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Binary Left Shift Operator. The left operands value is moved left by the number of bits specified by the right operand."),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"(a << 2)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},">>"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Binary Right Shift Operator. The left operands value is moved right by the number of bits specified by the right operand."),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"(a >> 2)"))))),(0,n.kt)("h2",{id:"assignment-operators"},"Assignment Operators"),(0,n.kt)("p",null,"Assignment operators are used in C to assign values to variables. C language supports the following assignment operators:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Operator"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"="),(0,n.kt)("td",{parentName:"tr",align:"center"},"Simple assignment operator"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"c = a + b"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"+="),(0,n.kt)("td",{parentName:"tr",align:"center"},"Add AND assignment operator"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"c += a"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-="),(0,n.kt)("td",{parentName:"tr",align:"center"},"Subtract AND assignment operator"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"c -= a"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"*="),(0,n.kt)("td",{parentName:"tr",align:"center"},"Multiply AND assignment operator"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"c *= a"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"/="),(0,n.kt)("td",{parentName:"tr",align:"center"},"Divide AND assignment operator"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"c /= a"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"%="),(0,n.kt)("td",{parentName:"tr",align:"center"},"Modulus AND assignment operator"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"c %= a"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"<<="),(0,n.kt)("td",{parentName:"tr",align:"center"},"Left shift AND assignment operator"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"c <<= 2"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},">>="),(0,n.kt)("td",{parentName:"tr",align:"center"},"Right shift AND assignment operator"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"c >>= 2"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"&="),(0,n.kt)("td",{parentName:"tr",align:"center"},"Bitwise AND assignment operator"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"c &= 2"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"^="),(0,n.kt)("td",{parentName:"tr",align:"center"},"Bitwise exclusive OR and assignment operator"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"c ^= 2"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"|","="),(0,n.kt)("td",{parentName:"tr",align:"center"},"Bitwise inclusive OR and assignment operator"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"c \\|= 2"))))),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"In this tutorial, you have learned about operators in C programming language.\nIt's okay if you don't understand everything in this tutorial. You will learn more about how to use operators in C programming language in the following tutorials.\nYou can come back to this tutorial anytime if you need to look up something."))}c.isMDXComponent=!0}}]);