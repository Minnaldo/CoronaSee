<template>
  <div class="map-page">
    <div class="page-header clear-filter" filter-color="orange">
      <!-- <div class="page-header-image" style="background-image: url('img/login.jpg')"></div> -->

      <!-- <div class="map_wrap">
        <div id="drawingMap"></div>
        <p class="modes">
          <button type="button" @click="searchWeather">보기</button>
        </p>
        <div v-if='view === true'>
          <card id="weather_card">
            <h2>국가명 : {{ country }}</h2>
            <p>도시명 : {{ city }}</p>
            <p>장소 : {{ name }}</p>
          </card>
        </div>

      </div> -->

      <div id="map">
        <!-- <button type="button" @click="searchWeather">보기</button>
        <div v-if='view === true'>
          <h2>국가명 : {{ country }}</h2>
          <p>도시명 : {{ city }}</p>
          <p>장소 : {{ name }}</p>
        </div> -->
      </div>



      <div id="dmap">
        <!-- <h1>{{msg}}</h1> -->
        <!-- <div class="send-button">
          <n-button type="primary" round v-on:click="hideMarkers">마커 감추기</n-button>
          <n-button type="primary" round v-on:click="showMarkers">마커 보이기</n-button>
        </div> -->

        <!-- Weather Modal Start -->
        <!-- <div class="vis-weather">
          <h2 class="vh_hide">날씨정보</h2>
          <p class="weather-date"></p>
          <ul>
              <li class="weather-temp"></li>
              <li id="RN1">시간당강수량 : ?</li>
              <li class="weather-state-text"></li>
          </ul>
        </div> -->
        <!-- <div class="vis-weather">
            <h2 class="vh_hide">날씨정보</h2>
            <ul class="list-group list-group-flush weather"
                style="font-weight: 600;">
            </ul>
        </div> -->
        <!-- Weather Modal End -->




        <!-- <div id="mapwrap">  -->

        <!-- <div id="map" style="width:100%;height:350px;"></div> -->


        <!-- 지도 위에 표시될 마커 카테고리 -->
        <div class="marker_category">
          <ul>
            <li id="coffeeMenu" v-on:click="changeMarkers('coffee')" class="menu_selected">
              <span class="iconify" data-icon="mdi-fish" data-inline="false"></span>
              <p />All
            </li>
            <li id="storeMenu" v-on:click="changeMarkers('store')">
              <span class="iconify" data-icon="mdi-fish" data-inline="false"></span>
              <p />Public
            </li>
            <li id="carparkMenu" v-on:click="changeMarkers('carpark')">
              <span class="iconify" data-icon="mdi-fish" data-inline="false"></span>
              <p />Private
            </li>
          </ul>

          <div class="bor">

            <!-- <input type="text" id="name" name="name" placeholder="name" v-model="weather.name"> -->
            장소: {{weather.name}}, {{weather.country}}
            <br>
            날씨: {{weather.description}}
            <br>
            풍속: {{weather.speed}}m/s
            <br>
            위도: {{weather.lat}}, 경도: {{weather.lon}}


          </div>



        </div>











        <!-- </div> -->

        <!-- Trigger/Open The Modal -->
        <!-- <button id="myBtn">Open Modal</button> -->

        <!-- The Modal -->
        <div id="myModal" class="modal">
          <!-- <div id="myModal" class="login-page"> -->


          <!-- Modal content -->
          <!-- <div class="modal-content" style="color:black;"> -->
          <div class="form" style="color:black;">
            <span class="close" style="text-align:right;">&times;</span>

            <label for="notice" style="text-align:center;">낚시포인트 등록</label>
            <input type="text" id="name" name="name" placeholder="name" v-model="modalPoint.name">
            <textarea type="text" id="description" name="description" placeholder="description"
              v-model="modalPoint.description" />
            <p />
            <!-- <label for="latitude">latitude</label>
  <input type="text" id="latitude" name="latitude" placeholder="latitude" v-model="modalPoint.latitude">
    <p/>
  <label for="longitude">longitude</label>
  <input type="text" id="longitude" name="longitude" placeholder="longitude" v-model="modalPoint.longitude"> -->
            <p />
            <button type="submit" v-on:click="insertPoint">완료</button>



          </div>
        </div>
        <!-- The Modal End-->


        <!-- The ModalNotice -->
        <div id="myModalNotice" class="modal">


          <!-- Modal content -->
          <!-- <div class="modal-content" style="color:black;"> -->
          <div class="form" style="color:black;">
            <span class="close" style="text-align:right;">&times;</span>

            <label for="notice">로그인 후 낚시포인트 등록 가능</label>

          </div>
        </div>
        <!-- The ModalNotice End -->


        <!-- The ModalDetail -->
        <div id="myModalDetail" class="modal">


          <!-- Modal content -->
          <!-- <div class="modal-content" style="color:black;"> -->
          <div class="form" style="color:black; text-align:left;">
            <span class="close" style="text-align:right;">&times;</span>

            <!-- <label for="point_code">point_code</label> -->
            <!-- <input type="text" id="point_code" name="point_code" placeholder="point_code" v-model="modalDetailContent.point_code" readonly> -->
            <!-- <label for="user_code">user_code</label> -->
            <!-- <input type="text" id="user_code" name="user_code" placeholder="user_code" v-model="modalDetailContent.user_code" readonly> -->
            <label for="name">name</label>
            <input type="text" id="nameDetail" name="name" placeholder="name" v-model="modalDetailContent.name">
            <label for="description">description</label>
            <textarea type="text" id="descriptionDetail" name="description" placeholder="description"
              v-model="modalDetailContent.description"/>
            <!-- <label for="latitude">latitude</label> -->
            <!-- <input type="text" id="latitude" name="latitude" placeholder="latitude" v-model="modalDetailContent.latitude"> -->
            <!-- <label for="longitude">longitude</label> -->
            <!-- <input type="text" id="longitude" name="longitude" placeholder="longitude" v-model="modalDetailContent.longitude"> -->

            <button type="submit" v-on:click="updatePoint"
              v-show="(this.getStore('isLogin')=='true') && (this.getStore('loginUser')==modalDetailContent.user_code)">수정</button>
            <button type="submit" v-on:click="deletePoint"
              v-show="(this.getStore('isLogin')=='true') && (this.getStore('loginUser')==modalDetailContent.user_code)">삭제</button>
            <button type="submit" v-on:click="movePoint" style="background: #FF8888;">길 찾기</button>

          </div>
        </div>
        <!-- The ModalDetail End -->







        <!-- <div class="login-page">
  <div class="form">
    <form class="register-form">
      <input type="text" placeholder="name"/>
      <input type="password" placeholder="password"/>
      <input type="text" placeholder="email address"/>
      <button>create</button>
      <p class="message">Already registered? <a href="#">Sign In</a></p>
    </form>
  </div>
