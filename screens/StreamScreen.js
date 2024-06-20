import React, { useState, useRef } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const StreamScreen = () => {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello!', sender: 'me' },
    { id: 2, text: 'How are you?', sender: 'me' },
    { id: 3, text: 'I\'m good, thanks!', sender: 'you' },
    { id: 4, text: 'What about you?', sender: 'me' },
    { id: 5, text: 'I\'m doing great too!', sender: 'you' },
  ]);

  const flatListRef = useRef(null);

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, { id: messages.length + 1, text: inputText, sender: 'me' }]);
      setInputText('');
      // Scroll to bottom when a new message is sent
      flatListRef.current.scrollToEnd({ animated: true });
    }
  };

  const renderMessage = ({ item }) => (
    <View style={[styles.messageContainer, item.sender === 'me' ? styles.senderMessage : styles.receiverMessage]}>
      <Text style={[styles.messageText, item.sender === 'me' ? styles.senderText : styles.receiverText]}>{item.text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.messagesContainer}
        inverted
      />
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type your message..."
          placeholderTextColor="#999"
          returnKeyType="send"
          onSubmitEditing={handleSendMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  messagesContainer: {
    flexGrow: 1,
  },
  messageContainer: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    maxWidth: '80%',
  },
  senderMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#4CAF50', // Green color for sender
  },
  receiverMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#fff', // White color for receiver
  },
  messageText: {
    fontSize: 16,
  },
  senderText: {
    color: '#fff', // White text for sender
  },
  receiverText: {
    color: '#000', // Black text for receiver
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 16,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StreamScreen;
