import axios from 'axios'

const API_KEY = "wxw73kro74tily5ie";
const BASE_URL = 'https://techhk.aoscdn.com';
const MAXIMUM_RETRIES = 20;

export const enhancedImageAPI = async (file) => {

    try {
        const taskId = await uploadImage(file);
        console.log("Image uploaded, Task ID:", taskId);

        const enhancedImageData = await PollForEnhancedImage(taskId);
        console.log("Enhanced Image Data :", enhancedImageData);

        return enhancedImageData;

    } catch (error) {
        console.log("Error", error.message);
    }
}

const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image_file", file);
    const { data } = await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            "X-API-KEY": API_KEY,
        }
    });

    if (!data?.data?.task_id) {
        throw new Error("Failed to upload Image ! Task Id not found");
    }

    return data.data.task_id;
}

const fetchImage = async (taskId) => {
    const { data } = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskId}`, {
        headers: {
            "Content-Type": "multipart/form-data",
            "X-API-KEY": API_KEY,
        }
    });
    if (!data?.data) {
        throw new Error("Failed to fetch Enhanced image! Image not found")
    }
    return data.data;
}

const PollForEnhancedImage = async (taskId , retries = 0) => {
    const result = await fetchImage(taskId);

    if(result.state === 4){
        console.log(`Enhanced Image is procesing (${retries}/${MAXIMUM_RETRIES})`)

        if ( retries >= MAXIMUM_RETRIES){
            throw new Error("Maximum retries reached. Please try again later.")
        }

        // wait for 2 seconds
        await new Promise((resolve) => setTimeout(resolve,2000))

        return PollForEnhancedImage(taskId,retries+1);
    }
    return result;
}


//Object
// data
// :
// {task_id: '2587bcad-ce81-4591-9470-0872a15c8d2f'}
// message
// :
// "success"
// status
// :
// 200