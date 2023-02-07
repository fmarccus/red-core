<script setup>
import { onMounted } from "vue";
import useRoles from "../../composables/roles";
const { role, updateRole, errors, showRole } = useRoles();
const props = defineProps({
    id: {
        required: true,
        type: String
    }
});

onMounted(() => showRole(props.id));
</script>

<template>
    <div class="container mt-5">
        <RouterLink :to="{ name: 'RoleIndex' }" class="btn btn-light mb-3">Back</RouterLink>
        <h3>Edit role</h3>
        <div class="row">
            <div class="col-sm-9">
                <div class="card border-light">
                    <div class="card-body">
                        <form @submit.prevent="updateRole($route.params.id)">
                            <div class="mb-3">
                                <label for="" class="form-label">Role Name</label>
                                <input type="text" class="form-control" v-model="role.role_name">
                                <div v-if="errors.role_name">
                                    <small class="form-text text-danger">{{ errors.role_name[0] }}</small>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Description</label>
                                <input type="text" class="form-control" v-model="role.description">
                                <div v-if="errors.description">
                                    <small class="form-text text-danger">{{ errors.description[0] }}</small>
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