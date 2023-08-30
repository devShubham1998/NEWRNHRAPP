export const colors = (themeFromContext?: any) => {
  if (
    themeFromContext === undefined ||
    themeFromContext?.userTheme?.role !== 'coach'
  ) {
    return {
      primaryColor: '#059B9B',
      backgroundColor: '#FFFFFF',
      lightPrimaryColor: '#DAF6F4',
      darkGreen: '#4BACB7',
      white: '#FFFFFF',
      black: '#000000',
      primaryColorOpacity: '#D9F0F0',

      disableBtnColor: 'rgba(5, 155, 155, 0.5)',
      disableTextInput: '#f3f5fa',

      textColorPrimary: '#3E3E3E',
      textInputBorder: '#666666',

      passwordValidationPrimary: '#6A6A6A',
      passwordValidationDanger: '#F05A68',

      textPrimary: '#4D4F54',
      textDark: '#0D0D0D',
      textSecondary: '#666666',
      textInputColor: '#1C1B1F',
      textInputColorDisable: '#666666',
      textGray: '#777777',

      border: '#666666',
      borderColor: '#F0F0F0',
      borderColor2: '#E7E7E7',
      centerBorder: '#E4E5EA',
      greyLight: '#6E727A',
      fadeGrey: '#F9F9F9',
      blackColor: '#000000',
      shadesGreen: '#D9F0F0',
      fadeGreyText: '#4D4F54',

      borderColor1: '#4D4F5433',
      lineColor: '#EEEEEE',
      subHeadingColor: '#777777',
      danger: '#FF0000',
      container: '#f9f7f5',

      error: '#F05A68',
      ligtGrey: '#797680',
      grey: '#e9e9eb',
      success: '#56E35B',
      tableHeader: '#F1F1F1',
    };
  } else {
    return {
      primaryColor: '#695CD4',
      lightPrimaryColor: '#DAF6F4',
      darkGreen: '#4BACB7',
      white: '#FFFFFF',
      black: '#000000',
      primaryColorOpacity: '#EFEDFF',

      disableBtnColor: 'rgba(105, 92, 212, 0.5)',
      disableTextInput: '#f3f5fa',

      textColorPrimary: '#3E3E3E',
      textInputBorder: '#666666',

      passwordValidationPrimary: '#6A6A6A',
      passwordValidationDanger: '#F05A68',

      textPrimary: '#4D4F54',
      textDark: '#0D0D0D',
      textSecondary: '#666666',
      textInputColor: '#1C1B1F',
      textInputColorDisable: '#666666',
      textGray: '#777777',

      border: '#666666',
      borderColor: '#F0F0F0',

      greyLight: '#6E727A',
      fadeGrey: '#F9F9F9',
      blackColor: '#000000',
      shadesGreen: '#D9F0F0',
      fadeGreyText: '#4D4F54',
      grey: '#e9e9eb',
      borderColor1: '#4D4F5433',
      lineColor: '#EEEEEE',
      subHeadingColor: '#777777',
      danger: '#FF0000',
      container: '#f9f7f5',

      error: '#F05A68',
      success: '#56E35B',
      tableHeader: '#F1F1F1',
    };
  }
};
