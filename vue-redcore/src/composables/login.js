import { ref } from "vue";
import axios from 'axios';
import { useRouter } from "vue-router";
axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

export default function useLogin() {
    const errors = ref({});
    const router = useRouter();


    const login = async (data) => {
        // try {
        //     await axios.post("login", data);
        //     await router.push({ name: "HomeView" });
        // } catch (error) {
        //     if (error.response.status === 422) {
        //         errors.value = error.response.data.errors;
        //     }
        // }
        await axios.post("login", data).then(response => {
            console.log(response.data.data);
            router.push({ name: "HomeView" });
        });

    }
    return {
        errors,
        login
    }
}