</div> -->

    
      </div>

    </div>
  </div>

</template>

<script>
  import http from "../http-common.js";
  import http2 from "../http-common2.js";
  import {
    poisx
  } from 'path';

  import {
    Card,
    Button,
    FormGroupInput
  } from '@/components';
  import MainFooter from '@/layout/MainFooter';
  export default {
    name: 'dmap',
    data() {
      return {
        container: null,
        options: null,
        map: null,
        content: null,
        content2: null,
        marker: null,
        markers1: [],
        markers2: [],
        msg: "다음맵 테스트",
        info: [],
        imgSrc: "../../public/favicon.png",

        modal: null,
        modalNotice: null,
        modalDetail: null,
        btn: null,
        span: null,

        modalPoint: [],
        modalDetailContent: [],

        view: false,
        customoverlay: null,

        customOverlays: [],

        weather: {
          'name': null,
          'country': null,
          'description': null,
          'speed': null,
          'lat': 33.45, // 33.450701,
          'lon': 126.57 // 126.570667
        },

        corona: {
          'countryName' : null,
          'newCase' : null,     //새로운 추가 확진자
          'totalCase' : null,   //총 확진자 수
          'recovered' : null,   //회복된 확진자 수
          'death' : null,       //숨진 확진자 수
          
        }
      }
    },
    bodyClass: 'map-page',
    mounted() {
      if (window.kakao && window.kakao.maps) {
        this.initMap();
      } else {
        const script = document.createElement('script');
        /* global kakao */
        script.onload = () => kakao.maps.load(this.initMap);
        script.src = 'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=1ed68e01950511b4ad79ee177cc034a9';
        document.head.appendChild(script);
      }

      // this.getPointList();
      // this.addPointList();
      this.settingOpenModal();


      let recaptchaScript = document.createElement('script');
      recaptchaScript.setAttribute('src', 'https://code.iconify.design/1/1.0.6/iconify.min.js');
      document.head.appendChild(recaptchaScript);


      this.searchWeather(this.weather.lat, this.weather.lon);


      // this.realTimeWeather();
    },
    methods: {
      initMap() {
        this.container = document.getElementById('map'); // 지도를 표시할 div
        this.options = {
          center: new kakao.maps.LatLng(this.weather.lat, this.weather.lon), // 지도의 중심좌표
          level: 10 // 지도 확대 레벨
        };

        this.map = new kakao.maps.Map(this.container, this.options); // 지도 생성, 지도를 그려줌.

        // this.content = document.createElement('div');
        // content.className = 'overlay';
        // content.innerHTML = '드래그 해주세요 :D';

        kakao.maps.event.addListener(this.map, 'click', (mouseEvent) => {
          // console.log("위도:" + mouseEvent.latLng.getLat() + "/  경도:" + mouseEvent.latLng.getLng());
          // 클릭한 위치에 마커를 표시합니다.
          // this.addMarker(mouseEvent.latLng, 'input');


          this.modalPoint.latitude = mouseEvent.latLng.getLat();
          this.modalPoint.longitude = mouseEvent.latLng.getLng();
          if (this.getStore("isLogin") == 'true')
            this.modal.style.display = "block";
          else
            this.modalNotice.style.display = "block";

          // this.searchWeather(this.modalPoint.latitude, mouseEvent.latLng.getLng());


          //   var mapwrap = document.createElement('div');
          //   mapwrap.className = "mapwrap";
          //           mapwrap.style =
          //   'position: relative;' +
          //   // 'bottom: 54px;' +
          //   'border-radius: 6px;' +
          //   'border: 1px solid #ccc;' +
          //   'border-bottom: 2px solid #ddd;' +
          //   'float: left;';

          //   var category = document.createElement('div');
          //   category.className = "category";

          //   var ul = document.createElement('ul');
          //   var li = document.createElement('li');
          //   li.id = "coffeeMenu";

          //   var span = document.createElement('span');
          //   span.className = "ico_comm ico_coffee";
          //   span.appendChild(document.createTextNode("커피숍ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"));

          //   li.appendChild(span);
          //   ul.appendChild(li);
          //   category.appendChild(ul);
          //   mapwrap.appendChild(category);

          // var position = new kakao.maps.LatLng(33.450701, 126.570667);
          //           // 커스텀 오버레이를 생성합니다
          // var customOverlay = new kakao.maps.CustomOverlay({
          //   map: this.map,
          //   position: position,
          //   content: mapwrap,
          //   yAnchor: 2.3,
          //   clickable: true
          // });


          // customOverlay.setMap(this.map);

        });

        // 지도에 표시된 마커 객체를 가지고 있을 배열입니다.
        // this.markers = [];

        // 마커 하나를 지도위에 표시합니다.
        // this.addMarker(new kakao.maps.LatLng(33.450701, 126.570667), 'test');

        this.map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);

        this.getPointList();

        // this.content = document.createElement('div');
        // this.content.className = 'overlay';
        // this.content.innerHTML = '드래그 해주세요 :D';s
        // this.content.innerHTML = '위치를 클릭하시면 날씨가 나옵니다. <br> 333';


        // this.customoverlay = new kakao.maps.CustomOverlay({
        //   map: this.map,
        //   content: this.content,
        //   position: new kakao.maps.LatLng(33.750701, 126.178656)
        // });

        // console.log("오버레이 되냐?");

        // 커스텀 오버레이를 드래그 하기 위해 필요한  
        // 드래그 시작좌표, 커스텀 오버레이의 위치좌표를 넣을 변수를 선업합니다
        // var startX, startY, startOverlayPoint;

        // 커스텀 오버레이에 mousedown이벤트를 등록합니다 
        // addEventHandle(content, 'mousedown', onMouseDown);

        // // mouseup 이벤트가 일어났을때 mousemove 이벤트를 제거하기 위해
        // // document에 mouseup 이벤트를 등록합니다 
        // addEventHandle(document, 'mouseup', onMouseUp);

        // console.log("오버레이 이후에는 되냐?");


        // 마우스 드래그로 지도 이동이 완료되었을 때 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
        kakao.maps.event.addListener(this.map, 'dragend', () => {
          // console.log("dragend");

          // 지도의  레벨을 얻어옵니다
          var level = this.map.getLevel();

          // 지도의 중심좌표를 얻어옵니다 
          var latlng = this.map.getCenter();

          var message = '<p>지도 레벨은 ' + level + ' 이고</p>';
          message += '<p>중심 좌표는 위도 ' + latlng.getLat() + ', 경도 ' + latlng.getLng() + '입니다</p>';

          this.weather.lat = Math.round(latlng.getLat() * 100) / 100;
          this.weather.lon = Math.round(latlng.getLng() * 100) / 100;

          this.searchWeather(this.weather.lat, this.weather.lon);
        });

        // 지도가 확대 또는 축소되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
        kakao.maps.event.addListener(this.map, 'zoom_changed', () => {
          // console.log("zoom_changed");

          // 지도의  레벨을 얻어옵니다
          var level = this.map.getLevel();

          // 지도의 중심좌표를 얻어옵니다 
          var latlng = this.map.getCenter();

          var message = '<p>지도 레벨은 ' + level + ' 이고</p>';
          message += '<p>중심 좌표는 위도 ' + latlng.getLat() + ', 경도 ' + latlng.getLng() + '입니다</p>';

          this.weather.lat = Math.round(latlng.getLat() * 100) / 100;
          this.weather.lon = Math.round(latlng.getLng() * 100) / 100;

          this.searchWeather(this.weather.lat, this.weather.lon);

        });
      },


      // 마커를 생성하고 지도위에 표시하는 함수입니다.
      addMarker(position, iwContent, user_code, point_code) {

        var imageSrc1 = 'img/marker/marker_1r.png', // 마커이미지의 주소입니다
          imageSrc2 = 'img/marker/marker_3b.png', // 마커이미지의 주소입니다
          imageSize = new kakao.maps.Size(42, 48), // 마커이미지의 크기입니다
          imageOption = {
            offset: new kakao.maps.Point(21, 48)
          }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.


        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        var markerImage1 = new kakao.maps.MarkerImage(imageSrc1, imageSize, imageOption);
        var markerImage2 = new kakao.maps.MarkerImage(imageSrc2, imageSize, imageOption);

        // 마커를 생성
        var marker;
        if (user_code == '1') {
          marker = new kakao.maps.Marker({
            position: position,
            clickable: true,
            opacity: 1,
            image: markerImage1
          });
        } else {
          marker = new kakao.maps.Marker({
            position: position,
            clickable: true,
            opacity: 1,
            image: markerImage2
          });
        }


        // 마커가 지도 위에 표시되도록 설정
        marker.setMap(this.map);

        // iwContent = '<div style="padding:5px; color:black;">' +
        //   '  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
        //   '    <span class="title">' + iwContent + '</span>' +
        //   '  </a>' +
        //   '</div>';


        // var iwRemoveable = true;

        // var infowindow = new kakao.maps.InfoWindow({
        //   content: iwContent,
        //   removable: iwRemoveable
        // });

        // kakao.maps.event.addListener(marker, 'click', () => {
        //   infowindow.open(this.map, marker);
        // });


        // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        var content3 = document.createElement('div');
        content3.className = "customoverlay";

        content3.style =
          'position: relative;' +
          // 'bottom: 54px;' +
          'border-radius: 6px;' +
          'border: 1px solid #ccc;' +
          'border-bottom: 2px solid #ddd;' +
          'float: left;';

        var a = document.createElement('a');
        var style_a =
          'display: block;' +
          'text-decoration: none;' +
          'color: #000;' +
          'text-align: center;' +
          'border-radius: 6px;' +
          'font-size: 14px;' +
          'font-weight: bold;' +
          'overflow: hidden;';

        if (user_code == '1') {
          style_a +=
            'background: #ff8888;' +
            'background: #ff8888 url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png) no-repeat right 14px center;';
        } else {
          style_a +=
            'background: #8888ff;' +
            'background: #8888ff url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png) no-repeat right 14px center;';
        }
        style_a += 'cursor: pointer;';
        a.style = style_a;

        a.onclick = () => {

          // console.log("overlay", point_code);
          this.getModalDetailContent(point_code);

        };

        var span = document.createElement('span');
        span.className = "title";
        span.appendChild(document.createTextNode(iwContent));

        span.style =
          'display: block;' +
          'text-align: center;' +
          'background: #fff;' +
          'margin-right: 35px;' +
          'padding: 10px 15px;' +
          'font-size: 14px;' +
          'font-weight: bold;';

        a.appendChild(span);
        content3.appendChild(a);


        // 커스텀 오버레이를 생성합니다
        var customOverlay = new kakao.maps.CustomOverlay({
          map: this.map,
          position: position,
          content: content3,
          yAnchor: 2.3,
          clickable: true
        });


        this.customOverlays.push(customOverlay);
        customOverlay.setMap(null);


        var visi = false;
        kakao.maps.event.addListener(marker, 'click', () => {
          // infowindow.open(this.map, marker);
          // console.log("click", visi);
          if (visi == false) {
            customOverlay.setMap(this.map);
            visi = true;
          } else {
            customOverlay.setMap(null);
            visi = false;
          }

        });




        // 생성된 생성된 마커를 배열에 추가
        if (user_code == '1')
          this.markers1.push(marker);
        else
          this.markers2.push(marker);

      },

      // 배열에 추가된 마커들을 지도에 표시하거나 삭제하는 함수
      setMarkers(map) {
        for (var i = 0; i < this.markers1.length; i++) {
          this.markers1[i].setMap(map);
        }
        for (var i = 0; i < this.markers2.length; i++) {
          this.markers2[i].setMap(map);
        }
      },

      // '마커 보이기' 버튼을 클릭하면 호출되어 배열에 추가된 마커를 지도에 표시하는 함수
      showMarkers() {
        // console.log("showMarkers");
        this.setMarkers(this.map);
      },

      // '마커 감추기 ' 버튼을 클릭하면 호출되어 배열에 추가된 마커를 지도에서 삭제하는 함수.
      hideMarkers() {
        // console.log("hideMarkers");
        this.setMarkers(null);
      },



      // '마커 감추기 ' 버튼을 클릭하면 호출되어 배열에 추가된 마커를 지도에서 삭제하는 함수.
      changeMarkers(type) {
        // console.log("changeMarkers: ", type);


        if (type === 'carpark' && this.getStore("isLogin") != 'true') {
          alert("로그인 후 이용 가능합니다.");
        } else {



          this.setMarkers(null);
          for (var i = 0; i < this.customOverlays.length; i++) {
            this.customOverlays[i].setMap(null);
          }

          var coffeeMenu = document.getElementById('coffeeMenu');
          var storeMenu = document.getElementById('storeMenu');
          var carparkMenu = document.getElementById('carparkMenu');

          // 커피숍 카테고리가 클릭됐을 때
          if (type === 'coffee') {

            // 커피숍 카테고리를 선택된 스타일로 변경하고
            coffeeMenu.className = 'menu_selected';

            // 편의점과 주차장 카테고리는 선택되지 않은 스타일로 바꿉니다
            storeMenu.className = '';
            carparkMenu.className = '';

            // 커피숍 마커들만 지도에 표시하도록 설정합니다
            this.setMarkers(this.map);

          } else if (type === 'store') { // 편의점 카테고리가 클릭됐을 때

            // 편의점 카테고리를 선택된 스타일로 변경하고
            coffeeMenu.className = '';
            storeMenu.className = 'menu_selected';
            carparkMenu.className = '';

            // 편의점 마커들만 지도에 표시하도록 설정합니다
            for (var i = 0; i < this.markers1.length; i++) {
              this.markers1[i].setMap(this.map);
            }

          } else if (type === 'carpark') { // 주차장 카테고리가 클릭됐을 때

            // 주차장 카테고리를 선택된 스타일로 변경하고
            coffeeMenu.className = '';
            storeMenu.className = '';
            carparkMenu.className = 'menu_selected';

            // 주차장 마커들만 지도에 표시하도록 설정합니다
            for (var i = 0; i < this.markers2.length; i++) {
              this.markers2[i].setMap(this.map);
            }
          }

        }

      },


      addScript() {
        const script = document.createElement('script');
        /* global kakao */
        scriptscript.onload = () => kakao.maps.load(this.initMap);
        script.src =
          'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=1ed68e01950511b4ad79ee177cc034a9&libraries=services,clusterer,drawing';
        document.head.appendChild(script);
      },

      getPointList() {
        http
          .get("/user/" + this.getStore("loginUser") + "/point/public")
          .then(response => {
            this.info = response.data.resvalue;
            // console.log("response.data.resvalue: ", response.data.resvalue);
            // console.log("info: ", this.info);
            if (response.data.resmsg == "success") {
              // console.log("getPointList public success");
              this.addPointList();
            }
          })
          .catch(() => {
            this.errored = true;
          })
          .finally(() => (this.loading = false));

        if (this.getStore("isLogin") == 'true') {
          http
            .get("/user/" + this.getStore("loginUser") + "/point")
            .then(response => {
              this.info = response.data.resvalue;
              // console.log("response.data.resvalue: ", response.data.resvalue);
              // console.log("info: ", this.info);
              if (response.data.resmsg == "success") {
                // console.log("getPointList private success");
                this.addPointList();
              }
            })
            .catch(() => {
              this.errored = true;
            })
            .finally(() => (this.loading = false));
        }
      },
      addPointList() {
        // console.log("퐁당 갯수", this.info.length);
        for (var i = 0; i < this.info.length; i++) {
          // console.log("퐁당퐁당", this.info[i].latitude, this.info[i].longitude, this.info[i].name, this.info[i].user_code);
          this.addMarker(new kakao.maps.LatLng(this.info[i].latitude, this.info[i].longitude), this.info[i].name, this
            .info[i].user_code, this.info[i].point_code);
        }
        // this.setMarkers(this.map);
      },


      settingOpenModal() {
        // console.log("modal go");

        // Get the modal
        this.modal = document.getElementById('myModal');
        this.modalNotice = document.getElementById('myModalNotice');

        this.modalNoticeWeather = document.getElementById('myModalNoticeWeather');

        this.modalDetail = document.getElementById('myModalDetail');


        // Get the button that opens the modal
        // this.btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        this.span = document.getElementsByClassName("close")[0];
        this.spanNotice = document.getElementsByClassName("close")[1];

        this.spanNoticeWeather = document.getElementsByClassName("close")[2];

        this.spanDetail = document.getElementsByClassName("close")[2];


        // When the user clicks on the button, open the modal 
        // this.btn.onclick = () => {
        //     this.modal.style.display = "block";
        // }

        // When the user clicks on <span> (x), close the modal
        this.span.onclick = () => {
          this.modal.style.display = "none";
          this.modalNotice.style.display = "none";
          this.modalDetail.style.display = "none";
        }
        this.spanNotice.onclick = () => {
          this.modal.style.display = "none";
          this.modalNotice.style.display = "none";
          this.modalDetail.style.display = "none";
        }
        this.spanDetail.onclick = () => {
          this.modal.style.display = "none";
          this.modalNotice.style.display = "none";
          this.modalDetail.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = (event) => {
          if (event.target == this.modal) {
            this.modal.style.display = "none";
          } else if (event.target == this.modalNotice) {
            this.modalNotice.style.display = "none";
          } else if (event.target == this.modalDetail) {
            this.modalDetail.style.display = "none";
          }
        }
      },
      insertPoint() {
        // console.log("insertPoint go", this.modalPoint.name);

        if (this.modalPoint.name == null || this.modalPoint.name == "") {
          alert("낚시포인트 이름을 입력해주세요.");
        }
        else if (this.modalPoint.description == null || this.modalPoint.description == "") {
          alert("낚시포인트 설명을 입력해주세요.");
        } else {
          http
            .post("/user/" + this.getStore("loginUser") + "/point", {
              user_code: this.getStore("loginUser"),
              name: this.modalPoint.name,
              description: this.modalPoint.description,
              latitude: this.modalPoint.latitude,
              longitude: this.modalPoint.longitude
            })
            .then(response => {
              // console.log("response.data.resmsg: ", response.data.resmsg);
              // console.log("response.data.resvalue: ", response.data.resvalue);

              // console.log("this.content: ", this.content);


              this.modal.style.display = "none";
              this.addMarker(new kakao.maps.LatLng(this.modalPoint.latitude, this.modalPoint.longitude), this
                .modalPoint.name, this.getStore("loginUser"), response.data.resvalue);
              this.modalPoint = [];

            })
            .catch(() => {
              this.errored = true;
            })
            .finally(() => {
              this.loading = false;
            });
        }
      },
      updatePoint() {
        // console.log("updatePoint go", this.modalDetailContent.point_code);
        if (this.modalDetailContent.name == null || this.modalDetailContent.name == "") {
          alert("낚시포인트 이름을 입력해주세요.");
        }
        else if (this.modalDetailContent.description == null || this.modalDetailContent.description == "") {
          alert("낚시포인트 설명을 입력해주세요.");
        } else {
          http
            .put("/user/" + this.modalDetailContent.user_code + "/point/" + this.modalDetailContent.point_code, {
              point_code: this.modalDetailContent.point_code,
              user_code: this.modalDetailContent.user_code,
              name: this.modalDetailContent.name,
              description: this.modalDetailContent.description,
              latitude: this.modalDetailContent.latitude,
              longitude: this.modalDetailContent.longitude
            })
            .then(response => {
              // console.log("response.data.resmsg: ", response.data.resmsg);
              // console.log("response.data.resvalue: ", response.data.resvalue);

              alert("낚시포인트 수정 성공!");
              this.modalDetail.style.display = "none";
              window.location.href = "/";
            })
            .catch(() => {
              this.errored = true;
              alert("낚시포인트 수정 실패!");
            })
            .finally(() => {
              this.loading = false;
            });
        }
      },
      searchCorona() {
        http2
          .get("http://api.corona-19.kr/korea/country/new/?serviceKey=45532e125b323908e79d68a19008a0400")
          .then((result) => {

          })
      },

      searchWeather(lati, longi) {
        // var BASE_URL = 'api.openweathermap.org/data/2.5/weather?lat={126.3314666}&lon={33.4587388888}&appid={abf9684bc5068a281e2e81db24abc4d8}';
        // console.log(lati);
        http2
          // .get("data/2.5/weather?lat=33.61&lon=127.81&appid=abf9684bc5068a281e2e81db24abc4d8")
          .get("/data/2.5/weather?lat=" + lati + "&lon=" + longi + "&appid=abf9684bc5068a281e2e81db24abc4d8")
          .then((result) => {
            // this.country = result.data.sys.country;
            // this.city = result.data.name;
            // this.view = true;
            // this.name = result.data.name;
            // this.content.innerHTML = '장소 : ' + result.data.name + ', ' + result.data.sys.country;
            // this.content.innerHTML += '<br> 날씨 : ' + result.data.weather[0].description;
            // this.content.innerHTML += '<br> 풍속 : ' + result.data.wind.speed + 'm/s';
            // this.content.innerHTML += '<br> 위도 : ' + result.data.coord.lat + ', 경도 : ' + result.data.coord.lon;


            this.weather.name = result.data.name;
            this.weather.country = result.data.sys.country;
            this.weather.description = result.data.weather[0].description;
            this.weather.speed = result.data.wind.speed;
            this.weather.lat = result.data.coord.lat;
            this.weather.lon = result.data.coord.lon;




            // console.log("result 찍히냐? : ", result);
          })
      },
      deletePoint() {
        // console.log("updatePoint go", this.modalDetailContent.point_code);

        http
          .delete("/user/" + this.modalDetailContent.user_code + "/point/" + this.modalDetailContent.point_code)
          .then(response => {
            // console.log("response.data.resmsg: ", response.data.resmsg);
            // console.log("response.data.resvalue: ", response.data.resvalue);

            alert("낚시포인트 삭제 성공!");
            this.modalDetail.style.display = "none";
            window.location.href = "/";
          })
          .catch(() => {
            this.errored = true;
            alert("낚시포인트 삭제 실패!");
          })
          .finally(() => {
            this.loading = false;
          });

      },
      movePoint() {
        // console.log("movePoint go", this.modalDetailContent.name);
        // console.log("movePoint go", this.modalDetailContent.latitude);
        // console.log("movePoint go", this.modalDetailContent.longitude);
        window.open('https://map.kakao.com/link/to/'+ this.modalDetailContent.name + ',' + this.modalDetailContent.latitude + ',' + this.modalDetailContent.longitude);
        // window.location.href = 'https://map.kakao.com/link/to/'+ this.modalDetailContent.name + ',' + this.modalDetailContent.latitude + ',' + this.modalDetailContent.longitude;
      },
      getModalDetailContent(point_code) {
        // console.log("getModalDetailContent go", point_code);

        http
          .get("/user/" + this.getStore("loginUser") + "/point/" + point_code)
          .then(response => {
            // console.log("response.data.resmsg: ", response.data.resmsg);
            // console.log("response.data.resvalue: ", response.data.resvalue);
            this.modalDetailContent = response.data.resvalue;
            this.modalDetail.style.display = "block";
          })
          .catch(() => {
            this.errored = true;
          })
          .finally(() => {
            this.loading = false;

            // this.modal.style.display = "none";
            // this.addMarker(new kakao.maps.LatLng(this.modalPoint.latitude, this.modalPoint.longitude), this
            //   .modalPoint.name, this.getStore("loginUser"), this.modalPoint.point_code);
            // this.modalPoint = [];
          });

      },
      setStore(key, value) {
        localStorage.setItem(key, value);
      },
      getStore(key) {
        return localStorage.getItem(key);
      }

    },
    components: {
      Card,
      MainFooter,
      [Button.name]: Button,
      [FormGroupInput.name]: FormGroupInput
    }
  }
