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