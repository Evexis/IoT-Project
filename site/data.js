/*function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}
var urlString = "https://iot-eit.herokuapp.com/api/data?date=2018-10-25&fbclid=IwAR3S00Cp5PyCsvzQbwz3fTVD2TUi373KxsOY3bgYXUffKFEe-jj-4J-DMks";
 var   urlParams = parseURLParams(urlString);
*/

   var urlString = "https://iot-eit.herokuapp.com/api/data?fbclid=IwAR3tXW_KAH_P2-4Q5oZaVGgWYkKrQNy_jiLaUrHj4IJqE8zvM1F1ZXcTIcs";

    var data;
    fetch(urlString)
    .then(res => {data = res.json();
        return data;})
    .then((out) => {
        console.log('Output: ', out);
}).catch(err => console.error(err));

    console.log(data);

