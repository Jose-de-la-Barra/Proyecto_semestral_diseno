
const get_video = () => {
    return[
        {"name": "VideoSanEsteban"}
    ];
}

const get_video_url = (video_id) => {
    return `https://joaquinslab.blob.core.windows.net/resources/${video_id}.mp4`;  
}

export {get_video, get_video_url}; 