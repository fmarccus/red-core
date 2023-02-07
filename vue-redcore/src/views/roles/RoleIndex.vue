<script setup>
import { onMounted } from "vue";
import useRoles from "../../composables/roles"
const { roles, indexRoles } = useRoles();

onMounted(() => indexRoles());
</script>

<template>
    <div class="container mt-5">
        <h3>Roles</h3>
        <div class="table-responsive">
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Assigned User</th>

                    </tr>
                </thead>
                <tbody>
                    <tr v-for="role in roles" :key="role.id">
                        <td>{{ role.id }}</td>
                        <td>{{ role.role_name }}</td>
                        <td>{{ role.description }}</td>
                        <td>{{ role.assoc_user }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>