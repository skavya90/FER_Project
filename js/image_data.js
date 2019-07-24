//parsing data read to json format
var tData = JSON.parse(image_data_var);

var $imageContent = document.querySelector("#rondellCarousel");

for(var i=0 ;i<10; i++) {
var aTag = document.createElement('a');
var divTag = document.createElement('div');
var divTag2 = document.createElement('div');
var imageVal = 'Stock_Images/Gallery/'+tData[i].Image_ID;
aTag.setAttribute('href',imageVal)
aTag.setAttribute('target',"_blank")
aTag.setAttribute('rel',"rondell_1")
aTag.setAttribute('title',"")
var imgTag = document.createElement('img');
imgTag.setAttribute('src',imageVal)
var h5Tag = document.createElement('h5');
h5Tag.setAttribute('id',"chat")
h5Tag.innerHTML= tData[i].label + tData[i].angry_pred + tData[i].disgust_pred + tData[i].fear_pred + tData[i].happy_pred + tData[i].neutral_pred + tData[i].sad_pred + tData[i].surprise_pred;
divTag2.innerHTML='Display Score Here'+i;
aTag.appendChild(imgTag);
aTag.appendChild(h5Tag);
$imageContent.appendChild(aTag);
}