// JavaScript Document

$(function() {
	
	$("input[type=text][name=dstart]").datepicker({
		dateFormat: "dd/mm/yy",
		minDate: "+1",
		altField: "input[type=hidden][name=start]",
		altFormat: "yy-mm-dd",
		onClose: function(selectedDate){
			$("input[type=text][name=dend]").datepicker("option", "minDate", selectedDate);
		}
	});
	
	$("input[type=text][name=dend]").datepicker({
		dateFormat: "dd/mm/yy",
		altField: "input[type=hidden][name=end]",
		altFormat: "yy-mm-dd",
		minDate: "+1"
	});
	
});

$(document).ready(function(e) {
	
	$(".btnShowResults").click(function(){
		$("html, body").animate({ scrollTop: $(".cspa").offset().top }, 1000);
		return false;
	});
	
	$(".search-maxi form input[type=checkbox]").prettyCheckbox({ "class": "chk-styled" });
	
	$(".sadvsop").on("click", function(){
		var btn = $(this);
		var advsc = $(".advoptions");
		var vtg = 1;
		
		if(advsc.is(":visible"))
		{
			vtg = 0;
		}

		$.post(btn.data("action"), {act:btn.data("act"), tg:vtg}, function(d){ }, "json");
		
		$(".sadvsop, .btn-smaxi").hide();
		if(advsc.is(":visible"))
		{
			vtg = 0;
			$(".sadvsop").first().show();
			$(".btn-smaxi").first().show();
		}
		else
		{
			advsc.find(".sadvsop").show();
			advsc.find(".btn-smaxi").show();
		}
		
		advsc.slideToggle("slow");
		return false;	
	});    
	
	var frm = $(".search-maxi").find("form");
	
	frm.submit(function(){
		var dstart = $("input[type=text][name=dstart]");
		var dend = $("input[type=text][name=dend]")
		
		var hstart = $("input[type=hidden][name=start]");
		var hend = $("input[type=hidden][name=end]")
		
		if(dstart.val().length <= 0 || dend.val().length <= 0)
		{
			dstart.val("");
			dend.val("");
			hstart.val("");
			hend.val("");
		}
		
		if(hstart.val().length <= 0)
		{
			hstart.val("");	
			dstart.val("");	
		}
		else
		{
			if(moment(hstart.val()).isValid())
			{
				if(moment(hstart.val()).format("DD/MM/YYYY") != dstart.val())
				{
					dstart.val(moment(hstart.val()).format("DD/MM/YYYY"));
				}
			}
		}
		
		if(hend.val().length <= 0)
		{
			hend.val("");	
			dend.val("");	
		}
		else
		{
			if(moment(hend.val()).isValid())
			{
				if(moment(hend.val()).format("DD/MM/YYYY") != dend.val())
				{
					dend.val(moment(hend.val()).format("DD/MM/YYYY"));
				}
			}
		}
		
		if(hstart.val().length <= 0 || hend.val().length <= 0 )
		{
			hstart.prop("disabled", true);
			hend.prop("disabled", true);
		}
		
		var ndd = $("select[name=nights]");
		
		if(ndd.val() == "0")
		{
			ndd.prop("disabled", true);	
		}
		else
		{
			if(hstart.val().length > 0 && hend.val().length > 0)
			{
				if(!moment(hstart.val()).isValid() && !moment(hend.val()).isValid())
				{
					ndd.prop("disabled", true);
				}
			}
			else
			{
				ndd.prop("disabled", true);	
			}
		}
		
		dstart.add(dend).add("input[type=checkbox][name=ctryall]").prop("disabled", true);
		
		frm.find("select").each(function(){
			var sl = $(this);
			if(sl.val() == "" || sl.val() == 0 || sl.val() == "all"){ sl.prop("disabled", true); }
		});
		
		frm.find("input[type=checkbox]").each(function(){
			var chk = $(this);
			if(chk.val() == ""){ chk.prop("disabled", true); }
		});
		
		frm.find("input").each(function(){
			var inp = $(this);
			if(inp.val() == ""){ inp.prop("disabled", true); }
		});
	});
	
	$("select[name=sort]").on("change", function(){
		var sortsel = $(this);
		var sortby = $(this).val();
		var sorturl = sortsel.data("url");
		var sortparam = sortsel.data("param");
		
		if(sortby.length > 0 && sortparam.length <= 0)
		{
			sorturl += "?"+sortby;
		}
		else if(sortparam.length > 0)
		{
			if(sortby.length <= 0)
			{
				sorturl += "?"+sortparam;
			}
			else
			{
				sorturl += "?"+sortparam+"&"+sortby;	
			}
		}
		
		document.location.href = sorturl;
	});
	
	var mapr = $("#mlist");
	
	if(mapr.length > 0)
	{
		var maw = mapr.width();
		var mah = mapr.height();
		
		mapr.gmap3({ 
			map:{
				options:{
					center: [mlist_center_lat,mlist_center_lan],
					zoom: mlist_zoom,
					mapTypeControl: false,
					mapTypeControlOptions: {
					   mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.SATELLITE],
					   style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
					},
					navigationControl: true,
					scrollwheel: true,
					streetViewControl: false,
					navigationControlOptions: {
						style: google.maps.NavigationControlStyle.ZOOM_PAN
					},
					maxZoom: 12
				}
			},
			marker: {
				values: markerlist,
				options:{
					draggable: false,
					icon: "/images/tots-map-marker.png"
				},
				events:{
					mouseover: function(marker, event, context){
						var map = $(this).gmap3("get"),
					  	infowindow = $(this).gmap3({get:{name:"infowindow"}});
						var infH = "";
						
						var vr = Array();
						vr = get_map_xy(maw, mah, mlist_zoom, context.data.cid, context.data.clat, context.data.clng, context.data.lat, context.data.lng);
						
						infH += "<div style=\"height:170px; width:330px;\">";
						infH += "<table class=\"table-condensed\">";
						infH += "<tr>";
						infH += "<td style=\"vertical-align:top; padding-top:30px;\" align=\"center\">";
						infH += "<img src=\""+context.data.thumbnail+"\" style=\"width:105px; height:80px; padding:0; margin0;\" />";
						infH += "</td>";
						infH += "<td style=\"vertical-align:top;\" align=\"left\">";
						infH += "<h2 class=\"ffamily-Playfair-Display fontsize18 m0 mb5\">"+context.data.name+"</h2>";
						infH += "<div class=\"color-424342 mb10 fontsize12\">";
						infH += "Price: "+context.data.price+"<br />";
						infH += "Bedrooms: "+context.data.bedroom;
						infH += "</div>";
						infH += "<ul class=\"list-unstyled\">";
						infH += "<li><a href=\""+context.data.url+"\" class=\"bold\"><i class=\"fa fa-caret-right\"></i> View this property</a></li>";
						infH += "<li><a href=\""+vr.url+"\" class=\"bold\"><i class=\"fa fa-caret-right\"></i> View all properties in this area</a></li>";
						infH += "</ul>";
						
						$.ajax({
							type: "POST",
							url: $(".sldata").data("slurl"),
							data: {act: $(".sldata").data("slact"), pid: context.data.pid},
							dataType: "json",
							async:false
						}).done(function(d){
							infH += "<a href=\""+d.slhref+"\" class=\"bold link-addtoSL\" data-act=\""+d.slact+"\" data-pid=\""+d.slpid+"\" data-vlink=\"yes\" data-separator=\"break\" data-map=\"yes\"><i class=\"fa fa-heart"+d.sli+"\"></i> <span>";
							if(d.issl == "yes")
							{
								infH += "Remove from shortlist";
							}
							else
							{
								infH += "Add to shortlist";
							}
							
							infH += "</span></a>";
						});
						
						infH += "</td>";
						infH += "</tr>";
						infH += "</table>";
						infH += "</div>";
						
						if(infowindow){ infowindow.close(); }
						
						$(this).gmap3({
							infowindow:{
								anchor:marker,
								options:{content: infH}
							}
						});
					}
				} //event ends
			}
		});	
	}
	
});

