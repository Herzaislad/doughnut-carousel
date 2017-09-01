



function Doughnut_carousel (object){


	window.addEventListener("load", initiate_doughnut_carousel);



	function initiate_doughnut_carousel (){


		var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z;





		var items_display = object.items_display;

		var stroke_width = object.stroke_width;

		var carousel_id = object.target;
		var doughnut_carousel = document.querySelector(".doughnut_carousel#" + carousel_id);


		var doughnut_carousel_width = curr_style_val(doughnut_carousel, "width");
		doughnut_carousel_width = doughnut_carousel_width.replace("px", "");
		doughnut_carousel_width = Number(doughnut_carousel_width);
		// alert (doughnut_carousel_width);





		/*------------------- drawwng doughnut ----------------------*/


		var doughnut_charts = doughnut_carousel.querySelector(".doughnut_charts");
		for (z = 0; z < items_display; z++){
			var doughnut_dom = '<div class="doughnut"> <svg viewBox="0 0 110 110" width="110" height="110"   xml:space="preserve" id="svg" xmlns="http://www.w3.org/2000/svg"> <circle class="static" cx="55" cy="55" r="40" fill="none" stroke-width="' + stroke_width + '" stroke-linecap="butt "></circle> <circle class="animate" cx="55" cy="55" r="40"  fill="none" stroke-width="' + stroke_width + '" stroke-linecap="butt "></circle> </svg> <div class="percent"></div> </div>';
			doughnut_charts.insertAdjacentHTML("beforeend", doughnut_dom);
		}

		var doughnuts = doughnut_carousel.querySelectorAll(".doughnut_charts .doughnut");
		var doughnut_width = doughnut_carousel_width / doughnuts.length;
		doughnut_width = truncate_dec(doughnut_width, 3);
		
		for (x = 0; x < doughnuts.length; x++){
			doughnuts[x].style.width = doughnut_width + "px";
		}


		/*------------------ drawing item text -------------------------*/


		var doughnut_text_stage = doughnut_carousel.querySelector(".doughnut_text_stage");

		var items = object.items;
		for (var item in items){
			var item_dom = '<div class="doughnut_text" percent="' + items[item] + '"> <div> ' + item + '</div> </div>';
			doughnut_text_stage.insertAdjacentHTML("beforeend", item_dom);
		}




		// circle_length(b, percent);






		/*---------------- text doughnut ----------------------------*/
		

		var doughnut_texts = doughnut_carousel.querySelectorAll(".doughnut_carousel .doughnut_text");

		for (z = 0; z < items_display; z++){
			var percent = doughnut_texts[z].getAttribute("percent");
			circle_length(z, percent);
		}


		var item_width = doughnut_carousel_width / items_display;
		item_width = truncate_dec(item_width, 3);
		for (a = 0; a < doughnut_texts.length; a++){
			doughnut_texts[a].style.width = item_width + "px"; 
		} 

		doughnut_text_stage = doughnut_carousel.querySelector(".doughnut_text_stage");
		var doughnut_text_stage_width = (doughnut_texts.length * item_width);
		doughnut_text_stage.style.width = doughnut_text_stage_width + "px";  



		var leftest_text_pos = curr_style_val(doughnut_text_stage, "translateX");
		leftest_text_pos = leftest_text_pos.replace("px", "");
		leftest_text_pos = Number(leftest_text_pos);

		var btn_prev = doughnut_carousel.querySelector(".nav .prev");
		

		/*------------------- prev button -------------------------*/
		btn_prev.onclick = function(){
			leftest_text_pos = leftest_text_pos + item_width;
			leftest_text_pos = truncate_dec(leftest_text_pos, 3);

			if (truncate_dec(leftest_text_pos, 0) === 0){
				leftest_text_pos = 0;
			}
			if (leftest_text_pos > 10){
				// alert ('lebih');
				leftest_text_pos = - doughnut_text_stage_width + doughnut_carousel_width;

			}
			doughnut_carousel.setAttribute("child_leftest_pos", leftest_text_pos);
			doughnut_text_stage.style.transform = 'translateX(' + leftest_text_pos + 'px)';

			append_active_text ();


		};



		/*------------------ nex button -----------------------------*/

		var btn_next = doughnut_carousel.querySelector(".nav .next");

		btn_next.onclick = function(){
			doughnut_carousel.setAttribute("item_width", item_width);

			leftest_text_pos = leftest_text_pos - item_width; 
			leftest_text_pos = truncate_dec(leftest_text_pos, 3);



			if (leftest_text_pos < ( - doughnut_text_stage_width + doughnut_carousel_width )){
				leftest_text_pos = 0;

			}



			doughnut_text_stage.style.transform = 'translateX(' + leftest_text_pos + 'px)';

			doughnut_carousel.setAttribute("child_leftest_pos", leftest_text_pos);

			append_active_text ();

			


		};



		function append_active_text (){

			doughnut_texts = doughnut_carousel.querySelectorAll(".doughnut_carousel .doughnut_text");
			var doughnut_charts = doughnut_carousel.querySelectorAll(".doughnut_charts .doughnut");
			
			
			for (a = 0; a < doughnut_texts.length; a++){
				doughnut_text_width = doughnut_texts[a].style.width;
				doughnut_text_width = doughnut_text_width.replace("px", "");
				doughnut_text_width = Number(doughnut_text_width);

				doughnut_text_center_pos = doughnut_texts[a].offsetLeft + (doughnut_text_width / 2);
				var abs_center_text_pos = doughnut_text_center_pos + leftest_text_pos; 
				doughnut_texts[a].setAttribute("centerOffset", abs_center_text_pos);
				if (abs_center_text_pos >= 0 && abs_center_text_pos <= doughnut_carousel_width){
					add_class(doughnut_texts[a], "active");
				} else {
					remove_class(doughnut_texts[a], "active");
				}

			}


			var active_texts = doughnut_carousel.querySelectorAll(".doughnut_text.active");
			for (b = 0; b < active_texts.length; b++){
				var percent = active_texts[b].getAttribute("percent");
				doughnut_charts[b].querySelector(".percent").textContent = percent + "%";
				circle_length(b, percent);
			}


		}



		function circle_length(circle_nth, perc) {
	
			var circle = doughnut_carousel.querySelectorAll('circle.animate');
			var the_circle = circle[circle_nth];
			var radius = the_circle.getAttribute("r");
			var circle_length = 2 * Math.PI * radius;
			
			var value = perc;
			value = Number(value);

			var perc_circle_length = circle_length * value / 100;
			var doughnut_length = circle_length - perc_circle_length;
			the_circle.style.strokeDashoffset = doughnut_length;
			the_circle.setAttribute("percent", percent);			

			var doughnut = closest_ancestor_class(the_circle, "doughnut");
			var circle_percent_text = doughnut.querySelector(".percent");
			circle_percent_text.textContent = perc + "%";


			
			// demo.update(value);
			


		}




		

	}

}

