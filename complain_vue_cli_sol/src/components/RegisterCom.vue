<template>
  <form id="signup">
    <fieldset>
      <legend>로그인 정보</legend>
      <ul>
        <li>
          <label for="userid">아이디</label>
          <input id="userid" name="userid" type="text" required autofocus />
        </li>
        <li>
          <label for="pwd1">비밀번호</label>
          <input id="pwd1" name="pwd1" type="password" required />
        </li>
        <li>
          <label for="pwd2">비밀번호 확인</label>
          <input id="pwd2" name="pwd2" type="password" required />
        </li>
        <li>
          <label for="infoId">주민등록번호</label>
          <input
            id="infoId"
            name="infoId"
            type="number"
            min="100000"
            max="9999999"
            required
          />
          -
          <input
            id="infoId2"
            name="infoId"
            type="number"
            min="100000"
            max="9999999"
            required
          />
        </li>
      </ul>
    </fieldset>
    <fieldset>
      <legend>개인 정보</legend>
      <ul>
        <li>
          <label for="fullname">이름</label>
          <input
            id="fullname"
            name="fullname"
            type="text"
            placeholder="5자미만 공백없이"
            required
          />
        </li>
        <li>
          <label for="email">메일 주소</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="abcd@domain.com"
            required
            autocomplete="off"
          />
        </li>
        <li>
          <label for="tel">연락처</label>
          <input id="tel" name="tel" type="tel" autocomplete="off" />
        </li>
      </ul>
    </fieldset>
    <fieldset>
      <button type="submit" onclick="trans()">제출</button>
    </fieldset>
  </form>
</template>

<script>
import trans from "../util/register_member.js"
export default {
    methods: {
        trans: function() {
            trans();
        }
    },
};
</script>

<style>
@import "../assets/css/register_member.css"
</style>
