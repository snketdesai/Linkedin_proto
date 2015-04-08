

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
       
       var length_of_company = d.Item.company_followed.SS.length;
       
       for(var i=0;i<length_of_company;i++)
	   {
	   		var html = '<li class="list-group-item">'+d.Item.company_followed.SS[i]+'</li>';
	   		$('#listForCompany').append($(html));
	   }
       
       //$("#overviewText").val(d.data[0].overview);
       //$("#urlText").val(d.data[0].url);
    }
});

$(document).ready(function(){
	$('button.followButton').live('click', function(e){
    e.preventDefault();
    $button = $(this);
    if($button.hasClass('following')){
        
        //$.ajax(); Do Unfollow
    	$button.css('color','black');
        $button.removeClass('following');
        $button.removeClass('unfollow');
        $button.text('Follow');
    } else {
        
        // $.ajax(); Do Follow
        $button.css('color','green');
        $button.addClass('following');
        $button.text('Following');
    }
});

$('button.followButton').hover(function(){
     $button = $(this);
    if($button.hasClass('following')){
        $button.addClass('unfollow');
        $button.text('Unfollow');
    }
}, function(){
    if($button.hasClass('following')){
        $button.removeClass('unfollow');
        $button.text('Following');
    }
});
})
