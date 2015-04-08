

$.ajax({
    type: "GET",
    url: "/profile/002",
    crossDomain : true,
    contentType: "application/json; charset=UTF-8",
    dataType: 'json',
    success: function(d) {
       //var d = JSON.stringify(d);
       //alert(d);
       $("#bio").val(d.Item.bio.S);
       $("#status").val(d.Item.status.S);
             
       var length_of_user_followed = d.Item.user_followed.SS.length;
       
       for(var i=0;i<length_of_user_followed;i++)
    	   {
    	   		var html = '<li class="list-group-item">'+d.Item.user_followed.SS[i]+'</li>';
    	   		$('#listForUser').append($(html));
    	   }
       
       var length_of_college = d.Item.college.SS.length;
       
       for(var i=0;i<length_of_college;i++)
	   {
	   		var html = '<li class="list-group-item">'+d.Item.college.SS[i]+'</li>';
	   		$('#listForCollege').append($(html));
	   }
       
       var length_of_skill = d.Item.skill.SS.length;
       
       for(var i=0;i<length_of_skill;i++)
	   {
	   		var html = '<li class="list-group-item">'+d.Item.skill.SS[i]+'</li>';
	   		$('#listForSkill').append($(html));
	   }
       
       var length_of_certificate = d.Item.certification.SS.length;
       
       for(var i=0;i<length_of_certificate;i++)
	   {
	   		var html = '<li class="list-group-item">'+d.Item.certification.SS[i]+'</li>';
	   		$('#listForCertificate').append($(html));
	   }
       $("#college").val(d.Item.college.SS[0]);
       
       $("#skill").val(d.Item.skill.SS[0]);
       
       $("#certification").val(d.Item.certification.SS[0]);
       //$("#overviewText").val(d.data[0].overview);
       //$("#urlText").val(d.data[0].url);
    }
});

