const index = document.getElementById("index");
// directive გადაემა html კომპონენტში
Vue.directive("logo", {
  bind: function (el, binding, vnode) {
    const header = el.querySelector(".header-logo");
    const logo = el.querySelector(".logo");
    const sound = el.querySelectorAll(".sound img");
    // ბურგერის სვგ სურათების path
    sound.forEach((elm) => {
      if (elm.classList.contains("on")) {
        elm.src = binding.value + "New-header-vue/header-img/active.svg";
      } else {
        elm.src = binding.value + "New-header-vue/header-img/mute.png";
      }
    });
    // ლოგოს path მიბმა for deploy
    header.href = binding.value;
    logo.src = binding.value + "New-header-vue/header-img/Header-logo.svg";
  },
});

// directive გადაემა html კომპონენტში (ხელ, ბუნ, მუს, ქვედა მარჯვენა კუთხეში შესაბამისი სურათის src-ს path დაგენერირება)
Vue.directive("image", {
  bind(el, binding, vnode) {
    vnode.context.$data.path = binding.value;
    vnode.context.$data.images.IT =
      binding.value + "New-header-vue/header-img/arts/IT-artwork.svg";
    vnode.context.$data.images.art =
      binding.value + "New-header-vue/header-img/arts/art-artwork.svg";
    vnode.context.$data.images.nature =
      binding.value + "New-header-vue/header-img/arts/nature-artwork.svg";
    vnode.context.$data.images.music =
      binding.value + "New-header-vue/header-img/arts/music-artwork.svg";
  },
});

