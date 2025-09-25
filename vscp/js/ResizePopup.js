<!-- 
var opera = (navigator.userAgent.indexOf('Opera') != -1);
var ie4   = (document.all != null);
var ns6   = (document.getElementById != null);
var ns4   = (document.layers != null);

if (!opera && !ns4) {
  document.writeln('<STYLE type="text/css">');
  //document.writeln('#largephotoframe {position:relative; visibility:hidden;}');
  document.writeln('#largephoto {position:relative;}');
  document.writeln('</STYLE>');
}

function checkDeleteImage(obj1,obj2){
	if (obj1.checked == true)
	{
		obj2.disabled = true;
	}
	else
	{
		obj2.disabled = false;
	}
}

function showLargePhoto()
{
  if (opera) {
    // NOP
  } else if (ie4 && document.all.largephoto) {
    //document.all.largephotoframe.style.visibility = "visible";
    document.all.largephoto.style.visibility = "visible";
  } else if (ns6 && document.getElementById('largephoto')) {
    //document.getElementById('largephotoframe').style.visibility = "visible";
    document.getElementById('largephoto').style.visibility = "visible";

/*
  } else if (ns4 && document.layers.largephotoframe) {
    document.layers["largephotoframe"].visibility = 'show';
    document.layers["largephotoframe"].document.layers["largephoto"].visibility = 'show';
*/

  }
}

function resizeToImage()
{
  if (document.images) {
    var img;
    if (document.images["popupimage"]) {
      img = document.images["popupimage"];
    } else if (document["popupimage"]) {
      img = document["popupimage"];
    } else {
      img = document.images[0];
    }
    
    window.resizeTo(Math.min(800, 30 + img.width), Math.min(600, 50 + img.height));
  }
}

var currThumbIndex = 0;

var fullSizeWin = null;
function showFullSizeImage(URL,n) {
  if (n == null) {
    n = currThumbIndex;
  }
  if (fullSizeWin != null && !fullSizeWin.closed) {
    fullSizeWin.close()
  }

  fullSizeWin = window.open(URL, 'yautospopup', 'scrollbars=no,status=no,width=800,height=600,resizable=no,toolbar=no,menubar=no');
  fullSizeWin.focus();

 // return false;
}
// -->
