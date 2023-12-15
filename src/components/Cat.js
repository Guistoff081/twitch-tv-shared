import React, {useState} from 'react';
import { Text } from "react-native";

const Cat = (props) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Image
        source={{
          uri: "https://reactnative.dev/docs/assets/p_cat1.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <Text>Hello,  I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}!</Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Pour me some milk, please!' : 'Thank you!'}
      />
    </View>
  );
};

export default Cat;
