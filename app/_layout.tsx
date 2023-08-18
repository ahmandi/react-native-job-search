import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

const Layout: React.FC = () => {
	const [fontsLoaded] = useFonts({
		DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
		DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
		DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	useEffect(() => {
		if (fontsLoaded) {
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) return null;

	return (
		<View onLayout={onLayoutRootView}>
			<Stack />
		</View>
	);
};

export default Layout;
