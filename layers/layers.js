ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([109.054430, -8.622107, 111.465869, -6.866526]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_KlasifikasiBatuan_1 = new ol.format.GeoJSON();
var features_KlasifikasiBatuan_1 = format_KlasifikasiBatuan_1.readFeatures(json_KlasifikasiBatuan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KlasifikasiBatuan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KlasifikasiBatuan_1.addFeatures(features_KlasifikasiBatuan_1);
var lyr_KlasifikasiBatuan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KlasifikasiBatuan_1, 
                style: style_KlasifikasiBatuan_1,
                popuplayertitle: 'Klasifikasi Batuan',
                interactive: true,
    title: 'Klasifikasi Batuan<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_0.png" /> Alluvium<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_1.png" /> Andesite<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_2.png" /> Andesite porphyry and lahar<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_3.png" /> Avalanche Dep. (Ladus) From NueeArdente.<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_4.png" /> Baturetno Formation<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_5.png" /> Brecciated Rocks<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_6.png" /> Cindercone ash deposits<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_7.png" /> Coastal deposits<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_8.png" /> Colluvium<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_9.png" /> Condong volcanic<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_10.png" /> Dacite<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_11.png" /> Damar Formation<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_12.png" /> Formasi Ngalanggran<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_13.png" /> Gianti Volcanics<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_14.png" /> Gilipetung Volcanic<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_15.png" /> Halang Formation<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_16.png" /> Jembangan Volcanic<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_17.png" /> Jonggrangan Formation<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_18.png" /> Kabuh Formation<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_19.png" /> Kalibeng Formation<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_20.png" /> Kaligetas Formation<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_21.png" /> Kebobutak Formation<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_22.png" /> Kepek Formation<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_23.png" /> Kerek Formation<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_24.png" /> Lava Dome and Flow<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_25.png" /> Lawu Lahar<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_26.png" /> Ligung Formation<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_27.png" /> Mandalika Formation<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_28.png" /> Metamorphic rock<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_29.png" /> Nampol Formation<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_30.png" /> Nanggulan Formation<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_31.png" /> Notopuro Formation<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_32.png" /> Old Sumbing Volcanics<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_33.png" /> Old Volcanic Deposits of Merapi Volcano<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_34.png" /> Older Aluvium<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_35.png" /> Oyo Formation<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_36.png" /> Pendul diorite<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_37.png" /> Peniron Formation<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_38.png" /> Penosogan Formation<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_39.png" /> Pucangan Formation<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_40.png" /> Sambipitu Formation<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_41.png" /> Semilir Formation<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_42.png" /> Sentolo Formation<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_43.png" /> Sumbing Lava<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_44.png" /> Sumbing Volcanics<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_45.png" /> Sundoro Volcanic<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_46.png" /> Terrace deposits<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_47.png" /> Totogan Formation<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_48.png" /> Undifferentiated Volcanic Rocks<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_49.png" /> Volcanic breccia<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_50.png" /> Waturanda Formation<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_51.png" /> Waturonda Formation<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_52.png" /> Wonosari Formation<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_53.png" /> Wungkal Formation<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_54.png" /> Wuni Formation<br />\
    <img src="styles/legend/KlasifikasiBatuan_1_55.png" /> Young volcanic deposits of Merapi<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_KlasifikasiBatuan_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_KlasifikasiBatuan_1];
lyr_KlasifikasiBatuan_1.set('fieldAliases', {'NM_LEMBAR': 'NM_LEMBAR', 'NAME': 'NAME', 'FORMATION': 'FORMATION', 'CLASS_LITH': 'CLASS_LITH', 'T_CLASS_EN': 'T_CLASS_EN', 'B_CLASS_EN': 'B_CLASS_EN', });
lyr_KlasifikasiBatuan_1.set('fieldImages', {'NM_LEMBAR': 'TextEdit', 'NAME': 'TextEdit', 'FORMATION': 'TextEdit', 'CLASS_LITH': 'TextEdit', 'T_CLASS_EN': 'TextEdit', 'B_CLASS_EN': 'TextEdit', });
lyr_KlasifikasiBatuan_1.set('fieldLabels', {'NM_LEMBAR': 'inline label - visible with data', 'NAME': 'inline label - visible with data', 'FORMATION': 'inline label - visible with data', 'CLASS_LITH': 'inline label - visible with data', 'T_CLASS_EN': 'inline label - visible with data', 'B_CLASS_EN': 'inline label - visible with data', });
lyr_KlasifikasiBatuan_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});