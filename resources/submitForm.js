var requestNames = new Array();
var requestTypes = new Array();
var requestValues = new Array();
var responseNames = new Array();
var responseTypes = new Array();
var responseValues = new Array();
var tableNames = new Array();
var tableDtos = new Array();
var tableDatas = new Array();

$(document).ready(function () {
  //const apiUrl = "";
  $("#submit").click(function () {
    let data = {
      testName: $("#test_name").val(),
      fileName: $("#file_name").val(),
      methodName: $("#method_name").val(),
      dbName: $("#db_name").val(),
    };

    var requestCount = requestIterator();
    var responseCount = responseIterator();
    var tableCount = tableIterator();

    for (var i = 0; i < requestCount; i++) {
      data["requestName" + (i + 1)] = requestNames[i];
      data["requestType" + (i + 1)] = requestTypes[i];
      data["requestValue" + (i + 1)] = requestValues[i];
    }
    for (var i = 0; i < responseCount; i++) {
      data["responseName" + (i + 1)] = responseNames[i];
      data["responseType" + (i + 1)] = responseTypes[i];
      data["responseValue" + (i + 1)] = responseValues[i];
    }
    for (var i = 0; i < tableCount; i++) {
      data["tableName" + (i + 1)] = tableNames[i];
      data["tableDto" + (i + 1)] = tableDtos[i];
      data["tableData" + (i + 1)] = tableDatas[i];
    }
    console.log(data);

    // $.get(apiUrl, data, (response, error) => {
    //   if (response) {
    //     console.log(response);
    //   } else {
    //     console.log(error);
    //   }
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

function requestIterator() {
  var count = 1;
  while ($("#req_name" + count)[0] !== undefined) {
    requestNames.push($("#req_name" + count).val());
    requestTypes.push($("#req_type" + count).val());
    requestValues.push($("textarea#req_value" + count).val());
    count++;
  }
  return count - 1;
}

function responseIterator() {
  var count = 1;
  while ($("#res_name" + count)[0] !== undefined) {
    responseNames.push($("#res_name" + count).val());
    responseTypes.push($("#res_type" + count).val());
    responseValues.push($("textarea#res_value" + count).val());
    count++;
  }
  return count - 1;
}

function tableIterator() {
  var count = 1;
  while ($("#table_name" + count)[0] !== undefined) {
    tableNames.push($("#table_name" + count).val());
    tableDtos.push($("#table_dto" + count).val());
    tableDatas.push($("textarea#table_data" + count).val());
    count++;
  }
  return count - 1;
}
