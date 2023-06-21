(function logJSONData() {
    fetch(`https://6347eca8db76843976b5e973.mockapi.io/todos`)
        .then(p => p.json())
        .then(p => {
            makeCart(p);
        });
}());


function makeCart(data) {
    
    var delete_div = $("<div class='ps-4' />");
    var delete_all = $(`<button onclick="Delete_All()" class="btn btn-info" type="button">Delete All</button>`);
    delete_div.append(delete_all);
    $("#container").append(delete_div);
    
    $.each(data, function (index, value) {
        var mainDiv = $("<div class='row m-3 align-items-center'/>");
        var div = $("<div class='col-9 card-body rounded-3 bg-warning my-2 p-4' />");
        var h3 = $(`<h3>Title: ${value.title}</h3>`);
        var p = $(`<p class='card-text'>Description: ${value.description}</p>`);
        var div2 = $("<div class='col-1 my-2' />");
        var btn = $(`<button onclick="Delete('${value.id}')" class="btn" type="button"><img src="img/delete.png"></button>`);
     
        div.append(h3);
        div.append(p);
        div2.append(btn);
        mainDiv.append(div);
        mainDiv.append(div2);
        $(mainDiv).attr('id', `${value.id}`);
        $("#container").append(mainDiv);
      
    });

}

function Delete(id) {

    let y = document.getElementById(`${id}`);
    y.remove();
    let z = document.getElementById(`${id}`);
    z.remove();
}

function Delete_All() {

    let y = document.getElementById("container");
    y.remove();
}