JS is an interpreting langaige not a compiler java,c++/c and other such examples are compilers, while js, py ruby are interpretors.
Originally it was just a frontend adding animation and all but has become a backend and front end as well, it is one of the languages that is supported by all the browsers. C++,C#, Py and other are supported.

length in js gets the exact length apperently of the string or element you're inspecting.
slice, cuts it from j to excluding k

To change elements or even select them in HTML using js, you do this :
"document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = "Angela";"

document.getElementsByTagName();
theres get elementBy('elementType') as well getting it by id and so forth. you can change it the variables value by the top and even select them as well.

to change style you need to add .style."variable html"

document.getElementChild.querySelector('h1').style.color = "purple";eleme

getElementsByClassName('name of class')

elements return array 

To change a txt value or element value in html by js, we add at the end innerHTML to change said value.

to get all elements of a certain value or type we have to use

document.querySelectorAll("#list .item");

this would return all elements that have the id of list and a class of item

if its an item insead another item with multiple type or we want to be precise
we do 

document.querySelectorAll("#list a.item");
this would get elements with an id of list with a anchor tag with a class type of item


When changing an elements css value, if it has a type that has a dash '-', then in js it will be with no dash, all together and camel case, such as font-size it would then be 
```js
document.querySelector('h1').style.fontSize = "20rem"
```

we can get class list and other attributes of an element by using querrySelectore("element").classList, we can add, or remove  or use toggle, that it will do either add or remove to the element.

```css
.toGreentxt{
    color: green;
}
.increaseSize3{
    font-weight: 300rem;
}
```
```js
    document.querySelector('h3').classList.toggle('toGreentxt');
    doccumer.querySelector('p').classList.add('increaseSize3');
```

Difference between Inner html and textContent:
----------------------------------------------------
inner html will give you all that's inbetween an html elemet. If you wanted to see what's inbetween a div or change it's values you'd use 
```html
    <div>
        <p> Something here</p>
    </div>
```
```js   
    document.quertSelector('div').innerHTML;

```
the js would spill what's inbetween the div as we can see it would give us the div with the text. If we want to change what's in the element, such as a h1  we would then do

```js
   document.quertSelector('h1').innerHTML= "<em>New Text here</em>"; 
```
we have to surrond it with quotes.

textcontent will give you what's in between whatever element you decide, just the text though. 