//menu component ნავბარის კომპონენტი (ენის, ხმის და ბურგერის ცვლილებები)
Vue.component("appMenu", {
  data() {
    return {
      show: true,
      isShow: true,
      menuHover: false,
      langHover: false,
      soundHover: false,
      isDark: false,
    };
  },
  props: {

    isActive: {
      type: Boolean,
      required: true,
    },
    toggle: {
      type: Function,
      required: true,
    },
    info: {
      type: Function,
      required: true,
    },
  },
  created() {
    var theme = localStorage.getItem('theme')
    var reset__btn = document.getElementsByClassName("reset__btn");
    var completed__btn = document.getElementsByClassName("completed__btn");
    //btn index.html
    var new_btn_start = document.getElementsByClassName("new_btn-start");
    var newDesignSubjectQuestionItemTitle = document.getElementsByClassName("newDesign_subject_question_item-title");
    var algorithme_title_italic = document.getElementsByClassName("algorithme-title-italic");
    var newDesign_container_main_title = document.getElementsByClassName("newDesign_container_main_title");
    //index html დასაწყისი
    var bg_menu = document.getElementsByClassName("bg_menu");
    var app_start = document.getElementsByClassName("app-start");
    var app_sections = document.getElementsByClassName("app-sections");
    var app_select = document.getElementsByClassName("app-select");
    var circles_number_pink = document.getElementsByClassName("circles_number-pink");
    var top_bar = document.getElementsByClassName("top-bar");
    var img = $('.menu_box_passive').css('background-image');
    var nabiji = document.getElementsByClassName('newDesign_steps_item-img');


    if (theme == 'darck') {
      //დაწყება დასსრულება
      if (reset__btn[0]) {
        reset__btn[0].classList.add("reset__btn_black");
      }
      if (completed__btn[0]) {
        completed__btn[0].classList.add("completed__btn_black");
      }
      //btn index.html
      for (let i = 0; i < 16; i++) {
        if (new_btn_start[i]) {
          new_btn_start[i].classList.add("new_btn-start_black_btn");
        }
      }
      //ფეიჯინგი
      var element = document.body;
      element.style.backgroundColor = "black";
      this.isDark = true
      //ტეგები
      //P
      for (let i = 0; i < 8; i++) {
        if (newDesignSubjectQuestionItemTitle[i]) {
          newDesignSubjectQuestionItemTitle[i].classList.add("newDesign_subject_question_item-title_black_P");
        }
      }
      //H
      if (algorithme_title_italic[0]) {
        algorithme_title_italic[0].classList.add("newDesign_subject_question_item-title_black_P");
      }
      if (newDesign_container_main_title[0]) {
        newDesign_container_main_title[0].classList.add("newDesign_subject_question_item-title_black_P");
      }
      // for(let i=0; i<11; i++){
      //   if(dj_2_3vh[i]){
      //     dj_2_3vh[i].classList.add("newDesign_subject_question_item-title_black_P");
      //   }
      // }
      //index.html დასაწყისი
      if (bg_menu[0]) {
        bg_menu[0].classList.add("new_btn-start_black_btn");
      }
      if (app_start[0]) {
        app_start[0].classList.add("new_btn-start_black_btn");
      }
      if (app_sections[0]) {
        app_sections[0].classList.add("new_btn-start_black_btn");
      }
      if (app_select[0]) {
        app_select[0].classList.add("new_btn-start_black_btn");
      }
      for (let i = 0; i < 8; i++) {
        if (circles_number_pink[i]) {
          circles_number_pink[i].classList.add("new_btn-start_black_btn");
        }
      }
      if (top_bar[0]) {
        top_bar[0].classList.add("new_btn-start_black_btn");
      }


      window.addEventListener('DOMContentLoaded', () => {
        $('#prime').css('background-image', 'url(/el.resursebi-front/Vue-chatBot/img/chat01.png)');
        $('.lang-box_passive').css('background-image', 'url(/el.resursebi-front/New-header-vue/header-img/eng01.png)');
        $('.menu_box_passive').css('background-image', 'url(/el.resursebi-front/New-header-vue/header-img/menu01.png)');

        //botApp
        if (document.getElementById("Rectangle_1414-2")) {
          document.getElementById("Rectangle_1414-2").style.fill = "#000000";
        }
        if (document.getElementById("Path_12243-7")) {
          document.getElementById("Path_12243-7").style.fill = "#000000";
        }
        if (document.getElementById("Path_12243-8")) {
          document.getElementById("Path_12243-8").style.fill = "#000000";
        }
        if (document.getElementById("Path_12243-6")) {
          document.getElementById("Path_12243-6").style.fill = "#000000";
        }
        if (document.getElementById("Path_12243-10")) {
          document.getElementById("Path_12243-10").style.fill = "#000000";
        }
        if (document.getElementById("Path_12243-9")) {
          document.getElementById("Path_12243-9").style.fill = "#000000";
        }

        //switchDark
        document.getElementById('switchDarkId').checked = false;
        document.getElementById('switchDarkIdShadow').style.boxShadow = '1px 3px 6px #7fd1d8';


      });

      if (document.getElementById("1_kompTeq")) {
        document.getElementById("1_kompTeq").src = './img/slider/(blake)slide-illustration-c.svg'
      }
      if (document.getElementById("2_buneba")) {
        document.getElementById("2_buneba").src = './img/slider/(blake)slide-illustration-n.svg'
      }
      if (document.getElementById("3_xelovneba")) {
        document.getElementById("3_xelovneba").src = './img/slider/(blake)slide-illustration-a.svg'
      }
      if (document.getElementById("4_musika")) {
        document.getElementById("4_musika").src = './img/slider/(blake)slide-illustration-m.svg'
      }
      //nabiji
      for (let i = 0; i < nabiji.length; i++) {
        if (nabiji[i]) {
          nabiji[i].src = '../../img/icons/step_item(black).svg';
        }
      }


    }
  },
  methods: {
    myFunction() {
      var reset__btn = document.getElementsByClassName("reset__btn");
      var completed__btn = document.getElementsByClassName("completed__btn");
      var current__pagination = document.getElementsByClassName("current__pagination");
      var pagination__prev__btn = document.getElementsByClassName("pagination__prev__btn");
      var pagination__next__btn = document.getElementsByClassName("pagination__next__btn");
      var bg_menu = document.getElementsByClassName("bg_menu");
      var app_start = document.getElementsByClassName("app-start");
      //btn index.html
      var new_btn_start = document.getElementsByClassName("new_btn-start");
      //
      var app_select = document.getElementsByClassName("app-select");
      var app_sections = document.getElementsByClassName("app-sections");
      var class_box = document.getElementsByClassName("class_box");
      var circles_number_pink = document.getElementsByClassName("circles_number-pink");
      var circles_number_white = document.getElementsByClassName("circles_number-white");
      var top_bar = document.getElementsByClassName("top-bar");
      var img = $('.menu_box_passive').css('background-image');
      var dj_2_3vh = document.getElementsByClassName("dj-2_3vh");
      var Rectangle_1414_2 = document.getElementById("Rectangle_1414-2");
      var nabiji = document.getElementsByClassName('newDesign_steps_item-img');
      var appendChild_img = document.getElementsByClassName('appendChild--img');



      //ტეგები
      //P
      var newDesignSubjectQuestionItemTitle = document.getElementsByClassName("newDesign_subject_question_item-title");
      //H
      var algorithme_title_italic = document.getElementsByClassName("algorithme-title-italic");
      var newDesign_container_main_title = document.getElementsByClassName("newDesign_container_main_title");
      //??info-box
      var info_box = document.getElementsByClassName("info-box");

      var element = document.body;

      if (!this.isDark) {
        // console.log('shemodis111', appendChild_img[0].src);
        if(appendChild_img){
          for(let i=0; i<appendChild_img.length; i++){
            appendChild_img[i].src = appendChild_img[i].src.replace("white", "whiteDark");
          }
        }
        

        if(document.getElementById('nabijiType')){
          document.getElementById('nabijiType').src = "../../img/icons/davalebebi/nabiji-whiteDark.svg";
        }
        if(document.getElementById('savarjishoType')){
          document.getElementById('savarjishoType').src = "../../img/icons/davalebebi/savarjisho-whiteDark.svg";
        }
        if(document.getElementById('minishnebaType')){
          document.getElementById('minishnebaType').src = "../../img/icons/davalebebi/minishneba-whiteDark.svg";
        }
        if(document.getElementById('shualeduriType')){
          document.getElementById('shualeduriType').src = "../../img/icons/davalebebi/shualeduri-whiteDark.svg";
        }
        if(document.getElementById('kompleqsuriType')){
          document.getElementById('kompleqsuriType').src = "../../img/icons/davalebebi/kompleqsuri-whiteDark.svg";
        }
        //დაწყება დასრულება
        if (reset__btn[0]) {
          reset__btn[0].classList.add("reset__btn_black");
        }
        if (completed__btn[0]) {
          completed__btn[0].classList.add("completed__btn_black");
        }
        //btn index.html
        for (let i = 0; i < 16; i++) {
          if (new_btn_start[i]) {
            new_btn_start[i].classList.add("new_btn-start_black_btn");
          }
        }
        // ფეიჯინგი
        if (current__pagination[0]) {
          current__pagination[0].classList.add("pagination_black");
        }
        if (pagination__prev__btn[0]) {
          pagination__prev__btn[0].classList.add("pagination_black");
        }
        if (pagination__next__btn[0]) {
          pagination__next__btn[0].classList.add("pagination_black");
        }
        localStorage.setItem("theme", "darck");
        element.style.backgroundColor = "black";
        this.isDark = true
        //ტეგები
        //p
        for (let i = 0; i < 8; i++) {
          if (newDesignSubjectQuestionItemTitle[i]) {
            newDesignSubjectQuestionItemTitle[i].classList.add("newDesign_subject_question_item-title_black_P");
          }
        }
        // for(let i=0; i<11; i++){
        //   console.log('not defined')
        //   if(dj_2_3vh[i]){
        //     dj_2_3vh[i].classList.add("newDesign_subject_question_item-title_black_P");
        //   }
        // }
        //H
        if (algorithme_title_italic[0]) {
          algorithme_title_italic[0].classList.add("newDesign_subject_question_item-title_black_P");
        }
        if (newDesign_container_main_title[0]) {
          newDesign_container_main_title[0].classList.add("newDesign_subject_question_item-title_black_P");
        }
        //???
        if (info_box[0]) {
          info_box[0].classList.add("completed__btn_black");
        }
        //index.html დასაწყისი

        if (bg_menu[0]) {
          bg_menu[0].classList.add("new_btn-start_black_btn");
        }
        if (app_start[0]) {
          app_start[0].classList.add("new_btn-start_black_btn");
        }
        if (app_sections[0]) {
          app_sections[0].classList.add("new_btn-start_black_btn");
        }
        if (app_select[0]) {
          app_select[0].classList.add("new_btn-start_black_btn");
        }
        for (let i = 0; i < 8; i++) {
          if (circles_number_pink[i]) {
            circles_number_pink[i].classList.add("new_btn-start_black_btn");
          }
        }
        if (top_bar[0]) {
          top_bar[0].classList.add("new_btn-start_black_btn");
        }
        //botApp
        if (document.getElementById("Rectangle_1414-2")) {
          document.getElementById("Rectangle_1414-2").style.fill = "#000000";
        }
        if (document.getElementById("Path_12243-7")) {
          document.getElementById("Path_12243-7").style.fill = "#000000";
        }
        if (document.getElementById("Path_12243-8")) {
          document.getElementById("Path_12243-8").style.fill = "#000000";
        }
        if (document.getElementById("Path_12243-6")) {
          document.getElementById("Path_12243-6").style.fill = "#000000";
        }
        if (document.getElementById("Path_12243-10")) {
          document.getElementById("Path_12243-10").style.fill = "#000000";
        }
        if (document.getElementById("Path_12243-9")) {
          document.getElementById("Path_12243-9").style.fill = "#000000";
        }

        //icons
        $('#prime').css('background-image', 'url(/el.resursebi-front/Vue-chatBot/img/chat01.png)');
        $('.lang-box_passive').css('background-image', 'url(/el.resursebi-front/New-header-vue/header-img/eng01.png)');
        $('.menu_box_passive').css('background-image', 'url(/el.resursebi-front/New-header-vue/header-img/menu01.png)');
        $('.menu_box_active').css('background-image', 'url(/el.resursebi-front/New-header-vue/header-img/menu01.png)');
        //

        if (document.getElementById("3_xelovneba")) {
          console.log(document.getElementById("3_xelovneba").src)
        }
        if (document.getElementById("1_kompTeq")) {
          document.getElementById("1_kompTeq").src = './img/slider/(blake)slide-illustration-c.svg'
        }
        if (document.getElementById("2_buneba")) {
          document.getElementById("2_buneba").src = './img/slider/(blake)slide-illustration-n.svg'
        }
        if (document.getElementById("3_xelovneba")) {
          document.getElementById("3_xelovneba").src = './img/slider/(blake)slide-illustration-a.svg'
        }
        if (document.getElementById("4_musika")) {
          document.getElementById("4_musika").src = './img/slider/(blake)slide-illustration-m.svg'
        }
        if (document.getElementById("3_xelovneba")) {
          console.log(document.getElementById("3_xelovneba").src)
        }
        //switchDarkIdShadow
        document.getElementById('switchDarkIdShadow').style.boxShadow = '1px 3px 6px #7fd1d8';
        //nabiji
        for (let i = 0; i < nabiji.length; i++) {
          if (nabiji[i]) {
            nabiji[i].src = '../../img/icons/step_item(black).svg';
          }
        }

        //სარჩევი
        if (this.isActive && document.getElementById('mynetwork')) {
          initDark();
        }

      }
      else {
        if(appendChild_img){
          for(let i=0; i<appendChild_img.length; i++){
            appendChild_img[i].src = appendChild_img[i].src.replace("whiteDark", "white");
          }
        }
        if(document.getElementById('nabijiType')){
          document.getElementById('nabijiType').src = "../../img/icons/davalebebi/nabiji-white.svg";
        }
        if(document.getElementById('savarjishoType')){
          document.getElementById('savarjishoType').src = "../../img/icons/davalebebi/savarjisho-white.svg";
        }
        if(document.getElementById('minishnebaType')){
          document.getElementById('minishnebaType').src = "../../img/icons/davalebebi/minishneba-white.svg";
        }
        if(document.getElementById('shualeduriType')){
          document.getElementById('shualeduriType').src = "../../img/icons/davalebebi/shualeduri-white.svg";
        }
        if(document.getElementById('kompleqsuriType')){
          document.getElementById('kompleqsuriType').src = "../../img/icons/davalebebi/kompleqsuri-white.svg";
        }

        if (reset__btn[0]) {
          reset__btn[0].classList.remove("reset__btn_black");
        }
        if (completed__btn[0]) {
          completed__btn[0].classList.remove("completed__btn_black");
        }
        //btn index.html
        for (let i = 0; i < 16; i++) {
          if (new_btn_start[i]) {
            new_btn_start[i].classList.remove("new_btn-start_black_btn");
          }
        }
        if (current__pagination[0]) {
          current__pagination[0].classList.remove("pagination_black");
        }
        if (pagination__prev__btn[0]) {
          pagination__prev__btn[0].classList.remove("pagination_black");
        }
        if (pagination__next__btn[0]) {
          pagination__next__btn[0].classList.remove("pagination_black");
        }
        localStorage.setItem("theme", "light");
        element.style.background = "";
        this.isDark = false
        //ტეგები
        //P
        for (let i = 0; i < 8; i++) {
          if (newDesignSubjectQuestionItemTitle[i]) {
            newDesignSubjectQuestionItemTitle[i].classList.remove("newDesign_subject_question_item-title_black_P");
          }
        }
        // for(let i=0; i<11; i++){
        //   if(dj_2_3vh[i]){
        //     dj_2_3vh[i].classList.remove("newDesign_subject_question_item-title_black_P");
        //   }
        // }
        //H
        if (algorithme_title_italic[0]) {
          algorithme_title_italic[0].classList.remove("newDesign_subject_question_item-title_black_P");
        }
        if (newDesign_container_main_title[0]) {
          newDesign_container_main_title[0].classList.remove("newDesign_subject_question_item-title_black_P");
        }
        //???
        if (info_box[0]) {
          info_box[0].classList.remove("completed__btn_black");
        }
        //index.html დასაწყისი
        if (bg_menu[0]) {
          bg_menu[0].classList.remove("new_btn-start_black_btn");
        }
        if (app_start[0]) {
          app_start[0].classList.remove("new_btn-start_black_btn");
        }
        if (app_sections[0]) {
          app_sections[0].classList.remove("new_btn-start_black_btn");
        }
        if (app_select[0]) {
          app_select[0].classList.remove("new_btn-start_black_btn");
        }
        for (let i = 0; i < 8; i++) {
          if (circles_number_pink[i]) {
            circles_number_pink[i].classList.remove("new_btn-start_black_btn");
          }
        }
        if (top_bar[0]) {
          top_bar[0].classList.remove("new_btn-start_black_btn");
        }
        //bottApp
        if (document.getElementById("Rectangle_1414-2")) {
          document.getElementById("Rectangle_1414-2").style.fill = "";
        }
        if (document.getElementById("Path_12243-7")) {
          document.getElementById("Path_12243-7").style.fill = "";
        }
        if (document.getElementById("Path_12243-8")) {
          document.getElementById("Path_12243-8").style.fill = "";
        }
        if (document.getElementById("Path_12243-6")) {
          document.getElementById("Path_12243-6").style.fill = "";
        }
        if (document.getElementById("Path_12243-10")) {
          document.getElementById("Path_12243-10").style.fill = "";
        }
        if (document.getElementById("Path_12243-9")) {
          document.getElementById("Path_12243-9").style.fill = "";
        }
        //icons
        $("#prime").css("background-image", "");
        $('.lang-box_passive').css('background-image', '');
        $('.menu_box_passive').css('background-image', '');
        $('.menu_box_active').css('background-image', '');
        //
        if (document.getElementById("1_kompTeq")) {
          document.getElementById("1_kompTeq").src = './img/slider/slide-illustration-c.svg'
        }
        if (document.getElementById("2_buneba")) {
          document.getElementById("2_buneba").src = './img/slider/slide-illustration-n.svg'
        }
        if (document.getElementById("3_xelovneba")) {
          document.getElementById("3_xelovneba").src = './img/slider/slide-illustration-a.svg'
        }
        if (document.getElementById("4_musika")) {
          document.getElementById("4_musika").src = './img/slider/slide-illustration-m.svg'
        }

        //switchDarkIdShadow
        document.getElementById('switchDarkIdShadow').style.boxShadow = '1px 3px 6px #FADE7E';
        //nabiji
        for (let i = 0; i < nabiji.length; i++) {
          if (nabiji[i]) {
            nabiji[i].src = '../../img/icons/step_item.svg';
          }
        }

        //სარჩევი
        if (this.isActive && document.getElementById('mynetwork')) {
          init();
        }

      }

    }
  },
  template: `
    <div class="navbar navbar-expand-lg navbar-light bg-transparent">
        <a class="navbar-brand ml-auto header-logo">
            <img class="logo" src="" alt="logo">
        </a>
        <ul class="navbar-nav ml-auto">
         <li

          >
            <div>
            <label class="switchDark">
              <input id="switchDarkId" @click="myFunction()" type="checkbox" checked>
              <span id="switchDarkIdShadow" class="slider round" style="height: 31px;margin-top:7px"></span>
            </label>
            </div>
          </li>

          <!--ხმის ჩართვა/გამორთვა <li
            @click="isShow = !isShow"
            class="nav-item"
            @mouseover="soundHover = true"
            @mouseleave="soundHover = false"
          >
            <div
                class="sound_box sound"
                :class="[soundHover ? 'sound_box_active' : 'sound_box_passive']"
            >
                <img v-show="isShow" class="on animated.fast" :class="{flipInX: !isShow, flipInX: isShow}"  alt="sound">
                <img v-show="!isShow" class="off animated.fast" :class="{flipInX: isShow, flipInX: !isShow}" alt="sound">
            </div>-->
          </li>
          <!--ენის -->
          <!--<li
            @click="show = !show"
            class="nav-item"
            @mouseover="langHover = true"
            @mouseleave="langHover = false"
          >
            <div class="lang-box"
                :class="[langHover ? 'lang-box_active' : 'lang-box_passive']"
            >
            <transition enter-active-class="animated.fast flipInX" leave-active-class="animated.fast flipOutX" mode="out-in">
                <div v-if="show" class="text" key="eng">Eng</div>
                <div v-else class="text" key="geo">ქარ</div>
            </transition>
            </div>
          </li>-->
          <li
             class="nav-item"
             @mouseover="langHover = true"
             @mouseleave="langHover = false"
             @click="info"
          >
            <div class="lang-box d-flex justify-content-center align-items-center"
                :class="[langHover ? 'lang-box_active' : 'lang-box_passive']"
             >
             <div class="info">?</div>
            </div>
          </li>
          <li
              class="nav-item dropdown"
              @mouseover="menuHover = true"
              @mouseleave="menuHover = false"
          >
             <div class="menu_box"
                 :class="[menuHover || isActive ? 'menu_box_active' : 'menu_box_passive']"
             >
                <button type="button" class="hamburger hamburger--stand"
                        :class="[isActive ? 'is-active' : '']"
                        @click="toggle">
                    <span class="hamburger-box" >
                      <span class="hamburger-inner hamburger-inner_bg-blue" >
                          <span class="hamburger-inner__before hamburger-inner_bg-blue"></span>
                          <span class="hamburger-inner__after hamburger-inner_bg-blue"></span>
                      </span>
                    </span>
                </button>
             </div>
          </li>
        </ul>
   </div> `,
});

