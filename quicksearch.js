var i;
var content = "";

obj = inputstream[0].washrooms;

for(i=0;i < obj.length; i++){
  name = obj[i].PLACE;
  address = obj[i].ADDRESS;
  type = obj[i].TYPE;
  summertime = obj[i].SUMMER_HOURS;
  wintertime = obj[i].WINTER_HOURS;
  accessible = obj[i].WHEELCHAIR_ACCESS;
  latitude = obj[i].LATITUDE;
  longitude = obj[i].LONGITUDE;

  content+= "<div class='searchable-item card'>" + "<h3>" + name + "</h3><br><p>" + address + "</p><br><p>" + type + "</p><br><p><i class='fa fa-sun-o fa-lg' aria-hidden='true'></i> " + summertime + "<br><i class='fa fa-asterisk fa-lg' aria-hidden='true'></i> " + wintertime + "</p><br><p><i class='fa fa-wheelchair-alt fa-2x' aria-hidden='true'></i> " + accessible + "</p><br><p><a class='btn btn-success btn-md' target='_blank' href='" + "http://nominatim.openstreetmap.org/search.php?q=" + latitude + "%2C" + longitude + "&polygon=1&viewbox=" + "'>Open map <i class='fa fa-external-link' aria-hidden='true'></i></a></p>" + "</div>";
}

document.getElementById("content").innerHTML =  content

// quick search regex
var qsRegex;

// init Isotope
var grid = document.querySelector('.grid');
var iso = new Isotope( grid, {
  itemSelector: '.searchable-item',
  layoutMode: 'masonry'
});

// use value of search field to filter
var quicksearch = document.getElementsByClassName("quicksearch")[0];
quicksearch.onkeyup = function() {
  qsRegex = new RegExp( quicksearch.value, 'gi' );
  filterValue = function( itemElem ) {
    var name = itemElem.textContent;
    return name.match(qsRegex);
  }
  iso.arrange({ filter: filterValue });
}
