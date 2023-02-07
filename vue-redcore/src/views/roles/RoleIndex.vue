<script setup>
import { onMounted } from "vue";
import useRoles from "../../composables/roles"
const { roles, indexRoles, destroyRole } = useRoles();

onMounted(() => indexRoles());
</script>

<template>
    <div class="container mt-5">
        <h3>Roles</h3>
        <div class="text-end">
            <RouterLink class="btn btn-secondary mb-3" :to="{ name: 'RoleCreate' }"> Create a new role
            </RouterLink>
        </div>
        <div class="table-responsive">
            <table class="table table-lg table-striped text-center">
                <thead class="bg-light text-dark ">
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
                        <td>
                            <RouterLink class="text-primary fw-bold"
                                :to="{ name: 'RoleEdit', params: { id: role.id } }">
                                Edit
                            </RouterLink>
                        </td>
                        <td><a @click="destroyRole(role.id)" class="text-danger fw-bold"> Delete</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
  <!-- <div class="mb-3">
    <label for="" class="form-label">City</label>
    <select class="form-select" name="" id="">
        <option v-for="role in roles" :value="role.id"> {{ role.role_name }}</option>
    </select>
</div> -->