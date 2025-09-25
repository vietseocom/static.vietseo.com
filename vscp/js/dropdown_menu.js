function switchmenu(tagid){
	var el = document.getElementById(tagid);
	if(el.style.display == "none"){
		el.style.display = "block";
	}else{
		el.style.display = "none";
	}
}
function displaymenu(tagid, hidden_selectbox){
	var mn = document.getElementById(tagid);
	mn.style.display = 'block';
	//added by Thanh
	if (hidden_selectbox == 1) { 
		var Lang = document.getElementById('Lang');
		if (Lang != null) {
			Lang.style.display = 'none';
		}
		var catID = document.getElementById('catID');
		if (catID != null) {
			catID.style.display = 'none';
		}
		var catID_Filter = document.getElementById('catID_Filter');
		if (catID_Filter != null) {
			catID_Filter.style.display = 'none';
		}
		var Lang_Filter = document.getElementById('Lang_Filter');
		if (Lang_Filter != null) {
			Lang_Filter.style.display = 'none';
		}
		var active_filter = document.getElementById('active_filter');
		if (active_filter != null) {
			active_filter.style.display = 'none';
		}
		var parentID = document.getElementById('parentID');
		if (parentID != null) {
			parentID.style.display = 'none';
		}
		var parentID_filter = document.getElementById('parentID_filter');
		if (parentID_filter != null) {
			parentID_filter.style.display = 'none';
		}
		var location_filter = document.getElementById('location_filter');
		if (location_filter != null) {
			location_filter.style.display = 'none';
		}
		var adminID_Filter = document.getElementById('adminID_Filter');
		if (adminID_Filter != null) {
			adminID_Filter.style.display = 'none';
		}
		var KID = document.getElementById('KID');
		if (KID != null) {
			KID.style.display = 'none';
		}
		var SEID = document.getElementById('SEID');
		if (SEID != null) {
			SEID.style.display = 'none';
		}
		var webID = document.getElementById('webID');
		if (webID != null) {
			webID.style.display = 'none';
		}
		var sKID = document.getElementById('sKID');
		if (sKID != null) {
			sKID.style.display = 'none';
		}
		var SEID_Filter = document.getElementById('SEID_Filter');
		if (SEID_Filter != null) {
			SEID_Filter.style.display = 'none';
		}
		var isRemoved_Filter = document.getElementById('isRemoved_Filter');
		if (isRemoved_Filter != null) {
			isRemoved_Filter.style.display = 'none';
		}
		var linkLevel = document.getElementById('linkLevel');
		if (linkLevel != null) {
			linkLevel.style.display = 'none';
		}
		var linkLevel_Filter = document.getElementById('linkLevel_Filter');
		if (linkLevel_Filter != null) {
			linkLevel_Filter.style.display = 'none';
		}
		var SEmail_Filter = document.getElementById('SEmail_Filter');
		if (SEmail_Filter != null) {
			SEmail_Filter.style.display = 'none';
		}
		var submitSubpage_Filter = document.getElementById('submitSubpage_Filter');
		if (submitSubpage_Filter != null) {
			submitSubpage_Filter.style.display = 'none';
		}
		var notSend_Filter = document.getElementById('notSend_Filter');
		if (notSend_Filter != null) {
			notSend_Filter.style.display = 'none';
		}




	}
	
	//added by Thanh
	//var mn_2 = document.getElementById(tdid);
	//mn_2.style.backgroundColor = '#EBF5FD';
	//end
}

function hidemenu(tagid, hidden_selectbox){
	var mn = document.getElementById(tagid);
	mn.style.display = 'none';
	//added by Thanh
	if (hidden_selectbox == 1) { 
		var Lang = document.getElementById('Lang');
		if (Lang != null) {
			Lang.style.display = 'block';
		}
		var catID = document.getElementById('catID');
		if (catID != null) {
			catID.style.display = 'block';
		}
		var catID_Filter = document.getElementById('catID_Filter');
		if (catID_Filter != null) {
			catID_Filter.style.display = 'block';
		}
		var Lang_Filter = document.getElementById('Lang_Filter');
		if (Lang_Filter != null) {
			Lang_Filter.style.display = 'block';
		}
		var active_filter = document.getElementById('active_filter');
		if (active_filter != null) {
			active_filter.style.display = 'block';
		}
		var parentID = document.getElementById('parentID');
		if (parentID != null) {
			parentID.style.display = 'block';
		}
		var parentID_filter = document.getElementById('parentID_filter');
		if (parentID_filter != null) {
			parentID_filter.style.display = 'block';
		}
		var location_filter = document.getElementById('location_filter');
		if (location_filter != null) {
			location_filter.style.display = 'block';
		}
		var adminID_Filter = document.getElementById('adminID_Filter');
		if (adminID_Filter != null) {
			adminID_Filter.style.display = 'block';
		}
		var KID = document.getElementById('KID');
		if (KID != null) {
			KID.style.display = 'block';
		}
		var SEID = document.getElementById('SEID');
		if (SEID != null) {
			SEID.style.display = 'block';
		}
		var webID = document.getElementById('webID');
		if (webID != null) {
			webID.style.display = 'block';
		}
		var sKID = document.getElementById('sKID');
		if (sKID != null) {
			sKID.style.display = 'block';
		}
		var SEID_Filter = document.getElementById('SEID_Filter');
		if (SEID_Filter != null) {
			SEID_Filter.style.display = 'block';
		}
		var isRemoved_Filter = document.getElementById('isRemoved_Filter');
		if (isRemoved_Filter != null) {
			isRemoved_Filter.style.display = 'block';
		}
		var linkLevel = document.getElementById('linkLevel');
		if (linkLevel != null) {
			linkLevel.style.display = 'block';
		}
		var linkLevel_Filter = document.getElementById('linkLevel_Filter');
		if (linkLevel_Filter != null) {
			linkLevel_Filter.style.display = 'block';
		}
		var SEmail_Filter = document.getElementById('SEmail_Filter');
		if (SEmail_Filter != null) {
			SEmail_Filter.style.display = 'block';
		}
		var submitSubpage_Filter = document.getElementById('submitSubpage_Filter');
		if (submitSubpage_Filter != null) {
			submitSubpage_Filter.style.display = 'block';
		}
		var notSend_Filter = document.getElementById('notSend_Filter');
		if (notSend_Filter != null) {
			notSend_Filter.style.display = 'block';
		}





	}
	
	
}
