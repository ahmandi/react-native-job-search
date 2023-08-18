import { StyleSheet } from 'react-native';

import { COLORS, SHADOWS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
	container: {
		marginTop: SIZES.small,
		marginBottom: SIZES.small / 2,
	},
	// @ts-ignore
	btn: (name: any, activeTab: any) => ({
		paddingVertical: SIZES.medium,
		paddingHorizontal: SIZES.xLarge,
		backgroundColor: name === activeTab ? COLORS.primary : '#F3F4F8',
		borderRadius: SIZES.medium,
		marginLeft: 2,
		...SHADOWS.medium,
		shadowColor: COLORS.white,
	}),
	// @ts-ignore
	btnText: (name: any, activeTab: any) => ({
		fontFamily: 'DMMedium',
		fontSize: SIZES.small,
		color: name === activeTab ? '#C3BFCC' : '#AAA9B8',
	}),
});

export default styles;