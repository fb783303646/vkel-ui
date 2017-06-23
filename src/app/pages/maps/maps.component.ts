import * as ol from 'openlayers';

import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MapsComponent implements OnInit {

  map;
  layers;
  drawMap;
  drawSoure;
  drawVetor;
  points;
  draw = {
    Point: 'Point',
    LineString: 'LineString',
    Circle: 'Circle',
    Polygon: 'Polygon',
  };

  constructor() { }

  ngOnInit() {
    this.layers = {
      GGC_Layer: [new ol.layer.Tile({
        title: 'Google地图',
        source: new ol.source.XYZ({
          minZoom: 1,
          maxZoom: 14,
          attribution: new ol.Attribution({
            html: 'Tiles © GoogleMap'
          }),
          tilePixelRatio: 1,
          wrapX: false,
          logo: '',
          url: 'http://www.google.cn/maps/vt/pb=!1m4!1m3!1i{z}!2i{x}!3i{y}!2m3!1e0!2sm!3i345013117!3m8!2szh-CN!3scn!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0'
        })
      })],
      BD_Layer: [new ol.layer.Tile({
        title: '百度地图',
        source: new ol.source.TileImage({
          projection: ol.proj.get('EPSG:3857'),
          tileGrid: new ol.tilegrid.TileGrid({
            origin: [0, 0], // 设置原点坐标
            resolutions: this.getResolutions() // 设置分辨率
          }),
          tilePixelRatio: 1,
          wrapX: false,
          tileUrlFunction: function (tileCoord, pixelRatio, proj) {
            if (!tileCoord) {
              return '';
            }
            const z = tileCoord[0];
            let x = tileCoord[1];
            let y = tileCoord[2];

            if (x < 0) {
              x = 'M' + (-x);
            }
            if (y < 0) {
              y = 'M' + (-y);
            }
            const serIndex = Math.ceil((Math.random() * 10) % 4);
            return 'http://online' + serIndex + '.map.bdimg.com/onlinelabel/?qt=tile&x=' + x + '&y=' + y + '&z=' + z + '&styles=pl&scaler=1&p=1';
          }
        })
      })],
      ALI_Layer: [new ol.layer.Tile({
        title: '高德地图',
        source: new ol.source.XYZ(
          {
            crossOrigin: 'anonymous',
            attribution: new ol.Attribution({
              html: 'Tiles © ALiMap'
            }),
            maxZoom: 19,
            wrapX: false,
            projection: ol.proj.get('EPSG:3857'),
            url: 'http://webrd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}'
          })
      })],
      ALI_SatLayer: [new ol.layer.Tile({
        title: '高德地图',
        source: new ol.source.XYZ(
          {
            crossOrigin: 'anonymous',
            attribution: new ol.Attribution({
              html: 'Tiles © ALiMap'
            }),
            projection: ol.proj.get('EPSG:3857'),
            url: 'http://webst0{1-4}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}'
          })
      })],
      TD_Layer: [
        new ol.layer.Tile({
          title: '天地图',
          source: new ol.source.XYZ({
            crossOrigin: 'anonymous',
            opaque: true,
            maxZoom: 19,
            projection: ol.proj.get('EPSG:3857'),
            url: 'http://t{0-4}.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}'
          })
        }),
        new ol.layer.Tile({
          title: '天地图标注',
          source: new ol.source.XYZ({
            crossOrigin: 'anonymous',
            opaque: true,
            maxZoom: 19,
            projection: ol.proj.get('EPSG:3857'),
            url: 'http://t{0-7}.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}'
          })
        })
      ],
      TD_SatLayer: [
        new ol.layer.Tile({
          title: '天地图',
          source: new ol.source.XYZ({
            crossOrigin: 'anonymous',
            opaque: true,
            maxZoom: 19,
            projection: ol.proj.get('EPSG:3857'),
            url: 'http://t{0-4}.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}'
          })
        }),
        new ol.layer.Tile({
          title: '天地图标注',
          source: new ol.source.XYZ({
            crossOrigin: 'anonymous',
            opaque: true,
            maxZoom: 19,
            projection: ol.proj.get('EPSG:3857'),
            url: 'http://t{0-7}.tianditu.com/DataServer?T=cia_w&x={x}&y={y}&l={z}'
          })
        })
      ],
      OSM_Layer: [new ol.layer.Tile({
        source: new ol.source.OSM()
      })],
      BING_Layer: [new ol.layer.Tile({
        source: new ol.source.XYZ({
          tileUrlFunction: function (tileCoord) {
            var z = tileCoord[0];
            var x = tileCoord[1];
            var y = -tileCoord[2] - 1;
            var result = '', zIndex = 0;

            for (; zIndex < z; zIndex++) {
              result = ((x & 1) + 2 * (y & 1)).toString() + result;
              x >>= 1;
              y >>= 1;
            }
            var serIndex = Math.ceil((Math.random() * 10) % 4);
            return 'http://dynamic.t' + serIndex + '.tiles.ditu.live.com/comp/ch/' + result + '?it=G,VE,BX,L,LA&mkt=zh-cn,syr&n=z&og=111&ur=CN';
          }
        })
      })]
    };

    this.map = new ol.Map({
      controls: ol.control.defaults().extend([
        new ol.control.FullScreen(),
        new ol.control.MousePosition({
          coordinateFormat: ol.coordinate.createStringXY(4),
          projection: 'EPSG:4326',
          className: 'custom-mouse-position',
          target: document.getElementById('mouse-position')
        }),
        new ol.control.ScaleLine({}), // 比例尺
        new ol.control.ZoomSlider({}) // 放大缩小条
      ]),
      logo: false,
      target: 'map',
      layers: this.layers['GGC_Layer'],
      view: new ol.View({
        center: [12697184.079535482, 2563239.3065151004],//深圳
        // ol.proj.transform([114.06465, 22.620802], 'EPSG:4326', 'EPSG:3857'),
        zoom: 8
      })
    });
  }

  /**
   * 设置分辨率
   *
   * @returns
   * @memberof MapsComponent
   */
  getResolutions() {
    // 自定义分辨率和瓦片坐标系
    const resolutions = [];
    const maxZoom = 18;
    // 计算百度使用的分辨率
    for (let i = 0; i <= maxZoom; i++) {
      resolutions[i] = Math.pow(2, maxZoom - i);
    }
    return resolutions;
  }

  /**
   * 清空地图
   * 
   * @memberof MapsComponent
   */
  deleteMapLayers() {
    const layers = this.map.getLayers().getArray();
    for (let i = layers.length - 1; i >= 0; i--) {
      const layer = layers[i];
      this.map.removeLayer(layer);
    }
  }

  /**
   * 加载新地图
   *
   * @param {any} mapType {图层类型}
   * @param {any} layerType {地图类型}
   * @memberof MapsComponent
   */
  loadNewMap(mapType, layerType = '') {
    const that = this;
    if (!mapType) {
      mapType = 'OSM';
    }

    const layerName = mapType + '_' + layerType + 'Layer';
    this.layers[layerName].forEach(function (layer, i) {
      that.map.addLayer(layer);
    });
  }

  addDrawType(type) {
    this.map.removeInteraction(this.drawMap);
    this.DrawLayer(type);
  };

  DrawLayer(type) {
    this.drawSoure = new ol.source.Vector({ wrapX: false });
    this.drawVetor = new ol.layer.Vector({
      source: this.drawSoure
    });
    if (type !== undefined) {
      this.drawMap = new ol.interaction.Draw({
        source: this.drawSoure,
        type: type
      });
    }

    this.map.addInteraction(this.drawMap);
    this.map.addLayer(this.drawVetor);

    this.drawMap.on('drawend', function (event) {
      this.points = '';
      const geo = event.feature.getGeometry(); 
      if (geo.getCoordinates) {
        this.points = JSON.stringify(geo.getCoordinates());
      }
      console.log(this.points);
    });
  }

  select(code) {
    this.deleteMapLayers();
    this.loadNewMap(code);
  }
}
