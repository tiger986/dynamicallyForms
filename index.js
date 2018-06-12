define([], function(){

    var model = avalon.define({
        $id: 'createInput',

        //表单数组
        form: [],

        //添加表单
        addForm: function(type){
            var con = {};
            if(type == 1){
                con = {
                    type: 1,
                    required: 1,
                    title: "",
                    tip: "",
                    validate: 0,
                    maxSize: 0,
                    minSize: 0
                };
            }else if(type == 2){
                con = {
                    type: 2,
                    required: 1,
                    title: "",
                    tip: "",
                    maxSize: 0,
                    minSize: 0
                };
            }else if(type == 3){
                con = {
                    type: 3,
                    required: 1,
                    title: "",
                    choice: ["", ""]
                };
            }else if(type == 4){
                con = {
                    type: 4,
                    required: 1,
                    title: "",
                    choice: ["", "", ""]
                };
            }else if(type == 5){
                con = {
                    type: 5,
                    required: 1,
                    title: "",
                    tip: ""
                };
            }
            model.form.push(con);
        },

        //是否必填
        chooseRequired: function(index){
            //console.log(index);
            //console.log($(this)[0].checked);
            if($(this)[0].checked){
                model.form[index].required = 1;
            }else{
                model.form[index].required = 0;
            }
            console.log(model.form[index].required);
        },

        //添加title
        addTitle: function(index){
            model.form[index].title = $(this).val();
        },

        //添加提示文字
        addPrompt: function(index){
            model.form[index].tip = $(this).val();
            //console.log(model.form[index].tip);
        },

        //选择验证
        chooseVerification: function(index){
            model.form[index].validate = $(this).val();
            //console.log(model.form[index].validate);
        },

        //添加字数限制
        addNum: function(n, index){
            if(n == 1){
                model.form[index].maxSize = $(this).val();
                //console.log(model.form[index].maxSize);
            }else{
                model.form[index].minSize = $(this).val();
                //console.log(model.form[index].minSize);
            }
        },

        //编辑选项
        editOption: function(outer, inner){
            model.form[outer].choice[inner] = $(this).val();
            //console.log(model.form[outer].choice[inner]);
            //console.log(model.form);
        },

        //添加选项
        addOption: function(index){
            model.form[index].choice.push("");
        },

        //选项向上移动
        optionUp: function (arr, outer, inner) {
            var sec1 = arr[inner];
            var sec2 = arr[inner - 1];
            arr.splice(inner - 1, 1, sec1);
            arr.splice(inner, 1, sec2);
            model.form[outer].choice = arr;
        },

        //选项向下移动
        optionDown: function (arr, outer, inner) {
            var sec1 = arr[inner];
            var sec2 = arr[inner + 1];
            arr.splice(inner + 1, 1, sec1);
            arr.splice(inner, 1, sec2);
            model.form[outer].choice = arr;
            //console.log(model.form);
        },

        //预览表单
        bgShow: false,
        formShow: false,
        previewForm: function(){
            model.bgShow = true;
            model.formShow = true;
        },

        //关闭预览表单
        closePreview: function(){
            model.bgShow = false;
            model.formShow = false;
        }

    });

    return model;
});
