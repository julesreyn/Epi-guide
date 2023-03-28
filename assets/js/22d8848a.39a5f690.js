"use strict";(self.webpackChunkepi_guide=self.webpackChunkepi_guide||[]).push([[2340],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>b});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),u=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=u(e.components);return n.createElement(s.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return t?n.createElement(b,l(l({ref:a},c),{},{components:t})):n.createElement(b,l({ref:a},c))}));function b(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1472:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=t(7462),r=(t(7294),t(3905));const i={sidebar_position:3},l="Variables",o={unversionedId:"c/variables",id:"c/variables",title:"Variables",description:"What is a variable ?",source:"@site/docs/c/variables.mdx",sourceDirName:"c",slug:"/c/variables",permalink:"/Epi-guide/docs/c/variables",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/c/variables.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Hello World",permalink:"/Epi-guide/docs/c/hello-world"},next:{title:"Data Types",permalink:"/Epi-guide/docs/c/data-types"}},s={},u=[{value:"What is a variable ?",id:"what-is-a-variable-",level:2},{value:"Declaring a variable",id:"declaring-a-variable",level:2},{value:"Assigning a value to a variable",id:"assigning-a-value-to-a-variable",level:2},{value:"Using a variable",id:"using-a-variable",level:2},{value:"Updating a variable",id:"updating-a-variable",level:2},{value:"Variable naming",id:"variable-naming",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:u},p="wrapper";function d(e){let{components:a,...t}=e;return(0,r.kt)(p,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"variables"},"Variables"),(0,r.kt)("h2",{id:"what-is-a-variable-"},"What is a variable ?"),(0,r.kt)("p",null,"Variables allow you to store and manage data in your program by assigning names to values. Imagine a variable as a container that holds a specific value. You can reference this container by its assigned name, update its contents by replacing the current value with a new one, or retrieve the stored value to use it in your program."),(0,r.kt)("h2",{id:"declaring-a-variable"},"Declaring a variable"),(0,r.kt)("p",null,"In order to use a variable in your program, you must first declare it. This is done by using this :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int myVariable;\n")),(0,r.kt)("p",null,"Now we declare a variable called ",(0,r.kt)("inlineCode",{parentName:"p"},"myVariable")," of type ",(0,r.kt)("inlineCode",{parentName:"p"},"int"),".\nThis means that the variable can only hold integer (number) values. If you want to store an other type of value, you must declare a variable with this type :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"float myVariable; // for floating point numbers, like 3.14\nchar myVariable; // for characters, like 'a'\nbool myVariable; // for booleans, true or false\n")),(0,r.kt)("h2",{id:"assigning-a-value-to-a-variable"},"Assigning a value to a variable"),(0,r.kt)("p",null,"Once you have declared a variable, you can assign a value to it. This is done by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"=")," operator :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int myVariable = 5; // myVariable now holds the value 5\n")),(0,r.kt)("p",null,"For other types of value, you can assign a value like this :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"float myVariable = 3.14; // myVariable now holds the value 3.14\nchar myVariable = 'a'; // myVariable now holds the value 'a'\nbool myVariable = true; // myVariable now holds the value true\n")),(0,r.kt)("h2",{id:"using-a-variable"},"Using a variable"),(0,r.kt)("p",null,"Now that you have declared and assigned a value to a variable, you can use it in your program. You can use it in a ",(0,r.kt)("inlineCode",{parentName:"p"},"write")," statement :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int myVariable = 5;\nwrite(myVariable); // will print 5\n")),(0,r.kt)("p",null,"You can also use it in a ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," statement, to ask the user to enter a value :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int myVariable;\nread(myVariable); // will ask the user to enter a value, and store it in myVariable\nwrite(myVariable); // will print the value entered by the user\n")),(0,r.kt)("h2",{id:"updating-a-variable"},"Updating a variable"),(0,r.kt)("p",null,"You can update the value of a variable by assigning a new value to it. This is done by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"=")," operator :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int myVariable = 5;\nmyVariable = 10; // myVariable now holds the value 10\n")),(0,r.kt)("h2",{id:"variable-naming"},"Variable naming"),(0,r.kt)("p",null,"When you declare a variable, you must give it a name. This name must follow some rules :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It must start with a letter or an underscore (",(0,r.kt)("inlineCode",{parentName:"li"},"_"),")"),(0,r.kt)("li",{parentName:"ul"},"It can only contain letters, numbers and underscores (",(0,r.kt)("inlineCode",{parentName:"li"},"_"),")"),(0,r.kt)("li",{parentName:"ul"},"It cannot be a reserved keyword (like ",(0,r.kt)("inlineCode",{parentName:"li"},"int"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"float"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"char"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"bool"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"if"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"else"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"while"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"for"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"write"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"read"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),")"),(0,r.kt)("li",{parentName:"ul"},"It cannot be the same as a function name")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this tutorial, you have learned how to declare, assign and use variables in your program. You can now use variables to store and manage data in your program. Don't forget to check out the next tutorial, where you will learn all data types more in depth."))}d.isMDXComponent=!0}}]);