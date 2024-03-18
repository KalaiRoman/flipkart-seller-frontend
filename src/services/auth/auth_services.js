
import instanceBaseurl from './../../Config/AxiosUrl';
export async function GoogleRegister(data) {
    try {
        const response = await instanceBaseurl.post(`/seller/auth/google/register`, data);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export async function OtpEnter(data) {
    try {
        const response = await instanceBaseurl.post(`/seller/auth/otp`, data);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export async function Loginservice(data) {
    try {
        const response = await instanceBaseurl.post(`/seller/auth/login`, data);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export async function Registerservice(data) {
    try {
        const response = await instanceBaseurl.post(`/seller/auth/register`, data);
        return response.data;
    } catch (err) {
        throw err;
    }
}


export async function getuserService() {
    try {
        const response = await instanceBaseurl.get(`/seller/auth/get`);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export async function updateService(data) {
    try {
        const response = await instanceBaseurl.put(`/seller/auth/update`, data);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export async function updateImageService(data) {
    try {
        const response = await instanceBaseurl.post(`/seller/auth/update/image`, data);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export async function chatUserService(data) {
    try {
        const response = await instanceBaseurl.post(`/seller/auth/chat/seller-to-admin`, data);
        return response.data;
    } catch (err) {
        throw err;
    }
}


export async function getAllusersService() {
    try {
        const response = await instanceBaseurl.get(`/seller/auth/admin/users`);
        return response.data;
    } catch (err) {
        throw err;
    }
}
