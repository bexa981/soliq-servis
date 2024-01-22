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
                    Mavzu
                </th>
                <th>
                    Tarif
                </th>
                <th>
                    O'chirish
                </th>
            </tr>

            <tr>
                <td>1</td>
                <td>ҚҚС суммаси нақд пулда қайтариб бериладими?</td>
                <td>Йўқ. ҚҚС суммаси фақатгина мобил иловада кўрсатилган банк картаси ёки банк ҳисобварағига ўтказиб
                    берилади.</td>
                <td>
                    <a href="/questions/questedit/1">
                        <ChangeIcon />
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

.table button {
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