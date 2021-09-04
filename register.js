new Vue({
    el:'#register',

    data(){
        return{
            name:null,
            number:null,
            sex:null,
            tel: null,
            favorite:null,
            another:null,
            introduce:null,
        }
    },

    methods:{
        Add:function(){
            // 提交数据
            let register={
                name:this.name,
                number:this.number,
                sex:this.sex,
                tel:this.tel,
                favorite:this.favorite,
                another:this.another,
                introduce:this.introduce,
            }
            console.log(register)
        },
    }
})