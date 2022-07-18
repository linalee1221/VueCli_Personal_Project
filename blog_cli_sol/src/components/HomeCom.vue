<template>
  <div id="content">
    <section id="main-section">
      <article>
        <br />
        <div class="article-body">
          <div class="article-header"></div>
          <div class="article-body">
            <img
              id="catimage2"
              class="size"
              alt="뿌꾸 뒷모습"
              src="../assets/images/bbuggumi.jpg"
            />
            <br />
          </div>
          <br />
          <br />
        </div>
      </article>
      <br />
      <br />

      <hr />

      <article>
        <div class="article-header"></div>

        <div class="article-body">
          <br />
          <div class="article-header">
            <p class="article-date"><span id="lefttitle">★MVP★</span>현재시각: <span id="time"></span></p>
          </div>
          <div class="firstHobby">
            <ul class="hobby-first">
              <h2><b>이 달의 리뷰왕</b></h2>
              <li v-for="item1 in list1" :key="item1" class="firstmember">{{ item1 }}</li>
            </ul>
          </div>
          <div class="secondHobby">
            <ul class="hobby-second">
              <h2><b>이 달의 구매왕</b></h2>
              <li v-for="item2 in list2" :key="item2" class="firstmember">{{ item2 }}</li>
            </ul>
          </div>
          <div class="thirdHobby">
            <ul class="hobby-third">
              <h2><b>이 달의 친절왕</b></h2>
              <li v-for="item3 in list3" :key="item3" class="firstmember">{{ item3 }}</li>
            </ul>
          </div>
        </div>
      </article>

      <article>
        <article>
          <h2 id="newuser"><b>신규회원 LIST</b></h2>
          <br>
          <br>
           <table id="list">
            <thead>
                <tr>
                    <th>번호</th>
                    <th>이름</th>
                    <th>이메일</th>
                    <th>가입일</th>
                </tr>
            </thead>
            <tbody id="contacts">
                <tr v-for="contact in contacts" :key="contact">
                    <td>{{contact.no}}</td>
                    <td>{{contact.name}}</td>
                    <td>{{contact.email}}</td>
                    <td>{{contact.day}}</td>
                </tr>
            </tbody>
        </table>
        </article>
      </article>
    </section>
    <!-- 오른쪽 메뉴 -->
    <aside id="main-aside">
      <!-- 첫번째 대메뉴 -->
      <div class="aside-list">
        <h3>카테고리</h3>

        <!-- 소메뉴 -->
        <ul>
          <li><a href="http://www.google.com">Google</a></li>
          <li><a href="http://www.naver.com">Naver</a></li>
          <li><a href="http://www.daum.net">Daum</a></li>
        </ul>
      </div>

      <!-- 두번째 대메뉴 -->
      <div class="aside-list">
        <h3>최근 글</h3>

        <!-- 소메뉴 -->
        <ul>
          <li><a href="#">데이터</a></li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script>
import { setCurTime, checkAll } from "../util/commons.js";

export default {
  data() {
    return {
      resId: 0,
      contacts: [
        { no: 1, name: "유재석", email: "worldmc@naver.com", day: "2022-03-27"},
        { no: 2, name: "장동건", email: "minam1212@daum.net", day: "2022-04-01"},
        { no: 3, name: "강동원", email: "kangtuna@gmail.com", day: "2022-02-28"},
        { no: 4, name: "유연석", email: "softrock@gmail.com", day: "2022-01-17"}
      ],
      list1: ['1위 유재석', '2위 장동건', '3위 강동원', '4위 유연석'],
      list2: ['1위 서현진', '2위 전소미', '3위 송지효', '4위 현아'],
      list3: ['1위 강호동', '2위 신현준', '3위 유해진', '4위 정윤호']
      
    };
  },
  mounted() {
    this.resId = setCurTime();
  },
  beforeRouteLeave(to, from, next) {
    clearInterval(this.resId);
    next();
  },
  methods: {
    checkAll() {
      checkAll();
    },
  },
};
</script>

<style>
@import "../assets/css/section.css";
</style>
