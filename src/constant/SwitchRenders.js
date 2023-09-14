import { translate } from "../utility"

export const getWeekDays = (key) => {
    switch (key) {
        case 'Sat':
            return translate('common.sat')
        case 'Sun':
            return translate('common.sat')
        case 'Mon':
            return translate('common.sat')
        case 'Tue':
            return translate('common.sat')
        case 'Wed':
            return translate('common.sat')
        case 'Thu':
            return translate('common.sat')
        case 'Fri':
            return translate('common.sat')
        default:
            return null;
    }
}


export const getMonths = (key) => {
    switch (key) {
        case 'Jan':
            return translate('common.sat')
        case 'Feb':
            return translate('common.sat')
        case 'Mar':
            return translate('common.sat')
        case 'Apr':
            return translate('common.sat')
        case 'May':
            return translate('common.sat')
        case 'Jun':
            return translate('common.sat')
        case 'Jul':
            return translate('common.sat')
        case 'Aug':
            return translate('common.sat')
        case 'Sep':
            return translate('common.sat')
        case 'Oct':
            return translate('common.sat')
        case 'Nov':
            return translate('common.sat')
        case 'Dec':
            return translate('common.sat')
        default:
            return null;
    }
}


export const getEnglishTitle = (key) => {
    switch (key) {
        case 'variant_size':
            return 'Size'
        case 'variant_color':
            return 'Color'
        case 'variant_style':
            return 'Style'
        case 'variant_model':
            return 'Modal'
        case 'variant_material':
            return 'Material'
        case 'platform':
            return 'Platform'
        case 'edition':
            return 'Edition'
        case 'configuration':
            return 'Configuration'
        case 'variant_book':
            return 'Book'
        default:
            return null;
    }
}

export const getArabicTitle = (key) => {
    switch (key) {
        case 'platform_arabic':
            return 'منصة'
        case 'variant_book_arabic':
            return 'كتاب'
        case 'variant_color_arabic':
            return 'لون'
        // case 'variant_item_package_quantity_arabic':
        //     return 'كمية حزمة السلعة'
        case 'variant_material_arabic':
            return 'مادة'
        case 'variant_model_arabic':
            return 'مشروط'
        case 'variant_size_arabic':
            return 'مقاس'
        case 'variant_style_arabic':
            return 'أسلوب'
        default:
            return null;
    }
}