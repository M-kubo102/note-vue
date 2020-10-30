<template>
    <div class="evViewArea">
        <h2>{{evTitle}}</h2>
        <p>{{evText}}</p>

        <p>出典：コトバンク</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            evTitle: '大政奉還',
            evText:'慶応3 (1867) 年江戸幕府が朝廷に統治権を返上したこと。同3年3月薩長両藩が倒幕のための同盟を結んだのに対し，土佐藩は幕府をも加えた雄藩連合の新政権樹立を企て，同年 10月3日将軍徳川慶喜に大政奉還を勧告，6日には安芸藩からも同じ勧告がなされた。慶喜は熟慮の末，10月 12日二条城で老中以下に大政奉還の決意を伝え，翌 13日諸藩にこの旨を通達，14日朝廷に上表文を差出し，翌 15日朝廷はこれを許可した。ただし慶喜は必ずしも政権の全面的放棄を考えていたのではなく，新政体のもとであらためて実権を掌握する構想を秘めていた。'
        }
    }
}
</script>

<style>
    .evViewArea{
        border: 2px solid #bbb;
        text-align: start;
        padding: 10px;
    }
</style>