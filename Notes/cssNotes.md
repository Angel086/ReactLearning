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





Self Note
-----------------------------------
Display with flex will center everything with in the tag elements scope.

When moving elements we are postioning them by the top left conner, regadless if it is a circle square or whatever otehr shape it maybe. It is always moved from the top left conner so if we go by 50px or 50% maring/top, it will be moved 50 of either from its original positon.

The original position of each tag/element is tge top left coner. 

