import { useFormikContext } from "formik/";
import { StyleSheet, View } from "react-native";
import React from "react";

import TextInput from "../TextInput";
import ErrorMessage from "./ErrorMessage";

export default function FormField({ name, icon, onIconPress, ...otherProps }) {
	const { values, handleChange, setFieldTouched, touched, errors } =
		useFormikContext();
	return (
		<>
			<TextInput
				onBlur={() => setFieldTouched(name)}
				onChangeText={handleChange(name)}
				value={values[name]}
				onIconPress={onIconPress}
				icon={icon}
				{...otherProps}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}
