/* jshint camelcase: false */
(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    get();

  }

    function get() {
        var url = 'http://data.nashville.gov/resource/frq9-a5iv.json';

        $.getJSON(url, data=>{

        var objs =  data.forEach((d,i)=>d[i]).map();
        console.log(objs);
        //   for(var i = 0; i < data.length; i++){
        //   console.log(data[i].station_number);
        // }
        // // console.log(data.station_phone);
      });
      }




















})();
