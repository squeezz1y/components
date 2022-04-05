$(document).ready(function() {
	let userForm = $('#userForm');
	
	userForm.submit(function()
	 {
		 
	
		 $.ajax({
			  url: "",
			  type: 'POST',
			  data : JSON.stringify({
				name : $('#username').val(),
				email : $('#useremail').val(),
				phone : $('#userdate').val(),
				orderDescription : $('#usertext').val(),
				paymentType : $('#payment').val(),
				deliveryType : $('#delivery').val()
				
			  }),
			  dataType: 'json',
			  beforeSend: function(){
				  $('.loader').show(); 
			  },
			  success: function(result) {
					console.log(result);
			  },
			  complete: function(){
					$('.loader').hide(); 
			  }
		 });
		 return false;
	});
});


