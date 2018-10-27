//几星好评
function fiveStarBytip() {
    $(".five-star").each(function(index, element) {
        let _this = $(this);
        let _num = $(this).attr("tip");
        let width = Math.min(5, Math.max(0, _num)) * 20;
        _this.append('<div class="star-gray flex_row">' +
            '<i class="tcustom-icon icon-star-gray"></i>' +
            '<i class="tcustom-icon icon-star-gray"></i>' +
            '<i class="tcustom-icon icon-star-gray"></i>' +
            '<i class="tcustom-icon icon-star-gray"></i>' +
            '<i class="tcustom-icon icon-star-gray"></i>' +
            '</div>' +
            '<div class="star-yellow flex_row" style="width:' + width + 'px">' +
            '<i class="tcustom-icon icon-star-yellow"></i>' +
            '<i class="tcustom-icon icon-star-yellow"></i>' +
            '<i class="tcustom-icon icon-star-yellow"></i>' +
            '<i class="tcustom-icon icon-star-yellow"></i>' +
            '<i class="tcustom-icon icon-star-yellow"></i>' +
            '</div>')
    });
}

//左右滑动插件
function bindTranslatePlugin() {
    let plugin = $(".translate-plugin");
    let arrow = plugin.find(".translate-arrow i");
    arrow.off().on("click", function() {
        let _this = $(this);
        let _this_parent = $(this).parent();
        let _scroll_con = _this_parent.siblings(".translate-scroll");
        let _scroll = _scroll_con.find("ul.flex_row");
        let data_translate = _scroll.attr("data-translate");
        let _scroll_item = _scroll.find("li.translate-scroll-item");
        let translate_x = parseFloat(_scroll_item.width()) + 20; //移动的距离
        let all_translate_x = (_scroll_item.length - 4) * translate_x;
        if (_this_parent.hasClass("translate-left")) { //向左移动

            data_translate = Math.min(0, parseFloat(data_translate) + translate_x);
            _scroll.attr("data-translate", data_translate)
            _scroll.css({
                "transform": "translate(" + data_translate + "px,0)"
            })
        } else if (_this_parent.hasClass("translate-right")) { //向右移动

            data_translate = Math.max(-all_translate_x, parseFloat(data_translate) - translate_x);
            _scroll.attr("data-translate", data_translate)
            _scroll.css({
                "transform": "translate(" + data_translate + "px,0)"
            })
        }

    })
}

//Get this design on other amazing products
function bindDetailCategoryPro() {
    let category = $(".detail-category-pro .detail-category-item");
    let plugin = $(".detail-category-translate .translate-plugin")
    category.off().on("click", function(index, element) {
        let _this = $(this);
        let index_i = category.index(_this);
        _this.siblings().removeClass("select");
        _this.addClass("select");
        plugin.removeClass("show");
        plugin.eq(index_i).addClass("show")
    });
}