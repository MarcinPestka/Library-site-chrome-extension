setInterval(() => {
  var arr = document.getElementsByClassName("title")

  for (var i = 0; i < arr.length; i++) {
      if (arr[i].nextElementSibling.nodeName != "BUTTON") {
        myFunction(arr[i]);
      }
  };

  }, 500);


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
    var div = document.getElementsByClassName("itemFields")[0].children[0].children[0].children[0];
    var tytul = div.children[1].getElementsByTagName("a")[0].innerHTML.split(" /")[0]
    var autor = div.children[0].getElementsByTagName("a")[0].innerHTML.split(" (")[0]
    var miasto = div.children[2].getElementsByTagName("span")[0].innerHTML.split(" : ")[0]
    var wydawnictwo = div.children[2].getElementsByTagName("span")[0].innerHTML.split(" : ")[1].split(",")[0]
    var rok = div.children[2].getElementsByTagName("span")[0].innerHTML.split(",")[1].substring(1,5)
    return (tytul +" - "+autor + " wyd. " + wydawnictwo +" r. "+rok+ " " + miasto)
}

function myFunction(element){

        var button = document.createElement('button');
        button.innerHTML = 'Copy';
        button.style.color = "#d1d5db";
        button.style.backgroundColor = "#2e2e2e";
        button.style.borderRadius = "5px";
        button.style.padding = "5px";

            button.onclick = function(event){
                unsecuredCopyToClipboard(getBook());
            };

            element.after(button);
}
