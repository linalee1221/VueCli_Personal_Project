<template>
  <form id="signupPage">
    <fieldset>
      <legend>Account Create</legend>
      <ul>
        <li>
          <label for="userid">I D</label>
          <input
            id="userid"
            name="userid"
            type="text"
            v-model="form.id"
            required
            autofocus
          />
        </li>
        <li>
          <label for="password1">Password</label>
          <input
            id="password1"
            name="password1"
            type="password"
            v-model="form.password"
            required
          />
        </li>
        <li>
          <label for="password2">Confirm Password</label>
          <input
            id="password2"
            name="password2"
            type="password"
            v-model="form.passCk"
            required
          />
        </li>
        <li>
          <label for="datepick">Birth</label>
          <input id="birth" name="birth" type="text" placeholder="Click" />
        </li>
      </ul>
    </fieldset>
    <fieldset>
      <legend>Personal Information</legend>
      <ul>
        <li>
          <label for="fullname">Full Name</label>
          <input
            id="fullname"
            name="fullname"
            type="text"
            v-model="form.fullname"
            placeholder="Do not fill in the blanks."
            required
          />
        </li>
        <li>
          <label for="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="abcd@domain.com"
            v-model="form.email"
            required
            autocomplete="off"
          />
        </li>
        <li>
          <label for="tel">Contact</label>
          <input
            id="tel"
            name="tel"
            type="tel"
            placeholder="Contact Number"
            v-model="form.tel"
            autocomplete="off"
          />
        </li>
      </ul>
    </fieldset>
    <fieldset>
      <button type="submit" @click="formcheck()">Submit</button>
      <button type="button" @click="gohome()">Home</button>
    </fieldset>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        id: null,
        password: null,
        passCk: null,
        fullname: null,
        tel: null,
        email: null,
      },
    };
  },
  methods: {
    formcheck() {
      if (
        this.form.id == null ||
        this.form.password == null ||
        this.form.passCk == null ||
        this.form.fullname == null ||
        this.form.tel == null ||
        this.form.email == null
      ) {
        alert("필수값 누락");
        return;
      }
      alert(
        this.form.id +
          "( " +
          this.form.fullname +
          ") 님의 회원가입이 완료되었습니다."
      );
      this.$router.push({ name: "home" });
    },
    gohome() {
      this.$router.push("/");
    }
  },
};
</script>

<style scoped>
@import "../assets/css/register_member.css";
</style>