//Vue.component('appInfo')

//section component სექციის კომპონენტი (გენერირდება დინამიურად)
Vue.component("appSection", {
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
    isInfo: {
      type: Boolean,
    },
  },
  data() {
    return {
      darkMode: false,
    };
  },
  watch: {
    isActive() {
      var theme = localStorage.getItem('theme')
      if (theme == 'darck') {
        this.darkMode = true
      }
      else {
        this.darkMode = false
      }
    }
  },
  template: `
            <div>
                <section class="section_box">
                <!--აგნენერირებს შესაბამის კომპონენტს-->
                    <slot></slot>
                 </section>
                 <transition
                    enter-active-class="animated fadeIn"
                    leave-active-class="animated fadeOut"
                    :duration="550"
                    mode="out-in">
                    <div v-if="isActive || isInfo"
                    :class="[
                      isActive && darkMode? 'bg_menu new_btn-start_black_btn' : 'bg_menu',
                    ]"
                    ></div>
                </transition>
            </div>

    `,
});

//bar component - კომპონენტების ბარი ნავიგაცია
Vue.component("appBar", {
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
    dots: {
      type: Array,
    },
    currentTab: {
      type: String,
    },
  },
  data() {
    return {
      // title is object
      darkMode: false,
    };
  },
  watch: {
    isActive() {
      var theme = localStorage.getItem('theme')
      if (theme == 'darck') {
        this.darkMode = true
      }
      else {
        this.darkMode = false
      }
    }
  },
  template: `
        <transition
            enter-active-class="animated fadeInDown"
            leave-active-class="animated fadeOutUp"
            :duration="1000"
            mode="out-in">
                  <div v-if="isActive"
                  :class="[
                    isActive && darkMode? 'top-bar new_btn-start_black_btn' : 'top-bar',
                  ]">
                  <!--todo ბარის ნავიგაცია(4 სექციით ჯერ მხოლოდ 2 მუშაობს)
                      იკონკები გენერირდება დინამიურად კლასით (დასრულებულია)
                    -->
                        <button v-for="(dot, index) in dots"
                                :class="['icon-'+ index, dot.classActive ? dot.name : '']"
                                :disabled="dot.disable"
                                :key="dot.id"
                                @click="$emit('link-tab', dot.name)"
                                ><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span></button>
                  </div>
        </transition>
    `,
});
// info seqciis გენერირება
Vue.component("appInfo", {
  props: {
    path: {
      type: String,
      required: true,
    },
    isInfo: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  template: `<div class="row info-box" v-if="isInfo">
                   <div class="col-12">
                        <transition
                            enter-active-class="animated flipInX"
                            leave-active-class="animated fadeOut"
                            :duration="1000"
                            mode="out-in"
                            tag="div"
                            appear
                        >
                            <div class="row" v-if="currentPage === 1" :key="1">
                                <div class="col-9 m-auto">
                                     <p class="dj-2_3vh">ვებგვერდზე განთავსებული დამხმარე ელექტრონული რესურსები შექმნილია I-VI კლასის სასკოლო პროგრამის შესაბამისად და ე
                                     მსახურება სასწავლო პროცესში მოსწავლეთა ჩართულობის გაზრდას. ყოველი თემა მოიცავს რამდენიმე ნაბიჯსა და კომპლექსურ დავალებას.
                                     მოსწავლის მიზანია, ნაბიჯების გავლისას მოაგროვოს საკმარისი ცოდნა, რომელსაც გამოიყენებს საბოლოო, რამდენიმეკომპონენტიანი კომპლექსური დავალების შესასრულებლად.
                                     რესურსები მოიცავს სხვადასხვა თამაშსა და სახალისო აქტივობას. ვებგვერდზე ჩაშენებულია ჩეთბოტის ფანჯარა.
                                     მისი დახმარებით მოსწავლეებსა და მასწავლებლებს საშუალება აქვთ, გაესაუბრონ ხელოვნურ ინტელექტს, დასვან კითხვები რესურსების თემატიკაზე და მიიღონ პასუხები.</p>
                                </div>
                                <div class="col-10 m-auto">
                                    <h1 class="alk-san_2-6vh mt-5vh text-center">ელექტრონული საგანმანათლებლო რესურსების ძირითადი კომპონენტები</h1>
                                </div>
                                <div class="col-11 m-auto">
                                     <div class="row mt-5vh">
                                         <div class="col-1">
                                             <div class="element-box">
                                                 <img :src="path+'New-header-vue/header-img/step.png'" alt="step" class="img-fluid">
                                             </div>
                                         </div>
                                         <div class="col-10">
                                             <p class="dj-2_3vh"><span class="title-pink dj-2_3vh">ნაბიჯი</span> — შეადგენს ელექტრონული რესურსის ძირითად ნაწილს. ნაბიჯი მოიცავს მასალას, რომელიც კლასში მუშავდება,
                                             ის შედგება კონკრეტულ საგნობრივ საკითხებთან დაკავშირებული შინაარსობრივი ბლოკებისგან. ერთი ნაბიჯი შეიძლება განხორციელდეს ერთი ან რამდენიმე გაკვეთილის განმავლობაში.
                                             ნაბიჯიდან, თავის მხრივ, შეეგვილია, გადავიდეთ სავარჯიშოზე, მინიშნებაზე ან შუალედურ დავალებაზე.</p>
                                         </div>
                                     </div>
                                </div>
                            </div>
                            <div class="row" v-if="currentPage === 2" :key="2">
                                <div class="col-11 m-auto">
                                    <div class="row">
                                         <div class="col-1">
                                            <div class="element-box">
                                                <img :src="path+'New-header-vue/header-img/task.png'" alt="task" class="img-fluid">
                                            </div>
                                         </div>
                                         <div class="col-10">
                                            <p class="dj-2_3vh"><span class="title-pink dj-2_3vh">სავარჯიშო</span> — პატარა კომპიუტერული თამაში, რომელიც ერთი კონკრეტული ამოცანის ამოხსნაზე ან საკითხის შესწავლაზე არის ორიენტირებული.
                                            მაგალითად, შედგენილი ფერების შექმნა ძირითადი ფერებისგან. სავარჯიშო არის ელექტრონულად შესასრულებელი სამუშაო.</p>
                                         </div>
                                    </div>
                                </div>
                                <div class="col-11 m-auto">
                                    <div class="row mt-5vh">
                                         <div class="col-1">
                                            <div class="element-box">
                                                <img :src="path+'New-header-vue/header-img/intermediate.png'" alt="task" class="img-fluid">
                                            </div>
                                         </div>
                                         <div class="col-10">
                                            <p class="dj-2_3vh"><span class="title-pink dj-2_3vh">შუალედური დავალება</span> — მოყვება ნაბიჯს ან სავარჯიშოს. შუალედური დავალება ელექტრონულად შესასრულებელი სავარჯიშოსგან განსხვავებულია,
                                            გულისხმობს ღია ტიპის შეკითხვებს ან ისეთ აქტივობებს, რომლებიც არაელექტრონულ ფორმატში სრულდება.</p>
                                         </div>
                                    </div>
                                </div>
                                <div class="col-11 m-auto">
                                    <div class="row mt-5vh">
                                         <div class="col-1">
                                            <div class="element-box">
                                                <img :src="path+'New-header-vue/header-img/hint.png'" alt="task" class="img-fluid">
                                            </div>
                                         </div>
                                         <div class="col-10">
                                            <p class="dj-2_3vh"><span class="title-blue dj-2_3vh">მინიშნება</span> — ასრულებს ერთგვარი ინტერაქტიული ლექსიკონის ფუნქციას, რომელშიც ესა თუ ის საკითხი იქნება განმარტებული,
                                            მინიშნებული, მაგალითად, რომელია ძირითადი ფერები. სავარჯიშოსგან განსხვავებით აქ ბავშვი მხოლოდ ინფორმაციას მიიღებს.</p>
                                         </div>
                                    </div>
                                </div>
                                <div class="col-11 m-auto">
                                    <div class="row mt-5vh">
                                         <div class="col-1">
                                            <div class="element-box">
                                                <img :src="path+'New-header-vue/header-img/compl-task.png'" alt="task" class="img-fluid">
                                            </div>
                                         </div>
                                         <div class="col-10">
                                            <p class="dj-2_3vh"><span class="title-blue dj-2_3vh">კომპლექსური დავალება</span> — მოსდევს სხვა აქტივობებს და განთავსებულია ბოლოში. კომპლექსური დავალება არის რესურსის ძირითადი კომპონენტი,
                                             რომლის შესრულებისასაც მოსწავლეებმა აქტივობებისას მიღებული ცოდნა უნდა გააერთიანონ.</p>
                                         </div>
                                    </div>
                                </div>
                                <div class="col-11 m-auto">
                                    <div class="row mt-5vh">
                                         <div class="col-1">
                                            <div class="element-box">
                                                <img :src="path+'New-header-vue/header-img/video-inst.png'" alt="task" class="img-fluid">
                                            </div>
                                         </div>
                                         <div class="col-10">
                                            <p class="dj-2_3vh"><span class="title-blue dj-2_3vh">ვიდეო ინსტრუქცია</span><br/> <a class="dj-2_3vh" href="https://youtu.be/7P4U16oh07Y" target="_blank">https://youtu.be/7P4U16oh07Y</a></p>
                                         </div>
                                    </div>
                                </div>
                            </div>
                        </transition>
                   </div>
                   <div class="col-2 m-auto section_pagination">
                       <div class="d-flex justify-content-between align-items-center side-margin">
                           <div class="pagination__prev__btn" @click="currentPage--" v-if="currentPage !== 1">
                               <img alt="next" :src="path + '/img/icons/chevron-left-icon.svg'">
                           </div>
                           <div class="pagination__item d-flex justify-content-center align-items-center" v-if="currentPage !==1">
                               <div class="pagination__dot"></div>
                           </div>
                           <div class="flex align-items-center" id="pagination">
                               <div class="pagination__item">
                                   <div class="current__pagination" >{{ currentPage }}</div>
                               </div>
                           </div>
                           <div class="pagination__item d-flex justify-content-center align-items-center" v-if="currentPage !==2">
                               <div class="pagination__dot"></div>
                           </div>
                           <div class="pagination__next__btn" @click="currentPage++" v-if="currentPage !== 2">
                               <img alt="next" :src="path + 'img/icons/chevron-left-icon.svg'">
                           </div>
                       </div>
                   </div>
               </div>`,
});
//appStart საგნების ასარჩევი კომპონენტი
Vue.component("appStart", {
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
    trigger: {
      type: Function,
      required: true,
    },
    tabClass: String,
    images: Object,
  },
  data() {
    return {
      // title is object
      darkMode: false,
    };
  },
  created(){
    var theme = localStorage.getItem('theme')
      if (theme == 'darck') {
        this.darkMode = true
      }
      else {
        this.darkMode = false
      }
  },
  watch: {
    isActive() {
      var theme = localStorage.getItem('theme')
      if (theme == 'darck') {
        this.darkMode = true
      }
      else {
        this.darkMode = false
      }
    }
  },
  template: `
        <transition
            enter-active-class="animated slideInUp"
            leave-active-class="animated slideOutDown"
            :duration="1000"
            mode="out-in"
            appear>
                <div v-if="isActive" class="page-section"
                :class="[
                  isActive && darkMode? 'app-start new_btn-start_black_btn' : 'app-start',
                ]">
                    <div class="row">
                        <div class="col-3 main-lesson-start-cont">
                          <img alt="music" :src="images.music" class="main-lesson-start-img" />
                          <div class="new_btn-start-cont ">
                            <a @click="trigger('select', 'მუსიკა')"
                            :class="[
                              isActive && darkMode? 'new_btn-start new_btn-start_black_btn' : 'new_btn-start',
                            ]"
                            >მუსიკა</a>
                          </div>
                        </div>
                        <div class="col-3 main-lesson-start-cont">
                          <img alt="art" :src="images.art" class="main-lesson-start-img" />
                          <div class="new_btn-start-cont">
                            <a @click="trigger('select', 'ხელოვნება')"
                            :class="[
                              isActive && darkMode? 'new_btn-start new_btn-start_black_btn' : 'new_btn-start',
                            ]"
                            >ხელოვნება</a>
                          </div>
                        </div>
                        <div class="col-3 main-lesson-start-cont">
                          <img alt="nature" :src="images.nature" class="main-lesson-start-img" />
                          <div class="new_btn-start-cont">
                            <a @click="trigger('select', 'ბუნება')"
                            :class="[
                              isActive && darkMode? 'new_btn-start new_btn-start_black_btn' : 'new_btn-start',
                            ]"
                            >ბუნება</a>
                          </div>
                        </div>
                        <div class="col-3 main-lesson-start-cont">
                          <img alt="computer" :src="images.IT" class="main-lesson-start-img" />
                          <div class="new_btn-start-cont">
                            <a @click="trigger('select', 'კომპიუტერული ტექნოლოგიები')"
                            :class="[
                              isActive && darkMode? 'new_btn-start new_btn-start_black_btn' : 'new_btn-start',
                            ]"
                            >კომპიუტერული ტექნოლოგიები</a>
                          </div>
                        </div>
                     </div>
                </div>
        </transition>
    `,
});

