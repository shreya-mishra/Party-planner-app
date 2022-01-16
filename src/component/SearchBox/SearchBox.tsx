import React, {useState} from 'react';
import {Text, TextInput, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Images from '../../constant/Images/Images';
import Strings from '../../constant/lang/en';
import {SearchBoxStyle} from '../../styles/GlobalStyles';

const SearchBox = () => {
  const [text, onChangeText] = useState('');

  return (
    <SafeAreaView>
      <View style={SearchBoxStyle.inputContainer}>
        <TextInput
          style={SearchBoxStyle.input}
          onChangeText={onChangeText}
          value={text}
          placeholder={Strings.Placeholder_Text}
        />
        <TouchableOpacity onPress={() => console.log('searched something')}>
          <Image style={SearchBoxStyle.searchIcon} source={Images.searchIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SearchBox;
