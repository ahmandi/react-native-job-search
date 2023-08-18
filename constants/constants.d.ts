declare module './constants' {
	const images: {
		[key: string]: string;
		// Add other image properties here
	};

	const icons: {
		[key: string]: string;
		// Add other icon properties here
	};

	const COLORS: {
		primary: string;
		secondary: string;
		tertiary: string;
		gray: string;
		gray2: string;
		white: string;
		lightWhite: string;
	};

	const FONT: {
		bold: string;
		medium: string;
		regular: string;
	};

	const SIZES: {
		small: number;
		medium: number;
		large: number;
		xSmall: number;
		xLarge: number;
		xxLarge: number;
	};

	type Shadow = {
		shadowColor: string;
		shadowOffset: {
			width: number;
			height: number;
		};
		shadowOpacity: number;
		shadowRadius: number;
		elevation: number;
	};

	const SHADOWS: { [key: string]: Shadow } = {
		small: {
			shadowColor: '#000',
			shadowOffset: {
				width: 0,
				height: 2,
			},
			shadowOpacity: 0.25,
			shadowRadius: 3.84,
			elevation: 2,
		},
		medium: {
			shadowColor: '#000',
			shadowOffset: {
				width: 0,
				height: 2,
			},
			shadowOpacity: 0.25,
			shadowRadius: 5.84,
			elevation: 5,
		},
	};

	export { images, icons, COLORS, FONT, SIZES, SHADOWS };
}
