import { ref } from "vue";
import axios from 'axios';
import { useRouter } from "vue-router";
axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

export default function useLogin() {
    const errors = ref({});
    const router = useRouter();


    const login = async (data) => {
        try {
            const response = await axios.post("login", data);
            if (response.status === 200 && response.data && response.data.token) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userName', response.data.full_name);
                console.log(response.data.token + " Name:" + response.data.full_name);
                await router.push({ name: "HomeView" });
            }
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }
        }
    }
    const logout = async () => {
        localStorage.removeItem('token');
        await router.push({ name: "Login" });

    }

    return {
        errors,
        login,
        logout
    }
}