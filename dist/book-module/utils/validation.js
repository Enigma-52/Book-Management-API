"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidDate = void 0;
function isValidDate(value) {
    if (!(value instanceof Date) || isNaN(value.getTime())) {
        return false;
    }
    return true;
}
exports.isValidDate = isValidDate;
//# sourceMappingURL=validation.js.map