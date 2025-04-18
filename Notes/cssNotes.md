Element Selector 
----------------------------------------------------------------
element selectors, target all tags that are being modified in css
```css
   h1{
    color: green;
   } 
```
Above would make all header 1 tags be green

Class selectors are classes you can create, it is made as fallows
```css
    .red-heading{
        color:red;
    }
```
```html
    <h2 class='red-heading'>this is an example</h2>
```
Id Selector
----------------------------------------------------
an Id selector is a method that a tag is selected in css and their protperies modified, it is dones by using the pound sign ("#") fallowed by the id tag you create, it can be called whatever you want, as long as the tag you want to modify has the id. The id is to a unique element while the class is to many elements.  
```css 
#usrprg{
    color: orange;
    size: 16px;
    length: 16px;
}
```
```html
<p id="usrprg"> Here lies the example</p>

```
Attribute Selector
----------------------------------------------------
An attribute selector is selected one of the many different attributes available to an html tag, such as shown below. 
```html
<h1 id="usrprg" class="read-heading" href="https://www.yahoonews.com/" src="./styling.css" alt="An example with attributes a tag can have">Example_00</h1>
```
We can select one to many of the different attributes available in html tags, in doing so we can modify them as we wish. 
```css
p[draggable]{
    color: "neongreen";
}
```
```html
    <p draggable="true">An example of attribut selection</p>
    <p > Not targeted</p>

```
Here is an example of a more precise targeting of attributes values
```css
p[draggable=false]{
    color: "neongreen";
}
```
```html
    <p draggable="true"> draggable set to true</p>
    <p dtaggable="false"> draggable set to false</p>
    <p draggable="false"> set false as well</p>

```
Here is an exaple of a universale selector, this uses the an astras also known as a wild card, ('*'), regardless of what tags you have, it will be targeted with whatever selectors they have
```css
*{
    color: "neongreen";
}
```
```html
    <p draggable="true">An example of attribut selection</p>
    <h2 id="heading"> H2 element</h2>
    <h1 class="end-title"> final </h1>

```

Color properties
-----------------------------------------------
background-color is mainly of course for the background and color is mainly used for txt colors . Named colors are the ones that are already defined for use, such as red, green, blue and so forth. To find the colors go to developer.mozilla.org/en-US/docs/Web/CSS/named-color, as well you can go to Color-Hunt.co it is a free tool to find the colors you whish to find and use. They have Unamed colors whihc are in hexadecimal form such as #5D3891 also in shown as rgb(93,56,145).  

Font Size
------------------------------------------------------
Font size has 4 protperties we can pick, there is px, which is pixel size 1px is 1/96th inch, pt point size 1pt is 1/72nd inch, em is 100% of the parents size which is if there is a body tag wrapping around a h1 tag and the body tag has a 20 px then 1 em thus h1 is 20px as well, if 2 em thenit  40px and so forth. rem is the root size, relative to the html file, its similar to em but goes off the root file in this care html file size rather then its parent.

Font weight
-------------------------------------------------------
Font weights are just that, the font of a txt, there is normal and bold, both keywords, there is lighter and bolder which are relatvie to the parent and then there is lastly numbers from 100 to 900 from how light you want it and how bold you want it. Lighter takes 100 off the text and bolder adds 100 to it.

Font Family
------------------------------------------------------
When modifing the font to a tag/element, there is a method called font-family, in which you write the font you want, fallowed by a comoa and a generic font that is radily avilable to other OS/web apps. Below is the method to do it
```css
h1{
    font-family:Helvetica, sans-serif;
}
```
If a font has many words in it we need to surrond it with " "
```css
h2{
    font-family: "Times New Roman", serif;
}

```
fonts.google.comt has a list of the varity of fonts


Text Align
--------------------------------
Text align is a metod in which you can either center text or push them more to the left, right or determain where they start and end, so the way this is se it starts are the left and end at the right this can be flipped by having the css value start at the right and end at the lefy;
```css
    h1{
        text-align:center;
    }

```

