<script setup>
import { onMounted } from "vue";
import useUsers from "../../composables/users";
const { users, indexUsers } = useUsers();

onMounted(() => indexUsers());
</script>

<template>
    <div class="container mt-5">
        <h3>Users</h3>
        <div class="table-responsive">
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Email Address</th>
                        <th>Assigned Role</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id">
                        <td>{{ user.id }}</td>
                        <td>{{ user.full_name }}</td>
                        <td>{{ user.email_address }}</td>
                        <td>{{ user.role_name }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>