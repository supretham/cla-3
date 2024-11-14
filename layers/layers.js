var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_mess_1 = new ol.format.GeoJSON();
var features_mess_1 = format_mess_1.readFeatures(json_mess_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mess_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mess_1.addFeatures(features_mess_1);
var lyr_mess_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mess_1, 
                style: style_mess_1,
                popuplayertitle: "mess",
                interactive: true,
                title: '<img src="styles/legend/mess_1.png" /> mess'
            });
var format_wblocl_2 = new ol.format.GeoJSON();
var features_wblocl_2 = format_wblocl_2.readFeatures(json_wblocl_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wblocl_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wblocl_2.addFeatures(features_wblocl_2);
var lyr_wblocl_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wblocl_2, 
                style: style_wblocl_2,
                popuplayertitle: "w bl;ocl",
                interactive: true,
                title: '<img src="styles/legend/wblocl_2.png" /> w bl;ocl'
            });
var format_buffered_3 = new ol.format.GeoJSON();
var features_buffered_3 = format_buffered_3.readFeatures(json_buffered_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffered_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffered_3.addFeatures(features_buffered_3);
var lyr_buffered_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buffered_3, 
                style: style_buffered_3,
                popuplayertitle: "buffered",
                interactive: true,
                title: '<img src="styles/legend/buffered_3.png" /> buffered'
            });
var format_wblockbilid_4 = new ol.format.GeoJSON();
var features_wblockbilid_4 = format_wblockbilid_4.readFeatures(json_wblockbilid_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wblockbilid_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wblockbilid_4.addFeatures(features_wblockbilid_4);
var lyr_wblockbilid_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wblockbilid_4, 
                style: style_wblockbilid_4,
                popuplayertitle: "w block — bilid",
                interactive: true,
                title: '<img src="styles/legend/wblockbilid_4.png" /> w block — bilid'
            });
var format_parkingslot_5 = new ol.format.GeoJSON();
var features_parkingslot_5 = format_parkingslot_5.readFeatures(json_parkingslot_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parkingslot_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parkingslot_5.addFeatures(features_parkingslot_5);
var lyr_parkingslot_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parkingslot_5, 
                style: style_parkingslot_5,
                popuplayertitle: "parking slot",
                interactive: true,
                title: '<img src="styles/legend/parkingslot_5.png" /> parking slot'
            });
var format_parkingslotsparking_slot_6 = new ol.format.GeoJSON();
var features_parkingslotsparking_slot_6 = format_parkingslotsparking_slot_6.readFeatures(json_parkingslotsparking_slot_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parkingslotsparking_slot_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parkingslotsparking_slot_6.addFeatures(features_parkingslotsparking_slot_6);
var lyr_parkingslotsparking_slot_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parkingslotsparking_slot_6, 
                style: style_parkingslotsparking_slot_6,
                popuplayertitle: "parking slots — parking_slot",
                interactive: true,
                title: '<img src="styles/legend/parkingslotsparking_slot_6.png" /> parking slots — parking_slot'
            });

lyr_OSMStandard_0.setVisible(true);lyr_mess_1.setVisible(true);lyr_wblocl_2.setVisible(true);lyr_buffered_3.setVisible(true);lyr_wblockbilid_4.setVisible(true);lyr_parkingslot_5.setVisible(true);lyr_parkingslotsparking_slot_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_mess_1,lyr_wblocl_2,lyr_buffered_3,lyr_wblockbilid_4,lyr_parkingslot_5,lyr_parkingslotsparking_slot_6];
lyr_mess_1.set('fieldAliases', {'id': 'id', });
lyr_wblocl_2.set('fieldAliases', {'id': 'id', });
lyr_buffered_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_wblockbilid_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_parkingslot_5.set('fieldAliases', {'id': 'id', });
lyr_parkingslotsparking_slot_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_mess_1.set('fieldImages', {'id': '', });
lyr_wblocl_2.set('fieldImages', {'id': '', });
lyr_buffered_3.set('fieldImages', {'fid': '', 'id': '', });
lyr_wblockbilid_4.set('fieldImages', {'fid': '', 'id': '', });
lyr_parkingslot_5.set('fieldImages', {'id': '', });
lyr_parkingslotsparking_slot_6.set('fieldImages', {'fid': '', 'id': '', });
lyr_mess_1.set('fieldLabels', {'id': 'no label', });
lyr_wblocl_2.set('fieldLabels', {'id': 'no label', });
lyr_buffered_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_wblockbilid_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_parkingslot_5.set('fieldLabels', {'id': 'no label', });
lyr_parkingslotsparking_slot_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_parkingslotsparking_slot_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});