</script>

<style scoped>
  /* The Modal (background) */
  .modal {
    display: none;
    /* Hidden by default */
    position: fixed;
    /* Stay in place */
    z-index: 1;
    /* Sit on top */
    left: 0;
    top: 0;
    width: 100%;
    /* Full width */
    height: 100%;
    /* Full height */
    overflow: auto;
    /* Enable scroll if needed */
    background-color: rgb(0, 0, 0);
    /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4);
    /* Black w/ opacity */

    padding: 15%;
  }

  /* Modal Content/Box */
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 50%;
    /* Could be more or less, depending on screen size */
  }

  /* The Close Button */
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  .map_wrap {
    width: 100%;
    top: 30px;
    left: 10px;
    z-index: 1;
    position: relative;
  }

  .weather_card {
    position: absolute;
    background-color: chocolate;
    z-index: 1;
  }

  .modes {
    position: absolute;
    top: 70px;
    left: 350px;
    z-index: 1;
  }

  .overlay {
    position: absolute;
    left: -50px;
    top: 0;
    width: 100px;
    height: 100px;
    background: #fff;
    border: 1px solie #ccc;
    border-radius: 5px;
    padding: 5px;
    font-size: 12px;
    text-align: center;
    white-space: pre;
    word-wrap: break-word;
  }

  #map {
    width: 100%;
    height: 100%;
  }










  /* .customoverlay {
    position: relative;
    bottom: 85px;
    border-radius: 6px;
    border: 1px solid #ccc;
    border-bottom: 2px solid #ddd;
    float: left;
  }

  .customoverlay:nth-of-type(n) {
    border: 0;
    box-shadow: 0px 1px 2px #888;
  }

  .customoverlay a {
    display: block;
    text-decoration: none;
    color: #000;
    text-align: center;
    border-radius: 6px;
    font-size: 14px;
    font-weight: bold;
    overflow: hidden;
    background: #d95050;
    background: #d95050 url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png) no-repeat right 14px center;
  }

  .customoverlay .title {
    display: block;
    text-align: center;
    background: #fff;
    margin-right: 35px;
    padding: 10px 15px;
    font-size: 14px;
    font-weight: bold;
  }

  .customoverlay:after {
    content: '';
    position: absolute;
    margin-left: -12px;
    left: 50%;
    bottom: -12px;
    width: 22px;
    height: 12px;
    background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png')
  } */






  /* https://codepen.io/colorlib/pen/rxddKy */

  @import url(https://fonts.googleapis.com/css?family=Roboto:300);

  .login-page {
    /* width: 360px;
  padding: 8% 0 0;
  margin: auto; */

    /* display: none; */
    /* Hidden by default */
    /* position: fixed; */
    /* Stay in place */
    /* z-index: 1; */
    /* Sit on top */
    /* left: 0; */
    /* top: 0; */
    /* padding: 20%; */
    /* width: 100%; */
    /* Full width */
    /* height: 100%; */
    /* Full height */
    /* overflow: auto; */
    /* Enable scroll if needed */
    background-color: rgb(0, 0, 0);
    /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4);
    /* Black w/ opacity */
  }

  .form {
    position: relative;
    z-index: 1;
    background: #FFFFFF;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 35px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }

  .form input {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  }

  .form textarea {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    min-height: 100px;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  }

  .form button {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: #4CAF50;
    width: 48%;
    border: 0;
    padding: 10px;
    color: #FFFFFF;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;

    margin: 2px;
  }

  .form .message {
    margin: 15px 0 0;
    color: #b3b3b3;
    font-size: 12px;
  }
















  #mapwrap {
    position: relative;
    overflow: hidden;
  }

  .marker_category,
  .marker_category * {
    margin: 0;
    padding: 0;
    color: #000;
  }

  .marker_category {
    position: absolute;
    overflow: hidden;
    top: 10%;
    left: 5%;
    width: 150px;
    /* height: 50px; */
    z-index: 1;
    border: 1px solid black;
    font-family: 'Malgun Gothic', '맑은 고딕', sans-serif;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
  }

  .marker_category .menu_selected {
    background: #FF5F4A;
    color: #fff;
    margin: 0 -1px;
  }

  .marker_category li {
    list-style: none;
    float: left;
    width: 50px;
    height: 100%;
    padding-top: 0;
    cursor: pointer;
    border-left: 1px solid #000000;
    border-bottom: 1px solid #000000;
  }

  .marker_category .ico_comm {
    display: block;
    margin: 0 auto 2px;
    width: 22px;
    height: 26px;
    background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/category.png') no-repeat;
  }

  .marker_category .ico_coffee {
    background-position: -10px 0;
  }

  .marker_category .ico_store {
    background-position: -10px -36px;
  }

  .marker_category .ico_carpark {
    background-position: -10px -72px;
  }

  .bor {
    border: 1px solid black;
  }
</style>