// appSelect component  გაკვეთილების ასარჩევი კომპონენტო
Vue.component("appSelect", {
  props: {
    tabClass: String,
    activeClass: String,
    images: Object,
    path: String,
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      darkMode: false,
      // title is object
      class: title,
      classID: 2,
      activeItem: 1,
      pagination: true,
      currentPage: 1,
      pageSize: 12,
      isPagination: false,
    };
  },
  computed: {
    titleCheck() {
      if (this.activeClass === "მუსიკა") {
        return this.class.music;
      } else if (this.activeClass === "ხელოვნება") {
        return this.class.art;
      } else if (this.activeClass === "ბუნება") {
        return this.class.nature;
      } else {
        if (
          this.classID === 5 ||
          this.classID === 6 ||
          this.classID === 4 ||
          this.classID === 3
        ) {
          this.isPagination = true;

          if (this.currentPage < 1) {
            this.currentPage = 1;
          } else if (this.currentPage > this.totalPages) {
            this.currentPage = this.totalPages;
          }

          let startIndex = (this.currentPage - 1) * this.pageSize;
          let endIndex = Math.min(startIndex + this.pageSize, this.totalItems);

          return this.class["IT_" + this.classID].slice(startIndex, endIndex);
        }
        // 5-6 კლასების გარდა დაბრუნდეს ჩვეულებრივად სრული სიგრძის მასივი
        else {
          return this.class["IT_" + this.classID];
        }
      }
    },
    artImage() {
      if (this.activeClass === "მუსიკა") {
        return this.images.music;
      } else if (this.activeClass === "ხელოვნება") {
        return this.images.art;
      } else if (this.activeClass === "ბუნება") {
        return this.images.nature;
      }
    },
    // 1-12 გაკვეთილი <---> 12-24 გაკვეთილის და გადასაცვლელი ლურჯი ღილაკის გვერდის რენტერინგი
    totalPages() {
      return Math.ceil(this.class["IT_" + this.classID].length / this.pageSize);
    },
    totalItems() {
      return this.class["IT_" + this.classID].length;
    },
  },
  methods: {
    classChoose(val) {
      this.classID = val;
      this.currentPage = 1;
      this.activeItem = val - 1;
      this.pagination = true;
    },
  },
  created() {
    var theme = localStorage.getItem('theme')
    if (theme == 'darck') {
      this.darkMode = true
    }
    else {
      this.darkMode = false
    }
  },
  template: `
        <transition
            enter-active-class="animated slideInUp"
            leave-active-class="animated slideOutDown"
            :duration="1000"
            mode="out-in"
            appear
        >

            <div v-if="isActive" class="page-section"
                :class="[
                  isActive && darkMode? 'app-select new_btn-start_black_btn' : 'app-select',
                ]">
                <div class="row">
                    <div class="col-12">
                        <h5 class="app-select_title">{{ activeClass }}</h5>
                    </div>
                    <div v-if="activeClass === 'კომპიუტერული ტექნოლოგიები'" class="col-12 mt-5">
                    <div class="row">
                            <div class="col-4">
                                <div class="class_box d-flex justify-content-between">
                                <!--:class="{ active: number === activeItem }"-->
                                    <div class="circles d-flex justify-content-center align-items-center"
                                        @click="classChoose(number+1)"
                                        v-for="number in 5"
                                        :key="number"
                                        >
                                         <transition
                                             enter-active-class="animated flipInX"
                                             leave-active-class="animated flipOutY"
                                             :duration="750"
                                             mode="out-in"
                                             tag="div"
                                             appear
                                             class="circle_wrapper">
                                             <div class="circles_number-pink" v-if="number !== activeItem" key="pink">
                                                 <img :src="path + 'New-header-vue/header-img/pink_'+ (number + 1) +'.svg'" :alt="'pink_' + (number+1)" class="img-fluid">
                                             </div>
                                             <div class="circles_number-white" v-else key="white">
                                                 <img :src="path + 'New-header-vue/header-img/white_'+ (number + 1) +'.svg'" :alt="'white_' + (number+1)" class="img-fluid">
                                             </div>
                                             </transition>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 mt-5">
                        <div class="row">
                            <div v-for="title in titleCheck" :key="title.id" class="col-4 app-select_box">
                                <div class="row">
                                    <div class="col-10 app-select_box-content d-flex justify-content-center align-items-center">
                                         <transition
                                              enter-active-class="animated fadeIn"
                                              leave-active-class="animated fadeOut"
                                              :duration="550"
                                              mode="out-in">
                                              <a :href="path + title.link" :key="title.name">{{ title.name }}</a>
                                         </transition>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <transition  enter-active-class="animated fadeIn"
                                     leave-active-class="animated fadeOut"
                                     :duration="550"
                                     mode="out-in">
                            <div v-if="isPagination" class="class-pagination d-flex justify-content-center align-items-center">
                                <div v-if="currentPage !== 1" @click="currentPage--" class="prev arrow-left-open"></div>

                                <div @click="currentPage = item" v-for="item in totalPages" :key="item" :class="[item === currentPage ? 'current' : 'dot' ]">
                                    <p>{{ item }}</p>
                                </div>

                                <div v-if="currentPage !== totalPages" @click="currentPage++" class="next arrow-right-open"></div>
                            </div>
                        </transition>
                    </div>
                </div>
                <div class="row app-select_artwork">
                    <div class="col-12">
                        <div v-if="activeClass !== 'კომპიუტერული ტექნოლოგიები'" class="app-select_artwork_image-box ml-auto">
                            <img :src="artImage" alt="art">
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        `,
});

