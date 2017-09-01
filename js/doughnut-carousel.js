



function Pie_carousel (object){


	window.addEventListener("load", initiate_pie_carousel);



	function initiate_pie_carousel (){


		var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z;





		var items_display = object.items_display;

		var stroke_width = object.stroke_width;

		var carousel_id = object.target;
		var pie_carousel = document.querySelector(".pie_carousel#" + carousel_id);


		var pie_carousel_width = curr_style_val(pie_carousel, "width");
		pie_carousel_width = pie_carousel_width.replace("px", "");
		pie_carousel_width = Number(pie_carousel_width);
		// alert (pie_carousel_width);





		/*------------------- drawwng pie ----------------------*/


		var pie_charts = pie_carousel.querySelector(".pie_charts");
		for (z = 0; z < items_display; z++){
			var pie_dom = '<div class="pie"> <svg viewBox="0 0 110 110" width="110" height="110"   xml:space="preserve" id="svg" xmlns="http://www.w3.org/2000/svg"> <circle class="static" cx="55" cy="55" r="40" fill="none" stroke-width="' + stroke_width + '" stroke-linecap="butt "></circle> <circle class="animate" cx="55" cy="55" r="40"  fill="none" stroke-width="' + stroke_width + '" stroke-linecap="butt "></circle> </svg> <div class="percent"></div> </div>';
			pie_charts.insertAdjacentHTML("beforeend", pie_dom);
		}

		var pies = pie_carousel.querySelectorAll(".pie_charts .pie");
		var pie_width = pie_carousel_width / pies.length;
		pie_width = truncate_dec(pie_width, 3);
		
		for (x = 0; x < pies.length; x++){
			pies[x].style.width = pie_width + "px";
		}


		/*------------------ drawing item text -------------------------*/


		var pie_text_stage = pie_carousel.querySelector(".pie_text_stage");

		var items = object.items;
		for (var item in items){
			var item_dom = '<div class="pie_text" percent="' + items[item] + '"> <div> ' + item + '</div> </div>';
			pie_text_stage.insertAdjacentHTML("beforeend", item_dom);
		}




		// circle_length(b, percent);






		/*---------------- text pie ----------------------------*/
		

		var pie_texts = pie_carousel.querySelectorAll(".pie_carousel .pie_text");

		for (z = 0; z < items_display; z++){
			var percent = pie_texts[z].getAttribute("percent");
			circle_length(z, percent);
		}


		var item_width = pie_carousel_width / items_display;
		item_width = truncate_dec(item_width, 3);
		for (a = 0; a < pie_texts.length; a++){
			pie_texts[a].style.width = item_width + "px"; 
		} 

		pie_text_stage = pie_carousel.querySelector(".pie_text_stage");
		var pie_text_stage_width = (pie_texts.length * item_width);
		pie_text_stage.style.width = pie_text_stage_width + "px";  



		var leftest_text_pos = curr_style_val(pie_text_stage, "translateX");
		leftest_text_pos = leftest_text_pos.replace("px", "");
		leftest_text_pos = Number(leftest_text_pos);

		var btn_prev = pie_carousel.querySelector(".nav .prev");
		

		/*------------------- prev button -------------------------*/
		btn_prev.onclick = function(){
			leftest_text_pos = leftest_text_pos + item_width;
			leftest_text_pos = truncate_dec(leftest_text_pos, 3);

			if (truncate_dec(leftest_text_pos, 0) === 0){
				leftest_text_pos = 0;
			}
			if (leftest_text_pos > 10){
				// alert ('lebih');
				leftest_text_pos = - pie_text_stage_width + pie_carousel_width;

			}
			pie_carousel.setAttribute("child_leftest_pos", leftest_text_pos);
			pie_text_stage.style.transform = 'translateX(' + leftest_text_pos + 'px)';

			append_active_text ();


		};



		/*------------------ nex button -----------------------------*/

		var btn_next = pie_carousel.querySelector(".nav .next");

		btn_next.onclick = function(){
			pie_carousel.setAttribute("item_width", item_width);

			leftest_text_pos = leftest_text_pos - item_width; 
			leftest_text_pos = truncate_dec(leftest_text_pos, 3);



			if (leftest_text_pos < ( - pie_text_stage_width + pie_carousel_width )){
				leftest_text_pos = 0;

			}



			pie_text_stage.style.transform = 'translateX(' + leftest_text_pos + 'px)';

			pie_carousel.setAttribute("child_leftest_pos", leftest_text_pos);

			append_active_text ();

			


		};



		function append_active_text (){

			pie_texts = pie_carousel.querySelectorAll(".pie_carousel .pie_text");
			var pie_charts = pie_carousel.querySelectorAll(".pie_charts .pie");
			
			
			for (a = 0; a < pie_texts.length; a++){
				pie_text_width = pie_texts[a].style.width;
				pie_text_width = pie_text_width.replace("px", "");
				pie_text_width = Number(pie_text_width);

				pie_text_center_pos = pie_texts[a].offsetLeft + (pie_text_width / 2);
				var abs_center_text_pos = pie_text_center_pos + leftest_text_pos; 
				pie_texts[a].setAttribute("centerOffset", abs_center_text_pos);
				if (abs_center_text_pos >= 0 && abs_center_text_pos <= pie_carousel_width){
					add_class(pie_texts[a], "active");
				} else {
					remove_class(pie_texts[a], "active");
				}

			}


			var active_texts = pie_carousel.querySelectorAll(".pie_text.active");
			for (b = 0; b < active_texts.length; b++){
				var percent = active_texts[b].getAttribute("percent");
				pie_charts[b].querySelector(".percent").textContent = percent + "%";
				circle_length(b, percent);
			}


		}



		function circle_length(circle_nth, perc) {
	
			var circle = pie_carousel.querySelectorAll('circle.animate');
			var the_circle = circle[circle_nth];
			var radius = the_circle.getAttribute("r");
			var circle_length = 2 * Math.PI * radius;
			
			var value = perc;
			value = Number(value);

			var perc_circle_length = circle_length * value / 100;
			var pie_length = circle_length - perc_circle_length;
			the_circle.style.strokeDashoffset = pie_length;
			the_circle.setAttribute("percent", percent);			

			var pie = closest_ancestor_class(the_circle, "pie");
			var circle_percent_text = pie.querySelector(".percent");
			circle_percent_text.textContent = perc + "%";


			
			// demo.update(value);
			


		}




		

	}

}

