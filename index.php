<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script src="js/helper.js"></script>	
	<script src="js/countUp.js"></script>

	<script src="js/pie-carousel.js"></script>

	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/pie-carousel.css">

</head>
<body>
	

	
<div class="card">
	
	<h1>My Skillset</h1>

	<div class="pie_carousel" id="skill_pie">

		<div class="pie_charts">
			
		</div>
		<div class="pie_stage_outer">
			<div class="pie_text_stage">
			</div>
		</div>
		<div class="nav">
			<div class="btns">
				<button class="prev"></button>
				<button class="next"></button>
			</div>
		</div>
	</div>
</div>

	<script>
		var skill_pie = new Pie_carousel({
			target: 'skill_pie',
			stroke_width: 17,
			items_display: 4,
			items: {
				'English': 84,
				'UX / UI Design': 87,
				'Illustration': 88,
				'Adobe Illustrator': 85,
				'Adobe Photoshop': 84,
				'Adobe Indesign': 80, 
				'HTML': 93,
				'CSS': 93,
				'Javascript': 86,
				'Jquery': 70,
				'PHP': 50,
				'SQL': 55,
				'Codeigniter': 70,

				
			}

		});
	</script>


</body>
</html>