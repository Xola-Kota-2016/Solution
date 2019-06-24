document.getElementById("form").onsubmit = function() {Confirm()};

		function Confirm(){
			var a = document.getElementById('p1').value;
			var b = document.getElementById('p2').value;
			if (a===b){
			alert("Success...");
			var array = new Array();

			array[0] = document.getElementById("name").value;
			array[1] = document.getElementById("sname").value;
			array[2] = document.getElementById("age").value;
			array[3] = document.getElementById("email").value;
			array[4] = document.getElementById('p1').value;
			array[5] = document.getElementById('p2').value;
			}else{
				alert("The passwords do not match :(")
			}
		


		};
