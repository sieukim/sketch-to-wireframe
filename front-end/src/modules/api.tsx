import axios from 'axios';

// file upload api
export const upload = (file: File) => {
    const form = new FormData();
    form.set('uploadedFile', file)
    return axios.post('/api/upload', form, {
        headers: {'Content-Type': 'multipart/form-data'},
    });
}