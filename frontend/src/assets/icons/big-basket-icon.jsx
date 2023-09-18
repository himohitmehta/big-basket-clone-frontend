import React from "react";

export default function BigBasketIcon() {
	return (
		<svg
			width="41"
			height="40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path fill="#F2F2F2" d="M0 0h41v40H0z"></path>
			<g clipPath="url(#bb-logo-small_svg__a)">
				<path fill="#fff" d="M-44-85H980v768H-44z"></path>
				<g filter="url(#bb-logo-small_svg__b)">
					<path fill="#fff" d="M0-6h936v56H0z"></path>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M5.99 0h28.068c3.285 0 6.039 2.705 6.039 5.942V34.01c0 3.285-2.754 5.99-6.039 5.99H5.99C2.705 40 0 37.295 0 34.01V5.942C0 2.705 2.705 0 5.99 0Z"
						fill="#A6CE39"
					></path>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M24.252 19.806c-.628-1.545-1.546-2.85-2.802-3.816-1.256-.966-2.706-1.45-4.445-1.45-1.256 0-2.415.242-3.478.725-1.063.483-1.98 1.256-2.56 2.174h-.049V5.024H5.701v29.903s4.83.58 4.976-2.512v-.483l.048.242c.097.241.29.483.58.918.386.434 1.014.917 1.98 1.352 1.015.435 2.223.628 3.817.628 1.74 0 3.188-.435 4.444-1.4 1.208-1.015 2.174-2.223 2.802-3.817.628-1.643.966-3.285.966-4.976-.096-1.836-.434-3.478-1.062-5.073Zm-5.652 9.42c-.725 1.257-1.788 1.788-3.237 1.788-1.015 0-1.836-.29-2.56-.821-.725-.628-1.305-1.401-1.643-2.367-.338-.966-.58-1.98-.58-3.044 0-1.063.242-2.125.58-3.091a5.094 5.094 0 0 1 1.642-2.32c.725-.627 1.546-.917 2.56-.917.967 0 1.788.29 2.465.821.628.58 1.11 1.353 1.449 2.319.29.966.435 1.98.435 3.14.048 1.836-.387 3.285-1.111 4.493Z"
						fill="#ED1C24"
					></path>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M17.776 5.024h3.188v9.566c-.966-.628-2.029-.967-3.188-.967V5.024ZM22.8 15.266c4.203-1.98 8.985.193 10.676 4.541a19.1 19.1 0 0 1 1.063 4.928c0 1.69-.338 3.333-.966 4.976-.628 1.594-1.595 2.802-2.802 3.816-1.256.966-2.706 1.401-4.445 1.401-1.594 0-2.802-.193-3.816-.628-.242-.097-.435-.193-.628-.29.724-.58 1.352-1.304 1.932-2.077.532.193 1.16.29 1.836.29 3.961 0 5.266-4.203 5.266-7.488 0-3.237-1.208-7.537-5.266-7.537-.58 0-1.16.097-1.69.29-.484-.724-1.064-1.352-1.692-1.932a5.26 5.26 0 0 1 .532-.29Z"
						fill="#000"
					></path>
				</g>
			</g>
			<defs>
				<clipPath id="bb-logo-small_svg__a">
					<path
						fill="#fff"
						transform="translate(-44 -85)"
						d="M0 0h1024v768H0z"
					></path>
				</clipPath>
				<filter
					id="bb-logo-small_svg__b"
					x="-60"
					y="-14.5"
					width="1056"
					height="89"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood
						floodOpacity="0"
						result="BackgroundImageFix"
					></feFlood>
					<feColorMatrix
						in="SourceAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					></feColorMatrix>
					<feOffset dy="8"></feOffset>
					<feGaussianBlur stdDeviation="8"></feGaussianBlur>
					<feColorMatrix values="0 0 0 0 0.376471 0 0 0 0 0.376471 0 0 0 0 0.376471 0 0 0 0.16 0"></feColorMatrix>
					<feBlend
						in2="BackgroundImageFix"
						result="effect1_dropShadow"
					></feBlend>
					<feColorMatrix
						in="SourceAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					></feColorMatrix>
					<feOffset dy="2"></feOffset>
					<feGaussianBlur stdDeviation="2"></feGaussianBlur>
					<feColorMatrix values="0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0.04 0"></feColorMatrix>
					<feBlend
						in2="effect1_dropShadow"
						result="effect2_dropShadow"
					></feBlend>
					<feBlend
						in="SourceGraphic"
						in2="effect2_dropShadow"
						result="shape"
					></feBlend>
				</filter>
			</defs>
		</svg>
	);
}
