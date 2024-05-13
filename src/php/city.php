<?php 

	header('Access-Control-Allow-Origin: *');

	
	$conn = new mysqli("localhost","root","","data-visualization-dashboard");
	
	if(mysqli_connect_error()){
		echo mysqli_connect_error();
		exit();
	}
	else{



		$query = "SELECT DISTINCT city,intensity FROM data_visualization WHERE  city != '' AND intensity!=72  ";
        $result = mysqli_query($conn, $query);

        $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
		
		
		if($data){
			echo json_encode($data);
		}
		else{
			echo "Error!";
		}
		
		
		
		
		$conn->close();
	}

?>