Box Model
----------------------------------
It's the space a elements box takes up. This can be modified by the height and width properties of the said element, either using Pixels or percentages.
There is also it's border properties that is the outer layerng of the element
```css
box{
    border: 10px solid black;
}

```
first property is the thickness of the border outlining, second is if its styling or not, third is the coloring. Changing this won't change the boxs properties just the boarder is is being applied to.

The border can be further modified by additional properites as using border-top, border-bottome, border-width and so forth.
```css
box{
    border: 30px solid black;
    border-width : 0px 10px 20px 30px;
    /*top, right, bottom, left*/
}


```
if 2 values are provided to the border-width, such as 0px and 20px what it will do is set the top and bottome to 0px and the left and right to 20px 

Padding
---------------------------------------------
Padding pushes out the boarder of an element, such that it will not be on the boxs proximity, the box itself will not change. The margin is the outer part of the border, it will increase the space between elements, if a margine is 20px it will have an outer layer that is 20 px from either side from each element that surronds it, that is the element we gave its margin to be 20px.

Division Element
------------------------------
Divides contents as it's seen as an invisable box, this allows us to have a box with other smaller boxs grouping them.
This way we can style them, making the boxs look better, the down side it is hard to identify bugs a bit more difficult.


CassCase operatonal order of importance
---------------------------------------------------------
Postion: 
    If a rule is in a higher or lower posotion, it will apply the last executed order, if there are 2 colors one bing red and the other blue and the blue is the last oder in the css code, that will be applied, when it runs it will execute the first color application then it applies the lastone.

Specifity: 
    The lest spacifice is the element selector, this applies to all the same elements thus making it least specific, next is  class selector this selects all the elements that have the class name, next is attribute selecting, they are similar to class but attributes over-rights class, making it top priority in compareson between the 2. Lastsly is id, since we will assigne it to only one element and should only have it fallow best practice, only having one id. Lastls, remenber the order they are in detwermians what is applied to the element, the last execution of code of modificaiton written up will be applied, if the tags have said definitions.

Type: 
    The method we have our definitions located. If we are using an external definition, where we have our css styling lister and linked to html, the code will look at the css, and apply them first, if our linked css is then fallowed by a style block of code (internal styling), it is then applied secodnly, changed the methods we had defined in the css to each tag element with defined attributes. Lastsly, if we have inline sytling, meaning, that the tag has style denignitions on it, then the machine will apply those, overwritting the last definitions given to it, applying them and ending the code. Remeber the order each definition is in, is what we will see last.
order of importance of types:
1 inline 2 internal 3 external

Importance:
    if in the css/styling is fallowed by an !important, it will take top priorty, if it does not then it will fallow the previous methods spoken of. 
````css
    h1{
        color: red;
        color: maroon !important;
    }
````


C-C-C-C-C-Combo CSS
--------------------------------------
In css you can select to tags or class, which ever and have them be defined with the same properties as shown below 
```css
h1,h2{
    color:maroon; 
}

```
there is a child selector which is first the child fallowed by > and then the child. this will affect the child, it has to be the direct child meaning one level down to take affect;
```html
<html>
<style>
    body > h2 {
        color: "sky blue";
    }
    .parent1 > h2{
        color: maroon;
    }
</style>
    <body class="partn1">
        <h2>Here is the child</h2>
    </body>
    <body class="parent2">
        <h2>Clone</h2>
    </body>
</html>

```
In the above example we show that in the first css style it would tartget both body tags, if we have a class definition or id applied to eitehr it is best to use that then just go off by the element; 


There is another method to apply attributes, the descendant and ancestor method. This means the desendant will get the applied styling, as long as its contained within the ancesstor. This means that the ancestor has to contain the element within itself.
```css
slector selector{
    color: blue;
}
```

