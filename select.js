var oracledb = require('oracledb');

var ORADATA = '(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=nrds02ract.nwie.net)(PORT=1521)))(CONNECT_DATA=(SERVICE_NAME=iwdb02u.nsc.net)))'

oracledb.getConnection(
  {
    user          : 'webresp',
    password      : 'fJvvGbr3',
    //connectString : "jdbc:oracle:thin:@(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=nrds02ract.nwie.net)(PORT=1521)))(CONNECT_DATA=(UR=A)(SERVICE_NAME=iwdb02u.nsc.net)))"
    connectString : '(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=nrds02ract.nwie.net)(PORT=1521)))(CONNECT_DATA=(SERVICE_NAME=iwdb02u.nsc.net)))'
  },
  function(err, connection)
  {
    console.log("in the function")
    if (err) { console.error(err); return; }
    console.log("just before the query execution")
    connection.execute(
      "SELECT username FROM users WHERE id = 8172618 ",
      function(err, result)
      {
        console.log("in the second function")
        if (err) { console.error(err); return; }
        console.log(result.rows);
      });
  });