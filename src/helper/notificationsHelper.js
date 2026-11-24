import { Alert } from 'react-native';

export const isExpoGo = true;

// alerta em tela nao precisa de permissao do sistema
export async function registerForLocalNotificationsAsync() {
  return true;
}

export async function triggerLocalNotification(title, body) {
  try {
    Alert.alert(
      `🔔 ${title}`,
      body,
      [{ text: 'OK', style: 'default' }],
      { cancelable: true }
    );
  } catch (error) {
    console.error('Erro ao exibir aviso:', error);
  }
}
