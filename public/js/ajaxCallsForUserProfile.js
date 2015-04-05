$("#saveBio").hide();
$("#saveStatus").hide();
$('#saveCollege').hide();
$('#saveSkill').hide();
$('#saveCertification').hide();
//$("#saveurl").hide();

$.ajax({
    type: "GET",
    url: "/profile/"+$("#userid").val(),
    crossDomain : true,
    contentType: "application/json; charset=UTF-8",
    dataType: 'json',
    success: function( d ) {
       //var d = JSON.stringify(d);
       //alert(d);
       $("#bio").val(d.Item.bio.S);
       $("#status").val(d.Item.status.S);
       
       $("#user1").html(d.Item.user_followed.SS[0]);
       $("#user2").html(d.Item.user_followed.SS[1]);
       $("#user3").html(d.Item.user_followed.SS[2]);
       
       $("#college").val(d.Item.college.SS[0]);
       
       $("#skill").val(d.Item.skill.SS[0]);
       
       $("#certification").val(d.Item.certification.SS[0]);
       //$("#overviewText").val(d.data[0].overview);
       //$("#urlText").val(d.data[0].url);
    }
});

$(document).ready(function(){
	
		 $( "#editBio" ).click(function() {
		        $("#editBio").hide();
		        $("#saveBio").show();
		        $("#bio").prop('disabled', false);
		      });

		      $( "#saveBio" ).click(function() {
		        var bio = $("#bio").val();
		          
		        var bioObj = {
		        		bio : bio
		        }
		        $.ajax({
		          type: "POST",
		          url: "/bio/"+$("#userid").val(),
		          contentType: "application/json; charset=UTF-8",
		          dataType: 'json',
		          data: JSON.stringify(bioObj),
		          crossDomain : true,
		          success: function( d ) {
		             console.log(d);
		          }
		        });
		        $("#saveBio").hide();
		        $("#editBio").show();
		        $("#bio").prop('disabled', true);
		      });
		      
		    //-------------edit bio ends ----------------------------------
		      
		      $( "#editStatus" ).click(function() {
			        $("#editStatus").hide();
			        $("#saveStatus").show();
			        $("#status").prop('disabled', false);
			      });

			      $( "#saveStatus" ).click(function() {
			        var status = $("#status").val();
			          
			        var statusObj = {
			        		status : status
			        }
			        $.ajax({
			          type: "POST",
			          url: "/status/"+$("#userid").val(),
			          contentType: "application/json; charset=UTF-8",
			          dataType: 'json',
			          data: JSON.stringify(statusObj),
			          crossDomain : true,
			          success: function( d ) {
			             console.log(d);
			          }
			        });
			        $("#saveStatus").hide();
			        $("#editStatus").show();
			        $("#status").prop('disabled', true);
			      });
			     
			      //-------------edit status ends ----------------------------------
			      
			      $( "#addCollege" ).click(function() {
				        $("#addCollege").hide();
				        $("#saveCollege").show();
				        $("#college").prop('disabled', false);
				      });

				      $( "#saveCollege" ).click(function() {
				        var college = $("#college").val();
				        var university = new Array();
				        university.push(college);
				        
				        var collegeObj = {
				        		college : university
				        };
				        $.ajax({
				          type: "POST",
				          url: "/college/"+$("#userid").val(),
				          contentType: "application/json; charset=UTF-8",
				          dataType: 'json',
				          data: JSON.stringify(collegeObj),
				          crossDomain : true,
				          success: function( d ) {
				             console.log(d);
				          }
				        });
				        $("#saveCollege").hide();
				        $("#addCollege").show();
				        $("#college").prop('disabled', true);
				      });
				      
				      //---------------------add college ends-----------------------
				      
				      
				      $( "#addSkill" ).click(function() {
					        $("#addSkill").hide();
					        $("#saveSkill").show();
					        $("#skill").prop('disabled', false);
					      });

					      $( "#saveSkill" ).click(function() {
					        var skill = $("#skill").val();
					        var skills = new Array();
					        skills.push(skill);
					        
					        var skillObj = {
					        		skill : skills
					        };
					        $.ajax({
					          type: "POST",
					          url: "/skill/"+$("#userid").val(),
					          contentType: "application/json; charset=UTF-8",
					          dataType: 'json',
					          data: JSON.stringify(skillObj),
					          crossDomain : true,
					          success: function( d ) {
					             console.log(d);
					          }
					        });
					        $("#saveSkill").hide();
					        $("#addSkill").show();
					        $("#skill").prop('disabled', true);
					      });
				      
			      	//---------------skill ends here---------------------------------
					      
					      $( "#addCertification" ).click(function() {
						        $("#addCertification").hide();
						        $("#saveCertification").show();
						        $("#certification").prop('disabled', false);
						      });

						      $( "#saveCertification" ).click(function() {
						        var certi = $("#certification").val();
						        var certification = new Array();
						        certification.push(certi);
						        
						        var CertificationObj = {
						        		certification : certification
						        };
						        $.ajax({
						          type: "POST",
						          url: "/certification/"+$("#userid").val(),
						          contentType: "application/json; charset=UTF-8",
						          dataType: 'json',
						          data: JSON.stringify(CertificationObj),
						          crossDomain : true,
						          success: function( d ) {
						             console.log(d);
						          }
						        });
						        $("#saveCertification").hide();
						        $("#addCertification").show();
						        $("#certification").prop('disabled', true);
						      });
})