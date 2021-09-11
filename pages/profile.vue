<template>
  <div class="profilePage">
    <!-- <Notification v-if="success" type="success" :message="success" /> -->
    <!-- <Notification v-if="error" type="danger" :message="error" /> -->

    <div v-if="!isAuthenticated" class="profilePage_login">
        <form v-if="!success" method="post" @submit.prevent="register">
            <div class="field">
                <label class="label">Username</label>
                <div class="control">
                    <input
                    v-model="username"
                    type="text"
                    class="input"
                    name="identifier"
                    required
                    />
                </div>
            </div>
            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input
                    v-model="email"
                    type="email"
                    class="input"
                    name="email"
                    required
                    />
                </div>
            </div>
            <div class="field">
                <label class="label">Password</label>
                <div class="control">
                    <input
                    v-model="password"
                    type="password"
                    class="input"
                    name="password"
                    required
                    />
                </div>
            </div>
            <div class="control">
                <button type="submit" class="btn">
                Register
                </button>
            </div>
        </form>
    </div>

    <div v-else class="profilePage_profile">
        <h1>{{ loggedInUser.username }}</h1>
        <a class="navbar-item" @click="logout">Logout</a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
 data() {
     return {
         username: "",
         email: "",
         password: "",
         success: null,
         error: null,
     }
 },
 computed: {
 ...mapGetters(["isAuthenticated", "loggedInUser"]),
 },
 methods: {
    async register() {
        this.error = null;
        try {
            this.$axios.setToken(false);
            await this.$axios.post("auth/local/register", {
                username: this.username,
                email: this.email,
                password: this.password,
            });
            this.success = `A confirmation link has been sent to your email account. \
            Please click on the link to complete the registration process.`;
        } catch (e) {
            this.error = 'Une erreur est survenue.'
        }
    },
 },
}
</script>

<style lang="scss" scoped>
.profilePage{
    &_login{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 90vh;
        padding: 16px;
        input{
            margin-bottom: 16px;
            width: 100%;
            padding: 8px;
            background-color: $dark;
            border: none;
            color: white;
        }
    }
}
</style>
