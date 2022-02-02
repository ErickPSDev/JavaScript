//Firstly we call the API
$(document).ready(function () { //Ready makes the elements, shows in the screen after 100% loaded, making a clean loading page.
    let settings = {
        url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=mxn',
        method: "GET",
        timeout: '0',
    };

    var i = 0;

    $.ajax(settings).done(function (api_response) {
        api_response.forEach(element => {
           // console.log(element); // este es praa proabar respuesta

            $("#values").append(
                $("<tr/>").append(
                    $("<td/>").append(
                        $("<img/>").attr("src", `${element.image}`)
                    ),
                    $("<td/>").text(element.id),
                    $("<td/>").text(element.symbol),
                    $("<td/>").text(element.current_price),
                    $("<td/>").text(element.high_24h),
                    $("<td/>").text(element.low_24h),
                    $("<td/>").text(element.last_updated)
                    )
                );
        });
    });
});
