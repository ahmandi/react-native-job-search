import { StyleProp, ViewStyle, TextStyle, ImageStyle } from 'react-native';

declare module './search' {
	interface SearchStyles {
		container: StyleProp<ViewStyle>;
		searchTitle: StyleProp<TextStyle>;
		noOfSearchedJobs: StyleProp<TextStyle>;
		loaderContainer: StyleProp<ViewStyle>;
		footerContainer: StyleProp<ViewStyle>;
		paginationButton: StyleProp<ViewStyle>;
		paginationImage: StyleProp<ImageStyle>;
		paginationTextBox: StyleProp<ViewStyle>;
		paginationText: StyleProp<TextStyle>;
		// Add other styles here
	}

	const styles: SearchStyles;
	export default styles;
}
