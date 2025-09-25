var lockismax = false;
var titdefault = 60;
var desdefault = 170;
function adddefaultgoogle(){
	
	$('.loadtit').each(function() {
			
		var strlen = $(this).val().length;
		
		var lang = $(this).attr('lang');
		
		if(strlen==0){
			
			$('.conlaitit_'+lang).append(titdefault);
			
		}
			
	});
	
	$('.loaddes').each(function() {
			
		var strlen = $(this).val().length;
		
		var lang = $(this).attr('lang');
		
		if(strlen==0){
			
			$('.conlaides_'+lang).append(desdefault);
			
		}
			
	});
}
function check_max_tit(textform,len,lang){			
	if (len >titdefault) {  
	
		$('#tieude_'+lang).addClass("max_des");
		$("#conlaitit_"+lang).addClass("limit_max");
		$("#danhaptit_"+lang).addClass("limit_max");
	    $('#thongbao').text('Bạn đã nhập dư: ');
		if(lockismax){
									
			textform.value = textform.value.substring(0,titdefault);
			
			$("#conlaitit_"+lang).text(0);  
		
			$("#danhaptit_"+lang).text(titdefault);
			
		}else{
			
			$("#conlaitit_"+lang).text(len - titdefault);  
		
		
			$("#danhaptit_"+lang).text(len);			
			
		}				
		
	} else{
	
		$("#conlaitit_"+lang).text(titdefault - len);  
		
		$("#danhaptit_"+lang).text(len);  
		$('#thongbao').text('Bạn nhập còn lại: ');
		if($('#tieude_'+lang).hasClass("max_des")){
		
			$('#tieude_'+lang).removeClass("max_des");
		
		}
		
		if($("#conlaitit_"+lang).hasClass("limit_max")){
		
			$("#conlaitit_"+lang).removeClass("limit_max");
		
		}
		
		if($("#danhaptit_"+lang).hasClass("limit_max")){
		
			$("#danhaptit_"+lang).removeClass("limit_max");
		
		}
	
	}
};
	
function check_max_des(textform,len,lang){	
	
	if (len >desdefault) {  
	
		$('#seo_des_'+lang).addClass("max_des");
		$("#conlaides_"+lang).addClass("limit_max");
		$("#danhapdes_"+lang).addClass("limit_max");
	 $('#thongbao1').text('Bạn đã nhập dư: ');
		if(lockismax){
			
	
									
			textform.value = textform.value.substring(0,desdefault);
			
			$("#conlaides_"+lang).text(0);  
		
			$("#danhapdes_"+lang).text(desdefault);
			
		}else{
			
			$("#conlaides_"+lang).text(len - desdefault);  
		
			$("#danhapdes_"+lang).text(len);			
			
		}				
		
	} else{
	
		$("#conlaides_"+lang).text(desdefault - len);  
		
		$("#danhapdes_"+lang).text(len);  
		$('#thongbao1').text('Bạn nhập còn lại: ');
		if($('#seo_des_'+lang).hasClass("max_des")){
		
			$('#seo_des_'+lang).removeClass("max_des");
		
		}
		
		if($("#conlaides_"+lang).hasClass("limit_max")){
		
			$("#conlaides_"+lang).removeClass("limit_max");
		
		}
		
		if($("#danhapdes_"+lang).hasClass("limit_max")){
		
			$("#danhapdes_"+lang).removeClass("limit_max");
		
		}
	
	}
};