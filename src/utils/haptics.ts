import * as Haptics from 'expo-haptics';

export async function vibrarPulsacion(): Promise<void> {
	try {
		await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
	} catch (error) {
		//ignoar errores
	}
}

export async function vibrarError(): Promise<void> {
	try {
		await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
	} catch (error) {
		//ignorar
	}
}

export async function vibrarExito(): Promise<void> {
	try {
		await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
	} catch (error) {
		//ignorar
	}
}

export async function vibrarRecord(): Promise<void> {
	try {
		await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
		await new Promise((resolve) => {
			setTimeout(resolve, 200);
		});
		await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
	} catch (error) {
		//ignorar
	}
}
