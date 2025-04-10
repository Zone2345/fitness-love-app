import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

declare const google: any;
@Component({
  selector: 'app-google-maps',
  imports: [],
  templateUrl: './google-maps.component.html',
  styleUrl: './google-maps.component.css',
})
export class GoogleMapsComponent implements AfterViewInit {
  @ViewChild('mapCanvas') mapCanvas!: ElementRef;
  // data-zoom="15"
  // data-lat="44.758385583286646"
  // data-lng="20.48674686757928"
  // data-type="roadmap"
  // data-hue="#ffc400"
  // data-title="Fitness Love Team"
  // data-content="Vojvode Stepe 395b, Beograd<br><a href='mailto:fitnessloveteam&#64;hotmail.com'>fitnessloveteam@hotmail.com</a>"
  @Input() lat: number = 44.758385583286646;
  @Input() lng: number = 20.48674686757928;
  @Input() zoom: number = 15;
  @Input() scrollwheel: boolean = false;
  @Input() zoomcontrol: boolean = true;
  @Input() mapType: string = 'ROADMAP';
  @Input() title: string = 'Fitness Love Team';
  @Input() content: string =
    "Vojvode Stepe 395b, Beograd<br><a href='mailto:fitnessloveteam&#64;hotmail.com'>fitnessloveteam@hotmail.com</a>";
  @Input() hue: string = '#ffc400';

  ngAfterViewInit(): void {
    if (typeof google === 'undefined') {
      this.loadGoogleMaps();
    } else {
      this.initMap();
    }
  }
  private loadGoogleMaps(): void {
    const script = document.createElement('script');
    script.src = `http://maps.google.com/maps/api/js?key=AIzaSyBKS14AnP3HCIVlUpPKtGp7CbYuMtcXE2o`;
    script.defer = true;
    script.async = true;
    (window as any).initMap = () => this.initMap();
    document.head.appendChild(script);
  }

  private initMap(): void {
    const mapTypeId = this.getMapTypeId();
    const isMobile = navigator.userAgent.match(/iPad|iPhone|Android/i);

    const mapOptions = {
      zoom: this.zoom,
      scrollwheel: this.scrollwheel,
      zoomControl: this.zoomcontrol,
      draggable: !isMobile,
      center: new google.maps.LatLng(this.lat, this.lng),
      mapTypeId: mapTypeId,
      hue: this.hue,
    };

    const map = new google.maps.Map(this.mapCanvas.nativeElement, mapOptions);
    this.createMarker(map);

    // if (this.hue) {
    //   // this.applyCustomStyles(map);
    // }
  }

  private getMapTypeId(): any {
    switch (this.mapType.toUpperCase()) {
      case 'SATELLITE':
        return google.maps.MapTypeId.SATELLITE;
      case 'HYBRID':
        return google.maps.MapTypeId.HYBRID;
      case 'TERRAIN':
        return google.maps.MapTypeId.TERRAIN;
      default:
        return google.maps.MapTypeId.ROADMAP;
    }
  }

  private createMarker(map: any): void {
    const markerImage = 'assets/images/map-marker.png'; // Update path to your marker image

    const marker = new google.maps.Marker({
      position: new google.maps.LatLng(this.lat, this.lng),
      map: map,
      icon: markerImage,
      title: this.title,
    });

    if (this.content) {
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div class="map-data">
            <h6>${this.title}</h6>
            <div class="map-content">${this.content}</div>
          </div>
        `,
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    }
  }

  // private applyCustomStyles(map: any): void {
  //   const styles = [/* Paste the same style array from original code here */];
  //   map.setOptions({ styles: styles });
  // }
}
