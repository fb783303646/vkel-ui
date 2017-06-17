import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare const BMap: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MapsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const map = new BMap.Map('map');    // 创建Map实例
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 5);  // 初始化地图,设置中心点坐标和地图级别
    map.addControl(new BMap.MapTypeControl());   // 添加地图类型控件
    map.setCurrentCity('深圳');          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);
  }
}
