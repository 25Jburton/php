fetch('https://api.openf1.org/v1/drivers?driver_number=1')
    .then(response => response.json())
    .then((jsonContent) => {
        //console.log(jsonContent);
        let telemetry = jsonContent;
        telemetry.forEach(record => {
            const recordArray = $.map(record, function(value, key) {
                return { key: key, value: value };
              });
            //   console.log(recordArray);
              recordArray.forEach(element => {
                console.log(element);
                $('#telemetryDump').append(`<div>`+element.key+` `+element.value+`</div>`);
            });
        });
        
        // Use the telemetry returned to call functions that update our charts and views
    });