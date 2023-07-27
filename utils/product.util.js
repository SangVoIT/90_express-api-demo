'use strict'
module.exports = {
    convertToProduct: (src) => {
        if  (src=== null) return null;
        let result = {};
        result.id = src.id;
        result.name = src.name;
        result.type = src.type;
        result.description = src.description;
        result.price = src.price;
        result. modifyBy = src.modify_by;
        result.createDate = src.create_date;
        result.updateDate = src.update_date;
        return result;
    },
}