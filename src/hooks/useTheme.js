import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const darkTheme = {
	background: "#0D2240",
	black: "#000",
	primary: "#1D68FF",
	primaryLight: "#5E92FC",
	secondary: "#000000",
	white: "#fff",
};

const lightTheme = {
	...darkTheme,
	background: "#fff",
	primary: "#1D68FF",
	secondary: "#E8EFFF",
};

export default function useTheme() {
	const dark = useSelector((state) => state.themeSlice.dark);

	const [colors, setColors] = useState(darkTheme);

	useEffect(() => {
		if (dark) {
			setColors(darkTheme);
		} else {
			setColors(lightTheme);
		}
	}, [dark]);

	return colors;
}
