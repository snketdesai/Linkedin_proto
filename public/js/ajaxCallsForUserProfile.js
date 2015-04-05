$.ajax({
    type: "GET",
    url: "/company/"+$("#userid").val(),
    crossDomain : true,
    success: function( d ) {
       $("#name").val(d.data[0].companyName);
       $("#overviewText").val(d.data[0].overview);
       $("#urlText").val(d.data[0].url);
    }
});