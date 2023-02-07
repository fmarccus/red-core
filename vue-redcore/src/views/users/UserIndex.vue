<script setup>
import { onMounted } from "vue";
import useUsers from "../../composables/users";
const { users, indexUsers, destroyUser } = useUsers();

onMounted(() => indexUsers());
</script>

<template>
    <div class="container mt-5">
        <h3>Users</h3>
        <div class="text-end">
            <RouterLink class="btn btn-secondary mb-3" :to="{ name: 'UserCreate' }"> Create a new user
            </RouterLink>
        </div>
        <div class="table-responsive">
            <table class="table table-lg table-striped text-center">
                <thead class="bg-light text-dark ">
                    <tr>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Email Address</th>
                        <th>Assigned Role</th>
                        <th colspan="2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id">
                        <td>{{ user.id }}</td>
                        <td>{{ user.full_name }}</td>
                        <td>{{ user.email_address }}</td>
                        <td>{{ user.role_name }}</td>
                        <td>
                            <RouterLink class="text-primary fw-bold"
                                :to="{ name: 'UserEdit', params: { id: user.id } }">
                                Edit
                            </RouterLink>
                        </td>
                        <td><a @click="destroyUser(user.id)" class="text-danger fw-bold"> Delete</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>