import { ScrollView, Text, View } from 'react-native';
import { styles } from './Styles/Styles';
import Ionicons from '@expo/vector-icons/Ionicons';

 
export const PopOutNav = () => {
  const navItems = [
    { id: '1', title: '' },
    { id: '2', title: <Ionicons name="chatbubbles-outline" size={32} color="green" /> },
    { id: '3', title: '' },
    { id: '4', title: '' },
    { id: '5', title: '' },
    { id: '6', title: '' },
    // Add more items as needed
  ];

  return (
    <>
      <View style={styles.PopOutNav}>
        <ScrollView>
          {navItems.map((item) => (
            <View style={styles.popOutNavItemCircle} key={item.id} >
              <Text >{item.title}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

 