// appLinks ნავიგაცია კომპონენტების 'რუკით'
Vue.component("appLinks", {
  props: {
    tabClass: String,
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      activeClass: {
        title: "",
        class: "",
      },
      itClass: "",
      activeTitle: "",
    };
  },
  async mounted() {
    const data = await $.getJSON("data.json");
    let classId = parseInt(data.lesson_id);
    let Url = window.location.href.toLowerCase();
    if (Url.includes("art-class")) {
      this.activeClass.title = "ხელოვნება";
      this.activeClass.class = "art";
    } else if (Url.includes("nature-class")) {
      this.activeClass.title = "ბუნება";
      this.activeClass.class = "nature";
    } else if (Url.includes("music-class")) {
      this.activeClass.title = "მუსიკა";
      this.activeClass.class = "music";
    } else {
      this.activeClass.title = "კომპიუტერული მეცნიერებები";
      this.activeClass.class = "IT";
      if (Url.includes("class-2")) this.itClass = "2";
      if (Url.includes("class-3")) this.itClass = "3";
      if (Url.includes("class-4")) this.itClass = "4";
      if (Url.includes("class-5")) this.itClass = "5";
      if (Url.includes("class-6")) this.itClass = "6";
    }

    let classList;
    if (this.activeClass.class !== "IT") {
      classList = title[this.activeClass.class];
    } else {
      classList = title[this.activeClass.class + "_" + this.itClass];
    }

    const activeClassData = classList.filter(
      (classList) => classList.id === classId
    );

    this.activeTitle = activeClassData[0].name;

    // ჯეისონიდან განსხვავებული ტიპების ამოღება
    this.dataTypes = [...new Set(data.pages.map((item) => item.type))].filter(
      (x) => x !== null
    );

    var theme = localStorage.getItem('theme')
    if (theme == 'darck') {
      initDark();
    }
    else {
      init();
    }
    // init();
  },
  computed: {
    itClassText() {
      if (this.itClass !== "") return this.itClass + " კლასი > ";
    },
  },
  updated() {
    var theme = localStorage.getItem('theme')
    if (theme == 'darck') {
      initDark();
    }
    else {
      init();
    }
    // init();
  },
  template: `
        <div>
        <transition
              enter-active-class="animated fadeIn"
              leave-active-class="animated fadeOut"
              :duration="500"
              mode="out-in"
              appear>
              <p v-if="isActive" key="title"  class="app-select_title mt-3vh">{{ activeClass.title  }} > {{itClassText}}<span>{{activeTitle}}</span></p>
          </transition>
          <transition
              enter-active-class="animated slideInUp"
              leave-active-class="animated slideOutDown"
              :duration="1000"
              mode="out-in"
              appear>
              <div v-if="isActive" :class="'app-links'" class="page-section">
                  <div id="mynetwork" ref="vis"></div>
              </div>
          </transition>
        </div>
        `,
});

// appSections ნავიგაცია კომპონენტების ღილაკებით
Vue.component("appSections", {
  props: {
    tabClass: String,
    isActive: {
      type: Boolean,
      required: true,
    },
    images: Object,
  },
  data() {
    return {
      darkMode: false,
      activeClass: {
        title: "",
        class: "",
      },
      itClass: "",
      activeTitle: "",
      fullData: null,
      isTypes: true,
      dataTypes: [],
      dataByType: [],
      typeInfo: {
        1: {
          id: 'nabijiType',
          text: "ნაბიჯი",
          img: "../../img/icons/davalebebi/nabiji-white.svg",
        },
        2: {
          id: 'savarjishoType',
          text: "სავარჯიშო",
          img: "../../img/icons/davalebebi/savarjisho-white.svg",
        },
        3: {
          id: 'minishnebaType',
          text: "მინიშნება",
          img: "../../img/icons/davalebebi/minishneba-white.svg",
        },
        4: {
          id: 'shualeduriType',
          text: "შუალედური დავალება",
          img: "../../img/icons/davalebebi/shualeduri-white.svg",
        },
        5: {
          id: 'kompleqsuriType',
          text: "კომპლექსური დავალება",
          img: "../../img/icons/davalebebi/kompleqsuri-white.svg",
        },
      },
    };
  },
  async mounted() {
    const data = await $.getJSON("data.json");
    this.fullData = data;
    let classId = parseInt(data.lesson_id);
    let Url = window.location.href.toLowerCase();
    if (Url.includes("art-class")) {
      this.activeClass.title = "ხელოვნება";
      this.activeClass.class = "art";
    } else if (Url.includes("nature-class")) {
      this.activeClass.title = "ბუნება";
      this.activeClass.class = "nature";
    } else if (Url.includes("music-class")) {
      this.activeClass.title = "მუსიკა";
      this.activeClass.class = "music";
    } else {
      this.activeClass.title = "კომპიუტერული მეცნიერებები";
      this.activeClass.class = "IT";
      if (Url.includes("class-2")) this.itClass = "2";
      if (Url.includes("class-3")) this.itClass = "3";
      if (Url.includes("class-4")) this.itClass = "4";
      if (Url.includes("class-5")) this.itClass = "5";
      if (Url.includes("class-6")) this.itClass = "6";
    }

    let classList;
    if (this.activeClass.class !== "IT") {
      classList = title[this.activeClass.class];
    } else {
      classList = title[this.activeClass.class + "_" + this.itClass];
    }
    console.log(classId);
    const activeClassData = classList.filter(
      (classList) => classList.id === classId
    );

    this.activeTitle = activeClassData[0].name;

    // ჯეისონიდან განსხვავებული ტიპების ამოღება
    this.dataTypes = [...new Set(data.pages.map((item) => item.type))].filter(
      (x) => x !== null && !x.ignore
    );
  },
  created(){
    var theme = localStorage.getItem('theme')
      if (theme == 'darck') {
        this.typeInfo[1].img = '../../img/icons/davalebebi/nabiji-whiteDark.svg';
        this.typeInfo[2].img = '../../img/icons/davalebebi/savarjisho-whiteDark.svg';
        this.typeInfo[3].img = '../../img/icons/davalebebi/minishneba-whiteDark.svg';
        this.typeInfo[4].img = '../../img/icons/davalebebi/shualeduri-whiteDark.svg';
        this.typeInfo[5].img = '../../img/icons/davalebebi/kompleqsuri-whiteDark.svg';

        this.darkMode = true
      }
      else {
        this.darkMode = false
      }
  },
  watch: {
    isTypes(newValue, oldValue) {
      if (this.isTypes) {
        // თუ უკან დაბრუნებას დააჭირა გაწმინდოს მსავასი ტიპების მასივი
        this.dataByType = [];
      }
    },
    isActive() {
      console.log('watch', this.darkMode)
      var theme = localStorage.getItem('theme')
      if (theme == 'darck') {
        this.darkMode = true
      }
      else {
        this.darkMode = false
      }
    }
  },
  computed: {
    itClassText() {
      if (this.itClass !== "") return this.itClass + " კლასი > ";
    },
    typeIteration() {
      if (this.isTypes) {
        return this.dataTypes;
      } else {
        return this.dataByType;
      }
    },
  },
  methods: {
    getSimilarTypes(type) {
      // მსგავსი ტიპების ამოზება ჯეისონ ფაილიდან
      let data = this.fullData.pages.filter((item) => item.type === type);

      var firstEl = 0;
      var secondEl = 1;

      for (let i = 0; i < data.length; i++) {
        //პირველი ელემენტის შენახვა
        firstEl = data[i].number;
        // თუ პირველი ელემენტის number არ ემთხვევა secondEl + 1 , secondEl გავუტოლოდ ელემენტის number
        if (data[i].number !== secondEl + 1) {
          secondEl = data[i].number;
          this.dataByType.push(data[i]);
        }
      }

      this.isTypes = false;
    },
    goToPage(page) {
      window.location = page + ".html";
    },
  },
  template: `
        <transition
            enter-active-class="animated slideInUp"
            leave-active-class="animated slideOutDown"
            :duration="1000"
            mode="out-in"
            appear>
            <div v-if="isActive" class="page-section"
                :class="[
                  isActive && darkMode? 'app-sections new_btn-start_black_btn' : 'app-sections',
                ]">
                <transition
                  enter-active-class="animated fadeIn"
                  leave-active-class="animated fadeOut"
                  :duration="500"
                  mode="out-in"
                  appear>
                  <p v-if="isTypes" key="title"  class="app-select_title">{{ activeClass.title  }} > {{itClassText}}<span>{{activeTitle}}</span></p>
                  <p v-else key="back"  class="app-select_title" @click="isTypes = !isTypes">< უკან</p>
                </transition>
                <transition
                  enter-active-class="animated fadeIn"
                  leave-active-class="animated slideOutDown"
                  :duration="500"
                  mode="out-in"
                  appear>
                    <div id="tableOfContentTwo" class="d-flex" v-if="isTypes" key="5">
                      <div class="appendChild--div" v-for="item in typeIteration" :key="item" @click="getSimilarTypes(item)">
                        <img :id='typeInfo[item].id' class="appendChild--img" :src="typeInfo[item].img"/>
                        <span>{{typeInfo[item].text}}</span>
                      </div>
                    </div>
                    <div id="tableOfContentTwo" v-else key="4">
                      <div class="appendChild--div" v-for="(item, index) in dataByType" :key="index" @click="goToPage(item.number)">
                      <img class="appendChild--img" :src="typeInfo[item.type].img"/>
                      <span>{{typeInfo[item.type].text}} {{index + 1 }}</span>
                      </div>
                    </div>
                </transition>
            </div>
        </transition>
        `,
});

