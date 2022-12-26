import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { memo } from "react";

const SvgComponent = (props: any) => (
<Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M5 8.33322V6.66655C5 3.90822 5.83333 1.66655 10 1.66655C14.1667 1.66655 15 3.90822 15 6.66655V8.33322" stroke="#E0E0E0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M9.99953 15.4167C11.1501 15.4167 12.0829 14.4839 12.0829 13.3333C12.0829 12.1827 11.1501 11.25 9.99953 11.25C8.84894 11.25 7.9162 12.1827 7.9162 13.3333C7.9162 14.4839 8.84894 15.4167 9.99953 15.4167Z" stroke="#E0E0E0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M14.1662 18.3335H5.83286C2.49953 18.3335 1.6662 17.5001 1.6662 14.1668V12.5001C1.6662 9.16678 2.49953 8.33345 5.83286 8.33345H14.1662C17.4995 8.33345 18.3329 9.16678 18.3329 12.5001V14.1668C18.3329 17.5001 17.4995 18.3335 14.1662 18.3335Z" stroke="#E0E0E0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>
);

const LockIcon = memo(SvgComponent);
export default LockIcon;
