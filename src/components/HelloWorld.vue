<template>
  <div class="hello">
    <div class="icon" :style=" { 'background-image': backgroundImage } "></div>
    <h2 class="title">{{ $t('cc.title')  }}</h2>
    <div class="slogon">
       <!-- <h1 style="font-size: 16px; text-align: center;">{{ $t("message.hello") }}</h1> -->
      <h1>{{ $t("cc.slogon") }}</h1>
    </div>
    <!-- <i18n path="info" tag="p">
      <span place="limit">{{ changeLimit }}</span>
      <a place="action" :href="changeUrl">{{ $t('change') }}</a>
    </i18n> -->
    <p>
      CC 是一个存储平时会使用到的<span style="font-weight: bold;">内容片段</span>的工具。<br>
      可以实现录入经常需要使用到的内容，然后需要时复制出来，直接使用。<br>
      有<span style="font-weight: bold;">七种</span>颜色供用户<span style="font-weight: bold;">分类</span>使用。
    </p>
    <div>
      <span>@ <a href="http://www.leozhou.me" target="_blank">Leozhou</a></span>&nbsp;👈&nbsp;|&nbsp;👉&nbsp;<span class="feature-tab" :class="{ 'current-tab': isCurrentVersion}" @click="featureStatusChange(1)">{{$t('cc.currentVersion')}}: {{currentVersion}}</span>&nbsp;👈&nbsp;|&nbsp;👉&nbsp;<span class="feature-tab" :class="{ 'current-tab': isNextVersion }"  @click="featureStatusChange(2)">{{nextVersion}}</span>
    </div>
    <div>
      <div v-if="featureStatus == 1">
        <h3>👉 {{$t('cc.currentVersion')}}: {{currentVersion}} 👈</h3>
        <div class="features">
          <ul>
            <li>
              <span style="font-weight: bold;"> {{$t('cc.feature1-k')}} </span>：{{$t('cc.feature1-v')}}
            </li>
            <li>
              <span style="font-weight: bold;"> {{$t('cc.feature2-k')}} </span>：{{$t('cc.feature2-v')}}
            </li>
            <li>
              <span style="font-weight: bold;"> {{$t('cc.feature3-k')}} </span>：{{$t('cc.feature3-v')}}
            </li>
            <li>
              <span style="font-weight: bold;"> {{$t('cc.feature4-k')}} </span>：{{$t('cc.feature4-v')}}
            </li>
          </ul>
        </div>
      </div>
      <div v-else-if="featureStatus == 2">
        <h3>👉 {{nextVersion}} 👈</h3>
        <div class="features">
          <ul>
            <li>
              <span style="font-weight: bold;">{{$t('cc.next-feature1-k')}}</span>：{{$t('cc.next-feature1-v')}}
            </li>
            <li>
              <span style="font-weight: bold;">{{$t('cc.next-feature2-k')}}</span>：{{$t('cc.next-feature2-v')}}
            </li>
            <li>
              <span style="font-weight: bold;">{{$t('cc.next-feature3-k')}}</span>：{{$t('cc.next-feature3-v')}}
            </li>
          </ul>
        </div>
      </div>
      <div v-else>
        <h3>{{$t('cc.feature')}}</h3>
        <div class="features">
          <ul>
            <li>
              <span style="font-weight: bold;"> {{$t('cc.feature1-k')}} </span>：{{$t('cc.feature1-v')}}
            </li>
            <li>
              <span style="font-weight: bold;"> {{$t('cc.feature2-k')}} </span>：{{$t('cc.feature2-v')}}
            </li>
            <li>
              <span style="font-weight: bold;"> {{$t('cc.feature3-k')}} </span>：{{$t('cc.feature3-v')}}
            </li>
            <li>
              <span style="font-weight: bold;"> {{$t('cc.feature4-k')}} </span>：{{$t('cc.feature4-v')}}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="screenshot-pannel">
      <img class="screenshot mr-32 ml-32" src="http://img.leozhou.me/picGo/Simulator Screen Shot - iPhone 8 Plus - 2018-12-29 at 12.37.26.png"/>
      <img class="screenshot mr-32 ml-32" src="http://img.leozhou.me/picGo/Simulator Screen Shot - iPhone 8 Plus - 2018-12-29 at 12.34.53.png"/>
      <img class="screenshot mr-32 ml-32" src="http://img.leozhou.me/picGo/Simulator Screen Shot - iPhone 7 Plus - 2018-12-22 at 14.42.25.png"/>
    </div>
    <div class="download-pannel">
      <div class="btn-app-store-pannel">
        <a class="btn-app-store" target="_blank" href="https://itunes.apple.com/cn/app/cc-%E5%B8%B8%E7%94%A8%E5%86%85%E5%AE%B9%E7%9B%92/id1446261797"></a>
      </div>
      <img class="qr-code" src="http://img.leozhou.me/picGo/20190416223311.png"/>
      <a class="private-policy" href="http://www.leozhou.me/archives/1555402854185" target="_blank" rel="Privacy Policy">隐私政策</a>
      <a class="private-policy" href="http://www.leozhou.me/archives/1555403342618" target="_blank" rel="Privacy Policy">Privacy Policy</a>
      <div>
        <p>{{$t('cc.vote-for-me')}}：</p>
        <p><a target="_blank" href="https://www.producthunt.com/posts/cc-common-content-box">Product Hunt</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a target="_blank" href="http://next.36kr.com/posts/44558">NEXT</a> </p>
      </div>
    </div>
    <div>
      <p>@ <a href="http://www.leozhou.me" target="_blank">Leozhou</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function() {
    return {
      featureStatus: 0,
      currentVersion: '2.2',
      nextVersion: 'TODO'
    };
  },
  props: {
    iconImage: String
  },
  computed: {
    backgroundImage: function() {
      return "url(" + this.iconImage + ")";
    },
    isCurrentVersion: function() {
      return this.featureStatus === 1
    },
    isNextVersion: function() {
      return this.featureStatus === 2
    }
  },
  methods: {
    featureStatusChange: function(status) {
      if (this.featureStatus === status){
        this.featureStatus = 0
        return 
      }
      this.featureStatus = status
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: list-item;
  margin: 0 10px;
}

.icon {
  background: center center no-repeat;
  background-size: 80px 80px;
  height: 80px;
}

.feature-tab {
  cursor: pointer;
  moz-user-select: -moz-none; 
  -moz-user-select: none; 
  -o-user-select:none; 
  -khtml-user-select:none; 
  -webkit-user-select:none; 
  -ms-user-select:none; 
  user-select:none;
}

.current-tab {
  font-weight: bold;
}

.features {
  max-width: 450px;
  margin: 16px auto 10px;
}
.features ul {
  margin:0;
  padding:0
}
.features ul li{
  text-align: left;
}

.screenshot-pannel {
  display: block;
  background-color: #e0e0e0;
  min-height: 500px;
  margin-top: 40px;
  line-height: 500px;
}

.screenshot-pannel .screenshot {
  max-height: 420px;
  vertical-align: middle;
}

.download-pannel {
  margin-top: 40px;
}

.btn-app-store-pannel {

}

.btn-app-store {
  background: url(http://img.leozhou.me/picGo/btn-app-store@2x.png)  left center no-repeat;
  background-size: 135px 40px;
  width: 135px;
  height: 40px;
  display: inline-block;
  margin: 0 auto;
}

.qr-code {
  width: 135px;
  height: 135px;
}

.private-policy{
  margin-top: 10px;
  display: block;
}

.mr-32 {
  margin-right: 32px;
}

.ml-32 {
  margin-left: 32px;
}

</style>
