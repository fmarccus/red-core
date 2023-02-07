<script setup>
import { onMounted } from "vue";
import useUsers from "../../composables/users";


const { user, updateUser, errors, roles, showUser } = useUsers();
const props = defineProps({
    id: {
        required: true,
        type: String
    }
});

onMounted(() => showUser(props.id));
</script>

<template>
    <div class="container mt-5">
        <RouterLink :to="{ name: 'UserIndex' }" class="btn btn-light mb-3">Back</RouterLink>
        <h3>Edit user</h3>
        <div class="row">
            <div class="col-sm-9">
                <div class="card border-light">
                    <div class="card-body">
                        <form @submit.prevent="updateUser($route.params.id)">
                            <div class="mb-3">
                                <label for="" class="form-label">Role</label>
                                <select class="form-select" v-model="user.role_id">
                                    <option v-for="role in roles" :value="role.id">{{ role.role_name }}</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Full Name</label>
                                <input type="text" class="form-control" v-model="user.full_name">
                                <div v-if="errors.full_name">
                                    <small class="form-text text-danger">{{ errors.full_name[0] }}</small>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Email Address</label>
                                <input type="email" class="form-control" v-model="user.email_address">
                                <div v-if="errors.email_address">
                                    <small class="form-text text-danger">{{ errors.email_address[0] }}</small>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Password</label>
                                <input type="password" class="form-control" v-model="user.password">
                                <div v-if="errors.password">
                                    <small class="form-text text-danger">{{ errors.password[0] }}</small>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Confirm Password</label>
                                <input type="password" class="form-control" v-model="user.confirmed_password">
                                <div v-if="errors.confirmed_password">
                                    <small class="form-text text-danger">{{ errors.confirmed_password[0] }}</small>
                                </div>
                            </div>
                            <div class="mb-3">
                                <button type="submit" class="btn btn-secondary">Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>