Chaining selector, is a method that targets all of the targets elements are true, this will apply the modifications written. This allows to make a specification modifications, if there is a missing condition it will not apply the modifications.
```css
.fCondtion#sCondition{

}
h1["blue"].sCondition#thirdCondition{

}
```
No spaces in this method as well start off with the targeted element if that's what you want modified then fallowed by the class or id condition.


Positioning Elements
----------------------------------------------------------------
Static positioning 
    default position that each tag had, meaing it will be on the left most coner/side. Even if there is css in it moving it left by 20px 100px and right by and x amount of px it will not move it since it has static positioning property on.

Relative postioing
     A form of postions that places the element relative to it's supposide postion, can be the default position or the position it is within a given container, this will allow you to move it from its default positoin unlike static position.

Absolute Positoning 
    relative to the nearest positioned ancestor or top left corner of webpage. if the element it is in, meaning if the tag is in a div or body anthing that is contaning the tag we assigned the absolute postion to, if none of the containers it has as it's ancestors do not have a position set for them it will travel as far back as it needs to, till it hits a tag that does have position assignment or it hits the HTML tag, and positions itself relative to it.
```html

<html>

</html>


```
x,y,z indexs: 
    The Z index for every element has a value of 0, it can go either negative or positive depending on what you wish to have it displayed as. It can go behind or above other elements.

Fixed Positioning: 
    Relative to tthe top left conner of the browser window even if you scroll up and down it will stay on that conner. 
    Absolut moves with the webpage, thus it will not be seen when scrolled down/up. 


CSS Display
------------------------------------
Block:
    A block is the default set of any tag in HTML/CSS, this is essentiall why they go all the way accross the page when ran and examined the element
    There is a element called span, which is insereted in a paragraph tag. Span has a different value, default display which is inline.Other elements have the display set to block, it can be changed in css from block to inline or inline-block as well ofc block.

Inline:
     Both tags/elements appear on the same line, rather then by stacked on one and other, this also won't allow you to set the width/height, it will only allow to fit as much as is needed for the other element to appear next to it.
Inline-Block:
    Allows blocks to appear next to one and other as well to have their width and hight modified as long as there is enough space in the webpage,
None:
    Hids the elements, useful to hid buttons or other elements that are not meant to be on display till a user fulfills a requirement
```html
<style>
    #proj{
        display: inline;
    }
    
</style>
<div id=proj>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</div>
```
css Float
-----------------------------------------
It wrapps around an elements this then allows any other elements to appear next to one and other and wrapps around the element
```html
<html>
    <style>
        img{
            float:right;/*Will appearr on the right side of the page
            txt will wrap around the left*/
        }
    </style>
<img src="insert.png"/>
<p>some really long txt.....</p>
</html>

```
To have images to be wrapped around the txtxs we can just do as shown above, to txt blocks can be wrapped around them.
If we have a footer, the footer would also wrap around the img, instead of being at the bottom, to change this behavior, we have to us a relation property calledc clear, clear allows it to be seperated from the float property, this clears it from the float property, allowing it to go to its orignal postion, ignoring the floater.
```html
<html>
<body>
    <style>
        img{
            float:left
            ;/*Will appearr on the right side of the page
            txt will wrap around the left*/
        }footer{
            clear:left;
        }
    </style>

    <img src="insert.png"/>
    <p>some really long txt.....</p>
    <footer>something inc</footer>
</body>

</html>

```


Responsive web
-------------------------------------
Media Queries:
    conditional that is looked out for when the window is at or below a give width, this then applies the css in it's conditonal statment
```css
    @media (max-width: 600px){
        /*CSS for a screens below or equal to 600px wide*/
    }
```
CSS Grid:
    This is a bit harder to understand though it is far more flexable, we have to create varius divs to set up a multi card layout with different layouts. Doing so we have to make a display grid, this is notifying the machjine to let it know we are making a grid with css, we have to tell it how we have the columns set up, the freactions, as well the grids-template-rows. fr is equal fraction that is give in the gride template columns. the rows has setup the sizes such as grid-template-rows: 100px 200px 200px; top row is 100px in height and the rest as seen as 200px, there is also the gap that is need it can be anthing. 
