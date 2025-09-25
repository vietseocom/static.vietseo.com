/*-------------------------- Some JavaScript utilities --------------------------------
- isDigit : test it a character is a digit or not.
- isImage : test it a string is a image or not
- isNumber : test it a string is a number or not.
- trimLeft : cut leading blank spaces of a string.
- trimRight: cut trailing blank spaces of a string.
- trim: cut all leading and trailing blank spaces of a string
- isPosInt: test if a string has the format of a positive integer number or not.
- isPosReal: test if a string has the format of a positive real number or not. The decimal 
			 separator must be ".".
- isEmail: test if a string is a valid e-mail address or not
- isURL: test if a string is a valid url address or not
- isZip: test if a string has the format of a US zip code or not.
- getFileName: return the file name form the full file name.
- getFileExt: return the file extenstion from the full file name.
- isFloat: 
--------------------------------Implementation ---------------------------------------*/
/**
 * DHTML date validation script. Courtesy of SmartWebby.com (http://www.smartwebby.com/dhtml/)
 */
// Declaring valid date character, minimum year and maximum year
var dtCh= "/";
var minYear=1900;
var maxYear=2100;


/**
 * This array is used to remember mark status of rows in browse mode
 */
var marked_row = new Array;


/**
 * Sets/unsets the pointer and marker in browse mode
 *
 * @param   object    the table row
 * @param   integer  the row number
 * @param   string    the action calling this script (over, out or click)
 * @param   string    the default background color
 * @param   string    the color to use for mouseover
 * @param   string    the color to use for marking a row
 *
 * @return  boolean  whether pointer is set or not
 */
 
 
function setCheckboxes(the_form, name, do_check, type, event) {
    if (event && typeof event.preventDefault === 'function') {
        event.preventDefault(); // Ngăn hành vi mặc định (nhảy đến #start_form)
    }

    var elts = document.forms[the_form].elements[name];
    var elts_cnt = (typeof(elts.length) != 'undefined') ? elts.length : 0;

    if (do_check == 0) do_check = ''; 

    if (elts_cnt) {
        for (var i = 0; i < elts_cnt; i++) {
            if (type == 'checked') elts[i].checked = do_check;
            else {
                elts[i].checked = do_check;			
                elts[i].disabled = do_check;
            }
        }
    } else {
        if (type == 'checked') elts.checked = do_check;
        else {
            elts.checked = do_check;
            elts.disabled = do_check;
        }
    }

    return false; // Để chắc chắn không bị xử lý mặc định nữa
}



 function formatCurrency(amount, curUnit = 'VND') {
    if (curUnit === 'USD') {
        return amount.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    } else { // Mặc định VND
        return amount.toLocaleString('vi-VN', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
    }
}


function numberToCurrency(number, decimalSeparator, thousandsSeparator, nDecimalDigits){
    //default values
    decimalSeparator = decimalSeparator || '.';
    thousandsSeparator = thousandsSeparator || ',';
    nDecimalDigits = nDecimalDigits == null? 2 : nDecimalDigits;

    var fixed = number.toFixed(nDecimalDigits), //limit/add decimal digits
        parts = new RegExp('^(-?\\d{1,3})((?:\\d{3})+)(\\.(\\d{'+ nDecimalDigits +'}))?$').exec( fixed ); //separate begin [$1], middle [$2] and decimal digits [$4]

    if(parts){ //number >= 1000 || number <= -1000
        return parts[1] + parts[2].replace(/\d{3}/g, thousandsSeparator + '$&') + (parts[4] ? decimalSeparator + parts[4] : '');
    }else{
        return fixed.replace('.', decimalSeparator);
    }
}



function deleteFile(imageId, path, ftpServer, ftpUser, ftpPass) {
    if (confirm('Bạn có chắc chắn muốn xóa file này?')) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'delete_image_ftp.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.onreadystatechange = function () {
		    if (xhr.readyState === 4 && xhr.status === 200) {
		        //console.log(xhr.responseText); // In giá trị trả về từ PHP ra console
		        //alert(imageId);
		        if (xhr.responseText.trim() === 'success') { // Dùng trim() để loại bỏ khoảng trắng nếu có
		            document.getElementById(imageId).remove(); // Xóa phần tử HTML nếu xóa thành công
		            /*alert('File đã được xóa thành công!');*/
		        } else {
		            //alert('Không thể xóa file : ' + xhr.responseText);
		        }
		    }
		};

        // Gửi thông tin FTP và đường dẫn file qua AJAX
        xhr.send('path=' + encodeURIComponent(path) + 
                 '&ftp_server=' + encodeURIComponent(ftpServer) + 
                 '&ftp_user=' + encodeURIComponent(ftpUser) + 
                 '&ftp_pass=' + encodeURIComponent(ftpPass));
    }
}


