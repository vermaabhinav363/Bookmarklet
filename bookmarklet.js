(function(){
console.log("bookmarklet staring");
let paragraphs=document.getElementsByTagName('p');
for (let i =0;i<paragraphs.length;i++)
{
    paragraphs[i].innerHTML='kitten';
}
})();

