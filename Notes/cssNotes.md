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

Self Note
-----------------------------------
Display with flex will center everything with in the tag elements scope,