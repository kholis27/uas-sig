var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LapakGIS_Batas_Kabupaten_2024_1 = new ol.format.GeoJSON();
var features_LapakGIS_Batas_Kabupaten_2024_1 = format_LapakGIS_Batas_Kabupaten_2024_1.readFeatures(json_LapakGIS_Batas_Kabupaten_2024_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapakGIS_Batas_Kabupaten_2024_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LapakGIS_Batas_Kabupaten_2024_1.addFeatures(features_LapakGIS_Batas_Kabupaten_2024_1);
var lyr_LapakGIS_Batas_Kabupaten_2024_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LapakGIS_Batas_Kabupaten_2024_1, 
                style: style_LapakGIS_Batas_Kabupaten_2024_1,
                popuplayertitle: 'LapakGIS_Batas_Kabupaten_2024',
                interactive: true,
    title: 'LapakGIS_Batas_Kabupaten_2024<br />\
    <img src="styles/legend/LapakGIS_Batas_Kabupaten_2024_1_0.png" /> 0 - 2<br />\
    <img src="styles/legend/LapakGIS_Batas_Kabupaten_2024_1_1.png" /> 2 - 3<br />\
    <img src="styles/legend/LapakGIS_Batas_Kabupaten_2024_1_2.png" /> 3 - 4,5<br />\
    <img src="styles/legend/LapakGIS_Batas_Kabupaten_2024_1_3.png" /> 4,5 - 50<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_LapakGIS_Batas_Kabupaten_2024_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_LapakGIS_Batas_Kabupaten_2024_1];
lyr_LapakGIS_Batas_Kabupaten_2024_1.set('fieldAliases', {'kabupaten': 'kabupaten', 'provinsi': 'provinsi', 'swalayan': 'swalayan', 'jml pr': 'jml pr', 'jml ppr': 'jml ppr', });
lyr_LapakGIS_Batas_Kabupaten_2024_1.set('fieldImages', {'kabupaten': 'TextEdit', 'provinsi': 'TextEdit', 'swalayan': 'TextEdit', 'jml pr': 'Range', 'jml ppr': 'Range', });
lyr_LapakGIS_Batas_Kabupaten_2024_1.set('fieldLabels', {'kabupaten': 'inline label - always visible', 'provinsi': 'inline label - always visible', 'swalayan': 'inline label - always visible', 'jml pr': 'inline label - always visible', 'jml ppr': 'inline label - always visible', });
lyr_LapakGIS_Batas_Kabupaten_2024_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});