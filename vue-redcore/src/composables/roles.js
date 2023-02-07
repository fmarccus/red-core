import { ref } from "vue"
import axios from 'axios'
import { useRouter } from "vue-router";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/"

export default function useRoles() {
    const roles = ref([]);
    const role = ref([]);
    const errors = ref({});
    const router = useRouter();


    const indexRoles = async () => {
        const response = await axios.get("roles");
        roles.value = response.data.data;
        console.log(roles.value);
    }

    const showRole = async (id) => {
        const response = await axios.get("roles/" + id);
        role.value = response.data.data;
    }

    const storeRole = async (data) => {
        try {
            await axios.post("roles", data);
            await router.push({ name: "RoleIndex" });
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }
        }
    }

    const updateRole = async (id) => {
        try {
            await axios.put("roles/" + id, role.value);
            await router.push({ name: "RoleIndex" });
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }
        }
    }

    const destroyRole = async (id) => {
        if (!window.confirm("Delete the role?")) {
            return;
        }
        await axios.delete("roles/" + id);
        await indexRoles();

    }

    return {
        roles,
        role,
        errors,
        indexRoles,
        showRole,
        storeRole,
        updateRole,
        destroyRole
    }
}