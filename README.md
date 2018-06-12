## Dynamic add form (Avalon)
#### HTML code
```html
<!DOCTYPE html>
<html>
<head>
    <title>动态创建表单</title>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="index.css">
	<script type="text/javascript" src="jquery-1.10.1.min.js"></script>
	<script type="text/javascript" src="main.js"></script>
<body>
<div class="body" ms-controller="createInput">
    <div class="body_title">添加表单</div>
    <div class="body_btnBox">
        <div class="body_btn" ms-click="addForm(1)">
            +单行文本
        </div>
        <div class="body_btn" ms-click="addForm(2)">
            +多行文本
        </div>
        <div class="body_btn" ms-click="addForm(3)">
            +单选框
        </div>
        <div class="body_btn" ms-click="addForm(4)">
            +多选框
        </div>
        <div class="body_btn" ms-click="addForm(5)">
            +日期
        </div>
        <div class="body_btn" ms-click="previewForm()">
            预览
        </div>
    </div>

    <div style="overflow: hidden" ms-repeat="form">
        <div class="body_iptBox hide" ms-class="hide: el.type!=1">
            <div class="up">
                <div class="checkBox">
                    <input class="check" type="checkbox" checked ms-change="chooseRequired($index)" />必填
                </div>
                <input type="text" class="typeText" placeholder="单行文本" ms-blur="addTitle($index)" />
                <input class="typeIpt" type="text" placeholder="请填写提示文字" ms-blur="addPrompt($index)" />
                <div class="delete" ms-click="$remove"></div>
            </div>
            <div class="down">
                <p>验证</p>
                <select ms-change="chooseVerification($index)">
                    <option value="0">无</option>
                    <option value="1">手机号/固话</option>
                    <option value="2">身份证</option>
                    <option value="3">QQ</option>
                    <option value="4">邮箱</option>
                    <option value="5">整数</option>
                </select>
                <div class="downIpt hide" ms-class="hide: el.validate!=0">
                    <p>最大字数</p>
                    <input type="number" onblur="value=parseInt(value.replace(/[^\d]/g, 0))" ms-blur="addNum(1,$index)" />
                    <p>最小字数</p>
                    <input type="number" onblur="value=parseInt(value.replace(/[^\d]/g, 0))" ms-blur="addNum(2,$index)" />
                </div>
            </div>
        </div>

        <div class="body_iptBox hide" ms-class="hide: el.type!=2">
            <div class="up">
                <div class="checkBox">
                    <input class="check" type="checkbox" checked ms-change="chooseRequired($index)" />必填
                </div>
                <input type="text" class="typeText" placeholder="多行文本" ms-blur="addTitle($index)" />
                <input class="typeIpt" type="text" placeholder="请填写提示文字" ms-blur="addPrompt($index)" />
                <div class="delete" ms-click="$remove"></div>
            </div>
            <div class="down">
                <div class="downIpt">
                    <p>最大字数</p>
                    <input type="number" onblur="value=parseInt(value.replace(/[^\d]/g, 0))" ms-blur="addNum(1,$index)" />
                    <p>最小字数</p>
                    <input type="number" onblur="value=parseInt(value.replace(/[^\d]/g, 0))" ms-blur="addNum(2,$index)" />
                </div>
            </div>
        </div>

        <div class="body_iptBox hide" ms-class="hide: el.type!=3">
            <div class="left">
                <div class="checkBox">
                    <input class="check" type="checkbox" checked ms-change="chooseRequired($index)" />必填
                </div>
                <input type="text" class="typeText" placeholder="单选框" ms-blur="addTitle($index)" />
            </div>
            <div class="right">
                <div class="rightCon" ms-repeat="el.choice">
                    <input class="typeIpt" type="text" ms-attr-value="el" ms-attr-placeholder="'选项'+($index+1)" ms-blur="editOption($outer.$index,$index)" />
                    <div class="delete hide" ms-class="hide:!($first&&$last)" ms-click="$outer.$remove"></div>
                    <div class="delete hide" ms-class="hide:$first&&$last" ms-click="$remove"></div>
                    <div class="move1 hide" ms-class="hide:$first" ms-click="optionUp($outer.$model.el.choice,$outer.$index,$index)"></div>
                    <div class="move2 hide" ms-class="hide:$last" ms-click="optionDown($outer.$model.el.choice,$outer.$index,$index)"></div>
                </div>
                <div class="addBtn" ms-click="addOption($index)">
                    +添加选项
                </div>
            </div>
        </div>

        <div class="body_iptBox hide" ms-class="hide: el.type!=4">
            <div class="left">
                <div class="checkBox">
                    <input class="check" type="checkbox" checked ms-change="chooseRequired($index)" />必填
                </div>
                <input type="text" class="typeText" placeholder="多选框" ms-blur="addTitle($index)" />
            </div>
            <div class="right">
                <div class="rightCon" ms-repeat="el.choice">
                    <input class="typeIpt" type="text" ms-attr-value="el" ms-attr-placeholder="'选项'+($index+1)" ms-blur="editOption($outer.$index,$index)" />
                    <div class="delete hide" ms-class="hide:!($first&&$last)" ms-click="$outer.$remove"></div>
                    <div class="delete hide" ms-class="hide:$first&&$last" ms-click="$remove"></div>
                    <div class="move1 hide" ms-class="hide:$first" ms-click="optionUp($outer.$model.el.choice,$outer.$index,$index)"></div>
                    <div class="move2 hide" ms-class="hide:$last" ms-click="optionDown($outer.$model.el.choice,$outer.$index,$index)"></div>
                </div>
                <div class="addBtn" ms-click="addOption($index)">
                    +添加选项
                </div>
            </div>
        </div>

        <div class="body_iptBox hide" ms-class="hide: el.type!=5">
            <div class="up">
                <div class="checkBox">
                    <input class="check" type="checkbox" checked ms-change="chooseRequired($index)" />必填
                </div>
                <input type="text" class="typeText" placeholder="日期" ms-blur="addTitle($index)" />
                <input class="typeIpt" type="text" placeholder="请填写提示文字" ms-blur="addPrompt($index)" />
                <div class="delete" ms-click="$remove"></div>
            </div>
        </div>
    </div>

    <div class="bg hide" ms-class="hide:!bgShow"></div>

    <div class="hide" ms-class="hide:!formShow">
        <div class="formBox" ms-if="formShow">
            <p class="closeShow" ms-click="closePreview()">×</p>
            <div class="formConter">
                <div class="formConter_conBox" ms-repeat="form">
                    <div class="formConter_con" ms-if="el.type==1">
                        <div style="width: 100%;overflow: hidden">
                            <span class="formConter_con_icon hide" ms-class="hide: !el.required">*</span>
                            <span class="formConter_con_title" ms-html="el.title"></span>
                        </div>
                        <input type="text" ms-attr-placeholder="el.tip" />
                    </div>

                    <div class="formConter_con" ms-if="el.type==2">
                        <div style="width: 100%;overflow: hidden">
                            <span class="formConter_con_icon hide" ms-class="hide: !el.required">*</span>
                            <span class="formConter_con_title" ms-html="el.title"></span>
                        </div>
                        <textarea ms-attr-placeholder="el.tip"></textarea>
                    </div>

                    <div class="formConter_con" ms-if="el.type==3">
                        <div style="width: 100%;overflow: hidden">
                            <span class="formConter_con_icon hide" ms-class="hide: !el.required">*</span>
                            <span class="formConter_con_title" ms-html="el.title"></span>
                        </div>
                        <div class="singleBox" ms-repeat="el.choice">
                            <input type="radio" ms-attr-name="$outer.$model.el.title" /><span ms-html="el"></span>
                        </div>
                    </div>

                    <div class="formConter_con" ms-if="el.type==4">
                        <div style="width: 100%;overflow: hidden">
                            <span class="formConter_con_icon hide" ms-class="hide: !el.required">*</span>
                            <span class="formConter_con_title" ms-html="el.title"></span>
                        </div>
                        <div class="singleBox" ms-repeat="el.choice">
                            <input type="checkbox" ms-attr-name="$outer.$model.el.title" /><span ms-html="el"></span>
                        </div>
                    </div>

                    <div class="formConter_con" ms-if="el.type==5">
                        <div style="width: 100%;overflow: hidden">
                            <span class="formConter_con_icon hide" ms-class="hide: !el.required">*</span>
                            <span class="formConter_con_title" ms-html="el.title"></span>
                        </div>
                        <input type="text" ms-attr-placeholder="el.tip" class="dateTime" onclick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>

<script>
    require(['index'], function(model){


        avalon.scan();
    });
</script>
#### JS code
```javascript
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

