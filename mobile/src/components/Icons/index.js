import React from 'react';
import { Svg, Path } from 'react-native-svg';

import color from '../../utils/colors';

export const EditSvg = ({ onPress }) => (
  <Svg onPress={onPress} viewBox="0 0 24 24" width="34" height="34">
    <Path
      d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"
      fill={color.black}
    />
  </Svg>
);

export const DeleteSvg = ({ onPress }) => (
  <Svg onPress={onPress} viewBox="0 0 24 24" width="34" height="34">
    <Path
      d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
      fill={color.black}
    />
  </Svg>
);

export const LogoSvg = () => (
  <Svg viewBox="0 0 347 87" style={{ aspectRatio: 4 }}>
    <Path
      d="M111.621 62V22.1875H122.859C126.323 22.1875 129.385 22.9531 132.047 24.4844C134.708 26.0156 136.759 28.194 138.199 31.0195C139.658 33.8451 140.396 37.0898 140.414 40.7539V43.2969C140.414 47.0521 139.685 50.3424 138.227 53.168C136.786 55.9935 134.717 58.1628 132.02 59.6758C129.34 61.1888 126.214 61.9635 122.641 62H111.621ZM116.871 26.5078V57.707H122.395C126.441 57.707 129.586 56.4492 131.828 53.9336C134.089 51.418 135.219 47.8359 135.219 43.1875V40.8633C135.219 36.3424 134.152 32.8333 132.02 30.3359C129.905 27.8203 126.897 26.5443 122.996 26.5078H116.871ZM159.855 62.5469C155.845 62.5469 152.582 61.2344 150.066 58.6094C147.551 55.9661 146.293 52.4388 146.293 48.0273V47.0977C146.293 44.1628 146.849 41.5469 147.961 39.25C149.091 36.9349 150.659 35.1302 152.664 33.8359C154.688 32.5234 156.875 31.8672 159.227 31.8672C163.073 31.8672 166.062 33.1341 168.195 35.668C170.328 38.2018 171.395 41.8294 171.395 46.5508V48.6562H151.352C151.424 51.5729 152.272 53.9336 153.895 55.7383C155.535 57.5247 157.613 58.418 160.129 58.418C161.915 58.418 163.428 58.0534 164.668 57.3242C165.908 56.5951 166.992 55.6289 167.922 54.4258L171.012 56.832C168.533 60.6419 164.814 62.5469 159.855 62.5469ZM159.227 36.0234C157.185 36.0234 155.471 36.7708 154.086 38.2656C152.701 39.7422 151.844 41.8203 151.516 44.5H166.336V44.1172C166.19 41.5469 165.497 39.5599 164.258 38.1562C163.018 36.7344 161.341 36.0234 159.227 36.0234ZM186.652 55.1367L193.98 32.4141H199.148L188.539 62H184.684L173.965 32.4141H179.133L186.652 55.1367ZM219.41 45.8945H210.059V62H204.781V22.1875H217.961C222.445 22.1875 225.891 23.2083 228.297 25.25C230.721 27.2917 231.934 30.263 231.934 34.1641C231.934 36.6432 231.259 38.8034 229.91 40.6445C228.579 42.4857 226.72 43.862 224.332 44.7734L233.684 61.6719V62H228.051L219.41 45.8945ZM210.059 41.6016H218.125C220.732 41.6016 222.801 40.9271 224.332 39.5781C225.882 38.2292 226.656 36.4245 226.656 34.1641C226.656 31.7031 225.918 29.8164 224.441 28.5039C222.983 27.1914 220.868 26.526 218.098 26.5078H210.059V41.6016ZM256.789 62C256.497 61.4167 256.26 60.3776 256.078 58.8828C253.727 61.3255 250.919 62.5469 247.656 62.5469C244.74 62.5469 242.342 61.7266 240.465 60.0859C238.605 58.4271 237.676 56.3307 237.676 53.7969C237.676 50.7161 238.842 48.3281 241.176 46.6328C243.527 44.9193 246.827 44.0625 251.074 44.0625H255.996V41.7383C255.996 39.9701 255.467 38.5664 254.41 37.5273C253.353 36.4701 251.794 35.9414 249.734 35.9414C247.93 35.9414 246.417 36.3971 245.195 37.3086C243.974 38.2201 243.363 39.3229 243.363 40.6172H238.277C238.277 39.1406 238.797 37.7188 239.836 36.3516C240.893 34.9661 242.315 33.8724 244.102 33.0703C245.906 32.2682 247.884 31.8672 250.035 31.8672C253.444 31.8672 256.115 32.724 258.047 34.4375C259.979 36.1328 260.982 38.4753 261.055 41.4648V55.082C261.055 57.7982 261.401 59.9583 262.094 61.5625V62H256.789ZM248.395 58.1445C249.98 58.1445 251.484 57.7344 252.906 56.9141C254.328 56.0938 255.358 55.0273 255.996 53.7148V47.6445H252.031C245.833 47.6445 242.734 49.4583 242.734 53.0859C242.734 54.6719 243.263 55.9115 244.32 56.8047C245.378 57.6979 246.736 58.1445 248.395 58.1445ZM267.754 46.9609C267.754 42.4219 268.829 38.776 270.98 36.0234C273.132 33.2526 275.948 31.8672 279.43 31.8672C282.893 31.8672 285.637 33.0521 287.66 35.4219V20H292.719V62H288.07L287.824 58.8281C285.801 61.3073 282.984 62.5469 279.375 62.5469C275.948 62.5469 273.15 61.1432 270.98 58.3359C268.829 55.5286 267.754 51.8646 267.754 47.3438V46.9609ZM272.812 47.5352C272.812 50.8893 273.505 53.5143 274.891 55.4102C276.276 57.306 278.19 58.2539 280.633 58.2539C283.841 58.2539 286.184 56.8138 287.66 53.9336V40.3438C286.147 37.5547 283.823 36.1602 280.688 36.1602C278.208 36.1602 276.276 37.1172 274.891 39.0312C273.505 40.9453 272.812 43.7799 272.812 47.5352ZM318.859 62C318.568 61.4167 318.331 60.3776 318.148 58.8828C315.797 61.3255 312.99 62.5469 309.727 62.5469C306.81 62.5469 304.413 61.7266 302.535 60.0859C300.676 58.4271 299.746 56.3307 299.746 53.7969C299.746 50.7161 300.913 48.3281 303.246 46.6328C305.598 44.9193 308.897 44.0625 313.145 44.0625H318.066V41.7383C318.066 39.9701 317.538 38.5664 316.48 37.5273C315.423 36.4701 313.865 35.9414 311.805 35.9414C310 35.9414 308.487 36.3971 307.266 37.3086C306.044 38.2201 305.434 39.3229 305.434 40.6172H300.348C300.348 39.1406 300.867 37.7188 301.906 36.3516C302.964 34.9661 304.385 33.8724 306.172 33.0703C307.977 32.2682 309.954 31.8672 312.105 31.8672C315.514 31.8672 318.185 32.724 320.117 34.4375C322.049 36.1328 323.052 38.4753 323.125 41.4648V55.082C323.125 57.7982 323.471 59.9583 324.164 61.5625V62H318.859ZM310.465 58.1445C312.051 58.1445 313.555 57.7344 314.977 56.9141C316.398 56.0938 317.428 55.0273 318.066 53.7148V47.6445H314.102C307.904 47.6445 304.805 49.4583 304.805 53.0859C304.805 54.6719 305.333 55.9115 306.391 56.8047C307.448 57.6979 308.806 58.1445 310.465 58.1445ZM345.355 36.9531C344.59 36.8255 343.76 36.7617 342.867 36.7617C339.549 36.7617 337.298 38.1745 336.113 41V62H331.055V32.4141H335.977L336.059 35.832C337.717 33.1888 340.069 31.8672 343.113 31.8672C344.098 31.8672 344.845 31.9948 345.355 32.25V36.9531Z"
      fill={color.black}
    />
    <Path
      d="M35.3861 43.0751C35.3827 44.1675 35.6069 45.2485 36.0445 46.2494C36.4822 47.2502 37.1235 48.1489 37.9277 48.8881C38.732 49.6273 39.6814 50.1908 40.7155 50.5427C41.7496 50.8945 42.8457 51.0271 43.9339 50.9318C45.0221 50.8365 46.0784 50.5155 47.0357 49.9893C47.9929 49.463 48.8299 48.7431 49.4934 47.8754C50.157 47.0076 50.6324 46.0112 50.8894 44.9495C51.1464 43.8878 51.1793 42.7842 50.9861 41.7091L82.8121 36.0991C83.3747 36.0028 83.9108 35.7897 84.386 35.4737C84.8612 35.1576 85.265 34.7456 85.5713 34.264C85.8776 33.7825 86.0798 33.2421 86.1646 32.6777C86.2495 32.1134 86.2153 31.5375 86.0641 30.9871C83.996 23.6708 80.0848 17.0077 74.7046 11.6356C69.3245 6.26355 62.6555 2.36225 55.3361 0.305137C54.7895 0.153686 54.2173 0.117661 53.6559 0.199353C53.0946 0.281045 52.5564 0.478666 52.0756 0.779646C51.5948 1.08063 51.1819 1.47838 50.8631 1.9476C50.5444 2.41682 50.3267 2.94725 50.2241 3.50514L44.6141 35.3311C43.4825 35.1249 42.3193 35.1706 41.2073 35.4652C40.0954 35.7597 39.062 36.2958 38.1809 37.0353C37.2997 37.7747 36.5925 38.6993 36.1094 39.7433C35.6263 40.7872 35.3794 41.9249 35.3861 43.0751V43.0751Z"
      fill={color.purple}
    />
    <Path
      d="M43.2481 86.3999C53.967 86.4144 64.3094 82.448 72.2698 75.2699C80.2303 68.0917 85.2416 58.2132 86.3321 47.55C86.3944 46.9843 86.3352 46.4119 86.1587 45.8709C85.9821 45.33 85.6921 44.8329 85.3081 44.413C84.9274 43.9899 84.4621 43.6515 83.9425 43.4194C83.4228 43.1874 82.8602 43.067 82.2911 43.066C82.0496 43.0666 81.8087 43.0884 81.5711 43.131C80.6857 43.2927 79.8784 43.7421 79.2745 44.4095C78.6706 45.0768 78.3038 45.9249 78.2311 46.822C77.5362 53.4367 74.9821 59.7195 70.8644 64.9428C66.7468 70.1661 61.234 74.1165 54.9643 76.3365C48.6945 78.5566 41.9242 78.9555 35.4372 77.4872C28.9501 76.0189 23.0115 72.7434 18.3089 68.0398C13.6063 63.3362 10.3319 57.3969 8.86497 50.9095C7.39799 44.4221 7.79835 37.6519 10.0197 31.3827C12.241 25.1134 16.1925 19.6014 21.4167 15.4848C26.6409 11.3683 32.9242 8.81548 39.5391 8.12195C40.5773 8.02449 41.5385 7.53213 42.2243 6.74649C42.91 5.96086 43.268 4.94193 43.2242 3.90004C43.1805 2.85814 42.7384 1.87281 41.9892 1.14744C41.24 0.422065 40.2409 0.0120233 39.1981 0.00195312H38.7741C27.7496 1.17188 17.5932 6.52359 10.3952 14.9555C3.19732 23.3874 -0.494308 34.2578 0.0802398 45.3293C0.654788 56.4008 5.45179 66.8307 13.4838 74.4722C21.5159 82.1138 32.1718 86.3855 43.2581 86.408L43.2481 86.3999Z"
      fill={color.purple}
    />
    <Path
      d="M37.3611 26.2251C38.028 25.9839 38.6187 25.5696 39.0727 25.0249C39.5268 24.4802 39.8279 23.8245 39.9451 23.1251C40.0459 22.5348 40.0154 21.9295 39.8559 21.3523C39.6964 20.775 39.4117 20.24 39.0221 19.7851C38.6479 19.332 38.1787 18.9665 37.6477 18.7146C37.1167 18.4626 36.5368 18.3304 35.9491 18.3272C35.5031 18.3267 35.0603 18.4014 34.6391 18.5481C30.486 20.0015 26.7697 22.4851 23.8382 25.7664C20.9067 29.0476 18.8559 33.0191 17.8777 37.3091C16.8996 41.599 17.0262 46.067 18.2457 50.2947C19.4651 54.5224 21.7376 58.3714 24.8502 61.4814C27.9628 64.5914 31.8137 66.8605 36.0424 68.0764C40.2711 69.2923 44.7393 69.4151 49.0284 68.4334C53.3175 67.4516 57.2873 65.3974 60.566 62.4631C63.8448 59.5288 66.3252 55.8105 67.7751 51.6562C67.986 51.0589 68.0492 50.4195 67.9591 49.7926C67.8691 49.1657 67.6286 48.5699 67.2581 48.0562C66.8809 47.5228 66.3819 47.0872 65.8026 46.7855C65.2233 46.4837 64.5803 46.3245 63.9271 46.3211C63.6857 46.322 63.4448 46.3437 63.2071 46.3861C62.5077 46.5034 61.8521 46.8045 61.3073 47.2585C60.7626 47.7126 60.3484 48.3033 60.1071 48.9701C59.1106 51.8232 57.4063 54.3766 55.1538 56.3913C52.9013 58.406 50.1743 59.816 47.2282 60.4893C44.2822 61.1627 41.2134 61.0773 38.3093 60.2411C35.4053 59.405 32.7609 57.8454 30.624 55.7086C28.487 53.5717 26.9274 50.9274 26.0911 48.0234C25.2548 45.1194 25.1693 42.0506 25.8425 39.1045C26.5157 36.1584 27.9256 33.4314 29.9402 31.1788C31.9548 28.9262 34.5081 27.2218 37.3611 26.2251V26.2251Z"
      fill={color.purple}
    />
  </Svg>
);

export const MapSVG = () => (
  <Svg viewBox="0 0 24 24" height="24" width="24">
    <Path
      d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"
      fill={color.black}
    />
  </Svg>
);

export const MainSVG = () => (
  <Svg viewBox="0 0 24 24" height="24" width="24">
    <Path
      d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
      fill={color.black}
    />
  </Svg>
);

export const DevsSVG = () => (
  <Svg viewBox="0 0 24 24" height="24" width="24">
    <Path
      d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"
      fill={color.black}
    />
  </Svg>
);
