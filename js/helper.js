/*---------- Function: Menyamakan Window Width Javascript & CSS // ----------*/
	function viewport() {
	    var e = window, a = 'inner';
	    if (!('innerWidth' in window )) {
	        a = 'client';
	        e = document.documentElement || document.body;
	    }
	    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
	}

	var w=window,
		d=document,
		e=d.documentElement,
		g=d.getElementsByTagName('body')[0],
		x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
/*---------- // Menyamakan Window Width Javascript & CSS ----------*/


var window_width;
window.addEventListener("load", function(){
	var the_viewport = viewport();
	window_width = the_viewport.width;
});
$(document).ready(function(){
	var the_viewport = viewport();
	window_width = the_viewport.width;
});



function truncate_dec (num, places) {
  return Math.trunc(num * Math.pow(10, places)) / Math.pow(10, places);
}





function spc_to_undsc_lower (input){
	return input.trim().replace(/\s+/g, '_').toLowerCase();
}



function captlz (str) {
		

		return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1);});
}

function captlz_lwr_rest (str) {
		return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}



function dash_to_spc_capt (str){
	var dash_to_space = str.replace(/-/g, ' ');
	dash_to_space = captlz(dash_to_space);
	return dash_to_space;
}


function remove_ext (input){
	var file_name = input;
	var output = file_name.substr(0, input.lastIndexOf('.')) || file_name;
	return output;

}


function curr_style_val (el, style){
	if (el.currentStyle){
		var esc_style = style.split("-");
		for (var i = 0; i < esc_style.length; i++){
			if (i !== 0){
				esc_style[i].charAt(0).toUpperCase();
			}
		}
		esc_style = esc_style.join("");
		return el.currentStyle.esc_style;
	}
	else if (window.getComputedStyle){
		return window.getComputedStyle(el, null).getPropertyValue(style);
	}
	
}

function trim_edges (string) {
	return string.replace(/^\s+|\s+$/gm,'');
}


function num_f_money (input) {
	var n = Number(input);
	return  n.toLocaleString('en-US', {minimumFractionDigits: 0}); // 10,000.00
}

function trim_non_num (input){
	return input.replace(/\D/g,'');
}


function is_num(input) {
  return !isNaN(parseFloat(input)) && isFinite(input);
}


function closest_ancestor_class (el, cls) {
	while ((el = el.parentElement) && !el.classList.contains(cls));
	return el;
}
// example:
// findAncestor(this, "modal_container");

function closest_ancestor_tag (el, tag) {
	var tag_lwr = tag.toUpperCase();
	while ((el = el.parentElement) && (el.tagName !== tag_lwr));
	return el;
}


function loop_set_timeout(i, time, function_name ){
	setTimeout(function_name, time);
}
// or:
// function doSetTimeout(i) {
//   setTimeout(function() { alert(i); }, 100);
// }
// excecute:
// for (var i = 1; i <= 2; ++i){
//   doSetTimeout(i);
// }



function base_url(){
	var get_url = window.location;
	var base_url = get_url.protocol + "//" + get_url.host + "/" + get_url.pathname.split('/')[1];
	return base_url + "/";
}




function has_class (el, className){
	return el.classList.contains(className);
}



function add_class(el, className) {
	if (el.classList) {
		el.classList.add(className);
	} else {
		el.className += ' ' + className;
	}
}

function remove_class(el, className) {
	if (el.classList) {
		el.classList.remove(className);
	} else {
		el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	}
}

function toggle_class(el, className) {

	
		if (el.classList) {
			el.classList.toggle(className);
		} else {
				var classes = el.className.split(' ');
				var existingIndex = -1;
				for (var j = classes.length; j--;) {
					if (classes[j] === className)
						existingIndex = j;
				}

				if (existingIndex >= 0)
					classes.splice(existingIndex, 1);
				else
					classes.push(className);

			el.className = classes.join(' ');
		}
 
}	
	