// Copy text to clibboard
function copyToClipboard_conyeu(text) {
    var tempTextarea = document.createElement('textarea');
    tempTextarea.value = text;
    tempTextarea.style.position = 'absolute';
    tempTextarea.style.left = '-9999px';
    
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    
    try {
        var successful = document.execCommand('copy');
        if (successful) {
            console.log('Sao chép thành công!');
        } else {
            console.log('Sao chép thất bại!');
        }
    } catch (err) {
        console.error('Lệnh sao chép không thành công', err);
    }
    
    document.body.removeChild(tempTextarea);
}


function getSubdomain(url) {
	try {
		const parsedUrl = new URL(url);
		const hostname = parsedUrl.hostname;
		const parts = hostname.split('.');

		if (hostname.endsWith('.vn')) {
			if (parts.length > 3) {
				return parts.slice(0, parts.length - 3).join('.');
			} else {
				return '';
			}
		} else {
			if (parts.length > 2) {
				return parts.slice(0, parts.length - 2).join('.');
			} else {
				return '';
			}
		}
	} catch (e) {
		return '';
	}
}

function getDirectory(url) {
	try {
		const parsedUrl = new URL(url);
		const pathname = parsedUrl.pathname;

		if (pathname && pathname !== '/') {
			return pathname.replace(/^\/|\/$/g, '');
		} else {
			return '';
		}
	} catch (e) {
		return '';
	}
}

function getScheme(url) {
	try {
		const parsedUrl = new URL(url);
		return parsedUrl.protocol;
	} catch (e) {
		return '';
	}
}
	

function check_selected_checkbox(the_form, name, do_check, type, pos) { // name is element's name; type is disabled or checked
	//alert(do_check);
    var elts      = document.forms[the_form].elements[name];
	var elts_cnt  = (typeof(elts.length) != 'undefined')
                  ? elts.length
                  : 0;
	if (elts_cnt) {
		if (elts[pos].checked){
			elts[pos].checked = '';				  
		}
		else {
			elts[pos].checked = 'checked';				  
		}
	}
	else {
		if (elts.checked){
			elts.checked = '';
		}
		else {
			elts.checked = 'checked';
		}
	}
    return true;
	
} // end of the 'setCheckboxes()' function


function remove_space() {
	var theform = document.ckwf;
	theform.rkw.value = theform.rkw.value.replaceAll(' ', '');
}

function capitalizeFirstLetter(sentence) {
  sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
  return sentence;

}

function connkw() {
	var theform = document.ckwf;
	var str = '';			
	var kw1 = trim(theform.kw1.value);			
	var kw2 = trim(theform.kw2.value);
	var kw3 = trim(theform.kw3.value);			
	var a = kw1.split("\n"); 
	var b = kw2.split("\n"); 
	var c = kw3.split("\n"); 						
	//alert(a);
	//alert(b.length);			

	if (a.length == 0 && b.length == 0 && c.length == 0) {
		alert("Chưa đủ thông tin để ghép!");
		return false;
	}

	for (var i = 0; i < a.length; i++) {
		kw1 = trim(a[i]);
		for (var y = 0; y < b.length; y++) {
			kw2 = trim(b[y]);					
			if (i == 0 && y == 0 && kw1 != '' && kw2 != '') {
				str = kw1 + ' '+ kw2;
			}else if (kw1 != '' && kw2 != ''){
				str = str + '\n' + kw1 + ' '+ kw2;
			}	

			for (var x = 0; x < c.length; x++) {
				kw3 = trim(c[x]);		
				if (i == 0 && kw2 != '' && kw3 != '') {
					str = str + '\n' + capitalizeFirstLetter(kw2 + ' '+ kw3);									
				}
				if (kw1 != '' && kw2 != '' && kw3 != '') {
					str = str + '\n' + kw1 + ' '+ kw2 + ' '+ kw3;
				}
			}
			//}
		}
		//}
	} // end for			

	// Get kw on top
	for (var z = 0; x < z.length; z++) {
		kw2 = trim(b[z]);	
		if (kw2 != '') {
			str = capitalizeFirstLetter(kw2) + '\n' + str;
		}	
	}
	// Trả kết quả về
	theform.rkw.value = str;
}





