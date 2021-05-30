import { Component, NgZone, OnInit } from '@angular/core';
import * as Cesium from 'cesium';

let viewer: any;

@Component({
  selector: 'app-world-display',
  templateUrl: './world-display.component.html',
  styleUrls: ['./world-display.component.css'],
})
export class WorldDisplayComponent implements OnInit {
  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    // this.ngZone.runOutsideAngular(() => {
    //   this.createCesiumMap();
    //   // this.displayLongtitudeLatitude();
    // });
  }
  private createCesiumMap() {
    viewer = new Cesium.Viewer('cesiumContainer', {
      imageryProvider: Cesium.createWorldImagery({
        style: Cesium.IonWorldImageryStyle.AERIAL_WITH_LABELS,
      }),
      baseLayerPicker: false, ////Hide the base layer picker
      timeline: false, //Timeline disabled
      animation: false, //Hide Clock
      homeButton: false, //Hide HomeButton top right corner
      fullscreenButton: false,
      sceneModePicker: false,
      scene3DOnly: true, //Each geometry instance will only be rendered in 3D to save GPU memory.
      projectionPicker: true, //Add projection button
      geocoder: false, //Disable cesium search
    });
  }

  private displayLongtitudeLatitude(movement) {
    var hud = document.getElementById('hud');

    var cartesian = viewer.camera.pickEllipsoid(
      movement.endPosition,
      viewer.scene.globe.ellipsoid
    );
    if (cartesian) {
      var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
      var longitudeString = Cesium.Math.toDegrees(
        cartographic.longitude
      ).toFixed(2);
      var latitudeString = Cesium.Math.toDegrees(cartographic.latitude).toFixed(
        2
      );

      hud.innerHTML =
        'Lon: ' +
        ('   ' + longitudeString).slice(-7) +
        '\u00B0' +
        '\nLat: ' +
        ('   ' + latitudeString).slice(-7) +
        '\u00B0';
    } else {
      hud.innerHTML = '';
    }
  }
}
