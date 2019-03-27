
('button').on('click', function(){

    var APIKey = "eafe8765-7839-4cdd-828a-a72feb2a03d7";
    var queryURL ="https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=" + APIKey;
    
    $.ajax({
        url: queryURL,
        method: 'GET',
    }).then(function(response){
        console.log("getting response" + response);
    })
})