//Vue declaration
var app = new Vue({
  el: "#app",
  data: {
    isActive: false,
    link: "start",
    path: "",
    images: {
      IT: "New-header-vue/header-img/arts/IT-artwork.svg",
      art: "New-header-vue/header-img/arts/art-artwork.svg",
      nature: "New-header-vue/header-img/arts/nature-artwork.svg",
      music: "New-header-vue/header-img/arts/music-artwork.svg",
    },
    dots: [
      {
        name: "start",
        id: 0,
        disable: false,
        classActive: true,
      },
      {
        name: "select",
        id: 1,
        disable: true,
        classActive: false,
      },
      {
        name: "links",
        id: 2,
        disable: true,
        classActive: false,
      },
      {
        name: "sections",
        id: 3,
        disable: true,
        classActive: false,
      },
    ],
    activeClass: "",
    isInfo: false,
  },
  //trigger menu button & menu panels
  methods: {
    toggle() {
      this.isActive = !this.isActive;
      this.dots.forEach((dot) => {
        if (dot.id === 0 && !this.isActive) {
          dot.disable = false;
          dot.classActive = true;

          this.link = "start";
          this.activeClass = "";
          this.isInfo = false;
        }
        if (dot.id === 1 && !this.isActive) {
          dot.disable = true;
          dot.classActive = false;
        }
        if (!index && dot.id == 2) {
          dot.disable = false;
          dot.classActive = false;

          this.link = "links";
          this.activeClass = "";
          this.isInfo = false;
        }
        if (!index && dot.id == 3) {
          dot.disable = false;
          dot.classActive = false;
        }
      });
    },
    info() {
      this.isInfo = !this.isInfo;
      this.link = "info";
      this.isActive = false;
    },

    /*
          -- გაკვეთილების სექციის ჩატვირთვა data(დაგაეცემა, თემები: ხელ. მუს. ბუნ. კომპ.)
          -- this.link ააქტიურებს დინამიური კომპონენტების ჩამტვირთველ კომპონენტს
          -- გახდეს აქტიური შესაბამისი dot
        */
    trigger(val, data) {
      this.activeClass = data;
      this.link = "select";
      this.dots.forEach((dot) => {
        if (dot.name === val) {
          dot.disable = false;
          dot.classActive = true;
        } else {
          dot.classActive = false;
        }
      });
    },
  },
  computed: {
    // აგენერირებს პომპონენტებს დინამიურად
    currentTabComponent() {
      this.dots.forEach((dot) => {
        dot.classActive = dot.name === this.link.toLowerCase();
      });
      return "app-" + this.link.toLowerCase();
    },
  },
});

//ვუს ცვლადების შეცვლა სლაიდერზე კლიკისას
function startPage(val) {
  app.$data.link = "select"; // ააქტიურებს შესაბამის კომპონენტს
  app.$data.isActive = true; // ააქტიურებს მენიუს
  app.$data.activeClass = val; // გადაეცემა საგნების სახელები (ბუნება, ხელოვნება, მუსიკა, კომპ.)
}

