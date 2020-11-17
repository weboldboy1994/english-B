<template>
    <el-row
            class="infinite-list"
            v-infinite-scroll="load"
            style="overflow:auto">
        <div v-for="(item,i) in subject" :key=i>
            <p><strong>{{i+1}}</strong>&nbsp{{item.daan}}</p>
            <p>{{item.translate}}</p>
            <p>{{item.explain}}</p>
        </div>
    </el-row>
</template>

<script src="./js/cihui.js"></script>
<style scoped>
    .infinite-list > div {
        height: 100px;
        background: #fff6f6;
        margin: 30px;
    }
</style>
