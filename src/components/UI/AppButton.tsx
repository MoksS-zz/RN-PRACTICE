import React, {ComponentType} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  TouchableOpacityProps,
  TouchableNativeFeedbackProps
} from 'react-native';
import AppTextBold from './AppTextBold';
import { THEME } from '../../theme';

interface AppButtonProps {
  children: React.ReactNode;
  onPress(): void;
  color?: string;
}

function AppButton({
  children,
  onPress,
  color = THEME.MAIN_COLOR,
}: AppButtonProps) {
  const Wrapper: ComponentType<TouchableOpacityProps | TouchableNativeFeedbackProps> =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <Wrapper activeOpacity={0.7} onPress={onPress}>
      <View style={{ ...styles.button, backgroundColor: color }}>
        <AppTextBold style={styles.text}>{children}</AppTextBold>
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});

export default AppButton;
