//var stay_time = 60;
var data_url = "https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/S2STravelTime/TYMC?%24top=30&%24format=JSON";
var price_url = "https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/ODFare/TYMC?%24top=420&%24format=JSON";
var data = $.getJSON(data_url);
var price = $.getJSON(price_url);
data.done(function(data){
    items = data[0].TravelTimes
    var index=0;
    var ID=1;
 
    $(".Station")[0].append(items[index].FromStationName.Zh_tw);
    while(index<items.length){
        if(items[index].FromStationID == "A"+ID ){
            $(".Arrow")[ID-1].append( items[index].RunTime+"s");
            $(".Station")[ID].append(items[index].ToStationName.Zh_tw);
            ID++;
        }
        else if(ID == 14 && items[index].FromStationID == "A14a"){
            $(".Arrow")[ID-1].append(items[index].RunTime+"s");
            $(".Station")[ID].append(items[index].ToStationName.Zh_tw);
            ID++;
        }
        index++;
    }
});
