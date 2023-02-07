<script setup>
import { onMounted } from "vue";
import useRoles from "../../composables/roles"
const { roles, indexRoles, destroyRole } = useRoles();

onMounted(() => indexRoles());
</script>

<template>
    <div class="container mt-5">
        <h3>Roles</h3>
        <RouterLink class="btn btn-primary mb-3" :to="{ name: 'RoleCreate' }"> Create a new role </RouterLink>
        <div class="table-responsive">
            <table class="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Assigned User</th>
                        <th colspan="2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="role in roles" :key="role.id">
                        <td>{{ role.id }}</td>
                        <td>{{ role.role_name }}</td>
                        <td>{{ role.description }}</td>
                        <td>{{ role.assoc_user }}</td>
                        <td><RouterLink class="btn btn-success" :to="{name: 'RoleEdit', params: {id: role.id}}" > Edit</RouterLink></td>
                        <td><button @click="destroyRole(role.id)" class="btn btn-danger"> Delete</button></td>

                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>