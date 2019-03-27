
$('button').on('click', function(){
    console.log("i've been clicked")

    var data= $(this).attr("userdata")
    var APIKey = "LpAengxKE1tShOFmfwict82DGB9VIwCt";
    var queryURL ="https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=" + APIKey;
    
    $.ajax({
        url: queryURL,
        method: 'GET',
    }).then(function(response){
        console.log(response);
    })
})