```html
<body>
    <style>
        .gride-container{
            display: grid;
            grid-template-columns:1fr 1fr;
            grid-template-rows: 100px 200px 200px;
            gap: 30px; 
        }
        .first{
            grid-column:span 2;
            background:purple;
        }
        .card{
            back-ground-color:blue;
        }
    </style>
    <div class="grid-container">
        <div class="first card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
    </div>
</body>


```
CSS Flexbox
This method applies to one D layouts, when you want something layed out in horizontal or stacked this is a good tool to use.

Using the flex system, it tells the machine to conduct an auto sizing, maing it an equal width distripution, making sure they fit. 
As shown below a flex of 1 would making it the size and width that is given, sing a flex of 2, it gives it double the dimisions defined and a 0.5 of course would give it half the dimensions. Below we have the dimensions defined in the card class and the modifications differences are defined in the first and second class types.
```html
    <body>
        <style>
            .flex-container{
                display:flex;
            }
            .card{
                background:blue;
                border: 30px solid black;
                height: 100px;
                flex: 1;
            }
            .first{
                flex:2;
            }
            .second{
                flex:0.5;
            }
        </style>
        <div class ="flex-container">
            <div class="first card"></div> 
            <div class ="second card"></div>
            <div class="second card"></div>
            <div class="card"></div>
            <div class="card"></div>
        </divflex-container>
    </body>

```

BootStrap Framework:
--------------------------------------------------------
Recall it needs to be dowloaded, its a predefined library that has a majority of css to stylize your website, gotta look in their docs to know which definition is already made and how to modify it. To decleare the size of a card class in bootsttrap you can declear it by col-6 if you have a leangth of 12, this would take 1/2 of the section and then if you have 2 more cards, one of col-2 and col-4, this translates to 2/12 4/12 and so forth.


How media is used and the conditionals
--------------------------
When using @media there is max-width and min-width, for max- width it is checking the page to be at most less then 600px or smaller for it to apply the css styling to the page, min does the same but is checking that the page has 600px and up to apply the css, so anything that meets the minimue req. size.
```html
<style>
    /*Targets anything the is 600px and up and anything that is less 900px it 
    will apply the styling*/
    @media (min-width: 600px) and (max-width: 900px){
        /* css code*/
    }
    /*Anything that is less than 600px and anything greater then 900px
    apply the css*/
    @media (max-width: 600px) and (min-width: 900px){
        /* css code*/
    }
</style>

```
there is also media screen the alternative is print, which targets when your website is being printed, it either targets screen or print.



Flex Box
--------------------------------------------------
Using a table will create a coloum section, though it is stiff and will cause issues once other elemenets are added on, it can be managed but it is tricky to do, it is not best practice in modern day web development. The issue as well they appear at the bottom, to have them appear at the top, you need to use absolute to move them at the top, then position them, as well their width and such. Not really responsive.

Flaots can also be used to organize the elements but requiers as well to set them up and becomes more complex.

Flex is soemthing completly different, from inline and other methods of display. Flex displays the elements within a reasonable layout, it will put them out by the contant size, each secation will have it's orignal width and height ignored and display them by contact size.Gap is the distance each container has. There is also inline-flex, it will take up as much space it needs and leave the rest for the other elements to appear next to it.

Flex Direction
---------------------
When using flex, it will usually lay thing vertically by default, this can be changed by flex-direction, by picking columns to display the miteral ontop of one and other, row shows them next to one and other and is the defaulit.

flex-direction: row-reverse will set it the elements on the same line but revers them, such as "a b c" its on the left side coner, using row-revers would make it appear as "c b a" on the right coner.

```css
#letter{
    displat: flex;
    flex-direction: row-reverse;
}
```
```html
    <div id=letter>
        
        <p>A</p>
        <p>B</p>
        <p>C</p>
    </div>
```


