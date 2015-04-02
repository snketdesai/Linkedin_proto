$("#savename").hide();
$("#saveoverview").hide();
$("#saveurl").hide();
$.ajax({
    type: "GET",
    url: "/company/"+$("#companyId").val(),
    crossDomain : true,
    success: function( d ) {
       $("#name").val(d.data[0].companyName);
       $("#overviewText").val(d.data[0].overview);
       $("#urlText").val(d.data[0].url);
    }
});

$(document).ready(function(){
      
      $( "#editname" ).click(function() {
        $("#editname").hide();
        $("#savename").show();
        $("#name").prop('disabled', false);
      });

      $( "#savename" ).click(function() {
        var name = $("#name").val();
          var nameObj = {
          name : name
        };

        $.ajax({
          type: "POST",
          url: "/company/"+$("#companyId").val()+"/name",
          contentType: "application/json; charset=UTF-8",
          dataType: 'json',
          data: JSON.stringify(nameObj),
          crossDomain : true,
          success: function( d ) {
             console.log(d);
          }
        });
        $("#savename").hide();
        $("#editname").show();
        $("#name").prop('disabled', true);
      });

      $( "#editoverview" ).click(function() {
          $("#editoverview").hide();
          $("#saveoverview").show();
          $("#overviewText").prop('disabled', false);
       });
      
      $( "#saveoverview" ).click(function() {
        var overview = document.getElementById('overviewText').value;
          var overviewObj = {
          overview : overview
        };

        $.ajax({
          type: "POST",
          url: "/company/"+$("#companyId").val()+"/overview",
          contentType: "application/json; charset=UTF-8",
          dataType: 'json',
          data: JSON.stringify(overviewObj),
          crossDomain : true,
          success: function( d ) {
             console.log(d);
          }
        });
        $("#saveoverview").hide();
        $("#editoverview").show();
        $("#overviewText").prop('disabled', true);
      });
      
      $( "#editurl" ).click(function() {
          $("#editurl").hide();
          $("#saveurl").show();
          $("#urlText").prop('disabled', false);
       });
      
      $( "#saveurl" ).click(function() {
        var urlO = document.getElementById('urlText').value;
          var urlObj = {
          urlO : urlO
        };

        $.ajax({
          type: "POST",
          url: "/company/"+$("#companyId").val()+"/url",
          contentType: "application/json; charset=UTF-8",
          dataType: 'json',
          data: JSON.stringify(urlObj),
          crossDomain : true,
          success: function( d ) {
             console.log(d);
          }
        });
        $("#saveurl").hide();
        $("#editurl").show();
        $("#urlText").prop('disabled', true);
      });
      
      /*$( "#logo" ).click(function() {
        var logo = document.getElementById('logoText').value;
          var logoObj = {
          logo : logo
        };

        $.ajax({
          type: "POST",
          url: "/company/"+$("#companyId").val()+"/logo",
          contentType: "application/json; charset=UTF-8",
          dataType: 'json',
          data: JSON.stringify(logoObj),
          crossDomain : true,
          success: function( d ) {
             console.log(d);
          }
        });
      });*/
      
      $( "#postStatus" ).click(function() {
        var status = document.getElementById('statusText').value;
          var statusObj = {
          status : status
        };

        $.ajax({
          type: "POST",
          url: "/company/"+$("#companyId").val()+"/status",
          contentType: "application/json; charset=UTF-8",
          dataType: 'json',
          data: JSON.stringify(statusObj),
          crossDomain : true,
          success: function( d ) {
             console.log(d);
             $("#statusText").val("");
          }
        });
      });
});
        