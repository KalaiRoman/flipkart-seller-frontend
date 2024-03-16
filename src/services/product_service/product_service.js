import instanceBaseurl from "../../Config/AxiosUrl";

export async function createproductService(data) {
    try {
        const response = await instanceBaseurl.post(`/seller/product/create`, data);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export async function getproductServices() {
    try {
        const response = await instanceBaseurl.get(`/seller/product/getall`);
        return response.data;
    } catch (err) {
        throw err;
    }
}


export async function CurrentuserProductServices() {
    try {
        const response = await instanceBaseurl.get(`/seller/product/getuser/seller/products`);
        // ?page=1&size=10
        return response.data;
    } catch (err) {
        throw err;
    }
}


export async function getCurrentsingleproductServices(id) {
    try {
        const response = await instanceBaseurl.get(`/seller/product/getsingle/${id}`);
        return response.data;
    } catch (err) {
        throw err;
    }
}


export async function editProductService(id, data) {
    try {
        const response = await instanceBaseurl.put(`/seller/product/update/${id}`, data);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export async function deleteProductService(id) {
    try {
        const response = await instanceBaseurl.delete(`/seller/product/delete/${id}`);
        return response.data;
    } catch (err) {
        throw err;
    }
}