var size = 4;

var score = 0;

function getRandom() {
  return Math.floor(Math.random() * (size));
}

function getId() {
  var i = getRandom();
  var j = getRandom();
  return i.toString() + " " + j.toString();
}

function getcolor(val) {

  var color = "#ffffff";
  switch (val) {
    case 2:
      color = "#F6CED8";
      break;
    case 4:
      color = "#F7BE81";
      break;
    case 8:
      color = "#F3F781";
      break;
    case 16:
      color = "#BEF781";
      break;
    case 32:
      color = "#81F7D8";
      break;
    case 64:
      color = "#58D3F7";
      break;
    case 128:
      color = "#FA58F4";
      break;
    case 256:
      color = "#A901DB";
      break;
    case 512:
      color = "#01DF3A";
      break;
    case 1024:
      color = "#D7DF01";
      break;
    case 2048:
      color = "#FF8C00";
      break;
    default:
      color = "#ffffff";
  }
  return color;
}

function openform() {
  document.getElementById("myForm").style.display = "block";
}

function getsize() {
  document.getElementById("myForm").style.display = "none";
  size = document.querySelector('input[name="dimensions"]:checked').value;
  load_grid();
}

function load_grid() {
  var html = '<table border = "1">';

  for (var row = 0; row < size; row++) {
    html += '<tr>';
    for (var col = 0; col < size; col++) {
      var cellid = row.toString() + " " + col.toString();
      html += '<td align="center" valign="center" color="ffffff" height="40" width="40" id="' + cellid + '"></td>';
    }
    html += '</tr>';
  }
  html += '</table>';
  document.getElementById("grid").innerHTML = html;
  cell1 = getId();
  cell2 = getId();
  while (cell1 == cell2) {
    cell2 = getId();
  }

  document.getElementById(cell1).innerHTML = "2";
  document.getElementById(cell2).innerHTML = "2";
  document.getElementById(cell1).style.backgroundColor = getcolor(2);
  document.getElementById(cell2).style.backgroundColor = getcolor(2);


}

function swap(id1, id2) {
  var str = document.getElementById(id1).innerHTML;
  document.getElementById(id1).innerHTML = document.getElementById(id2).innerHTML;
  document.getElementById(id2).innerHTML = str;

  var color = document.getElementById(id1).style.backgroundColor;
  document.getElementById(id1).style.backgroundColor = document.getElementById(id2).style.backgroundColor;
  document.getElementById(id2).style.backgroundColor = color;
}

function left() {
  var row, col;
  for (row = 0; row < size; ++row) {
    //  alert("rowloop"+row.toString());
    var hasjoined = false;

    for (col = 1; col < size; ++col) {
      //alert("loop"+(10*row+col).toString());
      var id = row.toString() + " " + col.toString();
      //alert(col);
      if (document.getElementById(id).innerHTML == "") continue;
      var idprev = id;
      var i = col - 1;
      for (i = col - 1; i >= 0; --i) {
        if (document.getElementById(row.toString() + " " + i.toString()).innerHTML == "")
          idprev = row.toString() + " " + i.toString();
        else break;
      }
      //  alert(row*10 +col);

      if (id != idprev)
        swap(id, idprev);

      //alert(row*10 +col+100);

      id = idprev;
      idprev = row.toString() + " " + i.toString();
      //alert(row*10 +col+1000);
      //alert(document.getElementById(id).innerHTML);
      if ((document.getElementById(id).innerHTML == document.getElementById(idprev).innerHTML) && hasjoined == false) {
        //alert("sex");
        document.getElementById(id).innerHTML = "";
        document.getElementById(id).style.backgroundColor = getcolor(0);
        var num = parseInt(document.getElementById(idprev).innerHTML);
        //alert(num);
        document.getElementById(idprev).innerHTML = (2 * num).toString();
        //alert("sex3");
        document.getElementById(idprev).style.backgroundColor = getcolor(2 * num);
        //alert("sex4");
        hasjoined = true;
      }
    }
    //  alert(row);
  }
  //alert(row * 10 + col);
}

///////////////////////////
document.onkeydown = function(e) {
  //alert(e);
  e.preventDefault();
  switch (e.keyCode) {
    case 37:
      left();
      break;
      /*case 38: right();break;
      case 39: up();break;
      case 40; down();break;*/
  }
}

///////////////////////////