function urlencode(str) {
  str = (str + '')
    .toString();

  return encodeURIComponent(str)
    .replace(/!/g, '%21')
    .replace(/'/g, '%27')
    .replace(/\(/g, '%28')
    .
  replace(/\)/g, '%29')
    .replace(/\*/g, '%2A')
    .replace(/%20/g, '+');
}



function research(Lang, kw, gurl){
	//alert(kw);
	if (Lang == 'vn') {
		var arrsite = ['vtc.vn', 'baomoi.com', 'thanhnien.vn', 'tuoitre.vn', 'vietnamnet.vn', 'dantri.com.vn', 'eva.vn', 'vnexpress.net', 'tintuc.net', 
						'24h.com.vn', 'tintuconline.com.vn', 'doisongphapluat.com', 'soha.vn', 'news.zing.vn', 'giadinh.net.vn', 'kenh14.vn', 'cafef.vn',
						'vtv.vn', 'danviet.vn', 'ngoisao.net', 'tinmoi.vn', 'vietgiaitri.com', 'baotintuc.vn'];
	}else{
		var arrsite = ['vietnamnews.vn', 'thanhniennews.com', 'tuoitrenews.vn', 'english.vietnamnet.vn'];
	}
	
	var randnum = Math.floor((Math.random() * (arrsite.length - 1) )); 
	//var openstr = kw + ' site:' + arrsite[randnum];
	//var openstr = '"' + kw + '"';
	
	var gstring = gurl+urlencode(kw);
	//alert(gstring);
	window.open(gstring, 'gtab');
}


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function cut_ali(){
	document.alifrm.alitxt.value = change_alias(document.alifrm.alitxt.value);
}

function format_domain(){
	document.alifrm.alitxt.value = change_alias(document.alifrm.alitxt.value);
	document.alifrm.alitxt.value = document.alifrm.alitxt.value.replaceAll(' ', '');
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

function change_alias( alias )
	{
		//alert(alias);
		//return alias;
		var str = alias;
		str= str.toLowerCase(); 
		str= str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
		str= str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
		str= str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
		str= str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
		str= str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
		str= str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
		str= str.replace(/đ/g,"d"); 
		//str= str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,"-");
		/* tim va thay the cac ki tu dac biet trong chuoi sang ki tu  - */
		str= str.replace(/-+-/g,"-"); //thay the 2- thanh 1-
		str= str.replace(/^\-+|\-+$/g,""); 
		//cat bo ky tu - o dau va cuoi chuoi
		return str;
	}


 
function set_adde_code(){
	var theForm = document.post_frm;	
	theForm.contr_code.value = theForm.contr_code_org.value + '-PL' + theForm.adde_num.value;
}

 
function set_bacc(name){
	var theForm = document.post_frm;
	if (theForm.isvat.checked == true){
		theForm.bankacc.value = 1;
	}else{
		theForm.bankacc.value = 3;
	}
}


function replaceAll(find, replace, str){
  while( str.indexOf(find) > -1)
  {
	str = str.replace(find, replace);
  }
  return str;
}

function setPointer(theRow, theRowNum, theAction, theDefaultColor, thePointerColor, theMarkColor)
{
    var theCells = null;

    // 1. Pointer and mark feature are disabled or the browser can't get the
    //    row -> exits
    if ((thePointerColor == '' && theMarkColor == '')
        || typeof(theRow.style) == 'undefined') {
        return false;
    }

    // 2. Gets the current row and exits if the browser can't get it
    if (typeof(document.getElementsByTagName) != 'undefined') {
        theCells = theRow.getElementsByTagName('td');
    }
    else if (typeof(theRow.cells) != 'undefined') {
        theCells = theRow.cells;
    }
    else {
        return false;
    }

    // 3. Gets the current color...
    var rowCellsCnt  = theCells.length;
    var domDetect    = null;
    var currentColor = null;
    var newColor     = null;
    // 3.1 ... with DOM compatible browsers except Opera that does not return
    //         valid values with "getAttribute"
    if (typeof(window.opera) == 'undefined'
        && typeof(theCells[0].getAttribute) != 'undefined') {
        currentColor = theCells[0].getAttribute('bgcolor');
        domDetect    = true;
    }
    // 3.2 ... with other browsers
    else {
        currentColor = theCells[0].style.backgroundColor;
        domDetect    = false;
    } // end 3

    // 3.3 ... Opera changes colors set via HTML to rgb(r,g,b) format so fix it
    if (currentColor.indexOf("rgb") >= 0)
    {
        var rgbStr = currentColor.slice(currentColor.indexOf('(') + 1,
                                     currentColor.indexOf(')'));
        var rgbValues = rgbStr.split(",");
        currentColor = "#";
        var hexChars = "0123456789ABCDEF";
        for (var i = 0; i < 3; i++)
        {
            var v = rgbValues[i].valueOf();
            currentColor += hexChars.charAt(v/16) + hexChars.charAt(v%16);
        }
    }

    // 4. Defines the new color
    // 4.1 Current color is the default one
    if (currentColor == ''
        || currentColor.toLowerCase() == theDefaultColor.toLowerCase()) {
        if (theAction == 'over' && thePointerColor != '') {
            newColor              = thePointerColor;
        }
        else if (theAction == 'click' && theMarkColor != '') {
            newColor              = theMarkColor;
            marked_row[theRowNum] = true;
            // Garvin: deactivated onclick marking of the checkbox because it's also executed
            // when an action (like edit/delete) on a single item is performed. Then the checkbox
            // would get deactived, even though we need it activated. Maybe there is a way
            // to detect if the row was clicked, and not an item therein...
            // document.getElementById('id_rows_to_delete' + theRowNum).checked = true;
        }
    }
    // 4.1.2 Current color is the pointer one
    else if (currentColor.toLowerCase() == thePointerColor.toLowerCase()
             && (typeof(marked_row[theRowNum]) == 'undefined' || !marked_row[theRowNum])) {
        if (theAction == 'out') {
            newColor              = theDefaultColor;
        }
        else if (theAction == 'click' && theMarkColor != '') {
            newColor              = theMarkColor;
            marked_row[theRowNum] = true;
            // document.getElementById('id_rows_to_delete' + theRowNum).checked = true;
        }
    }
    // 4.1.3 Current color is the marker one
    else if (currentColor.toLowerCase() == theMarkColor.toLowerCase()) {
        if (theAction == 'click') {
            newColor              = (thePointerColor != '')
                                  ? thePointerColor
                                  : theDefaultColor;
            marked_row[theRowNum] = (typeof(marked_row[theRowNum]) == 'undefined' || !marked_row[theRowNum])
                                  ? true
                                  : null;
            // document.getElementById('id_rows_to_delete' + theRowNum).checked = false;
        }
    } // end 4

    // 5. Sets the new color...
    if (newColor) {
        var c = null;
        // 5.1 ... with DOM compatible browsers except Opera
        if (domDetect) {
            for (c = 0; c < rowCellsCnt; c++) {
                theCells[c].setAttribute('bgcolor', newColor, 0);
            } // end for
        }
        // 5.2 ... with other browsers
        else {
            for (c = 0; c < rowCellsCnt; c++) {
                theCells[c].style.backgroundColor = newColor;
            }
        }
    } // end 5

    return true;
} // end of the 'setPointer()' function


// added 2004-05-08 by Michael Keck <mail_at_michaelkeck_dot_de>
//   copy the checked from left to right or from right to left
//   so it's easier for users to see, if $cfg['ModifyAtRight']=true, what they've checked ;)
function copyCheckboxesRange(the_form, the_name, the_clicked)
{
    if (typeof(document.forms[the_form].elements[the_name]) != 'undefined' && typeof(document.forms[the_form].elements[the_name + 'r']) != 'undefined') {
        if (the_clicked !== 'r') {
            if (document.forms[the_form].elements[the_name].checked == true) {
                document.forms[the_form].elements[the_name + 'r'].checked = true;
            }else {
                document.forms[the_form].elements[the_name + 'r'].checked = false;
            }
        } else if (the_clicked == 'r') {
            if (document.forms[the_form].elements[the_name + 'r'].checked == true) {
                document.forms[the_form].elements[the_name].checked = true;
            }else {
                document.forms[the_form].elements[the_name].checked = false;
            }
       }
    }
}


// added 2004-05-08 by Michael Keck <mail_at_michaelkeck_dot_de>
//  - this was directly written to each td, so why not a function ;)
//  setCheckboxColumn(\'id_rows_to_delete' . $row_no . ''\');
function setCheckboxColumn(theCheckbox){
    if (document.getElementById(theCheckbox)) {
        document.getElementById(theCheckbox).checked = (document.getElementById(theCheckbox).checked ? false : true);
        if (document.getElementById(theCheckbox + 'r')) {
            document.getElementById(theCheckbox + 'r').checked = document.getElementById(theCheckbox).checked;
        }
    } else {
        if (document.getElementById(theCheckbox + 'r')) {
            document.getElementById(theCheckbox + 'r').checked = (document.getElementById(theCheckbox +'r').checked ? false : true);
            if (document.getElementById(theCheckbox)) {
                document.getElementById(theCheckbox).checked = document.getElementById(theCheckbox + 'r').checked;
            }
        }
    }
}




function IsEmpty(strValue){
	if(strValue=="")
		return true;
	var strValueTest = new String(strValue);
	while(strValueTest.search(" ")!= -1)
		strValueTest = strValueTest.replace(" ", "");
	return (strValueTest.length== 0);
}
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
function isDate(strValue, dateFormat){ //dateFormat is mm/dd/yyyy or dd/mm/yyyy

	if(IsEmpty(strValue))return true;
	
	var arrDate = strValue.split("/");
	if(arrDate.length < 3) return false;
	
	if (dateFormat == 'mm/dd/yyyy') { 
		var strDay = arrDate[1];
		var strMonth = arrDate[0];
		var strYear = arrDate[2];

	}
	else {
		var strDay = arrDate[0];
		var strMonth = arrDate[1];
		var strYear = arrDate[2];
	}
		
	if(strYear.charAt(0) != 1&&strYear.charAt(0) != 2){
		if(strYear.charAt("0") == 0){
			strYear = "20" + strYear;
		}
		else{
			strYear = "19" + strYear;
		}
	}


	if(strYear < 90 || strYear > 2100) return false;
	else if (strMonth < 1 || strMonth > 12) return false;
	else if (strDay < 1 || strDay > 31) return false;
	
	return true;
	//alert(testDate.getMonth());
	/*
	alert(testDate.getMonth() + 1);
	alert(strMonth);
	if(testDate.getMonth() + 1 == strMonth){
		return true;
	} 
	else{
		return false;
	}
	*/
	
}


/*
    compare two date.
    return :
        start <= end    :   true
        start > end     :   false
*/
function compareDate(start, end, dateFormat){
    if (start == '' && end == '') return true;
	
	var arrDate = start.split("/");
	if(arrDate.length < 3) return false;
	
	if (dateFormat == 'mm/dd/yyyy') { 
		var s_d = arrDate[1];
		var s_m = arrDate[0];
		var s_y = arrDate[2];

	}
	else {
		var s_d = arrDate[0];
		var s_m = arrDate[1];
		var s_y = arrDate[2];
		//alert(strDay);
		
	}

	var arrDate = end.split("/");
	if(arrDate.length < 3) return false;
	
	if (dateFormat == 'mm/dd/yyyy') { 
		var e_d = arrDate[1];
		var e_m = arrDate[0];
		var e_y = arrDate[2];

	}
	else {
		var e_d = arrDate[0];
		var e_m = arrDate[1];
		var e_y = arrDate[2];
		//alert(strDay);
		
	}

	//alert(s_m);
	//alert(e_m);

    //compare year , month and day of them
    if( s_y <= e_y){ // compare year
        if(s_y == e_y){
            if(s_m <= e_m){//compare month
                if(s_m == e_m ){
                    if(s_d <= e_d){// compare date
                        return true;
                    }else{
                        return false;
                    }//end compare date
                }
                return true;
            }else{
                return false;
            }// end compare month
        }    
        return true;
    }else{
        return false
    }// end compare year
            
}



function DaysArray(n) {
	for (var i = 1; i <= n; i++) {
		this[i] = 31
		if (i==4 || i==6 || i==9 || i==11) {this[i] = 30}
		if (i==2) {this[i] = 29}
   } 
   return this
}

function isInteger(s){
	var i;
    for (i = 0; i < s.length; i++){   
        // Check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    // All characters are numbers.
    return true;
}

function stripCharsInBag(s, bag){
	var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++){   
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}


function isFloat(obj_val){
	var number_format = "0123456789.";
	for (var i = 0; i < obj_val.length; i++)
	{
		check_char = number_format.indexOf(obj_val.charAt(i))
		if (check_char < 0)
			return false;
	}
	var pos = obj_val.indexOf('.');
	if (pos==0 || (pos>0 && obj_val.indexOf('.',pos+1)>=0))
		return false;
	return true;
}


/*
isDigit
Check if a character is a digit or not
*/
function isDigit(c){
	if((c=='0')||(c=='1')||(c=='2')||(c=='3')||(c=='4')||(c=='5')||(c=='6')||(c=='7')||(c=='8')||(c=='9')||(c=='.'))
		return true;
	else
		return false;
}
/*
isNumber
Check if a string is a number
*/
function isNumber(str){
	var check_char;
	var number_format = "0123456789.";
	for (var i = 0; i < str.length; i++)
	{
		check_char = number_format.indexOf(str.charAt(i));
		if (check_char < 0){
			return false;
		}
	}
	return true;
}

function is_instr_schars(str){
	var check_char;
	var special_char = "`~!@#$%^&*()+={}[]|\":;\",<>.?/";
	for (var i = 0; i < str.length; i++){
		check_char = special_char.indexOf(str.charAt(i));
		if (check_char > 0){
			return false;
		}
	}
	return true;

}


/*
isCharacter
*/
function isCharacter(str)
{
	for (var i = 0; i < str.length; i++)
	{
		check_char = number_format.indexOf(str.charAt(i));
		if (check_char < 0){
			return false;
		}
	}
	return true;
}
/*-------End check number------------------*/
/*
 trimLeft
 Remove all spaces at the beginning of a string
*/
function trimLeft(s)
{
 var i;
 i=0;
 var n;
 n = s.length;
 while((i<n)&&(s.charAt(i)==' ')) i++;
	s = s.substring(i);
 return(s);
} 

/*
 trimRight
 Remove all spaces at the end of a string
*/
function trimRight(s)
{
 var n;
 n = s.length;
 var i;
 i = s.length-1;
 while((i>=0)&&(s.charAt(i)==' ')) i--;
	s = s.substring(0,i+1);
 return(s);
}

/* 
 trim
 Remove all leading and trailing spaces in a string
*/
function trim(s){
 s = trimLeft(s);
 s = trimRight(s);
 return(s);
}  

/*
 isPosInt
 check if a string is a valid positive integer
*/
function isPosInt(s){
 var n;
 n = s.length
 if(n==0) return false;
 for(i=0;i<n;i++)
	if(!isDigit(s.charAt(i))) return false;
 return true;
}

/*
 isPosReal
 check if  a string is a valid positive real number or not (. as decimal number)
*/
function isPosReal(s){
 var dot;
 s = trim(s);
 dot =0;
 for(i=0;i<s.length;i++)
	if(!isDigit(s.charAt(i))) 
		{
			if(s.charAt(i)=='.') 
				{
					dot++;
					if(i==s.length-1) return false;
					if(dot>1) return false;
				}
			else return false;	
		}
 return true;
}


/*
 isURL
 check if an url address is valid (format only) 
*/
function isURL(strURL){
	strURL = trim(strURL);
	if( strURL.indexOf(" ") >= 0 ) return false;
	if(strURL.indexOf("..") >= 0) return false;
	if(strURL.indexOf('\\') >= 0 ) return false;
	if(strURL.indexOf('\"') >= 0) return false;
	if(strURL.indexOf('http://') < 0 && strURL.indexOf('https://') < 0) return false;	
	if(strURL.length < 8 ) return false;	
	return true;
}


/*
getFileName
receive a full path file name, return only the file name
	ex: input = C:\Windows\myfile.txt
	output = myfile.txt
*/
function getFileName(str)
{
 var bpos
 var filename
 if((str=='')||(str.indexOf("\\")==-1)) return(str);
 bpos = str.lastIndexOf("\\");
 filename = str.substring(bpos+1,str.length)
 return(filename);
}

/* 
 getFileType
 receive a full path file name, return only the file extension
 ex: input = C:\Windows\myfile.txt
  	 output = txt
*/
function getFileType(str)
{
 var filename;
 var fileext;
 var dotpos;
 fileext ='';
 filename = getFileName(str);
 dotpos = filename.lastIndexOf(".");
 
 if(dotpos!=-1)
	{
		fileext = filename.substring(dotpos+1,filename.length);
		fileext = fileext.toLowerCase();
	}
 else
	{
		fileext = '';
	}
 return(fileext);
}



function isImage(str){
	str = str.toLowerCase();
	if (!/(\.(gif|jpg|jpeg|bmp|png|psd|swf))$/i.test(str)){
		return false;
	}
	return true;
}

//check media
function isMedia(str){
	str = str.toLowerCase();
	if (!/(\.(wmv|avi|mp4|dat|mpg|mpeg|mp3|wma|asf|mid|swf))$/i.test(str)){
		return false;
	}
	return true;

}
//end media


function is_upload_file(str){
	str = str.toLowerCase();
	//alert(isImage(str));
	if (!isImage(str) && !/(\.(doc|xls|ppt|zip|rar|ace|tar|txt|csv|psd|avi|dat|mpeg|mpg|wmv|mp3|mp4|mid|asf|mid|swf))$/i.test(str)) {
		return false;	
	}
	return true;
}



function isVCode(str){
	str = trim(str);
	if (str.length != 5) return false;
	return true;
	
}


//check API Key	
function isAPIKey(str){
	var API_Key_Len = 19;
	if (str.length != API_Key_Len ) return false;
	else if (str.indexOf(" ") > 0) return false;
	else if (str.indexOf("-") < 0) return false;
	//else if (str.indexOf(symbol) < 0) return false;
	else return true;
}	

//confirm deleting
function confirm_onclick(str, url){
	//if (str == '') str = 'Do you really want to delete selected item(s)? Click OK to continue, click Cancel to return.';
	if (url != '') { 
		if (confirm(str)) window.location.href=url;
		else return false;
	}
	else return confirm(str);
		
}


function force_checkbox(theForm, pos, maxpos){
	//if (maxpos == 9999) maxpos = theForm.elements.length;
	var iCo = 0;
	if (theForm.length > 0) {
		for (var i=pos; i< maxpos; i++) {
			if (theForm.elements[i].checked==true)
			{
				iCo++;
			}		
		}
	}
	else {
		iCo = 1;
	}
			
	if (iCo < 1){
		//alert(str);
		return false;
	}
	return true;
}

function checkDoDelete(theForm,pos){
	var iCo = 0;
	if (theForm.length > 0) {
		for (var i=pos; i< theForm.elements.length;i++) {
			if (theForm.elements[i].checked==true)
			{
				iCo++;
			}		
		}
	}
	else {
		iCo = 1;
	}
	
	if (iCo>0)
	{
		return confirm("Bạn có thật sự muốn xóa hay cập nhật các mục đã chọn? Click OK để tiếp tục, click Cancel để trở lại!");
	}
	else
	{
		alert("Vui lòng chọn các mục cần xóa hoặc cập nhật!");
		return false;
	}
}

/*
function open_diff_window(URL){
	var ran_number = Math.floor(Math.random()*50); 
	window.open(URL, ran_number);
}
*/

function new_window(URL, width, height){
	window.open (URL, "new_window", "width="+ width + ", height="+ height +", resizable=1, scrollbars=1");
}


function copy_to_clipboard(formName, fieldName){
	//Copied = eval("document.forms." + formName + "." + fieldName + ".createTextRange()");
	//Copied.execCommand("Copy");
	//var text = 'Ok';
	//alert('test');
	text = eval("document.forms." + formName + "." + fieldName + ".value");
	//alert(text);
	if(window.clipboardData)  
	   {  
	   window.clipboardData.setData('text',text);  
	   }  
	   else  
	   {  
	       var clipboarddiv=document.getElementById('divclipboardswf');  
	   if(clipboarddiv==null)  
	   {  
	      clipboarddiv=document.createElement('div');  
	          clipboarddiv.setAttribute("name", "divclipboardswf");  
	      clipboarddiv.setAttribute("id", "divclipboardswf");  
	      document.body.appendChild(clipboarddiv);  
	   }  
	       clipboarddiv.innerHTML='<embed src="clipboard.swf" FlashVars="clipboard='+  
	encodeURIComponent(text)+'" width="0" height="0" type="application/x-shockwave-flash"></embed>';  
	   }  
	   //alert('The text is copied to your clipboard...');  
	   return false;  
}



