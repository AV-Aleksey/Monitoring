// В этом файле производится настройка термометра и запрос данных на сервер

$(function(){
    $("#gauge").dxCircularGauge({
        scale: {
            startValue: -50,
            endValue: 50,
            tickInterval: 10,
            label: {
                customizeText: function (arg) {
                    return arg.valueText + "  C";
                }
            }
        },
        rangeContainer: {
            ranges: [
                { startValue: -50, endValue: -30, color: "#187ad0" },
                { startValue: -30, endValue: 0, color: "#16C0D0" },
                { startValue: 0, endValue: 30, color: "#eb5c49" },
                { startValue: 30, endValue: 50, color: "#910007" }
            ]
        },
        subvalueIndicator: {
            type: "textcloud",
            text: {
                format: {
                    precision: 1
                },
                customizeText: function (arg) {
                    return arg.valueText + " C";
                }
            }
        },
        "export": {
            enabled: true
        },
        title: {
            //text: "sadasdas",
            font: { size: 28 }
        },

        value: 0,
        subvalues: [0]
    });

})

get_content();
function get_content() {
    $.ajax({
        type: "POST",
        url: "functions.php",
        dataType: "json",
        success: function (data) {
            $('.tin').text(data.tin);
            $('.tout').text(data.tout);
            if(data.status == 1) {
                $('.status').removeClass('on');
                $('.status').removeClass('off');
                $('.status').addClass('on');
                $('.status').text("ON");

            } else {
                $('.status').removeClass('on');
                $('.status').removeClass('off');
                $('.status').addClass('off');
                $('.status').text("OFF");
            }
            var result = data.tin;
            $(function() {
                $("#gauge").dxCircularGauge({
                    value: result,
                    subvalues: [result]
                })
            })
            var d = new Date();
            console.log('Последнее обновление в' + d);
        }
    })
}

setInterval(get_content, 5000); //В данном поле можете менять частоту автообновления данных (ms)