// გაკვეთილიების სათაურები
let title = {
  music: [
    {
      id: 1,
      name: "ქალაქისა და სოფლის ხმები",
      link: "Music-Class/voices-1/1.html",
    },
    {
      id: 2,
      name: "ქალაქის ხმები",
      link: "Music-Class/city-voices-2/1.html",
    },
    {
      id: 3,
      name: "გავიგნოთ გზა ხმებით",
      link: "Music-Class/findWayBySound-3/1.html",
    },
    {
      id: 4,
      name: "ვსეირნობთ მუსიკალურ ქალაქში",
      link: "Music-Class/Walk-in-the-city-4/1.html",
    },
    {
      id: 5,
      name: "ჩემი ცხოვრების ერთი დღე",
      link: "Music-Class/One-day-5/1.html",
    },
    {
      id: 6,
      name: "შევქმნათ ხმაურისგან მუსიკა",
      link: "Music-Class/Create-music-from-noise-6/1.html",
    },
    {
      id: 7,
      name: "შევქმნათ გადაცემის ქუდი",
      link: "Music-Class/Create-broadcast-hat-7/1.html",
    },
    {
      id: 8,
      name: "შევქმნათ გადაცემის აუდიო ანონსი",
      link: "Music-Class/Create-broadcast-audio-8/1.html",
    },
    {
      id: 9,
      name: "გამოვიყენოთ მუსიკა თამაშისთვის",
      link: "Music-Class/Game-music-9/1.html",
    },
    {
      id: 10,
      name: "შევარჩიოთ ფონური მუსიკა",
      link: "Music-Class/Choose-background-music-10/1.html",
    },
    {
      id: 11,
      name: "მუსიკა ანიმაციასა და საყმაწვილო კინოში",
      link: "Music-Class/Music-in-animation-and-cinema-11/1.html",
    },
    {
      id: 12,
      name: " შევქმნათ საუნდტრეკი ანიმაციური ფილმისთვის",
      link: "Music-Class/Create-animation-sountrack-12/1.html",
    },
  ],
  art: [
    {
      id: 1,
      name: "ფერებით მოთხრობილი ამბავი",
      link: "Art-Class/color_story/1.html",
    },
    {
      id: 2,
      name: "მშვიდი და ბობოქარი",
      link: "Art-Class/Calm_&_stormy/1.html",
    },
    {
      id: 3,
      name: "ტყე",
      link: "Art-Class/Forest/1.html",
    },
    {
      id: 4,
      name: "ჯადოსნური ქვეყანა",
      link: "Art-Class/Magic-world/1.html",
    },
    {
      id: 5,
      name: "თავგადასავალი",
      link: "Art-Class/Adventure/1.html",
    },
    {
      id: 6,
      name: "პეიზაჟი",
      link: "Art-Class/Landscape-6/1.html",
    },
    {
      id: 7,
      name: "ქალაქი",
      link: "Art-Class/City-07/1.html",
    },
    {
      id: 8,
      name: 'პლაკატი "გადავარჩინოთ ბუნება"',
      link: "Art-Class/rescue_nature_08/1.html",
    },
    {
      id: 9,
      name: "მე და ჩემი მეგობრები",
      link: "Art-Class/friends_09/1.html",
    },
    {
      id: 10,
      name: "ჩვეულებრივი და არაჩვეულებრივი ნივთები",
      link: "Art-Class/items-10/1.html",
    },
    {
      id: 11,
      name: "ყოველდღიური ამბები",
      link: "Art-Class/daily-news-11/1.html",
    },
    {
      id: 12,
      name: "ვირტუალური გამოფენა",
      link: "Art-Class/VR_exhibition/1.html",
    },
  ],
  nature: [
    {
      id: 1,
      name: "საშიში სათამაშოები",
      link: "Nature-Class/dangerous-toys/1.html",
    },
    {
      id: 2,
      name: "უხილავი ძალები",
      link: "Nature-Class/invisible_forces/1.html",
    },
    {
      id: 3,
      name: "რატომ იცვალა ტყემ ფერი?",
      link: "Nature-Class/Forest-colors/1.html",
    },
    {
      id: 4,
      name: "რატომ მოიწყინა ჩემმა ყვავილმა",
      link: "Nature-Class/The-living-world-4/1.html",
    },
    {
      id: 5,
      name: "სად დაიმალა მზე?",
      link: "Nature-Class/Where-sun-goes/1.html",
    },
    {
      id: 6,
      name: "შეიძლება ზაფხული ზამთარში იყოს?",
      link: "Nature-Class/Summer-in-winter/1.html",
    },
    {
      id: 7,
      name: "რატომ არის ბრუცა ბრმა?",
      link: "Nature-Class/Bruca-07/1.html",
    },
    {
      id: 8,
      name: "თეთრი - ვარდისფერი ფლამინგო",
      link: "Nature-Class/flamingo-08/1.html",
    },
    {
      id: 9,
      name: "დედამიწის გარშემო 80 დღეზე სწრაფად",
      link: "Nature-Class/around-world-09/1.html",
    },
    {
      id: 10,
      name: "რატომ არის ანას ქურთუკი ძალიან თბილი?",
      link: "Nature-Class/coat-10/1.html",
    },
    {
      id: 11,
      name: "როგორ ვაჯობოთ ბიჭებს „შერკინებაში?”",
      link: "Nature-Class/sport/1.html",
    },
    {
      id: 12,
      name: "გვინდა თოვლი დაბადების დღეზე!",
      link: "Nature-Class/snow-12/1.html",
    },
  ],
  IT_2: [
    {
      id: 1,
      name: "პირობითი ნიშნების ენა",
      link: "Computer-Science/Class-2/conditional-signs-1/1.html",
    },
    {
      id: 2,
      name: "პირობითი ნიშნები ჩვენ ირგვლივ",
      link: "Computer-Science/Class-2/marks-2/1.html",
    },
    {
      id: 3,
      name: "ნაწილი და მთელი",
      link: "Computer-Science/Class-2/part&whole-3/1.html",
    },
    {
      id: 4,
      name: ",,ციკლები” ჩვენს ცხოვრებაში",
      link: "Computer-Science/Class-2/cycle-4/1.html",
    },
    {
      id: 5,
      name: "ციკლების შექმნა ",
      link: "Computer-Science/Class-2/Creating-cycles-5/1.html",
    },
    {
      id: 6,
      name: "მომხმარებლის გრაფიკული ინტერფეისი",
      link: "Computer-Science/Class-2/user-interface-6/1.html",
    },
    {
      id: 7,
      name: "კომპიუტერისა და პროგრამების მართვა",
      link: "Computer-Science/Class-2/programs-management-7/1.html",
    },
    {
      id: 8,
      name: "კომპიუტერული პროგრამებით დავალების შესრულება",
      link: "Computer-Science/Class-2/programing-8/1.html",
    },
    {
      id: 9,
      name: "კომპიუტერული ტექნოლოგიების გამოყენების იდენტიფიცირება",
      link: "Computer-Science/Class-2/Identify-with-computer-9/1.html",
    },
    {
      id: 10,
      name: "რა არის ქსელი და როგორ ვერთიანდებით ჩვენ მასში",
      link: "Computer-Science/Class-2/network-10/1.html",
    },
    {
      id: 11,
      name: "ინფორმაციის შენახვა ფიზიკურ გარემოში",
      link: "Computer-Science/Class-2/Storing-information-11/1.html",
    },
    {
      id: 12,
      name: "საკუთარ ანგარიშში მუშაობა",
      link: "Computer-Science/Class-2/working-with-account-12/1.html",
    },
  ],
  IT_3: [
    {
      id: 1,
      name: "კომპიუტერის შექმნისა და განვითარების მოკლე ისტორია",
      link: "Computer-Science/Class-3/computer-development-1/1.html",
    },
    {
      id: 2,
      name: "კომპიუტერის დამატებითი და ძირითადი მოწყობილობები",
      link: "Computer-Science/Class-3/computer-equipment-2/1.html",
    },
    {
      id: 3,
      name: "როგორ მუშაობს კომპიუტერი",
      link: "Computer-Science/Class-3/How-computer-works-3/1.html",
    },
    {
      id: 4,
      name: "ალგორითმი და ალგორითმის შემუშავება",
      link: "Computer-Science/Class-3/algorithmes-4/1.html",
    },
    {
      id: 5,
      name: "რა არის პროგრამული ენა",
      link: "Computer-Science/Class-3/programming-language-5/1.html",
    },
    {
      id: 6,
      name: "ვიზუალური კომუნიკაციის ენა",
      link: "Computer-Science/Class-3/Visual-Communication-6/1.html",
    },
    {
      id: 7,
      name: "გავეცნოთ ვიზუალურ პროგრამირებას",
      link: "Computer-Science/Class-3/Visual-programing-7/1.html",
    },
    {
      id: 8,
      name: "როგორ მუშაობს ინტერნეტი",
      link: "Computer-Science/Class-3/internet-8/1.html",
    },
    {
      id: 9,
      name: "რა არის საძიებო სისტემა და  როგორ გამოვიყენოთ იგი",
      link: "Computer-Science/Class-3/search-engine-9/1.html",
    },
    {
      id: 10,
      name: "ღრუბლოვანი სერვისები",
      link: "Computer-Science/Class-3/Cloud-services-10/1.html",
    },
    {
      id: 11,
      name: "პრეზენტაციის შექმნა (Ms PowerPoint)",
      link: "Computer-Science/Class-3/Presentation-11/1.html",
    },
    {
      id: 12,
      name: "საკუთარი Office 365-ის ანგარიშის მართვა",
      link: "Computer-Science/Class-3/managing-office365-12/1.html",
    },
    {
      id: 13,
      name: "გაქვს სახლში რობოტი?",
      link: "Computer-Science/Class-3/Do-you-have-robot-13/1.html",
    },
    {
      id: 14,
      name: "ბინარული სამაჯურის საიდუმლო",
      link: "Computer-Science/Class-3/Mystery-of-binary-bracelet-14/1.html",
    },
    {
      id: 15,
      name: "ჩემი პირველი გმირების ისტორია",
      link: "Computer-Science/Class-3/First-heroes-15/1.html",
    },
    {
      id: 16,
      name: "როგორ იქცევა ჩემი მეგობარი რობოტი",
      link: "Computer-Science/Class-3/How-my-robot-acts-16/1.html",
    },
  ],
  IT_4: [
    {
      id: 1,
      name: "მარტივი ელექტრო მოწყობილობის გამართვა",
      link: "Computer-Science/Class-4/Maintain-electronic-device-1/1.html",
    },
    {
      id: 2,
      name: "შეცდომები პროგრამირებაში",
      link: "Computer-Science/Class-4/programing-mistakes-2/1.html",
    },
    {
      id: 3,
      name: "პროგრამის ქცევის პროგნოზირება",
      link: "Computer-Science/Class-4/Predicting-behavior-3/1.html",
    },
    {
      id: 4,
      name: "პროგრამის შექმნის პროცესის გააზრება",
      link: "Computer-Science/Class-4/Creating-program-4/1.html",
    },
    {
      id: 5,
      name: "მომხმარებლის გრაფიკული ინტერფეისი",
      link: "Computer-Science/Class-4/UI-5/1.html",
    },
    {
      id: 6,
      name: "ღრუბლოვანი სერვისების სათანადოდ გამოყენება",
      link: "Computer-Science/Class-4/Cloud-services-6/1.html",
    },
    {
      id: 7,
      name: "ტექსტური რედაქტორი და მისი ძირითადი ინსტრუმენტები",
      link: "Computer-Science/Class-4/Text-editor-&-tools-7/1.html",
    },
    {
      id: 8,
      name: "ტექსტის სწორება (Ms Word)",
      link: "Computer-Science/Class-4/correcting-text-8/1.html",
    },
    {
      id: 9,
      name: "შაბლონი და ცხრილი",
      link: "Computer-Science/Class-4/template-and-table-9/1.html",
    },
    {
      id: 10,
      name: "ტექსტური რედაქტორის გამოყენება ყოველდღიურ ცხოვრებაში",
      link: "Computer-Science/Class-4/text-editor-10/1.html",
    },
    {
      id: 11,
      name: "ელექტრონული ფოსტის გადაგზავნა, მიღება",
      link: "Computer-Science/Class-4/Sending-email-11/1.html",
    },
    {
      id: 12,
      name: "რა არის ინფორმაცია",
      link: "Computer-Science/Class-4/What-is-information-12/1.html",
    },
    {
      id: 13,
      name: "როგორ შევქმნათ ელექტრონული წიგნები და ბროშურები Ms Word-ში",
      link: "Computer-Science/Class-4/Books-and-brochures-13/1.html",
    },
    {
      id: 14,
      name: "ჯგუფური მუშაობა ღრუბლოვან სერვისებში",
      link: "Computer-Science/Class-4/Group-work-14/1.html",
    },
    {
      id: 15,
      name: "გასეირნება ინტერნეტში",
      link: "Computer-Science/Class-4/Walking-in-internet-15/1.html",
    },
    {
      id: 16,
      name: "როგორ გავაფორმოთ ტექსტურ რედაქტორ Ms Word-ში დაწერილი ტექსტი",
      link: "Computer-Science/Class-4/How-to-form-text-16/1.html",
    },
  ],
  IT_5: [
    {
      id: 1,
      name: "პირობითი ნიშნები კომპიუტერულ პროგრამებში",
      link: "Computer-Science/Class-5/conditional-marks-1/1.html",
    },
    {
      id: 2,
      name: "ჩემი პირველი რობოტი",
      link: "Computer-Science/Class-5/My-first-robot-2/1.html",
    },
    {
      id: 3,
      name: "რა არის კომპიუტერული პროგრამა",
      link: "Computer-Science/Class-5/What-is-program-3/1.html",
    },
    {
      id: 4,
      name: "ობიექტის გადაადგილება ვიზუალური კოდის საშუალებით",
      link: "Computer-Science/Class-5/objects-moving-4/1.html",
    },
    {
      id: 5,
      name: "ფუნქცია",
      link: "Computer-Science/Class-5/function-5/1.html",
    },
    {
      id: 6,
      name: "პარალელური პროგრამირება",
      link: "Computer-Science/Class-5/parallel-programming-6/1.html",
    },
    {
      id: 7,
      name: "უსასრულო ციკლები",
      link: "Computer-Science/Class-5/Infinite-cycles-7/1.html",
    },
    {
      id: 8,
      name: "სასრულო ციკლები",
      link: "Computer-Science/Class-5/Cycles-8/1.html",
    },
    {
      id: 9,
      name: "პირობითი ოპერატორები",
      link: "Computer-Science/Class-5/conditional-operators-9/1.html",
    },
    {
      id: 10,
      name: "ობიექტები",
      link: "Computer-Science/Class-5/objects-10/1.html",
    },
    {
      id: 11,
      name: "ინფორმაციის დამახსოვრება",
      link: "Computer-Science/Class-5/Remember-information-11/1.html",
    },
    {
      id: 12,
      name: "სხვადასხვა კომპიუტერული მოწყობილობის ინტერფეისი",
      link: "Computer-Science/Class-5/interface-of-devices-12/1.html",
    },
    {
      id: 13,
      name: "კონტენტი და მისი დახარისხების მეთოდები",
      link: "Computer-Science/Class-5/Sorting-methods-13/1.html",
    },
    {
      id: 14,
      name: "ინფორმაციის ცხრილში აღრიცხვა",
      link: "Computer-Science/Class-5/Information-in-the-table-14/1.html",
    },
    {
      id: 15,
      name: "ცხრილებთან მუშაობა",
      link: "Computer-Science/Class-5/Working-with-tables-15/1.html",
    },
    {
      id: 16,
      name: "ელექტრონულ ცხრილებში მონაცემების შეტანა",
      link: "Computer-Science/Class-5/Enter-table-data-16/1.html",
    },
    {
      id: 17,
      name: "მაგალითები და ფორმულები ელექტრონულ სივრცეში",
      link: "Computer-Science/Class-5/Examples-and-formulas-17/1.html",
    },
    {
      id: 18,
      name: "დიაგრამა ელოქტრონულ ცხრილში",
      link: "Computer-Science/Class-5/diagram-in-electronic-table-18/1.html",
    },
    {
      id: 19,
      name: "გამოვიყენოთ დიაგრამები მათემატიკური ამოცანების ამოსახსნელად",
      link: "Computer-Science/Class-5/Using-diagrams-19/1.html",
    },
    {
      id: 20,
      name: "სორტირება და ფილტრაცია ელექტრონულ ცხრილებში",
      link: "Computer-Science/Class-5/sort-and-filter-20/1.html",
    },
    {
      id: 21,
      name: "ხშირად გამოყენებული ფუნქციები MS Excel-ში",
      link: "Computer-Science/Class-5/function-in-Exel-21/1.html",
    },
    {
      id: 22,
      name: "კონფიდენციალობა ელ. ფოსტასა და ღრუბლოვან სერვისებში",
      link: "Computer-Science/Class-5/Privacy-in-email-22/1.html",
    },
    {
      id: 23,
      name: "ინფორმაციულ რესურსებზე მუშაობა",
      link: "Computer-Science/Class-5/Informational-resources-23/1.html",
    },
    {
      id: 24,
      name: "საკუთარი მონაცემების დაცვა",
      link: "Computer-Science/Class-5/Protect-your-data-24/1.html",
    },
    {
      id: 25,
      name: "ინფორმაციული საზოგადოების განვითარება",
      link: "Computer-Science/Class-5/develop-informational-society-25/1.html",
    },
    {
      id: 26,
      name: "კომპიუტერული ტექნოლოგიები ჩვენს ცხოვრებაში",
      link:
        "Computer-Science/Class-5/Computer-technologies-in-our-life-26/1.html",
    },
    {
      id: 27,
      name: "Ms Excel ელექტრონული ცხრილის გაფორმება",
      link: "Computer-Science/Class-5/Decorate-electronic-table-27/1.html",
    },
    {
      id: 28,
      name: "Ms Excel ფაილზე მუშაობა",
      link: "Computer-Science/Class-5/working-with-excel-file-28/1.html",
    },
  ],
  IT_6: [
    {
      id: 1,
      name: "ვიწყებთ თამაშის კეთებას",
      link: "Computer-Science/Class-6/create-game-1/1.html",
    },
    {
      id: 2,
      name: "პირობითი ოპერატორები (ჩადგმული პირობითი ოპერატორები)",
      link: "Computer-Science/Class-6/Conditional-operators-2/1.html",
    },
    {
      id: 3,
      name: "ჩადგმული ციკლები",
      link: "Computer-Science/Class-6/embedded-cycles-3/1.html",
    },
    {
      id: 4,
      name: "ცვლადები",
      link: "Computer-Science/Class-6/Variables-4/1.html",
    },
    {
      id: 5,
      name: "ოპერატორები",
      link: "Computer-Science/Class-6/Operators-5/1.html",
    },
    {
      id: 6,
      name: "არითმეტიკული ოპერატორები",
      link: "Computer-Science/Class-6/Arithmetic-operators-6/1.html",
    },
    {
      id: 7,
      name: "მოვლენები, მოვლენებზე რეაგირება",
      link: "Computer-Science/Class-6/Responding-to-events-7/1.html",
    },
    {
      id: 8,
      name: "ცვლადების გამოყენება ",
      link: "Computer-Science/Class-6/Using-variables-8/1.html",
    },
    {
      id: 9,
      name: "სია",
      link: "Computer-Science/Class-6/List-9/1.html",
    },
    {
      id: 10,
      name: "Android გრაფიკული ინტერფეისის გზამკვლევი",
      link:
        "Computer-Science/Class-6/Android-graphics-interface-guide-10/1.html",
    },
    {
      id: 11,
      name: "ios გრაფიკული ინტერფეისი",
      link: "Computer-Science/Class-6/ios-graphical-interface-11/1.html",
    },
    {
      id: 12,
      name: "Windows-ის გრაფიკული ინტერფეისი",
      link: "Computer-Science/Class-6/Windows-UI-12/1.html",
    },
    {
      id: 13,
      name: "შევქმნათ ჩვენი პრეზენტაცია",
      link: "Computer-Science/Class-6/Create-our-presentation-13/1.html",
    },
    {
      id: 14,
      name: "ფოტო რედაქტორი",
      link: "Computer-Science/Class-6/Photo-editor-14/1.html",
    },
    {
      id: 15,
      name: "ჩვენი პოდკასტი",
      link: "Computer-Science/Class-6/Our-podcast-15/1.html",
    },
    {
      id: 16,
      name: "ჩვენი ტკბილი მოგონებები",
      link: "Computer-Science/Class-6/Our-sweet-memories-16/1.html",
    },
    {
      id: 17,
      name: "უსაფრთხოება ციფრულ სამყაროში",
      link: "Computer-Science/Class-6/Secure-digital-world-17/1.html",
    },
    {
      id: 18,
      name: "მულტიმედია ფაილების შესაქმნელი ონლაინ პლატფორმები",
      link: "Computer-Science/Class-6/Multimedia-online-platforms-18/1.html",
    },
    {
      id: 19,
      name: "ჩემი პროექტის პრეზენტაცია",
      link: "Computer-Science/Class-6/Presentation-of-my-project-19/1.html",
    },
    {
      id: 20,
      name: "ინტერაქტიული კონტენტის შექმნა",
      link: "Computer-Science/Class-6/Creating-interactive-content-20/1.html",
    },
    {
      id: 21,
      name: "ინფორმაციული ეთიკის ნორმები",
      link: "Computer-Science/Class-6/Information-ethics-norms-21/1.html",
    },
    {
      id: 22,
      name: "სოციალური პასუხისმგებლობა, პირადი სივრცე",
      link: "Computer-Science/Class-6/Social-responsibility-22/1.html",
    },
    {
      id: 23,
      name: "საკუთარი და სხვისი უფლებები ციფრულ სამყაროში",
      link: "Computer-Science/Class-6/rights-in-digital-world-23/1.html",
    },
    {
      id: 24,
      name: "ბალანსი ვირტუალურსა და რეალურ ცხოვრებას შორის",
      link: "Computer-Science/Class-6/Real-&-virtual-world-balance-24/1.html",
    },
    {
      id: 25,
      name: "შევქმნათ თამაში დროის ობიექტების გამოყენებით",
      link: "Computer-Science/Class-6/Creating-games-with-objects-25/1.html",
    },
    {
      id: 26,
      name:
        "ვიზუალური პროგრამირების გარემოში, Scratch-ში, შევქმნათ თამაში დროის ობიექტისა და ცვლადების გამოყენებით",
      link: "Computer-Science/Class-6/Creating-game-in-scratch-26/1.html",
    },
    {
      id: 27,
      name: "Scratch-ში შევქმნათ ორტურიანი თამაში",
      link: "Computer-Science/Class-6/Creating-two-tours-game-27/1.html",
    },
    {
      id: 28,
      name: "Scratch-ში შევქმნათ თამაში ცვლადების გამოყენებით",
      link: "Computer-Science/Class-6/Creating-game-in-scratch-28/1.html",
    },
  ],
};
