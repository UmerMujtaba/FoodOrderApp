import { View, Text,Image } from 'react-native'
import React,{useEffect,useState} from 'react'
import { supabase } from '../../../utils/supabase';

const ChatScreen= ()=> {
  const [recommendations, setRecommendations] = useState([]);

  
  const fetchRecommendations = async () => {
    const { data, error } = await supabase
      .from('item_counts')
      .select('*')
      .gt('count', 5); // Fetch items with count greater than 5
  
    if (error) {
      console.error('Error fetching recommendations:', error);
      return [];
    }
  
    return data;
  };

  useEffect(() => {
    const getRecommendations = async () => {
      const data = await fetchRecommendations();
      setRecommendations(data); // Set the fetched data to state
      console.log("🚀 ~ getRecommendations ~ data:", data)

    };
   
    
  
    getRecommendations();
  }, []);

  return (
    <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
    <Text>Recommendations:</Text>
    {recommendations.map((item) => (
      <View key={item.item_name}>
        <Text>{item.item_name}: {item.count}</Text>
        <Image source={item.image} style={{resizeMode:'contain',width:150,height:150}} />
        <Text>{item.description}</Text>
        <Text>{item.price}</Text>
      </View>
    ))}
  </View>
  )
}
export default ChatScreen