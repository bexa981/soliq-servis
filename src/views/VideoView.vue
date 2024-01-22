<script setup>
import { ref } from "vue";


const selectedVideo = ref(null);
const videoUrl = ref(null);

const handleVideoChange = (event) => {
    const file = event.target.files[0];

    if (file) {
        selectedVideo.value = file;
        videoUrl.value = URL.createObjectURL(file);
        // You can perform additional actions with the selected video if needed
    } else {
        selectedVideo.value = null;
        videoUrl.value = null;
    }
};


selectedVideo,
    videoUrl,
    handleVideoChange

</script>

<template>
    <div class="video-main">
        <div class="top-video">
            <h2>Video</h2>
            
        </div>

        <div>
            <div class="videos">
                <div>
                    <div class="flex-video">
                        <div>
                            <label for="videoInput"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17"
                                    fill="currentColor" viewBox="0 0 20 17">
                                    <path
                                        d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z">
                                    </path>
                                </svg>
                                <span>Video tanlash</span>
                            </label>
                            <input class="inputfile" type="file" id="videoInput" @change="handleVideoChange"
                                accept="video/*">
                        </div>

                        <input class="submit-video" type="submit" value="Saqlash">
                    </div>


                    <div v-if="selectedVideo">
                        <p>Tanlangan video: {{ selectedVideo.name }}</p>
                        <video :src="videoUrl" controls width="400" height="300"></video>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<style scoped>
.top-video {
    display: flex;
    justify-content: space-between;
    background-color: white;
    margin: 20px;
    padding: 20px;
    border-radius: 15px;
}

.flex-video {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.submit-video {
    padding: 15px;
    font-size: 18px;
    border-radius: 15px;
    border: none;
    background-color: blue;
    color: white;
    cursor: pointer;
}

.inputfile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
    cursor: pointer;
}

label {
    font-size: 1.25em;
    font-weight: 700;
    color: rgb(39, 39, 184);
    font-weight: 600;
    box-shadow: 1px 1px 5px rgb(179, 178, 178);
    padding: 15px;
    border-radius: 15px;
    background-color: black;
    display: inline-block;
    cursor: pointer;
}

label svg {
    margin-right: 8px;
}

.inputfile:focus,
label,
.inputfile,
label:hover {
    background-color: white;
}

h2 {

    font-weight: 500;
    font-size: 25px;
    color: rgba(8, 8, 115, 0.996);
}

.add-file button {
    padding: 10px 30px;
    font-size: 19px;
    font-weight: 600;
    color: rgb(16, 176, 16);
    background-color: white;
    border: none;
    box-shadow: 1px 1px 7px rgb(183, 180, 180);
    cursor: pointer;
    border-radius: 10px;
}

.table {
    background-color: white;
    padding: 20px;
    margin: 20px;
    border-radius: 15px;
}

.videos {
    margin: 20px;
    background-color: white;
    padding: 20px;
    border-radius: 15px;
}</style>