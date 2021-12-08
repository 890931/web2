var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_LESEU_1 = new ol.format.GeoJSON();
var features_LESEU_1 = format_LESEU_1.readFeatures(json_LESEU_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LESEU_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LESEU_1.addFeatures(features_LESEU_1);
var lyr_LESEU_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LESEU_1, 
                style: style_LESEU_1,
                interactive: true,
    title: 'LESEU<br />\
    <img src="styles/legend/LESEU_1_0.png" /> 中<br />\
    <img src="styles/legend/LESEU_1_1.png" /> 廢<br />\
    <img src="styles/legend/LESEU_1_2.png" /> B<br />\
    <img src="styles/legend/LESEU_1_3.png" /> M<br />\
    <img src="styles/legend/LESEU_1_4.png" /> R<br />\
    <img src="styles/legend/LESEU_1_5.png" /> T<br />\
    <img src="styles/legend/LESEU_1_6.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_LESEU_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_LESEU_1];
lyr_LESEU_1.set('fieldAliases', {'Build_STR': 'Build_STR', 'Build_NO': 'Build_NO', });
lyr_LESEU_1.set('fieldImages', {'Build_STR': 'TextEdit', 'Build_NO': 'TextEdit', });
lyr_LESEU_1.set('fieldLabels', {'Build_STR': 'inline label', 'Build_NO': 'inline label', });
lyr_LESEU_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});