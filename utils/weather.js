var str="http://www.w.com/?markerCount=37&lon0=-122.33&lat0=47.61&char0=61&lon1=-119.77&lat1=36.75&char1=78&lon2=-115.14&lat2=36.17&char2=71&lon3=-116.2&lat3=43.61&char3=61&lon4=-111.89&lat4=40.76&char4=55&lon5=-112.07&lat5=33.45&char5=81&lon6=-108.5&lat6=45.78&char6=61&lon7=-104.82&lat7=41.14&char7=50&lon8=-104.98&lat8=39.74&char8=48&lon9=-106.65&lat9=35.08&char9=52&lon10=-100.78&lat10=46.81&char10=56&lon11=-103.23&lat11=44.08&char11=59&lon12=-95.94&lat12=41.26&char12=67&lon13=-94.58&lat13=39.1&char13=69&lon14=-97.52&lat14=35.47&char14=64&lon15=-96.81&lat15=32.78&char15=60&lon16=-95.36&lat16=29.76&char16=67&lon17=-93.26&lat17=44.98&char17=55&lon18=-93.61&lat18=41.6&char18=66&lon19=-92.29&lat19=34.75&char19=63&lon20=-90.23&lat20=39.73&char20=57&lon21=-90.08&lat21=29.95&char21=64&lon22=-87.91&lat22=43.04&char22=43&lon23=-87.64&lat23=41.51&char23=52&lon24=-83.05&lat24=42.33&char24=40&lon25=-86.16&lat25=39.77&char25=54&lon26=-85.76&lat26=38.25&char26=56&lon27=-86.78&lat27=36.17&char27=57&lon28=-90.05&lat28=35.15&char28=64&lon29=-84.39&lat29=33.75&char29=52&lon30=-81.38&lat30=28.54&char30=78&lon31=-80.19&lat31=25.77&char31=75&lon32=-94.7&lat32=37.41&char32=57&lon33=-84.29&lat33=37.75&char33=54&lon34=-77.04&lat34=38.9&char34=50&lon35=-75.5&lat35=43&char35=38&lon36=-71.06&lat36=42.36&char36=32"


var url = require('url')

var q = url.parse(str, true).query


var res = ""

for (var i=0; i<q.markerCount; i++)
{
  res+= ' <m'
  res+= ' lat="' + q["lat"+i] + '"'
  res+= ' lon="' + q["lon"+i] + '"'
  res+= ' char="' + q["char"+i] + '"'
  res += ' color="white"'
  res += ' />\r\n'
}

console.log(res)