new Vue({
    el:'#require',
    data(){
        return{
            name:null,
            number: null,
        }
    },

    methods:{
        See:function(){
            // 查询数据
            let require={
                name:this.name,
                number:this.number,
            }
            console.log(require)
        },

    }
})