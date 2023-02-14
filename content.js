
function unsecuredCopyToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('Unable to copy to clipboard', err);
    }
    document.body.removeChild(textArea);
  }

function getBook(){
    var tytul = document.getElementsByClassName("itemFields")[0].children[0].children[0].children[0].children[1].getElementsByTagName("a")[0].innerHTML.split(" /")[0]
var autor = document.getElementsByClassName("itemFields")[0].children[0].children[0].children[0].children[0].getElementsByTagName("a")[0].innerHTML.split(" (")[0]
var miasto = document.getElementsByClassName("itemFields")[0].children[0].children[0].children[0].children[2].getElementsByTagName("span")[0].innerHTML.split(" : ")[0]
var wydawnictwo = document.getElementsByClassName("itemFields")[0].children[0].children[0].children[0].children[2].getElementsByTagName("span")[0].innerHTML.split(" : ")[1].split(",")[0]
var rok = document.getElementsByClassName("itemFields")[0].children[0].children[0].children[0].children[2].getElementsByTagName("span")[0].innerHTML.split(" : ")[1].split(",")[1].substring(1,5)
var pelny = tytul +" - "+autor + " wyd. " + wydawnictwo +" r. "+rok+ " " + miasto;

return (pelny)
}

function myFunction(){

        var button = document.createElement('button');
        button.innerHTML = 'Copy';
        button.style.color = "#d1d5db";
        button.style.backgroundColor = "#2e2e2e";
        button.style.borderRadius = "5px";
        button.style.padding = "5px";

            button.onclick = function(event){
                unsecuredCopyToClipboard(getBook());
            };

            var header = document.getElementsByClassName("title")[0];
            header.after(button);
}

setTimeout(myFunction, 1000);