<script setup>
import { reactive } from "vue";
import useLogin from "../composables/login";
const { login, errors } = useLogin();

const form = reactive({
    "email_address": "",
    "password": ""
});
</script>

<template>
    <main>
        <div class="container">
            <h3 class="mt-5">Login</h3>
            <form>
                <div class="row">
                    <div class="col-sm-9">
                        <div class="card border-light">
                            <div class="card-body">
                                <form @submit.prevent="login(form)">
                                    <div class="mb-3">
                                        <label for="" class="form-label">Email Address</label>
                                        <input type="email" class="form-control" v-model="form.email_address">
                                        <div v-if="errors.email_address">
                                            <small class="form-text text-danger">{{ errors.email_address[0] }}</small>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="" class="form-label">Password</label>
                                        <input type="password" class="form-control" v-model="form.password">
                                        <div v-if="errors.password">
                                            <small class="form-text text-danger">{{ errors.password[0] }}</small>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <button type="submit" class="btn btn-secondary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </main>
</template>
