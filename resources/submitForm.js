$(document).ready(function () {
  //const url = "";
  $("#submit").click(function () {
    let data = {
      testName: $("#test_name").val(),
      fileName: $("#file_name").val(),
      methodName: $("#method_name").val(),
      // requestName1: $("#req_name1").val(),
      // requestType1: $("#req_type1").val(),
      // requestValue1: $("#req_value1").val(),
      // responseName1: $("#resp_name1").val(),
      // responseType1: $("#resp_type1").val(),
      // responseValue1: $("#resp_value1").val(),
      dbName: $("#db_name").val(),
      //tableName1: $("#table_name1").val(),
      //tableDto1: $("#table_dto1").val(),
      //tableData1: $("#table_data1").val(),
    };
    console.log(data);

    // $.get(url, data, (response, error) => {
    //   if (response) {
    //     console.log(response);
    //   } else console.log(error);
    // });
  });
});

$(document).ready(function () {
  var requestCounter = 1;
  $("#addInputParameter").click(function () {
    var requestDiv = $(document.createElement("div"))
      .attr("id", "req_name" + requestCounter)
      .attr("id", "req_type" + requestCounter)
      .attr("id", "req_value" + requestCounter);
    requestDiv
      .after()
      .html(
        "<label class='label_field'> Request " +
          requestCounter +
          " name </label>" +
          '<input class="input_field" type="text" name="req_name' +
          requestCounter +
          '" id="req_name' +
          requestCounter +
          '" value="" ><label class="label_field"> Request ' +
          requestCounter +
          " type </label>" +
          '<input type="text" class="input_field" name="req_type' +
          requestCounter +
          '" id="req_type' +
          requestCounter +
          '" value="" ><label class="label_field"> Request ' +
          requestCounter +
          " value </label>" +
          '<textarea class="input_field" name="req_value' +
          requestCounter +
          '" id="req_value' +
          requestCounter +
          '" value="" rows="4" cols="50" ></textarea>'
      );
    requestDiv.appendTo("#RequestGroup");
    requestCounter++;
  });
});

$(document).ready(function () {
  var responseCounter = 1;
  $("#addChecks").click(function () {
    var responseDiv = $(document.createElement("div"))
      .attr("id", "res_name" + responseCounter)
      .attr("id", "res_type" + responseCounter)
      .attr("id", "res_value" + responseCounter);
    responseDiv
      .after()
      .html(
        "<label class='label_field'> Response " +
          responseCounter +
          " name </label>" +
          '<input class="input_field" type="text" name="res_name' +
          responseCounter +
          '" id="res_name' +
          responseCounter +
          '" value="" ><label class="label_field"> Response ' +
          responseCounter +
          " type </label>" +
          '<input class="input_field" type="text" name="res_type' +
          responseCounter +
          '" id="res_type' +
          responseCounter +
          '" value="" ><label class="label_field"> Response ' +
          responseCounter +
          " value </label>" +
          '<textarea class="input_field" name="res_value' +
          responseCounter +
          '" id="res_value' +
          responseCounter +
          '" value="" rows="4" cols="50" ></textarea>'
      );
    responseDiv.appendTo("#ResponseGroup");
    responseCounter++;
  });
});

$(document).ready(function () {
  var tableCounter = 1;
  $("#addData").click(function () {
    var tableDiv = $(document.createElement("div"))
      .attr("id", "table_name" + tableCounter)
      .attr("id", "table_dto" + tableCounter)
      .attr("id", "table_data" + tableCounter);
    tableDiv
      .after()
      .html(
        "<label class='label_field'> Table " +
          tableCounter +
          " name </label>" +
          '<input class="input_field" type="text" name="table_name' +
          tableCounter +
          '" id="table_name' +
          tableCounter +
          '" value="" ><label class="label_field"> Table ' +
          tableCounter +
          " Dto </label>" +
          '<input class="input_field" type="text" name="table_dto' +
          tableCounter +
          '" id="table_dto' +
          tableCounter +
          '" value="" ><label class="label_field"> Table ' +
          tableCounter +
          " data </label>" +
          '<textarea class="input_field"name="table_data' +
          tableCounter +
          '" id="table_data' +
          tableCounter +
          '" value="" rows="4" cols="50" ></textarea>'
      );
    tableDiv.appendTo("#TableGroup");
    tableCounter++;
  });
});
