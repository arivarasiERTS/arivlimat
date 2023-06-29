import React, { useState } from 'react';
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';

const isAndroid = Platform.os === 'android';

// Text/Background color contrast ratios need to be least 4.5:1
const enableButtonColor = '#CFE7DD';
const enableButtonTextColor = '#073617';
const disableButtonColor = '#FFE5D1';
const disableButtonTextColor = '#56280B';

const editableTextInputColor = '#494949';
const focusedInputColor = '#0D12B9';
// Disabled elements do not need to follow color contrast requirements
const disabledTextInputColor = '#BBB';
// Touchable elements should be at least 48 x 48
const minimumTouchableSize = 48;

const App = ({
  label = 'Email',
  inputValue = '',
  placeholderText = 'example@domain.com',
  accessibilityLabel = 'Enter email input field',
}) => {
  const [editable, setEditable] = useState(true);
  const [isFocused, setFocus] = useState(false);
  const [value, setValue] = useState(inputValue);

  const textInputColor = editable
    ? editableTextInputColor
    : disabledTextInputColor;
  const secondaryButtonColor = editable
    ? disableButtonTextColor
    : enableButtonTextColor;
  const buttonColor = editable ? disableButtonColor : enableButtonColor;

  const styles = StyleSheet.create({
    view: {
      marginHorizontal: 20,
      justifyContent: 'center',
      height: '100%',
    },
    button: {
      height: minimumTouchableSize,
      width: '100%',
      color: 'white',
      backgroundColor: buttonColor,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      borderColor: secondaryButtonColor,
      borderWidth: 1,
    },
    buttonText: {
      color: secondaryButtonColor,
      fontSize: 22,
      textTransform: 'uppercase',
    },
    textInput: { marginTop: 16 },
    label: { color: isFocused ? focusedInputColor : textInputColor },
    input: {
      backgroundColor: 'white',
      padding: 8,
      height: minimumTouchableSize,
      width: '100%',
      borderColor: isFocused ? focusedInputColor : textInputColor,
      borderWidth: isFocused ? 2 : 1,
      borderRadius: 4,
      marginTop: 8,
    },
  });

  const accessibilityState = { disabled: !editable };

  return (
    <View style={styles.view}>
      <View>
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityState={accessibilityState}
          accessibilityHint={
            editable
              ? 'Press to try out disabled text input state'
              : 'Press to try out editable text input state'
          }
          onPress={() => setEditable(!editable)}
          style={styles.button}>
          <Text style={styles.buttonText}>
            {editable ? 'Disable Text Input' : 'Enable Text Input'}
          </Text>
        </TouchableOpacity>

        {/*start of accessible input*/}
        <View
          accessible
          style={styles.textInput}>
          <Text style={styles.label}>{label}</Text>
          <TextInput
            value={value}
            onChangeText={(text) => setValue(text)}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            editable={editable}
            placeholder={placeholderText}
            placeholderTextColor={textInputColor}
            style={styles.input}
            accessibilityState={accessibilityState}
            accessibilityLabel={
              isAndroid
                ? accessibilityLabel
                : `${accessibilityLabel}${!editable ? ': disabled!' : ''}`
            }
          />
        </View>
      </View>
    </View>
  );
};

export default App;