Flex-basis 
--------------------
Allows you to extend the width of aliments if they are in rows or height if they are in columns 

Inline-flex: takes up as much space it flex allows it to, it won't expand unless the contant in it requires it

Order
-------------------------------
the order of element can be changed by giving them a higher or lesser value on the oder propert on the tag that is assigned to the element, 
```css
.green{
    order: 50;
}

```


Flex-wrap
------------------------
flex-wrap by default has it set to nowrap, this causes elements to go over the width of the page or element. Setting it to wrap allows the elements to be stacked/go underneat one and other, disallowing elements to overflow.

```html
<body>
    <style>
        .container{
            flex-wrap: wrap;
            display: flex;
        }
        #main{
            border: 3px solid black;
        }
        div{
            background-color: black;
            border : 2px solid red;
        }
    </style>
    <div id="main" class="container">
        <div></div>
        <div></div>
        <div></div>
    </div>

</body>
```
wrap revers starts at the bottom and does it backwords 
check out : https://appbrewery.github.io/flex-layout/


justify-content
------------------------------------
This is used on containers (main element containting dives and such) that will line up elements either at the right conner, center, left coner,  depending on what you set it to. You can also space out the iteams as well
```css
.container{
    display: flex;
    justify-content: flex-start; 
    /*There is flex-end,center, 
    space-between, will determin the amount of space for each
    element ther is space-around, space-evenly  */
}


```






align-items
---------------------------------
This method moves it in the y axius
This method allows us to position where iteams will be, either at the flex-start, flex-end(the bottom of the container "base"), center, you also have to set the height of the countainer by vh (viewport height), depending on the height of the contianer.

if you want another element to have a different alignment then what the container has, we would have to use align-self. This allows it to seperate from the groups alignment.

Align-content only works when you have the flex-wrap to wrap, this allows you to adjust the content to be either centered start and so forth. 

The difference between align content and align iteams is when is when windows size is smaller align content takes over, adjusting the iteams to what they ahwere designeted to be at. 


flex-flow:
----------------
short hand for both flex direction and flex wrap, you can assigne it column, row, column-reverse and row-reverse and the second value is wrap or nowrap 

Gap
----------
there is gap, column-gap and row-gap


Flex-sizing
------------------
is a method to size, shrink and growing object within the container. 
When diplay is initated to flex, it will automatically resize the elements with in it, this is done by a priority list, it looks at if there is a min/max-width, if not then it looks at the flex-basis, weither be it a column base or row base, it will fallow however it is set up. If there is no flex-basis it will then look at the width, wiether that be in rows or be it in columns, where it will look at height, it will do it's calculataions by that. if not found then it will look at it's content width, meaning the amount of space that content it has with in, it will then go down by its min size for each content.

to change iteam sixe, you need a class or id to change their properties. the container will attempt to keep the properties intact till it reaches a limit that is not able to defaulting to min width.

flex-basis over-writtes the width properties, since we have flex active. 

When it is using min-width it goes by the longest word. If we have flex-basis and max-width, it will take the smaller of the 2, it will try to respect the flex-basis. If the container shrinks the items ofc shrink.

When the min-width or flex-basis is larger, it will take the largest one over the smallest one.


Grow & Shrink:
------------------
Elements in the flex container have access to flex-grow and flex-shrink this properties allow the elements to change in size, if they are set to 0, they will not grow or shrink with the container, if it is set to 1 it will allow it to grow or reduce it's size.
If grow is set, then the items will grow, if shrink is on, it will shrink when the container is growing small, to it's max ability of the properties inside the item. 
If both are one then it will try to grow as much as it can, and shrink as much as it can when the container becomes smaller.
If neither are set then it wont change, though by default you will see them shrink and grow, till you chagne the behavior.


the default for flex-basis is auto, it will give more width to the element with more contant then those with less, if you want it off then set flex-basis to 0