function Adjust(X,Y,x,y,z,w){
	var offset=268435456;
	var radius=offset/Math.PI;
	function LToX(x){return Math.round(offset+radius*x*Math.PI/180);}
	function LToY(y){return Math.round(offset-radius*Math.log((1+Math.sin(y*Math.PI/180))/(1-Math.sin(y*Math.PI/180)))/2);}
	function XToL(x){return ((Math.round(x)-offset)/radius)*180/Math.PI;}
	function YToL(y){return (Math.PI/2-2*Math.atan(Math.exp((Math.round(y)-offset)/radius)))*180/Math.PI;}
	if (w){
		return {x:(LToX(X)-LToX(x))>>(21-z),y:(LToY(Y)-LToY(y))>>(21-z)};
	}else{
		return {x:XToL(LToX(x)+(X<<(21-z))),y:YToL(LToY(y)+(Y<<(21-z)))};
	}
}

function XYToLL(X,Y,x,y,z){return Adjust(X,Y,x,y,z,0);}
function LLToXY(X,Y,x,y,z){return Adjust(X,Y,x,y,z,1);}
function BBox(X,Y,x,y,z){return [Adjust(0-X,0+Y,x,y,z),Adjust(0+X,0-Y,x,y,z)];}

function get_map_xy(mw, mh, mz, mcid, mclat, mclng, mlat, mlng)
{
	var w=mw;
	var h=mh;
	
	// half width of map box
	var X = w/2; 
	// half height of map box
	var Y = h/2; 
	var x = mclng; // center long
	var y = mclat; // center lat
	var z = mz; // map zoom level
	
	var c_lat = parseFloat(mclat);
	var c_lng = parseFloat(mclat);
	
	var smBB = BBox(X,Y,x,y,z); // find map edges
	// 0 is lowest left corner
	var b_lat = smBB[0].y; // bottom lat
	var l_lng = smBB[0].x; // left lang 
	// 1 is upper right corner
	var t_lat = smBB[1].y; // top lat
	var r_lng = smBB[1].x; // right lang
	
	 // calculate width and height in degrees
	var width_latlng = r_lng - l_lng;
	var height_latlng = t_lat - b_lat;
	
	 // calculate x & y factors from width/height(degrees) and width/height(pixels)
	var horz_factor = width_latlng/w;
	var vert_factor = height_latlng/h;
	
	var vreturn = new Array();
	vreturn["x"] = (mlng - l_lng) / horz_factor - 10;
	vreturn["y"] = (t_lat - mlat) / vert_factor + 0;
	vreturn["url"] = '/search/?x='+Math.round(vreturn["x"])+'&y='+Math.round(vreturn["y"])+'&country='+mcid+'&c_lat='+c_lat.toFixed(6)+'&c_lng='+c_lng.toFixed(6)+'&bl_lat='+b_lat.toFixed(6)+'&tr_lat='+t_lat.toFixed(6)+'&tr_lng='+r_lng.toFixed(6)+'&bl_lng='+l_lng.toFixed(6)+'&map_width='+w+'&map_height='+h+'&flexible=yes';
	
	return vreturn;
}