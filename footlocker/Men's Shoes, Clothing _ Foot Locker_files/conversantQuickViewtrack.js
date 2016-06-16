$(document).ready(function(e){
    $('#endecaResultsWrapper, #shoppingcart_container').on('trackquickviewopen', function(event,data){
        tagMgt.page_name = 'product_detail';
        tagMgt.banner = data.banner;
        tagMgt.brand = data.brand;
        tagMgt.gender = data.gender;
        tagMgt.product_image = data.img_url;
        tagMgt.language = data.language;
        tagMgt.matchback_id = data.matchback_id;
        tagMgt.page_id = data.page_id;
        tagMgt.product_sku = data.product_sku;
        tagMgt.product_style = data.product_style;
        tagMgt.sport = data.sport;
        vendorTracking.CallVendors();
    });

    $('#endecaResultsWrapper, #shoppingcart_container').on('trackaddtocart', function(event,data){
        var tempObj = {
            SKU:data.item,
            LISTPRICE:data.amount,
            QTY:data.quantity,
            DISCOUNTPRICE:data.discount
        }
        tagMgt.page_name = 'cart';
        tagMgt.cart_lines = [];
        tagMgt.cart_lines.push(tempObj);
        vendorTracking.CallVendors();
    });
});