Short Hand Flex
-----------------------------
there is a quick way to set up flex-(basis|| grow|| shrink) using flex: 0 1 2; the first is growth, fallowed by shrink and ebds with basis. 
You can also use flex: 1; which state a growth of 1, shrink of 1 and a basis of 0, it doesn't need to be just one it can be any number you want.

```html
<html>
    <style>
        .container{
            display: flex;
            gap: 10px; 
        }.red{
            flex;1;   
        }.blue{
            flex:2;
        }.green{
            flex:3;
        }
    </style>
</html>

```
this would set flex container, the red would be a growth of 1 and shrink of 1, the blue would be a growth of 2 and shrink of 2, and the green would be a growth of 3 and shrink of 3.  


Grid
---------------------
Flex box is good for 1D layout while grid is good to section elemenets, using one and the other is not always the best, using a mixture of them is best since it can make more complex layouts more simple and easy to fallow. 
the amount of columns and rows is made by the amount of xfr you use 

```html

<html>
    <style> 

        .container{
            display:grid;
            grid-template-columns: 1fr 2fr;/*fractional ratio of 1 to 2 meaning 2 columns */
            grid-template-rows: 1fr 1fr;/*1 to 1 fractional */
            gap: 10px;
        }
    </style>
    <div class="container">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
    </div>

</html>




```


Grid sizing
-------------------------
To make each row and column a wanted size, we can just give it as fallows, this will not make the grid reactive, meaning it won't change size or comprese with the window.

Instead of using px we have use auto, it will expand and shring, though with the rows, it will not try to take 100% of the screen instead it trys to fit to the content, if it is 100px of the div it will try to be 100 pixels.




```css 
.container{
    display:grid;
    grid-template-rows: 100px 200px;
    grid-template-columns: 400px 800px;
    
}
```
The example up top shows that the grid would be of length of 400px by a height of 100px on the first section and the next will be of 200px by 800px. Below is a short hand way to do it

```css
.container{
    display:grid;
    grid-template: 100px 200px/ 400px 800px
    
}

```

It is better to use fractional sizing (fr), since it is a bit more simpler to fallow.
below is an example of fr, the first says the top row will be 1 : 2 the second says the columns will be 1 : 2 so essenital the frist row & colum is 1/2 

This will allow it as well to be responsive to the windows sizing.
```css 
.container{
    display:grid;
    grid-template-rows: 1fr 2fr;
    grid-template-columns: 1fr 2fr;
}

```
There is also a minmax method to use to set up the widnows response and to what certain size we want it to be. Do not forget the comus, it will cause issues
```css 
.container{
    display:grid;
    grid-template-rows: 200px 400px;
    grid-template-columns: 200px minmax(400px, 800px);
}

```
when conducting reapeating values, we can use reapeat function that will make those columns and rows for us, the first value is that amount we want and the second is the size we wish for it so X is the amount desires Y is either the height or length we wish for

```css 
.container{
    display:grid;
    grid-template-rows:repeat(8, 100px);
    grid-template-columns: repeat(8, 100px);
}

```
if we define way more rows or columns then we elements in our html, then it will just populate the X amount of rows and columns with the E amount of elements that we do have, and leave the rest empty

if we define with less amount then what we have in the css constainer, then it will add it but just squishing it in there it will make the X by Y grid but it will add the excess elements we have.

There is a way to add more rows and columns by using grid-auto-rows and grid-auto-columns. It will add the elements to it with the heights and length given to it

```css 
.container{
    display:grid;
    grid-template-rows: 1fr 2fr;
    grid-template-columns: 1fr 2fr;
    grid-auto-rows: 3fr ;
}

```


