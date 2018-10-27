/* *
 * auth:quezhongjin
 * des:五星好评的控件
 * time:20181026
 * vesion:2.0
 *  */
;
(function($, window, document) {
    $.fn.pluginTcustomStar = function(opts) {
        var _that = $(this);
        var defaults = {
            star_width: 30, // 每个a的宽度
            ScoreGrade: 5, // a的个数
            background: "#fff",
            types: [
                "very poor", //很差
                "poor", //差
                "generally", //一般
                "good", //好
                "very good" //很好
            ],
            nameScore: "plugin_score", //得分
            parent: "plugin_star", //星星
            input: "plugin_input_val" //满意程度
        };
        var options = $.extend({}, defaults, opts);
        init.call(_that, options);
    }
    var init = function(opt) {
        var _this = $(this);
        var _score = method.getObjectByClass.call(_this, opt.nameScore); //得分对象元素
        var _star_score = method.getObjectByClass.call(_this, opt.parent); //放星星的<div>对象元素
        var _input_val = method.getObjectByClass.call(_this, opt.input); //满意程度对象元素
        var _star_width = opt.star_width; // 每个a的宽度
        var _ScoreGrade = opt.ScoreGrade; // a的个数
        var now_cli = -1; //点击的索引
        var fen_cli = -1; //hover的索引
        var atu;
        var preA = (5 / _ScoreGrade);
        _star_score.width(_star_width * _ScoreGrade);
        _star_score.append('<div class="bigstar-gray flex_row">' +
            '<i class="tcustom-icon icon-bigstar-white"></i>' +
            '<i class="tcustom-icon icon-bigstar-white"></i>' +
            '<i class="tcustom-icon icon-bigstar-white"></i>' +
            '<i class="tcustom-icon icon-bigstar-white"></i>' +
            '<i class="tcustom-icon icon-bigstar-white"></i>' +
            '</div>' +
            '<div style="background:' + opt.background + '" class="bigstar-yellow flex_row">' +
            '<i class="tcustom-icon icon-bigstar-yellow"></i>' +
            '<i class="tcustom-icon icon-bigstar-yellow"></i>' +
            '<i class="tcustom-icon icon-bigstar-yellow"></i>' +
            '<i class="tcustom-icon icon-bigstar-yellow"></i>' +
            '<i class="tcustom-icon icon-bigstar-yellow"></i>' +
            '</div>')
        for (var i = 0; i < _ScoreGrade; i++) {
            var newSpan = $("<a class='plugin_star_a' href='javascript:void(0)'></a>"); // 不整体刷新页面的情况下，可以使用void(0)
            newSpan.css({ "left": 0, "width": _star_width * (i + 1), "z-index": _ScoreGrade + 10 - i }); // 设置a的宽度、层级
            newSpan.appendTo(_star_score);
        }
        _star_score.find("a.plugin_star_a").each(function(index, element) {
            var _this = $(this);
            _this.click(function() { // 点击事件
                now_cli = index; // 当前a的索引值
                show(index, $(this)) //  调用show方法
            });
            _this.mouseenter(function() {
                fen_cli = index;
                /* mouseenter事件(与 mouseover 事件不同，只有在鼠标指针穿过被选元素时，
                才会触发 mouseenter 事件。如果鼠标指针穿过任何子元素，同样会触发 mouseover 事件。) */
                show(index, $(this));
            });
            _this.mouseleave(function() { // mouseleave事件 
                show(now_cli, $(this));
            });

        });
        // show方法
        var show = function(num, obj) {
            var n = parseInt(num) + 1;
            var lefta = n * _star_width;
            _star_score.find(".bigstar-yellow").css({ "width": lefta + "px" });
            if (num != -1) {
                _score.text(+n + "分 " + opt.types[parseInt(num)]);
                _score.show();;
            } else {
                _score.text("");
                _score.hide();
            }
            _input_val.val(n);
        }
    };
    var method = {
        getObjectByClass: function(className) {
            var _this = $(this);
            return _this.find("." + className);
        },
        getObjectById: function(idNmae) {
            var _this = $(this);
            return _this.find("#" + idNmae);
        },

    }
})(jQuery, window, document);