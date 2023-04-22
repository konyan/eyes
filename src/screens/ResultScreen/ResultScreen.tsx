import { useRoute } from '@react-navigation/native';
import { ResultScreenRouteProp } from '@routes';
import { useState } from 'react';
import { Linking, SafeAreaView, StatusBar, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { GradientButton, HeaderSection } from 'src/components';
import tw from 'twrnc';

const ResultScreen = () => {
  const [fbShareURL, setfbShareURL] = useState('https://reactnativecode.com');
  const [content, setContent] = useState('Hello, Welcome To our Website.');
  const route = useRoute<ResultScreenRouteProp>();
  const { result, question } = route.params;
  const { colors } = useTheme();

  const publishOnFB = () => {
    const params = [];
    if (fbShareURL) params.push('u=' + encodeURI(fbShareURL));
    if (content) params.push('quote=' + encodeURI(content));
    const url = 'https://www.facebook.com/sharer/sharer.php?' + params.join('&');

    Linking.openURL(url);
  };

  return (
    <SafeAreaView
      style={[
        tw`flex-1`,
        {
          marginTop: StatusBar.currentHeight,
          backgroundColor: colors.bg_primary,
        },
      ]}
    >
      <HeaderSection />
      <View style={tw`flex-1 items-center`}>
        <View testID="ques" style={tw`h-1/5 justify-center m-2`}>
          <Text variant="bodyMedium" style={[tw`text-center text-xl font-semibold  p-2`, { color: colors.primary }]}>
            {question}
          </Text>
        </View>
        <View testID="ans" style={tw`h-1/3 justify-center m-2	`}>
          <Text variant="bodyMedium" style={[tw`text-center text-2xl p-2 font-normal`, { color: colors.primary }]}>
            {result}
          </Text>
        </View>
        <GradientButton onPress={publishOnFB} text="မျှဝေမည်" />
      </View>
    </SafeAreaView>
  );
};

export default ResultScreen;
