
Template.skills.rendered = function(t){

    var chart = c3.generate({
        bindto: '#chart',
        data: {
            columns: [
                ['HTML', 30],
                ['CSS', 50],
                ['JS', 80]
            ],
            type: 'bar'
        },
        bar: {
            width: {
                ratio: 0.5
            }
        },
        axis: {
            y:{
                label: {
                    text: 'Y Label',
                    position: 'outer-middle'
                },
                tick: {
                    format: d3.format("$,") // ADD
                }

            }
        }
    });
};