<script setup>
import DeleteIcon from '../icons/DeleteIcon.vue'
import ChangeIcon from '../icons/ChangeIcon.vue'
</script>

<template>
    <div class="info-table">

        <table class="table">
            <tr>
                <th>
                    №
                </th>
                <th>
                    Nomi
                </th>
                <th>
                    Rasmi
                </th>
                <th>
                    Yaratilgan sanasi
                </th>
                <th>
                    O'chirish
                </th>
            </tr>

            <tr>
                <td>1</td>
                <td>O‘zbekiston Respublikasi Prezidenti Shavkat Mirziyoyevning Oliy Majlisga va O‘zbekiston xalqiga Murojaatnomasi</td>
                <td><img class="news_image"
                        src="https://president.uz/uploads/9cd47531-6502-c687-698a-9e430dd74961_lists_slider_5798.jpg"
                        alt=""></td>
                <td>12.05.2023</td>
                <td> 
                    <a href="/news/edit/1">
<ChangeIcon/>
                    </a>
                    <button>
                        <DeleteIcon />
                    </button>
                </td>
            </tr>

            <tr>
                <td>2</td>
                <td>O‘zbekiston Respublikasi Prezidenti Shavkat Mirziyoyevning Oliy Majlisga va O‘zbekiston xalqiga Murojaatnomasi</td>
                <td><img class="news_image"
                        src="https://president.uz/uploads/9cd47531-6502-c687-698a-9e430dd74961_lists_slider_5798.jpg"
                        alt=""></td>
                <td>12.05.2023</td>
                <td> 
                    <a href="/news/edit/2">
<ChangeIcon/>
                    </a>
                    <button>
                        <DeleteIcon />
                    </button>
                </td>
            </tr>
        </table>
    </div>
</template>

<style  scoped>
.info-table {
    display: flex;
    justify-content: center;
}

.table {
    font-size: 18px;
    margin-top: 40px;
    border-collapse: collapse;
    border: 1px solid rgb(171, 171, 171);
    border-radius: 20px;
    width: 96%;
}

.table button, a {
    padding: 5px;

    font-size: 18px;
    text-align: left;
    background-color: transparent;
    border: none;
    cursor: pointer;
}

th {
    font-weight: 600;
    color: rgb(58, 58, 171);
}

td {
    font-weight: 500;
}

td,
th {
    border-left: 1px solid rgb(171, 171, 171);
    padding: 10px 30px;
}

tr:nth-child(even) {
    background-color: white;
}

tr:nth-child(odd) {
    background-color: rgb(241, 240, 254);
}

.news_image {
    width: 80px;
}</style>