grid span
-------------------
We can tell iteams to span more then what they are assigned or defined, by using grid-row or column fallowed by span as shown below
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grid Placement</title>
  <style>
    body {
      padding: 0;
      margin: 0;
    }

    .container {
      height: 100vh;
      display: grid;
      gap: 3rem;
      grid-template-columns: 1fr 1fr 1.5fr;
      grid-template-rows: 1fr 1fr;
    }

    .item {
      font-size: 5rem;
      color: white;
      font-family: Arial, Helvetica, sans-serif;
      background-color: blueviolet;
      display: flex;
      align-items: center;
      justify-content: center;

    }

    .cowboy {
      background-color: #00B9FF;
      grid-column: span 2;
    }

    .astronaut {
      background-color: #03989E;
      order: 1;
      grid-column: span 2;

      /* TODO: Make the astronaut box look like the goal2 image. */

    }
    .book{
      grid-row: span 2;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="item cowboy">🤠</div>
    <div class="item astronaut">👨‍🚀</div>
    <div class="item book">📖</div>
  </div>
</body>

</html>

```
We can also move where the columns start, and expand by using grid-column-start/end as well their position in y-axis by grid-row-start/end, 
So if we have a gird of size 4 by 4 and have an element div that is a grid-item we can tell it to start at column 1 and expands to 3, and strech to column 1 2 and 3
```css 
.grid-item{
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
}
```
here is a short hand version as well, its a bit confusing but essential we are telling it to start at x and end at y as fallows

the values don't have to be positive they can be negative as well counting from the right to the left going by -1 to n*-1
```css
.grid-item{
    grid-column: 1/3 ;
    grid-row : 1/4;
}

```
instead of using end and start to position the way we want our grid items to appear, we can use order to make it apear ahead or beihind the other elements, recall that all the elements start with a value of 0
so anything higher then 0 will go to the end.

there is also a short hand of grid start and end with columns and all and that is grid-area, the way it works is as fallow

```css

.grid-item{
...
....
...
/*the first is grid-row-start, the seodn is column-start, the third is row-end and the last is column-end*/
grid-area: 2/ 1/ 3/ 3 ;
}

```
the top is honestly hard to fallow

bootStrap
----------------
there is the 12 row coloumns used as col to tell it how many coloumns to cover for an element is as fallows:
col-size-n 
(where n is the amount of coloumns to span from 1-12 n/12)
if no n is given then it will default to the length of the allowed space

rows are rows 

Sizing of col item
    sm : >= 576px
    md : >= 768px
    lg : >= 992px
    xl : >= 1200px
    xxl: >= 1400px

background color utilities: 
    bg-primary       // Blue
    bg-secondary     // Gray
    bg-success       // Green
    bg-danger        // Red
    bg-warning       // Yellow
    bg-info          // Teal
    bg-light         // Light gray (text may need dark)
    bg-dark          // Dark gray (text may need light)
    bg-white         // Pure white
    bg-transparent   // Transparent background
    bg-body          // Page background
    bg-body-secondary
    bg-body-tertiary

Text color utilities:
    text-primary
    text-secondary
    text-success
    text-danger
    text-warning
    text-info
    text-light
    text-dark
    text-white
    text-muted         // Lighter gray text
    text-body          // Default text color

spacing utilites (margine and padding):
    m-0    // margin: 0;
    mt-1   // margin-top: 0.25rem;
    mb-3   // margin-bottom: 1rem;
    ms-2   // margin-start (left in LTR)
    me-4   // margin-end (right in LTR)

    p-2    // padding: 0.5rem;
    ps-3   // padding-left (start)
    pe-1   // padding-right (end)
    pt-5   // padding-top
    pb-0   // padding-bottom

sizing






Self Note
-----------------------------------
Display with flex will center everything with in the tag elements scope.

When moving elements we are postioning them by the top left conner, regadless if it is a circle square or whatever otehr shape it maybe. It is always moved from the top left conner so if we go by 50px or 50% maring/top, it will be moved 50 of either from its original positon.

The original position of each tag/element is tge top left coner. 

with floater, there is inline-start and -end, the first starts where the image is not located in it's float, which is if its on the right or left the inline will start at the opposite direction, while end will do that same

